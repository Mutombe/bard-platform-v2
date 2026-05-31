// Build-time sitemap + robots.txt generator.
//
// Reads PRODUCTS, INSIGHTS, LEADERSHIP, GROUP_ENTITIES from /src/data and
// emits dist/sitemap.xml + dist/robots.txt. Runs as a postbuild step.
//
// Carries over the regex-based slug parser pattern used on bitstudio.co.zw
// so we don't have to evaluate React/JSX from a Node build script.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SRC = path.join(ROOT, "src");

const SITE = "https://bardsantnerbank.com";
const TODAY = new Date().toISOString().slice(0, 10);

// ─── Static routes ──────────────────────────────────────────────────
const STATIC_ROUTES = [
  // Top of site
  { path: "/",                priority: "1.0", changefreq: "weekly"  },

  // Audience landings
  { path: "/personal",        priority: "0.9", changefreq: "weekly"  },
  { path: "/business",        priority: "0.9", changefreq: "weekly"  },
  { path: "/private-banking", priority: "0.9", changefreq: "weekly"  },
  { path: "/international",   priority: "0.9", changefreq: "weekly"  },
  { path: "/institutional",   priority: "0.9", changefreq: "weekly"  },

  // Service hubs
  { path: "/banking",         priority: "0.8", changefreq: "weekly"  },
  { path: "/wealth",          priority: "0.8", changefreq: "weekly"  },
  { path: "/markets",         priority: "0.8", changefreq: "weekly"  },
  { path: "/online-banking",  priority: "0.9", changefreq: "weekly"  },
  { path: "/login",           priority: "0.6", changefreq: "monthly" },

  // Institution
  { path: "/about",           priority: "0.8", changefreq: "monthly" },
  { path: "/group",           priority: "0.8", changefreq: "monthly" },
  { path: "/leadership",      priority: "0.7", changefreq: "monthly" },

  // Editorial
  { path: "/insights",        priority: "0.9", changefreq: "weekly"  },

  // Contact / locations
  { path: "/contact",         priority: "0.7", changefreq: "monthly" },
  { path: "/locations",       priority: "0.7", changefreq: "monthly" },

  // Trust + legal
  { path: "/security",        priority: "0.5", changefreq: "yearly"  },
  { path: "/legal",           priority: "0.4", changefreq: "yearly"  },
  { path: "/privacy",         priority: "0.4", changefreq: "yearly"  },
  { path: "/cookies",         priority: "0.3", changefreq: "yearly"  },
  { path: "/terms",           priority: "0.3", changefreq: "yearly"  },
  { path: "/regulatory",      priority: "0.5", changefreq: "yearly"  },
  { path: "/accessibility",   priority: "0.4", changefreq: "yearly"  },
  { path: "/complaints",      priority: "0.4", changefreq: "yearly"  },
];

async function extractSlugs(filePath) {
  const src = await fs.readFile(filePath, "utf8");
  const slugs = [];
  const re = /slug:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) slugs.push(m[1]);
  return slugs;
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlElement({ path: p, priority = "0.5", changefreq = "monthly" }) {
  return `  <url>
    <loc>${xmlEscape(SITE + p)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  await fs.mkdir(DIST, { recursive: true });

  const [productSlugs, insightSlugs, groupSlugs] = await Promise.all([
    extractSlugs(path.join(SRC, "data/products.js")),
    extractSlugs(path.join(SRC, "data/insights.js")),
    extractSlugs(path.join(SRC, "data/group.js")),
  ]);

  const dynamic = [
    ...productSlugs.map((s) => ({ path: `/products/${s}`,  priority: "0.7", changefreq: "monthly" })),
    ...insightSlugs.map((s) => ({ path: `/insights/${s}`,  priority: "0.7", changefreq: "monthly" })),
    ...groupSlugs.map((s)   => ({ path: `/group/${s}`,     priority: "0.7", changefreq: "monthly" })),
  ];

  const all = [...STATIC_ROUTES, ...dynamic];
  const seen = new Set();
  const unique = all.filter((r) => seen.has(r.path) ? false : (seen.add(r.path), true));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map(urlElement).join("\n")}
</urlset>
`;
  await fs.writeFile(path.join(DIST, "sitemap.xml"), xml, "utf8");

  const robots = `# Bard Santner Markets Inc robots.txt
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml

# Pre-empt aggressive social unfurlers
Crawl-delay: 0
`;
  await fs.writeFile(path.join(DIST, "robots.txt"), robots, "utf8");

  // Also drop into /public so vite dev and previewers see them.
  const PUB = path.join(ROOT, "public");
  await fs.mkdir(PUB, { recursive: true });
  await fs.writeFile(path.join(PUB, "sitemap.xml"), xml, "utf8");
  await fs.writeFile(path.join(PUB, "robots.txt"), robots, "utf8");

  console.log(
    `[sitemap] wrote ${unique.length} routes (${productSlugs.length} products, ${insightSlugs.length} insights, ${groupSlugs.length} group entities + ${STATIC_ROUTES.length} static)`
  );
}

main().catch((e) => { console.error("[sitemap] failed:", e); process.exit(1); });
