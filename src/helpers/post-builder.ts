import type { CreatePostRequest, PostMask, PostPublishingType } from "../types";
import { PostMaskType } from "../types";

/**
 * ポスト作成リクエストをメソッドチェーンで組み立てるビルダー。
 *
 * @example
 * const request = new PostBuilder('Hello mixi2!')
 *   .reply('post-id')
 *   .media(['media-id-1'])
 *   .sensitive()
 *   .build();
 */
export class PostBuilder {
  private readonly request: CreatePostRequest;

  constructor(text: string) {
    this.request = { text };
  }

  /** 返信先ポスト ID を設定する。 */
  reply(postId: string): this {
    this.request.inReplyToPostId = postId;
    this.request.quotedPostId = undefined;
    return this;
  }

  /** 引用対象ポスト ID を設定する。 */
  quote(postId: string): this {
    this.request.quotedPostId = postId;
    this.request.inReplyToPostId = undefined;
    return this;
  }

  /** 添付メディア ID を設定する（最大 4 件）。 */
  media(mediaIdList: string[]): this {
    this.request.mediaIdList = mediaIdList;
    return this;
  }

  /** センシティブマスクを設定する。 */
  sensitive(caption = ""): this {
    this.request.postMask = {
      maskType: PostMaskType.SENSITIVE,
      caption,
    };
    return this;
  }

  /** ネタバレマスクを設定する。 */
  spoiler(caption = ""): this {
    this.request.postMask = {
      maskType: PostMaskType.SPOILER,
      caption,
    };
    return this;
  }

  /** カスタムマスクを設定する。 */
  mask(postMask: PostMask): this {
    this.request.postMask = postMask;
    return this;
  }

  /** 配信設定を設定する。 */
  publishing(type: PostPublishingType): this {
    this.request.publishingType = type;
    return this;
  }

  /** CreatePostRequest オブジェクトを構築する。 */
  build(): CreatePostRequest {
    return { ...this.request };
  }
}
