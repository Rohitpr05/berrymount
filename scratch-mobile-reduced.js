const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();

  // Mobile viewport, normal motion
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const mlogs = [];
  mobilePage.on("console", (m) => { if (m.type() === "error") mlogs.push(m.text()); });
  await mobilePage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: "/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/mobile-hero.png" });
  // scroll to where berry showcase / farm to table would be on mobile (stacked, so further down)
  await mobilePage.evaluate(() => window.scrollTo(0, 2200));
  await mobilePage.waitForTimeout(600);
  await mobilePage.screenshot({ path: "/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/mobile-showcase.png" });
  console.log("mobile console errors:", mlogs);

  // Reduced motion, desktop viewport
  const rmContext = await browser.newContext({ viewport: { width: 1440, height: 950 }, reducedMotion: "reduce" });
  const rmPage = await rmContext.newPage();
  const rlogs = [];
  rmPage.on("console", (m) => { if (m.type() === "error") rlogs.push(m.text()); });
  await rmPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await rmPage.waitForTimeout(1000);
  await rmPage.screenshot({ path: "/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/reduced-motion-hero.png" });
  await rmPage.evaluate(() => window.scrollTo(0, 7900));
  await rmPage.waitForTimeout(600);
  await rmPage.screenshot({ path: "/tmp/claude-1000/-home-rdev-dev-berrymount/7cfb2014-8170-4ff7-bee5-ea8f960c9069/scratchpad/reduced-motion-farmtotable.png" });
  console.log("reduced-motion console errors:", rlogs);

  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
