import type {
  User,
  UserAvatar,
  Post,
  PostMedia,
  PostMask,
  PostStamp,
  MediaStamp,
  ChatMessage,
  Media,
  MediaImage,
  MediaVideo,
  OfficialStampSet,
  OfficialStamp,
  Event,
  PostCreatedEvent,
  ChatMessageReceivedEvent,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawObject = Record<string, any>;

function toDate(ts: unknown): Date | null {
  if (!ts) return null;
  if (ts instanceof Date) return ts;
  const obj = ts as RawObject;
  if (obj.seconds !== undefined) {
    const ms =
      Number(obj.seconds) * 1000 + Math.floor((obj.nanos || 0) / 1_000_000);
    return new Date(ms);
  }
  return null;
}

export function convertUserAvatar(raw: unknown): UserAvatar | null {
  if (!raw) return null;
  const r = raw as RawObject;
  return {
    largeImageUrl: r.largeImageUrl || "",
    largeImageMimeType: r.largeImageMimeType || "",
    largeImageHeight: r.largeImageHeight || 0,
    largeImageWidth: r.largeImageWidth || 0,
    smallImageUrl: r.smallImageUrl || "",
    smallImageMimeType: r.smallImageMimeType || "",
    smallImageHeight: r.smallImageHeight || 0,
    smallImageWidth: r.smallImageWidth || 0,
  };
}

export function convertUser(raw: unknown): User {
  const r = raw as RawObject;
  return {
    userId: r.userId || "",
    isDisabled: r.isDisabled || false,
    name: r.name || "",
    displayName: r.displayName || "",
    profile: r.profile || "",
    userAvatar: convertUserAvatar(r.userAvatar),
    visibility: r.visibility || 0,
    accessLevel: r.accessLevel || 0,
  };
}

export function convertMediaImage(raw: unknown): MediaImage | undefined {
  if (!raw) return undefined;
  const r = raw as RawObject;
  return {
    largeImageUrl: r.largeImageUrl || "",
    largeImageMimeType: r.largeImageMimeType || "",
    largeImageHeight: r.largeImageHeight || 0,
    largeImageWidth: r.largeImageWidth || 0,
    smallImageUrl: r.smallImageUrl || "",
    smallImageMimeType: r.smallImageMimeType || "",
    smallImageHeight: r.smallImageHeight || 0,
    smallImageWidth: r.smallImageWidth || 0,
  };
}

export function convertMediaVideo(raw: unknown): MediaVideo | undefined {
  if (!raw) return undefined;
  const r = raw as RawObject;
  return {
    videoUrl: r.videoUrl || "",
    videoMimeType: r.videoMimeType || "",
    videoHeight: r.videoHeight || 0,
    videoWidth: r.videoWidth || 0,
    previewImageUrl: r.previewImageUrl || "",
    previewImageMimeType: r.previewImageMimeType || "",
    previewImageHeight: r.previewImageHeight || 0,
    previewImageWidth: r.previewImageWidth || 0,
    duration: r.duration || 0,
  };
}

export function convertMedia(raw: unknown): Media {
  const r = raw as RawObject;
  return {
    mediaType: r.mediaType || 0,
    image: convertMediaImage(r.image),
    video: convertMediaVideo(r.video),
  };
}

export function convertMediaStamp(raw: unknown): MediaStamp | null {
  if (!raw) return null;
  const r = raw as RawObject;
  return {
    url: r.url || "",
    mimeType: r.mimeType || "",
    height: r.height || 0,
    width: r.width || 0,
  };
}

export function convertPostMedia(raw: unknown): PostMedia {
  const r = raw as RawObject;
  return {
    mediaType: r.mediaType || 0,
    image: r.image ? convertMediaImage(r.image) : undefined,
    video: r.video ? convertMediaVideo(r.video) : undefined,
  };
}

export function convertPostMask(raw: unknown): PostMask | undefined {
  if (!raw) return undefined;
  const r = raw as RawObject;
  return {
    maskType: r.maskType || 0,
    caption: r.caption || "",
  };
}

export function convertPostStamp(raw: unknown): PostStamp {
  const r = raw as RawObject;
  return {
    stamp: convertMediaStamp(r.stamp),
    count: Number(r.count) || 0,
  };
}

export function convertPost(raw: unknown): Post {
  const r = raw as RawObject;
  return {
    postId: r.postId || "",
    isDeleted: r.isDeleted || false,
    creatorId: r.creatorId || "",
    text: r.text || "",
    createdAt: toDate(r.createdAt),
    postMediaList: (r.postMediaList || []).map(convertPostMedia),
    inReplyToPostId: r.inReplyToPostId || undefined,
    postMask: convertPostMask(r.postMask),
    visibility: r.visibility || 0,
    accessLevel: r.accessLevel || 0,
    stamps: (r.stamps || []).map(convertPostStamp),
    readerStampId: r.readerStampId || undefined,
  };
}

export function convertChatMessage(raw: unknown): ChatMessage {
  const r = raw as RawObject;
  return {
    roomId: r.roomId || "",
    messageId: r.messageId || "",
    creatorId: r.creatorId || "",
    text: r.text || "",
    createdAt: toDate(r.createdAt),
    mediaList: (r.mediaList || []).map(convertMedia),
    postId: r.postId || undefined,
  };
}

export function convertOfficialStamp(raw: unknown): OfficialStamp {
  const r = raw as RawObject;
  return {
    stampId: r.stampId || "",
    index: r.index || 0,
    searchTags: r.searchTags || [],
    url: r.url || "",
  };
}

export function convertOfficialStampSet(raw: unknown): OfficialStampSet {
  const r = raw as RawObject;
  return {
    name: r.name || "",
    spriteUrl: r.spriteUrl || "",
    stamps: (r.stamps || []).map(convertOfficialStamp),
    stampSetId: r.stampSetId || "",
    startAt: toDate(r.startAt) || undefined,
    endAt: toDate(r.endAt) || undefined,
    stampSetType: r.stampSetType || 0,
  };
}

export function convertPostCreatedEvent(raw: unknown): PostCreatedEvent {
  const r = raw as RawObject;
  return {
    eventReasonList: r.eventReasonList || [],
    post: r.post ? convertPost(r.post) : null,
    issuer: r.issuer ? convertUser(r.issuer) : null,
  };
}

export function convertChatMessageReceivedEvent(
  raw: unknown,
): ChatMessageReceivedEvent {
  const r = raw as RawObject;
  return {
    eventReasonList: r.eventReasonList || [],
    message: r.message ? convertChatMessage(r.message) : null,
    issuer: r.issuer ? convertUser(r.issuer) : null,
  };
}

export function convertEvent(raw: unknown): Event {
  const r = raw as RawObject;
  return {
    eventId: r.eventId || "",
    eventType: r.eventType || 0,
    pingEvent: r.pingEvent || undefined,
    postCreatedEvent: r.postCreatedEvent
      ? convertPostCreatedEvent(r.postCreatedEvent)
      : undefined,
    chatMessageReceivedEvent: r.chatMessageReceivedEvent
      ? convertChatMessageReceivedEvent(r.chatMessageReceivedEvent)
      : undefined,
  };
}
