const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  page.on("console", (m) => console.log("[console]", m.text()));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const info = await page.evaluate(() => {
    // @ts-ignore
    const triggers = window.__gsapScrollTriggers || null;
    const ST = (window).ScrollTrigger;
    if (!ST) return { hasST: false };
    const all = ST.getAll();
    return {
      hasST: true,
      count: all.length,
      triggers: all.map((t) => ({
        start: t.start,
        end: t.end,
        pin: !!t.pin,
        triggerClass: t.trigger ? t.trigger.className.slice(0, 50) : null,
      })),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
