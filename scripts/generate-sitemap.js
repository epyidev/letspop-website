import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

const hostname = "https://lets-pop.fr";

// Static routes for the application
const staticPaths = [
  "/",
  "/terms-of-use"
];

const urls = staticPaths
  .map((route) => `  <url><loc>${hostname}${route}</loc></url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

const outPath = resolve("public", "sitemap.xml");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml);

console.log(`✅ Sitemap generated: ${outPath}`);
