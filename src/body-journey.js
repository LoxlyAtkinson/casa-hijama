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
          <div class="bj-zoom-controls" role="group" aria-label="Body figure zoom"><span>ZOOM</span><button type="button" data-zoom="out" aria-label="Zoom out body figure">−</button><output class="bj-zoom-level" aria-live="polite">100%</output><button type="button" data-zoom="in" aria-label="Zoom in body figure">+</button><button type="button" data-zoom="reset" aria-label="Reset body figure zoom">↺</button></div>
          <div class="bj-figure">
            <div class="bj-face bj-front" aria-hidden="false">
              <img src="${import.meta.env.BASE_URL}assets/body-map-front.webp" alt="" loading="lazy" width="1024" height="1536">
              <button type="button" class="bj-hotspot bj-hotspot-0 is-active" data-region="0" aria-label="Explore neck and shoulders"><i aria-hidden="true"></i></button>
              <span class="bj-locator bj-locator-0">NECK / SHOULDERS</span>
            </div>
            <div class="bj-face bj-back" aria-hidden="true">
              <img src="${import.meta.env.BASE_URL}assets/body-map-back.webp" alt="" loading="lazy" width="1024" height="1536">
              <button type="button" class="bj-hotspot bj-hotspot-1" data-region="1" tabindex="-1" aria-label="Explore upper back"><i aria-hidden="true"></i></button>
              <button type="button" class="bj-hotspot bj-hotspot-2" data-region="2" tabindex="-1" aria-label="Explore lower back"><i aria-hidden="true"></i></button>
              <span class="bj-locator bj-locator-1">UPPER BACK</span><span class="bj-locator bj-locator-2">LOWER BACK</span>
            </div>
          </div>
        </div>
        <div class="bj-view-controls"><span class="bj-view-label">FRONT VIEW</span><span class="bj-drag-hint">Drag the body to look around</span><button class="bj-rotate" type="button" aria-label="Show back view">Turn figure <span aria-hidden="true">↻</span></button></div>
      </div>
      <div class="bj-content">
        <div class="bj-counter"><span class="bj-current">01</span><span class="bj-counter-line"></span><span>03</span></div>
        <div class="bj-panels" aria-live="polite">${regions.map((region, index) => `<article class="bj-panel${index === 0 ? ' is-active' : ''}" data-region="${index}"><span class="bj-region-label">${region.label}</span><h3>${region.title}</h3><p>${region.text}</p></article>`).join('')}</div>
        <div class="bj-region-controls" role="group" aria-label="Choose a body area">${regions.map((region, index) => `<button class="bj-region-button${index === 0 ? ' is-active' : ''}" type="button" data-region="${index}" aria-pressed="${index === 0}"><span class="bj-button-index">${region.number}</span>${region.label}</button>`).join('')}</div>
        <button class="bj-checkin-trigger" type="button">Explore this area <span aria-hidden="true">↗</span></button>
        <a class="bj-treatment-link" href="${import.meta.env.BASE_URL}cupping-therapy">Explore treatments <span aria-hidden="true">↗</span></a>
      </div>
    </div></div></div>
    <div class="bj-care wrap"><div><span class="bj-care-label">The evidence &amp; your safety</span><p>Cupping may reduce pain, but the evidence is not strong. Temporary skin marks are common; burns, scars and infection can occur. Speak with a clinician about persistent or worsening pain, and tell your therapist about your health before treatment.</p><a class="bj-model-credit" href="https://hubmapconsortium.github.io/ccf/pages/ccf-3d-reference-library.html" target="_blank" rel="noopener noreferrer">3D body: HuBMAP CCF · CC BY 4.0 ↗</a></div><a href="https://www.nccih.nih.gov/health/cupping" target="_blank" rel="noopener noreferrer">Read the NIH cupping guide <span aria-hidden="true">↗</span></a></div>
    <dialog class="bj-dialog" aria-labelledby="bj-dialog-title"><div class="bj-dialog-inner"><button class="bj-dialog-close" type="button" aria-label="Close body area check-in">×</button><span class="bj-dialog-eyebrow">PRIVATE, ON-PAGE CHECK-IN · <span class="bj-dialog-region">NECK &amp; SHOULDERS</span></span><h3 id="bj-dialog-title">Prepare for a conversation.</h3><p class="bj-dialog-intro">Four short questions can help you describe what you want to discuss. Answers stay on this page and are not used to diagnose or recommend treatment.</p>
      <form class="bj-intake-form">
        ${question('duration', '01 / How long have you been noticing this?', [['Under a week','Under a week'],['1–4 weeks','1–4 weeks'],['Longer than a month','Longer than a month'],['Prefer not to say','Prefer not to say']])}
        ${question('symptoms', '02 / What would you like to talk about?', [['Aches or stiffness','Aches or stiffness'],['A sense of tension','A sense of tension'],['Something else / unsure','Something else / unsure']])}
        ${question('goal', '03 / What would be most useful to you?', [['Understand my options','Understand my options'],['Ask about a restorative session','Ask about a restorative session'],['Speak with a therapist first','Speak with a therapist first']])}
        ${question('safety', '04 / Is there a safety concern to mention?', [['Recent injury, skin concern, numbness or weakness','Recent injury, skin concern, numbness or weakness'],['None of these','None of these'],['Unsure / prefer not to say','Unsure / prefer not to say']])}
        <button class="bj-review" type="submit">Review conversation notes <span aria-hidden="true">↗</span></button>
      </form>
      <div class="bj-intake-result" hidden aria-live="polite"><h4 tabindex="-1">Your conversation notes</h4><ul class="bj-answer-summary"></ul><p>Share these details with a clinician or therapist. Cupping may reduce pain, but the evidence is weak. Wet cupping pierces the skin; dry cupping does not. Ask about suitability, hygiene and possible side effects. New, worsening or persistent symptoms deserve a clinician’s assessment.</p><div class="bj-product-note"><span>PRODUCTS TO ASK ABOUT</span><p>For an at-home comfort ritual, ask the Casa Hijama team about Kalonji Massage Oil or Castor Oil 100ml. These are not proven pain treatments or substitutes for care.</p><a href="${import.meta.env.BASE_URL}products">Browse the shop <span aria-hidden="true">↗</span></a></div><button class="bj-edit" type="button">Edit answers <span aria-hidden="true">↶</span></button></div>
    </div></dialog>
  </section>`;
}

async function createMannequin(section, onHotspot, onOrbit) {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  // Fetch only when the guide approaches the viewport. The still remains visible
  // until both the geometry and its first WebGL frame are ready.
  let gltf;
  try {
    gltf = await new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}assets/body-hubmap-skin.glb`);
  } catch {
    return null;
  }
  // The companion sacrum shares the exterior's coordinate system. A failed
  // detail fetch must never prevent the main figure or its controls loading.
  const pelvis = await new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}assets/body-hubmap-pelvis.glb`).catch(() => null);
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
  renderer.toneMappingExposure = 1.2;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 50);
  scene.add(new THREE.HemisphereLight(0x9cefff, 0x05283f, 1.5));
  const key = new THREE.DirectionalLight(0x68dfff, 2.2);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x55cfff, 3.0);
  rim.position.set(3, 2, -5);
  scene.add(rim);

  const body = new THREE.Group();
  scene.add(body);
  const skin = new THREE.ShaderMaterial({
    uniforms: { uRegion: { value: new THREE.Vector3(.42,1.29,.28) }, uFocus: { value: 0 } },
    transparent: true, depthWrite: false, depthTest: true, side: THREE.FrontSide,
    vertexShader: `varying vec3 vNormal; varying vec3 vObjectNormal; varying vec3 vPosition; varying vec3 vEye;
      void main() { vNormal = normalize(normalMatrix * normal); vObjectNormal = normal; vPosition = position;
        vec4 view = modelViewMatrix * vec4(position, 1.0); vEye = normalize(-view.xyz);
        gl_Position = projectionMatrix * view; }`,
    fragmentShader: `varying vec3 vNormal; varying vec3 vObjectNormal; varying vec3 vPosition; varying vec3 vEye;
      uniform vec3 uRegion; uniform float uFocus;
      void main() {
        float facing = abs(dot(normalize(vNormal), normalize(vEye)));
        float rim = pow(1.0 - facing, 1.45);
        float diffuse = max(0.0, dot(normalize(vNormal), normalize(vec3(-0.55,0.7,0.7))));
        float coolDepth = 0.46 + 0.54 * diffuse;
        float breath = 0.5 + 0.5 * sin(vPosition.y * 2.6 + vPosition.x * 4.0);
        vec3 blue = mix(vec3(0.20,0.77,0.94), vec3(0.45,0.97,1.0), coolDepth);
        blue += vec3(0.012,0.025,0.035) * breath;
        vec3 colour = mix(blue, vec3(0.85,1.0,1.0), rim * 0.94);
        // Fine scan contours follow the actual 3D surface through rotation.
        float alongX = pow(1.0 - abs(sin(vPosition.x * 12.0)), 44.0);
        float alongZ = pow(1.0 - abs(sin(vPosition.z * 12.0)), 44.0);
        float across = pow(1.0 - abs(sin(vPosition.y * 12.0)), 44.0);
        float grid = max(mix(alongX, alongZ, abs(vObjectNormal.x)), across);
        float gridMask = smoothstep(-1.5,-.95,vPosition.y) * (1.0 - smoothstep(1.55,1.76,vPosition.y));
        colour = mix(colour, vec3(0.78,1.0,1.0), grid * gridMask * .62);
        // Fine, low-contrast cross sections and curved torso ribs suggest a
        // luminous scan. All coordinates are local to the turning 3D surface.
        float torso = smoothstep(.57,.72,vPosition.y) * (1.0 - smoothstep(1.42,1.57,vPosition.y));
        float side = smoothstep(.02,.11,abs(vPosition.x)) * (1.0 - smoothstep(.37,.49,abs(vPosition.x)));
        float faceMask = smoothstep(.13,.25,abs(vPosition.z));
        float ribPhase = (vPosition.y + .12 * abs(vPosition.x) + .025 * sin(vPosition.x * 13.0)) * 39.0;
        float ribs = pow(1.0 - abs(sin(ribPhase)), 36.0) * torso * side * faceMask;
        float sternum = (1.0 - smoothstep(.008,.034,abs(vPosition.x)))
          * smoothstep(.80,.96,vPosition.y) * (1.0 - smoothstep(1.39,1.52,vPosition.y))
          * smoothstep(.15,.27,vPosition.z);
        float fine = pow(1.0 - abs(sin(vPosition.y * 71.0)), 66.0)
          * (1.0 - smoothstep(1.68,1.85,vPosition.y)) * .13;
        float scanDetail = clamp(ribs * .32 + sternum * .20 + fine, 0.0, .42);
        colour = mix(colour, vec3(.78,1.0,1.0), scanDetail);
        vec3 fromFocus = (vPosition - uRegion) / vec3(0.28,0.28,0.35);
        float warmth = exp(-dot(fromFocus,fromFocus) * 1.35);
         colour = mix(colour, vec3(1.0,0.12,0.30), warmth * (0.60 + 0.26*uFocus));
         // A broad, feathered pelvic shadow keeps the scan comfortable at every angle.
         vec3 pelvic = (vPosition - vec3(0.0,-0.48,0.10)) / vec3(0.38,0.45,0.48);
         float veil = exp(-dot(pelvic,pelvic) * 1.25);
         colour = mix(colour, vec3(0.015,0.22,0.32), veil * 0.72);
         float alpha = 0.53 + 0.16 * diffuse + rim * 0.30 + grid * gridMask * 0.10 + warmth * 0.12 + scanDetail * .12;
         alpha *= 1.0 - veil * 0.40;
         gl_FragColor = vec4(colour, min(0.93, alpha));
      }`
  });
  // HuBMAP v1.2 Visible Human male skin. Its original metre-scale Y-up mesh is
  // baked into this guide's established marker/camera coordinates.
  let sourceMesh;
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse(object => { if (object.isMesh && !sourceMesh) sourceMesh = object; });
  if (!sourceMesh) { renderer.dispose(); renderer.domElement.remove(); return null; }
  const bodyGeometry = sourceMesh.geometry.clone();
  bodyGeometry.applyMatrix4(sourceMesh.matrixWorld);
  bodyGeometry.scale(2.75, 2.75, 2.75);
  bodyGeometry.translate(0, -.23, 0);
  // Smooth the source's explicit anterior pelvic detail into a neutral scan
  // silhouette. The same geometry remains a continuous, draggable 3D mesh.
  const positions = bodyGeometry.getAttribute('position');
  const smooth = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i);
    const center = 1 - smooth(.08, .24, Math.abs(x));
    const vertical = smooth(-1.07, -.87, y) * (1 - smooth(-.35, -.23, y));
    const flatten = center * vertical;
    if (flatten > 0 && z > .035) positions.setZ(i, THREE.MathUtils.lerp(z, .035, flatten * .97));
    const face = smooth(1.70,1.85,y) * (1 - smooth(2.13,2.28,y)) * (1 - smooth(.13,.28,Math.abs(x)));
    if (face > 0 && z > .13) positions.setZ(i, THREE.MathUtils.lerp(positions.getZ(i), .265, face * .84));
  }
  positions.needsUpdate = true;
  bodyGeometry.computeVertexNormals();
  // A depth-only first pass leaves exactly the nearest surface for the cyan
  // shader. Transparent far-side limbs cannot create jagged double images.
  const depthSurface = new THREE.Mesh(bodyGeometry, new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: true, side: THREE.FrontSide }));
  depthSurface.renderOrder = 0;
  const scanSurface = new THREE.Mesh(bodyGeometry, skin);
  scanSurface.renderOrder = 1;
  const outlineSurface = new THREE.Mesh(bodyGeometry, new THREE.ShaderMaterial({
    side: THREE.FrontSide, transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, depthTest: false, toneMapped: false,
    vertexShader: `varying vec3 vNormal; varying vec3 vEye;
      void main(){vNormal=normalize(normalMatrix*normal);vec4 view=modelViewMatrix*vec4(position,1.0);vEye=normalize(-view.xyz);gl_Position=projectionMatrix*view;}`,
    fragmentShader: `varying vec3 vNormal; varying vec3 vEye;
      void main(){float edge=pow(1.0-abs(dot(normalize(vNormal),normalize(vEye))),2.2);gl_FragColor=vec4(.58,.96,1.0,edge*.58);}`
  }));
  outlineSurface.scale.setScalar(1.009);
  outlineSurface.renderOrder = 2;
  body.add(depthSurface, scanSurface, outlineSurface);
  // Quiet depth cues, kept behind the real exterior and intentionally restrained.
  const anatomy = new THREE.Group();
  body.add(anatomy);
  const anatomyViews = { front: new THREE.Group(), back: new THREE.Group() };
  anatomy.add(anatomyViews.front, anatomyViews.back);
  const regionalDetails = [];
  function anatomyCurve(view, region, points, radius = .012) {
    const material = new THREE.MeshBasicMaterial({ color: 0x9cebf6, transparent: true, opacity: .1, depthWrite: false, depthTest: false });
    const path = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(path, 32, radius, 7, false), material);
    mesh.renderOrder = 4;
    anatomyViews[view].add(mesh);
    regionalDetails.push({ material, region });
  }
  for (const side of [-1, 1]) {
    anatomyCurve('front', 0, [[side*.06,1.73,.17],[side*.11,1.60,.20],[side*.21,1.45,.27],[side*.35,1.34,.32]], .004);
    anatomyCurve('front', 0, [[0,1.36,.25],[side*.15,1.40,.32],[side*.34,1.34,.34],[side*.48,1.20,.29]], .006);
    anatomyCurve('front', 0, [[side*.03,1.31,.25],[side*.18,1.34,.30],[side*.34,1.28,.32],[side*.45,1.18,.28]], .004);
    anatomyCurve('front', 0, [[side*.41,1.35,.27],[side*.50,1.28,.28],[side*.51,1.17,.26],[side*.46,1.10,.29]], .005);
    anatomyCurve('back', 1, [[side*.14,1.23,-.29],[side*.40,1.23,-.32],[side*.52,1.05,-.28],[side*.32,.72,-.27],[side*.14,1.23,-.29]], .005);
    anatomyCurve('back', 1, [[side*.1,.49,-.27],[side*.20,.47,-.28],[side*.24,.39,-.26]], .006);
    anatomyCurve('back', 2, [[side*.34,.57,-.27],[side*.27,.40,-.30],[side*.25,.19,-.31],[side*.32,.02,-.28]], .004);
  }
  anatomyCurve('back', 2, [[0,.53,-.29],[.01,.36,-.32],[0,.19,-.33],[0,.03,-.33],[0,-.11,-.31]], .004);
  if (pelvis) {
    pelvis.scene.updateMatrixWorld(true);
    let sacrum;
    pelvis.scene.traverse(object => { if (object.isMesh && /sacrum/i.test(object.name)) sacrum = object; });
    if (sacrum) {
      const geometry = sacrum.geometry.clone();
      geometry.applyMatrix4(sacrum.matrixWorld);
      geometry.scale(2.75, 2.75, 2.75);
      geometry.translate(0, -.23, 0);
      const material = new THREE.MeshStandardMaterial({ color: 0x77cfe1, emissive: 0x123d52, metalness: .08, roughness: .42, transparent: true, opacity: .05, depthWrite: false, depthTest: false, side: THREE.FrontSide });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.renderOrder = 4;
      anatomyViews.back.add(mesh);
      regionalDetails.push({ material, region: 2, sacrum: true });
    }
  }
  const innerLineMaterial = new THREE.LineBasicMaterial({
    color: 0x9ce6f2, transparent: true, opacity: .20, depthWrite: false, depthTest: false
  });
  function strand(view, points) {
    const path = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(path.getPoints(28)), innerLineMaterial
    );
    line.renderOrder = 4;
    anatomyViews[view].add(line);
  }
  for (const [view, sign] of [['front', 1], ['back', -1]]) {
    strand(view, Array.from({ length: 14 }, (_, i) =>
      [.009 * Math.sin(i * .4), 1.48 - i * .105, sign * .10]));
    for (const side of [-1, 1]) {
      for (let row = 0; row < 5; row++) {
        const y = 1.22 - row * .13;
        strand(view, [[side * .025,y,sign * .10],
          [side * .18,y + .015,sign * .16],
          [side * .34,y - .04,sign * .13]]);
      }
    }
  }
  const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x40b7d6, transparent: true, opacity: .17, depthWrite: false });
  for (const radius of [1.0, 1.35]) {
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(radius, .006, 6, 72), orbitMaterial);
    orbit.rotation.x = Math.PI / 2;
    orbit.position.y = -2.5;
    scene.add(orbit);
  }

  const markers = [
    new THREE.Vector3(.43, 1.27, .37),
    new THREE.Vector3(.03, .93, -.39),
    new THREE.Vector3(.03, .16, -.37)
  ];
  const markerGroups = [];
  const pickMeshes = [];
  markers.forEach((point, index) => {
    const group = new THREE.Group();
    group.position.copy(point);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(.055, 20, 16), new THREE.MeshBasicMaterial({
      color: 0xff486e, transparent: true, opacity: .035, depthWrite: false, blending: THREE.AdditiveBlending
    }));
    const core = new THREE.Mesh(new THREE.SphereGeometry(.027, 16, 12), new THREE.MeshBasicMaterial({ color: 0xff7894 }));
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 128;
    const glowContext = glowCanvas.getContext('2d');
    const glow = glowContext.createRadialGradient(64,64,3,64,64,64);
    glow.addColorStop(0,'rgba(255,70,115,.9)');
    glow.addColorStop(.2,'rgba(255,35,88,.5)');
    glow.addColorStop(1,'rgba(255,67,110,0)');
    glowContext.fillStyle=glow; glowContext.fillRect(0,0,128,128);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(glowCanvas),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));
    sprite.scale.set(.58,.58,1);
    const pick = new THREE.Mesh(new THREE.SphereGeometry(.29, 12, 8), new THREE.MeshBasicMaterial({
      transparent: true, opacity: 0, depthWrite: false
    }));
    pick.userData.region = index;
    group.add(sprite, halo, core, pick);
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
  let zoom = 1;
  let orbitYaw = 0;
  let orbitPitch = 0;
  function ease(a, b, x) {
    const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  }
  function render(progress = latestProgress, region = latestRegion) {
    latestProgress = progress;
    const turning = ease(.22, .49, progress);
    const angle = Math.PI * turning + orbitYaw;
    const wrapped = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const visibleSide = wrapped > Math.PI / 2 && wrapped < Math.PI * 1.5 ? 'back' : 'front';
    const visualRegion = visibleSide === 'front' ? 0 : region === 2 ? 2 : 1;
    latestRegion = visualRegion;
    if (visualRegion !== region) onOrbit(visualRegion, false);
    const detail = THREE.MathUtils.clamp((zoom - 1) / .5, 0, 1);
    skin.uniforms.uRegion.value.copy(markers[visualRegion]);
    skin.uniforms.uFocus.value = detail;
    regionalDetails.forEach(({ material, region: detailRegion, sacrum }) => {
      material.opacity = detailRegion === visualRegion ? (sacrum ? .035 + detail * .065 : .16 + detail * .22) : .015;
    });
    const upper = ease(.23, .53, progress);
    const lower = ease(.57, .85, progress);
    body.rotation.y = angle;
    body.rotation.x = orbitPitch;
    const mobileFrame = host.clientWidth < 330;
    const framingDistance = mobileFrame ? 9.6 : 10.1;
    const baseFocus = -.08 * upper - .12 * lower - (mobileFrame ? .14 : 0);
    const focusY = [1.26,.92,.2][visualRegion];
    const verticalFocus = THREE.MathUtils.lerp(baseFocus, focusY, detail);
    body.scale.x = mobileFrame ? 1.13 : 1.08;
    camera.position.set(0, verticalFocus, (framingDistance - .45 * upper + .05 * lower) / zoom);
    camera.lookAt(0, verticalFocus, 0);
    anatomyViews.front.visible = visibleSide === 'front';
    anatomyViews.back.visible = visibleSide === 'back';
    markerGroups.forEach((group, i) => {
      group.visible = regions[i].side === visibleSide;
      group.scale.setScalar(i === visualRegion ? (mobileFrame ? 1.58 : 1.18) : .72);
      const sprite = group.children[0];
      const halo = group.children[1];
      const glowSize = .58 - detail * .11;
      sprite.scale.set(glowSize, glowSize, 1);
      sprite.material.opacity = i === visualRegion ? 1 : .2;
      halo.material.opacity = i === visualRegion ? .035 : .01;
    });
    body.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);
    const rail = section.querySelector('.bj-zoom-controls');
    const railTop = rail.offsetTop;
    const railWidth = rail.offsetWidth;
    const railOnLeft = rail.offsetLeft < host.clientWidth / 2;
    tags.forEach((tag, i) => {
      tag.hidden = !markerGroups[i].visible;
      tag.classList.toggle('is-active', i === visualRegion);
      if (tag.hidden) return;
      markerGroups[i].getWorldPosition(projected).project(camera);
      const x = (projected.x + 1) * host.clientWidth / 2;
      const y = (1 - projected.y) * host.clientHeight / 2;
      tag.dataset.markerX = String(x);
      tag.dataset.markerY = String(y);
      const labelWidth = tag.offsetWidth;
      const labelHeight = tag.offsetHeight;
      const nearRail = y + labelHeight / 2 >= railTop - 8;
      const leftLimit = nearRail && railOnLeft ? rail.offsetLeft + railWidth + 12 : 8;
      const rightLimit = host.clientWidth - (nearRail && !railOnLeft ? railWidth + 10 : 8);
      const labelOnLeft = x + labelWidth + 14 > rightLimit && x - labelWidth - 10 >= leftLimit;
      const safeX = labelOnLeft
        ? Math.max(leftLimit + labelWidth + 10, Math.min(rightLimit, x))
        : Math.min(rightLimit - labelWidth - 14, Math.max(leftLimit, x));
      tag.style.left = `${safeX}px`;
      tag.style.top = `${Math.max(labelHeight / 2 + 8, Math.min(host.clientHeight - labelHeight / 2 - 8, y))}px`;
      tag.style.transform = labelOnLeft ? 'translate(calc(-100% - 10px), -50%)' : 'translate(10px, -50%)';
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
    const hit = raycaster.intersectObjects(pickMeshes, false).find(item => item.object.parent.visible);
    if (hit) return hit.object.userData.region;
    // The luminous pin is a screen-space target too. At an oblique angle its
    // ray sphere can sit behind the skin, so accept a nearby visible pin.
    let nearest = null;
    markerGroups.forEach((group, index) => {
      if (!group.visible) return;
      group.getWorldPosition(projected).project(camera);
      const x = box.left + (projected.x + 1) * box.width / 2;
      const y = box.top + (1 - projected.y) * box.height / 2;
      const distance = Math.hypot(event.clientX - x, event.clientY - y);
      if (distance < 34 && (!nearest || distance < nearest.distance)) nearest = { index, distance };
    });
    return nearest?.index;
  }
  let drag = null;
  let suppressClickUntil = 0;
  function pointerDown(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    drag = { id: event.pointerId, startX: event.clientX, startY: event.clientY, lastX: event.clientX, lastY: event.clientY, moved: false };
    renderer.domElement.setPointerCapture(event.pointerId);
  }
  function pointerMove(event) {
    if (!drag || drag.id !== event.pointerId) return;
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 5) drag.moved = true;
    if (drag.moved) {
      orbitYaw += (event.clientX - drag.lastX) * .015;
      orbitPitch = THREE.MathUtils.clamp(orbitPitch + (event.clientY - drag.lastY) * .006, -.3, .3);
      renderer.domElement.style.cursor = 'grabbing';
      render();
      onOrbit(latestRegion, false);
      event.preventDefault();
    }
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
  }
  function pointerEnd(event) {
    if (!drag || drag.id !== event.pointerId) return;
    if (drag.moved) {
      suppressClickUntil = performance.now() + 250;
      const target = latestRegion;
      const targetProgress = (target + .5) / 3;
      const angle = Math.PI * ease(.22, .49, latestProgress) + orbitYaw;
      orbitYaw = angle - Math.PI * ease(.22, .49, targetProgress);
      latestProgress = targetProgress;
      onOrbit(target, true);
      render(targetProgress, target);
    } else {
      const index = pick(event);
      if (index !== undefined) {
        suppressClickUntil = performance.now() + 250;
        onHotspot(index, renderer.domElement);
      }
    }
    if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId);
    drag = null;
    renderer.domElement.style.cursor = 'grab';
  }
  function click(event) {
    if (performance.now() < suppressClickUntil) return;
    const index = pick(event);
    if (index !== undefined) onHotspot(index, renderer.domElement);
  }
  function hover(event) {
    if (drag?.id === event.pointerId) { pointerMove(event); return; }
    renderer.domElement.style.cursor = pick(event) === undefined ? 'grab' : 'pointer';
  }
  function contextLost(event) {
    event.preventDefault();
    section.classList.remove('bj--webgl');
  }
  renderer.domElement.addEventListener('click', click);
  renderer.domElement.addEventListener('pointerdown', pointerDown);
  renderer.domElement.addEventListener('pointermove', hover);
  renderer.domElement.addEventListener('pointerup', pointerEnd);
  renderer.domElement.addEventListener('pointercancel', pointerEnd);
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  section.classList.add('bj--webgl');
  resize();
  return {
    render,
    setZoom(value) { zoom = value; render(); },
    dispose() {
      observer.disconnect();
      renderer.domElement.removeEventListener('click', click);
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointermove', hover);
      renderer.domElement.removeEventListener('pointerup', pointerEnd);
      renderer.domElement.removeEventListener('pointercancel', pointerEnd);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      scene.traverse(object => {
        object.geometry?.dispose();
        if (object.material && !Array.isArray(object.material)) object.material.dispose();
      });
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
  const dialogTitle = section.querySelector('#bj-dialog-title');
  const dialogIntro = section.querySelector('.bj-dialog-intro');
  const zoomButtons = [...section.querySelectorAll('.bj-zoom-controls button')];
  const zoomOutput = section.querySelector('.bj-zoom-level');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let active = -1;
  let frame = 0;
  let trigger = null;
  let scene3d = null;
  let sceneLoad = null;
  let sceneUnavailable = false;
  let disposed = false;
  let currentVisualProgress = 0;
  let motionToken = 0;
  let motionActive = false;
  let zoomLevel = 1;
  const sceneObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting) && !reduce.matches) {
      sceneObserver.unobserve(section);
      ensureScene();
    }
  }, { rootMargin: '100% 0px' });
  section.classList.add('bj--ready');

  function updateZoom(value) {
    zoomLevel = Math.max(1, Math.min(2, Math.round(value * 100) / 100));
    zoomOutput.textContent = `${Math.round(zoomLevel * 100)}%`;
    section.classList.toggle('bj--zoomed', zoomLevel > 1.05);
    section.style.setProperty('--bj-fallback-zoom', String(zoomLevel));
    zoomButtons.forEach(button => {
      button.disabled = button.dataset.zoom === 'in' ? zoomLevel >= 2 : button.dataset.zoom === 'out' ? zoomLevel <= 1 : zoomLevel === 1;
    });
    scene3d?.setZoom(zoomLevel);
  }

  async function ensureScene() {
    if (scene3d || sceneLoad || sceneUnavailable) return;
    sceneLoad = createMannequin(section, openCheckIn, (index, commit) => {
      if (motionActive) return;
      if (commit) jumpTo(index);
      else setActive(index);
    });
    try {
      const created = await sceneLoad;
      if (disposed || reduce.matches) created?.dispose();
       else if (created) { scene3d = created; scene3d.setZoom(zoomLevel); schedule(); }
       else sceneUnavailable = true;
    } catch {
      sceneUnavailable = true;
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
    if (reduce.matches || document.hidden || dialog.open || motionActive) return;
    const rect = scrollArea.getBoundingClientRect();
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    const travel = Math.max(1, rect.height - stage.offsetHeight);
    const progress = Math.max(0, Math.min(1, (stickyTop - rect.top) / travel));
    currentVisualProgress = progress;
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
    const target = (index + .5) / 3;
    window.scrollTo(0, top + travel * target);
    root.style.scrollBehavior = previousBehavior;
    setActive(index, true);
    currentVisualProgress = target;
    scene3d?.render(target, index);
  }

  function animateTo(index) {
    const token = ++motionToken;
    const from = currentVisualProgress;
    const to = (index + .5) / 3;
    const duration = 620;
    motionActive = true;
    setActive(index, true);
    return new Promise(resolve => {
      let started = 0;
      let finished = false;
      const rescue = setTimeout(() => finish(token === motionToken && !disposed), duration + 500);
      function finish(success) {
        if (finished) return;
        finished = true;
        clearTimeout(rescue);
        if (success) { motionActive = false; jumpTo(index); }
        resolve(success);
      }
      function step(now) {
        if (finished) return;
        if (token !== motionToken || disposed) { finish(false); return; }
        if (!started) started = now;
        const t = Math.min(1, (now - started) / duration);
        const eased = 1 - (1 - t) ** 3;
        currentVisualProgress = from + (to - from) * eased;
        scene3d?.render(currentVisualProgress, index);
        if (t < 1) requestAnimationFrame(step);
        else finish(true);
      }
      requestAnimationFrame(step);
    });
  }

  async function openCheckIn(index, source, animate = true) {
    trigger = source;
    if (animate && scene3d && !reduce.matches) {
      if (!await animateTo(index)) return;
    } else {
      motionToken++;
      motionActive = false;
      jumpTo(index);
    }
    section.querySelector('.bj-dialog-region').textContent = regions[index].label.toUpperCase();
    form.reset();
    form.hidden = false;
    result.hidden = true;
    dialogTitle.textContent = 'Prepare for a conversation.';
    dialogIntro.hidden = false;
    dialog.showModal();
  }

  function onPreferenceChange() {
    section.classList.toggle('bj--enhanced', !reduce.matches);
    panels.forEach(panel => panel.removeAttribute('aria-hidden'));
    if (reduce.matches) {
      sceneObserver.unobserve(section);
      motionToken++;
      motionActive = false;
      scene3d?.dispose();
      scene3d = null;
      setActive(0, true);
    } else {
      sceneObserver.observe(section);
      active = -1;
      schedule();
    }
  }

  [...buttons, ...hotspots].forEach(button => button.addEventListener('click', event => openCheckIn(Number(button.dataset.region), button, event.detail !== 0)));
  zoomButtons.forEach(button => button.addEventListener('click', () => {
    if (button.dataset.zoom === 'in') updateZoom(zoomLevel + 1);
    else if (button.dataset.zoom === 'out') updateZoom(zoomLevel - 1);
    else updateZoom(1);
  }));
  section.querySelector('.bj-checkin-trigger').addEventListener('click', event => openCheckIn(Math.max(0, active), event.currentTarget, false));
  rotate.addEventListener('click', event => {
    const index = section.dataset.side === 'front' ? 1 : 0;
    if (event.detail && scene3d && !reduce.matches) animateTo(index);
    else jumpTo(index);
  });
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
    form.hidden = true;
    dialogTitle.textContent = 'Your notes, ready to share.';
    dialogIntro.hidden = true;
    dialog.scrollTop = 0;
    result.querySelector('h4').focus();
  });
  section.querySelector('.bj-edit').addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    dialogTitle.textContent = 'Prepare for a conversation.';
    dialogIntro.hidden = false;
    dialog.scrollTop = 0;
    form.querySelector('input:checked, input').focus();
  });

  reduce.addEventListener('change', onPreferenceChange);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  document.addEventListener('visibilitychange', schedule);
  updateZoom(1);
  onPreferenceChange();
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    scene3d?.dispose();
    sceneObserver.disconnect();
    reduce.removeEventListener('change', onPreferenceChange);
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    document.removeEventListener('visibilitychange', schedule);
  };
}
