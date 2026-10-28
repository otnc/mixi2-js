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
        const server = new sdk.WebhookServer({
          port: 0,
          publicKey: new Uint8Array(32),
          handler: { handle() {} },
        });
        await withTimeout(server.start(), 5000);
        await server.shutdown();
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
