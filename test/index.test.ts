/// <reference types="vitest/globals" />
import {
  EventType,
  EventReason,
  PostVisibility,
  PostMaskType,
  UserVisibility,
  UserAccessLevel,
  StampSetType,
  CommunityVisibility,
  CommunityAccessLevel,
} from "../src/types";
import {
  convertUser,
  convertPost,
  convertChatMessage,
  convertEvent,
  convertOfficialStampSet,
  convertCommunity,
  convertCommunityStampSet,
  convertCommunityUsingApplication,
  convertApplicationVersion,
} from "../src/convert";

describe("Converters", () => {
  test("convertUser with full data", () => {
    const raw = {
      userId: "user-1",
      isDisabled: false,
      name: "testuser",
      displayName: "Test User",
      profile: "Hello!",
      userAvatar: {
        largeImageUrl: "https://example.com/large.png",
        largeImageMimeType: "image/png",
        largeImageHeight: 256,
        largeImageWidth: 256,
        smallImageUrl: "https://example.com/small.png",
        smallImageMimeType: "image/png",
        smallImageHeight: 64,
        smallImageWidth: 64,
      },
      visibility: 1,
      accessLevel: 1,
    };

    const user = convertUser(raw);
    expect(user.userId).toBe("user-1");
    expect(user.name).toBe("testuser");
    expect(user.displayName).toBe("Test User");
    expect(user.userAvatar).not.toBeNull();
    expect(user.userAvatar!.largeImageUrl).toBe(
      "https://example.com/large.png"
    );
    expect(user.visibility).toBe(UserVisibility.VISIBLE);
    expect(user.accessLevel).toBe(UserAccessLevel.PUBLIC);
  });

  test("convertUser with empty data", () => {
    const user = convertUser({});
    expect(user.userId).toBe("");
    expect(user.isDisabled).toBe(false);
    expect(user.userAvatar).toBeNull();
  });

  test("convertPost with full data", () => {
    const raw = {
      postId: "post-1",
      isDeleted: false,
      creatorId: "user-1",
      text: "Hello mixi2!",
      createdAt: { seconds: 1700000000, nanos: 0 },
      postMediaList: [],
      visibility: 1,
      accessLevel: 1,
      stamps: [],
    };

    const post = convertPost(raw);
    expect(post.postId).toBe("post-1");
    expect(post.text).toBe("Hello mixi2!");
    expect(post.createdAt).toBeInstanceOf(Date);
    expect(post.createdAt!.getTime()).toBe(1700000000000);
    expect(post.visibility).toBe(PostVisibility.VISIBLE);
  });

  test("convertPost with reply", () => {
    const raw = {
      postId: "post-2",
      creatorId: "user-1",
      text: "Reply!",
      inReplyToPostId: "post-1",
      createdAt: { seconds: 1700000001, nanos: 0 },
      postMediaList: [],
      stamps: [],
    };

    const post = convertPost(raw);
    expect(post.inReplyToPostId).toBe("post-1");
  });

  test("convertPost with mask", () => {
    const raw = {
      postId: "post-3",
      text: "Spoiler!",
      postMask: { maskType: 2, caption: "ネタバレ注意" },
      postMediaList: [],
      stamps: [],
    };

    const post = convertPost(raw);
    expect(post.postMask).toBeDefined();
    expect(post.postMask!.maskType).toBe(PostMaskType.SPOILER);
    expect(post.postMask!.caption).toBe("ネタバレ注意");
  });

  test("convertChatMessage", () => {
    const raw = {
      roomId: "room-1",
      messageId: "msg-1",
      creatorId: "user-1",
      text: "Hello!",
      createdAt: { seconds: 1700000000, nanos: 500000000 },
      mediaList: [],
    };

    const msg = convertChatMessage(raw);
    expect(msg.roomId).toBe("room-1");
    expect(msg.text).toBe("Hello!");
    expect(msg.createdAt).toBeInstanceOf(Date);
    expect(msg.createdAt!.getTime()).toBe(1700000000500);
  });

  test("convertEvent for POST_CREATED", () => {
    const raw = {
      eventId: "evt-1",
      eventType: 2,
      postCreatedEvent: {
        eventReasonList: [3],
        post: {
          postId: "post-1",
          text: "@bot hello!",
          postMediaList: [],
          stamps: [],
        },
        issuer: {
          userId: "user-1",
          name: "testuser",
        },
      },
    };

    const event = convertEvent(raw);
    expect(event.eventId).toBe("evt-1");
    expect(event.eventType).toBe(EventType.POST_CREATED);
    expect(event.postCreatedEvent).toBeDefined();
    expect(event.postCreatedEvent!.post!.postId).toBe("post-1");
    expect(event.postCreatedEvent!.issuer!.userId).toBe("user-1");
    expect(event.postCreatedEvent!.eventReasonList).toContain(
      EventReason.POST_MENTIONED
    );
  });

  test("convertEvent for CHAT_MESSAGE_RECEIVED", () => {
    const raw = {
      eventId: "evt-2",
      eventType: 4,
      chatMessageReceivedEvent: {
        eventReasonList: [8],
        message: {
          roomId: "room-1",
          messageId: "msg-1",
          text: "Hello!",
          mediaList: [],
        },
        issuer: {
          userId: "user-2",
        },
      },
    };

    const event = convertEvent(raw);
    expect(event.eventType).toBe(EventType.CHAT_MESSAGE_RECEIVED);
    expect(event.chatMessageReceivedEvent).toBeDefined();
    expect(event.chatMessageReceivedEvent!.message!.roomId).toBe("room-1");
  });

  test("convertEvent for PING", () => {
    const raw = {
      eventId: "evt-3",
      eventType: 1,
      pingEvent: {},
    };

    const event = convertEvent(raw);
    expect(event.eventType).toBe(EventType.PING);
    expect(event.pingEvent).toBeDefined();
  });

  test("convertOfficialStampSet", () => {
    const raw = {
      name: "Default Set",
      spriteUrl: "https://example.com/sprite.png",
      stamps: [
        {
          stampId: "stamp-1",
          index: 0,
          searchTags: ["happy", "smile"],
          url: "https://example.com/stamp1.png",
        },
      ],
      stampSetId: "set-1",
      stampSetType: 1,
    };

    const set = convertOfficialStampSet(raw);
    expect(set.name).toBe("Default Set");
    expect(set.stamps).toHaveLength(1);
    expect(set.stamps[0]!.stampId).toBe("stamp-1");
    expect(set.stampSetType).toBe(StampSetType.DEFAULT);
  });

  test("convertCommunity with full data", () => {
    const raw = {
      communityId: "comm-1",
      name: "Test Community",
      purpose: "テスト用コミュニティ",
      isArchived: false,
      visibility: 1,
      accessLevel: 1,
    };
    const community = convertCommunity(raw);
    expect(community.communityId).toBe("comm-1");
    expect(community.name).toBe("Test Community");
    expect(community.purpose).toBe("テスト用コミュニティ");
    expect(community.isArchived).toBe(false);
    expect(community.visibility).toBe(CommunityVisibility.VISIBLE);
    expect(community.accessLevel).toBe(CommunityAccessLevel.PUBLIC);
  });

  test("convertCommunity with empty data", () => {
    const community = convertCommunity({});
    expect(community.communityId).toBe("");
    expect(community.name).toBe("");
    expect(community.isArchived).toBe(false);
    expect(community.visibility).toBe(CommunityVisibility.UNSPECIFIED);
  });

  test("convertCommunityStampSet", () => {
    const raw = {
      communityId: "comm-1",
      stamps: [
        {
          stampId: "cs-1",
          url: "https://example.com/cs1.png",
          searchTags: ["cool"],
        },
        { stampId: "cs-2", url: "https://example.com/cs2.png", searchTags: [] },
      ],
    };
    const set = convertCommunityStampSet(raw);
    expect(set.communityId).toBe("comm-1");
    expect(set.stamps).toHaveLength(2);
    expect(set.stamps[0]!.stampId).toBe("cs-1");
    expect(set.stamps[0]!.url).toBe("https://example.com/cs1.png");
    expect(set.stamps[0]!.searchTags).toEqual(["cool"]);
  });

  test("convertCommunityUsingApplication", () => {
    const raw = {
      community: {
        communityId: "comm-1",
        name: "Community",
        purpose: "",
        isArchived: false,
        visibility: 1,
        accessLevel: 1,
      },
      applicationVersionId: "ver-1",
    };
    const c = convertCommunityUsingApplication(raw);
    expect(c.community).not.toBeNull();
    expect(c.community!.communityId).toBe("comm-1");
    expect(c.applicationVersionId).toBe("ver-1");
  });

  test("convertCommunityUsingApplication with null community", () => {
    const raw = { applicationVersionId: "ver-1" };
    const c = convertCommunityUsingApplication(raw);
    expect(c.community).toBeNull();
    expect(c.applicationVersionId).toBe("ver-1");
  });

  test("convertApplicationVersion", () => {
    const raw = {
      applicationVersionId: "ver-1",
      applicationId: "app-1",
      requirements: [1, 2, 3],
    };
    const v = convertApplicationVersion(raw);
    expect(v.applicationVersionId).toBe("ver-1");
    expect(v.applicationId).toBe("app-1");
    expect(v.requirements).toEqual([1, 2, 3]);
  });

  test("convertPost includes communityId", () => {
    const raw = {
      postId: "post-5",
      text: "Community post",
      communityId: "comm-1",
      postMediaList: [],
      stamps: [],
    };
    const post = convertPost(raw);
    expect(post.communityId).toBe("comm-1");
  });

  test("convertPost without communityId returns undefined", () => {
    const raw = {
      postId: "post-6",
      text: "Normal post",
      postMediaList: [],
      stamps: [],
    };
    const post = convertPost(raw);
    expect(post.communityId).toBeUndefined();
  });

  test("convertEvent for COMMUNITY_MEMBER_CHANGED", () => {
    const raw = {
      eventId: "evt-10",
      eventType: 3,
      communityMemberChangedEvent: {
        eventReasonList: [6],
        member: { userId: "user-5", name: "newmember" },
        community: { communityId: "comm-1", name: "Community" },
      },
    };
    const event = convertEvent(raw);
    expect(event.eventType).toBe(EventType.COMMUNITY_MEMBER_CHANGED);
    expect(event.communityMemberChangedEvent).toBeDefined();
    expect(event.communityMemberChangedEvent!.member!.userId).toBe("user-5");
    expect(event.communityMemberChangedEvent!.community!.communityId).toBe(
      "comm-1"
    );
    expect(event.communityMemberChangedEvent!.eventReasonList).toContain(
      EventReason.COMMUNITY_MEMBER_JOINED
    );
  });

  test("convertEvent for COMMUNITY_PLUGIN_MANAGED", () => {
    const raw = {
      eventId: "evt-11",
      eventType: 5,
      communityPluginManagedEvent: {
        eventReasonList: [9],
        community: { communityId: "comm-2", name: "Another Community" },
      },
    };
    const event = convertEvent(raw);
    expect(event.eventType).toBe(EventType.COMMUNITY_PLUGIN_MANAGED);
    expect(event.communityPluginManagedEvent).toBeDefined();
    expect(event.communityPluginManagedEvent!.community!.communityId).toBe(
      "comm-2"
    );
    expect(event.communityPluginManagedEvent!.eventReasonList).toContain(
      EventReason.COMMUNITY_PLUGIN_INSTALLED
    );
  });

  test("convertEvent POST_CREATED with postedCommunity", () => {
    const raw = {
      eventId: "evt-12",
      eventType: 2,
      postCreatedEvent: {
        eventReasonList: [5],
        post: {
          postId: "post-10",
          text: "Community post!",
          postMediaList: [],
          stamps: [],
        },
        issuer: { userId: "user-6" },
        postedCommunity: { communityId: "comm-3", name: "Test Comm" },
      },
    };
    const event = convertEvent(raw);
    expect(event.postCreatedEvent!.postedCommunity).toBeDefined();
    expect(event.postCreatedEvent!.postedCommunity!.communityId).toBe("comm-3");
    expect(event.postCreatedEvent!.eventReasonList).toContain(
      EventReason.POST_COMMUNITY
    );
  });
});
