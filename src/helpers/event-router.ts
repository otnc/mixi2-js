import type { EventHandler } from "../event";
import type { Event } from "../types";
import { EventType } from "../types";

type EventListener = (event: Event) => void | Promise<void>;

/**
 * イベントタイプ別にハンドラを登録できる EventHandler 実装。
 * StreamWatcher.watch() や WebhookServer に直接渡して使用できる。
 */
export class EventRouter implements EventHandler {
  private readonly listeners = new Map<EventType, EventListener[]>();

  /**
   * 指定したイベントタイプのハンドラを登録する。
   * 同じイベントタイプに複数のハンドラを登録可能（登録順に実行）。
   */
  on(eventType: EventType, listener: EventListener): this {
    const existing = this.listeners.get(eventType);
    if (existing) {
      existing.push(listener);
    } else {
      this.listeners.set(eventType, [listener]);
    }
    return this;
  }

  /**
   * 指定したイベントタイプのハンドラを削除する。
   * listener を省略した場合、そのイベントタイプのすべてのハンドラを削除する。
   */
  off(eventType: EventType, listener?: EventListener): this {
    if (!listener) {
      this.listeners.delete(eventType);
      return this;
    }
    const existing = this.listeners.get(eventType);
    if (existing) {
      const filtered = existing.filter((l) => l !== listener);
      if (filtered.length > 0) {
        this.listeners.set(eventType, filtered);
      } else {
        this.listeners.delete(eventType);
      }
    }
    return this;
  }

  /**
   * EventHandler.handle() の実装。
   * 登録されたリスナーに対してイベントをルーティングする。
   */
  async handle(event: Event): Promise<void> {
    const listeners = this.listeners.get(event.eventType);
    if (!listeners) return;
    for (const listener of listeners) {
      await listener(event);
    }
  }
}
