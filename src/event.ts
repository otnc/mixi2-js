import type { Event } from "./types";

export interface EventHandler {
  handle(event: Event): void | Promise<void>;
}

export async function dispatchEvent(
  handler: EventHandler,
  event: Event
): Promise<void> {
  try {
    await handler.handle(event);
  } catch (err) {
    console.error(`Failed to handle event ${event.eventId}:`, err);
  }
}
