import './body-journey.css';

const regions = [
  {
    number: '01', side: 'front', label: 'Neck & shoulders',
    title: 'Where tension gathers.',
    text: 'Stiffness around the neck and shoulders is a common reason people ask about cupping. Your therapist can discuss the area, your symptoms and whether a session is suitable for you.'
  },
  {
    number: '02', side: 'back', label: 'Upper back',
    title: 'Make room to unwind.',
    text: 'Dry cupping uses suction on the skin without piercing it. Some people seek it for upper-back discomfort, but research has not established reliable relief for everyone.'
  },
  {
    number: '03', side: 'back', label: 'Lower back',
    title: 'Care begins with a conversation.',
    text: 'Wet cupping includes small skin punctures; dry cupping does not. Tell your therapist about ongoing lower-back pain and any health concerns before deciding on treatment.'
  }
];

const question = (name, legend, answers) => `<fieldset class="bj-question"><legend>${legend}</legend><div class="bj-options">${answers.map(([value, label]) => `<label><input type="radio" name="${name}" value="${value}" required><span>${label}</span></label>`).join('')}</div></fieldset>`;

export function bodyJourney() {
  return `<section class="bj" id="body-guide" aria-labelledby="bj-title" data-region="0" data-side="front">
    <div class="bj-scroll"><div class="bj-stage"><div class="bj-shell wrap">
      <div class="bj-intro">
        <span class="bj-eyebrow"><span class="bj-eyebrow-line"></span> A closer look at cupping</span>
        <h2 id="bj-title">Listen to<br><em>your body.</em></h2>
        <p>Explore the areas people often bring to a session. These points are a conversation guide, not treatment placement or a diagnosis.</p>
        <span class="bj-scroll-hint" aria-hidden="true">Scroll to explore <span>↓</span></span>
      </div>
      <div class="bj-visual-wrap">
        <div class="bj-visual" role="group" aria-label="Illustrated body areas">
          <div class="bj-focus" aria-hidden="true"></div>
          <div class="bj-webgl-host" aria-hidden="true"></div>
          <div class="bj-3d-tags" aria-hidden="true"><span data-region="0">NECK / SHOULDERS</span><span data-region="1">UPPER BACK</span><span data-region="2">LOWER BACK</span></div>
          <div class="bj-figure">
            <div class="bj-face bj-front" aria-hidden="false">
              <img src="/assets/body-map-front.webp" alt="" loading="lazy" width="1024" height="1536">
              <button type="button" class="bj-hotspot bj-hotspot-0 is-active" data-region="0" aria-label="Explore neck and shoulders"><i aria-hidden="true"></i></button>
              <span class="bj-locator bj-locator-0">NECK / SHOULDERS</span>
            </div>
            <div class="bj-face bj-back" aria-hidden="true">
              <img src="/assets/body-map-back.webp" alt="" loading="lazy" width="1024" height="1536">
              <button type="button" class="bj-hotspot bj-hotspot-1" data-region="1" tabindex="-1" aria-label="Explore upper back"><i aria-hidden="true"></i></button>
              <button type="button" class="bj-hotspot bj-hotspot-2" data-region="2" tabindex="-1" aria-label="Explore lower back"><i aria-hidden="true"></i></button>
              <span class="bj-locator bj-locator-1">UPPER BACK</span><span class="bj-locator bj-locator-2">LOWER BACK</span>
            </div>
          </div>
        </div>
        <div class="bj-view-controls"><span class="bj-view-label">FRONT VIEW</span><button class="bj-rotate" type="button" aria-label="Show back view">Turn figure <span aria-hidden="true">↻</span></button></div>
      </div>
      <div class="bj-content">
        <div class="bj-counter"><span class="bj-current">01</span><span class="bj-counter-line"></span><span>03</span></div>
        <div class="bj-panels" aria-live="polite">${regions.map((region, index) => `<article class="bj-panel${index === 0 ? ' is-active' : ''}" data-region="${index}"><span class="bj-region-label">${region.label}</span><h3>${region.title}</h3><p>${region.text}</p></article>`).join('')}</div>
        <div class="bj-region-controls" role="group" aria-label="Choose a body area">${regions.map((region, index) => `<button class="bj-region-button${index === 0 ? ' is-active' : ''}" type="button" data-region="${index}" aria-pressed="${index === 0}"><span class="bj-button-index">${region.number}</span>${region.label}</button>`).join('')}</div>
        <button class="bj-checkin-trigger" type="button">Explore this area <span aria-hidden="true">↗</span></button>
        <a class="bj-treatment-link" href="/cupping-therapy">Explore treatments <span aria-hidden="true">↗</span></a>
      </div>
    </div></div></div>
    <div class="bj-care wrap"><div><span class="bj-care-label">The evidence &amp; your safety</span><p>Cupping may reduce pain, but the evidence is not strong. Temporary skin marks are common; burns, scars and infection can occur. Speak with a clinician about persistent or worsening pain, and tell your therapist about your health before treatment.</p></div><a href="https://www.nccih.nih.gov/health/cupping" target="_blank" rel="noopener noreferrer">Read the NIH cupping guide <span aria-hidden="true">↗</span></a></div>
    <dialog class="bj-dialog" aria-labelledby="bj-dialog-title"><div class="bj-dialog-inner"><button class="bj-dialog-close" type="button" aria-label="Close body area check-in">×</button><span class="bj-dialog-eyebrow">PRIVATE, ON-PAGE CHECK-IN · <span class="bj-dialog-region">NECK &amp; SHOULDERS</span></span><h3 id="bj-dialog-title">Prepare for a conversation.</h3><p class="bj-dialog-intro">Four short questions can help you describe what you want to discuss. Answers stay on this page and are not used to diagnose or recommend treatment.</p>
      <form class="bj-intake-form">
        ${question('duration', '01 / How long have you been noticing this?', [['Under a week','Under a week'],['1–4 weeks','1–4 weeks'],['Longer than a month','Longer than a month'],['Prefer not to say','Prefer not to say']])}
        ${question('symptoms', '02 / What would you like to talk about?', [['Aches or stiffness','Aches or stiffness'],['A sense of tension','A sense of tension'],['Something else / unsure','Something else / unsure']])}
        ${question('goal', '03 / What would be most useful to you?', [['Understand my options','Understand my options'],['Ask about a restorative session','Ask about a restorative session'],['Speak with a therapist first','Speak with a therapist first']])}
        ${question('safety', '04 / Is there a safety concern to mention?', [['Recent injury, skin concern, numbness or weakness','Recent injury, skin concern, numbness or weakness'],['None of these','None of these'],['Unsure / prefer not to say','Unsure / prefer not to say']])}
        <button class="bj-review" type="submit">Review conversation notes <span aria-hidden="true">↗</span></button>
      </form>
      <div class="bj-intake-result" hidden aria-live="polite"><h4 tabindex="-1">Your conversation notes</h4><ul class="bj-answer-summary"></ul><p>Share these details with a clinician or therapist. Cupping may reduce pain, but the evidence is weak. Wet cupping pierces the skin; dry cupping does not. Ask about suitability, hygiene and possible side effects. New, worsening or persistent symptoms deserve a clinician’s assessment.</p><div class="bj-product-note"><span>PRODUCTS TO ASK ABOUT</span><p>For an at-home comfort ritual, ask the Casa Hijama team about Kalonji Massage Oil or Castor Oil 100ml. These are not proven pain treatments or substitutes for care.</p><a href="/products">Browse the shop <span aria-hidden="true">↗</span></a></div></div>
    </div></dialog>
  </section>`;
}

async function createMannequin(section, onHotspot) {
  const THREE = await import('three');
  const host = section.querySelector('.bj-webgl-host');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 50);
  scene.add(new THREE.HemisphereLight(0xe6fff0, 0x203f37, 2.1));
  const key = new THREE.DirectionalLight(0xd4ffd5, 2.8);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x8de6c7, 3.2);
  rim.position.set(3, 2, -5);
  scene.add(rim);

  const body = new THREE.Group();
  scene.add(body);
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0x94bdab, metalness: .12, roughness: .38,
    clearcoat: .43, clearcoatRoughness: .3
  });
  const joint = new THREE.MeshPhysicalMaterial({
    color: 0xa3c9b5, metalness: .12, roughness: .39, clearcoat: .35
  });
  const sphere = new THREE.SphereGeometry(1, 24, 16);
  function ellipsoid(x, y, z, sx, sy, sz, material = skin) {
    const mesh = new THREE.Mesh(sphere, material);
    mesh.position.set(x, y, z);
    mesh.scale.set(sx, sy, sz);
    body.add(mesh);
    return mesh;
  }
  function organicLimb(points, radii, material = skin) {
    const curve = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)), false, 'centripetal');
    const lengthSegments = 32;
    const radialSegments = 20;
    const geometry = new THREE.TubeGeometry(curve, lengthSegments, 1, radialSegments, false);
    const position = geometry.getAttribute('position');
    for (let i = 0; i <= lengthSegments; i++) {
      const t = i / lengthSegments;
      const center = curve.getPointAt(t);
      const part = Math.min(radii.length - 2, Math.floor(t * (radii.length - 1)));
      const local = t * (radii.length - 1) - part;
      const smooth = local * local * (3 - 2 * local);
      const radius = THREE.MathUtils.lerp(radii[part], radii[part + 1], smooth);
      for (let j = 0; j <= radialSegments; j++) {
        const index = i * (radialSegments + 1) + j;
        const offset = new THREE.Vector3(position.getX(index), position.getY(index), position.getZ(index)).sub(center).multiplyScalar(radius).add(center);
        position.setXYZ(index, offset.x, offset.y, offset.z);
      }
    }
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, material);
    body.add(mesh);
    return mesh;
  }

  // A continuous elliptical torso keeps the figure human-shaped without facial detail.
  const crossSections = [
    [1.58, .18, .18], [1.42, .39, .24], [1.26, .61, .3],
    [1.02, .57, .34], [.7, .43, .28], [.38, .36, .24],
    [.1, .44, .29], [-.27, .37, .27]
  ];
  const ringSides = 32;
  const vertices = [];
  const triangles = [];
  for (let sectionIndex = 0; sectionIndex < crossSections.length - 1; sectionIndex++) {
    const from = crossSections[sectionIndex];
    const to = crossSections[sectionIndex + 1];
    for (let step = 0; step < 5; step++) {
      const raw = step / 5;
      const t = raw * raw * (3 - 2 * raw);
      const y = THREE.MathUtils.lerp(from[0], to[0], t);
      const width = THREE.MathUtils.lerp(from[1], to[1], t);
      const depth = THREE.MathUtils.lerp(from[2], to[2], t);
      for (let j = 0; j <= ringSides; j++) {
        const a = j / ringSides * Math.PI * 2;
        vertices.push(Math.cos(a) * width, y, Math.sin(a) * depth);
      }
    }
  }
  const last = crossSections.at(-1);
  for (let j = 0; j <= ringSides; j++) {
    const a = j / ringSides * Math.PI * 2;
    vertices.push(Math.cos(a) * last[1], last[0], Math.sin(a) * last[2]);
  }
  const ringCount = vertices.length / 3 / (ringSides + 1);
  for (let i = 0; i < ringCount - 1; i++) {
    for (let j = 0; j < ringSides; j++) {
      const a = i * (ringSides + 1) + j;
      const b = a + ringSides + 1;
      triangles.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
  const torsoGeometry = new THREE.BufferGeometry();
  torsoGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  torsoGeometry.setIndex(triangles);
  torsoGeometry.computeVertexNormals();
  body.add(new THREE.Mesh(torsoGeometry, skin));

  organicLimb([[0, 1.43, 0], [0, 1.58, 0], [0, 1.79, 0]], [.19, .15, .14], joint);
  ellipsoid(0, 2.03, 0, .32, .4, .27, joint);
  ellipsoid(0, -.22, 0, .44, .3, .29);
  for (const side of [-1, 1]) {
    organicLimb([
      [side * .44, 1.27, 0], [side * .61, 1.17, 0],
      [side * .72, .65, 0], [side * .77, .33, 0],
      [side * .83, .05, 0], [side * .89, -.48, .01]
    ], [.16, .18, .155, .12, .105, .078]);
    ellipsoid(side * .91, -.63, .01, .1, .19, .075, joint);
    organicLimb([
      [side * .19, -.26, 0], [side * .27, -.48, 0],
      [side * .30, -.83, 0], [side * .31, -1.28, 0],
      [side * .31, -1.57, 0], [side * .31, -2.25, 0]
    ], [.2, .27, .235, .18, .165, .105]);
    ellipsoid(side * .31, -2.38, .16, .15, .09, .31, joint);
  }
  const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x9ac59f, transparent: true, opacity: .22, depthWrite: false });
  for (const radius of [1.0, 1.35]) {
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(radius, .006, 6, 72), orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    orbit.position.y = -2.5;
    scene.add(orbit);
  }

  const markers = [
    new THREE.Vector3(.42, 1.29, .28),
    new THREE.Vector3(.03, .95, -.35),
    new THREE.Vector3(.03, .18, -.3)
  ];
  const markerGroups = [];
  const pickMeshes = [];
  markers.forEach((point, index) => {
    const group = new THREE.Group();
    group.position.copy(point);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(.17, 16, 12), new THREE.MeshBasicMaterial({
      color: 0xd8f3a7, transparent: true, opacity: .22, depthWrite: false
    }));
    const core = new THREE.Mesh(new THREE.SphereGeometry(.075, 16, 12), new THREE.MeshBasicMaterial({ color: 0xe8ffc3 }));
    const pick = new THREE.Mesh(new THREE.SphereGeometry(.29, 12, 8), new THREE.MeshBasicMaterial({
      transparent: true, opacity: 0, depthWrite: false
    }));
    pick.userData.region = index;
    group.add(halo, core, pick);
    body.add(group);
    markerGroups.push(group);
    pickMeshes.push(pick);
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const projected = new THREE.Vector3();
  const tags = [...section.querySelectorAll('.bj-3d-tags span')];
  let latestProgress = 0;
  let latestRegion = 0;
  function ease(a, b, x) {
    const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  }
  function render(progress = latestProgress, region = latestRegion) {
    latestProgress = progress;
    latestRegion = region;
    const turning = ease(.22, .49, progress);
    const upper = ease(.23, .53, progress);
    const lower = ease(.57, .85, progress);
    body.rotation.y = Math.PI * turning;
    camera.position.set(0, .5 * upper - .65 * lower, 10.3 - 1.25 * upper - .15 * lower);
    camera.lookAt(0, .48 * upper - .6 * lower, 0);
    const visibleSide = progress < .38 ? 'front' : 'back';
    markerGroups.forEach((group, i) => {
      group.visible = regions[i].side === visibleSide;
      group.scale.setScalar(i === region ? 1.18 : .72);
      const halo = group.children[0];
      halo.material.opacity = i === region ? .35 : .08;
    });
    body.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);
    tags.forEach((tag, i) => {
      tag.hidden = !markerGroups[i].visible;
      if (tag.hidden) return;
      markerGroups[i].getWorldPosition(projected).project(camera);
      tag.style.left = `${(projected.x + 1) * 50}%`;
      tag.style.top = `${(1 - projected.y) * 50}%`;
      tag.classList.toggle('is-active', i === region);
    });
    renderer.render(scene, camera);
  }
  function resize() {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    render();
  }
  function pick(event) {
    const box = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - box.left) / box.width) * 2 - 1, -((event.clientY - box.top) / box.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(pickMeshes, false).find(hit => hit.object.parent.visible)?.object.userData.region;
  }
  function click(event) {
    const index = pick(event);
    if (index !== undefined) onHotspot(index, renderer.domElement);
  }
  function hover(event) { renderer.domElement.style.cursor = pick(event) === undefined ? 'default' : 'pointer'; }
  function contextLost(event) {
    event.preventDefault();
    section.classList.remove('bj--webgl');
  }
  renderer.domElement.addEventListener('click', click);
  renderer.domElement.addEventListener('pointermove', hover);
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  section.classList.add('bj--webgl');
  resize();
  return {
    render,
    dispose() {
      observer.disconnect();
      renderer.domElement.removeEventListener('click', click);
      renderer.domElement.removeEventListener('pointermove', hover);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      scene.traverse(object => {
        if (object.geometry && object.geometry !== sphere) object.geometry.dispose();
        if (object.material && !Array.isArray(object.material)) object.material.dispose();
      });
      sphere.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      section.classList.remove('bj--webgl');
    }
  };
}

export function initBodyJourney() {
  const section = document.querySelector('.bj');
  if (!section) return () => {};
  const scrollArea = section.querySelector('.bj-scroll');
  const stage = section.querySelector('.bj-stage');
  const buttons = [...section.querySelectorAll('.bj-region-button')];
  const hotspots = [...section.querySelectorAll('.bj-hotspot')];
  const panels = [...section.querySelectorAll('.bj-panel')];
  const faces = { front: section.querySelector('.bj-front'), back: section.querySelector('.bj-back') };
  const counter = section.querySelector('.bj-current');
  const viewLabel = section.querySelector('.bj-view-label');
  const rotate = section.querySelector('.bj-rotate');
  const dialog = section.querySelector('.bj-dialog');
  const form = section.querySelector('.bj-intake-form');
  const result = section.querySelector('.bj-intake-result');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let active = -1;
  let frame = 0;
  let trigger = null;
  let scene3d = null;
  let sceneLoad = null;
  let disposed = false;
  section.classList.add('bj--ready');

  async function ensureScene() {
    if (scene3d || sceneLoad) return;
    sceneLoad = createMannequin(section, openCheckIn);
    try {
      const created = await sceneLoad;
      if (disposed || reduce.matches) created?.dispose();
      else { scene3d = created; schedule(); }
    } catch {
      section.classList.remove('bj--webgl');
    } finally {
      sceneLoad = null;
    }
  }

  function setSide(side) {
    section.dataset.side = side;
    faces.front.setAttribute('aria-hidden', String(side !== 'front'));
    faces.back.setAttribute('aria-hidden', String(side !== 'back'));
    hotspots.forEach(point => point.tabIndex = regions[Number(point.dataset.region)].side === side ? 0 : -1);
    viewLabel.textContent = side === 'front' ? 'FRONT VIEW' : 'BACK VIEW';
    rotate.setAttribute('aria-label', side === 'front' ? 'Show back view' : 'Show front view');
  }

  function setActive(index, force = false) {
    if (index === active && !force) return;
    active = index;
    section.dataset.region = String(index);
    setSide(regions[index].side);
    counter.textContent = regions[index].number;
    buttons.forEach((button, i) => {
      button.classList.toggle('is-active', i === index);
      button.setAttribute('aria-pressed', String(i === index));
    });
    panels.forEach((panel, i) => {
      panel.classList.toggle('is-active', i === index);
      if (!reduce.matches) panel.setAttribute('aria-hidden', String(i !== index));
    });
    hotspots.forEach((point, i) => point.classList.toggle('is-active', i === index));
  }

  function update() {
    frame = 0;
    if (reduce.matches || document.hidden || dialog.open) return;
    const rect = scrollArea.getBoundingClientRect();
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const travel = Math.max(1, rect.height - stage.offsetHeight);
    const progress = Math.max(0, Math.min(1, (stickyTop - rect.top) / travel));
    const index = Math.min(2, Math.floor(progress * 3));
    setActive(index);
    if (rect.bottom > -innerHeight && rect.top < innerHeight * 2) scene3d?.render(progress, index);
  }

  function schedule() { if (!frame) frame = requestAnimationFrame(update); }

  function jumpTo(index) {
    if (reduce.matches) { setActive(index); return; }
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const travel = Math.max(1, scrollArea.offsetHeight - stage.offsetHeight);
    const top = scrollY + scrollArea.getBoundingClientRect().top - stickyTop;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, top + travel * ((index + .5) / 3));
    root.style.scrollBehavior = previousBehavior;
    setActive(index, true);
    scene3d?.render((index + .5) / 3, index);
  }

  function openCheckIn(index, source) {
    trigger = source;
    jumpTo(index);
    section.querySelector('.bj-dialog-region').textContent = regions[index].label.toUpperCase();
    form.reset();
    result.hidden = true;
    dialog.showModal();
  }

  function onPreferenceChange() {
    section.classList.toggle('bj--enhanced', !reduce.matches);
    panels.forEach(panel => panel.removeAttribute('aria-hidden'));
    if (reduce.matches) {
      scene3d?.dispose();
      scene3d = null;
      setActive(0, true);
    } else {
      ensureScene();
      active = -1;
      schedule();
    }
  }

  [...buttons, ...hotspots].forEach(button => button.addEventListener('click', () => openCheckIn(Number(button.dataset.region), button)));
  section.querySelector('.bj-checkin-trigger').addEventListener('click', event => openCheckIn(Math.max(0, active), event.currentTarget));
  rotate.addEventListener('click', () => jumpTo(section.dataset.side === 'front' ? 1 : 0));
  section.querySelector('.bj-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { trigger?.focus(); trigger = null; schedule(); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const answers = new FormData(form);
    const labels = ['Timeframe', 'What to discuss', 'Your goal', 'Safety context'];
    const keys = ['duration', 'symptoms', 'goal', 'safety'];
    const summary = section.querySelector('.bj-answer-summary');
    summary.replaceChildren(...keys.map((key, i) => {
      const item = document.createElement('li');
      const label = document.createElement('strong');
      label.textContent = `${labels[i]}: `;
      item.append(label, document.createTextNode(String(answers.get(key) || 'Not selected')));
      return item;
    }));
    result.hidden = false;
    result.querySelector('h4').focus();
    result.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'nearest' });
  });

  reduce.addEventListener('change', onPreferenceChange);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  document.addEventListener('visibilitychange', schedule);
  onPreferenceChange();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    scene3d?.dispose();
    reduce.removeEventListener('change', onPreferenceChange);
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    document.removeEventListener('visibilitychange', schedule);
  };
}
