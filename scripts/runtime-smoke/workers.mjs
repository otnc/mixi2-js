// Runs scripts/runtime-smoke/worker.mjs on workerd through Wrangler's local dev server and reports the results.
// Usage: node scripts/runtime-smoke/workers.mjs
import http from "node:http";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { unstable_dev } from "wrangler";
import { report } from "./report.mjs";

const COMPATIBILITY_DATE = "2026-10-01";

const tokenServer = http.createServer((_req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(
    JSON.stringify({
      access_token: "token-1",
      token_type: "Bearer",
      expires_in: 3600,
    })
  );
});
await new Promise((resolve) => tokenServer.listen(0, "127.0.0.1", resolve));

const worker = await unstable_dev(
  fileURLToPath(new URL("./worker.mjs", import.meta.url)),
  {
    compatibilityDate: COMPATIBILITY_DATE,
    compatibilityFlags: ["nodejs_compat"],
    vars: { TOKEN_URL: `http://127.0.0.1:${tokenServer.address().port}/token` },
    logLevel: "error",
    experimental: { disableExperimentalWarning: true },
  }
);

let results;
try {
  const response = await worker.fetch("http://localhost/");
  results = await response.json();
} finally {
  await worker.stop();
  tokenServer.close();
}

const wranglerVersion = createRequire(import.meta.url)(
  "wrangler/package.json"
).version;
report(
  "workers",
  `(wrangler ${wranglerVersion}, compatibility date ${COMPATIBILITY_DATE}, nodejs_compat)`,
  results
);
