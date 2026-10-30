// Cloudflare Workers entry for the runtime smoke test. It is started by workers.mjs, which serves the token endpoint.
const authenticator = { getAccessToken: async () => "token" };

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timed out")), ms)
    ),
  ]);
}

export default {
  async fetch(_request, env) {
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
      async webhook() {
        // WebhookServer can start a node:http server here, but Workers deliver requests to the fetch handler, so it never receives events.
        throw new Error(
          "WebhookServer needs a node:http server, which never receives requests on Workers"
        );
      },
      async webhookHandler() {
        const keys = await crypto.subtle.generateKey(
          { name: "Ed25519" },
          true,
          ["sign", "verify"]
        );
        const rawPublicKey = new Uint8Array(
          await crypto.subtle.exportKey("raw", keys.publicKey)
        );
        const handled = [];
        const handle = sdk.createWebhookHandler({
          publicKey: rawPublicKey,
          handler: { handle: (event) => void handled.push(event) },
          syncHandling: true,
        });
        const send = async (timestamp) => {
          const signature = new Uint8Array(
            await crypto.subtle.sign(
              { name: "Ed25519" },
              keys.privateKey,
              new TextEncoder().encode(timestamp)
            )
          );
          return handle(
            new Request("https://example.com/events", {
              method: "POST",
              body: new Uint8Array(0),
              headers: {
                "x-mixi2-application-event-signature": btoa(
                  String.fromCharCode(...signature)
                ),
                "x-mixi2-application-event-timestamp": timestamp,
              },
            })
          );
        };
        const now = Math.floor(Date.now() / 1000);
        const valid = await send(String(now));
        const stale = await send(String(now - 1000));
        if (valid.status !== 204 || stale.status !== 401) {
          throw new Error(`statuses ${valid.status} / ${stale.status}`);
        }
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
