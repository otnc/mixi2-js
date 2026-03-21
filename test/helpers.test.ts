/// <reference types="vite-plus/test/globals" />
import * as address from "../src/helpers/address";
import { EventDeduplicator } from "../src/helpers/event-deduplicator";
import { EventLogger } from "../src/helpers/event-logger";
import { EventRouter } from "../src/helpers/event-router";
import { PostBuilder } from "../src/helpers/post-builder";
import { ReasonFilter } from "../src/helpers/reason-filter";
import { TextSplitter, maxPostLength } from "../src/helpers/text-splitter";
import { EventType, EventReason, PostMaskType, PostPublishingType } from "../src/types";
import type { Event } from "../src/types";
import type { EventHandler } from "../src/event";

function createEvent(eventType: EventType, overrides: Partial<Event> = {}): Event {
  return {
    eventId: "test-event-id",
    eventType,
    ...overrides,
  };
}

describe("Address", () => {
  test("address value", () => {
    expect(typeof address.tokenUrl).toBe("string");
    expect(typeof address.apiAddress).toBe("string");
    expect(typeof address.streamAddress).toBe("string");
  });
});

describe("EventRouter", () => {
  test("routes event to matching listener", async () => {
    const router = new EventRouter();
    const received: Event[] = [];

    router.on(EventType.POST_CREATED, (event) => {
      received.push(event);
    });

    const event = createEvent(EventType.POST_CREATED);
    await router.handle(event);

    expect(received).toHaveLength(1);
    expect(received[0]).toBe(event);
  });

  test("does not call listener for non-matching event type", async () => {
    const router = new EventRouter();
    const received: Event[] = [];

    router.on(EventType.POST_CREATED, (event) => {
      received.push(event);
    });

    await router.handle(createEvent(EventType.CHAT_MESSAGE_RECEIVED));

    expect(received).toHaveLength(0);
  });

  test("supports multiple listeners for the same event type", async () => {
    const router = new EventRouter();
    const order: number[] = [];

    router.on(EventType.POST_CREATED, () => {
      order.push(1);
    });
    router.on(EventType.POST_CREATED, () => {
      order.push(2);
    });

    await router.handle(createEvent(EventType.POST_CREATED));

    expect(order).toEqual([1, 2]);
  });

  test("supports multiple event types simultaneously", async () => {
    const router = new EventRouter();
    const types: EventType[] = [];

    router.on(EventType.POST_CREATED, (event) => {
      types.push(event.eventType);
    });
    router.on(EventType.CHAT_MESSAGE_RECEIVED, (event) => {
      types.push(event.eventType);
    });

    await router.handle(createEvent(EventType.POST_CREATED));
    await router.handle(createEvent(EventType.CHAT_MESSAGE_RECEIVED));

    expect(types).toEqual([EventType.POST_CREATED, EventType.CHAT_MESSAGE_RECEIVED]);
  });

  test("off() removes a specific listener", async () => {
    const router = new EventRouter();
    const received: string[] = [];

    const listener1 = () => {
      received.push("a");
    };
    const listener2 = () => {
      received.push("b");
    };

    router.on(EventType.POST_CREATED, listener1);
    router.on(EventType.POST_CREATED, listener2);
    router.off(EventType.POST_CREATED, listener1);

    await router.handle(createEvent(EventType.POST_CREATED));

    expect(received).toEqual(["b"]);
  });

  test("off() without listener removes all listeners for event type", async () => {
    const router = new EventRouter();
    const received: string[] = [];

    router.on(EventType.POST_CREATED, () => {
      received.push("a");
    });
    router.on(EventType.POST_CREATED, () => {
      received.push("b");
    });
    router.off(EventType.POST_CREATED);

    await router.handle(createEvent(EventType.POST_CREATED));

    expect(received).toHaveLength(0);
  });

  test("on() returns this for chaining", () => {
    const router = new EventRouter();
    const result = router
      .on(EventType.POST_CREATED, () => {})
      .on(EventType.CHAT_MESSAGE_RECEIVED, () => {});

    expect(result).toBe(router);
  });

  test("handles async listeners sequentially", async () => {
    const router = new EventRouter();
    const order: number[] = [];

    router.on(EventType.POST_CREATED, async () => {
      await new Promise<void>((r) => setTimeout(r, 10));
      order.push(1);
    });
    router.on(EventType.POST_CREATED, async () => {
      order.push(2);
    });

    await router.handle(createEvent(EventType.POST_CREATED));

    expect(order).toEqual([1, 2]);
  });

  test("no-op when no listeners registered", async () => {
    const router = new EventRouter();
    // Should not throw
    await router.handle(createEvent(EventType.POST_CREATED));
  });

  test("works with event data", async () => {
    const router = new EventRouter();
    let capturedText: string | undefined;

    router.on(EventType.POST_CREATED, (event) => {
      capturedText = event.postCreatedEvent?.post?.text;
    });

    await router.handle(
      createEvent(EventType.POST_CREATED, {
        postCreatedEvent: {
          eventReasonList: [EventReason.POST_MENTIONED],
          post: {
            postId: "p1",
            isDeleted: false,
            creatorId: "user1",
            text: "hello",
            createdAt: new Date("2026-01-01T00:00:00Z"),
            postMediaList: [],
            visibility: 1,
            accessLevel: 1,
            stamps: [],
          },
          issuer: null,
        },
      }),
    );

    expect(capturedText).toBe("hello");
  });
});

describe("PostBuilder", () => {
  test("builds basic post request", () => {
    const request = new PostBuilder("Hello!").build();
    expect(request).toEqual({ text: "Hello!" });
  });

  test("builds reply post", () => {
    const request = new PostBuilder("Reply").reply("post-123").build();
    expect(request.text).toBe("Reply");
    expect(request.inReplyToPostId).toBe("post-123");
    expect(request.quotedPostId).toBeUndefined();
  });

  test("builds quote post", () => {
    const request = new PostBuilder("Quote").quote("post-456").build();
    expect(request.quotedPostId).toBe("post-456");
    expect(request.inReplyToPostId).toBeUndefined();
  });

  test("reply clears quote and vice versa", () => {
    const request = new PostBuilder("Test").quote("q1").reply("r1").build();
    expect(request.inReplyToPostId).toBe("r1");
    expect(request.quotedPostId).toBeUndefined();

    const request2 = new PostBuilder("Test").reply("r1").quote("q1").build();
    expect(request2.quotedPostId).toBe("q1");
    expect(request2.inReplyToPostId).toBeUndefined();
  });

  test("builds post with media", () => {
    const request = new PostBuilder("With media").media(["m1", "m2"]).build();
    expect(request.mediaIdList).toEqual(["m1", "m2"]);
  });

  test("builds post with sensitive mask", () => {
    const request = new PostBuilder("NSFW").sensitive("注意").build();
    expect(request.postMask).toEqual({
      maskType: PostMaskType.SENSITIVE,
      caption: "注意",
    });
  });

  test("builds post with spoiler mask", () => {
    const request = new PostBuilder("Spoiler").spoiler("ネタバレ").build();
    expect(request.postMask).toEqual({
      maskType: PostMaskType.SPOILER,
      caption: "ネタバレ",
    });
  });

  test("builds post with publishing type", () => {
    const request = new PostBuilder("Profile only")
      .publishing(PostPublishingType.NOT_PUBLISHING)
      .build();
    expect(request.publishingType).toBe(PostPublishingType.NOT_PUBLISHING);
  });

  test("supports method chaining", () => {
    const builder = new PostBuilder("Chain");
    const result = builder.reply("p1").media(["m1"]).sensitive();
    expect(result).toBe(builder);
  });

  test("build returns a copy", () => {
    const builder = new PostBuilder("Copy test");
    const r1 = builder.build();
    const r2 = builder.build();
    expect(r1).toEqual(r2);
    expect(r1).not.toBe(r2);
  });
});

describe("ReasonFilter", () => {
  test("passes events with matching reason", async () => {
    const received: Event[] = [];
    const inner: EventHandler = {
      handle: async (event) => {
        received.push(event);
      },
    };

    const filter = new ReasonFilter(inner, [EventReason.POST_REPLY]);

    const event = createEvent(EventType.POST_CREATED, {
      postCreatedEvent: {
        eventReasonList: [EventReason.POST_REPLY],
        post: null,
        issuer: null,
      },
    });

    await filter.handle(event);
    expect(received).toHaveLength(1);
  });

  test("blocks events with non-matching reason", async () => {
    const received: Event[] = [];
    const inner: EventHandler = {
      handle: async (event) => {
        received.push(event);
      },
    };

    const filter = new ReasonFilter(inner, [EventReason.POST_REPLY]);

    const event = createEvent(EventType.POST_CREATED, {
      postCreatedEvent: {
        eventReasonList: [EventReason.POST_MENTIONED],
        post: null,
        issuer: null,
      },
    });

    await filter.handle(event);
    expect(received).toHaveLength(0);
  });

  test("passes events with no reason list (e.g. ping)", async () => {
    const received: Event[] = [];
    const inner: EventHandler = {
      handle: async (event) => {
        received.push(event);
      },
    };

    const filter = new ReasonFilter(inner, [EventReason.POST_REPLY]);

    const event = createEvent(EventType.PING);
    await filter.handle(event);
    expect(received).toHaveLength(1);
  });

  test("passes events when any reason matches", async () => {
    const received: Event[] = [];
    const inner: EventHandler = {
      handle: async (event) => {
        received.push(event);
      },
    };

    const filter = new ReasonFilter(inner, [EventReason.POST_MENTIONED]);

    const event = createEvent(EventType.POST_CREATED, {
      postCreatedEvent: {
        eventReasonList: [EventReason.POST_REPLY, EventReason.POST_MENTIONED],
        post: null,
        issuer: null,
      },
    });

    await filter.handle(event);
    expect(received).toHaveLength(1);
  });

  test("filters chat message events by reason", async () => {
    const received: Event[] = [];
    const inner: EventHandler = {
      handle: async (event) => {
        received.push(event);
      },
    };

    const filter = new ReasonFilter(inner, [EventReason.DIRECT_MESSAGE_RECEIVED]);

    const event = createEvent(EventType.CHAT_MESSAGE_RECEIVED, {
      chatMessageReceivedEvent: {
        eventReasonList: [EventReason.DIRECT_MESSAGE_RECEIVED],
        message: null,
        issuer: null,
      },
    });

    await filter.handle(event);
    expect(received).toHaveLength(1);
  });
});

describe("EventDeduplicator", () => {
  function makeHandler(received: Event[]): EventHandler {
    return {
      handle: async (event) => {
        received.push(event);
      },
    };
  }

  test("passes first occurrence to inner handler", async () => {
    const received: Event[] = [];
    const dedup = new EventDeduplicator(makeHandler(received));
    const event = createEvent(EventType.POST_CREATED, { eventId: "ev-1" });

    await dedup.handle(event);
    expect(received).toHaveLength(1);
  });

  test("skips duplicate event by eventId", async () => {
    const received: Event[] = [];
    const dedup = new EventDeduplicator(makeHandler(received));
    const event = createEvent(EventType.POST_CREATED, { eventId: "ev-1" });

    await dedup.handle(event);
    await dedup.handle(event);
    expect(received).toHaveLength(1);
  });

  test("passes events with different eventIds", async () => {
    const received: Event[] = [];
    const dedup = new EventDeduplicator(makeHandler(received));

    await dedup.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-1" }));
    await dedup.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-2" }));
    expect(received).toHaveLength(2);
  });

  test("evicts expired entries by maxAge", async () => {
    const received: Event[] = [];
    const dedup = new EventDeduplicator(makeHandler(received), { maxAge: 1 });
    const event = createEvent(EventType.POST_CREATED, { eventId: "ev-1" });

    await dedup.handle(event);
    await new Promise((r) => setTimeout(r, 10));
    await dedup.handle(event);
    expect(received).toHaveLength(2);
  });

  test("evicts oldest entry when maxSize is exceeded", async () => {
    const received: Event[] = [];
    const dedup = new EventDeduplicator(makeHandler(received), { maxSize: 2 });

    await dedup.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-1" }));
    await dedup.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-2" }));
    await dedup.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-3" }));
    // ev-1 should be evicted; re-sending it should pass through
    await dedup.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-1" }));
    expect(received).toHaveLength(4);
  });
});

describe("TextSplitter", () => {
  test("returns single chunk when text is within limit", () => {
    const splitter = new TextSplitter();
    expect(splitter.split("Hello!")).toEqual(["Hello!"]);
  });

  test("returns single chunk when text equals maxLength exactly", () => {
    const splitter = new TextSplitter({ maxLength: 5 });
    expect(splitter.split("Hello")).toEqual(["Hello"]);
  });

  test("splits text that exceeds maxLength", () => {
    const splitter = new TextSplitter({ maxLength: 10 });
    const chunks = splitter.split("Hello World Foo Bar");
    expect(chunks.every((c) => c.length <= 10)).toBe(true);
    expect(chunks.join(" ")).toBe("Hello World Foo Bar");
  });

  test("splits on space boundary with splitOnWord: true", () => {
    const splitter = new TextSplitter({ maxLength: 10, splitOnWord: true });
    const chunks = splitter.split("Hello World");
    expect(chunks).toEqual(["Hello", "World"]);
  });

  test("splits at maxLength when no word boundary found", () => {
    const splitter = new TextSplitter({ maxLength: 5, splitOnWord: true });
    const chunks = splitter.split("ABCDEFGHIJ");
    expect(chunks).toEqual(["ABCDE", "FGHIJ"]);
  });

  test("splits on Japanese punctuation", () => {
    const splitter = new TextSplitter({ maxLength: 10, splitOnWord: true });
    const chunks = splitter.split("こんにちは、世界！おはよう");
    expect(chunks.every((c) => c.length <= 10)).toBe(true);
  });

  test("splits without word boundary when splitOnWord: false", () => {
    const splitter = new TextSplitter({ maxLength: 5, splitOnWord: false });
    const chunks = splitter.split("Hello World");
    expect(chunks).toEqual(["Hello", "World"]);
  });

  test("handles empty string", () => {
    const splitter = new TextSplitter();
    expect(splitter.split("")).toEqual([""]);
  });

  test("maxPostLength is 149", () => {
    expect(maxPostLength).toBe(149);
  });

  test("default maxLength is 149", () => {
    const splitter = new TextSplitter();
    const text = "a".repeat(149);
    expect(splitter.split(text)).toHaveLength(1);
    const text2 = "a".repeat(150);
    expect(splitter.split(text2)).toHaveLength(2);
  });
});

describe("EventLogger", () => {
  test("passes event to inner handler", async () => {
    const received: Event[] = [];
    const inner: EventHandler = {
      handle: async (e) => {
        received.push(e);
      },
    };
    const logger = new EventLogger(inner, { logger: () => {} });
    const event = createEvent(EventType.POST_CREATED);

    await logger.handle(event);
    expect(received).toHaveLength(1);
    expect(received[0]).toBe(event);
  });

  test("calls logger with event info", async () => {
    const messages: string[] = [];
    const inner: EventHandler = { handle: async () => {} };
    const logger = new EventLogger(inner, { logger: (msg) => messages.push(msg) });

    await logger.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-1" }));
    expect(messages).toHaveLength(1);
    expect(messages[0]).toContain("ev-1");
    expect(messages[0]).toContain(String(EventType.POST_CREATED));
  });

  test("omits eventId when verbose: false", async () => {
    const messages: string[] = [];
    const inner: EventHandler = { handle: async () => {} };
    const logger = new EventLogger(inner, {
      logger: (msg) => messages.push(msg),
      verbose: false,
    });

    await logger.handle(createEvent(EventType.POST_CREATED, { eventId: "ev-1" }));
    expect(messages[0]).not.toContain("ev-1");
  });

  test("uses console.log by default", async () => {
    const original = console.log;
    const messages: string[] = [];
    console.log = (msg: string) => messages.push(msg);

    const logger = new EventLogger({ handle: async () => {} });
    await logger.handle(createEvent(EventType.POST_CREATED));

    console.log = original;
    expect(messages).toHaveLength(1);
  });
});
