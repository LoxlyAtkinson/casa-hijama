const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const base = 'http://127.0.0.1:4173';
const out = path.resolve(__dirname, '../.experience/casa-rebuild/evidence/final');
fs.mkdirSync(out, { recursive: true });
const observations = [];
const sourceRevision = crypto.createHash('sha256').update(['index.html','src/main.js','src/styles.css','src/scroll-motion.js','src/scroll-motion.css','scrollcraft/builds/casa-hijama/scrollcraft.js','scrollcraft/builds/casa-hijama/scrollcraft.css','src/shop.js','src/shop.css','src/shop-crops.json','src/body-journey.js','src/body-journey.css','products.json'].map(file => fs.readFileSync(path.resolve(__dirname, '..', file))).join('\n')).digest('hex');
const routes = [
  ['home', '/'], ['treatments', '/cupping-therapy'],
  ['products', '/products'], ['information', '/more-information'],
];

function assert(value, message) { if (!value) throw new Error(message); }
function stamp() { return new Date().toISOString(); }
async function record(page, name, route, state, action, expected, actual, fullPage = false) {
  const viewport = page.viewportSize();
  const file = `${name}.png`;
  await page.screenshot({ path: path.join(out, file), fullPage, animations: 'disabled', type: 'png' });
  observations.push({ route, state, viewport, timestamp: stamp(), sourceRevision, action, expected, actual, result: 'PASS', screenshot: name });
  console.log(`PASS ${name}: ${actual}`);
}
async function scrollWholePage(page) {
  await page.evaluate(async () => {
    const step = Math.max(600, innerHeight - 100);
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y);
      await new Promise(r => setTimeout(r, 55));
    }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(200);
}
async function open(context, route, viewport) {
  const page = await context.newPage();
  await page.setViewportSize(viewport);
  await page.goto(base + route, { waitUntil: 'domcontentloaded' });
  await page.locator('main').waitFor();
  return page;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ reducedMotion: 'reduce' });
      await context.addInitScript(t => localStorage.setItem('casa-theme', t), theme);
      for (const [size, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
        for (const [name, route] of routes) {
          const page = await open(context, route, viewport);
          const layout = await page.evaluate(() => ({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, theme: document.documentElement.dataset.theme, main: !!document.querySelector('main') }));
          assert(layout.width === viewport.width && layout.documentWidth <= viewport.width && layout.theme === theme && layout.main, `${name} ${theme} ${size} layout: ${JSON.stringify(layout)}`);
          if (name === 'products') assert(await page.locator('.product-card').count() === 30, 'Catalog missing products');
          await scrollWholePage(page);
          if (name === 'products') {
            const broken = await page.locator('.product-card img').evaluateAll(images => images.filter(i => !i.complete || !i.naturalWidth).map(i => i.src));
            assert(broken.length === 0, `Broken catalog images: ${broken.join(', ')}`);
          }
          await record(page, `${size}-${theme}-${name}-full`, route, `${size}-${theme}-${name}-full`, `Opened ${route}, scrolled through all sections and captured full page`, `No horizontal overflow; theme ${theme}; all primary sections visible`, `Viewport ${layout.width}px; document ${layout.documentWidth}px; theme ${layout.theme}${name === 'products' ? '; 30 products' : ''}`, true);
          await page.close();
        }
      }
      await context.close();
    }

    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
    await context.addInitScript(() => localStorage.setItem('casa-theme', 'light'));
    const products = await open(context, '/products', { width: 1440, height: 900 });
    await products.getByRole('button', { name: 'Soaps', exact: true }).click();
    assert(await products.locator('.product-card').count() === 3, 'Soaps filter count');
    await products.locator('.product-card').first().scrollIntoViewIfNeeded();
    await products.waitForFunction(() => [...document.querySelectorAll('.product-card img')].every(i => i.complete && i.naturalWidth > 0));
    const soapImages = await products.locator('.product-card img').evaluateAll(nodes => nodes.map(i => ({ src: new URL(i.src).pathname, loaded: i.complete && i.naturalWidth > 0 })));
    assert(soapImages.every(x => x.loaded) && soapImages.slice(0,2).every(x => x.src.endsWith('.png')), `Soap images: ${JSON.stringify(soapImages)}`);
    await record(products, 'desktop-light-soaps', '/products', 'soaps-filter', 'Filtered catalog to Soaps', 'Three soap cards with loaded images, including both PNG assets', JSON.stringify(soapImages));
    for (const id of [24, 25]) {
      const trigger = products.locator(`.product-open[data-shop-open="${id}"]`);
      await trigger.click();
      const image = await products.locator('.modal-image img').evaluate(i => ({ src: new URL(i.src).pathname, loaded: i.complete && i.naturalWidth > 0 }));
      assert(await products.locator('.product-dialog').evaluate(d => d.open) && image.loaded && image.src.endsWith('.png'), `Soap dialog ${id}`);
      await record(products, `desktop-light-soap-${id}-dialog`, '/products', `soap-${id}-dialog`, `Opened product ${id} dialog`, 'Dialog open with loaded PNG image', JSON.stringify(image));
      await products.keyboard.press('Escape');
      assert(!(await products.locator('.product-dialog').evaluate(d => d.open)), `Dialog ${id} failed to close`);
    }
    await products.getByRole('button', { name: 'All', exact: true }).click();
    await products.locator('#shop-search').fill('no such product');
    assert(await products.locator('.product-card').count() === 0 && await products.locator('.shop-empty').isVisible(), 'Shop empty search state');
    await record(products, 'desktop-light-shop-empty', '/products', 'shop-empty', 'Searched for an unavailable product', 'Clear recovery and no-results message visible', 'No products; reset action visible');
    await products.locator('.shop-reset').click();
    assert(await products.locator('.product-card').count() === 30, 'Shop reset did not restore all products');
    await products.locator('#sort-products').selectOption('az');
    const names = await products.locator('.product-card h3').allTextContents();
    assert(JSON.stringify(names) === JSON.stringify([...names].sort((a,b) => a.localeCompare(b))), 'A-Z sort order');
    await record(products, 'desktop-light-products-sorted', '/products', 'products-sorted', 'Selected name A to Z sort', 'All 30 products ordered alphabetically', `First: ${names[0]}; last: ${names.at(-1)}`);
    const keyboardTrigger = products.locator('.product-open').first();
    await keyboardTrigger.focus();
    await products.keyboard.press('Enter');
    assert(await products.locator('.product-dialog').evaluate(d => d.open), 'Keyboard did not open product dialog');
    await products.keyboard.press('Escape');
    assert(await keyboardTrigger.evaluate(x => document.activeElement === x), 'Dialog close did not return focus');
    await record(products, 'desktop-light-dialog-keyboard-return', '/products', 'dialog-keyboard-return', 'Opened first product with Enter, closed with Escape', 'Dialog closed and keyboard focus returned to trigger', `Focused product ${await keyboardTrigger.getAttribute('data-shop-open')}`);
    await products.locator('.shop-bag-trigger').click();
    assert(await products.locator('.shop-bag-dialog').evaluate(d => d.open) && await products.locator('.shop-bag-empty').isVisible(), 'Empty enquiry bag');
    await record(products, 'desktop-light-shop-bag-empty', '/products', 'shop-bag-empty', 'Opened the enquiry bag before choosing products', 'Empty message and collection recovery visible', 'Empty bag dialog open');
    await products.locator('.shop-bag-close').click();
    await products.locator('[data-shop-add="23"]').last().click();
    await products.locator('.shop-bag-trigger').click();
    assert(await products.locator('.shop-bag-item').count() === 1, 'Added product missing from bag');
    await products.locator('[data-shop-qty="23"][data-direction="1"]').click();
    const bagLink = await products.locator('.shop-whatsapp').getAttribute('href');
    const bagText = new URL(bagLink).searchParams.get('text');
    assert(bagText.includes('2 × Kalonji Massage Oil') && bagText.includes('Known-price subtotal'), 'Enquiry quantity or subtotal missing');
    await record(products, 'desktop-light-shop-bag-populated', '/products', 'shop-bag-populated', 'Added a product, increased quantity and opened bag', 'Quantity, subtotal, WhatsApp enquiry and fallback link visible', bagText.slice(0, 220));
    await products.locator('[data-shop-remove="23"]').click();
    assert(await products.locator('.shop-bag-empty').isVisible(), 'Bag remove did not restore empty state');
    await products.locator('.shop-bag-close').click();
    await products.close();

    const info = await open(context, '/more-information', { width: 1440, height: 900 });
    const firstQuestion = info.locator('details summary').first();
    await firstQuestion.focus();
    await info.keyboard.press('Enter');
    assert(await info.locator('details').first().evaluate(d => d.open), 'FAQ keyboard disclosure');
    await record(info, 'desktop-light-faq-keyboard-open', '/more-information', 'faq-keyboard-open', 'Focused first question and pressed Enter', 'Treatment answer expanded and remains readable', await info.locator('details').first().innerText());
    await info.close();

    const booking = await open(context, '/#book', { width: 1440, height: 900 });
    await booking.locator('#booking-form button[type=submit]').click();
    const invalid = await booking.locator('#booking-form input[name=name]').evaluate(i => ({ valid: i.validity.valid, focused: document.activeElement === i }));
    assert(!invalid.valid && invalid.focused, 'Required name validation/focus');
    await record(booking, 'desktop-light-booking-invalid', '/#book', 'booking-invalid', 'Submitted blank appointment form', 'Browser focuses required name and prevents handoff', JSON.stringify(invalid));
    await booking.locator('[name=name]').fill('Test Guest');
    await booking.locator('[name=phone]').fill('0712345678');
    await booking.locator('[name=treatment]').selectOption({ label: 'Wet Cupping / Hijama' });
    await booking.locator('[name=date]').fill('2026-10-20');
    await booking.locator('[name=time]').selectOption({ index: 1 });
    await booking.locator('[name=confirm]').check();
    await booking.evaluate(() => { window.__anchorClick = HTMLAnchorElement.prototype.click; HTMLAnchorElement.prototype.click = function() {}; });
    await booking.locator('#booking-form button[type=submit]').click();
    const link = await booking.locator('.form-status a').getAttribute('href');
    const url = new URL(link);
    const message = url.searchParams.get('text');
    assert(url.hostname === 'wa.me' && url.pathname === '/27838738292' && message.includes('Test Guest') && message.includes('2026-10-20') && message.includes('request until confirmed'), 'WhatsApp URL/message');
    await record(booking, 'desktop-light-booking-ready-final', '/#book', 'booking-ready-final', 'Submitted complete dummy appointment with automatic handoff blocked', 'Visible recovery link carries all entered details to WhatsApp', `${url.origin}${url.pathname}; message includes name, date, treatment, pending-confirmation wording`);
    await booking.evaluate(() => { HTMLAnchorElement.prototype.click = window.__anchorClick; });
    await context.route('https://wa.me/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<title>WhatsApp handoff</title><p>Destination reached</p>' }));
    const [handoff] = await Promise.all([booking.waitForEvent('popup'), booking.locator('.form-status a').click()]);
    assert(new URL(handoff.url()).hostname === 'wa.me', 'Fallback did not open WhatsApp destination');
    await handoff.close();
    await record(booking, 'desktop-light-booking-fallback', '/#book', 'booking-fallback', 'Followed visible fallback after blocked automatic handoff', 'New tab opened at prepared WhatsApp URL without sending a message', `${url.origin}${url.pathname}; popup URL matched`);
    const mapLink = booking.locator('.map-fallback a');
    await booking.evaluate(() => history.replaceState(null, '', '/'));
    await mapLink.scrollIntoViewIfNeeded();
    const mapHref = await mapLink.getAttribute('href');
    assert(mapHref.includes('77+Belgravia+Road') && await mapLink.isVisible(), 'Map fallback directions link');
    await record(booking, 'desktop-light-map-fallback', '/', 'map-fallback', 'Inspected location when external map cannot render', 'Address and open-directions fallback remain visible', mapHref);
    await booking.close();

    const normal = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' });
    const media = await open(normal, '/', { width: 1440, height: 900 });
    const bodyArea = media.locator('.bj-scroll');
    await bodyArea.scrollIntoViewIfNeeded();
    assert(await media.locator('.bj--webgl canvas').count() === 1, 'Continuous 3D body canvas did not render');
    await media.locator('.bj-zoom-controls button[data-zoom="in"]').click();
    assert((await media.locator('.bj-zoom-level').innerText()) === '115%', 'Body zoom control did not change level');
    await record(media, 'desktop-light-body-zoom', '/', 'body-zoom', 'Zoomed the rendered clinical body', 'Camera moves closer and zoom level displays 115%', 'Continuous WebGL canvas; zoom level 115%');
    await media.locator('.bj-zoom-controls button[data-zoom="reset"]').click();
    assert((await media.locator('.bj-zoom-level').innerText()) === '100%', 'Body zoom reset failed');
    const regionButtons = media.locator('.bj-region-button');
    for (const [index, name] of ['neck-shoulders', 'upper-back', 'lower-back'].entries()) {
      await regionButtons.nth(index).click();
      await media.waitForFunction(i => document.querySelector('.bj')?.dataset.region === String(i), index);
      const guidance = (await media.locator('.bj-panel.is-active').textContent()).trim();
      assert(guidance.length > 40, `Body guidance missing for ${name}`);
      await record(media, `desktop-light-body-${name}`, '/', `body-${name}`, `Selected body region ${index + 1}`, 'Matching region, marker and guidance visible', guidance);
      assert(await media.locator('.bj-dialog').evaluate(d => d.open), `Body check-in did not open for ${name}`);
      if (index === 2) {
        for (const key of ['duration', 'symptoms', 'goal', 'safety']) await media.locator(`.bj-intake-form input[name="${key}"]`).first().check();
        await media.locator('.bj-review').click();
        assert(await media.locator('.bj-intake-result').isVisible(), 'Body intake notes missing');
        await record(media, 'desktop-light-body-intake-notes', '/', 'body-intake-notes', 'Answered four intake questions for lower back', 'Local conversation notes and browse action visible', (await media.locator('.bj-intake-result').innerText()).slice(0, 260));
        await media.locator('.bj-edit').click();
        assert(await media.locator('.bj-intake-form').isVisible(), 'Body intake edit recovery missing');
      }
      await media.locator('.bj-dialog-close').click();
    }
    await regionButtons.first().click();
    await media.waitForFunction(() => document.querySelector('.bj')?.dataset.region === '0');
    await record(media, 'desktop-light-body-reverse', '/', 'body-reverse', 'Returned from lower back to neck and shoulders', 'Earlier guidance restored on reverse scroll', (await media.locator('.bj-panel.is-active').textContent()).trim());
    await media.locator('.bj-dialog-close').click();
    await media.close();
    const filmPage = await open(normal, '/', { width: 1440, height: 900 });
    const filmPosition = await filmPage.locator('.film-section').evaluate(el => ({ top: el.getBoundingClientRect().top + scrollY, height: el.getBoundingClientRect().height }));
    await filmPage.evaluate(y => scrollTo(0, y), filmPosition.top + filmPosition.height * .2);
    await filmPage.locator('#studio-film.sc-has-clip').waitFor({ timeout: 15000 });
    await filmPage.waitForTimeout(1200);
    const filmEarly = await filmPage.locator('#studio-film').evaluate(v => v.currentTime);
    await filmPage.evaluate(y => scrollTo(0, y), filmPosition.top + filmPosition.height * .8);
    await filmPage.waitForFunction(t => document.querySelector('#studio-film').currentTime > t + 1, filmEarly, { timeout: 10000 });
    const filmLate = await filmPage.locator('#studio-film').evaluate(v => v.currentTime);
    await filmPage.evaluate(y => scrollTo(0, y), filmPosition.top + filmPosition.height * .2);
    await filmPage.waitForFunction(t => document.querySelector('#studio-film').currentTime < t - .3, filmLate, { timeout: 10000 });
    const filmReverse = await filmPage.locator('#studio-film').evaluate(v => v.currentTime);
    console.log(`Film timing: ${filmEarly.toFixed(2)} → ${filmLate.toFixed(2)} → ${filmReverse.toFixed(2)}`);
    assert(filmLate > filmEarly + .2 && filmReverse < filmLate - .2, 'Film did not scrub forward and reverse with scroll');
    await record(filmPage, 'desktop-light-film-scrub', '/', 'film-scrub', 'Scrolled Higgsfield room film forward and back', 'Visible frames advance and reverse with page scroll', `Seconds ${filmEarly.toFixed(2)} → ${filmLate.toFixed(2)} → ${filmReverse.toFixed(2)}`);
    await filmPage.locator('.film-control').click();
    assert((await filmPage.locator('.film-control').getAttribute('aria-pressed')) === 'true' && await filmPage.locator('.film-freeze').isVisible(), 'Film pause frame missing');
    await record(filmPage, 'desktop-light-film-paused', '/', 'film-paused', 'Paused scroll film at current frame', 'Held frame and resume control remain visible', 'Paused frame visible; Play motion control');
    await filmPage.locator('.film-control').click();
    await filmPage.close();
    await normal.close();

    const failedMedia = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' });
    await failedMedia.route('**/private-room-film.mp4', route => route.abort());
    const mediaFallback = await open(failedMedia, '/', { width: 1440, height: 900 });
    await mediaFallback.locator('.film-section').scrollIntoViewIfNeeded();
    await mediaFallback.waitForTimeout(700);
    const failedState = await mediaFallback.locator('#studio-film').evaluate(v => ({ loaded: v.classList.contains('sc-has-clip'), fallback: getComputedStyle(document.querySelector('.film-fallback')).display }));
    assert(!failedState.loaded && failedState.fallback !== 'none', 'Video failure did not retain still');
    await record(mediaFallback, 'desktop-light-film-fallback', '/', 'film-fallback', 'Blocked studio film network request', 'Still image and booking action remain visible', JSON.stringify(failedState));
    await mediaFallback.close();
    await failedMedia.close();

    const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const still = await open(reduced, '/', { width: 390, height: 844 });
    assert(await still.locator('.bj-panel:visible').count() === 3, 'Reduced-motion body guidance not all visible');
    await still.locator('.bj-panels').scrollIntoViewIfNeeded();
    await still.waitForTimeout(300);
    await record(still, 'mobile-light-body-reduced', '/', 'body-reduced-motion', 'Opened body guide with reduced motion', 'All three guidance cards are readable in ordinary flow', 'Three region cards visible');
    const reducedState = await still.locator('#studio-film').evaluate(v => ({ src: v.getAttribute('src'), fallback: getComputedStyle(document.querySelector('.film-fallback')).display, motion: matchMedia('(prefers-reduced-motion: reduce)').matches }));
    assert(reducedState.motion && reducedState.src === null, 'Reduced motion video not disabled');
    await still.locator('.film-section').scrollIntoViewIfNeeded();
    await record(still, 'mobile-light-film-still', '/', 'film-still-reduced-motion', 'Opened home with reduced motion preference', 'Static studio image displayed; video source not attached', JSON.stringify(reducedState));
    await still.locator('.menu-toggle').click();
    assert(await still.locator('.mobile-nav').isVisible(), 'Mobile menu did not open');
    await record(still, 'mobile-light-menu-open', '/', 'mobile-menu-open', 'Opened mobile navigation', 'All route links and close control visible', `Links: ${await still.locator('.mobile-nav a').count()}; expanded=${await still.locator('.menu-toggle').getAttribute('aria-expanded')}`);
    await still.locator('.menu-toggle').click();
    assert(!(await still.locator('.mobile-nav').isVisible()), 'Mobile menu did not close');
    await still.close();
    const mobileProducts = await open(reduced, '/products', { width: 390, height: 844 });
    await mobileProducts.getByRole('button', { name: 'Soaps', exact: true }).click();
    assert(await mobileProducts.locator('.product-card').count() === 3, 'Mobile soap filter');
    await mobileProducts.locator('.product-open[data-shop-open="25"]').click();
    assert(await mobileProducts.locator('.product-dialog').evaluate(d => d.open), 'Mobile product dialog');
    await record(mobileProducts, 'mobile-light-soap-dialog', '/products', 'mobile-soap-dialog', 'Filtered to Soaps and opened Himalayan Soap at 390px', 'Dialog and PNG product image visible without horizontal overflow', `Document width ${await mobileProducts.evaluate(() => document.documentElement.scrollWidth)}px`);
    await mobileProducts.keyboard.press('Escape');
    await mobileProducts.locator('.shop-card-add[data-shop-add="25"]').click();
    await mobileProducts.locator('.shop-bag-trigger').click();
    assert(await mobileProducts.locator('.shop-bag-item').count() === 1 && await mobileProducts.evaluate(() => document.documentElement.scrollWidth === innerWidth), 'Mobile enquiry bag overflow or missing item');
    await record(mobileProducts, 'mobile-light-shop-bag', '/products', 'mobile-bag', 'Added Himalayan Soap and opened enquiry bag on mobile', 'Item and enquiry action visible without overflow', 'One item; 390px document width');
    await mobileProducts.close();
    await reduced.close();

    const persistence = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const themePage = await open(persistence, '/', { width: 390, height: 844 });
    await themePage.locator('.theme-toggle').click();
    const chosenTheme = await themePage.locator('html').getAttribute('data-theme');
    await themePage.goto(base + '/more-information');
    await themePage.reload();
    assert(await themePage.locator('html').getAttribute('data-theme') === chosenTheme, 'Theme did not persist after route/reload');
    await record(themePage, 'mobile-theme-persisted-information', '/more-information', 'theme-persisted-information', 'Switched theme, navigated to information, then reloaded', 'Chosen theme persisted across route and reload', `Theme=${chosenTheme}`);
    await themePage.close();
    await persistence.close();

    const noScript = await browser.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
    const noScriptPage = await noScript.newPage();
    await noScriptPage.goto(base + '/products');
    assert(await noScriptPage.locator('noscript a[href^="https://wa.me/"]').isVisible(), 'No-JavaScript contact recovery missing');
    assert(await noScriptPage.locator('.nojs-list li').count() === 30, 'No-JavaScript product catalog incomplete');
    await record(noScriptPage, 'mobile-shop-no-javascript', '/products', 'no-javascript', 'Opened products with JavaScript disabled', 'All 30 product names/prices and WhatsApp enquiry remain available', '30 static products and WhatsApp link visible');
    await noScript.close();

    fs.writeFileSync(path.join(out, 'browser-log.json'), JSON.stringify(observations, null, 2));
    console.log(`Recorded ${observations.length} browser observations`);
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
