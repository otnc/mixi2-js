import conventional from "@commitlint/config-conventional";

// The type(scope): prefix is enforced so the changelog can group commits. Every other rule only warns.
const enforced = new Set([
  "type-empty",
  "type-enum",
  "type-case",
  "subject-empty",
]);

export default {
  rules: Object.fromEntries(
    Object.entries(conventional.rules).map(([name, [level, ...options]]) => [
      name,
      [enforced.has(name) ? level : Math.min(level, 1), ...options],
    ])
  ),
};
