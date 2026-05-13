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
[![Build](https://img.shields.io/github/actions/workflow/status/otoneko1102/mixi2-js/publish.yml?label=build&logo=github)](https://github.com/otnc/mixi2-js/actions)
[![Vite+](https://img.shields.io/badge/Vite%2B-enabled-646CFF?logo=vite&logoColor=white)](vite.config.ts)

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

---

## 機能概要

| モジュール            | 説明                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| `OAuth2Authenticator` | OAuth2 Client Credentials 認証（アクセストークンの取得・キャッシュ・有効期限 1 分前に自動更新） |
| `Client`              | gRPC API クライアント（8 つの RPC メソッドに対応）                                              |
| `WebhookServer`       | HTTP Webhook サーバー（Ed25519 署名検証・Ping 自動応答）                                        |
| `StreamWatcher`       | gRPC ストリーミング（指数バックオフによる自動再接続）                                           |

### Helpers (拡張機能)

`mixi2-js/helpers` は、公式 API 仕様には含まれない **SDK 独自の便利ユーティリティ**を提供します。

| ヘルパー            | 説明                                                       |
| ------------------- | ---------------------------------------------------------- |
| `EventRouter`       | イベントタイプ別にハンドラを登録できるルーター             |
| `PostBuilder`       | メソッドチェーンでポスト作成リクエストを組み立てるビルダー |
| `MediaUploader`     | メディアアップロードの開始〜完了待機を自動化               |
| `ReasonFilter`      | `EventReason` ベースでイベントをフィルタリング             |
| `EventDeduplicator` | Webhook リトライ等による重複イベントをスキップ             |
| `EventLogger`       | 受信イベントをログ出力するデバッグ用ミドルウェア           |
| `TextSplitter`      | 長いテキストを 149 文字制限内に自動分割                    |
| `Address`           | 公式エンドポイント URL を返すヘルパー                      |

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

---

## 貢献

貢献を歓迎しています！詳細は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

このプロジェクトは [Contributor Covenant 行動規範](CODE_OF_CONDUCT.md) に準拠しています。

### 貢献者

<a href="https://github.com/otnc/mixi2-js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=otoneko1102/mixi2-js" alt="Made with contrib.rocks" />
</a>

---

## ライセンス

[Apache-2.0](LICENSE)
