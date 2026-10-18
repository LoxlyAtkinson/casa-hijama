const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const out = path.resolve(__dirname, '../.experience/casa-rebuild/evidence/v6-header-crop');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4 });
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
    const observations = [];
    for (const [state, fraction, zoom] of [['lower', .86, false], ['neck-zoom', .14, true], ['lower-zoom', .86, true]]) {
      await page.evaluate(fraction => {
        const section = document.querySelector('.bj-scroll');
        scrollTo(0, section.getBoundingClientRect().top + scrollY + (section.offsetHeight - innerHeight) * fraction);
      }, fraction);
      await page.locator('.bj--webgl canvas').waitFor({ timeout: 30000 });
      await page.waitForTimeout(750);
      await page.locator('.bj-zoom-controls button[data-zoom="reset"]').click({ force: true }).catch(() => {});
      if (zoom) await page.locator('.bj-zoom-controls button[data-zoom="in"]').click();
      await page.waitForTimeout(750);
      const button = page.locator('.nav-book');
      await button.screenshot({ path: path.join(out, `${state}-button-4x.png`), animations: 'disabled' });
      const metrics = await button.evaluate(el => {
        const outer = el.getBoundingClientRect();
        const range = document.createRange();
        range.selectNodeContents(el);
        const text = range.getBoundingClientRect();
        return { label: el.textContent.trim(), outer: { left: outer.left, right: outer.right }, text: { left: text.left, right: text.right }, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth };
      });
      if (metrics.text.left < metrics.outer.left - 1 || metrics.text.right > metrics.outer.right + 1 || metrics.scrollWidth > metrics.clientWidth + 1) {
        throw new Error(`${state}: ${JSON.stringify(metrics)}`);
      }
      observations.push({ state, viewport: { width: 1440, height: 900 }, deviceScaleFactor: 4, metrics, result: 'PASS' });
    }
    fs.writeFileSync(path.join(out, 'header-crop-log.json'), JSON.stringify(observations, null, 2));
    console.log('PASS high-resolution sticky booking button at lower, neck zoom and lower zoom');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
