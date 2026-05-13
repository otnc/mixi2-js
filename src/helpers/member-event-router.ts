import type { EventHandler } from "../event";
import type {
  Event,
  Community,
  User,
  CommunityMemberChangedEvent,
} from "../types";
import { EventReason } from "../types";

type MemberListener = (
  member: User,
  community: Community,
  event: CommunityMemberChangedEvent
) => void | Promise<void>;

/**
 * CommunityMemberChangedEvent を参加・退出に分けてルーティングするハンドラ（Plugin 専用）。
 * EventRouter と組み合わせて使用するか、単体で EventHandler として使用できる。
 *
 * @example
 * const memberRouter = new MemberEventRouter()
 *   .onJoined((member, community) => {
 *     console.log(`${member.displayName} が ${community.name} に参加しました`);
 *   })
 *   .onLeft((member, community) => {
 *     console.log(`${member.displayName} が ${community.name} から退出しました`);
 *   });
 *
 * // EventRouter と組み合わせる場合
 * eventRouter.on(EventType.COMMUNITY_MEMBER_CHANGED, (e) => memberRouter.handle(e));
 *
 * // 単体で使用する場合
 * await watcher.watch(memberRouter);
 */
export class MemberEventRouter implements EventHandler {
  private readonly joinedListeners: MemberListener[] = [];
  private readonly leftListeners: MemberListener[] = [];

  onJoined(listener: MemberListener): this {
    this.joinedListeners.push(listener);
    return this;
  }

  onLeft(listener: MemberListener): this {
    this.leftListeners.push(listener);
    return this;
  }

  async handle(event: Event): Promise<void> {
    const e = event.communityMemberChangedEvent;
    if (!e || !e.member || !e.community) return;

    if (e.eventReasonList.includes(EventReason.COMMUNITY_MEMBER_JOINED)) {
      for (const l of this.joinedListeners) {
        await l(e.member, e.community, e);
      }
    }
    if (e.eventReasonList.includes(EventReason.COMMUNITY_MEMBER_LEFT)) {
      for (const l of this.leftListeners) {
        await l(e.member, e.community, e);
      }
    }
  }
}
