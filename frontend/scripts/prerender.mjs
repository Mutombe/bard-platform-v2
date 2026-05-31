// Post-build static prerender.
//
// Spins up `vite preview`, walks every route, snapshots the rendered HTML
// (with hydrated Helmet head) and writes a per-route static file so a
// dumb crawler (Bing, LinkedIn, Slack, social unfurlers, AI scrapers,
// regulator audit) sees real content without running JS.
//
// Carries forward the bitstudio.co.zw fix for Render:
//   1. spawn vite preview in a detached process group on POSIX so we can
//      SIGKILL the whole group, not just the shell wrapper;
//   2. explicit process.exit(0) at the end so the script always exits
//      promptly and never trips Render's 143 SIGTERM.

import { promises as fs, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SRC = path.join(ROOT, "src");

const PORT = 4173;
const ORIGIN = `http://localhost:${PORT}`;

const STATIC_ROUTES = [
  "/",
  "/personal", "/business", "/private-banking", "/international", "/institutional",
  "/banking", "/wealth", "/markets", "/online-banking", "/login", "/app",
  "/about", "/group", "/leadership",
  "/insights",
  "/contact", "/locations",
  "/security", "/legal", "/privacy", "/cookies", "/terms",
  "/regulatory", "/accessibility", "/complaints",
];

async function extractSlugs(file) {
  const src = await fs.readFile(file, "utf8");
  const re = /slug:\s*["']([^"']+)["']/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) out.push(m[1]);
  return out;
}

async function startPreview() {
  return new Promise((resolve, reject) => {
    const isWin = process.platform === "win32";
    const proc = spawn(
      "npx",
      ["vite", "preview", "--port", String(PORT), "--strictPort"],
      {
        cwd: ROOT,
        stdio: ["ignore", "pipe", "pipe"],
        // Windows: npx is a .cmd shim → shell wrapper required.
        // POSIX: detach so we can SIGKILL the whole process group later.
        shell: isWin,
        detached: !isWin,
      }
    );

    let resolved = false;
    const ready = () => { if (!resolved) { resolved = true; resolve(proc); } };
    proc.stdout.on("data", (b) => { if (b.toString().includes(String(PORT))) ready(); });
    proc.stderr.on("data", (b) => process.stderr.write(b));
    proc.on("error", reject);
    proc.on("exit", (code) => { if (!resolved) reject(new Error(`vite preview exited ${code}`)); });
    setTimeout(ready, 8000);
  });
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  page.on("console", () => {});
  page.on("pageerror", () => {});
  await page.goto(ORIGIN + route, { waitUntil: "networkidle0", timeout: 45_000 });
  await new Promise((r) => setTimeout(r, 300));
  const html = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);
  await page.close();
  return html;
}

function diskPathFor(route) {
  if (route === "/") return path.join(DIST, "index.html");
  const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(DIST, clean, "index.html");
}

async function main() {
  const [products, insights, group] = await Promise.all([
    extractSlugs(path.join(SRC, "data/products.js")),
    extractSlugs(path.join(SRC, "data/insights.js")),
    extractSlugs(path.join(SRC, "data/group.js")),
  ]);
  const dynamic = [
    ...products.map((s) => `/products/${s}`),
    ...insights.map((s) => `/insights/${s}`),
    ...group.map((s) => `/group/${s}`),
  ];
  const routes = [...new Set([...STATIC_ROUTES, ...dynamic])];

  console.log(`[prerender] ${routes.length} routes`);
  console.log(`[prerender] starting vite preview on :${PORT}`);
  const preview = await startPreview();

  let browser;
  try {
    const localChrome =
      process.env.CHROME_PATH ||
      [
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        "/usr/bin/google-chrome",
        "/usr/bin/chromium",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      ].find((p) => { try { return existsSync(p); } catch { return false; } });

    browser = await puppeteer.launch({
      headless: "new",
      executablePath: localChrome || undefined,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const CONCURRENCY = 4;
    let i = 0, done = 0;
    const t0 = Date.now();

    async function worker() {
      while (i < routes.length) {
        const my = i++;
        const route = routes[my];
        const target = diskPathFor(route);
        try {
          const html = await renderRoute(browser, route);
          await fs.mkdir(path.dirname(target), { recursive: true });
          await fs.writeFile(target, html, "utf8");
          done++;
          console.log(`[prerender] ${String(done).padStart(3, " ")}/${routes.length} ${route}`);
        } catch (e) {
          console.warn(`[prerender] FAIL ${route}: ${e.message}`);
        }
      }
    }

    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    console.log(`[prerender] done — ${done}/${routes.length} routes in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  } finally {
    if (browser) { try { await browser.close(); } catch {} }
    try { preview.kill("SIGKILL"); } catch {}
    if (process.platform !== "win32" && preview && preview.pid) {
      try { process.kill(-preview.pid, "SIGKILL"); } catch {}
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => { console.error("[prerender] failed:", e); process.exit(1); });
