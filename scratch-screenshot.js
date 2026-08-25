const { chromium } = require("playwright");

async function main() {
  const [, , url, outPath, width = "1440", height = "1000", fullPage = "true"] = process.argv;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: Number(width), height: Number(height) } });
  const logs = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") logs.push(msg.text());
  });
  page.on("pageerror", (err) => logs.push("PAGEERROR: " + err.message));
  page.on("requestfailed", (req) => logs.push("REQUESTFAILED: " + req.url() + " " + (req.failure()?.errorText || "")));
  page.on("response", (res) => {
    if (res.status() >= 400) logs.push(`HTTP ${res.status()}: ${res.url()}`);
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = Number(height);
  for (let y = 0; y < scrollHeight; y += step) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  await page.screenshot({ path: outPath, fullPage: fullPage === "true" });
  await browser.close();
  console.log(logs.length ? "ISSUES:\n" + logs.join("\n") : "No console errors.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
