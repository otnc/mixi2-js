import "dotenv/config";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import consola from "consola";
import {
  OAuth2Authenticator,
  Client,
  MediaUploadType,
  MediaUploadStatus,
} from "mixi2-js";

const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL, API_ADDRESS, AUTH_KEY } =
  process.env;

if (!CLIENT_ID || !CLIENT_SECRET || !TOKEN_URL || !API_ADDRESS) {
  consola.error(
    "必要な環境変数が設定されていません。.env.example を参考に .env を作成してください。"
  );
  process.exit(1);
}

const authenticator = new OAuth2Authenticator({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  tokenUrl: TOKEN_URL,
});

const client = new Client({
  apiAddress: API_ADDRESS,
  authenticator,
  authKey: AUTH_KEY,
});

// --- 設定 ---
const IMAGE_PATH = process.argv[2];
const POST_TEXT = process.argv[3] || "画像を投稿しました！";

if (!IMAGE_PATH) {
  consola.error("使い方: node index.js <画像ファイルパス> [投稿テキスト]");
  consola.error('例: node index.js ./photo.jpg "今日の一枚"');
  process.exit(1);
}

// --- Content-Type 判定 ---
const CONTENT_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
};

function getContentType(filePath) {
  const ext = filePath.toLowerCase().match(/\.[^.]+$/)?.[0];
  const contentType = CONTENT_TYPES[ext];
  if (!contentType) {
    consola.error(`未対応の画像形式です: ${ext}`);
    consola.error(`対応形式: ${Object.keys(CONTENT_TYPES).join(", ")}`);
    process.exit(1);
  }
  return contentType;
}

// --- メイン処理 ---
async function main() {
  const fileName = basename(IMAGE_PATH);
  consola.info(`📷 画像を投稿します: ${fileName}`);

  // 1. 画像ファイル読み込み
  const imageData = await readFile(IMAGE_PATH);
  const contentType = getContentType(IMAGE_PATH);
  consola.info(
    `  ファイルサイズ: ${(imageData.length / 1024).toFixed(1)} KB (${contentType})`
  );

  // 2. アップロード開始
  consola.info("📤 アップロードを開始...");
  const upload = await client.initiatePostMediaUpload({
    contentType,
    dataSize: imageData.length,
    mediaType: MediaUploadType.IMAGE,
  });
  consola.success(`  メディア ID: ${upload.mediaId}`);

  // 3. upload_url に画像データを POST で送信
  consola.info("📡 画像データを送信中...");
  const uploadResponse = await fetch(upload.uploadUrl, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: imageData,
  });
  if (!uploadResponse.ok) {
    consola.error(
      `アップロードに失敗しました: ${uploadResponse.status} ${uploadResponse.statusText}`
    );
    process.exit(1);
  }
  consola.success("  アップロード完了");

  // 4. 処理完了を待つ
  consola.info("⏳ メディアの処理を待機中...");
  let status;
  for (let i = 0; i < 30; i++) {
    status = await client.getPostMediaStatus(upload.mediaId);
    if (status.status === MediaUploadStatus.COMPLETED) break;
    if (status.status === MediaUploadStatus.FAILED) {
      consola.error("メディアの処理に失敗しました");
      process.exit(1);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  if (status?.status !== MediaUploadStatus.COMPLETED) {
    consola.error("メディアの処理がタイムアウトしました");
    process.exit(1);
  }
  consola.success("  処理完了");

  // 5. 画像付きポストを作成
  consola.info("📝 ポストを作成中...");
  const post = await client.createPost({
    text: POST_TEXT,
    mediaIdList: [upload.mediaId],
  });
  consola.success(`✅ 投稿完了! (postId: ${post.postId})`);

  client.close();
}

main().catch((err) => {
  consola.error("エラーが発生しました:", err);
  process.exit(1);
});
