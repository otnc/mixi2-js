import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import nodePlugin from "eslint-plugin-n";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "coverage",
      "pages",
      "examples",
      "src/generated",
      ".private",
      ".sample",
      ".wrangler",
    ],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  { languageOptions: { globals: globals.node } },
  {
    // The supported range is read from engines.node, so APIs newer than the minimum Node.js version are reported.
    plugins: { n: nodePlugin },
    rules: {
      // These globals work without a flag on Node.js 20; only their experimental label was dropped later (fetch, Request and Response in 21, crypto in 23).
      // The runtime smoke test exercises them on Node.js 20.19.
      "n/no-unsupported-features/node-builtins": [
        "error",
        { ignores: ["fetch", "Request", "Response", "crypto"] },
      ],
      "n/no-unsupported-features/es-builtins": "error",
      "n/no-unsupported-features/es-syntax": "error",
      "n/prefer-node-protocol": "error",
    },
  },
  {
    // This file runs on Cloudflare Workers, not on the Node.js range in engines.node.
    files: ["scripts/runtime-smoke/worker.mjs"],
    languageOptions: { globals: globals.serviceworker },
    rules: { "n/no-unsupported-features/node-builtins": "off" },
  },
  eslintConfigPrettier
);
