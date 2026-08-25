const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  page.on("console", (m) => { if (m.type() === "error") console.log("ERR:", m.text()); });
  page.on("pageerror", (e) => console.log("PAGEERROR:", e.message));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const targetY = Number(process.argv[2] || 8200);
  await page.evaluate((y) => window.scrollTo(0, y), targetY);
  await page.waitForTimeout(500);

  const info = await page.evaluate(() => {
    const sections = document.querySelectorAll("section");
    const f2t = [...sections].find((s) => s.className.includes("h-screen"));
    if (!f2t) return { found: false };
    const rect = f2t.getBoundingClientRect();
    const layers = f2t.querySelectorAll(":scope > div");
    return {
      found: true,
      sectionRect: { top: rect.top, height: rect.height },
      sectionPosition: getComputedStyle(f2t).position,
      sectionZ: getComputedStyle(f2t).zIndex,
      layerCount: layers.length,
      layerOpacities: [...layers].map((l) => getComputedStyle(l).opacity),
      sectionOuterHTML: f2t.outerHTML.slice(0, 300),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
