---
title: 環境変数・レート制限
description: 環境変数の設定とレート制限の仕様
---

## 環境変数

| 変数名                 | 必須 | 説明                                                   |
| ---------------------- | ---- | ------------------------------------------------------ |
| `CLIENT_ID`            | ○    | OAuth2 クライアント ID                                 |
| `CLIENT_SECRET`        | ○    | OAuth2 クライアントシークレット                        |
| `TOKEN_URL`            | ○    | トークンエンドポイント URL                             |
| `API_ADDRESS`          | △    | API サーバーアドレス（API クライアント使用時）         |
| `STREAM_ADDRESS`       | △    | Stream サーバーアドレス（gRPC ストリーミング使用時）   |
| `SIGNATURE_PUBLIC_KEY` | △    | イベント署名検証用の公開鍵（Base64）（Webhook 使用時） |
| `PORT`                 | -    | Webhook サーバーポート（デフォルト: `8080`）           |

## レート制限

レート制限はアプリケーション単位で適用され、`SubscribeEvents` を除くすべての RPC に 1 分あたり 20 回の上限があります。`InitiatePostMediaUpload` には 1 時間あたり 200 回の上限もあります。RPC ごとの値は [レート制限](/reference/rate-limits/) を参照してください。

制限超過時は gRPC ステータス `RESOURCE_EXHAUSTED` が返されます。`retry-after` ヘッダに従って待機してください。

## セキュリティ

- **認証情報の管理** — `CLIENT_SECRET` は環境変数またはシークレット管理システムから読み込んでください。ソースコードへのハードコードは禁止です。
- **署名検証** — Webhook リクエストは Ed25519 署名で検証されます。
- **リプレイ攻撃防止** — タイムスタンプ検証により ±5 分を超えるリクエストを拒否します。
- **TLS** — gRPC 接続はすべて TLS で暗号化されます。

> 最新のレート制限情報は [公式ドキュメント](https://developer.mixi.social/docs) を参照してください。
