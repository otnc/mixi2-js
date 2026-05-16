import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    ignores: [
      "dist/**",
      "**/*.test.ts",
      ".private/**",
      ".sample/**",
      "examples/**",
      "pages/**",
    ],
  },
];
