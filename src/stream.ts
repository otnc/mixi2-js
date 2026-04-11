import * as grpc from "@grpc/grpc-js";
import type { Authenticator } from "./auth";
import type { EventHandler } from "./event";
import type { Event } from "./types";
import { EventType } from "./types";
import { getStreamServiceClient } from "./proto";
import { convertEvent } from "./convert";

export interface StreamWatcherOptions {
  streamAddress: string;
  authenticator: Authenticator;
  authKey?: string;
  /** 再接続の最大試行回数。デフォルト: 3 */
  maxRetries?: number;
}

export class StreamWatcher {
  private readonly authenticator: Authenticator;
  private readonly authKey?: string;
  private readonly streamClient: grpc.Client;
  private readonly maxRetries: number;
  private aborted = false;

  constructor(options: StreamWatcherOptions) {
    const ClientConstructor = getStreamServiceClient();
    this.streamClient = new ClientConstructor(options.streamAddress, grpc.credentials.createSsl());
    this.authenticator = options.authenticator;
    this.authKey = options.authKey;
    this.maxRetries = options.maxRetries ?? 3;
  }

  private async getMetadata(): Promise<grpc.Metadata> {
    const token = await this.authenticator.getAccessToken();
    const metadata = new grpc.Metadata();
    metadata.add("authorization", `Bearer ${token}`);
    if (this.authKey) {
      metadata.add("x-auth-key", this.authKey);
    }
    return metadata;
  }

  private async connect(): Promise<grpc.ClientReadableStream<unknown>> {
    const metadata = await this.getMetadata();
    const fn = (this.streamClient as unknown as Record<string, (...args: unknown[]) => unknown>)[
      "subscribeEvents"
    ];
    if (!fn) {
      throw new Error("subscribeEvents method not found on stream client");
    }
    return fn.call(this.streamClient, {}, metadata) as grpc.ClientReadableStream<unknown>;
  }

  private async reconnect(retryIndex: number): Promise<grpc.ClientReadableStream<unknown>> {
    if (this.aborted) {
      throw new Error("Watcher aborted");
    }

    // Exponential backoff: 2s, 4s, 8s, ... (capped at 30s)
    const backoff = Math.min(Math.pow(2, retryIndex) * 1000, 30000);
    await new Promise((resolve) => setTimeout(resolve, backoff));

    if (this.aborted) {
      throw new Error("Watcher aborted");
    }

    return this.connect();
  }

  async watch(handler: EventHandler): Promise<void> {
    this.aborted = false;
    let stream = await this.connect();
    let consecutiveFailures = 0;

    return new Promise((resolve, reject) => {
      const setupStream = (s: grpc.ClientReadableStream<unknown>) => {
        let receivedData = false;

        // Detect hung connections: if no data arrives within 30s, destroy the stream
        const connectionTimeout = setTimeout(() => {
          if (!receivedData && !this.aborted) {
            s.destroy(new Error("Connection timeout: no data received"));
          }
        }, 30000);

        s.on("data", (response: Record<string, unknown>) => {
          if (!receivedData) {
            receivedData = true;
            clearTimeout(connectionTimeout);
            consecutiveFailures = 0;
          }
          const events = ((response.events as unknown[]) || []).map(convertEvent);
          for (const event of events) {
            if (event.eventType === EventType.PING) {
              continue;
            }
            this.handleEvent(handler, event);
          }
        });

        let disconnected = false;
        const handleDisconnect = async () => {
          clearTimeout(connectionTimeout);
          if (disconnected) return;
          disconnected = true;

          if (this.aborted) {
            resolve();
            return;
          }

          if (!receivedData) {
            consecutiveFailures++;
          }

          if (consecutiveFailures >= this.maxRetries) {
            reject(
              new Error(`Failed to reconnect after ${this.maxRetries} consecutive attempts`),
            );
            return;
          }

          try {
            stream = await this.reconnect(consecutiveFailures);
            setupStream(stream);
          } catch (reconnectErr) {
            reject(reconnectErr);
          }
        };

        s.on("error", handleDisconnect);

        s.on("end", handleDisconnect);
      };

      setupStream(stream);
    });
  }

  private handleEvent(handler: EventHandler, event: Event): void {
    Promise.resolve(handler.handle(event)).catch((err) => {
      console.error(`Failed to handle event ${event.eventId}:`, err);
    });
  }

  stop(): void {
    this.aborted = true;
    this.streamClient.close();
  }
}
