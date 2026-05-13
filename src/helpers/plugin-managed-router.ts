import type { EventHandler } from "../event";
import type { Event, Community, CommunityPluginManagedEvent } from "../types";
import { EventReason } from "../types";

type PluginManagedListener = (
  community: Community,
  event: CommunityPluginManagedEvent
) => void | Promise<void>;

/**
 * CommunityPluginManagedEvent をインストール・アンインストールに分けてルーティングするハンドラ（Plugin 専用）。
 *
 * @example
 * const pluginRouter = new PluginManagedRouter()
 *   .onInstalled((community) => {
 *     console.log(`Plugin が ${community.name} にインストールされました`);
 *   })
 *   .onUninstalled((community) => {
 *     console.log(`Plugin が ${community.name} からアンインストールされました`);
 *   });
 *
 * eventRouter.on(EventType.COMMUNITY_PLUGIN_MANAGED, (e) => pluginRouter.handle(e));
 */
export class PluginManagedRouter implements EventHandler {
  private readonly installedListeners: PluginManagedListener[] = [];
  private readonly uninstalledListeners: PluginManagedListener[] = [];

  onInstalled(listener: PluginManagedListener): this {
    this.installedListeners.push(listener);
    return this;
  }

  onUninstalled(listener: PluginManagedListener): this {
    this.uninstalledListeners.push(listener);
    return this;
  }

  async handle(event: Event): Promise<void> {
    const e = event.communityPluginManagedEvent;
    if (!e || !e.community) return;

    if (e.eventReasonList.includes(EventReason.COMMUNITY_PLUGIN_INSTALLED)) {
      for (const l of this.installedListeners) {
        await l(e.community, e);
      }
    }
    if (e.eventReasonList.includes(EventReason.COMMUNITY_PLUGIN_UNINSTALLED)) {
      for (const l of this.uninstalledListeners) {
        await l(e.community, e);
      }
    }
  }
}
