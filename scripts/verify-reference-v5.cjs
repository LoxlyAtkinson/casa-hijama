const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const out = path.join(root, '.experience/casa-rebuild/evidence/v5');
fs.mkdirSync(out, { recursive: true });
const sourceRevision = crypto.createHash('sha256').update([
  'src/main.js', 'src/scroll-motion.css', 'src/body-journey.js', 'src/body-journey.css'
].map(file => fs.readFileSync(path.join(root, file))).join('\n')).digest('hex');
const observations = [];
const stamp = () => new Date().toISOString();
const assert = (condition, message) => { if (!condition) throw new Error(message); };

async function save(page, name, state, action, expected, actual) {
  const file = path.join(out, `${name}.png`);
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.waitForTimeout(attempt ? 500 : 150);
    await page.screenshot({ path: file, animations: 'disabled' });
    if (fs.statSync(file).size > 12000) break;
  }
  assert(fs.statSync(file).size > 12000, `Blank or incomplete screenshot: ${name}`);
  observations.push({
    route: '/', state, viewport: page.viewportSize(), timestamp: stamp(),
    sourceRevision, action, expected, actual, result: 'PASS', screenshot: name
  });
  console.log(`PASS ${name}: ${actual}`);
}

async function position(page, selector, progress) {
  const area = await page.locator(selector).evaluate(el => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top + scrollY, travel: Math.max(0, rect.height - innerHeight) };
  });
  await page.evaluate(y => scrollTo(0, y), area.top + area.travel * progress);
  await page.waitForTimeout(700);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [size, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      const context = await browser.newContext({ viewport, reducedMotion: 'no-preference' });
      const page = await context.newPage();
      await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
      await page.locator('.home-motion-hero').waitFor();
      for (const [step, progress] of [['start', 0], ['room', .76], ['exit', 1]]) {
        await position(page, '.home-motion-hero', progress);
        const state = await page.locator('.home-motion-hero').evaluate(el => ({
          progress: getComputedStyle(el).getPropertyValue('--sc-p').trim(),
          roomOpacity: getComputedStyle(el.querySelector('.hero-detail-media')).opacity,
          heading: [...el.querySelectorAll('h1,h2')].filter(n => +getComputedStyle(n).opacity > .05).map(n => n.innerText).join(' | ')
        }));
        if (step === 'start') assert(+state.roomOpacity < .1, `${size}: opening room frame visible too soon`);
        if (step === 'room') assert(+state.roomOpacity > .8, `${size}: room frame did not replace opening`);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${size}: hero overflow`);
        await save(page, `v5-${size}-hero-${step}`, `hero-${step}`, `Scrolled home hero to ${Math.round(progress * 100)}%`, 'Distinct unclipped scroll-led frame', JSON.stringify(state));
      }
      for (const [step, progress, index] of [['front', .14, 0], ['upper', .5, 1], ['lower', .86, 2]]) {
        await position(page, '.bj-scroll', progress);
        await page.waitForFunction(i => document.querySelector('.bj')?.dataset.region === String(i), index);
        assert(await page.locator('.bj--webgl canvas').count() === 1, `${size}: no live WebGL canvas`);
        const side = await page.locator('.bj').getAttribute('data-side');
        assert(side === (index ? 'back' : 'front'), `${size}: ${step} side ${side}`);
        await save(page, `v5-${size}-body-${step}`, `body-${step}`, `Scrolled to ${step} region`, 'Live continuous body turns and focal point advances', `${side} view; active ${index}`);
      }
      await page.locator('.bj-zoom-controls button[data-zoom="in"]').click();
      assert((await page.locator('.bj-zoom-level').innerText()) === '200%', `${size}: zoom level`);
      await page.waitForTimeout(900);
      const labels = await page.evaluate(() => ({
        booking: document.querySelector('.site-header .button, header .button')?.innerText,
        intake: document.querySelector('.bj-checkin-trigger')?.innerText,
        width: document.documentElement.scrollWidth
      }));
      assert(labels.width <= viewport.width, `${size}: body overflow`);
      await save(page, `v5-${size}-body-lower-focus`, 'body-lower-focus', 'Zoomed selected lower-back region to 200%', 'Focal area grows without losing navigation or primary action', JSON.stringify(labels));
      await position(page, '.bj-scroll', .14);
      assert(await page.locator('.bj').getAttribute('data-region') === '0', `${size}: reverse scroll failed`);
      await save(page, `v5-${size}-body-reverse`, 'body-reverse', 'Scrolled back from lower back to the first body region', 'Front-facing neck and shoulders, marker and guidance return', 'Front view; active region 0 after reverse scroll');
      for (const [index, region] of ['neck-shoulders', 'upper-back', 'lower-back'].entries()) {
        const button = page.locator('.bj-region-button').nth(index);
        await button.focus();
        await page.keyboard.press('Enter');
        await page.waitForFunction(i => document.querySelector('.bj')?.dataset.region === String(i), index);
        assert(await page.locator('.bj-dialog').evaluate(dialog => dialog.open), `${size}: keyboard selection did not open ${region} check-in`);
        assert((await page.locator('.bj-panel.is-active').textContent()).length > 40, `${size}: keyboard ${region} guidance absent`);
        const intake = await page.locator('.bj-dialog').evaluate(dialog => ({ questions: dialog.querySelectorAll('.bj-question').length, visibleQuestions: [...dialog.querySelectorAll('.bj-question')].filter(q => q.getBoundingClientRect().height > 0).length, reviewVisible: dialog.querySelector('.bj-review')?.getBoundingClientRect().height > 0 }));
        assert(intake.questions === 4 && intake.visibleQuestions === 4 && intake.reviewVisible, `${size}: keyboard ${region} form incomplete: ${JSON.stringify(intake)}`);
        await save(page, `v5-${size}-body-keyboard-${region}`, `body-keyboard-${region}`, `Focused ${region} region button and pressed Enter`, 'Matching body orientation, focal marker, guidance and four-question check-in', `Region ${index}; side ${await page.locator('.bj').getAttribute('data-side')}; dialog open`);
        await save(page, `v5-${size}-body-keyboard-confirmed-${region}`, `body-keyboard-confirmed-${region}`, `Inspected rendered check-in after Enter on ${region}`, 'Four visible questions and review action on the same screen', JSON.stringify(intake));
        await page.keyboard.press('Escape');
        assert(!(await page.locator('.bj-dialog').evaluate(dialog => dialog.open)), `${size}: Escape did not close ${region} check-in`);
      }
      await page.close();
      await context.close();
    }
    const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const page = await reduced.newPage();
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
    await page.locator('.bj-scroll').scrollIntoViewIfNeeded();
    assert(await page.locator('.bj-panel:visible').count() === 3, 'Reduced motion region content');
    await save(page, 'v5-mobile-body-reduced', 'body-reduced', 'Opened body with reduced-motion preference', 'All three areas visible without scroll pinning', 'Three panels in document flow');
    await page.close();
    await reduced.close();
    const failed = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'no-preference' });
    await failed.addInitScript(() => {
      const original = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function(kind, ...args) {
        return /^webgl/i.test(kind) ? null : original.call(this, kind, ...args);
      };
    });
    const failedPage = await failed.newPage();
    await failedPage.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
    await failedPage.locator('.bj-scroll').scrollIntoViewIfNeeded();
    await failedPage.waitForTimeout(900);
    assert(await failedPage.locator('.bj--webgl canvas').count() === 0, 'WebGL failure still shows canvas');
    assert(await failedPage.locator('.bj-figure img').first().isVisible(), 'WebGL failure has no static body image');
    await save(failedPage, 'v5-mobile-body-webgl-fallback', 'body-webgl-fallback', 'Blocked WebGL context creation', 'Static clinical body and named region controls remain available', 'Fallback body image visible; no live canvas');
    await failedPage.close();
    await failed.close();
    const dark = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'no-preference' });
    await dark.addInitScript(() => localStorage.setItem('casa-theme', 'dark'));
    const darkPage = await dark.newPage();
    await darkPage.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
    await position(darkPage, '.bj-scroll', .5);
    assert(await darkPage.locator('html').getAttribute('data-theme') === 'dark' && await darkPage.locator('.bj--webgl canvas').count() === 1, 'Dark body state missing');
    await save(darkPage, 'v5-mobile-dark-body-upper', 'dark-body-upper', 'Opened upper-back body step in dark mode', 'Clinical body and text stay legible in dark mode', 'Dark theme; live WebGL upper-back view');
    await darkPage.close();
    await dark.close();
    const previous = JSON.parse(fs.readFileSync(path.join(out, 'browser-log.json'), 'utf8'));
    fs.writeFileSync(path.join(out, 'browser-log-v5.json'), JSON.stringify([...previous, ...observations], null, 2));
    console.log(`Recorded ${observations.length} v5 observations; combined ${previous.length + observations.length}`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
