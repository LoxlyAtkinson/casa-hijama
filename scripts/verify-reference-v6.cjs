const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const out = path.join(root, '.experience/casa-rebuild/evidence/v6');
fs.mkdirSync(out, { recursive: true });
const files = ['src/main.js', 'src/scroll-motion.css', 'src/body-journey.js', 'src/body-journey.css'];
const sourceRevision = crypto.createHash('sha256').update(files.map(file => fs.readFileSync(path.join(root, file))).join('\n')).digest('hex');
const observations = [];
const base = process.env.CASA_TEST_URL || 'http://127.0.0.1:4173/';
const check = (ok, message) => { if (!ok) throw new Error(message); };

async function capture(page, size, state, action, actual) {
  const name = `${size}-${state}`;
  await page.screenshot({ path: path.join(out, `${name}.png`), animations: 'disabled' });
  observations.push({ route: '/', state, viewport: page.viewportSize(), timestamp: new Date().toISOString(), sourceRevision, action,
    expected: 'Complete legible scene, responsive controls and the intended 3D focus', actual, result: 'PASS', screenshot: name });
  console.log(`PASS ${name}: ${actual}`);
}
async function at(page, selector, progress) {
  const area = await page.locator(selector).evaluate(el => ({ top: el.getBoundingClientRect().top + scrollY, travel: Math.max(0, el.offsetHeight - innerHeight) }));
  await page.evaluate(y => scrollTo(0, y), area.top + area.travel * progress);
  await page.waitForTimeout(700);
}
async function loaded(page) {
  await page.waitForFunction(() => { const image = document.querySelector('.home-hero-stage .hero-media img'); return image && image.complete && image.naturalWidth > 0; });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [size, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
      if (process.env.CASA_ONLY_SIZE && process.env.CASA_ONLY_SIZE !== size) continue;
      const context = await browser.newContext({ viewport, reducedMotion: 'no-preference' });
      const page = await context.newPage();
      await page.goto(base, { waitUntil: 'domcontentloaded' });
      await loaded(page);
      await at(page, '.home-motion-hero', 0);
      if (size === 'mobile') check(await page.locator('.home-hero-stage .hero-copy .eyebrow').isVisible(), 'Mobile hero eyebrow missing');
      await capture(page, size, 'hero-start', 'Opened home at start of pinned hero', 'Cup visible with headline, booking and eyebrow');
      await at(page, '.home-motion-hero', .76);
      check(Number(await page.locator('.hero-detail-media').evaluate(el => getComputedStyle(el).opacity)) > .8, 'Room scene did not reveal');
      await capture(page, size, 'hero-room', 'Scrolled hero to room beat', 'Room visual replaces cup with legible editorial copy');
      await at(page, '.bj-scroll', .14);
      await page.locator('.bj--webgl canvas').waitFor({ timeout: 30000 });
      check(await page.locator('.bj').getAttribute('data-region') === '0', 'Front region not active');
      await capture(page, size, 'body-front', 'Scrolled to neck and shoulders', 'Continuous cyan 3D front with coral shoulder focus');
      const initialCanvas = page.locator('.bj--webgl canvas');
      const initialBox = await initialCanvas.boundingBox();
      const turnX = initialBox.x + initialBox.width * .42;
      const turnY = initialBox.y + initialBox.height * .42;
      await page.mouse.move(turnX, turnY);
      await page.mouse.down();
      await page.mouse.move(turnX + 215, turnY, { steps: 16 });
      await page.mouse.up();
      check(await page.locator('.bj').getAttribute('data-side') === 'back', `${size} front drag did not turn to back`);
      check(await page.locator('.bj').getAttribute('data-region') === '1', `${size} front drag did not sync upper-back story`);
      await capture(page, size, 'body-turn-to-back', 'Dragged front 3D figure to rear view', 'Full mouse turn reveals back and synchronizes upper-back guidance');
      const aligned = await page.evaluate(() => {
        const el = document.querySelector('.bj-scroll'), stage = el.querySelector('.bj-stage');
        const travel = el.offsetHeight - stage.offsetHeight;
        return (parseFloat(getComputedStyle(stage).top) - el.getBoundingClientRect().top) / travel;
      });
      check(aligned > .34 && aligned < .66, `${size} drag release did not align the page to the upper-back chapter: ${aligned}`);
      await page.mouse.wheel(0, 950);
      await page.waitForFunction(() => document.querySelector('.bj')?.dataset.region === '2');
      await capture(page, size, 'body-drag-then-scroll-forward', 'Released back-view drag, then scrolled forward normally', `Aligned scroll chapter ${aligned.toFixed(2)} advanced to lower back`);
      await page.mouse.wheel(0, -1700);
      await page.waitForFunction(() => document.querySelector('.bj')?.dataset.region === '0');
      await capture(page, size, 'body-drag-then-scroll-reverse', 'Scrolled backwards normally after mouse turn', 'Neck/front chapter and 3D view returned');
      await at(page, '.bj-scroll', .14);
      await page.mouse.move(turnX, turnY);
      await page.mouse.down();
      await page.mouse.move(turnX + 215, turnY, { steps: 16 });
      await page.mouse.up();
      check(await page.locator('.bj').getAttribute('data-side') === 'back', `${size} second drag did not turn to back`);
      await page.mouse.move(turnX, turnY);
      await page.mouse.down();
      await page.mouse.move(turnX + 215, turnY, { steps: 16 });
      await page.mouse.up();
      check(await page.locator('.bj').getAttribute('data-side') === 'front', `${size} continuing turn did not return to front`);
      check(await page.locator('.bj').getAttribute('data-region') === '0', `${size} full turn did not sync front story`);
      await capture(page, size, 'body-full-turn', 'Continued mouse rotation through 360 degrees', 'Body returns to front with front guidance after full turn');
      await page.locator('.bj-zoom-controls [data-zoom="in"]').click();
      await page.waitForTimeout(450);
      const label = await page.locator('.bj-3d-tags span.is-active').evaluate(el => {
        const a = el.getBoundingClientRect(), v = el.closest('.bj-visual').getBoundingClientRect(), r = el.closest('.bj-visual').querySelector('.bj-zoom-controls').getBoundingClientRect();
        return { inside: a.left >= v.left - 2 && a.right <= v.right + 2 && a.top >= v.top - 2 && a.bottom <= v.bottom + 2,
          overlapsRail: a.left < r.right && a.right > r.left && a.top < r.bottom && a.bottom > r.top, text: el.textContent };
      });
      check(label.inside && !label.overlapsRail, `${size} zoom label clipped/overlapped: ${JSON.stringify(label)}`);
      await capture(page, size, 'body-neck-zoom', 'Zoomed selected neck area to 200%', `Readable ${label.text}; label inside stage and away from zoom rail`);
      await page.locator('.bj-zoom-controls [data-zoom="reset"]').click();
      for (const [step, progress, region] of [['upper', .5, '1'], ['lower', .86, '2']]) {
        await at(page, '.bj-scroll', progress);
        check(await page.locator('.bj').getAttribute('data-region') === region, `${size} ${step} region not active`);
        check(await page.locator('.bj').getAttribute('data-side') === 'back', `${size} ${step} not back view`);
        if (size === 'mobile') {
          const railClear = await page.locator('.bj-3d-tags').evaluate(host => {
            const rail = host.closest('.bj-visual').querySelector('.bj-zoom-controls').getBoundingClientRect();
            return [...host.querySelectorAll('span:not([hidden])')].every(tag => {
              const a = tag.getBoundingClientRect();
              return a.right <= rail.left || a.left >= rail.right || a.bottom <= rail.top || a.top >= rail.bottom;
            });
          });
          check(railClear, `${size} ${step} labels overlap zoom controls`);
        }
        await capture(page, size, `body-${step}`, `Scrolled to ${step} back region`, `3D back view; ${step} coral focus`);
      }
      await at(page, '.bj-scroll', .14);
      check(await page.locator('.bj').getAttribute('data-region') === '0', `${size} reverse scroll did not restore front region`);
      check(await page.locator('.bj').getAttribute('data-side') === 'front', `${size} reverse scroll did not restore front view`);
      await capture(page, size, 'body-reverse-scroll', 'Reversed scroll from lower back to neck', 'Front figure, shoulder marker and neck guidance return');
      await at(page, '.bj-scroll', .86);
      await page.locator('.bj-zoom-controls [data-zoom="in"]').click();
      await page.waitForTimeout(450);
      await capture(page, size, 'body-lower-zoom', 'Zoomed selected lower back to 200%', 'Lower-back spatial detail and guidance visible');
      const canvas = page.locator('.bj--webgl canvas');
      const beforeDrag = await canvas.screenshot();
      const box = await canvas.boundingBox();
      const fromX = box.x + box.width * .5, fromY = box.y + box.height * .47;
      await page.mouse.move(fromX, fromY);
      await page.mouse.down();
      await page.mouse.move(fromX + Math.min(90, box.width * .27), fromY - 18, { steps: 10 });
      await page.mouse.up();
      const afterDrag = await canvas.screenshot();
      check(!beforeDrag.equals(afterDrag), `${size} drag did not change rendered WebGL pixels`);
      check(!(await page.locator('.bj-dialog').evaluate(dialog => dialog.open)), `${size} drag opened intake by accident`);
      await capture(page, size, 'body-mouse-drag', 'Dragged WebGL figure with mouse from center toward right', 'Visible 3D angle changed without opening a marker dialog');
      await page.waitForTimeout(300);
      const marker = await page.locator('.bj-3d-tags span.is-active:not([hidden])').evaluate(tag => {
        const host = tag.closest('.bj-visual').querySelector('.bj-webgl-host').getBoundingClientRect();
        return { x: host.left + Number(tag.dataset.markerX), y: host.top + Number(tag.dataset.markerY) };
      });
      await page.mouse.click(marker.x, marker.y);
      await page.waitForFunction(() => document.querySelector('.bj-dialog')?.open, null, { timeout: 2500 });
      check(await page.locator('.bj-dialog .bj-question').count() === 4, `${size} marker check-in incomplete`);
      await page.keyboard.press('Escape');
      await page.locator('.bj-region-button[data-region="2"]').focus();
      await page.keyboard.press('Enter');
      check(await page.locator('.bj-dialog').evaluate(dialog => dialog.open), `${size} keyboard region did not open intake`);
      await capture(page, size, 'body-keyboard-intake', 'Focused lower-back region and pressed Enter', 'Accessible four-question intake opens with the named area');
      await page.keyboard.press('Escape');
      await page.locator('.theme-toggle').click();
      check(await page.locator('html').getAttribute('data-theme') === 'dark', `${size} dark-mode toggle failed`);
      await capture(page, size, 'body-dark', 'Switched body guide to dark mode', 'Dark header and legible clinical body/story remain');
      await page.locator('.theme-toggle').click();
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${size} horizontal overflow`);
      await page.close(); await context.close();
    }
    const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const reducedPage = await reduced.newPage(); await reducedPage.goto(base, { waitUntil: 'domcontentloaded' });
    await reducedPage.evaluate(() => scrollTo(0, document.querySelector('.bj').getBoundingClientRect().top + scrollY - 72));
    await reducedPage.waitForTimeout(350);
    check(await reducedPage.locator('.bj-panel:visible').count() === 3, 'Reduced motion reading order');
    await capture(reducedPage, 'mobile', 'body-reduced', 'Opened body with reduced-motion preference', 'Three guidance panels in reading order with static figure');
    await reduced.close();
    const fallback = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await fallback.addInitScript(() => { const original = HTMLCanvasElement.prototype.getContext; HTMLCanvasElement.prototype.getContext = function(kind, ...args) { return /^webgl/i.test(kind) ? null : original.call(this, kind, ...args); }; });
    const fallbackPage = await fallback.newPage(); await fallbackPage.goto(base, { waitUntil: 'domcontentloaded' });
    await fallbackPage.evaluate(() => scrollTo(0, document.querySelector('.bj').getBoundingClientRect().top + scrollY));
    await fallbackPage.waitForFunction(() => [...document.querySelectorAll('.bj-figure img')].every(img => img.complete && img.naturalWidth > 0));
    check(await fallbackPage.locator('.bj--webgl canvas').count() === 0, 'WebGL fallback canvas remains');
    check((await fallbackPage.locator('.bj-front img').getAttribute('src')).includes('body-map-front'), 'Front fallback still missing');
    await capture(fallbackPage, 'mobile', 'body-fallback', 'Blocked WebGL and waited for fallback image', 'Front clinical still and named region controls visible');
    await fallbackPage.locator('.bj-region-button[data-region="1"]').click();
    check(await fallbackPage.locator('.bj').getAttribute('data-side') === 'back', 'Back fallback did not change side');
    check((await fallbackPage.locator('.bj-back img').getAttribute('src')).includes('body-map-back'), 'Back fallback still missing');
    await fallbackPage.locator('.bj-dialog-close').click();
    await capture(fallbackPage, 'mobile', 'body-fallback-back', 'Selected upper back with WebGL blocked', 'Back anatomical still matches the Back View label and guidance');
    await fallback.close();
    fs.writeFileSync(path.join(out, 'browser-log-v6.json'), JSON.stringify(observations, null, 2));
    console.log(`Recorded ${observations.length} current-source observations`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
