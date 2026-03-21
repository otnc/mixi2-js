import "dotenv/config";
import consola from "consola";
import { OAuth2Authenticator, Client, WebhookServer, EventType, EventReason } from "mixi2-js";

const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL, API_ADDRESS, AUTH_KEY, SIGNATURE_PUBLIC_KEY, PORT } =
  process.env;

if (!CLIENT_ID || !CLIENT_SECRET || !TOKEN_URL || !API_ADDRESS || !SIGNATURE_PUBLIC_KEY) {
  consola.error(
    "必要な環境変数が設定されていません。.env.example を参考に .env を作成してください。",
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

const publicKey = Buffer.from(SIGNATURE_PUBLIC_KEY, "base64");
const port = Number(PORT) || 8080;

const server = new WebhookServer({
  port,
  publicKey,
  handler: {
    async handle(event) {
      switch (event.eventType) {
        // ポスト作成イベント
        case EventType.POST_CREATED: {
          const postEvent = event.postCreatedEvent;
          if (!postEvent?.post) break;

          const reasons = postEvent.eventReasonList;
          const post = postEvent.post;
          const issuer = postEvent.issuer;
          const name = issuer?.displayName ?? "不明";

          if (reasons.includes(EventReason.POST_MENTIONED)) {
            // メンションされたら返信
            consola.info(`📝 ${name} さんからメンション: ${post.text}`);
            await client.createPost({
              text: `こんにちは、${name} さん！`,
              inReplyToPostId: post.postId,
            });
          } else if (reasons.includes(EventReason.POST_REPLY)) {
            // リプライされたらログ出力
            consola.info(`💬 ${name} さんからリプライ: ${post.text}`);
          } else if (reasons.includes(EventReason.POST_QUOTED)) {
            // 引用されたらログ出力
            consola.info(`🔗 ${name} さんに引用されました`);
          }
          break;
        }

        // DM 受信イベント
        case EventType.CHAT_MESSAGE_RECEIVED: {
          const messageEvent = event.chatMessageReceivedEvent;
          if (!messageEvent?.message) break;

          const message = messageEvent.message;
          const name = messageEvent.issuer?.displayName ?? "不明";
          consola.info(`✉️ ${name} さんから DM: ${message.text}`);

          // DM をエコー
          await client.sendChatMessage({
            roomId: message.roomId,
            text: `受け取りました: ${message.text}`,
          });
          break;
        }
      }
    },
  },
});

await server.start();
consola.success(`🚀 Webhook サーバー起動 (port: ${port})`);
consola.info("エンドポイント:");
consola.info(`  POST http://localhost:${port}/events  — イベント受信`);
consola.info(`  GET  http://localhost:${port}/healthz — ヘルスチェック`);
