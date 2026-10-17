const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const out = path.resolve(__dirname, '../.experience/casa-rebuild/evidence/v6-action-bounds');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const observations = [];
    for (const [size, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      const page = await browser.newPage({ viewport });
      await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
      for (const [state, progress, zoom] of [['front', .14, false], ['neck-zoom', .14, true], ['lower-zoom', .86, true]]) {
        await page.evaluate(p => {
          const area = document.querySelector('.bj-scroll');
          const top = area.getBoundingClientRect().top + scrollY;
          scrollTo(0, top + (area.offsetHeight - innerHeight) * p);
        }, progress);
        await page.locator('.bj--webgl canvas').waitFor({ timeout: 30000 });
        await page.waitForTimeout(450);
        await page.locator('.bj-zoom-controls button[data-zoom="reset"]').click({ force: true }).catch(() => {});
        if (zoom) await page.locator('.bj-zoom-controls button[data-zoom="in"]').click();
        await page.waitForTimeout(450);
        const metrics = await page.evaluate(() => {
          const measure = selector => {
            const node = document.querySelector(selector);
            const box = node.getBoundingClientRect();
            const range = document.createRange();
            range.selectNodeContents(node);
            const content = range.getBoundingClientRect();
            return { text: node.textContent.trim(), box: { left: box.left, right: box.right }, content: { left: content.left, right: content.right }, scrollWidth: node.scrollWidth, clientWidth: node.clientWidth };
          };
          return { header: measure('.nav-book'), body: measure('.bj-checkin-trigger'), documentWidth: document.documentElement.scrollWidth };
        });
        if (metrics.documentWidth > viewport.width) throw new Error(`${size} ${state}: horizontal overflow`);
        for (const [name, value] of Object.entries({ header: metrics.header, body: metrics.body })) {
          if (value.content.left < value.box.left - 1 || value.content.right > value.box.right + 1 || value.scrollWidth > value.clientWidth + 1) throw new Error(`${size} ${state}: ${name} clipped ${JSON.stringify(value)}`);
        }
        await page.screenshot({ path: path.join(out, `${size}-${state}.png`), animations: 'disabled' });
        observations.push({ size, state, viewport, metrics, result: 'PASS' });
        console.log(`PASS ${size} ${state}: booking and body action text inside bounds`);
      }
      await page.close();
    }
    fs.writeFileSync(path.join(out, 'bounds-log.json'), JSON.stringify(observations, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
