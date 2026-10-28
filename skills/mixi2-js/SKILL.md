---
name: mixi2-js
description: |
  mixi2 Application API の非公式 TypeScript / JavaScript SDK (npm: mixi2-js、JSR: @otoneko1102/mixi2-js)。
  OAuth2 認証、gRPC API クライアント、イベント受信 (Webhook / gRPC ストリーム)、独自の便利ヘルパー (mixi2-js/helpers) を提供する。
  mixi2-js を使って mixi2 の Bot やコミュニティ Plugin を実装・修正する場面で使用する。
---

# mixi2-js

`mixi2-js` は mixi2 の Application API を利用するための非公式 SDK。コア (`mixi2-js`) は公式の proto 定義と公式 Go SDK の仕様に従い、`mixi2-js/helpers` は公式仕様にない SDK 独自の便利機能を提供する。

- 対応: Node.js 20.19 以降、Bun、Deno 2 (ESM / CommonJS 両対応、型定義同梱)。Cloudflare Workers などの Node.js 互換のない環境では動かない
- インストール: `npm install mixi2-js` または `npx jsr add @otoneko1102/mixi2-js`
- JSR 版を使う場合、import パスは `mixi2-js` ではなく `@otoneko1102/mixi2-js` になる

## アプリケーションの種類

| 種類   | 概要                                                         | 受信できるイベント                                                      |
| ------ | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Bot    | ユーザー向けの基本的なアプリケーション                       | リプライ、メンション、引用、DM                                          |
| Plugin | コミュニティ管理者がインストールする拡張型 (最大 10 コミュニティ) | Bot のイベントに加え、コミュニティ内のポスト、メンバーの参加・退出、インストール・アンインストール |

Plugin がコミュニティに要求する権限と受信イベントは、mixi2 Developer Platform の Requirement 設定画面で宣言する (SDK 側の設定ではない)。

## 認証とクライアント

```ts
import { OAuth2Authenticator, Client } from "mixi2-js";
import { tokenUrl, apiAddress } from "mixi2-js/helpers";

const authenticator = new OAuth2Authenticator({
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  tokenUrl, // 公式のトークンエンドポイント
});

const client = new Client({ apiAddress, authenticator });

const users = await client.getUsers(["user-id"]);
const post = await client.createPost({ text: "こんにちは！" });
client.close();
```

- アクセストークンは自動で取得・キャッシュされ、有効期限の 1 分前に更新される
- 戻り値は proto のレスポンスではなく、変換済みのモデル (`User[]`、`Post` など) が直接返る

主なメソッド (Bot / Plugin 共通):

- `getUsers(userIdList)` / `getPosts(postIdList)`: 一括取得
- `createPost(request)`: ポスト作成。本文は 149 文字まで、メディアは 4 件まで。`inReplyToPostId` と `quotedPostId` は同時に指定できない。`communityId` を指定するとコミュニティへ投稿 (Plugin の `Community.Post.Create` 権限が必要)
- `deletePost(postId)`: アプリケーション自身のポストだけ削除できる
- `sendChatMessage({ roomId, text?, mediaId? })`: DM の送信。ユーザーから DM を受け取った後の返信だけ可能 (`roomId` はイベントの `message.roomId`)。`text` か `mediaId` のどちらかが必須
- `getStamps({ officialStampLanguage?, communityIds? })` / `addStampToPost(postId, stampId)`: スタンプはアプリケーションにメンションしたポスト (Plugin はインストール済みコミュニティのポスト) にだけ付与でき、取り消せない
- `initiatePostMediaUpload(request)` / `getPostMediaStatus(mediaId)`: メディアアップロード (後述の `MediaUploader` を使うと簡単)
- `getAccessToken()`: 現在のアクセストークン

Plugin 専用:

- `getCommunities(communityIdList)`
- `getCommunitiesUsingApplication({ cursor? })`: インストール済みコミュニティと利用中の Requirement バージョン
- `getCommunityTimeline({ communityId, untilCursor?, sinceCursor? })` (`Community.Post.Read`)
- `getCommunityMemberList({ communityId, paginationCursor? })` (`Community.MemberList.Read`)
- `restrictCommunityPost({ postId })`: タイムラインから非表示にする。削除ではない (`Community.Post.Restrict`)
- `sendDirectMessageToCommunityMember({ receiverId, communityId, text?, mediaIds? })` (`Community.Member.DirectMessage.Create`)

レート制限はアプリケーション単位で、`SubscribeEvents` 以外の全 RPC が 1 分あたり 20 回 (`initiatePostMediaUpload` は 1 時間あたり 200 回も)。超過すると gRPC の `RESOURCE_EXHAUSTED` が返る。

## イベントを受け取る

イベントハンドラは `handle(event)` を持つオブジェクト。Webhook と gRPC ストリームで共通。

```ts
import { EventType, EventReason, type EventHandler } from "mixi2-js";

const handler: EventHandler = {
  async handle(event) {
    switch (event.eventType) {
      case EventType.POST_CREATED: {
        const { post, issuer, eventReasonList } = event.postCreatedEvent!;
        if (eventReasonList.includes(EventReason.POST_MENTIONED)) {
          await client.createPost({ text: "呼んだ？", inReplyToPostId: post!.postId });
        }
        break;
      }
      case EventType.CHAT_MESSAGE_RECEIVED: {
        const { message } = event.chatMessageReceivedEvent!;
        await client.sendChatMessage({ roomId: message!.roomId, text: message!.text });
        break;
      }
    }
  },
};
```

| `eventType`                | 本体のフィールド              | `eventReasonList` の値                                          | 対象   |
| -------------------------- | ----------------------------- | --------------------------------------------------------------- | ------ |
| `POST_CREATED`             | `postCreatedEvent`            | `POST_REPLY` / `POST_MENTIONED` / `POST_QUOTED` / `POST_COMMUNITY` | 共通   |
| `CHAT_MESSAGE_RECEIVED`    | `chatMessageReceivedEvent`    | `DIRECT_MESSAGE_RECEIVED`                                       | 共通   |
| `COMMUNITY_MEMBER_CHANGED` | `communityMemberChangedEvent` | `COMMUNITY_MEMBER_JOINED` / `COMMUNITY_MEMBER_LEFT`             | Plugin |
| `COMMUNITY_PLUGIN_MANAGED` | `communityPluginManagedEvent` | `COMMUNITY_PLUGIN_INSTALLED` / `COMMUNITY_PLUGIN_UNINSTALLED`   | Plugin |

- `PING` は SDK が処理するのでハンドラには届かない
- ハンドラが投げたエラーはログに出るだけで、他のイベントの処理は続く
- イベントの順序は保証されない。自分のポストに対するイベントは届かない

### Webhook

```ts
import { WebhookServer } from "mixi2-js";

const server = new WebhookServer({
  port: 8080,
  publicKey: Buffer.from(process.env.SIGNATURE_PUBLIC_KEY!, "base64"),
  handler,
  syncHandling: false, // レスポンス後にプロセスが終わる環境 (サーバーレス) では true
});
await server.start(); // POST /events と GET /healthz を提供
```

- Ed25519 署名とタイムスタンプ (±300 秒) を検証し、正しければ 204、不正なら 401 を返す。Developer Platform の接続確認にもそのまま応答できる
- mixi2 側のタイムアウトは 3 秒、失敗時は 30 秒間隔で最大 3 回リトライされる。重複に備えて冪等に処理するか `EventDeduplicator` を使う
- 既存の HTTP サーバーやフレームワークに組み込む場合は `server.eventHandlerFunc` (`(req, res) => Promise<void>`) を使う

### gRPC ストリーム

```ts
import { StreamWatcher } from "mixi2-js";
import { streamAddress } from "mixi2-js/helpers";

const watcher = new StreamWatcher({ streamAddress, authenticator });
await watcher.watch(handler); // stop() で終了
```

- 外部公開 URL が不要なのでローカル開発向け
- 切断されると 1 秒、2 秒、4 秒の間隔で最大 3 回 (`maxRetries`) 再接続し、すべて失敗すると最後のエラーで reject する。初回接続の失敗とサーバー側の正常終了では再接続しない
- 再接続中のイベントは失われる

## ヘルパー (`mixi2-js/helpers`)

| ヘルパー                                                         | 用途                                                                  |
| ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| `tokenUrl` / `apiAddress` / `streamAddress`                      | 公式のエンドポイント                                                  |
| `EventRouter`                                                    | `on(EventType.X, listener)` でイベントの種類ごとにハンドラを登録      |
| `ReasonFilter` / `CommunityFilter`                               | `EventReason` やコミュニティ ID でイベントを絞り込むミドルウェア      |
| `EventDeduplicator` / `EventLogger`                              | 重複イベントのスキップ / イベントのログ出力                          |
| `PostBuilder`                                                    | `new PostBuilder(text).reply(id).media(ids).spoiler().build()`        |
| `TextSplitter`                                                   | 長文を 149 文字以内に分割 (絵文字は 1 文字として数える)               |
| `MediaUploader`                                                  | アップロード開始 → 送信 → 処理完了待ちをまとめる                      |
| `MemberEventRouter` / `PluginManagedRouter`                      | メンバー参加・退出 / インストール・アンインストールの振り分け (Plugin) |
| `MemberListPager` / `ApplicationPager`                           | ページネーションをたどる (Plugin)                                     |

ミドルウェアは `new ReasonFilter(innerHandler, [EventReason.POST_MENTIONED])` のように内側のハンドラを包み、それ自体を `EventHandler` として渡す。

メディア付きポスト:

```ts
import { MediaUploadType } from "mixi2-js";
import { MediaUploader } from "mixi2-js/helpers";

const uploader = new MediaUploader(client);
const { mediaId, uploadUrl } = await uploader.initiate({
  contentType: "image/jpeg",
  dataSize: image.byteLength,
  mediaType: MediaUploadType.IMAGE,
});
await uploader.upload(uploadUrl, image.buffer);
await uploader.waitForReady(mediaId); // 5 秒間隔でポーリング (最大 2 分)
await client.createPost({ text: "画像です", mediaIdList: [mediaId] });
```

画像は 15 MB、動画は 50 MB まで。アップロード URL の有効期限は画像 200 秒、動画 600 秒。失敗したメディアは再利用できない。

## 詳細情報

- mixi2-js ドキュメント: https://mixi2.js.org/
- 型定義と Enum の一覧: https://mixi2.js.org/reference/types/ 、https://mixi2.js.org/reference/enums/
- サンプルコード: https://github.com/otnc/mixi2-js/tree/main/examples
- mixi2 Developer Platform 公式ドキュメント (全文): https://developer.mixi.social/docs/llms-full.txt
- Protocol Buffers 定義: https://github.com/mixigroup/mixi2-api
