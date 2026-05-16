// Enums

export enum EventType {
  UNSPECIFIED = 0,
  PING = 1,
  POST_CREATED = 2,
  COMMUNITY_MEMBER_CHANGED = 3,
  CHAT_MESSAGE_RECEIVED = 4,
  COMMUNITY_PLUGIN_MANAGED = 5,
}

export enum EventReason {
  UNSPECIFIED = 0,
  PING = 1,
  POST_REPLY = 2,
  POST_MENTIONED = 3,
  POST_QUOTED = 4,
  POST_COMMUNITY = 5,
  COMMUNITY_MEMBER_JOINED = 6,
  COMMUNITY_MEMBER_LEFT = 7,
  DIRECT_MESSAGE_RECEIVED = 8,
  COMMUNITY_PLUGIN_INSTALLED = 9,
  COMMUNITY_PLUGIN_UNINSTALLED = 10,
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

export enum CommunityVisibility {
  UNSPECIFIED = 0,
  VISIBLE = 1,
  INVISIBLE = 2,
}

export enum CommunityAccessLevel {
  UNSPECIFIED = 0,
  PUBLIC = 1,
  APPROVAL_REQUIRED = 2,
}

export enum ApplicationRequirement {
  UNSPECIFIED = 0,
  PERMISSION_COMMUNITY_POST_READ = 1,
  PERMISSION_COMMUNITY_POST_CREATE = 2,
  PERMISSION_COMMUNITY_POST_RESTRICT = 3,
  PERMISSION_COMMUNITY_MEMBER_LIST_READ = 4,
  EVENT_REACTION_REPLY = 5,
  EVENT_REACTION_MENTION = 6,
  EVENT_COMMUNITY_POST_CREATED = 7,
  EVENT_COMMUNITY_MEMBER_JOINED = 8,
  EVENT_DIRECT_MESSAGE_RECEIVED = 9,
  PERMISSION_COMMUNITY_POST_STAMP_CREATE = 10,
  PERMISSION_COMMUNITY_MEMBER_DIRECT_MESSAGE_CREATE = 11,
}

// Models

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

// Aliases kept for backwards compatibility — these shapes are structurally identical to the Media* counterparts.
export type UserAvatar = MediaImage;
export type PostMediaImage = MediaImage;
export type PostMediaVideo = MediaVideo;
// PostMedia keeps its own mediaType enum so existing consumers comparing
// against PostMediaType continue to type-check. Numeric values match MediaType.
export type PostMedia = Omit<Media, "mediaType"> & { mediaType: PostMediaType };

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
  communityId?: string;
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

export interface CommunityStamp {
  stampId: string;
  url: string;
  searchTags: string[];
}

export interface CommunityStampSet {
  communityId: string;
  stamps: CommunityStamp[];
}

export interface Community {
  communityId: string;
  name: string;
  purpose: string;
  isArchived: boolean;
  visibility: CommunityVisibility;
  accessLevel: CommunityAccessLevel;
}

export interface CommunityUsingApplication {
  community: Community | null;
  applicationVersionId: string;
}

export interface ApplicationVersion {
  applicationVersionId: string;
  applicationId: string;
  requirements: ApplicationRequirement[];
}

// Events

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PingEvent {}

export interface PostCreatedEvent {
  eventReasonList: EventReason[];
  post: Post | null;
  issuer: User | null;
  postedCommunity?: Community | null;
}

export interface CommunityMemberChangedEvent {
  eventReasonList: EventReason[];
  member: User | null;
  community: Community | null;
}

export interface ChatMessageReceivedEvent {
  eventReasonList: EventReason[];
  message: ChatMessage | null;
  issuer: User | null;
}

export interface CommunityPluginManagedEvent {
  eventReasonList: EventReason[];
  community: Community | null;
}

export interface Event {
  eventId: string;
  eventType: EventType;
  pingEvent?: PingEvent;
  postCreatedEvent?: PostCreatedEvent;
  communityMemberChangedEvent?: CommunityMemberChangedEvent;
  chatMessageReceivedEvent?: ChatMessageReceivedEvent;
  communityPluginManagedEvent?: CommunityPluginManagedEvent;
}

// Request/Response types

export interface CreatePostRequest {
  text: string;
  inReplyToPostId?: string;
  quotedPostId?: string;
  communityId?: string;
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

export type SendChatMessageRequest =
  | { roomId: string; text: string; mediaId?: string }
  | { roomId: string; text?: string; mediaId: string };

export interface GetStampsRequest {
  officialStampLanguage?: LanguageCode;
  communityIds?: string[];
}

export interface GetStampsResponse {
  officialStampSets: OfficialStampSet[];
  communityStampSets: CommunityStampSet[];
}

export interface GetCommunitiesRequest {
  communityIdList: string[];
}

export interface GetCommunityTimelineRequest {
  communityId: string;
  untilCursor?: string;
  sinceCursor?: string;
}

export interface GetCommunityMemberListRequest {
  communityId: string;
  paginationCursor?: string;
}

export interface GetCommunityMemberListResponse {
  members: User[];
  nextPaginationCursor?: string;
}

export interface RestrictCommunityPostRequest {
  postId: string;
}

export interface GetCommunitiesUsingApplicationRequest {
  cursor?: string;
}

export interface GetCommunitiesUsingApplicationResponse {
  communitiesUsingApplication: CommunityUsingApplication[];
  applicationVersions: ApplicationVersion[];
  nextCursor?: string;
}

export type SendDirectMessageToCommunityMemberRequest =
  | {
      receiverId: string;
      communityId: string;
      text: string;
      mediaIds?: string[];
      postId?: string;
    }
  | {
      receiverId: string;
      communityId: string;
      text?: string;
      mediaIds: string[];
      postId?: string;
    };
