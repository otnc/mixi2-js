import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["test/**/*.test.ts"],
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
  },
});
