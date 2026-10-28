import * as grpc from "@grpc/grpc-js";
import type { Authenticator } from "./auth";
import { dispatchEvent, type EventHandler } from "./event";
import { EventType } from "./types";
import { getStreamServiceClient } from "./proto";
import { createAuthMetadata } from "./metadata";
import { convertEvent } from "./convert";

const CONNECT_TIMEOUT_MS = 30000;

type EventStream = grpc.ClientReadableStream<unknown>;

export interface StreamWatcherOptions {
  streamAddress: string;
  authenticator: Authenticator;
  authKey?: string;
  /** 切断ごとの再接続の最大試行回数。待機時間は 1 秒, 2 秒, 4 秒, ... と倍になる。デフォルト: 3 */
  maxRetries?: number;
}

export class StreamWatcher {
  private readonly authenticator: Authenticator;
  private readonly authKey?: string;
  private readonly streamClient: grpc.Client;
  private readonly maxRetries: number;
  private aborted = false;
  private currentStream: EventStream | null = null;

  constructor(options: StreamWatcherOptions) {
    const ClientConstructor = getStreamServiceClient();
    this.streamClient = new ClientConstructor(
      options.streamAddress,
      grpc.credentials.createSsl()
    );
    this.authenticator = options.authenticator;
    this.authKey = options.authKey;
    this.maxRetries = options.maxRetries ?? 3;
  }

  private async connect(): Promise<EventStream> {
    const metadata = await createAuthMetadata(this.authenticator, this.authKey);
    const fn = (
      this.streamClient as unknown as Record<
        string,
        (...args: unknown[]) => unknown
      >
    )["subscribeEvents"];
    if (!fn) {
      throw new Error("subscribeEvents method not found on stream client");
    }
    const stream = fn.call(this.streamClient, {}, metadata) as EventStream;
    this.currentStream = stream;

    // grpc-js opens server streams lazily, so a connection failure only
    // surfaces as a later "error". Response headers mark a live stream.
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        stream.cancel();
        reject(new Error("Connection timeout: no response headers received"));
      }, CONNECT_TIMEOUT_MS);
      const onError = (err: Error) => {
        clearTimeout(timer);
        reject(err);
      };
      stream.once("error", onError);
      stream.once("metadata", () => {
        clearTimeout(timer);
        stream.off("error", onError);
        resolve(stream);
      });
    });
  }

  private async reconnect(): Promise<EventStream | null> {
    let lastError: unknown;
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** attempt));
      if (this.aborted) return null;
      try {
        return await this.connect();
      } catch (err) {
        if (this.aborted) return null;
        lastError = err;
      }
    }
    throw lastError;
  }

  /** Resolves with the error that broke the stream, or null on a clean end. */
  private consume(
    stream: EventStream,
    handler: EventHandler
  ): Promise<Error | null> {
    return new Promise((resolve) => {
      stream.on("data", (response: Record<string, unknown>) => {
        const events = ((response.events as unknown[]) || []).map(convertEvent);
        for (const event of events) {
          if (event.eventType === EventType.PING) {
            continue;
          }
          void dispatchEvent(handler, event);
        }
      });
      stream.once("error", (err: Error) => resolve(err));
      stream.once("end", () => resolve(null));
    });
  }

  /**
   * イベントの受信を開始する。`stop()` が呼ばれるかサーバーがストリームを正常終了すると resolve する。
   * 切断時は `maxRetries` 回まで再接続し、すべて失敗した場合は最後のエラーで reject する。
   * 初回接続の失敗は再試行せずに reject する。
   */
  async watch(handler: EventHandler): Promise<void> {
    this.aborted = false;
    let stream: EventStream | null;
    try {
      stream = await this.connect();
    } catch (err) {
      if (this.aborted) return;
      throw err;
    }
    while (stream) {
      const error = await this.consume(stream, handler);
      this.currentStream = null;
      if (!error || this.aborted) return;
      stream = await this.reconnect();
    }
  }

  stop(): void {
    this.aborted = true;
    this.currentStream?.cancel();
    this.streamClient.close();
  }
}
