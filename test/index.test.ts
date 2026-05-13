/// <reference types="vitest/globals" />
import { OAuth2Authenticator } from "../src/auth";
import {
  EventType,
  EventReason,
  PostVisibility,
  PostAccessLevel,
  UserVisibility,
  UserAccessLevel,
  LanguageCode,
  StampSetType,
  MediaUploadType,
  MediaUploadStatus,
  PostMaskType,
  PostPublishingType,
  MediaType,
  PostMediaType,
} from "../src/types";
import {
  convertUser,
  convertPost,
  convertChatMessage,
  convertEvent,
  convertOfficialStampSet,
} from "../src/convert";

describe("Types and Enums", () => {
  test("EventType enum values", () => {
    expect(EventType.UNSPECIFIED).toBe(0);
    expect(EventType.PING).toBe(1);
    expect(EventType.POST_CREATED).toBe(2);
    expect(EventType.CHAT_MESSAGE_RECEIVED).toBe(4);
  });

  test("EventReason enum values", () => {
    expect(EventReason.POST_REPLY).toBe(2);
    expect(EventReason.POST_MENTIONED).toBe(3);
    expect(EventReason.POST_QUOTED).toBe(4);
    expect(EventReason.DIRECT_MESSAGE_RECEIVED).toBe(8);
  });

  test("PostVisibility enum values", () => {
    expect(PostVisibility.VISIBLE).toBe(1);
    expect(PostVisibility.INVISIBLE).toBe(2);
  });

  test("PostAccessLevel enum values", () => {
    expect(PostAccessLevel.PUBLIC).toBe(1);
    expect(PostAccessLevel.PRIVATE).toBe(2);
  });

  test("UserVisibility enum values", () => {
    expect(UserVisibility.VISIBLE).toBe(1);
    expect(UserVisibility.INVISIBLE).toBe(2);
  });

  test("UserAccessLevel enum values", () => {
    expect(UserAccessLevel.PUBLIC).toBe(1);
    expect(UserAccessLevel.PRIVATE).toBe(2);
  });

  test("LanguageCode enum values", () => {
    expect(LanguageCode.JP).toBe(1);
    expect(LanguageCode.EN).toBe(2);
  });

  test("StampSetType enum values", () => {
    expect(StampSetType.DEFAULT).toBe(1);
    expect(StampSetType.SEASONAL).toBe(2);
  });

  test("MediaUploadType enum values", () => {
    expect(MediaUploadType.IMAGE).toBe(1);
    expect(MediaUploadType.VIDEO).toBe(2);
  });

  test("MediaUploadStatus enum values", () => {
    expect(MediaUploadStatus.UPLOAD_PENDING).toBe(1);
    expect(MediaUploadStatus.PROCESSING).toBe(2);
    expect(MediaUploadStatus.COMPLETED).toBe(3);
    expect(MediaUploadStatus.FAILED).toBe(4);
  });

  test("PostMaskType enum values", () => {
    expect(PostMaskType.SENSITIVE).toBe(1);
    expect(PostMaskType.SPOILER).toBe(2);
  });

  test("PostPublishingType enum values", () => {
    expect(PostPublishingType.NOT_PUBLISHING).toBe(1);
  });

  test("MediaType enum values", () => {
    expect(MediaType.IMAGE).toBe(1);
    expect(MediaType.VIDEO).toBe(2);
  });

  test("PostMediaType enum values", () => {
    expect(PostMediaType.IMAGE).toBe(1);
    expect(PostMediaType.VIDEO).toBe(2);
  });
});

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
});

describe("OAuth2Authenticator", () => {
  test("constructor accepts options", () => {
    const auth = new OAuth2Authenticator({
      clientId: "test-id",
      clientSecret: "test-secret",
      tokenUrl: "https://example.com/token",
    });
    expect(auth).toBeDefined();
    expect(auth.getAccessToken).toBeDefined();
  });
});
