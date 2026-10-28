import fs from "node:fs";

// Features documented as supported in the README must keep working; the others are only reported.
export const required = {
  node: ["auth", "client", "webhook", "stream"],
  bun: ["auth", "client", "webhook", "stream"],
  deno: ["auth", "client", "webhook", "stream"],
  workers: [],
};

/** Prints the results as a Markdown table (also to the job summary) and exits non-zero when a required feature failed. */
export function report(runtime, version, results) {
  const rows = Object.entries(results).map(
    ([name, result]) =>
      `| ${name} | ${result === "ok" ? "✅" : "❌"} | ${required[runtime].includes(name) ? "yes" : "no"} | ${result} |`
  );
  const summary = [
    `### ${runtime} ${version}`,
    "",
    "| feature | result | required | detail |",
    "| --- | --- | --- | --- |",
    ...rows,
    "",
  ].join("\n");
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  }

  const failedRequired = required[runtime].filter(
    (name) => results[name] !== "ok"
  );
  if (failedRequired.length > 0) {
    console.error(`Required features failed: ${failedRequired.join(", ")}`);
    process.exit(1);
  }
  process.exit(0);
}
