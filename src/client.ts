import * as grpc from "@grpc/grpc-js";
import type { Authenticator } from "./auth";
import { getApiServiceClient } from "./proto";
import type {
  Post,
  User,
  ChatMessage,
  OfficialStampSet,
  CreatePostRequest,
  InitiatePostMediaUploadRequest,
  InitiatePostMediaUploadResponse,
  GetPostMediaStatusResponse,
  SendChatMessageRequest,
  GetStampsRequest,
} from "./types";
import {
  convertPost,
  convertUser,
  convertChatMessage,
  convertOfficialStampSet,
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
      grpc.credentials.createSsl(),
    );
    this.authenticator = options.authenticator;
    this.authKey = options.authKey;
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

  private call<TReq, TRes>(method: string, request: TReq): Promise<TRes> {
    return this.getMetadata().then((metadata) => {
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
          },
        );
      });
    });
  }

  async getUsers(userIdList: string[]): Promise<User[]> {
    const response = await this.call<
      { userIdList: string[] },
      { users: unknown[] }
    >("getUsers", { userIdList });
    return (response.users || []).map(convertUser);
  }

  async getPosts(postIdList: string[]): Promise<Post[]> {
    const response = await this.call<
      { postIdList: string[] },
      { posts: unknown[] }
    >("getPosts", { postIdList });
    return (response.posts || []).map(convertPost);
  }

  async createPost(request: CreatePostRequest): Promise<Post> {
    const response = await this.call<CreatePostRequest, { post: unknown }>(
      "createPost",
      request,
    );
    return convertPost(response.post);
  }

  async initiatePostMediaUpload(
    request: InitiatePostMediaUploadRequest,
  ): Promise<InitiatePostMediaUploadResponse> {
    return this.call<
      InitiatePostMediaUploadRequest,
      InitiatePostMediaUploadResponse
    >("initiatePostMediaUpload", request);
  }

  async getPostMediaStatus(
    mediaId: string,
  ): Promise<GetPostMediaStatusResponse> {
    return this.call<{ mediaId: string }, GetPostMediaStatusResponse>(
      "getPostMediaStatus",
      { mediaId },
    );
  }

  async sendChatMessage(request: SendChatMessageRequest): Promise<ChatMessage> {
    const response = await this.call<
      SendChatMessageRequest,
      { message: unknown }
    >("sendChatMessage", request);
    return convertChatMessage(response.message);
  }

  async getStamps(request?: GetStampsRequest): Promise<OfficialStampSet[]> {
    const response = await this.call<
      GetStampsRequest | Record<string, never>,
      { officialStampSets: unknown[] }
    >("getStamps", request || {});
    return (response.officialStampSets || []).map(convertOfficialStampSet);
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
