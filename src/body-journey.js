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
        <div class="bj-view-controls"><span class="bj-view-label">FRONT VIEW</span><button class="bj-rotate" type="button" aria-label="Show back view">Turn figure <span aria-hidden="true">↻</span></button></div>
      </div>
      <div class="bj-content">
        <div class="bj-counter"><span class="bj-current">01</span><span class="bj-counter-line"></span><span>03</span></div>
        <div class="bj-panels" aria-live="polite">${regions.map((region, index) => `<article class="bj-panel${index === 0 ? ' is-active' : ''}" data-region="${index}"><span class="bj-region-label">${region.label}</span><h3>${region.title}</h3><p>${region.text}</p></article>`).join('')}</div>
        <div class="bj-region-controls" role="group" aria-label="Choose a body area">${regions.map((region, index) => `<button class="bj-region-button${index === 0 ? ' is-active' : ''}" type="button" data-region="${index}" aria-pressed="${index === 0}"><span class="bj-button-index">${region.number}</span>${region.label}</button>`).join('')}</div>
        <button class="bj-checkin-trigger" type="button">Explore this area <span aria-hidden="true">↗</span></button>
        <a class="bj-treatment-link" href="${import.meta.env.BASE_URL}cupping-therapy">Explore treatments <span aria-hidden="true">↗</span></a>
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
      <div class="bj-intake-result" hidden aria-live="polite"><h4 tabindex="-1">Your conversation notes</h4><ul class="bj-answer-summary"></ul><p>Share these details with a clinician or therapist. Cupping may reduce pain, but the evidence is weak. Wet cupping pierces the skin; dry cupping does not. Ask about suitability, hygiene and possible side effects. New, worsening or persistent symptoms deserve a clinician’s assessment.</p><div class="bj-product-note"><span>PRODUCTS TO ASK ABOUT</span><p>For an at-home comfort ritual, ask the Casa Hijama team about Kalonji Massage Oil or Castor Oil 100ml. These are not proven pain treatments or substitutes for care.</p><a href="${import.meta.env.BASE_URL}products">Browse the shop <span aria-hidden="true">↗</span></a></div><button class="bj-edit" type="button">Edit answers <span aria-hidden="true">↶</span></button></div>
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
  scene.add(new THREE.HemisphereLight(0xd9f7e8, 0x203d39, 1.55));
  const key = new THREE.DirectionalLight(0xb9e5ce, 2.15);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xb1ffd7, 3.45);
  rim.position.set(3, 2, -5);
  scene.add(rim);

  const body = new THREE.Group();
  scene.add(body);
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0x91a995, metalness: .04, roughness: .55,
    clearcoat: .3, clearcoatRoughness: .43,
    emissive: 0x719d7e, emissiveIntensity: .11,
    transparent: true, opacity: .56, depthWrite: false, side: THREE.DoubleSide
  });
  // A single implicit surface blends torso, limbs and head into one clinical silhouette.
  const ellipsoid = (x,y,z,cx,cy,cz,sx,sy,sz) => (Math.hypot((x-cx)/sx,(y-cy)/sy,(z-cz)/sz)-1)*Math.min(sx,sy,sz);
  function capsule(x,y,z,ax,ay,az,bx,by,bz,ra,rb) {
    const vx=bx-ax,vy=by-ay,vz=bz-az;
    const t=Math.max(0,Math.min(1,((x-ax)*vx+(y-ay)*vy+(z-az)*vz)/(vx*vx+vy*vy+vz*vz)));
    return Math.hypot(x-ax-vx*t,y-ay-vy*t,z-az-vz*t)-(ra+(rb-ra)*t);
  }
  function blend(a,b,k) { const h=Math.max(k-Math.abs(a-b),0)/k; return Math.min(a,b)-h*h*k*.25; }
  function field(x,y,z) {
    let d=ellipsoid(x,y,z,0,.79,0,.42,.79,.285);
    d=blend(d,ellipsoid(x,y,z,0,1.17,0,.52,.38,.31),.17);
    d=blend(d,ellipsoid(x,y,z,0,.2,0,.36,.43,.26),.18);
    d=blend(d,ellipsoid(x,y,z,0,-.18,0,.36,.23,.275),.14);
    d=blend(d,capsule(x,y,z,0,1.44,0,0,1.75,0,.17,.135),.12);
    d=blend(d,ellipsoid(x,y,z,0,2.02,0,.26,.34,.235),.055);
    for(const side of [-1,1]) {
      d=blend(d,capsule(x,y,z,side*.42,1.28,0,side*.67,.55,0,.175,.135),.13);
      d=blend(d,capsule(x,y,z,side*.67,.55,0,side*.83,-.82,0,.135,.078),.095);
      d=blend(d,ellipsoid(x,y,z,side*.86,-.98,.01,.085,.17,.067),.085);
      d=blend(d,capsule(x,y,z,side*.19,-.21,0,side*.27,-1.37,0,.22,.18),.15);
      d=blend(d,capsule(x,y,z,side*.27,-1.37,0,side*.3,-2.6,0,.18,.097),.1);
      d=blend(d,ellipsoid(x,y,z,side*.3,-2.71,.16,.135,.09,.27),.08);
    }
    return d;
  }
  const bounds={x:[-1.18,1.18],y:[-2.92,2.46],z:[-.62,.67]};
  const steps={x:48,y:110,z:26};
  const nx=steps.x+1,ny=steps.y+1,nz=steps.z+1;
  const dx=(bounds.x[1]-bounds.x[0])/steps.x,dy=(bounds.y[1]-bounds.y[0])/steps.y,dz=(bounds.z[1]-bounds.z[0])/steps.z;
  const grid=new Float32Array(nx*ny*nz);
  const gridIndex=(i,j,k)=>(i*ny+j)*nz+k;
  for(let i=0;i<nx;i++) for(let j=0;j<ny;j++) for(let k=0;k<nz;k++) grid[gridIndex(i,j,k)]=field(bounds.x[0]+i*dx,bounds.y[0]+j*dy,bounds.z[0]+k*dz);
  const cube=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]];
  const tetrahedra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];
  const positions=[],faces=[],cache=new Map();
  for(let i=0;i<steps.x;i++) for(let j=0;j<steps.y;j++) for(let k=0;k<steps.z;k++) {
    const points=cube.map(([a,b,c])=>[i+a,j+b,k+c]);
    const corners=points.map(p=>gridIndex(...p));
    const values=corners.map(index=>grid[index]);
    if(values.every(v=>v>=0)||values.every(v=>v<0)) continue;
    function edge(a,b) {
      const ai=corners[a],bi=corners[b],key=ai<bi?`${ai}:${bi}`:`${bi}:${ai}`;
      let index=cache.get(key);
      if(index===undefined) {
        const t=values[a]/(values[a]-values[b]),p=points[a],q=points[b];
        index=positions.length/3;
        positions.push(bounds.x[0]+(p[0]+(q[0]-p[0])*t)*dx,bounds.y[0]+(p[1]+(q[1]-p[1])*t)*dy,bounds.z[0]+(p[2]+(q[2]-p[2])*t)*dz);
        cache.set(key,index);
      }
      return index;
    }
    for(const tetra of tetrahedra) {
      const inside=tetra.filter(c=>values[c]<0),outside=tetra.filter(c=>values[c]>=0);
      if(inside.length===1) faces.push(edge(inside[0],outside[0]),edge(inside[0],outside[1]),edge(inside[0],outside[2]));
      else if(inside.length===3) faces.push(edge(outside[0],inside[0]),edge(outside[0],inside[1]),edge(outside[0],inside[2]));
      else if(inside.length===2) {
        const a=edge(inside[0],outside[0]),b=edge(inside[0],outside[1]),c=edge(inside[1],outside[1]),d=edge(inside[1],outside[0]);
        faces.push(a,b,c,a,c,d);
      }
    }
  }
  const normals=[],sample=.006;
  for(let n=0;n<positions.length;n+=3) {
    const x=positions[n],y=positions[n+1],z=positions[n+2];
    const normal=new THREE.Vector3(field(x+sample,y,z)-field(x-sample,y,z),field(x,y+sample,z)-field(x,y-sample,z),field(x,y,z+sample)-field(x,y,z-sample)).normalize();
    normals.push(normal.x,normal.y,normal.z);
  }
  for(let n=0;n<faces.length;n+=3) {
    const a=faces[n]*3,b=faces[n+1]*3,c=faces[n+2]*3;
    const ab=new THREE.Vector3(positions[b]-positions[a],positions[b+1]-positions[a+1],positions[b+2]-positions[a+2]);
    const ac=new THREE.Vector3(positions[c]-positions[a],positions[c+1]-positions[a+1],positions[c+2]-positions[a+2]);
    if(ab.cross(ac).dot(new THREE.Vector3(normals[a],normals[a+1],normals[a+2]))<0) [faces[n+1],faces[n+2]]=[faces[n+2],faces[n+1]];
  }
  const bodyGeometry=new THREE.BufferGeometry();
  bodyGeometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  bodyGeometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
  bodyGeometry.setIndex(faces);
  body.add(new THREE.Mesh(bodyGeometry,skin));
  // The second, continuously rendered surface gives the model the luminous
  // edge and quiet scan texture of a clinical body map at every rotation.
  const clinicalLayer = new THREE.ShaderMaterial({
    uniforms: { uDetail: { value: 0 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `varying vec3 vNormal; varying vec3 vPosition;
      void main() { vNormal = normalize(normalMatrix * normal); vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position * 1.008, 1.0); }`,
    fragmentShader: `varying vec3 vNormal; varying vec3 vPosition; uniform float uDetail;
      void main() {
        float edge = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0,0.0,1.0))), 2.1);
        float scan = pow(max(0.0, sin(vPosition.y * 47.0)), 18.0) * (0.035 + uDetail * 0.06);
        float axial = exp(-pow(vPosition.x * 12.0, 2.0)) * step(-1.6, vPosition.y) * step(vPosition.y, 1.45) * 0.055;
        float alpha = min(0.62, edge * 0.49 + scan * 1.6 + axial * 2.0);
        gl_FragColor = vec4(0.71, 1.0, 0.76, alpha);
      }`
  });
  body.add(new THREE.Mesh(bodyGeometry, clinicalLayer));
  function surfaceZ(x,y,side) {
    let low=0,high=.65;
    for(let n=0;n<18;n++) {
      const mid=(low+high)/2;
      if(field(x,y,side*mid)<0) low=mid;
      else high=mid;
    }
    return side*(low+.008);
  }
  function contour(points,side,opacity) {
    const vertices=points.map(([x,y])=>new THREE.Vector3(x,y,surfaceZ(x,y,side)));
    const geometry=new THREE.BufferGeometry().setFromPoints(vertices);
    const material=new THREE.LineBasicMaterial({color:0xd9ffd6,transparent:true,opacity:Math.min(1,opacity*1.75),depthWrite:false,depthTest:false});
    const line = new THREE.Line(geometry,material);
    body.add(line);
    return line;
  }
  contour([[-.41,1.32],[-.3,1.37],[-.17,1.32],[0,1.26],[.17,1.32],[.3,1.37],[.41,1.32]],1,.51);
  contour(Array.from({length:20},(_,i)=>[0,1.31-i*.105]),1,.22);
  contour(Array.from({length:27},(_,i)=>[0,1.49-i*.09]),-1,.53);
  for (const side of [-1,1]) {
    contour(Array.from({length:11},(_,i)=>[side*(.05+i*.035),1.2-Math.sin(i/10*Math.PI)*.1]),1,.3);
    contour(Array.from({length:13},(_,i)=>[side*(.06+i*.029),1.13-i*.048]),-1,.31);
    for (let row=0; row<5; row++) {
      const y=1.02-row*.18;
      contour(Array.from({length:10},(_,i)=>[side*(.045+i*.038),y-.05*Math.sin(i/9*Math.PI)]),1,.22);
      contour(Array.from({length:10},(_,i)=>[side*(.045+i*.038),y-.035*Math.sin(i/9*Math.PI)]),-1,.2);
    }
    contour(Array.from({length:17},(_,i)=>[side*(.09+i*.018),-.05-i*.046]),1,.19);
    contour(Array.from({length:21},(_,i)=>[side*(.25+i*.003),-.39-i*.075]),1,.16);
  }
  const zoomDetails = [];
  for (const side of [-1,1]) {
    for (const y of [1.05,.84,.63,.42,.21]) {
      const upperBack = contour(Array.from({length:15},(_,i)=>[side*(.09+i*.022),y-.055*Math.sin(i/14*Math.PI)]),-1,0);
      zoomDetails.push(upperBack);
    }
    for (const y of [.41,.27,.13,-.01]) {
      const lowerBack = contour(Array.from({length:14},(_,i)=>[side*(.06+i*.022),y-.045*Math.sin(i/13*Math.PI)]),-1,0);
      zoomDetails.push(lowerBack);
    }
    zoomDetails.push(contour(Array.from({length:20},(_,i)=>[side*(.1+i*.016),1.32-.12*Math.sin(i/19*Math.PI)]),1,0));
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
  let zoom = 1;
  function ease(a, b, x) {
    const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  }
  function render(progress = latestProgress, region = latestRegion) {
    latestProgress = progress;
    latestRegion = region;
    clinicalLayer.uniforms.uDetail.value = Math.max(0, (zoom - 1) / .15);
    zoomDetails.forEach(line => { line.material.opacity = clinicalLayer.uniforms.uDetail.value * .62; });
    const turning = ease(.22, .49, progress);
    const upper = ease(.23, .53, progress);
    const lower = ease(.57, .85, progress);
    body.rotation.y = Math.PI * turning;
    const mobileFrame = host.clientWidth < 330;
    const framingDistance = mobileFrame ? 11.2 : 11;
    const verticalFocus = -.08 * upper - .12 * lower - (mobileFrame ? .14 : 0);
    body.scale.x = mobileFrame ? 1.13 : 1;
    camera.position.set(0, verticalFocus, (framingDistance - .45 * upper + .05 * lower) / zoom);
    camera.lookAt(0, verticalFocus, 0);
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
    setZoom(value) { zoom = value; render(); },
    dispose() {
      observer.disconnect();
      renderer.domElement.removeEventListener('click', click);
      renderer.domElement.removeEventListener('pointermove', hover);
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
  let disposed = false;
  let currentVisualProgress = 0;
  let motionToken = 0;
  let motionActive = false;
  let zoomLevel = 1;
  section.classList.add('bj--ready');

  function updateZoom(value) {
    zoomLevel = Math.max(.85, Math.min(1.15, Math.round(value * 100) / 100));
    zoomOutput.textContent = `${Math.round(zoomLevel * 100)}%`;
    section.style.setProperty('--bj-fallback-zoom', String(zoomLevel));
    zoomButtons.forEach(button => {
      button.disabled = button.dataset.zoom === 'in' ? zoomLevel >= 1.15 : button.dataset.zoom === 'out' ? zoomLevel <= .85 : zoomLevel === 1;
    });
    scene3d?.setZoom(zoomLevel);
  }

  async function ensureScene() {
    if (scene3d || sceneLoad) return;
    sceneLoad = createMannequin(section, openCheckIn);
    try {
      const created = await sceneLoad;
      if (disposed || reduce.matches) created?.dispose();
      else { scene3d = created; scene3d?.setZoom(zoomLevel); schedule(); }
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
      motionToken++;
      motionActive = false;
      scene3d?.dispose();
      scene3d = null;
      setActive(0, true);
    } else {
      ensureScene();
      active = -1;
      schedule();
    }
  }

  [...buttons, ...hotspots].forEach(button => button.addEventListener('click', event => openCheckIn(Number(button.dataset.region), button, event.detail !== 0)));
  zoomButtons.forEach(button => button.addEventListener('click', () => {
    if (button.dataset.zoom === 'in') updateZoom(zoomLevel + .15);
    else if (button.dataset.zoom === 'out') updateZoom(zoomLevel - .15);
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
    reduce.removeEventListener('change', onPreferenceChange);
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    document.removeEventListener('visibilitychange', schedule);
  };
}
