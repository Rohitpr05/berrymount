const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const positions = await page.evaluate(() => {
    const sections = document.querySelectorAll("main > section, main > div");
    return [...sections].map((el, i) => ({
      i,
      tag: el.tagName,
      top: Math.round(el.getBoundingClientRect().top + window.scrollY),
      height: Math.round(el.getBoundingClientRect().height),
      classes: el.className.slice(0, 60),
    }));
  });
  console.log(JSON.stringify(positions, null, 2));
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
