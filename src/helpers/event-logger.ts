import type { EventHandler } from "../event";
import type { Event } from "../types";

export interface EventLoggerOptions {
  /** ログ出力関数。デフォルト: console.log */
  logger?: (message: string) => void;
  /** イベントの詳細（eventId・eventType）をログに含めるか。デフォルト: true */
  verbose?: boolean;
}

/**
 * 受信したイベントをログ出力するデバッグ用ミドルウェア。
 * 内部ハンドラへの処理はそのまま委譲する。
 *
 * @example
 * const logger = new EventLogger(router);
 * await watcher.watch(logger);
 */
export class EventLogger implements EventHandler {
  private readonly inner: EventHandler;
  private readonly logger: (message: string) => void;
  private readonly verbose: boolean;

  constructor(handler: EventHandler, options?: EventLoggerOptions) {
    this.inner = handler;
    this.logger = options?.logger ?? console.log;
    this.verbose = options?.verbose ?? true;
  }

  async handle(event: Event): Promise<void> {
    if (this.verbose) {
      this.logger(`[mixi2] event received: type=${event.eventType} id=${event.eventId}`);
    } else {
      this.logger(`[mixi2] event received: type=${event.eventType}`);
    }
    await this.inner.handle(event);
  }
}
