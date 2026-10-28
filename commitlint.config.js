import conventional from "@commitlint/config-conventional";

// Every rule only warns, so a commit is never blocked. Messages that do not follow Conventional Commits are simply left out of the generated changelog.
export default {
  rules: Object.fromEntries(
    Object.entries(conventional.rules).map(([name, [, ...options]]) => [
      name,
      [1, ...options],
    ])
  ),
};
