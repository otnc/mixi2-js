import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    ignores: [
      "dist/**",
      "scripts/**",
      "**/*.test.ts",
      ".private/**",
      ".sample/**",
      "examples/**",
      "pages/**",
    ],
  },
];
