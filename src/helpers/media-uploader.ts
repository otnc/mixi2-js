import type { Client } from "../client";
import {
  MediaUploadStatus,
  type InitiatePostMediaUploadRequest,
  type InitiatePostMediaUploadResponse,
} from "../types";

export interface MediaUploaderOptions {
  /** ポーリング間隔（ミリ秒）。デフォルト: 1000 */
  pollInterval?: number;
  /** タイムアウト（ミリ秒）。デフォルト: 60000 */
  timeout?: number;
}

export interface UploadedMedia {
  mediaId: string;
  uploadUrl: string;
}

/**
 * メディアアップロードの開始 → データ送信 → 処理完了待機を簡略化するヘルパー。
 *
 * 通常は initiatePostMediaUpload → HTTP POST → getPostMediaStatus のポーリングが必要だが、
 * このクラスで waitForReady() を呼ぶだけで完了まで待機できる。
 */
export class MediaUploader {
  private readonly client: Client;
  private readonly pollInterval: number;
  private readonly timeout: number;

  constructor(client: Client, options?: MediaUploaderOptions) {
    this.client = client;
    this.pollInterval = options?.pollInterval ?? 1000;
    this.timeout = options?.timeout ?? 60000;
  }

  /**
   * メディアアップロードを開始し、uploadUrl と mediaId を返す。
   */
  async initiate(request: InitiatePostMediaUploadRequest): Promise<UploadedMedia> {
    const response: InitiatePostMediaUploadResponse =
      await this.client.initiatePostMediaUpload(request);
    return {
      mediaId: response.mediaId,
      uploadUrl: response.uploadUrl,
    };
  }

  /**
   * メディアの処理が完了するまでポーリングして待機する。
   * 完了時に mediaId を返す。失敗時はエラーをスローする。
   */
  async waitForReady(mediaId: string): Promise<string> {
    const startTime = Date.now();
    while (Date.now() - startTime < this.timeout) {
      const status = await this.client.getPostMediaStatus(mediaId);
      if (status.status === MediaUploadStatus.COMPLETED) {
        return mediaId;
      }
      if (status.status === MediaUploadStatus.FAILED) {
        throw new Error(`Media upload failed: ${mediaId}`);
      }
      await new Promise((resolve) => setTimeout(resolve, this.pollInterval));
    }
    throw new Error(`Media upload timed out after ${this.timeout}ms: ${mediaId}`);
  }
}
