const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const out = path.join(root, '.experience/casa-rebuild/evidence/v6-state-continuity');
fs.mkdirSync(out, { recursive: true });
const sourceRevision = crypto.createHash('sha256').update(
  ['src/body-journey.js', 'src/body-journey.css'].map(file => fs.readFileSync(path.join(root, file))).join('\n')
).digest('hex');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const log = [];
  try {
    for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
      await page.addInitScript(() => {
        const nativeSetTimeout = window.setTimeout.bind(window);
        window.setTimeout = (callback, delay, ...args) => nativeSetTimeout(callback, delay === 620 ? 8000 : delay, ...args);
        const watch = () => {
          const section = document.querySelector('.bj');
          if (!section) return requestAnimationFrame(watch);
          new MutationObserver(() => {
            if (!section.classList.contains('bj--handoff')) return;
            const host = section.querySelector('.bj-webgl-host');
            const animation = host.getAnimations().find(item => item.animationName === 'bj-live-reveal');
            if (animation) { animation.pause(); animation.currentTime = 280; window.__midHandoffReady = true; }
          }).observe(section, { attributes: true, attributeFilter: ['class'] });
        };
        requestAnimationFrame(watch);
      });
      await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => {
        const body = document.querySelector('.bj-scroll');
        scrollTo(0, body.getBoundingClientRect().top + scrollY + (body.offsetHeight - innerHeight) * .14);
      });
      await page.waitForFunction(() => window.__midHandoffReady === true, null, { timeout: 60000 });
      const state = await page.evaluate(() => {
        const section = document.querySelector('.bj');
        const host = section.querySelector('.bj-webgl-host');
        return { clip: getComputedStyle(host).clipPath,
          stillOpacity: Number(getComputedStyle(section.querySelector('.bj-figure')).opacity),
          liveOpacity: Number(getComputedStyle(host.querySelector('canvas')).opacity),
          handoff: section.classList.contains('bj--handoff') };
      });
      if (!state.handoff || state.stillOpacity !== 1 || state.liveOpacity !== 1 || !state.clip.startsWith('inset(')) throw new Error(JSON.stringify(state));
      const name = viewport.width === 1440 ? 'desktop' : 'mobile';
      await page.screenshot({ path: path.join(out, `${name}-handoff-mid-v30.png`) });
      log.push({ route: '/', state: `${name}-handoff-mid-v30`, viewport, timestamp: new Date().toISOString(), sourceRevision, action: 'Pause scan reveal at 50% with the app handoff timer extended for capture', expected: 'Both still and live drawn on opposite sides of the moving boundary', actual: state, result: 'PASS', screenshot: `${name}-handoff-mid-v30.png` });
      await page.close();
    }
    fs.writeFileSync(path.join(out, 'handoff-mid-v30-log.json'), JSON.stringify(log, null, 2));
    console.log(`PASS ${log.length} current-source handoff mid-state captures`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
