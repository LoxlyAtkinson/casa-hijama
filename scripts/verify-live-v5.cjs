const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const base = 'https://loxlyatkinson.github.io/casa-hijama/';
const out = path.resolve(__dirname, '../.experience/casa-rebuild/evidence/v5');
const checks = [];
const routes = [
  ['home', ''], ['treatments', 'cupping-therapy/'],
  ['products', 'products/'], ['information', 'more-information/']
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [size, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      const context = await browser.newContext({ viewport, reducedMotion: 'no-preference' });
      for (const [name, route] of routes) {
        const page = await context.newPage();
        const response = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.locator('main').waitFor();
        if (response.status() !== 200) throw new Error(`${size} ${name}: HTTP ${response.status()}`);
        if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error(`${size} ${name}: overflow`);
        if (name === 'products' && await page.locator('.product-card').count() !== 30) throw new Error(`${size}: catalog count`);
        if (name === 'home') {
          await page.waitForFunction(() => { const img = document.querySelector('.home-hero-stage .hero-media img'); return img && img.complete && img.naturalWidth > 0; }, { timeout: 20000 });
          const image = await page.locator('.home-hero-stage .hero-media img').evaluate(img => ({ src: img.currentSrc, loaded: img.complete && img.naturalWidth > 0 }));
          const expected = size === 'mobile' ? 'hero-cup-macro-mobile.png' : 'hero-cup-macro-desktop.png';
          if (!image.loaded || !image.src.includes(expected)) throw new Error(`${size}: opening image ${JSON.stringify(image)}`);
          await page.screenshot({ path: path.join(out, `live-${size}-hero-fixed.png`), animations: 'disabled' });
          await page.locator('.bj-scroll').scrollIntoViewIfNeeded();
          await page.locator('.bj--webgl canvas').waitFor({ timeout: 20000 });
          await page.locator('.bj-region-button').nth(2).click();
          if (await page.locator('.bj').getAttribute('data-region') !== '2') throw new Error(`${size}: deployed body region`);
          await page.locator('.bj-dialog-close').click();
        }
        const screenshot = `live-${size}-${name}.png`;
        await page.screenshot({ path: path.join(out, screenshot), animations: 'disabled' });
        checks.push({ route: '/' + route, state: `live-${size}-${name}`, viewport, timestamp: new Date().toISOString(), action: `Opened deployed ${name} route at ${size} viewport`, expected: 'HTTP 200, page content and current revision loaded without overflow', actual: `HTTP ${response.status()}; path ${new URL(page.url()).pathname}; ${name === 'home' ? 'macro asset and WebGL body loaded' : name === 'products' ? '30 products' : 'main visible'}`, result: 'PASS', screenshot: `live-${size}-${name}` });
        console.log(`PASS ${size} ${name}: ${response.status()} ${page.url()}`);
        await page.close();
      }
      await context.close();
    }
    fs.writeFileSync(path.join(out, 'live-browser-log.json'), JSON.stringify(checks, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
