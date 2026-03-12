# 🤖 Echo Bot

[mixi2-js](https://github.com/otoneko1102/mixi2-js) を使った最もシンプルなサンプルです。

アプリケーションに DM を送ると、同じ内容をそのまま返信します。

## 使用する機能

- `StreamWatcher` — gRPC ストリーミングでイベントを受信
- `Client.sendChatMessage()` — チャットメッセージを送信

## セットアップ

1. `.env.example` を `.env` にコピーして認証情報を設定

   ```sh
   cp .env.example .env
   ```

2. 依存パッケージをインストール

   ```sh
   npm install
   ```

3. Bot を起動

   ```sh
   # JavaScript
   npm start

   # TypeScript
   npx tsx index.ts
   ```

4. mixi2 アプリでアプリケーションに DM を送信すると、同じメッセージが返ってきます
