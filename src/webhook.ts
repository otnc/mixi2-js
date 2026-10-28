import http from "node:http";
import crypto from "node:crypto";
import { dispatchEvent, type EventHandler } from "./event";
import type { Event } from "./types";
import { EventType } from "./types";
import { getSendEventRequestType } from "./proto";
import { convertEvent } from "./convert";

const TIMESTAMP_TOLERANCE_SECONDS = 300;
const ED25519_SPKI_DER_PREFIX = Buffer.from("302a300506032b6570032100", "hex");

function unauthorized(res: http.ServerResponse, message: string): void {
  res.writeHead(401);
  res.end(message);
}

function readBody(req: http.IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export interface WebhookServerOptions {
  port?: number;
  publicKey: Buffer;
  handler: EventHandler;
  syncHandling?: boolean;
}

export class WebhookServer {
  private readonly server: http.Server;
  private readonly port: number;
  private boundPort?: number;
  private readonly publicKey: crypto.KeyObject;
  private readonly handler: EventHandler;
  private readonly syncHandling: boolean;

  constructor(options: WebhookServerOptions) {
    // ?? so port: 0 (random ephemeral port) is honored.
    this.port = options.port ?? 8080;
    this.handler = options.handler;
    this.syncHandling = options.syncHandling ?? false;

    this.publicKey = crypto.createPublicKey({
      key: Buffer.concat([ED25519_SPKI_DER_PREFIX, options.publicKey]),
      format: "der",
      type: "spki",
    });

    this.server = http.createServer(this.requestListener.bind(this));
  }

  private async requestListener(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<void> {
    if (req.method === "GET" && req.url === "/healthz") {
      res.writeHead(200);
      res.end("OK");
      return;
    }

    if (req.method === "POST" && req.url === "/events") {
      await this.handleEvent(req, res);
      return;
    }

    res.writeHead(404);
    res.end("Not Found");
  }

  private async handleEvent(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<void> {
    const signatureBase64 = req.headers[
      "x-mixi2-application-event-signature"
    ] as string | undefined;
    if (!signatureBase64) {
      unauthorized(res, "missing x-mixi2-application-event-signature");
      return;
    }

    const signature = Buffer.from(signatureBase64, "base64");
    if (signature.length === 0) {
      unauthorized(res, "x-mixi2-application-event-signature is invalid");
      return;
    }

    const timestamp = req.headers["x-mixi2-application-event-timestamp"] as
      | string
      | undefined;
    if (!timestamp) {
      unauthorized(res, "missing x-mixi2-application-event-timestamp");
      return;
    }

    const unixTime = parseInt(timestamp, 10);
    if (isNaN(unixTime)) {
      unauthorized(res, "x-mixi2-application-event-timestamp is invalid");
      return;
    }

    const diff = Math.floor(Date.now() / 1000) - unixTime;
    if (diff > TIMESTAMP_TOLERANCE_SECONDS) {
      unauthorized(res, "x-mixi2-application-event-timestamp is too old");
      return;
    }
    if (diff < -TIMESTAMP_TOLERANCE_SECONDS) {
      unauthorized(res, "x-mixi2-application-event-timestamp is in the future");
      return;
    }

    const body = await readBody(req);

    const dataToVerify = Buffer.concat([body, Buffer.from(timestamp)]);
    const isValid = crypto.verify(
      null,
      dataToVerify,
      this.publicKey,
      signature
    );
    if (!isValid) {
      unauthorized(res, "Signature is invalid");
      return;
    }

    let events: Event[];
    try {
      const sendEventType = getSendEventRequestType();
      const decoded = sendEventType.decode(new Uint8Array(body)) as {
        events?: unknown[];
      };
      events = (decoded.events || []).map(convertEvent);
    } catch {
      res.writeHead(400);
      res.end("Failed to parse request body");
      return;
    }

    res.writeHead(204);
    res.end();

    for (const event of events) {
      if (event.eventType === EventType.PING) {
        continue;
      }

      const handled = dispatchEvent(this.handler, event);
      if (this.syncHandling) {
        await handled;
      }
    }
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      const onError = (err: Error) => reject(err);
      this.server.once("error", onError);
      this.server.listen(this.port, () => {
        this.server.off("error", onError);
        const addr = this.server.address();
        if (addr && typeof addr === "object" && "port" in addr) {
          this.boundPort = addr.port;
        }
        resolve();
      });
    });
  }

  shutdown(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.close((err) => {
        this.boundPort = undefined;
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * 起動済みの場合は OS が割り当てた実バインドポート、それ以外は構築時に指定されたポートを返す。
   * `port: 0` を指定したケースでも、起動後は実際のリスニングポートが反映される。
   */
  get address(): string {
    return `:${this.boundPort ?? this.port}`;
  }

  get httpServer(): http.Server {
    return this.server;
  }

  get eventHandlerFunc(): (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => Promise<void> {
    return this.handleEvent.bind(this);
  }
}
