# Design Loop v5, round 3 — system critic

Reviewer: fresh system critic. Scope: current root `design-system.md` and rendered v5 evidence for the scroll hero/room composition and clinical body only. I did not inspect implementation, builder rationale, or earlier critiques. This is an evidence-based system verdict, not a source or full experience-acceptance review. Active task records: `.experience/casa-rebuild/contract-and-section-map.md` and `.experience/casa-rebuild/progress.md`.

## Scroll hero / room composition — FAIL

**Design-system basis:** “Secondary calls to action are underlined text links or pale pills over dark media.” The system also requires turquoise pill primary actions, a mobile header with an explicit menu button, and short, high-contrast headlines.

**Rendered evidence:** `v5-desktop-hero-start.png` and `v5-mobile-hero-start.png` show a turquoise primary booking pill, but the secondary “Explore Casa Hijama” text link has no underline. The room-state “Explore treatments” link is underlined in `v5-desktop-hero-room.png` and `v5-mobile-hero-room.png`; the opening state is inconsistent with that rule. The start/room/exit frames otherwise show legible text and distinct cup-to-room compositions at 1440 × 900 and 390 × 844.

**Single biggest actionable gap:** Give the opening “Explore Casa Hijama” link the underlined secondary-link treatment at both viewport sizes, then recapture the start states.

## Clinical body — FAIL

**Design-system basis:** “Body progress is driven by native scroll in both directions. Region controls offer an equivalent keyboard path. Under reduced motion, show the explanatory steps in ordinary flow with the figure remaining visible and no pinned scrubbing.” The same section calls for a deep field, translucent cyan clinical figure, localized coral focus, three named regions, and plain uncertainty/risk language.

**Rendered evidence:** `v5-desktop-body-front.png`, `v5-desktop-body-upper.png`, `v5-desktop-body-lower-focus.png`, and the corresponding mobile frames show the required cyan figure, coral focus, three named regions, and conservative copy. `v5-mobile-body-reduced.png` shows the figure and ordinary-flow guidance; `v5-mobile-body-webgl-fallback.png` shows a static clinical figure and region controls. The v5 browser record documents forward scrolling through regions and keyboard selection, but it contains no current-revision reverse-scroll observation or capture. The still frames alone cannot establish the system's two-direction scroll rule.

**Single biggest actionable gap:** Capture a current-revision browser journey that scrolls from lower back back to upper back and neck/shoulders, recording the restored active copy, marker and figure orientation at each step. Keep the raw observations and frames with this evidence set.
