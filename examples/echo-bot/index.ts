import 'dotenv/config';
import consola from 'consola';
import {
  OAuth2Authenticator,
  Client,
  StreamWatcher,
  EventType,
  EventReason,
} from 'mixi2-js';
import type { Event } from 'mixi2-js';

const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL, API_ADDRESS, STREAM_ADDRESS, AUTH_KEY } = process.env;

if (!CLIENT_ID || !CLIENT_SECRET || !TOKEN_URL || !API_ADDRESS || !STREAM_ADDRESS) {
  consola.error('必要な環境変数が設定されていません。.env.example を参考に .env を作成してください。');
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

const watcher = new StreamWatcher({
  streamAddress: STREAM_ADDRESS,
  authenticator,
  authKey: AUTH_KEY,
});

consola.info('🤖 Echo Bot を起動中...');

watcher.watch({
  async handle(event: Event): Promise<void> {
    // DM 受信イベントのみ処理
    if (event.eventType !== EventType.CHAT_MESSAGE_RECEIVED) return;

    const messageEvent = event.chatMessageReceivedEvent;
    if (!messageEvent) return;
    if (!messageEvent.eventReasonList.includes(EventReason.DIRECT_MESSAGE_RECEIVED)) return;

    const message = messageEvent.message;
    const issuer = messageEvent.issuer;
    if (!message?.text) return;

    try {
      await client.sendChatMessage({
        roomId: message.roomId,
        text: message.text,
      });
      consola.success(`${issuer?.displayName ?? '不明'} さんのメッセージをエコー: ${message.text}`);
    } catch (err) {
      consola.error('メッセージの送信に失敗しました:', err);
    }
  },
}).then(() => {
  consola.info('ストリーム接続が終了しました。');
}).catch((err: Error) => {
  consola.error('ストリーム接続エラー:', err);
  process.exit(1);
});
