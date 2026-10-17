import products from '../products.json';
import stageCrops from './shop-crops.json';
import './shop.css';

const categories = ['all', 'supplements', 'oils', 'skincare', 'tablets', 'soaps', 'zamzam', 'equipment'];
const labels = { all: 'All', supplements: 'Supplements', oils: 'Oils', skincare: 'Skincare', tablets: 'Tablets', soaps: 'Soaps', zamzam: 'ZamZam', equipment: 'Equipment' };
const image = product => `${import.meta.env.BASE_URL}assets/product-${product.id}.${[24, 25].includes(product.id) ? 'png' : 'jpg'}`;
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const money = value => `R${value.toLocaleString('en-ZA')}`;
const bagKey = 'casa-hijama-bag';
const heroProduct = products.find(product => product.id === 23);
const showroomBands = [
  { title: 'Begin with botanicals.', copy: 'Explore the first six formulas in the Casa edit.', ids: [3, 1, 2, 4, 5, 6], tone: 'sage' },
  { title: 'Leaves, roots & seeds.', copy: 'A closer look at familiar ingredients from the collection.', ids: [8, 7, 9, 10, 11], tone: 'ivory' },
  { title: 'The pantry shelf.', copy: 'Everyday staples and capsules, gathered in one place.', ids: [14, 12, 13, 15, 29], tone: 'stone' },
  { title: 'For a care ritual.', copy: 'Skin care and oils for moments set aside for yourself.', ids: [23, 16, 17, 18, 22], tone: 'mint' },
  { title: 'Focused formulas.', copy: 'View the tablet range and ask our team about ingredients and suitability.', ids: [20, 19, 21], tone: 'ivory' },
  { title: 'Simple essentials.', copy: 'Soaps, ZamZam water and cupping equipment to explore.', ids: [27, 24, 25, 26, 28, 30], tone: 'sage' },
];
// Original catalog art is a mix of photos and vendor flyers. These crop windows
// show the photographed item instead of embedding each full promotional flyer.
function productStage(product, className = '', loading = 'lazy') {
  const crop = stageCrops[product.id];
  const style = `--crop-img-w:${100 / crop.w}%;--crop-img-h:${100 / crop.h}%;--crop-left:${-100 * crop.x / crop.w}%;--crop-top:${-100 * crop.y / crop.h}%;--crop-aspect:${crop.aspect}`;
  return `<div class="shop-product-stage ${className}" data-product-id="${product.id}"><div class="shop-product-cutout" style="${style}"><img src="${image(product)}" alt="${escapeHtml(product.name)}" loading="${loading}" onerror="this.closest('.shop-product-stage').classList.add('image-unavailable');this.remove()"></div><span class="image-unavailable-label">Image unavailable</span></div>`;
}

function readBag() {
  try {
    const saved = JSON.parse(localStorage.getItem(bagKey) || '{}');
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) => products.some(product => product.id === Number(id)) && Number.isInteger(quantity) && quantity > 0 && quantity <= 99));
  } catch { return {}; }
}

export function shopPage(header, footer) {
  return `${header('products')}<main class="shop-page">
    <section class="catalog-hero"><div class="wrap"><span class="eyebrow">THE WELLNESS EDIT</span><h1>Wellbeing,<br><em>beyond the studio.</em></h1><p>Sunnah-inspired oils, herbs, ZamZam water and holistic essentials to support your daily ritual. Explore the collection, then ask our team about availability via WhatsApp.</p><div class="catalog-stat"><span>30 <small>CURATED PRODUCTS</small></span><span>07 <small>COLLECTIONS</small></span></div><a class="shop-hero-link" href="#shop-discover">Discover the collection <span aria-hidden="true">↓</span></a></div><div class="catalog-hero-art"><img src="/assets/catalog-hero.png" alt="Amber wellness jars and botanicals on pale stone"></div></section>
    <section class="shop-story wrap" aria-label="How to explore and enquire"><div class="shop-story-heading"><span class="eyebrow">YOUR JOURNEY</span><h2>Find what feels<br><em>right for you.</em></h2></div><ol><li><span>01</span><strong>Discover</strong><p>Search and explore seven collections.</p></li><li><span>02</span><strong>Take a closer look</strong><p>View details and add what interests you.</p></li><li><span>03</span><strong>Ask Casa Hijama</strong><p>Review your bag and send an enquiry on WhatsApp.</p></li></ol></section>
    <section class="shop-spotlight" aria-labelledby="shop-spotlight-title"><div class="wrap shop-spotlight-grid"><div class="shop-spotlight-copy"><span class="eyebrow">FROM THE COLLECTION / 01</span><h2 id="shop-spotlight-title">A little more<br><em>room to unwind.</em></h2><p>Meet Kalonji Massage Oil. Explore the product, then keep it in your bag while you discover the rest.</p><button type="button" class="underline-link shop-open-feature" data-shop-open="${heroProduct.id}">Explore Kalonji Massage Oil <span aria-hidden="true">↗</span></button></div><button type="button" class="shop-spotlight-visual" data-shop-open="${heroProduct.id}" aria-label="View ${escapeHtml(heroProduct.name)} details"><span class="shop-spotlight-orbit" aria-hidden="true"></span>${productStage(heroProduct, 'shop-spotlight-stage')}<span class="shop-spotlight-caption"><small>THE FEATURED EDIT</small><strong>${escapeHtml(heroProduct.name)}</strong><span>${escapeHtml(heroProduct.priceLabel)} · Explore ↗</span></span></button></div></section>
    <section class="catalog section-pad" id="shop-discover"><div class="wrap"><div class="catalog-intro"><span class="eyebrow">DISCOVER THE COLLECTION</span><h2>Choose your<br><em>everyday ritual.</em></h2><p>Every product can be added to your enquiry bag. Our team will confirm availability and the final price before an order is placed.</p><p class="shop-health-note">Catalog products are not treatments for aches or pain. Please ask a clinician about persistent symptoms and check suitability before using a supplement.</p></div><div class="shop-controls"><label class="shop-search-label" for="shop-search"><span>Search the collection</span><span class="shop-search-wrap"><span aria-hidden="true">⌕</span><input id="shop-search" type="search" placeholder="Try oils, soap, ZamZam…" autocomplete="off"><span class="shop-search-shortcut" aria-hidden="true">/</span></span></label><label class="sort-label">Sort <select id="sort-products"><option value="default">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="az">Name: A to Z</option></select></label></div><div class="filters" role="group" aria-label="Filter products">${categories.map(category => `<button type="button" data-category="${category}" class="filter ${category === 'all' ? 'active' : ''}" aria-pressed="${category === 'all'}">${labels[category]}</button>`).join('')}</div><div class="shop-result-row"><p class="result-count" role="status" aria-live="polite"></p><button class="shop-clear" type="button" hidden>Clear filters</button></div><div class="product-grid" id="product-grid"></div><div class="shop-empty" hidden><span aria-hidden="true">○</span><h3>No products found.</h3><p>Try a different search or return to the full collection.</p><button class="button button-primary shop-reset" type="button">Show all products <span aria-hidden="true">↗</span></button></div></div></section>
    <button class="shop-bag-trigger" type="button" aria-label="Open enquiry bag, 0 items"><span class="shop-bag-icon" aria-hidden="true">◒</span><span>Enquiry bag</span><strong class="shop-bag-count">0</strong></button><p class="shop-announcement sr-only" role="status" aria-live="polite"></p>
  </main><dialog class="product-dialog shop-product-dialog" aria-label="Product details"><button class="modal-close" type="button" aria-label="Close product details">×</button><div class="modal-content"></div></dialog><dialog class="shop-bag-dialog" aria-label="Enquiry bag"><div class="shop-bag-shell"><header class="shop-bag-header"><div><span class="eyebrow">YOUR WELLNESS EDIT</span><h2>Enquiry bag <span class="shop-bag-title-count">(0)</span></h2></div><button class="shop-bag-close" type="button" aria-label="Close enquiry bag">×</button></header><div class="shop-bag-body"></div><div class="shop-bag-footer"></div></div></dialog>${footer()}`;
}

export function initShop() {
  const grid = document.querySelector('#product-grid');
  if (!grid) return;
  const productDialog = document.querySelector('.shop-product-dialog');
  const bagDialog = document.querySelector('.shop-bag-dialog');
  const search = document.querySelector('#shop-search');
  const status = document.querySelector('.shop-announcement');
  let category = 'all';
  let sort = 'default';
  let bag = readBag();
  let focusReturn = null;

  const announce = message => { status.textContent = ''; requestAnimationFrame(() => { status.textContent = message; }); };
  const saveBag = () => { try { localStorage.setItem(bagKey, JSON.stringify(bag)); } catch { /* Bag still works for this visit. */ } };
  const count = () => Object.values(bag).reduce((total, quantity) => total + quantity, 0);
  const filterProducts = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const matching = products.filter(product => (category === 'all' || product.cat === category) && `${product.name} ${product.cat} ${product.desc}`.toLocaleLowerCase().includes(query));
    if (sort === 'low') matching.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sort === 'high') matching.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    if (sort === 'az') matching.sort((a, b) => a.name.localeCompare(b.name));
    return matching;
  };
  const card = (product, featured = false) => `<article class="product-card${featured ? ' shop-feature-card' : ''}" style="--shop-index:${Math.min(7, products.indexOf(product))}"><div class="shop-card-stage"><button type="button" class="product-open" data-shop-open="${product.id}" aria-label="View ${escapeHtml(product.name)} details">${productStage(product, '', featured ? 'eager' : 'lazy')}</button><span class="shop-card-pill">${featured ? 'IN FOCUS' : 'CASA EDIT'}</span><button type="button" class="shop-card-add" data-shop-add="${product.id}" aria-label="Add ${escapeHtml(product.name)} to enquiry bag">Add to enquiry bag <span aria-hidden="true">+</span></button></div><div class="shop-card-info"><span class="product-category">${labels[product.cat]}</span><h3><button type="button" data-shop-open="${product.id}" aria-label="View ${escapeHtml(product.name)} details">${escapeHtml(product.name)}</button></h3><p>${escapeHtml(product.desc)}</p><div class="product-footer"><strong>${escapeHtml(product.priceLabel)}</strong><span aria-hidden="true">↗</span></div></div></article>`;
  const showroom = () => showroomBands.map((band, index) => {
    const [featuredId, ...otherIds] = band.ids;
    const featured = products.find(product => product.id === featuredId);
    const others = otherIds.map(id => products.find(product => product.id === id));
    return `<section class="shop-showroom-band shop-showroom-band--${band.tone}" aria-labelledby="shop-band-title-${index}"><div class="shop-band-heading"><div><span class="eyebrow">THE CASA COLLECTION / ${String(index + 1).padStart(2, '0')}</span><h3 id="shop-band-title-${index}">${band.title}</h3><p>${band.copy}</p></div><span class="shop-band-count">${band.ids.length} PRODUCTS</span></div><div class="shop-band-layout">${card(featured, true)}<div class="shop-band-shelf"><div class="shop-band-shelf-head"><span>MORE TO EXPLORE</span><div class="shop-band-arrows"><button type="button" data-shop-scroll="prev" aria-label="Scroll ${band.title} products left">←</button><button type="button" data-shop-scroll="next" aria-label="Scroll ${band.title} products right">→</button></div></div><div class="shop-band-rail" tabindex="0" role="region" aria-label="${band.title} more products">${others.map(product => card(product)).join('')}</div></div></div></section>`;
  }).join('');
  const renderProducts = () => {
    const matching = filterProducts();
    const curated = category === 'all' && !search.value.trim() && sort === 'default';
    grid.classList.toggle('has-showroom', curated);
    grid.innerHTML = curated ? showroom() : matching.map(product => card(product)).join('');
    document.querySelector('.result-count').textContent = `${matching.length} ${matching.length === 1 ? 'product' : 'products'} ${search.value.trim() || category !== 'all' ? 'found' : 'in the collection'}`;
    document.querySelector('.shop-empty').hidden = matching.length !== 0;
    document.querySelector('.shop-clear').hidden = !search.value.trim() && category === 'all';
  };
  const bagEntries = () => Object.entries(bag).map(([id, quantity]) => ({ product: products.find(product => product.id === Number(id)), quantity })).filter(entry => entry.product);
  const renderBag = () => {
    const entries = bagEntries();
    const itemCount = count();
    document.querySelector('.shop-bag-count').textContent = itemCount;
    document.querySelector('.shop-bag-trigger').setAttribute('aria-label', `Open enquiry bag, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`);
    document.querySelector('.shop-bag-title-count').textContent = `(${itemCount})`;
    const body = document.querySelector('.shop-bag-body');
    const footer = document.querySelector('.shop-bag-footer');
    if (!entries.length) {
      body.innerHTML = `<div class="shop-bag-empty"><span aria-hidden="true">◒</span><h3>Begin with curiosity.</h3><p>Your bag is empty. Explore the collection and save products you would like to ask us about.</p><button type="button" class="button button-primary shop-continue">Explore products <span aria-hidden="true">↗</span></button></div>`;
      footer.innerHTML = '';
      return;
    }
    const selectedIds = new Set(entries.map(({ product }) => product.id));
    const related = [heroProduct, products.find(product => product.id === 24), products.find(product => product.id === 27)].filter(product => product && !selectedIds.has(product.id)).slice(0, 2);
    body.innerHTML = entries.map(({ product, quantity }) => `<article class="shop-bag-item">${productStage(product, 'shop-bag-stage')}<div><span class="product-category">${labels[product.cat]}</span><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.desc)}</p><strong>${escapeHtml(product.priceLabel)}</strong><div class="shop-bag-actions"><div class="shop-qty"><button type="button" data-shop-qty="${product.id}" data-direction="-1" aria-label="Remove one ${escapeHtml(product.name)}">−</button><span aria-label="Quantity ${quantity}">${quantity}</span><button type="button" data-shop-qty="${product.id}" data-direction="1" aria-label="Add one ${escapeHtml(product.name)}">+</button></div><button type="button" class="shop-remove" data-shop-remove="${product.id}" aria-label="Remove ${escapeHtml(product.name)} from bag">Remove</button></div></div></article>`).join('') + (related.length ? `<section class="shop-related" aria-label="Explore more products"><h3>Explore more</h3><div class="shop-related-grid">${related.map(product => `<article>${productStage(product, 'shop-related-stage')}<div><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.priceLabel)}</span><button type="button" data-shop-add="${product.id}" aria-label="Add ${escapeHtml(product.name)} to enquiry bag">Add <span aria-hidden="true">+</span></button></div></article>`).join('')}</div></section>` : '');
    const known = entries.reduce((total, entry) => total + (entry.product.price || 0) * entry.quantity, 0);
    const unknown = entries.some(entry => entry.product.price == null);
    const hasKnownPrice = entries.some(entry => entry.product.price != null);
    const lines = entries.map(({ product, quantity }) => `- ${quantity} × ${product.name}${product.price == null ? ' (please confirm price)' : ` (${money(product.price)} each)`}`);
    const message = `Assalamu alaikum Casa Hijama, I would like to enquire about these products:\n\n${lines.join('\n')}\n\n${known ? `Known-price subtotal: ${money(known)}${unknown ? ' (excluding items awaiting a price)' : ''}\n` : ''}Please confirm availability, prices and collection or delivery arrangements. I understand this is an enquiry until confirmed.`;
    const url = `https://wa.me/27838738292?text=${encodeURIComponent(message)}`;
    footer.innerHTML = `<div class="shop-bag-total"><span>${hasKnownPrice ? 'Known-price subtotal' : 'Pricing'}</span><strong>${hasKnownPrice ? money(known) : 'To confirm'}</strong></div>${unknown ? '<p>Items awaiting a confirmed price are excluded from the subtotal.</p>' : ''}<p>Availability and final prices are confirmed by Casa Hijama. Sending this enquiry does not place or pay for an order.</p><a class="button button-primary shop-whatsapp" href="${url}" target="_blank" rel="noopener">Enquire on WhatsApp <span aria-hidden="true">↗</span></a><a class="shop-fallback-link" href="${url}" target="_blank" rel="noopener">If WhatsApp does not open, use this link ↗</a>`;
  };
  const add = id => {
    const product = products.find(item => item.id === Number(id));
    if (!product) return;
    bag[id] = Math.min(99, (bag[id] || 0) + 1);
    saveBag(); renderBag(); announce(`${product.name} added to your enquiry bag. ${count()} items total.`);
    document.querySelector('.shop-bag-trigger').classList.remove('shop-bag-pop');
    requestAnimationFrame(() => document.querySelector('.shop-bag-trigger').classList.add('shop-bag-pop'));
  };
  const openProduct = (id, trigger) => {
    const product = products.find(item => item.id === Number(id));
    if (!product) return;
    focusReturn = trigger;
    productDialog.querySelector('.modal-content').innerHTML = `<div class="modal-image">${productStage(product, 'shop-detail-stage')}</div><div class="modal-text"><span class="eyebrow">${labels[product.cat]} / THE WELLNESS EDIT</span><h2>${escapeHtml(product.name)}</h2><p>${escapeHtml(product.desc)}</p><div class="shop-detail-bottom"><strong>${escapeHtml(product.priceLabel)}</strong><p>Ask our team to confirm availability and product details.</p><button class="button button-primary" type="button" data-shop-add="${product.id}">Add to enquiry bag <span aria-hidden="true">+</span></button><button class="shop-detail-bag" type="button">View enquiry bag <span aria-hidden="true">↗</span></button></div></div>`;
    productDialog.showModal();
  };
  const openBag = trigger => {
    focusReturn = trigger;
    if (productDialog.open) productDialog.close();
    renderBag(); bagDialog.showModal();
  };
  const reset = () => {
    category = 'all'; sort = 'default'; search.value = '';
    document.querySelector('#sort-products').value = 'default';
    document.querySelectorAll('.filter').forEach(button => { const active = button.dataset.category === 'all'; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    renderProducts(); search.focus();
  };

  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    document.querySelectorAll('.filter').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    renderProducts();
  }));
  search.addEventListener('input', renderProducts);
  document.querySelector('#sort-products').addEventListener('change', event => { sort = event.target.value; renderProducts(); });
  document.querySelector('.shop-clear').addEventListener('click', reset);
  document.querySelector('.shop-reset').addEventListener('click', reset);
  document.addEventListener('keydown', event => { if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !productDialog.open && !bagDialog.open) { event.preventDefault(); search.focus(); } });
  document.querySelector('.shop-page').addEventListener('click', event => {
    const scrollButton = event.target.closest('[data-shop-scroll]');
    if (scrollButton) { const rail = scrollButton.closest('.shop-band-shelf').querySelector('.shop-band-rail'); rail.scrollBy({ left: (scrollButton.dataset.shopScroll === 'next' ? 1 : -1) * Math.max(rail.clientWidth * .75, 220), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); return; }
    const addButton = event.target.closest('[data-shop-add]');
    if (addButton) { add(addButton.dataset.shopAdd); return; }
    const openButton = event.target.closest('[data-shop-open]');
    if (openButton) openProduct(openButton.dataset.shopOpen, openButton);
  });
  document.querySelector('.shop-bag-trigger').addEventListener('click', event => openBag(event.currentTarget));
  productDialog.addEventListener('click', event => {
    const addButton = event.target.closest('[data-shop-add]');
    if (addButton) { add(addButton.dataset.shopAdd); productDialog.close(); openBag(document.querySelector('.shop-bag-trigger')); return; }
    if (event.target.closest('.modal-close')) productDialog.close();
    if (event.target.closest('.shop-detail-bag')) openBag(document.querySelector('.shop-bag-trigger'));
    if (event.target === productDialog) productDialog.close();
  });
  bagDialog.addEventListener('click', event => {
    if (event.target.closest('.shop-bag-close') || event.target === bagDialog) { bagDialog.close(); return; }
    if (event.target.closest('.shop-continue')) { bagDialog.close(); document.querySelector('#shop-discover').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); search.focus({ preventScroll: true }); return; }
    const relatedAdd = event.target.closest('[data-shop-add]');
    if (relatedAdd) { add(relatedAdd.dataset.shopAdd); bagDialog.querySelector('.shop-bag-close').focus(); return; }
    const remove = event.target.closest('[data-shop-remove]');
    if (remove) { const name = products.find(product => product.id === Number(remove.dataset.shopRemove))?.name; delete bag[remove.dataset.shopRemove]; saveBag(); renderBag(); bagDialog.querySelector('.shop-bag-close').focus(); announce(`${name} removed from your enquiry bag.`); return; }
    const quantity = event.target.closest('[data-shop-qty]');
    if (quantity) { const id = quantity.dataset.shopQty; const direction = quantity.dataset.direction; bag[id] = Math.min(99, (bag[id] || 0) + Number(direction)); if (bag[id] <= 0) delete bag[id]; saveBag(); renderBag(); (bag[id] ? bagDialog.querySelector(`[data-shop-qty="${id}"][data-direction="${direction}"]`) : bagDialog.querySelector('.shop-bag-close'))?.focus(); announce(`Enquiry bag updated. ${count()} items total.`); }
  });
  productDialog.addEventListener('close', () => { if (focusReturn?.isConnected && !bagDialog.open) focusReturn.focus(); });
  bagDialog.addEventListener('close', () => { if (focusReturn?.isConnected) focusReturn.focus(); });
  renderProducts(); renderBag();
}
