// Cloudflare Workers entry for the runtime smoke test. It is started by workers.mjs, which serves the token endpoint.
import { httpServerHandler } from "cloudflare:node";

const authenticator = { getAccessToken: async () => "token" };
const WEBHOOK_SERVER_PORT = 8788;

async function generateKeys() {
  const keys = await crypto.subtle.generateKey({ name: "Ed25519" }, true, [
    "sign",
    "verify",
  ]);
  const rawPublicKey = new Uint8Array(
    await crypto.subtle.exportKey("raw", keys.publicKey)
  );
  return { privateKey: keys.privateKey, rawPublicKey };
}

/** Builds an empty webhook request signed for the given timestamp. */
async function signedRequest(privateKey, timestamp) {
  const signature = new Uint8Array(
    await crypto.subtle.sign(
      { name: "Ed25519" },
      privateKey,
      new TextEncoder().encode(timestamp)
    )
  );
  return new Request("https://example.com/events", {
    method: "POST",
    body: new Uint8Array(0),
    headers: {
      "x-mixi2-application-event-signature": btoa(
        String.fromCharCode(...signature)
      ),
      "x-mixi2-application-event-timestamp": timestamp,
    },
  });
}

/** Expects 204 for a fresh signature and 401 for a stale timestamp. */
async function expectSignatureChecks(send, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const valid = await send(await signedRequest(privateKey, String(now)));
  const stale = await send(await signedRequest(privateKey, String(now - 1000)));
  if (valid.status !== 204 || stale.status !== 401) {
    throw new Error(`statuses ${valid.status} / ${stale.status}`);
  }
}

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timed out")), ms)
    ),
  ]);
}

export default {
  async fetch(_request, env, ctx) {
    const results = {};
    let sdk;
    try {
      sdk = await import("../../dist/index.mjs");
    } catch (err) {
      const failure = `failed to import the package: ${err?.message ?? err}`;
      return Response.json({
        auth: failure,
        client: failure,
        webhook: failure,
        webhookHandler: failure,
        stream: failure,
      });
    }

    const checks = {
      async auth() {
        const auth = new sdk.OAuth2Authenticator({
          clientId: "id",
          clientSecret: "secret",
          tokenUrl: env.TOKEN_URL,
        });
        const token = await auth.getAccessToken();
        if (token !== "token-1") throw new Error(`unexpected token ${token}`);
      },
      async client() {
        const client = new sdk.Client({
          apiAddress: "localhost:443",
          authenticator,
        });
        try {
          await withTimeout(client.getUsers(["user-1"]), 5000);
        } finally {
          client.close();
        }
      },
      // Workers deliver requests to the fetch handler; httpServerHandler from cloudflare:node forwards them to the node:http server.
      async webhook() {
        const { privateKey, rawPublicKey } = await generateKeys();
        const server = new sdk.WebhookServer({
          port: WEBHOOK_SERVER_PORT,
          publicKey: Buffer.from(rawPublicKey),
          handler: { handle() {} },
          syncHandling: true,
        });
        await server.start();
        try {
          const handler = httpServerHandler({ port: WEBHOOK_SERVER_PORT });
          await expectSignatureChecks(
            (request) => handler.fetch(request, env, ctx),
            privateKey
          );
        } finally {
          await server.shutdown();
        }
      },
      async webhookHandler() {
        const { privateKey, rawPublicKey } = await generateKeys();
        const handle = sdk.createWebhookHandler({
          publicKey: rawPublicKey,
          handler: { handle() {} },
          syncHandling: true,
        });
        await expectSignatureChecks(handle, privateKey);
      },
      async stream() {
        const watcher = new sdk.StreamWatcher({
          streamAddress: "localhost:443",
          authenticator,
        });
        try {
          await withTimeout(watcher.watch({ handle() {} }), 5000);
        } finally {
          watcher.stop();
        }
      },
    };

    for (const [name, run] of Object.entries(checks)) {
      try {
        await run();
        results[name] = "ok";
      } catch (err) {
        results[name] = `failed: ${err?.message ?? err}`;
      }
    }
    return Response.json(results);
  },
};
