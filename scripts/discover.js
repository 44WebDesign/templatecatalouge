// discover.js
// Scans the repo root, finds every template folder, and works out how to
// view its homepage: either a static HTML file we can screenshot directly,
// or a project that needs `npm install && npm run build` first.
//
// IMPORTANT: this script (and the others in this pipeline) assume they are
// run with the current working directory set to the repo root -- that's
// how the GitHub Action invokes them. If you ever run these manually,
// `cd` to the repo root first or pass an explicit root as an argument.

import fs from "fs";
import path from "path";

const ROOT = process.env.CATALOGUE_ROOT
  ? path.resolve(process.env.CATALOGUE_ROOT)
  : process.cwd();
const IGNORE = new Set([
  ".git",
  ".github",
  "node_modules",
  "docs",
  "scripts",
  ".DS_Store",
]);

function isIgnored(name) {
  return IGNORE.has(name) || name.startsWith(".");
}

// Walk a couple of levels deep looking for a usable index.html that isn't
// just a bare SPA shell (e.g. Vite's `<div id="root"></div>`).
function findStaticEntry(folderPath) {
  const candidates = [
    "index.html",
    "public/index.html",
    "dist/index.html",
    "build/index.html",
    "out/index.html",
  ];

  for (const rel of candidates) {
    const full = path.join(folderPath, rel);
    if (fs.existsSync(full)) {
      const html = fs.readFileSync(full, "utf-8");
      if (looksLikeRealPage(html)) {
        return rel;
      }
    }
  }
  return null;
}

// Heuristic: a real static template page has a reasonable amount of markup
// in the body. A bare SPA shell is tiny and just contains a root div + script tags.
function looksLikeRealPage(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;
  // strip script/style tags before measuring
  const stripped = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .trim();
  return stripped.length > 600; // arbitrary but effective threshold
}

function detectPackageJson(folderPath) {
  const pkgPath = path.join(folderPath, "package.json");
  if (!fs.existsSync(pkgPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  } catch {
    return null;
  }
}

function classifyBuildTool(pkg) {
  const deps = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
  };
  if (deps.next) return "next";
  if (deps.vite) return "vite";
  if (pkg.scripts && pkg.scripts.build) return "generic-npm";
  return "unknown";
}

export function discoverTemplates() {
  const entries = fs.readdirSync(ROOT, { withFileTypes: true });
  const templates = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || isIgnored(entry.name)) continue;
    const folderPath = path.join(ROOT, entry.name);

    const staticEntry = findStaticEntry(folderPath);
    const pkg = detectPackageJson(folderPath);

    if (staticEntry && !pkg) {
      templates.push({
        slug: entry.name,
        type: "static",
        entry: staticEntry,
        folder: entry.name,
      });
      continue;
    }

    if (pkg) {
      // Has a package.json -> needs a build step even if a (bare) index.html
      // exists at the root, EXCEPT if the static entry we found already
      // looked like a real rendered page (covers pre-built static exports
      // that were committed alongside source).
      if (staticEntry) {
        templates.push({
          slug: entry.name,
          type: "static",
          entry: staticEntry,
          folder: entry.name,
        });
      } else {
        templates.push({
          slug: entry.name,
          type: "build",
          buildTool: classifyBuildTool(pkg),
          folder: entry.name,
        });
      }
      continue;
    }

    if (staticEntry) {
      templates.push({
        slug: entry.name,
        type: "static",
        entry: staticEntry,
        folder: entry.name,
      });
      continue;
    }

    // No usable entry found at all
    templates.push({
      slug: entry.name,
      type: "unknown",
      folder: entry.name,
    });
  }

  return templates;
}

// Allow running directly: node scripts/discover.js
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(discoverTemplates(), null, 2));
}
