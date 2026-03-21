import type { EventHandler } from "../event";
import type { Event } from "../types";

export interface EventDeduplicatorOptions {
  /** 記憶する最大イベント数。デフォルト: 1000 */
  maxSize?: number;
  /** イベント ID を記憶する最大時間（ミリ秒）。デフォルト: 300000 (5 分) */
  maxAge?: number;
}

/**
 * 重複したイベントを検出してスキップするミドルウェア。
 * Webhook 方式のリトライなどで同じイベントが複数回届いた場合に、
 * 内部ハンドラへの二重処理を防ぐ。
 *
 * @example
 * const dedup = new EventDeduplicator(innerHandler);
 * const server = new WebhookServer({ handler: dedup, ... });
 */
export class EventDeduplicator implements EventHandler {
  private readonly inner: EventHandler;
  private readonly maxSize: number;
  private readonly maxAge: number;
  private readonly seen = new Map<string, number>();

  constructor(handler: EventHandler, options?: EventDeduplicatorOptions) {
    this.inner = handler;
    this.maxSize = options?.maxSize ?? 1000;
    this.maxAge = options?.maxAge ?? 300_000;
  }

  async handle(event: Event): Promise<void> {
    const now = Date.now();
    this.evict(now);

    if (this.seen.has(event.eventId)) {
      return;
    }

    this.seen.set(event.eventId, now);
    if (this.seen.size > this.maxSize) {
      const oldest = this.seen.keys().next().value;
      if (oldest !== undefined) {
        this.seen.delete(oldest);
      }
    }

    await this.inner.handle(event);
  }

  private evict(now: number): void {
    for (const [id, ts] of this.seen) {
      if (now - ts > this.maxAge) {
        this.seen.delete(id);
      } else {
        break;
      }
    }
  }
}
