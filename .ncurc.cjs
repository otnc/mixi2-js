// Tests still run on Node.js 20.19 (the minimum in engines.node), so vitest stays on the last major that supports it.
module.exports = {
  reject: ["typescript", "@types/node"],
  target: (name) => (name === "vitest" ? "minor" : "latest"),
};
