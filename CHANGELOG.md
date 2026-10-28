# Changelog

このプロジェクトの注目すべき変更をバージョンごとに記録します。新しいバージョンの節は、`release` ワークフローの実行時に Conventional Commits から [git-cliff](https://git-cliff.org) で生成され、この下に追加されます。

## [1.6.0](https://github.com/otnc/mixi2-js/releases/tag/v1.6.0) - 2026-10-28

### Features

- Add .ncurc.json configuration file

### Bug fixes

- Update contributor image link in README.md
- Reorganize scripts section in package.json
- **stream:** Reconnect per disconnect with 1s/2s/4s backoff like the official SDK
- **media-uploader:** Poll every 5s for up to 2min to respect the rate limit
- **jsr:** Export the helpers subpath
- **reason-filter:** Filter community member and plugin events by their reasons
- **community-filter:** Fall back to postedCommunity for post events

### Refactoring

- Remove unused scripts and clean up configuration files
- Share auth metadata construction between Client and StreamWatcher
- Route event handler calls through a shared dispatchEvent
- **webhook:** Extract body reading and 401 responses, drop narrating comments

### Documentation

- Update Node.js and npm version requirements in CONTRIBUTING.md
- **streaming:** Document reconnection outcomes and constructor options
- **media-uploader:** Update polling defaults and rate limit caution
- Use half-width parentheses in updated stream and uploader docs
- **rate-limits:** Update to the 20/min and 200/h limits now applied to every RPC
- **plugin:** Cover install scope, requirement versioning and installation flow
- **webhook:** Add connection check, URL requirements and retry policy
- **contributing:** Match command table to the current npm scripts
- **contributing:** Describe commit conventions, git hooks and check:package
- **contributing:** Align command table
- **contributing:** Document the release workflow
- **contributing:** Describe the release announcement
- **readme:** Update the tsdown badge
- Add third-party notices for the bundled mixi2-api proto and the ported Go SDK
- **changelog:** Reformat past entries to match the generated sections
- Remove stale duplicated sections from the API client and enum pages
- Document all 15 RPCs, the plugin helpers and Client authKey/getAccessToken
- State that the major version follows the mixi2 API major version

## [1.5.3](https://github.com/otnc/mixi2-js/releases/tag/v1.5.3) - 2026-05-16

### Bug fixes

- **proto:** `application_api/v1/service.proto` の重複定義を削除
- **proto:** `getSendEventRequestType` が `deserialize()` を使うように修正 (Webhook のデコードが常に失敗していた問題を解消)
- **auth:** 有効期限の短いアクセストークンもキャッシュされるように修正
- **webhook:** `start()` が listen のエラーを reject するように修正し、`port: 0` を指定できるようにした
- **webhook:** `address` が OS の割り当てた実際のポートを返すように修正
- **text-splitter:** 絵文字 (ZWJ シーケンスを含む) を 1 文字として数えるように修正

### Refactoring

- **types:** 構造が同じ型をエイリアスで統合
- **types:** `PostMedia.mediaType` の型を `PostMediaType` のまま維持

## [1.5.2](https://github.com/otnc/mixi2-js/releases/tag/v1.5.2) - 2026-05-13

### Bug fixes

- 細かな修正

## [1.5.1](https://github.com/otnc/mixi2-js/releases/tag/v1.5.1) - 2026-05-13

### Bug fixes

- 細かな修正

## [1.5.0](https://github.com/otnc/mixi2-js/releases/tag/v1.5.0) - 2026-05-13

**mixi2 API v1.2.0** のコミュニティプラグイン機能に対応

### Breaking changes

- 必要な Node.js バージョンを `>=18.0.0` から `>=20.19.0` に引き上げ
- `getStamps` の戻り値を `OfficialStampSet[]` から `GetStampsResponse` に変更し、`communityStampSets` を追加

### Features

- **client:** コミュニティプラグイン向けの 6 つの RPC メソッドを追加
  - `getCommunities` — コミュニティの情報を取得
  - `getCommunityTimeline` — コミュニティのタイムラインを取得
  - `getCommunityMemberList` — コミュニティのメンバー一覧を取得
  - `restrictCommunityPost` — コミュニティのポストを非表示にする
  - `getCommunitiesUsingApplication` — アプリがインストールされているコミュニティ一覧を取得
  - `sendDirectMessageToCommunityMember` — コミュニティメンバーに DM を送信
- **types:** Plugin 向けのイベント `CommunityMemberChangedEvent` (`EventType.COMMUNITY_MEMBER_CHANGED`) と `CommunityPluginManagedEvent` (`EventType.COMMUNITY_PLUGIN_MANAGED`) を追加
- **types:** モデル `Community` / `CommunityUsingApplication` / `ApplicationVersion` / `CommunityStamp` / `CommunityStampSet` を追加
- **types:** Enum `CommunityVisibility` / `CommunityAccessLevel` / `ApplicationRequirement` を追加
- **types:** `EventReason` に `POST_COMMUNITY` (5) / `COMMUNITY_MEMBER_JOINED` (6) / `COMMUNITY_MEMBER_LEFT` (7) / `COMMUNITY_PLUGIN_INSTALLED` (9) / `COMMUNITY_PLUGIN_UNINSTALLED` (10) を追加
- **types:** `CreatePostRequest.communityId` と `PostCreatedEvent.postedCommunity` を追加
- **helpers:** Plugin 開発向けのヘルパーを追加
  - `CommunityFilter` — 指定したコミュニティ ID のイベントだけを通すミドルウェア
  - `MemberEventRouter` — `CommunityMemberChangedEvent` を `onJoined` / `onLeft` に振り分け
  - `PluginManagedRouter` — `CommunityPluginManagedEvent` を `onInstalled` / `onUninstalled` に振り分け
  - `MemberListPager` — `getCommunityMemberList` のページネーションをたどる非同期ジェネレーター
  - `ApplicationPager` — `getCommunitiesUsingApplication` のページネーションをたどり、`fetchAll()` も提供
- **helpers:** `PostBuilder.community(communityId)` を追加

## [1.4.1](https://github.com/otnc/mixi2-js/releases/tag/v1.4.1) - 2026-04-12

### Bug fixes

- **stream:** 接続が終了した後に再接続できないことがある問題を修正
  - ストリームがハングした場合に備え、30 秒の接続タイムアウトを追加
  - 連続失敗回数が `maxRetries` を超えたら打ち切るように修正
  - 再接続のバックオフを指数バックオフ (2s, 4s, 8s, ... 上限 30s) に変更

## [1.4.0](https://github.com/otnc/mixi2-js/releases/tag/v1.4.0) - 2026-03-23

**mixi2 API v1.1.0** の変更に対応

### Features

- **client:** `deletePost(postId)` を追加 (公式 API の `DeletePost`)
- **client:** 現在のアクセストークンを取得する `getAccessToken()` を追加
- **helpers:** `MediaUploader.upload(uploadUrl, data)` を追加 (`Authorization` ヘッダーを自動で付与)

## [1.3.0](https://github.com/otnc/mixi2-js/releases/tag/v1.3.0) - 2026-03-22

### Breaking changes

- ESM 出力の拡張子を `.js` / `.d.ts` から `.mjs` / `.d.mts` に変更

### Features

- **stream:** `StreamWatcherOptions.maxRetries` を追加 (デフォルト: 3)
- **helpers:** 新しいヘルパーを追加
  - `EventDeduplicator` — Webhook のリトライなどで重複したイベントをスキップするミドルウェア
  - `EventLogger` — 受信したイベントをログに出すデバッグ用ミドルウェア
  - `TextSplitter` — 長いテキストを 149 文字以内に分割するヘルパー
  - `maxPostLength` — ポストの最大文字数 (`149`)

### Bug fixes

- **types:** `SendChatMessageRequest` で `text` か `mediaId` のどちらかが必須であることを Union 型で表現 (両方を省略すると型エラーになる)
- **convert:** `OfficialStampSet` の `startAt` / `endAt` が epoch (0) のときに `undefined` になる問題を修正

## [1.2.1](https://github.com/otnc/mixi2-js/releases/tag/v1.2.1) - 2026-03-21

### Bug fixes

- **stream:** ストリームが正常終了 (`end`) したときに再接続されない問題を修正
- **stream:** `error` と `end` が続けて発火したときに再接続が二重に実行される問題を修正
- **auth:** トークンの期限切れ時に、複数の呼び出しが並行してトークンを再取得する問題を修正
- **webhook:** `x-mixi2-application-event-signature` が空文字列のときに `401` を返さない問題を修正

## [1.2.0](https://github.com/otnc/mixi2-js/releases/tag/v1.2.0) - 2026-03-14

### Features

- **helpers:** 公式のエンドポイント (`tokenUrl` / `apiAddress` / `streamAddress`) を追加

## [1.1.2](https://github.com/otnc/mixi2-js/releases/tag/v1.1.2) - 2026-03-13

### Documentation

- ホームページのリンクを修正

## [1.1.1](https://github.com/otnc/mixi2-js/releases/tag/v1.1.1) - 2026-03-13

### Documentation

- ホームページのリンクを修正

## [1.1.0](https://github.com/otnc/mixi2-js/releases/tag/v1.1.0) - 2026-03-13

### Features

- **helpers:** 新しいヘルパーを追加
  - `PostBuilder` — メソッドチェーンで `CreatePostRequest` を組み立てるビルダー
  - `MediaUploader` — メディアアップロードの開始から処理完了の待機までをまとめたヘルパー
  - `ReasonFilter` — `EventReason` でイベントを絞り込むミドルウェア

## [1.0.0](https://github.com/otnc/mixi2-js/releases/tag/v1.0.0) - 2026-03-12

### Features

- **helpers:** `mixi2-js/helpers` サブパスを追加
  - `EventRouter` — イベントの種類ごとにハンドラを登録できる `EventHandler` 実装

### Documentation

- ドキュメントサイト (https://mixi2.js.org) を公開
- サンプルコード (echo-bot / webhook-server / media-post) を追加
- メディアデータの送信方法を PUT から POST に修正 (2026-03-12 版の公式 API 仕様に追従)

## [0.1.2](https://github.com/otnc/mixi2-js/releases/tag/v0.1.2) - 2026-03-12

### Bug fixes

- インストールコマンドの誤りを修正

## [0.1.1](https://github.com/otnc/mixi2-js/releases/tag/v0.1.1) - 2026-03-09

### Bug fixes

- JSR への公開処理を修正
- 誤字を修正

## [0.1.0](https://github.com/otnc/mixi2-js/releases/tag/v0.1.0) - 2026-03-09

### Features

- JSR (`@otoneko1102/mixi2-js`) で公開

## [0.0.5](https://github.com/otnc/mixi2-js/releases/tag/v0.0.5) - 2026-03-07

### Refactoring

- **client:** RPC 呼び出しを共通の `call()` メソッドにまとめた
- **stream:** `StreamWatcher` を改善
- **types:** 型定義を追加

## [0.0.4](https://github.com/otnc/mixi2-js/releases/tag/v0.0.4) - 2026-03-07

### Bug fixes

- **webhook:** 署名検証の処理を修正
- **stream:** 接続処理を修正
- Node.js バージョン要件とログ出力を修正

## [0.0.3](https://github.com/otnc/mixi2-js/releases/tag/v0.0.3) - 2026-03-07

### Bug fixes

- **auth:** クライアント認証情報の特殊文字を `encodeURIComponent` でエスケープするように修正

## [0.0.2](https://github.com/otnc/mixi2-js/releases/tag/v0.0.2) - 2026-03-07

### Documentation

- 対応する Node.js バージョンを `engines` に明記

## [0.0.1](https://github.com/otnc/mixi2-js/releases/tag/v0.0.1) - 2026-03-06

### Features

- 初回リリース
  - `OAuth2Authenticator` — OAuth2 Client Credentials 認証
  - `Client` — gRPC API クライアント (8 つの RPC メソッド)
  - `WebhookServer` — Ed25519 署名検証付きの HTTP Webhook サーバー
  - `StreamWatcher` — 指数バックオフで自動再接続する gRPC ストリーミング
  - protobuf 準拠の型定義と Enum、ESM + CJS のデュアルビルド
