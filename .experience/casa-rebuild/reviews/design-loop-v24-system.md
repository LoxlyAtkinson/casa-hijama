# Design Loop v24 — system critique (raw)

Reviewer: independent SYSTEM critic, 2026-10-18. Scope: rendered home presentation and body chapter only. Bar: `design-system.md` as supplied. This is a visual/system judgment, not source or wiring review. I did not inspect implementation source, prior reviews, builder rationale, or a desired score. Shared filesystem and live runtime limit procedural blinding.

## Verdict

| Surface | Verdict | Basis |
| --- | --- | --- |
| Home | **PASS** | Desktop and 390px mobile start/room frames retain the Casa turquoise, dark teal, warm studio imagery, Manrope headline hierarchy, readable copy, and turquoise pill/underlined secondary action. Brand, theme, menu/navigation, and booking controls have clear positions. The mobile headline, text and actions fit inside roughly 20px side margins without clipping. |
| Body | **PASS** | The deep teal clinical chapter, translucent cyan figure, coral regional focus, three-region sequence and semantic adjacent copy follow the system. At 390px and 100% zoom, the DPR3 inset shows the complete back-view figure from head to feet, legible `Lower back` marker, and legible body-area controls and explanatory text. Desktop and mobile light/dark frames preserve contrast and the same hierarchy. |

No objective visual-system failure found in these inspected states. The 200% zoom frames intentionally crop the figure; the required 100% state retains the complete figure.

## Evidence inspected

- Live rendered site: `http://127.0.0.1:4173/` and `/#body-guide`, including a 390px viewport inspection. The rendered accessibility view identifies the home sections and body controls; the visual verdict rests on rendered screenshots.
- `.experience/casa-rebuild/evidence/v6/desktop-hero-start.png`, `desktop-hero-room.png`, `mobile-hero-start.png`, `mobile-hero-room.png`.
- `.experience/casa-rebuild/evidence/v6/desktop-body-front.png`, `desktop-body-upper.png`, `desktop-body-lower.png`, `desktop-body-dark.png`, and the corresponding `mobile-body-*.png` frames, plus `mobile-body-reduced.png`.
- `.experience/casa-rebuild/evidence/v6-state-continuity/mobile-dark-insets.png` inspected at original pixel detail (DPR3 capture for the 390px layout).

This verdict covers the supplied system frames and visible live presentation. It does not certify booking submission, route persistence, scroll mechanics, or other behavior gates.
