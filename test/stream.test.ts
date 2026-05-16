/// <reference types="vitest/globals" />

import { EventEmitter } from "node:events";
import { StreamWatcher } from "../src/stream";
import { EventType } from "../src/types";
import type { Authenticator } from "../src/auth";
import type { EventHandler } from "../src/event";

class TestStream extends EventEmitter {
  destroy(err?: Error) {
    setImmediate(() => this.emit("error", err ?? new Error("destroyed")));
  }
}

const streams: TestStream[] = [];

vi.mock("../src/proto", () => ({
  getApiServiceClient: vi.fn(
    () =>
      class MockApiClient {
        close() {}
      }
  ),
  getSendEventRequestType: vi.fn(),
  getStreamServiceClient: vi.fn(
    () =>
      class MockStreamClient {
        subscribeEvents() {
          const stream = new TestStream();
          streams.push(stream);
          return stream;
        }
        close() {}
      }
  ),
}));

function makeAuth(): Authenticator {
  return { getAccessToken: vi.fn().mockResolvedValue("test-token") };
}

const flush = () => new Promise<void>((r) => setImmediate(r));

describe("StreamWatcher", () => {
  beforeEach(() => {
    streams.length = 0;
  });

  test("dispatches non-PING events to handler", async () => {
    const handler: EventHandler = {
      handle: vi.fn().mockResolvedValue(undefined),
    };
    const watcher = new StreamWatcher({
      streamAddress: "localhost:443",
      authenticator: makeAuth(),
    });

    const watchPromise = watcher.watch(handler);
    await flush();
    expect(streams).toHaveLength(1);

    streams[0]!.emit("data", {
      events: [
        { eventId: "e1", eventType: EventType.POST_CREATED },
        { eventId: "e2", eventType: EventType.COMMUNITY_MEMBER_CHANGED },
      ],
    });
    await flush();

    expect(handler.handle as ReturnType<typeof vi.fn>).toHaveBeenCalledTimes(2);

    watcher.stop();
    streams[0]!.emit("end");
    await watchPromise;
  });

  test("skips PING events without invoking handler", async () => {
    const handler: EventHandler = {
      handle: vi.fn().mockResolvedValue(undefined),
    };
    const watcher = new StreamWatcher({
      streamAddress: "localhost:443",
      authenticator: makeAuth(),
    });

    const watchPromise = watcher.watch(handler);
    await flush();

    streams[0]!.emit("data", {
      events: [{ eventId: "ping-1", eventType: EventType.PING }],
    });
    await flush();
    expect(handler.handle as ReturnType<typeof vi.fn>).not.toHaveBeenCalled();

    watcher.stop();
    streams[0]!.emit("end");
    await watchPromise;
  });

  test("stop() before disconnect resolves watch cleanly", async () => {
    const handler: EventHandler = { handle: vi.fn() };
    const watcher = new StreamWatcher({
      streamAddress: "localhost:443",
      authenticator: makeAuth(),
    });

    const watchPromise = watcher.watch(handler);
    await flush();

    watcher.stop();
    streams[0]!.emit("error", new Error("boom"));

    await expect(watchPromise).resolves.toBeUndefined();
  });

  test("rejects after maxRetries failures without receiving data", async () => {
    const handler: EventHandler = { handle: vi.fn() };
    const watcher = new StreamWatcher({
      streamAddress: "localhost:443",
      authenticator: makeAuth(),
      // maxRetries: 1 -> first failure already triggers reject without backoff.
      maxRetries: 1,
    });

    const watchPromise = watcher.watch(handler);
    await flush();

    streams[0]!.emit("error", new Error("boom"));

    await expect(watchPromise).rejects.toThrow("1 consecutive");
  });

  test("treats a clean 'end' before data as a retryable failure", async () => {
    // 'end' (clean close) should follow the same failure-counting path as
    // 'error'. maxRetries: 1 lets a single disconnect-without-data trip the
    // reject path without waiting on backoff.
    const handler: EventHandler = { handle: vi.fn() };
    const watcher = new StreamWatcher({
      streamAddress: "localhost:443",
      authenticator: makeAuth(),
      maxRetries: 1,
    });

    const watchPromise = watcher.watch(handler);
    await flush();

    streams[0]!.emit("end");

    await expect(watchPromise).rejects.toThrow("Failed to reconnect");
  });

  test("ignores empty events payload", async () => {
    const handler: EventHandler = { handle: vi.fn() };
    const watcher = new StreamWatcher({
      streamAddress: "localhost:443",
      authenticator: makeAuth(),
    });

    const watchPromise = watcher.watch(handler);
    await flush();

    streams[0]!.emit("data", {});
    streams[0]!.emit("data", { events: [] });
    await flush();
    expect(handler.handle as ReturnType<typeof vi.fn>).not.toHaveBeenCalled();

    watcher.stop();
    streams[0]!.emit("end");
    await watchPromise;
  });
});
