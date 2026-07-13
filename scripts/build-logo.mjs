/**
 * Decodes src/assets/logo.b64 into public/images/logo.jpg.
 * Runs automatically before `next build` / `next dev` (see package.json
 * prebuild/predev). This lets the binary logo live in the repo as text.
 * To swap the logo: replace public/images/logo.jpg manually and delete
 * this script + the prebuild/predev hooks, or regenerate the .b64 file.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const b64 = readFileSync(join(root, "src/assets/logo.b64"), "utf8").replace(/\s+/g, "");
mkdirSync(join(root, "public/images"), { recursive: true });
writeFileSync(join(root, "public/images/logo.jpg"), Buffer.from(b64, "base64"));
console.log(`[build-logo] public/images/logo.jpg written (${b64.length} b64 chars)`);
