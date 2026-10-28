/// <reference types="vitest/globals" />

import { EventEmitter } from "node:events";
import { StreamWatcher } from "../src/stream";
import { EventType } from "../src/types";
import type { Authenticator } from "../src/auth";
import type { EventHandler } from "../src/event";

class TestStream extends EventEmitter {
  private finished = false;

  override emit(event: string, ...args: unknown[]): boolean {
    if (event === "error" || event === "end") {
      if (this.finished) return false;
      this.finished = true;
    }
    return super.emit(event, ...args);
  }

  cancel() {
    this.emit("error", new Error("CANCELLED"));
  }
}

const streams: TestStream[] = [];
let refuseConnections = false;

vi.mock("../src/proto", () => ({
  getApiServiceClient: vi.fn(),
  getSendEventRequestType: vi.fn(),
  getStreamServiceClient: vi.fn(
    () =>
      class MockStreamClient {
        subscribeEvents() {
          const stream = new TestStream();
          streams.push(stream);
          setImmediate(() => {
            if (refuseConnections) {
              stream.emit("error", new Error(`refused #${streams.length}`));
            } else {
              stream.emit("metadata");
            }
          });
          return stream;
        }
        close() {}
      }
  ),
}));

function makeWatcher(maxRetries?: number) {
  return new StreamWatcher({
    streamAddress: "localhost:443",
    authenticator: { getAccessToken: vi.fn().mockResolvedValue("token") },
    maxRetries,
  });
}

const flush = () => new Promise<void>((r) => setImmediate(r));

async function waitForStreams(count: number) {
  while (streams.length < count) await flush();
  await flush();
}

describe("StreamWatcher", () => {
  beforeEach(() => {
    streams.length = 0;
    refuseConnections = false;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("dispatches events to the handler and skips PING", async () => {
    const handler: EventHandler = { handle: vi.fn() };
    const watcher = makeWatcher();
    const watching = watcher.watch(handler);
    await waitForStreams(1);

    streams[0]!.emit("data", {
      events: [
        { eventId: "ping", eventType: EventType.PING },
        { eventId: "e1", eventType: EventType.POST_CREATED },
        { eventId: "e2", eventType: EventType.CHAT_MESSAGE_RECEIVED },
      ],
    });
    await flush();

    const handled = vi
      .mocked(handler.handle)
      .mock.calls.map(([e]) => e.eventId);
    expect(handled).toEqual(["e1", "e2"]);

    watcher.stop();
    await expect(watching).resolves.toBeUndefined();
  });

  test("resolves without reconnecting when the server ends the stream", async () => {
    const watcher = makeWatcher();
    const watching = watcher.watch({ handle: vi.fn() });
    await waitForStreams(1);

    streams[0]!.emit("end");

    await expect(watching).resolves.toBeUndefined();
    expect(streams).toHaveLength(1);
  });

  test("rejects without retrying when the initial connection fails", async () => {
    refuseConnections = true;
    const watching = makeWatcher().watch({ handle: vi.fn() });

    await expect(watching).rejects.toThrow("refused #1");
    expect(streams).toHaveLength(1);
  });

  test("reconnects after 1s, 2s and 4s, then rejects with the last error", async () => {
    const watcher = makeWatcher();
    const watching = watcher.watch({ handle: vi.fn() });
    const outcome = watching.catch((err: Error) => err);
    await waitForStreams(1);

    vi.useFakeTimers({ toFake: ["setTimeout"] });
    refuseConnections = true;
    streams[0]!.emit("error", new Error("UNAVAILABLE"));
    await vi.advanceTimersByTimeAsync(0);

    for (const [delay, expectedStreams] of [
      [1000, 2],
      [2000, 3],
      [4000, 4],
    ] as const) {
      await vi.advanceTimersByTimeAsync(delay - 1);
      expect(streams).toHaveLength(expectedStreams - 1);
      await vi.advanceTimersByTimeAsync(1);
      await waitForStreams(expectedStreams);
    }

    vi.useRealTimers();
    expect(await outcome).toEqual(new Error("refused #4"));
  });

  test("resumes dispatching after a successful reconnect", async () => {
    const handler: EventHandler = { handle: vi.fn() };
    const watcher = makeWatcher();
    const watching = watcher.watch(handler);
    await waitForStreams(1);

    vi.useFakeTimers({ toFake: ["setTimeout"] });
    streams[0]!.emit("error", new Error("UNAVAILABLE"));
    await vi.advanceTimersByTimeAsync(1000);
    await waitForStreams(2);

    streams[1]!.emit("data", {
      events: [{ eventId: "after", eventType: EventType.POST_CREATED }],
    });
    await flush();
    expect(handler.handle).toHaveBeenCalledOnce();

    watcher.stop();
    await expect(watching).resolves.toBeUndefined();
  });

  test("stop() during an outage resolves instead of retrying", async () => {
    const watcher = makeWatcher();
    const watching = watcher.watch({ handle: vi.fn() });
    await waitForStreams(1);

    vi.useFakeTimers({ toFake: ["setTimeout"] });
    streams[0]!.emit("error", new Error("UNAVAILABLE"));
    watcher.stop();
    await vi.advanceTimersByTimeAsync(1000);
    vi.useRealTimers();

    await expect(watching).resolves.toBeUndefined();
    expect(streams).toHaveLength(1);
  });
});
