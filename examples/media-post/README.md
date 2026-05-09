# 📷 Media Post

[mixi2-js](https://github.com/otnc/mixi2-js) を使った画像付きポストの投稿サンプルです。

メディアアップロード API の一連のフローを実演します。

## 処理の流れ

1. `initiatePostMediaUpload()` でアップロード URL を取得
2. 取得した URL に画像データを POST で送信
3. `getPostMediaStatus()` で処理完了を確認
4. `createPost()` で画像付きポストを作成

## 使用する機能

- `Client.initiatePostMediaUpload()` — メディアアップロード開始
- `Client.getPostMediaStatus()` — メディア処理状況の確認
- `Client.createPost()` — 画像付きポスト作成

## セットアップ

1. `.env.example` を `.env` にコピーして認証情報を設定

   ```sh
   cp .env.example .env
   ```

2. 依存パッケージをインストール

   ```sh
   npm install
   ```

3. 画像を指定して実行

   ```sh
   # JavaScript
   node index.js ./photo.jpg "今日の一枚"

   # TypeScript
   npx tsx index.ts ./photo.jpg "今日の一枚"
   ```

## 対応フォーマット

| 拡張子           | Content-Type |
| ---------------- | ------------ |
| `.jpg` / `.jpeg` | `image/jpeg` |
| `.png`           | `image/png`  |
| `.gif`           | `image/gif`  |
| `.webp`          | `image/webp` |
