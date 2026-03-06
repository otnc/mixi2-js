import type { Event } from "./types";

export interface EventHandler {
  handle(event: Event): void | Promise<void>;
}
