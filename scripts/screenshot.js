// screenshot.js
// For each discovered template, produce a homepage screenshot.
//  - static templates: serve the folder, screenshot the entry file directly.
//  - build templates: run npm install && npm run build, find the output
//    folder, serve it, screenshot it. If anything fails or times out,
//    mark the template as needing a manual screenshot instead of crashing
//    the whole pipeline.

import fs from "fs";
import path from "path";
import { execSync, spawn } from "child_process";
import puppeteer from "puppeteer";
import handler from "serve-handler";
import http from "http";

const ROOT = process.env.CATALOGUE_ROOT
  ? path.resolve(process.env.CATALOGUE_ROOT)
  : process.cwd();
const SCREENSHOT_DIR = path.join(ROOT, "docs", "screenshots");
const BUILD_TIMEOUT_MS = 1000 * 60 * 4; // 4 minutes per project, generous but bounded
const SERVER_PORT_START = 4123;

fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

function runWithTimeout(cmd, cwd, timeoutMs) {
  return new Promise((resolve) => {
    const child = spawn(cmd, { cwd, shell: true });
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, timeoutMs);

    let stderr = "";
    child.stderr?.on("data", (d) => (stderr += d.toString()));

    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ success: !timedOut && code === 0, timedOut, code, stderr });
    });
  });
}

function findBuildOutput(folderPath) {
  const candidates = ["out", "dist", "build", ".next/static"]; // .next needs `next start` not static serve, handled separately
  for (const rel of candidates) {
    const full = path.join(folderPath, rel);
    if (fs.existsSync(full) && fs.existsSync(path.join(full, "index.html"))) {
      return rel;
    }
  }
  return null;
}

function startStaticServer(rootDir, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) =>
      handler(req, res, { public: rootDir })
    );
    server.listen(port, () => resolve(server));
  });
}

async function screenshotUrl(browser, url, outputPath) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    // small settle delay for animations/lazy-loaded hero images
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({ path: outputPath, fullPage: false });
    return true;
  } catch (err) {
    console.error(`  Screenshot failed for ${url}:`, err.message);
    return false;
  } finally {
    await page.close();
  }
}

export async function screenshotTemplate(template, browser, portOffset) {
  const folderPath = path.join(ROOT, template.folder);
  const outputPath = path.join(SCREENSHOT_DIR, `${template.slug}.png`);
  const port = SERVER_PORT_START + portOffset;

  if (template.type === "static") {
    const server = await startStaticServer(folderPath, port);
    const url = `http://localhost:${port}/${template.entry.replace(
      /^\/?/,
      ""
    )}`;
    const ok = await screenshotUrl(browser, url, outputPath);
    server.close();
    return {
      ...template,
      screenshot: ok ? `screenshots/${template.slug}.png` : null,
      needsManualScreenshot: !ok,
    };
  }

  if (template.type === "build") {
    console.log(`  Building ${template.slug} (${template.buildTool})...`);

    const installResult = await runWithTimeout(
      "npm install --no-audit --no-fund",
      folderPath,
      BUILD_TIMEOUT_MS
    );
    if (!installResult.success) {
      console.error(`  npm install failed for ${template.slug}`);
      return {
        ...template,
        screenshot: null,
        needsManualScreenshot: true,
        buildError: "npm install failed or timed out",
      };
    }

    const buildResult = await runWithTimeout(
      "npm run build",
      folderPath,
      BUILD_TIMEOUT_MS
    );
    if (!buildResult.success) {
      console.error(`  npm run build failed for ${template.slug}`);
      return {
        ...template,
        screenshot: null,
        needsManualScreenshot: true,
        buildError: "npm run build failed or timed out",
      };
    }

    const outputDir = findBuildOutput(folderPath);
    if (!outputDir) {
      return {
        ...template,
        screenshot: null,
        needsManualScreenshot: true,
        buildError: "Build succeeded but no recognizable output folder found",
      };
    }

    const server = await startStaticServer(
      path.join(folderPath, outputDir),
      port
    );
    const url = `http://localhost:${port}/index.html`;
    const ok = await screenshotUrl(browser, url, outputPath);
    server.close();

    return {
      ...template,
      screenshot: ok ? `screenshots/${template.slug}.png` : null,
      needsManualScreenshot: !ok,
    };
  }

  // unknown type
  return {
    ...template,
    screenshot: null,
    needsManualScreenshot: true,
    buildError: "Could not find a usable homepage entry point",
  };
}

export async function screenshotAll(templates) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];
  let i = 0;
  for (const template of templates) {
    console.log(`Processing ${template.slug}...`);
    const result = await screenshotTemplate(template, browser, i);
    results.push(result);
    i++;
  }

  await browser.close();
  return results;
}
