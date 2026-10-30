// Generates the protobufjs static module (src/generated/proto.js) and its typings from proto/.
// Static code avoids protobufjs's runtime code generation, which runtimes such as Cloudflare Workers forbid.
// Usage: npm run generate:proto
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src", "generated");
const cli = path.join(root, "node_modules", "protobufjs-cli", "bin");
const protos = [
  "social/mixi/application/service/application_api/v1/service.proto",
  "social/mixi/application/service/application_stream/v1/service.proto",
  "social/mixi/application/service/client_endpoint/v1/service.proto",
];
const pbjsArgs = [
  "-t",
  "static-module",
  "-w",
  "es6",
  "--no-delimited",
  "--no-verify",
  // Calls go through @grpc/grpc-js, so protobufjs's RPC service classes and type URLs are not needed.
  "--no-service",
  "--no-typeurl",
  "-p",
  path.join(root, "proto"),
];

function pbjs(extraArgs, out) {
  execFileSync(
    process.execPath,
    [path.join(cli, "pbjs"), ...pbjsArgs, ...extraArgs, "-o", out, ...protos],
    { cwd: path.join(root, "proto"), stdio: "inherit" }
  );
}

function postProcess(file) {
  const source = fs.readFileSync(file, "utf8");
  // protobufjs is CommonJS without an exports map, so Node.js ESM needs the file extension and a default import.
  const fixed = source.replace(
    'import * as $protobuf from "protobufjs/minimal";',
    'import $protobuf from "protobufjs/minimal.js";'
  );
  if (fixed === source) throw new Error(`unexpected import in ${file}`);
  // The deeply nested namespaces make indentation about half of the file. The output has no multi-line strings, so dropping it is safe.
  const dedented = fixed.replace(/^[ \t]+/gm, "");
  // JSR does not pick up the sibling .d.ts on its own.
  fs.writeFileSync(file, `// @ts-self-types="./proto.d.ts"\n${dedented}`);
}

// pbts emits `import Long = require("long")`, which JSR rejects as CommonJS. Decoding uses `longs: Number`, so 64-bit fields are typed as plain numbers.
function postProcessTypes(file) {
  const source = fs.readFileSync(file, "utf8");
  const withoutImport = source.replace('import Long = require("long");\n', "");
  if (withoutImport === source) throw new Error(`unexpected import in ${file}`);
  const fixed = withoutImport.replaceAll("|Long", "");
  if (/\bLong\b/.test(fixed))
    throw new Error(`Long is still referenced in ${file}`);
  fs.writeFileSync(file, fixed);
}

fs.mkdirSync(outDir, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "mixi2-proto-"));
try {
  // pbts reads the JSDoc of the commented build; the shipped module omits comments to stay small.
  const commented = path.join(tmp, "proto.js");
  pbjs([], commented);
  execFileSync(
    process.execPath,
    [path.join(cli, "pbts"), "-o", path.join(outDir, "proto.d.ts"), commented],
    { stdio: "inherit" }
  );
  postProcessTypes(path.join(outDir, "proto.d.ts"));
  const js = path.join(outDir, "proto.js");
  pbjs(["--no-comments"], js);
  postProcess(js);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
