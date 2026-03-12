import type { EventHandler } from "../event";
import type { Event } from "../types";
import { EventReason } from "../types";

/**
 * EventReason に基づいてイベントをフィルタリングするミドルウェア。
 * 指定した理由に一致するイベントのみを内部のハンドラに渡す。
 *
 * @example
 * const filter = new ReasonFilter(innerHandler, [
 *   EventReason.POST_REPLY,
 *   EventReason.POST_MENTIONED,
 * ]);
 * await watcher.watch(filter);
 */
export class ReasonFilter implements EventHandler {
  private readonly inner: EventHandler;
  private readonly allowedReasons: Set<EventReason>;

  constructor(handler: EventHandler, reasons: EventReason[]) {
    this.inner = handler;
    this.allowedReasons = new Set(reasons);
  }

  async handle(event: Event): Promise<void> {
    const reasons = this.getReasons(event);
    if (
      reasons.length === 0 ||
      reasons.some((r) => this.allowedReasons.has(r))
    ) {
      await this.inner.handle(event);
    }
  }

  private getReasons(event: Event): EventReason[] {
    if (event.postCreatedEvent) {
      return event.postCreatedEvent.eventReasonList || [];
    }
    if (event.chatMessageReceivedEvent) {
      return event.chatMessageReceivedEvent.eventReasonList || [];
    }
    return [];
  }
}
