import fs from "fs/promises";
import path from "path";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { spawn } from "child_process";
import consola from "consola";

function validateName(name) {
  if (!name) return false;
  const scoped = name.startsWith("@");
  const regex = scoped
    ? /^@[a-z0-9-~][a-z0-9-._~]*\/[a-z0-9-~][a-z0-9-._~]*$/
    : /^[a-z0-9-~][a-z0-9-._~]*$/;
  return regex.test(name);
}

async function ensurePrivateDir(cwd) {
  const dir = path.join(cwd, ".private");
  await fs.mkdir(dir, { recursive: true });
  return dir;
}

async function backupFile(filePath) {
  try {
    const dir = await ensurePrivateDir(process.cwd());
    const base = path.basename(filePath);
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const dest = path.join(dir, `${base}.${ts}.bak`);
    await fs.copyFile(filePath, dest);
    return dest;
  } catch (err) {
    consola.warn(`Failed to backup ${filePath}: ${err.message}`);
    return null;
  }
}

async function replaceIfExists(filePath, replacements) {
  const stat = await fs.stat(filePath).catch(() => null);
  if (!stat) return { updated: false, reason: "not-found" };
  const orig = await fs.readFile(filePath, "utf8");
  let modified = orig;
  for (const [pattern, value] of replacements) {
    modified = modified.replace(pattern, value);
  }
  if (modified !== orig) {
    await backupFile(filePath).catch(() => {});
    await fs.writeFile(filePath, modified, "utf8");
    return { updated: true };
  }
  return { updated: false, reason: "no-placeholder" };
}

async function run() {
  const cwd = process.cwd();
  const pkgPath = path.join(cwd, "package.json");

  let pkg;
  try {
    pkg = JSON.parse(await fs.readFile(pkgPath, "utf8"));
  } catch (err) {
    consola.error("Failed to read package.json:", err.message);
    process.exit(1);
  }

  const rl = readline.createInterface({ input, output });

  consola.info(
    "Setup: fill in metadata. Press Enter to accept the current value in [brackets].",
  );

  const defaultName = pkg.name || "";
  let name =
    (await rl.question(`Package name [${defaultName}]: `)).trim() ||
    defaultName;
  while (!validateName(name)) {
    consola.warn(
      "Invalid package name. Use lowercase, numbers, hyphens, underscores. Scoped names like @scope/name are allowed.",
    );
    name =
      (await rl.question(`Package name [${defaultName}]: `)).trim() ||
      defaultName;
  }

  const defaultDesc = pkg.description || "";
  const description =
    (await rl.question(`Description [${defaultDesc}]: `)).trim() || defaultDesc;

  const defaultAuthor = pkg.author || "";
  const author =
    (await rl.question(`Author [${defaultAuthor}]: `)).trim() || defaultAuthor;

  const existingRepo =
    (pkg.repository && (pkg.repository.url || pkg.repository)) || "";
  const repoInput =
    (await rl.question(`Repository URL [${existingRepo}]: `)).trim() ||
    existingRepo;

  const defaultYear = String(new Date().getFullYear());
  const year =
    (await rl.question(`Copyright year [${defaultYear}]: `)).trim() ||
    defaultYear;

  const defaultCopyrightName = author || pkg.author || "";
  const copyrightName =
    (
      await rl.question(`Copyright holder name [${defaultCopyrightName}]: `)
    ).trim() || defaultCopyrightName;

  const confirm = (await rl.question("Confirm and apply changes? (Y/n): "))
    .trim()
    .toLowerCase();
  await rl.close();

  if (confirm === "n" || confirm === "no") {
    consola.info("Aborted by user. No changes were made.");
    return;
  }

  try {
    await backupFile(pkgPath).catch(() => {});
    pkg.name = name;
    pkg.description = description;
    if (author) pkg.author = author;
    if (repoInput) {
      let finalRepoInput = repoInput;
      if (!finalRepoInput.startsWith("git+")) {
        finalRepoInput = `git+${finalRepoInput}`
      }
      if (!finalRepoInput.endsWith(".git")) {
        finalRepoInput = `${finalRepoInput}.git`;
      }
      pkg.repository = {
        type: "git",
        url: finalRepoInput,
      };
      const normalized = repoInput.replace(/(^git\+|\.git$)/g, "");
      pkg.bugs = { url: `${normalized}/issues` };
      pkg.homepage = `${normalized}#readme`;
    }
    await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");
    consola.success(
      "Updated package.json (backup created as package.json.bak)",
    );
  } catch (err) {
    consola.error("Failed to update package.json:", err.message);
    process.exit(1);
  }

  // README replacements
  const readmePath = path.join(cwd, "README.md");
  const readmeReplacements = [
    [/\<your-package-name\>/gi, name],
    [/\[\<your-package-name\>\]/gi, name],
    [/\<your-package-description\>/gi, description],
    [/\[\<your-package-description\>\]/gi, description],
  ];
  const readmeRes = await replaceIfExists(readmePath, readmeReplacements);
  if (readmeRes.updated)
    consola.success(
      "README.md placeholders replaced (backup at README.md.bak)",
    );
  else if (readmeRes.reason === "not-found")
    consola.info("README.md not found; skipping README replacement.");
  else consola.info("No README placeholders found; nothing to replace.");

  // LICENSE replacements
  const licensePath = path.join(cwd, "LICENSE");
  const licenseReplacements = [
    [/\<year\>/gi, year],
    [/\<YEAR\>/g, year],
    [/\<your-name\>/gi, copyrightName],
    [/\[\<your-name\>\]/gi, copyrightName],
    [/\<copyright-holder\>/gi, copyrightName],
    [/\[\<copyright-holder\>\]/gi, copyrightName],
  ];
  const licRes = await replaceIfExists(licensePath, licenseReplacements);
  if (licRes.updated)
    consola.success("LICENSE placeholders replaced (backup at LICENSE.bak)");
  else if (licRes.reason === "not-found")
    consola.info("LICENSE not found; skipping LICENSE replacement.");
  else consola.info("No LICENSE placeholders found; nothing to replace.");

  // npm install
  consola.info("Running `npm install` to install dependencies...");
  try {
    await new Promise((resolve, reject) => {
      const cp = spawn("npm", ["install"], { stdio: "inherit", shell: true });
      cp.on("close", (code) =>
        code === 0
          ? resolve()
          : reject(new Error(`npm install exited with code ${code}`)),
      );
      cp.on("error", reject);
    });
    consola.success("npm install completed successfully.");
  } catch (err) {
    consola.error("npm install failed:", err.message);
    process.exit(1);
  }
}

run().catch((err) => {
  consola.error("Unexpected error:", err);
  process.exit(1);
});
