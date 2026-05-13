import * as grpc from "@grpc/grpc-js";
import type { Authenticator } from "./auth";
import { getApiServiceClient } from "./proto";
import type {
  Post,
  User,
  ChatMessage,
  Community,
  CommunityUsingApplication,
  ApplicationVersion,
  GetStampsResponse,
  CreatePostRequest,
  InitiatePostMediaUploadRequest,
  InitiatePostMediaUploadResponse,
  GetPostMediaStatusResponse,
  SendChatMessageRequest,
  GetStampsRequest,
  GetCommunityTimelineRequest,
  GetCommunityMemberListRequest,
  GetCommunityMemberListResponse,
  RestrictCommunityPostRequest,
  GetCommunitiesUsingApplicationRequest,
  GetCommunitiesUsingApplicationResponse,
  SendDirectMessageToCommunityMemberRequest,
} from "./types";
import {
  convertPost,
  convertUser,
  convertChatMessage,
  convertOfficialStampSet,
  convertCommunityStampSet,
  convertCommunity,
  convertCommunityUsingApplication,
  convertApplicationVersion,
} from "./convert";

export interface ClientOptions {
  apiAddress: string;
  authenticator: Authenticator;
  authKey?: string;
}

export class Client {
  private readonly grpcClient: grpc.Client;
  private readonly authenticator: Authenticator;
  private readonly authKey?: string;

  constructor(options: ClientOptions) {
    const ClientConstructor = getApiServiceClient();
    this.grpcClient = new ClientConstructor(
      options.apiAddress,
      grpc.credentials.createSsl()
    );
    this.authenticator = options.authenticator;
    this.authKey = options.authKey;
  }

  async getAccessToken(): Promise<string> {
    return this.authenticator.getAccessToken();
  }

  private async getMetadata(): Promise<grpc.Metadata> {
    const token = await this.authenticator.getAccessToken();
    const metadata = new grpc.Metadata();
    metadata.add("authorization", `Bearer ${token}`);
    if (this.authKey) {
      metadata.add("x-auth-key", this.authKey);
    }
    return metadata;
  }

  private async call<TReq, TRes>(method: string, request: TReq): Promise<TRes> {
    const metadata = await this.getMetadata();
    return new Promise<TRes>((resolve, reject) => {
      const fn = (
        this.grpcClient as unknown as Record<
          string,
          (...args: unknown[]) => void
        >
      )[method];
      if (!fn) {
        reject(new Error(`Method "${method}" not found on gRPC client`));
        return;
      }
      fn.call(
        this.grpcClient,
        request,
        metadata,
        (err: grpc.ServiceError | null, response: TRes) => {
          if (err) reject(err);
          else resolve(response);
        }
      );
    });
  }

  async getUsers(userIdList: string[]): Promise<User[]> {
    const response = await this.call<
      { userIdList: string[] },
      { users: unknown[] }
    >("getUsers", {
      userIdList,
    });
    return (response.users || []).map(convertUser);
  }

  async getPosts(postIdList: string[]): Promise<Post[]> {
    const response = await this.call<
      { postIdList: string[] },
      { posts: unknown[] }
    >("getPosts", {
      postIdList,
    });
    return (response.posts || []).map(convertPost);
  }

  async getCommunities(communityIdList: string[]): Promise<Community[]> {
    const response = await this.call<
      { communityIdList: string[] },
      { communities: unknown[] }
    >("getCommunities", {
      communityIdList,
    });
    return (response.communities || []).map(convertCommunity);
  }

  async createPost(request: CreatePostRequest): Promise<Post> {
    const response = await this.call<CreatePostRequest, { post: unknown }>(
      "createPost",
      request
    );
    return convertPost(response.post);
  }

  async deletePost(postId: string): Promise<boolean> {
    const response = await this.call<{ postId: string }, { deleted: boolean }>(
      "deletePost",
      {
        postId,
      }
    );
    return response.deleted ?? false;
  }

  async initiatePostMediaUpload(
    request: InitiatePostMediaUploadRequest
  ): Promise<InitiatePostMediaUploadResponse> {
    return this.call<
      InitiatePostMediaUploadRequest,
      InitiatePostMediaUploadResponse
    >("initiatePostMediaUpload", request);
  }

  async getPostMediaStatus(
    mediaId: string
  ): Promise<GetPostMediaStatusResponse> {
    return this.call<{ mediaId: string }, GetPostMediaStatusResponse>(
      "getPostMediaStatus",
      {
        mediaId,
      }
    );
  }

  async sendChatMessage(request: SendChatMessageRequest): Promise<ChatMessage> {
    const response = await this.call<
      SendChatMessageRequest,
      { message: unknown }
    >("sendChatMessage", request);
    return convertChatMessage(response.message);
  }

  async getCommunityTimeline(
    request: GetCommunityTimelineRequest
  ): Promise<Post[]> {
    const response = await this.call<
      GetCommunityTimelineRequest,
      { posts: unknown[] }
    >("getCommunityTimeline", request);
    return (response.posts || []).map(convertPost);
  }

  async getCommunityMemberList(
    request: GetCommunityMemberListRequest
  ): Promise<GetCommunityMemberListResponse> {
    const response = await this.call<
      GetCommunityMemberListRequest,
      { members: unknown[]; nextPaginationCursor?: string }
    >("getCommunityMemberList", request);
    return {
      members: (response.members || []).map(convertUser),
      nextPaginationCursor: response.nextPaginationCursor || undefined,
    };
  }

  async restrictCommunityPost(
    request: RestrictCommunityPostRequest
  ): Promise<void> {
    await this.call<RestrictCommunityPostRequest, Record<string, never>>(
      "restrictCommunityPost",
      request
    );
  }

  async getCommunitiesUsingApplication(
    request?: GetCommunitiesUsingApplicationRequest
  ): Promise<GetCommunitiesUsingApplicationResponse> {
    const response = await this.call<
      GetCommunitiesUsingApplicationRequest | Record<string, never>,
      {
        communitiesUsingApplication: unknown[];
        applicationVersions: unknown[];
        nextCursor?: string;
      }
    >("getCommunitiesUsingApplication", request || {});
    return {
      communitiesUsingApplication: (
        response.communitiesUsingApplication || []
      ).map(convertCommunityUsingApplication),
      applicationVersions: (response.applicationVersions || []).map(
        convertApplicationVersion
      ),
      nextCursor: response.nextCursor || undefined,
    } satisfies GetCommunitiesUsingApplicationResponse;
  }

  async getStamps(request?: GetStampsRequest): Promise<GetStampsResponse> {
    const response = await this.call<
      GetStampsRequest | Record<string, never>,
      { officialStampSets: unknown[]; communityStampSets: unknown[] }
    >("getStamps", request || {});
    return {
      officialStampSets: (response.officialStampSets || []).map(
        convertOfficialStampSet
      ),
      communityStampSets: (response.communityStampSets || []).map(
        convertCommunityStampSet
      ),
    };
  }

  async sendDirectMessageToCommunityMember(
    request: SendDirectMessageToCommunityMemberRequest
  ): Promise<ChatMessage> {
    const response = await this.call<
      SendDirectMessageToCommunityMemberRequest,
      { message: unknown }
    >("sendDirectMessageToCommunityMember", request);
    return convertChatMessage(response.message);
  }

  async addStampToPost(postId: string, stampId: string): Promise<Post> {
    const response = await this.call<
      { postId: string; stampId: string },
      { post: unknown }
    >("addStampToPost", { postId, stampId });
    return convertPost(response.post);
  }

  close(): void {
    this.grpcClient.close();
  }
}
