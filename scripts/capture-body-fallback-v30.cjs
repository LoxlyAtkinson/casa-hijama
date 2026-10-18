const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [size, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      const page = await browser.newPage({ viewport, deviceScaleFactor: 2 });
      await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => {
        const body = document.querySelector('.bj-scroll');
        scrollTo(0, body.getBoundingClientRect().top + scrollY + (body.offsetHeight - innerHeight) * .14);
      });
      await page.locator('.bj--webgl').waitFor({ timeout: 60000 });
      await page.waitForTimeout(200);
      const capture = async side => {
        const data = await page.evaluate(() => document.querySelector('.bj-webgl-host canvas').toDataURL('image/png'));
        fs.writeFileSync(path.join(__dirname, `../public/assets/body-map-${size}-${side}.png`), Buffer.from(data.split(',')[1], 'base64'));
      };
      await capture('front');
      await page.locator('.bj-region-button[data-region="1"]').click();
      await page.locator('.bj-dialog-close').click();
      await page.waitForTimeout(350);
      await capture('back');
      await page.close();
    }
    console.log('Captured transparent desktop/mobile front/back from live Three.js canvas');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
