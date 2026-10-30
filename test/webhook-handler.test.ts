/// <reference types="vitest/globals" />

import crypto from "node:crypto";
import { social } from "../src/generated/proto.js";
import { createWebhookHandler } from "../src/webhook-handler";
import { WebhookServer } from "../src/webhook";
import { EventType } from "../src/types";
import type { Event } from "../src/types";
import type { EventHandler } from "../src/event";

const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519");
const rawPublicKey = new Uint8Array(
  publicKey.export({ format: "der", type: "spki" }).subarray(12)
);
const base64PublicKey = Buffer.from(rawPublicKey).toString("base64");

const SendEventRequest =
  social.mixi.application.service.client_endpoint.v1.SendEventRequest;

function encodeEvents(events: Record<string, unknown>[]): Uint8Array {
  return SendEventRequest.encode(
    SendEventRequest.fromObject({ events })
  ).finish();
}

const postEvent = {
  eventId: "post-1",
  eventType: EventType.POST_CREATED,
  postCreatedEvent: {
    eventReasonList: [3],
    post: { postId: "p1", text: "hi" },
  },
};
const pingEvent = {
  eventId: "ping-1",
  eventType: EventType.PING,
  pingEvent: {},
};

function now(): string {
  return String(Math.floor(Date.now() / 1000));
}

function sign(body: Uint8Array, timestamp: string): string {
  return crypto
    .sign(null, Buffer.concat([body, Buffer.from(timestamp)]), privateKey)
    .toString("base64");
}

function signedRequest(
  body: Uint8Array,
  {
    timestamp = now(),
    signature,
    method = "POST",
  }: { timestamp?: string; signature?: string; method?: string } = {}
): Request {
  return new Request("https://example.com/events", {
    method,
    body: method === "POST" ? body : undefined,
    headers: {
      "x-mixi2-application-event-signature": signature ?? sign(body, timestamp),
      "x-mixi2-application-event-timestamp": timestamp,
    },
  });
}

function collectingHandler(): EventHandler & { events: Event[] } {
  const events: Event[] = [];
  return { events, handle: (event) => void events.push(event) };
}

describe("createWebhookHandler", () => {
  test("returns 204 and passes events other than PING to the handler", async () => {
    const handler = collectingHandler();
    const handle = createWebhookHandler({
      publicKey: base64PublicKey,
      handler,
      syncHandling: true,
    });

    const response = await handle(
      signedRequest(encodeEvents([pingEvent, postEvent]))
    );

    expect(response.status).toBe(204);
    expect(handler.events.map((event) => event.eventId)).toEqual(["post-1"]);
    expect(handler.events[0]!.postCreatedEvent!.post!.text).toBe("hi");
  });

  test("accepts the public key as raw bytes", async () => {
    const handle = createWebhookHandler({
      publicKey: rawPublicKey,
      handler: { handle() {} },
    });
    const response = await handle(signedRequest(encodeEvents([pingEvent])));
    expect(response.status).toBe(204);
  });

  test("rejects a publicKey that is not Base64", () => {
    expect(() =>
      createWebhookHandler({
        publicKey: "not base64!",
        handler: { handle() {} },
      })
    ).toThrow("publicKey is not valid Base64");
  });

  test("answers 405 to methods other than POST", async () => {
    const handle = createWebhookHandler({
      publicKey: rawPublicKey,
      handler: { handle() {} },
    });
    const response = await handle(
      signedRequest(new Uint8Array(0), { method: "GET" })
    );
    expect(response.status).toBe(405);
  });

  test("without syncHandling, responds first and hands the work to waitUntil", async () => {
    let release!: () => void;
    const blocked = new Promise<void>((resolve) => (release = resolve));
    const finished: string[] = [];
    const waited: Promise<unknown>[] = [];
    const handle = createWebhookHandler({
      publicKey: rawPublicKey,
      handler: {
        async handle(event) {
          await blocked;
          finished.push(event.eventId);
        },
      },
      waitUntil: (promise) => void waited.push(promise),
    });

    const response = await handle(signedRequest(encodeEvents([postEvent])));

    expect(response.status).toBe(204);
    expect(finished).toEqual([]);
    expect(waited).toHaveLength(1);
    release();
    await waited[0];
    expect(finished).toEqual(["post-1"]);
  });

  test("still answers 204 when the handler throws, and logs the error", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const handle = createWebhookHandler({
      publicKey: rawPublicKey,
      handler: {
        handle() {
          throw new Error("boom");
        },
      },
      syncHandling: true,
    });

    const response = await handle(signedRequest(encodeEvents([postEvent])));

    expect(response.status).toBe(204);
    expect(errorSpy).toHaveBeenCalledOnce();
    errorSpy.mockRestore();
  });
});

describe("createWebhookHandler answers like WebhookServer", () => {
  const body = encodeEvents([postEvent]);
  const garbage = new Uint8Array([0xff, 0xff, 0xff]);
  const oldTimestamp = String(Math.floor(Date.now() / 1000) - 1000);
  const futureTimestamp = String(Math.floor(Date.now() / 1000) + 1000);
  const cases: [string, () => Request][] = [
    ["valid request", () => signedRequest(body)],
    [
      "missing signature",
      () =>
        new Request("https://example.com/events", {
          method: "POST",
          body,
          headers: { "x-mixi2-application-event-timestamp": now() },
        }),
    ],
    ["empty signature", () => signedRequest(body, { signature: "" })],
    [
      "missing timestamp",
      () =>
        new Request("https://example.com/events", {
          method: "POST",
          body,
          headers: { "x-mixi2-application-event-signature": sign(body, now()) },
        }),
    ],
    [
      "timestamp that is not a number",
      () => signedRequest(body, { timestamp: "soon" }),
    ],
    ["old timestamp", () => signedRequest(body, { timestamp: oldTimestamp })],
    [
      "future timestamp",
      () => signedRequest(body, { timestamp: futureTimestamp }),
    ],
    [
      "signature for another body",
      () => signedRequest(body, { signature: sign(garbage, now()) }),
    ],
    ["body that is not protobuf", () => signedRequest(garbage)],
  ];

  let server: WebhookServer;
  let url: string;
  beforeAll(async () => {
    server = new WebhookServer({
      port: 0,
      publicKey: Buffer.from(rawPublicKey),
      handler: { handle() {} },
    });
    await server.start();
    url = `http://127.0.0.1${server.address}/events`;
  });
  afterAll(() => server.shutdown());

  test.each(cases)("%s", async (_name, makeRequest) => {
    const handle = createWebhookHandler({
      publicKey: rawPublicKey,
      handler: { handle() {} },
    });
    const viaHandler = await handle(makeRequest());

    const request = makeRequest();
    const viaServer = await fetch(url, {
      method: request.method,
      headers: request.headers,
      body: await request.arrayBuffer(),
    });

    expect({
      status: viaHandler.status,
      body: await viaHandler.text(),
    }).toEqual({ status: viaServer.status, body: await viaServer.text() });
  });
});
