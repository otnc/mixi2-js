import { dispatchEvent, type EventHandler } from "./event";
import type { Event } from "./types";
import { EventType } from "./types";
import { getSendEventRequestType } from "./proto";
import { convertEvent } from "./convert";

const TIMESTAMP_TOLERANCE_SECONDS = 300;

export interface WebhookHandlerOptions {
  /** The signature public key from mixi2 Developer Platform: the Base64 string as shown there, or its 32 raw bytes. */
  publicKey: string | Uint8Array;
  handler: EventHandler;
  /**
   * Waits for the handler before responding. Use it where the runtime stops once the response is sent and no `waitUntil` is available.
   * mixi2 times out after 3 seconds, so the handler must finish within that time.
   */
  syncHandling?: boolean;
  /** Keeps the runtime alive for handlers that run after the response, such as `ctx.waitUntil` on Cloudflare Workers. */
  waitUntil?: (promise: Promise<unknown>) => void;
}

function textResponse(status: number, body?: string): Response {
  return new Response(body ?? null, { status });
}

function decodeBase64(value: string): Uint8Array<ArrayBuffer> | null {
  try {
    return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
  } catch {
    return null;
  }
}

/**
 * Creates a webhook endpoint built on the Fetch API (`Request` / `Response`), for runtimes and frameworks without a Node.js HTTP server:
 * Cloudflare Workers, Deno, Bun, Hono and the like. It verifies requests exactly like `WebhookServer` and answers 204 on success,
 * 401 for a bad signature or timestamp, 400 for an unreadable body and 405 for methods other than POST.
 *
 * The signature is verified with Web Crypto (`crypto.subtle`, Ed25519). On Node.js 20 this prints an ExperimentalWarning, so prefer `WebhookServer` there.
 *
 * @example
 * // Cloudflare Workers
 * export default {
 *   fetch(request, env, ctx) {
 *     const handleWebhook = createWebhookHandler({
 *       publicKey: env.SIGNATURE_PUBLIC_KEY,
 *       handler,
 *       waitUntil: (promise) => ctx.waitUntil(promise),
 *     });
 *     return handleWebhook(request);
 *   },
 * };
 */
export function createWebhookHandler(
  options: WebhookHandlerOptions
): (request: Request) => Promise<Response> {
  const rawPublicKey =
    typeof options.publicKey === "string"
      ? decodeBase64(options.publicKey)
      : new Uint8Array(options.publicKey);
  if (!rawPublicKey) {
    throw new Error("publicKey is not valid Base64");
  }
  const publicKey = crypto.subtle.importKey(
    "raw",
    rawPublicKey,
    { name: "Ed25519" },
    false,
    ["verify"]
  );
  // An invalid key is reported when a request arrives, not as an unhandled rejection at startup.
  publicKey.catch(() => {});

  return async (request) => {
    if (request.method !== "POST") {
      return textResponse(405, "Method Not Allowed");
    }

    const signatureBase64 = request.headers.get(
      "x-mixi2-application-event-signature"
    );
    if (!signatureBase64) {
      return textResponse(401, "missing x-mixi2-application-event-signature");
    }
    const signature = decodeBase64(signatureBase64);
    if (!signature || signature.length === 0) {
      return textResponse(
        401,
        "x-mixi2-application-event-signature is invalid"
      );
    }

    const timestamp = request.headers.get(
      "x-mixi2-application-event-timestamp"
    );
    if (!timestamp) {
      return textResponse(401, "missing x-mixi2-application-event-timestamp");
    }
    const unixTime = parseInt(timestamp, 10);
    if (isNaN(unixTime)) {
      return textResponse(
        401,
        "x-mixi2-application-event-timestamp is invalid"
      );
    }
    const diff = Math.floor(Date.now() / 1000) - unixTime;
    if (diff > TIMESTAMP_TOLERANCE_SECONDS) {
      return textResponse(
        401,
        "x-mixi2-application-event-timestamp is too old"
      );
    }
    if (diff < -TIMESTAMP_TOLERANCE_SECONDS) {
      return textResponse(
        401,
        "x-mixi2-application-event-timestamp is in the future"
      );
    }

    const body = new Uint8Array(await request.arrayBuffer());
    const timestampBytes = new TextEncoder().encode(timestamp);
    const signedData = new Uint8Array(body.length + timestampBytes.length);
    signedData.set(body);
    signedData.set(timestampBytes, body.length);
    const isValid = await crypto.subtle.verify(
      { name: "Ed25519" },
      await publicKey,
      signature,
      signedData
    );
    if (!isValid) {
      return textResponse(401, "Signature is invalid");
    }

    let events: Event[];
    try {
      const decoded = getSendEventRequestType().decode(body) as {
        events?: unknown[];
      };
      events = (decoded.events || []).map(convertEvent);
    } catch {
      return textResponse(400, "Failed to parse request body");
    }

    const targets = events.filter(
      (event) => event.eventType !== EventType.PING
    );
    if (options.syncHandling) {
      for (const event of targets) {
        await dispatchEvent(options.handler, event);
      }
    } else {
      const handled = Promise.all(
        targets.map((event) => dispatchEvent(options.handler, event))
      );
      options.waitUntil?.(handled);
    }
    return textResponse(204);
  };
}
