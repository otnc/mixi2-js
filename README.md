<div align="center">

<a href="https://mixi2.js.org/">
  <img src="./img/icon.svg" width="200px" height="200px">
</a>

# mixi2-js

</div>

[![npm version](https://img.shields.io/npm/v/mixi2-js?color=cb3837&logo=npm)](https://www.npmjs.com/package/mixi2-js)
[![npm downloads](https://img.shields.io/npm/dm/mixi2-js?color=cb3837&logo=npm)](https://www.npmjs.com/package/mixi2-js)
[![JSR](https://jsr.io/badges/@otoneko1102/mixi2-js)](https://jsr.io/@otoneko1102/mixi2-js)
[![JSR Score](https://jsr.io/badges/@otoneko1102/mixi2-js/score)](https://jsr.io/@otoneko1102/mixi2-js)
[![License](https://img.shields.io/github/license/otoneko1102/mixi2-js?color=blue)](LICENSE)
[![Node.js](https://img.shields.io/node/v/mixi2-js?color=339933&logo=nodedotjs&logoColor=white)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Build](https://img.shields.io/github/actions/workflow/status/otnc/mixi2-js/ci.yml?branch=main&label=ci&logo=github)](https://github.com/otnc/mixi2-js/actions)
[![Prettier](https://img.shields.io/badge/Prettier-3.9-F7B93E?logo=prettier&logoColor=white)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![tsdown](https://img.shields.io/badge/tsdown-0.23.3-orange)](https://tsdown.dev/)

<div align="center">

**[📖 ドキュメント](https://mixi2.js.org/)** | **[npm](https://www.npmjs.com/package/mixi2-js)** | **[JSR](https://jsr.io/@otoneko1102/mixi2-js)**

</div>

mixi2 の [Application API](https://developer.mixi.social/docs) を利用するための **非公式** TypeScript/JavaScript SDK です。

[公式 Go SDK](https://github.com/mixigroup/mixi2-application-sdk-go) および [公式 API 仕様](https://github.com/mixigroup/mixi2-api) に基づいて作成されています。

> [!Note]
>   
> **これは MIXI 社公式のプロダクトではありません。コミュニティメンバーによるオープンソースプロジェクトです。**

---

## インストール

> [!Warning]
>   
> **mixi2-js v1.5.0 より、Node.js v20.19.0 未満はサポートされなくなりました。** Node.js v18 系では動作しません。Node.js v20.19.0 以上をご使用ください。

```bash
npm install mixi2-js

# or

npx jsr add @otoneko1102/mixi2-js
```

ESM・CommonJS の両方に対応しています。TypeScript の型定義 (`.d.ts`) も同梱されています。

### Skills

AI エージェント (Claude Code、Codex など) が mixi2-js を使ったコードを書くための Skill を公開しています。次のどちらかの方法でインストールできます。

#### GitHub CLI (`gh skill`)

```bash
gh skill install otnc/mixi2-js
```

#### `vercel-labs/skills` (`npx skills`)

```bash
npx skills add otnc/mixi2-js
```

---

## 対応環境

mixi2-js は以下のランタイム API に依存しているため、環境によって使える機能が異なります。

- [`node:http2`](https://nodejs.org/api/http2.html) (`@grpc/grpc-js` 経由): API クライアントと gRPC ストリーミング
- `node:fs` (`@grpc/proto-loader` 経由): 実行時の `.proto` の読み込み (API クライアント、gRPC ストリーミング、Webhook のデコード)
- [`node:http`](https://nodejs.org/api/http.html) と [`node:crypto`](https://nodejs.org/api/crypto.html) (Ed25519): Webhook サーバーと署名検証
- `fetch` と `Buffer`: 認証とメディアアップロード

| 環境               | 認証 (`OAuth2Authenticator`) | API クライアント (`Client`) | Webhook (`WebhookServer`) | gRPC ストリーミング (`StreamWatcher`) |
| ------------------ | ---------------------------- | --------------------------- | ------------------------- | ------------------------------------- |
| Node.js            | ✅                           | ✅                          | ✅                        | ✅                                    |
| Bun                | ✅                           | ⚠️                          | ✅                        | ⚠️                                    |
| Deno               | ⚠️                           | ⚠️                          | ⚠️                        | ⚠️                                    |
| Cloudflare Workers | ⚠️                           | ❌                          | ❌                        | ❌                                    |

✅ 動作確認済み、⚠️ 未検証または制限あり、❌ 非対応

<details><summary>詳細な対応状況</summary>

- Node.js: 20.19.0 以降。CI で 20.19.0 / 22 / 24 のテストを実行しています
- Bun: 1.4.3 で認証と Webhook (署名検証を含む) の動作を確認済み。API クライアントと gRPC ストリーミングは生成と proto の読み込みまで確認済みで、実際の通信は未検証です
- Deno: 未検証です。`npm:mixi2-js` または JSR 版を Node.js 互換レイヤーで動かすことになります
- Cloudflare Workers: 非対応です。gRPC (`node:http2`)、`node:http` のサーバー、実行時のファイル読み込みが使えないためです。認証は `nodejs_compat` を有効にすれば動く見込みですが未検証です

</details>

> [!TIP]
>   
> サーバーレス環境ではランタイムが対応していても gRPC ストリーミングを常時接続できない場合があります。環境に合わせて Webhook と gRPC ストリーミングを使い分けてください。対応環境を広げる取り組みは [Issues](https://github.com/otnc/mixi2-js/issues?q=label%3Aruntime) で管理しています。

---

## 機能概要

| モジュール            | 説明                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| `OAuth2Authenticator` | OAuth2 Client Credentials 認証（アクセストークンの取得・キャッシュ・有効期限 1 分前に自動更新） |
| `Client`              | gRPC API クライアント (公式 API の全 15 RPC に対応)                                             |
| `WebhookServer`       | HTTP Webhook サーバー（Ed25519 署名検証・Ping 自動応答）                                        |
| `StreamWatcher`       | gRPC ストリーミング（指数バックオフによる自動再接続）                                           |

### Helpers (拡張機能)

`mixi2-js/helpers` は、公式 API 仕様には含まれない **SDK 独自の便利ユーティリティ**を提供します。

| ヘルパー              | 説明                                                             |
| --------------------- | ---------------------------------------------------------------- |
| `EventRouter`         | イベントタイプ別にハンドラを登録できるルーター                   |
| `PostBuilder`         | メソッドチェーンでポスト作成リクエストを組み立てるビルダー       |
| `MediaUploader`       | メディアアップロードの開始〜完了待機を自動化                     |
| `ReasonFilter`        | `EventReason` ベースでイベントをフィルタリング                   |
| `EventDeduplicator`   | Webhook リトライ等による重複イベントをスキップ                   |
| `EventLogger`         | 受信イベントをログ出力するデバッグ用ミドルウェア                 |
| `TextSplitter`        | 長いテキストを 149 文字制限内に自動分割                          |
| `Address`             | 公式エンドポイント URL を返すヘルパー                            |
| `CommunityFilter`     | 特定のコミュニティのイベントだけを通す (Plugin 向け)             |
| `MemberEventRouter`   | メンバーの参加・退出イベントを振り分け (Plugin 向け)             |
| `PluginManagedRouter` | インストール・アンインストールイベントを振り分け (Plugin 向け)   |
| `MemberListPager`     | コミュニティのメンバー一覧をページ送りで取得 (Plugin 向け)       |
| `ApplicationPager`    | インストール済みコミュニティ一覧をページ送りで取得 (Plugin 向け) |

---

## ドキュメント

使い方・API リファレンス・拡張機能の詳細は **[ドキュメントサイト](https://mixi2.js.org/)** を参照してください。

---

## 関連リンク

- **[mixi2-js ドキュメント](https://mixi2.js.org/)**
- [mixi2 Developer Platform 公式ドキュメント](https://developer.mixi.social/docs)
- [mixi2-api](https://github.com/mixigroup/mixi2-api) — API 定義（Protocol Buffers）
- [mixi2-application-sdk-go](https://github.com/mixigroup/mixi2-application-sdk-go) — 公式 Go SDK
- [mixi2-application-sample-go](https://github.com/mixigroup/mixi2-application-sample-go) — サンプルアプリケーション
- [公式ドキュメントの GitHub リポジトリ一覧](https://developer.mixi.social/docs/resource/github) — mixi2-js もコミュニティによるリポジトリとして掲載されています

---

## バージョニング

mixi2-js のメジャーバージョンは、対応する mixi2 API のメジャーバージョンに合わせています (mixi2 API v1.x には mixi2-js v1.x が対応)。SDK 独自の破壊的変更はマイナーバージョンで行い、[CHANGELOG](CHANGELOG.md) の Breaking changes に記載します。詳細は [CONTRIBUTING.md](CONTRIBUTING.md#バージョニング) を参照してください。

---

## 貢献

貢献を歓迎しています！詳細は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

このプロジェクトは [Contributor Covenant 行動規範](CODE_OF_CONDUCT.md) に準拠しています。

### 貢献者

<a href="https://github.com/otnc/mixi2-js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=otnc/mixi2-js" alt="Made with contrib.rocks" />
</a>

---

## ライセンス

[Apache-2.0](LICENSE)

`proto/` 以下の Protocol Buffers 定義は [mixi2-api](https://github.com/mixigroup/mixi2-api) (Copyright 2025 MIXI, Inc.、Apache-2.0) から同梱しています。サードパーティのライセンス表記は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) を参照してください。
