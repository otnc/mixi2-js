import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/helpers/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  shims: true,
  clean: true,
});
