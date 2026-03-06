// Enums

export enum EventType {
  UNSPECIFIED = 0,
  PING = 1,
  POST_CREATED = 2,
  CHAT_MESSAGE_RECEIVED = 4,
}

export enum EventReason {
  UNSPECIFIED = 0,
  PING = 1,
  POST_REPLY = 2,
  POST_MENTIONED = 3,
  POST_QUOTED = 4,
  DIRECT_MESSAGE_RECEIVED = 8,
}

export enum MediaType {
  UNSPECIFIED = 0,
  IMAGE = 1,
  VIDEO = 2,
}

export enum PostMediaType {
  UNSPECIFIED = 0,
  IMAGE = 1,
  VIDEO = 2,
}

export enum PostVisibility {
  UNSPECIFIED = 0,
  VISIBLE = 1,
  INVISIBLE = 2,
}

export enum PostAccessLevel {
  UNSPECIFIED = 0,
  PUBLIC = 1,
  PRIVATE = 2,
}

export enum PostMaskType {
  UNSPECIFIED = 0,
  SENSITIVE = 1,
  SPOILER = 2,
}

export enum PostPublishingType {
  UNSPECIFIED = 0,
  NOT_PUBLISHING = 1,
}

export enum UserVisibility {
  UNSPECIFIED = 0,
  VISIBLE = 1,
  INVISIBLE = 2,
}

export enum UserAccessLevel {
  UNSPECIFIED = 0,
  PUBLIC = 1,
  PRIVATE = 2,
}

export enum LanguageCode {
  UNSPECIFIED = 0,
  JP = 1,
  EN = 2,
}

export enum StampSetType {
  UNSPECIFIED = 0,
  DEFAULT = 1,
  SEASONAL = 2,
}

export enum MediaUploadType {
  UNSPECIFIED = 0,
  IMAGE = 1,
  VIDEO = 2,
}

export enum MediaUploadStatus {
  UNSPECIFIED = 0,
  UPLOAD_PENDING = 1,
  PROCESSING = 2,
  COMPLETED = 3,
  FAILED = 4,
}

// Models

export interface UserAvatar {
  largeImageUrl: string;
  largeImageMimeType: string;
  largeImageHeight: number;
  largeImageWidth: number;
  smallImageUrl: string;
  smallImageMimeType: string;
  smallImageHeight: number;
  smallImageWidth: number;
}

export interface User {
  userId: string;
  isDisabled: boolean;
  name: string;
  displayName: string;
  profile: string;
  userAvatar: UserAvatar | null;
  visibility: UserVisibility;
  accessLevel: UserAccessLevel;
}

export interface MediaImage {
  largeImageUrl: string;
  largeImageMimeType: string;
  largeImageHeight: number;
  largeImageWidth: number;
  smallImageUrl: string;
  smallImageMimeType: string;
  smallImageHeight: number;
  smallImageWidth: number;
}

export interface MediaVideo {
  videoUrl: string;
  videoMimeType: string;
  videoHeight: number;
  videoWidth: number;
  previewImageUrl: string;
  previewImageMimeType: string;
  previewImageHeight: number;
  previewImageWidth: number;
  duration: number;
}

export interface MediaStamp {
  url: string;
  mimeType: string;
  height: number;
  width: number;
}

export interface Media {
  mediaType: MediaType;
  image?: MediaImage;
  video?: MediaVideo;
}

export interface PostMediaImage {
  largeImageUrl: string;
  largeImageMimeType: string;
  largeImageHeight: number;
  largeImageWidth: number;
  smallImageUrl: string;
  smallImageMimeType: string;
  smallImageHeight: number;
  smallImageWidth: number;
}

export interface PostMediaVideo {
  videoUrl: string;
  videoMimeType: string;
  videoHeight: number;
  videoWidth: number;
  previewImageUrl: string;
  previewImageMimeType: string;
  previewImageHeight: number;
  previewImageWidth: number;
  duration: number;
}

export interface PostMedia {
  mediaType: PostMediaType;
  image?: PostMediaImage;
  video?: PostMediaVideo;
}

export interface PostMask {
  maskType: PostMaskType;
  caption: string;
}

export interface PostStamp {
  stamp: MediaStamp | null;
  count: number;
}

export interface Post {
  postId: string;
  isDeleted: boolean;
  creatorId: string;
  text: string;
  createdAt: Date | null;
  postMediaList: PostMedia[];
  inReplyToPostId?: string;
  postMask?: PostMask;
  visibility: PostVisibility;
  accessLevel: PostAccessLevel;
  stamps: PostStamp[];
  readerStampId?: string;
}

export interface ChatMessage {
  roomId: string;
  messageId: string;
  creatorId: string;
  text: string;
  createdAt: Date | null;
  mediaList: Media[];
  postId?: string;
}

export interface OfficialStamp {
  stampId: string;
  index: number;
  searchTags: string[];
  url: string;
}

export interface OfficialStampSet {
  name: string;
  spriteUrl: string;
  stamps: OfficialStamp[];
  stampSetId: string;
  startAt?: Date;
  endAt?: Date;
  stampSetType: StampSetType;
}

// Events

export interface PingEvent {}

export interface PostCreatedEvent {
  eventReasonList: EventReason[];
  post: Post | null;
  issuer: User | null;
}

export interface ChatMessageReceivedEvent {
  eventReasonList: EventReason[];
  message: ChatMessage | null;
  issuer: User | null;
}

export interface Event {
  eventId: string;
  eventType: EventType;
  pingEvent?: PingEvent;
  postCreatedEvent?: PostCreatedEvent;
  chatMessageReceivedEvent?: ChatMessageReceivedEvent;
}

// Request/Response types

export interface CreatePostRequest {
  text: string;
  inReplyToPostId?: string;
  quotedPostId?: string;
  mediaIdList?: string[];
  postMask?: PostMask;
  publishingType?: PostPublishingType;
}

export interface InitiatePostMediaUploadRequest {
  contentType: string;
  dataSize: number;
  mediaType: MediaUploadType;
  description?: string;
}

export interface InitiatePostMediaUploadResponse {
  mediaId: string;
  uploadUrl: string;
}

export interface GetPostMediaStatusResponse {
  status: MediaUploadStatus;
}

export interface SendChatMessageRequest {
  roomId: string;
  text?: string;
  mediaId?: string;
}

export interface GetStampsRequest {
  officialStampLanguage?: LanguageCode;
}
