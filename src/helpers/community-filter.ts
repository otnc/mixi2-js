import type { EventHandler } from "../event";
import type { Event } from "../types";

/**
 * 指定したコミュニティ ID に関連するイベントのみを内部ハンドラに渡すミドルウェア。
 * コミュニティと無関係なイベント（PING など）はそのまま通過する。
 *
 * 複数のコミュニティにインストールされた Plugin で、
 * 特定コミュニティのイベントだけを処理したい場合に有用。
 *
 * @example
 * const filter = new CommunityFilter(router, ['community-id-1', 'community-id-2']);
 * await watcher.watch(filter);
 */
export class CommunityFilter implements EventHandler {
  private readonly inner: EventHandler;
  private readonly communityIds: Set<string>;

  constructor(handler: EventHandler, communityIds: string[]) {
    this.inner = handler;
    this.communityIds = new Set(communityIds);
  }

  async handle(event: Event): Promise<void> {
    const communityId = this.getCommunityId(event);
    if (communityId !== null && !this.communityIds.has(communityId)) {
      return;
    }
    await this.inner.handle(event);
  }

  private getCommunityId(event: Event): string | null {
    if (event.postCreatedEvent?.post?.communityId) {
      return event.postCreatedEvent.post.communityId;
    }
    if (event.communityMemberChangedEvent?.community?.communityId) {
      return event.communityMemberChangedEvent.community.communityId;
    }
    if (event.communityPluginManagedEvent?.community?.communityId) {
      return event.communityPluginManagedEvent.community.communityId;
    }
    return null;
  }
}
