const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  // Hero wrapper is 170vh ~ 1615px; showcase pin starts right after.
  const positions = [1650, 2600, 3600, 4600, 5600];
  for (const y of positions) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/showcase-${y}.png` });
  }
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
