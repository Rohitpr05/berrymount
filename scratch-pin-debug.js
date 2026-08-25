const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const spacer = document.querySelector(".pin-spacer");
    const track = document.querySelectorAll("div.flex.h-\\[calc\\(100vh-13rem\\)\\]")[0];
    return {
      bodyScrollHeight: document.body.scrollHeight,
      spacerHeight: spacer ? spacer.getBoundingClientRect().height : null,
      spacerCount: document.querySelectorAll(".pin-spacer").length,
      trackScrollWidth: track ? track.scrollWidth : null,
      innerWidth: window.innerWidth,
    };
  });
  console.log(info);
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
