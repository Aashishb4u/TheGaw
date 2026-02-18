import { writeFileSync } from "fs";

const hostname = "https://thegawindustries.com";
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// Static routes
// const routes = [
//   { loc: "/", changefreq: "weekly", priority: 1.0 },
//   { loc: "/about", changefreq: "monthly", priority: 0.8 },
//   { loc: "/services", changefreq: "weekly", priority: 0.9 },
//   { loc: "/works", changefreq: "weekly", priority: 0.9 },
//   { loc: "/blogs", changefreq: "weekly", priority: 0.9 },
//   { loc: "/gallery", changefreq: "monthly", priority: 0.5 },
//   { loc: "/service-works", changefreq: "monthly", priority: 0.7 },
//   { loc: "/posts", changefreq: "daily", priority: 0.7 },
//   { loc: "/contact", changefreq: "monthly", priority: 0.6 },
//   { loc: "/n8n-workflows", changefreq: "weekly", priority: 0.7 },
// ];


const routes = [
  { loc: "/", changefreq: "weekly", priority: 1.0 },
  { loc: "/about-us", changefreq: "monthly", priority: 0.8 },
  { loc: "/certifications", changefreq: "monthly", priority: 0.7 },
  { loc: "/careers", changefreq: "monthly", priority: 0.7 },
  { loc: "/contact", changefreq: "monthly", priority: 0.6 },
  { loc: "/manufacturing", changefreq: "monthly", priority: 0.8 },
  { loc: "/fluid-transfer", changefreq: "monthly", priority: 0.8 },
  { loc: "/procurement-project-management", changefreq: "monthly", priority: 0.7 },
  { loc: "/lv-installation", changefreq: "monthly", priority: 0.7 },
  { loc: "/trainings", changefreq: "monthly", priority: 0.7 },
  { loc: "/controlled-bolting-hydraulic-equipments", changefreq: "monthly", priority: 0.7 },
  { loc: "/hydrotesting-chemical-injection-skids", changefreq: "monthly", priority: 0.7 },
  { loc: "/on-site-atex-machining", changefreq: "monthly", priority: 0.7 },
  { loc: "/top-loading-arms", changefreq: "monthly", priority: 0.7 },
  { loc: "/bottom-loading-arms", changefreq: "monthly", priority: 0.7 },
  { loc: "/marine-loading-arms", changefreq: "monthly", priority: 0.7 },
  { loc: "/floating-suction-unit", changefreq: "monthly", priority: 0.7 },
  { loc: "/positive-displacement-flow-meter", changefreq: "monthly", priority: 0.7 },
  { loc: "/gravity-unloading-flow-meter", changefreq: "monthly", priority: 0.7 },
  { loc: "/square-drive-torque-wrench", changefreq: "monthly", priority: 0.7 },
  { loc: "/low-profile-torque-wrench", changefreq: "monthly", priority: 0.7 },
  { loc: "/pneumatic-torque-wrench", changefreq: "monthly", priority: 0.7 },
  { loc: "/torque-pump", changefreq: "monthly", priority: 0.7 },
  { loc: "/spring-return-bolt-tensioner", changefreq: "monthly", priority: 0.7 },
  { loc: "/multi-stage-bolt-tensioner", changefreq: "monthly", priority: 0.7 },
  { loc: "/subsea-bolt-tensioner", changefreq: "monthly", priority: 0.7 },
  { loc: "/tensioning-pump", changefreq: "monthly", priority: 0.7 },
  { loc: "/nut-splitter", changefreq: "monthly", priority: 0.7 },
  { loc: "/flange-spreader", changefreq: "monthly", priority: 0.7 },
  { loc: "/hydraulic-pullers", changefreq: "monthly", priority: 0.7 },
  { loc: "/impact-sockets", changefreq: "monthly", priority: 0.7 },
  { loc: "/hydrotesting-unit", changefreq: "monthly", priority: 0.7 },
  { loc: "/chemical-injection-skids", changefreq: "monthly", priority: 0.7 },
  { loc: "/test-manifolds", changefreq: "monthly", priority: 0.7 },
  { loc: "/split-frame-cold-cutting-machine", changefreq: "monthly", priority: 0.7 },
  { loc: "/id-mounted-flange-facing-machine", changefreq: "monthly", priority: 0.7 },
  { loc: "/manuel-flange-facing-machine", changefreq: "monthly", priority: 0.7 },
  { loc: "/search", changefreq: "monthly", priority: 0.5 },
];

async function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;

  // ✅ Add static routes
  routes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${hostname}${route.loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n\n`;
  });

  xml += `</urlset>\n`;

  // ✅ Save inside Angular dist folder
  writeFileSync("./dist/gaw/browser/sitemap.xml", xml, "utf8");
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
