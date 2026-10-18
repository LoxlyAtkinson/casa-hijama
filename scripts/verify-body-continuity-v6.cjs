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
const base = process.env.CASA_TEST_URL || 'http://127.0.0.1:4173/';

async function atBody(page) {
  await page.evaluate(() => {
    const body = document.querySelector('.bj-scroll');
    scrollTo(0, body.getBoundingClientRect().top + scrollY + (body.offsetHeight - innerHeight) * .14);
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const log = [];
  try {
    const transition = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await transition.route('**/assets/body-hubmap-skin.glb', async route => {
      await new Promise(resolve => setTimeout(resolve, 1300));
      await route.continue();
    });
    await transition.goto(base, { waitUntil: 'domcontentloaded' });
    await transition.locator('.bj').waitFor();
    await transition.evaluate(() => {
      window.__bodyHandoffFrames = [];
      const section = document.querySelector('.bj');
      const observer = new MutationObserver(() => {
        if (!section.classList.contains('bj--handoff')) return;
        observer.disconnect();
        const start = performance.now();
        const frame = () => {
          const canvas = document.querySelector('.bj-webgl-host canvas');
          window.__bodyHandoffFrames.push({
            ms: performance.now() - start,
            handoff: section.classList.contains('bj--handoff'),
            webgl: section.classList.contains('bj--webgl'),
            still: Number(getComputedStyle(document.querySelector('.bj-figure')).opacity),
            live: canvas ? Number(getComputedStyle(canvas).opacity) : 0
          });
          if (performance.now() - start < 1000) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      });
      observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    });
    await atBody(transition);
    await transition.locator('.bj-figure img').first().waitFor({ state: 'visible' });
    await transition.screenshot({ path: path.join(out, 'desktop-loading-still.png') });
    await transition.locator('.bj--webgl canvas').waitFor({ timeout: 30000 });
    await transition.waitForFunction(() => Number(getComputedStyle(document.querySelector('.bj-webgl-host canvas')).opacity) > .95, null, { timeout: 5000 });
    const frames = await transition.evaluate(() => window.__bodyHandoffFrames);
    const overlapping = frames.filter(frame => frame.still > .05 && frame.live > .05);
    if (!frames.some(frame => frame.handoff && frame.still > .5 && frame.live === 0) ||
        overlapping.length) {
      throw new Error(`Incomplete or doubled body handoff: ${JSON.stringify({ frames: frames.length, overlapping: overlapping.length, first: frames[0], last: frames.at(-1) })}`);
    }
    fs.writeFileSync(path.join(out, 'desktop-handoff-frames.json'), JSON.stringify(frames, null, 2));
    const finalOpacity = await transition.evaluate(() => ({ still: Number(getComputedStyle(document.querySelector('.bj-figure')).opacity), live: Number(getComputedStyle(document.querySelector('.bj-webgl-host canvas')).opacity) }));
    if (finalOpacity.still > .05 || finalOpacity.live < .95) throw new Error(`Live finish missing: ${JSON.stringify(finalOpacity)}`);
    const done = { stillOpacity: finalOpacity.still, canvasOpacity: finalOpacity.live, overlapFrames: overlapping.length, frames: frames.length };
    log.push({ state: 'desktop-transition-live', viewport: { width: 1440, height: 900 }, sourceRevision, timestamp: new Date().toISOString(), metrics: done });
    await transition.screenshot({ path: path.join(out, 'desktop-transition-live.png') });
    await transition.close();

    for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      const reduced = await browser.newContext({ viewport, reducedMotion: 'reduce' });
      const reducedPage = await reduced.newPage();
      await reducedPage.goto(base, { waitUntil: 'domcontentloaded' });
      await atBody(reducedPage);
      await reducedPage.waitForTimeout(350);
      const reducedState = { cards: await reducedPage.locator('.bj-panel:visible').count(), canvas: await reducedPage.locator('.bj--webgl canvas').count() };
      if (reducedState.cards !== 3 || reducedState.canvas !== 0) throw new Error(`${name} reduced ${JSON.stringify(reducedState)}`);
      await reducedPage.screenshot({ path: path.join(out, `${name}-reduced.png`) });
      log.push({ state: `${name}-reduced`, viewport, sourceRevision, timestamp: new Date().toISOString(), metrics: reducedState });
      await reduced.close();

      const fallback = await browser.newContext({ viewport });
      await fallback.addInitScript(() => {
        const original = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(kind, ...args) { return /^webgl/i.test(kind) ? null : original.call(this, kind, ...args); };
      });
      const fallbackPage = await fallback.newPage();
      await fallbackPage.goto(base, { waitUntil: 'domcontentloaded' });
      await atBody(fallbackPage);
      await fallbackPage.waitForFunction(() => [...document.querySelectorAll('.bj-figure img')].every(img => img.complete && img.naturalWidth > 0));
      await fallbackPage.waitForTimeout(400);
      const front = { canvas: await fallbackPage.locator('.bj--webgl canvas').count(), side: await fallbackPage.locator('.bj').getAttribute('data-side') };
      if (front.canvas !== 0 || front.side !== 'front') throw new Error(`${name} fallback ${JSON.stringify(front)}`);
      await fallbackPage.screenshot({ path: path.join(out, `${name}-fallback-front.png`) });
      log.push({ state: `${name}-fallback-front`, viewport, sourceRevision, timestamp: new Date().toISOString(), metrics: front });
      await fallbackPage.locator('.bj-region-button[data-region="1"]').click();
      await fallbackPage.locator('.bj-dialog-close').click();
      const back = { canvas: await fallbackPage.locator('.bj--webgl canvas').count(), side: await fallbackPage.locator('.bj').getAttribute('data-side') };
      if (back.canvas !== 0 || back.side !== 'back') throw new Error(`${name} fallback back ${JSON.stringify(back)}`);
      await fallbackPage.screenshot({ path: path.join(out, `${name}-fallback-back.png`) });
      log.push({ state: `${name}-fallback-back`, viewport, sourceRevision, timestamp: new Date().toISOString(), metrics: back });
      await fallback.close();
    }

    const dark = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
    await dark.goto(base, { waitUntil: 'domcontentloaded' });
    await atBody(dark);
    await dark.locator('.bj--webgl canvas').waitFor({ timeout: 30000 });
    await dark.locator('.bj-region-button[data-region="2"]').click();
    await dark.locator('.bj-dialog-close').click();
    await dark.locator('.theme-toggle').click();
    await dark.waitForTimeout(500);
    const insets = await dark.evaluate(() => {
      const selectors = ['.bj-current', '.bj-region-button[data-region="0"]', '.bj-panel[data-region="2"] h3', '.bj-panel[data-region="2"] p'];
      return { width: innerWidth, documentWidth: document.documentElement.scrollWidth,
        elements: selectors.map(selector => { const el = document.querySelector(selector); const rect = el.getBoundingClientRect(); return { selector, left: rect.left, right: rect.right, text: el.textContent.trim() }; }) };
    });
    if (insets.documentWidth > 390 || insets.elements.some(el => el.left < 15 || el.right > 390)) throw new Error(`Mobile dark inset ${JSON.stringify(insets)}`);
    await dark.screenshot({ path: path.join(out, 'mobile-dark-insets.png') });
    log.push({ state: 'mobile-dark-insets', viewport: { width: 390, height: 844 }, sourceRevision, timestamp: new Date().toISOString(), metrics: insets });
    await dark.close();

    fs.writeFileSync(path.join(out, 'continuity-log.json'), JSON.stringify(log, null, 2));
    console.log(`PASS ${log.length} continuity, fallback, reduced-motion and mobile-dark observations`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
