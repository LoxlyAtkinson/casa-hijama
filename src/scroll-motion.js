/** Casa Hijama's authored motion score, driven by the unmodified Scroll Craft engine. */
export function initScrollMotion() {
  const root = document.querySelector('main');
  if (!root) return;
  if (window.ScrollCraft?.mount) {
    window.ScrollCraft.mount(root, { lerp: 0.24 });
  } else {
    // The content remains readable if the optional motion runtime cannot load.
    root.classList.add('home-motion-static');
    root.querySelectorAll('[data-sc-in], [data-sc-stagger] > *').forEach(node => node.classList.add('sc-in'));
  }

  const film = root.querySelector('#studio-film');
  const poster = root.querySelector('.film-fallback');
  const freeze = root.querySelector('.film-freeze');
  const control = root.querySelector('.film-control');
  if (!film || !freeze || !control || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const syncFilmControl = () => { control.hidden = !film.classList.contains('sc-has-clip'); };
  const filmObserver = new MutationObserver(syncFilmControl);
  filmObserver.observe(film, { attributes: true, attributeFilter: ['class'] });
  syncFilmControl();
  control.addEventListener('click', () => {
    const isPaused = control.getAttribute('aria-pressed') === 'true';
    if (isPaused) {
      freeze.hidden = true;
      control.setAttribute('aria-pressed', 'false');
      control.setAttribute('aria-label', 'Pause film motion');
      control.textContent = 'Pause motion';
      return;
    }
    const source = film.readyState >= 2 && film.videoWidth ? film : poster;
    if (!source || !source.naturalWidth && source === poster) return;
    freeze.width = source.videoWidth || source.naturalWidth;
    freeze.height = source.videoHeight || source.naturalHeight;
    const context = freeze.getContext('2d');
    if (!context) return;
    try { context.drawImage(source, 0, 0, freeze.width, freeze.height); }
    catch { return; }
    freeze.hidden = false;
    control.setAttribute('aria-pressed', 'true');
    control.setAttribute('aria-label', 'Resume film motion');
    control.textContent = 'Play motion';
  });
}
