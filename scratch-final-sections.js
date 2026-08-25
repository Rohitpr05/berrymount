const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const positions = { wholesale: 12775, testimonials: 13526, instagram: 14361, finalcta: 14921 };
  for (const [name, y] of Object.entries(positions)) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/final-${name}.png` });
  }
  await browser.close();
})();
