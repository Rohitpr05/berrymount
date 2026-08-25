const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const before = await page.evaluate(() => {
    const ST = window.ScrollTrigger;
    return ST.getAll().map((t) => ({ start: t.start, end: t.end }));
  });
  console.log("before manual refresh:", before);

  await page.evaluate(() => window.ScrollTrigger.refresh());
  await page.waitForTimeout(300);

  const after = await page.evaluate(() => {
    const ST = window.ScrollTrigger;
    return ST.getAll().map((t) => ({ start: t.start, end: t.end }));
  });
  console.log("after manual refresh:", after);

  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
