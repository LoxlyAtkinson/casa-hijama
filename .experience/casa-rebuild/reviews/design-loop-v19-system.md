# Design Loop v19 — system critique

**Verdict: PASS**

## Scope and basis

Fresh visual review of the rendered home hero and body journey at 1440×900 and 390×844 against the objective rules in `design-system.md`. Inspected v6 hero/body captures, both light and dark appearances, 200% zoom states, reduced-motion and WebGL fallback captures, the action-bound screenshots, 4× header button captures, and their measured logs. No implementation source, progress notes, or earlier reviews were used. The evidence logs identify the captured source revision as `6dbfc1e609f921de9f065e1d452843550a4ab4b79349781ab338069f9adcf91b`.

## Findings

- **Identity and palette:** The hero uses the Casa turquoise accents with a restrained dark photographic scene and ivory typography. In the body chapter, deep teal, pale text, cyan scan, coral focus, and sage controls read as a deliberate clinical extension of the wider palette. This matches the documented identity and the specific body-journey extension.
- **Typography and layout:** Desktop hero and body views use large, short-line headlines and readable supporting copy, with the header and body columns aligned within the viewport. At 390px, the hero title and body section title remain legible; the body intro, stage, controls, progress, and guidance stack in a clear reading order with about 20px side margins. I saw no horizontal overflow or clipped body copy in the supplied captures.
- **Components:** The desktop header presents brand, routes, theme control, and booking action. The mobile header presents brand, theme control, and an explicit menu button. Turquoise pill actions, understated text links, and outlined sage figure control follow the stated button hierarchy. The small uppercase labels and separators remain consistent across sections.
- **Body chapter:** Both desktop and mobile show a cohesive near-black teal clinical stage with the translucent cyan figure and localized coral marker. Neck/shoulders, upper-back, and lower-back states are clearly differentiated by numbered progress and matching guidance. At 200% zoom, the selected region remains visually central and its name stays legible; the controls remain distinct from the label. Full-turn and reverse-scroll captures preserve the same visual language.
- **Alternate states:** Dark captures retain readable contrast and the same component hierarchy. Reduced-motion presents the guidance as ordinary stacked content with a static figure. The WebGL fallback shows a clinical still and named region controls, including matching back-view imagery and guidance.
- **Action clarity:** On desktop, the booking action and body CTA fit their measured boxes with matching `scrollWidth` and `clientWidth`; the document remains 1440px wide. At mobile, the body CTA fits its measured 137px content width and the document remains 390px wide. Header booking is intentionally absent from the mobile header layout; the mobile hero evidence shows the booking CTA in the hero.

## Limits

This is a visual-system critique of supplied screenshots and logs, not an independent source, behavior, accessibility, or whole-site acceptance review. Screenshot and log claims about interactions were not reproduced live. The 4× button captures and matching measured dimensions support the booking-label legibility despite the reduced-scale preview making some header text appear abbreviated.

## Evidence inspected

- `.experience/casa-rebuild/evidence/v6/desktop-hero-start.png`, `desktop-hero-room.png`, `desktop-body-front.png`, `desktop-body-neck-zoom.png`, `desktop-body-lower-zoom.png`, `desktop-body-dark.png`
- `.experience/casa-rebuild/evidence/v6/mobile-hero-start.png`, `mobile-hero-room.png`, `mobile-body-front.png`, `mobile-body-neck-zoom.png`, `mobile-body-lower-zoom.png`, `mobile-body-dark.png`, `mobile-body-reduced.png`, `mobile-body-fallback.png`, `mobile-body-fallback-back.png`
- `.experience/casa-rebuild/evidence/v6-action-bounds/desktop-front.png`, `desktop-neck-zoom.png`, `desktop-lower-zoom.png`, `mobile-front.png`, `mobile-neck-zoom.png`, `mobile-lower-zoom.png`, and `bounds-log.json`
- `.experience/casa-rebuild/evidence/v6-header-crop/lower-button-4x.png`, `lower-zoom-button-4x.png`, `neck-zoom-button-4x.png`, and `header-crop-log.json`
- `.experience/casa-rebuild/evidence/v6/browser-log-v6.json`

