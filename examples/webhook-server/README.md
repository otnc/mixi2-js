# 🔔 Webhook Server

[mixi2-js](https://github.com/otnc/mixi2-js) の `WebhookServer` を使ったイベントハンドラのサンプルです。

Ed25519 署名検証付きの HTTP Webhook サーバーを起動し、以下のイベントに対応します。

| イベント   | 動作               |
| ---------- | ------------------ |
| メンション | メンション元に返信 |
| リプライ   | ログ出力           |
| 引用       | ログ出力           |
| DM 受信    | エコー返信         |

## 使用する機能

- `WebhookServer` — Ed25519 署名検証付き HTTP Webhook サーバー
- `Client.createPost()` — ポスト作成（返信）
- `Client.sendChatMessage()` — チャットメッセージ送信

## セットアップ

1. `.env.example` を `.env` にコピーして認証情報を設定

   ```sh
   cp .env.example .env
   ```

2. 依存パッケージをインストール

   ```sh
   npm install
   ```

3. サーバーを起動

   ```sh
   # JavaScript
   npm start

   # TypeScript
   npx tsx index.ts
   ```

4. 外部からアクセス可能な URL を mixi2 Developer Platform に登録してください

> [!Note]
> ローカル開発時は [ngrok](https://ngrok.com/) などのトンネリングツールを使うことで外部公開できます。
> 外部公開が不要な場合は [echo-bot](../echo-bot/) のように gRPC ストリーミング方式を使用してください。
