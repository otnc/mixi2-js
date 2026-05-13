import type { Client } from "../client";
import type { User, GetCommunityMemberListRequest } from "../types";

export interface MemberListPagerOptions {
  /** 取得する最大ページ数。デフォルト: 無制限 */
  maxPages?: number;
}

/**
 * getCommunityMemberList のカーソルページネーションをラップする非同期ジェネレーター（Plugin 専用）。
 * 全メンバーを取得するまでカーソルを自動で追跡する。
 *
 * @example
 * const pager = new MemberListPager(client);
 * for await (const member of pager.iterate({ communityId: 'xxx' })) {
 *   console.log(member.displayName);
 * }
 *
 * // 最大 3 ページまで
 * for await (const member of pager.iterate({ communityId: 'xxx' }, { maxPages: 3 })) {
 *   console.log(member.displayName);
 * }
 */
export class MemberListPager {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async *iterate(
    request: GetCommunityMemberListRequest,
    options?: MemberListPagerOptions
  ): AsyncGenerator<User> {
    let cursor: string | undefined = request.paginationCursor;
    const maxPages = options?.maxPages ?? Infinity;
    let page = 0;

    while (page < maxPages) {
      const result = await this.client.getCommunityMemberList({
        ...request,
        paginationCursor: cursor,
      });
      for (const member of result.members) {
        yield member;
      }
      if (!result.nextPaginationCursor) break;
      cursor = result.nextPaginationCursor;
      page++;
    }
  }
}
