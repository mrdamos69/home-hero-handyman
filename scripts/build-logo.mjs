/**
 * Decodes every src/assets/*.b64 file into public/images/<name>.jpg.
 * Runs automatically before `next build` / `next dev` (package.json
 * prebuild/predev hooks). This lets binary images live in the repo as text.
 *
 * To add an image: base64-encode a JPEG and save it as src/assets/<name>.b64.
 * To replace one with a real binary file: put <name>.jpg into public/images
 * and delete the corresponding .b64 file.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "src/assets");
const outDir = join(root, "public/images");
mkdirSync(outDir, { recursive: true });

let count = 0;
for (const file of readdirSync(assetsDir)) {
  if (!file.endsWith(".b64")) continue;
  const b64 = readFileSync(join(assetsDir, file), "utf8").replace(/\s+/g, "");
  const name = file.replace(/\.b64$/, "") + ".jpg";
  writeFileSync(join(outDir, name), Buffer.from(b64, "base64"));
  count += 1;
  console.log(`[build-assets] public/images/${name} written`);
}
console.log(`[build-assets] ${count} asset(s) decoded`);
