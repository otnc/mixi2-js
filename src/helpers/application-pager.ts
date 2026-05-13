import type { Client } from "../client";
import type {
  CommunityUsingApplication,
  ApplicationVersion,
  GetCommunitiesUsingApplicationRequest,
} from "../types";

export interface ApplicationPagerOptions {
  /** 取得する最大ページ数。デフォルト: 無制限 */
  maxPages?: number;
}

export interface ApplicationPagerPage {
  communitiesUsingApplication: CommunityUsingApplication[];
  applicationVersions: ApplicationVersion[];
}

/**
 * getCommunitiesUsingApplication のカーソルページネーションをラップするヘルパー（Plugin 専用）。
 * ページ単位の非同期ジェネレーターと、全件を一括取得する fetchAll() を提供する。
 *
 * @example
 * // ページ単位で処理
 * const pager = new ApplicationPager(client);
 * for await (const page of pager.iteratePages()) {
 *   for (const c of page.communitiesUsingApplication) {
 *     console.log(c.community?.name);
 *   }
 * }
 *
 * // 全件を一括取得
 * const { communitiesUsingApplication, applicationVersions } = await pager.fetchAll();
 */
export class ApplicationPager {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async *iteratePages(
    request?: GetCommunitiesUsingApplicationRequest,
    options?: ApplicationPagerOptions
  ): AsyncGenerator<ApplicationPagerPage> {
    let cursor: string | undefined = request?.cursor;
    const maxPages = options?.maxPages ?? Infinity;
    let page = 0;

    while (page < maxPages) {
      const result = await this.client.getCommunitiesUsingApplication({
        ...request,
        cursor,
      });
      yield {
        communitiesUsingApplication: result.communitiesUsingApplication,
        applicationVersions: result.applicationVersions,
      };
      if (!result.nextCursor) break;
      cursor = result.nextCursor;
      page++;
    }
  }

  async fetchAll(
    request?: GetCommunitiesUsingApplicationRequest
  ): Promise<ApplicationPagerPage> {
    const allCommunities: CommunityUsingApplication[] = [];
    const allVersions: ApplicationVersion[] = [];

    for await (const page of this.iteratePages(request)) {
      allCommunities.push(...page.communitiesUsingApplication);
      allVersions.push(...page.applicationVersions);
    }

    return {
      communitiesUsingApplication: allCommunities,
      applicationVersions: allVersions,
    };
  }
}
