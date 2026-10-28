import { setTimeout as sleep } from "node:timers/promises";
import { Client, OAuth2Authenticator } from "../dist/index.mjs";
import {
  TextSplitter,
  apiAddress,
  maxPostLength,
  tokenUrl,
} from "../dist/helpers/index.mjs";

// CreatePost allows 20 requests per minute, so posts are spaced to stay below it.
const POST_INTERVAL_MS = 3500;
const MAX_NOTE_POSTS = 15;

const graphemes = new Intl.Segmenter("ja", { granularity: "grapheme" });
const lengthOf = (text) => [...graphemes.segment(text)].length;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

function toPlainText(markdown) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^#{1,6}\s+(.*)$/gm, "■ $1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "・")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Packs whole lines into posts so that a list item is only split when it alone exceeds the limit. */
function packLines(text) {
  const splitter = new TextSplitter();
  const posts = [];
  let current = "";
  for (const line of text.split("\n")) {
    const candidate = current ? `${current}\n${line}` : line;
    if (lengthOf(candidate) <= maxPostLength) {
      current = candidate;
      continue;
    }
    // A section heading moves to the next post together with its first item.
    const lines = current.trimEnd().split("\n");
    const heading = lines.at(-1)?.startsWith("■") ? lines.pop() : undefined;
    const flushed = lines.join("\n").trim();
    if (flushed) posts.push(flushed);
    if (heading && lengthOf(`${heading}\n${line}`) <= maxPostLength) {
      current = `${heading}\n${line}`;
    } else if (lengthOf(line) <= maxPostLength) {
      if (heading) posts.push(heading);
      current = line;
    } else {
      const pieces = splitter.split(line);
      current = pieces.pop() ?? "";
      posts.push(...pieces);
    }
  }
  if (current.trim()) posts.push(current.trim());
  return posts;
}

const version = requireEnv("RELEASE_TAG");
const releaseUrl = requireEnv("RELEASE_URL");
const repositoryUrl = requireEnv("REPOSITORY_URL");
const notePosts = packLines(toPlainText(process.env.RELEASE_BODY ?? ""));
const truncated = notePosts.length > MAX_NOTE_POSTS;
const thread = [
  `mixi2-js ${version} がリリースされました！\n${repositoryUrl}`,
  ...notePosts.slice(0, MAX_NOTE_POSTS),
  `${truncated ? "続きは" : "詳細は"}リリースページをご覧ください\n${releaseUrl}`,
];

if (process.env.DRY_RUN) {
  for (const text of thread) console.log(`--- ${lengthOf(text)}\n${text}`);
  process.exit(0);
}

const client = new Client({
  apiAddress,
  authenticator: new OAuth2Authenticator({
    clientId: requireEnv("MIXI2_CLIENT_ID"),
    clientSecret: requireEnv("MIXI2_CLIENT_SECRET"),
    tokenUrl,
  }),
});

try {
  let parentPostId;
  for (const [index, text] of thread.entries()) {
    if (index > 0) await sleep(POST_INTERVAL_MS);
    const post = await client.createPost({
      text,
      inReplyToPostId: parentPostId,
    });
    parentPostId = post.postId;
    console.log(`Posted ${index + 1}/${thread.length}: ${post.postId}`);
  }
} finally {
  client.close();
}
