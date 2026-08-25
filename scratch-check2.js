const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  for (const y of [2500, 3500, 4500, 5500, 6000, 6500, 7000, 7680, 9000]) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(350);
    await page.screenshot({ path: `/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/chk-${y}.png` });
  }
  await browser.close();
})();
