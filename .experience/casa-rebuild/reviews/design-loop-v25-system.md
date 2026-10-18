# Design Loop v25 — system critic

**Reference:** `design-system.md` only. **Surface:** current rendered `http://127.0.0.1:4173/` and the supplied v6 desktop/mobile captures, including the DPR3 `v6-state-continuity/mobile-dark-insets.png`. This is a visual design-system judgment, not a source or interaction audit. I did not inspect builder rationale or earlier reviews. Shared workspace and supplied captures limit procedural blinding; the live desktop homepage was also inspected independently.

## Binary verdict

| Surface | Verdict | Reason |
| --- | --- | --- |
| Home | **PASS** | The live hero and desktop/mobile start and room captures hold the turquoise, teal, ivory and warm studio palette. Manrope-style short headlines, legible copy and primary/secondary actions retain the intended hierarchy at both widths. The mobile hero text and actions remain fully visible. |
| Body | **PASS** | The body chapter reads as the specified deep-teal clinical scan: translucent cyan whole figure, localized coral focus, three clear regions, and semantic copy beside or below the figure. At mobile 100%, both front and back figures show head through feet without clipping; the DPR3 dark inset confirms the same in dark mode. Zoom controls, 100% value, region controls and the “Turn figure” button remain legible and separated. At 200%, the intentional crop centers the selected anatomy; region labels remain beside/on the figure without covering the controls or explanatory text. |

**Biggest objective gap:** None observed against the stated design-system visual bar. The 200% screenshots are focused zoom states and therefore do not need to show the full figure. The supplied evidence does not by itself establish every behavioral requirement in the design system; this report makes no binary behavior claim.

## Evidence inspected

- Live desktop homepage at `http://127.0.0.1:4173/`, including visible hero and accessibility structure.
- `evidence/v6/{desktop,mobile}-hero-{start,room}.png`.
- `evidence/v6/{desktop,mobile}-body-front.png`, `desktop-body-dark.png`, `mobile-body-dark.png`, `mobile-body-upper.png`, `mobile-body-lower.png`, `mobile-body-neck-zoom.png`, `mobile-body-lower-zoom.png`, and `mobile-body-reduced.png`.
- `evidence/v6-state-continuity/mobile-dark-insets.png` and `mobile-fallback-front.png`.

**Independence limits:** This reviewer did not build or edit the site and did not read previous reviews or source. The images are existing workspace artifacts, and the browser and filesystem are shared with the builder.
