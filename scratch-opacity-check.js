const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  for (const y of [0, 200, 400, 500, 700, 900, 1200, 1600, 2000]) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
    await page.waitForTimeout(300);
    const info = await page.evaluate(() => {
      const heroEls = document.querySelectorAll("[data-hero-content]");
      const wrapEls = document.querySelectorAll("[data-progress]");
      return {
        heroCount: heroEls.length,
        wrapCount: wrapEls.length,
        opacities: [...heroEls].map((el) => getComputedStyle(el).opacity),
        progresses: [...wrapEls].map((el) => el.getAttribute("data-progress")),
      };
    });
    console.log(y, info);
  }
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
