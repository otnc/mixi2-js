/// <reference types="vitest/globals" />
import * as address from "../src/helpers/address";
import { ApplicationPager } from "../src/helpers/application-pager";
import { CommunityFilter } from "../src/helpers/community-filter";
import { EventDeduplicator } from "../src/helpers/event-deduplicator";
import { EventLogger } from "../src/helpers/event-logger";
import { EventRouter } from "../src/helpers/event-router";
import { MemberEventRouter } from "../src/helpers/member-event-router";
import { MemberListPager } from "../src/helpers/member-list-pager";
import { PluginManagedRouter } from "../src/helpers/plugin-managed-router";
import { PostBuilder } from "../src/helpers/post-builder";
import { ReasonFilter } from "../src/helpers/reason-filter";
import { TextSplitter, maxPostLength } from "../src/helpers/text-splitter";
import {
  EventType,
  EventReason,
  PostMaskType,
  PostPublishingType,
} from "../src/types";
import type { Community, Event, User } from "../src/types";
import type { EventHandler } from "../src/event";

function createEvent(
  eventType: EventType,
  overrides: Partial<Event> = {}
): Event {
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

    expect(types).toEqual([
      EventType.POST_CREATED,
      EventType.CHAT_MESSAGE_RECEIVED,
    ]);
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
      })
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

  test("builds community post with community()", () => {
    const request = new PostBuilder("Hello community!")
      .community("c-1")
      .build();
    expect(request.text).toBe("Hello community!");
    expect(request.communityId).toBe("c-1");
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

    const filter = new ReasonFilter(inner, [
      EventReason.DIRECT_MESSAGE_RECEIVED,
    ]);

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

    await dedup.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-1" })
    );
    await dedup.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-2" })
    );
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

    await dedup.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-1" })
    );
    await dedup.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-2" })
    );
    await dedup.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-3" })
    );
    // ev-1 should be evicted; re-sending it should pass through
    await dedup.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-1" })
    );
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
    const logger = new EventLogger(inner, {
      logger: (msg) => messages.push(msg),
    });

    await logger.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-1" })
    );
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

    await logger.handle(
      createEvent(EventType.POST_CREATED, { eventId: "ev-1" })
    );
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

// ── helpers added in v1.5.0 ──────────────────────────────────────────────────

const testCommunity: Community = {
  communityId: "c-1",
  name: "TestCommunity",
  purpose: "",
  isArchived: false,
  visibility: 1,
  accessLevel: 1,
};

const testUser: User = {
  userId: "u-1",
  isDisabled: false,
  name: "user1",
  displayName: "User One",
  profile: "",
  userAvatar: null,
  visibility: 1,
  accessLevel: 1,
};

describe("CommunityFilter", () => {
  function makeHandler(received: Event[]): EventHandler {
    return {
      handle: async (e) => {
        received.push(e);
      },
    };
  }

  test("passes post event matching community ID", async () => {
    const received: Event[] = [];
    const filter = new CommunityFilter(makeHandler(received), ["c-1"]);

    await filter.handle(
      createEvent(EventType.POST_CREATED, {
        postCreatedEvent: {
          eventReasonList: [EventReason.POST_COMMUNITY],
          post: {
            postId: "p1",
            isDeleted: false,
            creatorId: "u1",
            text: "hi",
            createdAt: null,
            postMediaList: [],
            communityId: "c-1",
            visibility: 1,
            accessLevel: 1,
            stamps: [],
          },
          issuer: null,
        },
      })
    );

    expect(received).toHaveLength(1);
  });

  test("blocks post event from different community", async () => {
    const received: Event[] = [];
    const filter = new CommunityFilter(makeHandler(received), ["c-1"]);

    await filter.handle(
      createEvent(EventType.POST_CREATED, {
        postCreatedEvent: {
          eventReasonList: [EventReason.POST_COMMUNITY],
          post: {
            postId: "p1",
            isDeleted: false,
            creatorId: "u1",
            text: "hi",
            createdAt: null,
            postMediaList: [],
            communityId: "c-2",
            visibility: 1,
            accessLevel: 1,
            stamps: [],
          },
          issuer: null,
        },
      })
    );

    expect(received).toHaveLength(0);
  });

  test("passes non-community events (e.g. PING)", async () => {
    const received: Event[] = [];
    const filter = new CommunityFilter(makeHandler(received), ["c-1"]);
    await filter.handle(createEvent(EventType.PING));
    expect(received).toHaveLength(1);
  });

  test("passes member changed event from matching community", async () => {
    const received: Event[] = [];
    const filter = new CommunityFilter(makeHandler(received), ["c-1"]);

    await filter.handle(
      createEvent(EventType.COMMUNITY_MEMBER_CHANGED, {
        communityMemberChangedEvent: {
          eventReasonList: [EventReason.COMMUNITY_MEMBER_JOINED],
          member: null,
          community: testCommunity,
        },
      })
    );

    expect(received).toHaveLength(1);
  });

  test("blocks member changed event from different community", async () => {
    const received: Event[] = [];
    const filter = new CommunityFilter(makeHandler(received), ["c-1"]);

    await filter.handle(
      createEvent(EventType.COMMUNITY_MEMBER_CHANGED, {
        communityMemberChangedEvent: {
          eventReasonList: [EventReason.COMMUNITY_MEMBER_JOINED],
          member: null,
          community: { ...testCommunity, communityId: "c-2" },
        },
      })
    );

    expect(received).toHaveLength(0);
  });

  test("passes plugin managed event from matching community", async () => {
    const received: Event[] = [];
    const filter = new CommunityFilter(makeHandler(received), ["c-1"]);

    await filter.handle(
      createEvent(EventType.COMMUNITY_PLUGIN_MANAGED, {
        communityPluginManagedEvent: {
          eventReasonList: [EventReason.COMMUNITY_PLUGIN_INSTALLED],
          community: testCommunity,
        },
      })
    );

    expect(received).toHaveLength(1);
  });
});

describe("MemberEventRouter", () => {
  test("calls onJoined for COMMUNITY_MEMBER_JOINED", async () => {
    const joined: string[] = [];
    const router = new MemberEventRouter().onJoined((member) => {
      joined.push(member.userId);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_MEMBER_CHANGED, {
        communityMemberChangedEvent: {
          eventReasonList: [EventReason.COMMUNITY_MEMBER_JOINED],
          member: testUser,
          community: testCommunity,
        },
      })
    );

    expect(joined).toEqual(["u-1"]);
  });

  test("calls onLeft for COMMUNITY_MEMBER_LEFT", async () => {
    const left: string[] = [];
    const router = new MemberEventRouter().onLeft((member) => {
      left.push(member.userId);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_MEMBER_CHANGED, {
        communityMemberChangedEvent: {
          eventReasonList: [EventReason.COMMUNITY_MEMBER_LEFT],
          member: testUser,
          community: testCommunity,
        },
      })
    );

    expect(left).toEqual(["u-1"]);
  });

  test("passes community info to listener", async () => {
    const communityIds: string[] = [];
    const router = new MemberEventRouter().onJoined((_, community) => {
      communityIds.push(community.communityId);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_MEMBER_CHANGED, {
        communityMemberChangedEvent: {
          eventReasonList: [EventReason.COMMUNITY_MEMBER_JOINED],
          member: testUser,
          community: testCommunity,
        },
      })
    );

    expect(communityIds).toEqual(["c-1"]);
  });

  test("ignores non-member-changed events", async () => {
    const called: boolean[] = [];
    const router = new MemberEventRouter()
      .onJoined(() => {
        called.push(true);
      })
      .onLeft(() => {
        called.push(true);
      });

    await router.handle(createEvent(EventType.POST_CREATED));
    expect(called).toHaveLength(0);
  });

  test("ignores events with null member", async () => {
    const called: boolean[] = [];
    const router = new MemberEventRouter().onJoined(() => {
      called.push(true);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_MEMBER_CHANGED, {
        communityMemberChangedEvent: {
          eventReasonList: [EventReason.COMMUNITY_MEMBER_JOINED],
          member: null,
          community: testCommunity,
        },
      })
    );

    expect(called).toHaveLength(0);
  });

  test("supports method chaining", () => {
    const router = new MemberEventRouter();
    expect(router.onJoined(() => {}).onLeft(() => {})).toBe(router);
  });
});

describe("PluginManagedRouter", () => {
  test("calls onInstalled for COMMUNITY_PLUGIN_INSTALLED", async () => {
    const installed: string[] = [];
    const router = new PluginManagedRouter().onInstalled((c) => {
      installed.push(c.communityId);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_PLUGIN_MANAGED, {
        communityPluginManagedEvent: {
          eventReasonList: [EventReason.COMMUNITY_PLUGIN_INSTALLED],
          community: testCommunity,
        },
      })
    );

    expect(installed).toEqual(["c-1"]);
  });

  test("calls onUninstalled for COMMUNITY_PLUGIN_UNINSTALLED", async () => {
    const uninstalled: string[] = [];
    const router = new PluginManagedRouter().onUninstalled((c) => {
      uninstalled.push(c.communityId);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_PLUGIN_MANAGED, {
        communityPluginManagedEvent: {
          eventReasonList: [EventReason.COMMUNITY_PLUGIN_UNINSTALLED],
          community: testCommunity,
        },
      })
    );

    expect(uninstalled).toEqual(["c-1"]);
  });

  test("ignores non-plugin-managed events", async () => {
    const called: boolean[] = [];
    const router = new PluginManagedRouter()
      .onInstalled(() => {
        called.push(true);
      })
      .onUninstalled(() => {
        called.push(true);
      });

    await router.handle(createEvent(EventType.PING));
    expect(called).toHaveLength(0);
  });

  test("ignores events with null community", async () => {
    const called: boolean[] = [];
    const router = new PluginManagedRouter().onInstalled(() => {
      called.push(true);
    });

    await router.handle(
      createEvent(EventType.COMMUNITY_PLUGIN_MANAGED, {
        communityPluginManagedEvent: {
          eventReasonList: [EventReason.COMMUNITY_PLUGIN_INSTALLED],
          community: null,
        },
      })
    );

    expect(called).toHaveLength(0);
  });

  test("supports method chaining", () => {
    const router = new PluginManagedRouter();
    expect(router.onInstalled(() => {}).onUninstalled(() => {})).toBe(router);
  });
});

describe("MemberListPager", () => {
  const member1: User = { ...testUser, userId: "u-1" };
  const member2: User = { ...testUser, userId: "u-2" };

  test("yields all members from single page", async () => {
    const mockClient = {
      getCommunityMemberList: vi.fn().mockResolvedValueOnce({
        members: [member1, member2],
        nextPaginationCursor: undefined,
      }),
    };
    const pager = new MemberListPager(mockClient as never);

    const result: string[] = [];
    for await (const m of pager.iterate({ communityId: "c-1" })) {
      result.push(m.userId);
    }

    expect(result).toEqual(["u-1", "u-2"]);
    expect(mockClient.getCommunityMemberList).toHaveBeenCalledTimes(1);
  });

  test("follows cursor across multiple pages", async () => {
    const mockClient = {
      getCommunityMemberList: vi
        .fn()
        .mockResolvedValueOnce({
          members: [member1],
          nextPaginationCursor: "cursor-2",
        })
        .mockResolvedValueOnce({
          members: [member2],
          nextPaginationCursor: undefined,
        }),
    };
    const pager = new MemberListPager(mockClient as never);

    const result: string[] = [];
    for await (const m of pager.iterate({ communityId: "c-1" })) {
      result.push(m.userId);
    }

    expect(result).toEqual(["u-1", "u-2"]);
    expect(mockClient.getCommunityMemberList).toHaveBeenCalledTimes(2);
    expect(mockClient.getCommunityMemberList).toHaveBeenLastCalledWith({
      communityId: "c-1",
      paginationCursor: "cursor-2",
    });
  });

  test("respects maxPages option", async () => {
    const mockClient = {
      getCommunityMemberList: vi.fn().mockResolvedValue({
        members: [member1],
        nextPaginationCursor: "next",
      }),
    };
    const pager = new MemberListPager(mockClient as never);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const _m of pager.iterate(
      { communityId: "c-1" },
      { maxPages: 1 }
    )) {
      /* drain */
    }

    expect(mockClient.getCommunityMemberList).toHaveBeenCalledTimes(1);
  });
});

describe("ApplicationPager", () => {
  const communityUsingApp = {
    community: testCommunity,
    applicationVersionId: "v-1",
  };
  const appVersion = {
    applicationVersionId: "v-1",
    applicationId: "app-1",
    requirements: [],
  };

  test("fetchAll returns all results from single page", async () => {
    const mockClient = {
      getCommunitiesUsingApplication: vi.fn().mockResolvedValueOnce({
        communitiesUsingApplication: [communityUsingApp],
        applicationVersions: [appVersion],
        nextCursor: undefined,
      }),
    };
    const pager = new ApplicationPager(mockClient as never);
    const result = await pager.fetchAll();

    expect(result.communitiesUsingApplication).toHaveLength(1);
    expect(result.applicationVersions).toHaveLength(1);
  });

  test("fetchAll merges results across pages", async () => {
    const communityUsingApp2 = {
      ...communityUsingApp,
      community: { ...testCommunity, communityId: "c-2" },
    };
    const mockClient = {
      getCommunitiesUsingApplication: vi
        .fn()
        .mockResolvedValueOnce({
          communitiesUsingApplication: [communityUsingApp],
          applicationVersions: [appVersion],
          nextCursor: "cursor-2",
        })
        .mockResolvedValueOnce({
          communitiesUsingApplication: [communityUsingApp2],
          applicationVersions: [],
          nextCursor: undefined,
        }),
    };
    const pager = new ApplicationPager(mockClient as never);
    const result = await pager.fetchAll();

    expect(result.communitiesUsingApplication).toHaveLength(2);
    expect(mockClient.getCommunitiesUsingApplication).toHaveBeenCalledTimes(2);
  });

  test("iteratePages yields page by page", async () => {
    const mockClient = {
      getCommunitiesUsingApplication: vi
        .fn()
        .mockResolvedValueOnce({
          communitiesUsingApplication: [communityUsingApp],
          applicationVersions: [appVersion],
          nextCursor: "next",
        })
        .mockResolvedValueOnce({
          communitiesUsingApplication: [],
          applicationVersions: [],
          nextCursor: undefined,
        }),
    };
    const pager = new ApplicationPager(mockClient as never);
    const pageSizes: number[] = [];
    for await (const page of pager.iteratePages()) {
      pageSizes.push(page.communitiesUsingApplication.length);
    }

    expect(pageSizes).toEqual([1, 0]);
  });

  test("respects maxPages option in iteratePages", async () => {
    const mockClient = {
      getCommunitiesUsingApplication: vi.fn().mockResolvedValue({
        communitiesUsingApplication: [communityUsingApp],
        applicationVersions: [appVersion],
        nextCursor: "always-more",
      }),
    };
    const pager = new ApplicationPager(mockClient as never);
    const pages: unknown[] = [];
    for await (const page of pager.iteratePages(undefined, { maxPages: 2 })) {
      pages.push(page);
    }

    expect(pages).toHaveLength(2);
    expect(mockClient.getCommunitiesUsingApplication).toHaveBeenCalledTimes(2);
  });
});
