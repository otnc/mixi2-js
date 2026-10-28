// Runs the built package on the current runtime (Node.js, Bun or Deno) and reports which features work.
// Usage: <runtime> scripts/runtime-smoke/smoke.mjs
// Env: GRPC_ADDRESS (the server from server.mjs) and GRPC_DEFAULT_SSL_ROOTS_FILE_PATH (its certificate).
import crypto from "node:crypto";
import fs from "node:fs";
import http from "node:http";

const sdk = await import("../../dist/index.mjs");

const runtime =
  typeof globalThis.Deno !== "undefined"
    ? "deno"
    : typeof globalThis.Bun !== "undefined"
      ? "bun"
      : "node";

// Features documented as supported must keep working; the others are only reported.
const required = {
  node: ["auth", "client", "webhook", "stream"],
  bun: ["auth", "client", "webhook", "stream"],
  deno: ["auth", "client", "webhook", "stream"],
};

const authenticator = { getAccessToken: async () => "token" };
const grpcAddress = process.env.GRPC_ADDRESS;

const checks = {
  async auth() {
    const server = http.createServer((_req, res) => {
      res.setHeader("content-type", "application/json");
      res.end(
        JSON.stringify({
          access_token: "token-1",
          token_type: "Bearer",
          expires_in: 3600,
        })
      );
    });
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    try {
      const auth = new sdk.OAuth2Authenticator({
        clientId: "id",
        clientSecret: "secret",
        tokenUrl: `http://127.0.0.1:${server.address().port}/token`,
      });
      const token = await auth.getAccessToken();
      if (token !== "token-1") throw new Error(`unexpected token ${token}`);
    } finally {
      server.close();
    }
  },

  async client() {
    const client = new sdk.Client({ apiAddress: grpcAddress, authenticator });
    try {
      const users = await client.getUsers(["user-1"]);
      if (users[0]?.name !== "name-user-1") {
        throw new Error(`unexpected users ${JSON.stringify(users)}`);
      }
    } finally {
      client.close();
    }
  },

  async webhook() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519");
    const rawPublicKey = publicKey
      .export({ format: "der", type: "spki" })
      .subarray(12);
    const handled = [];
    const server = new sdk.WebhookServer({
      port: 0,
      publicKey: Buffer.from(rawPublicKey),
      handler: { handle: (event) => void handled.push(event) },
      syncHandling: true,
    });
    await server.start();
    try {
      const url = `http://127.0.0.1${server.address}/events`;
      const send = (timestamp) =>
        fetch(url, {
          method: "POST",
          body: new Uint8Array(0),
          headers: {
            "x-mixi2-application-event-signature": crypto
              .sign(null, Buffer.from(timestamp), privateKey)
              .toString("base64"),
            "x-mixi2-application-event-timestamp": timestamp,
          },
        });
      const now = Math.floor(Date.now() / 1000);
      const valid = await send(String(now));
      const stale = await send(String(now - 1000));
      if (valid.status !== 204 || stale.status !== 401) {
        throw new Error(`statuses ${valid.status} / ${stale.status}`);
      }
    } finally {
      await server.shutdown();
    }
  },

  async stream() {
    const received = [];
    const watcher = new sdk.StreamWatcher({
      streamAddress: grpcAddress,
      authenticator,
    });
    await Promise.race([
      watcher.watch({ handle: (event) => void received.push(event.eventId) }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timed out")), 15000)
      ),
    ]);
    watcher.stop();
    if (received.join() !== "event-1") {
      throw new Error(`received ${JSON.stringify(received)}`);
    }
  },
};

const results = {};
for (const [name, run] of Object.entries(checks)) {
  try {
    await run();
    results[name] = "ok";
  } catch (err) {
    results[name] = `failed: ${err?.message ?? err}`;
  }
}

const rows = Object.entries(results).map(
  ([name, result]) =>
    `| ${name} | ${result === "ok" ? "✅" : "❌"} | ${required[runtime].includes(name) ? "yes" : "no"} | ${result} |`
);
const summary = [
  `### ${runtime} ${process.versions.bun ?? globalThis.Deno?.version?.deno ?? process.version}`,
  "",
  "| feature | result | required | detail |",
  "| --- | --- | --- | --- |",
  ...rows,
  "",
].join("\n");
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
}

const failedRequired = required[runtime].filter(
  (name) => results[name] !== "ok"
);
if (failedRequired.length > 0) {
  console.error(`Required features failed: ${failedRequired.join(", ")}`);
  process.exit(1);
}
process.exit(0);
