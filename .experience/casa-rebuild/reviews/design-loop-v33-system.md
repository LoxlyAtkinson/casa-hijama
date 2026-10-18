# Design Loop v33 — system critic (raw)

**Verdict: FAIL** for the current final evidence set. The visible design system is largely coherent, but the required final fallback and zoom states are not demonstrated after the latest action-text correction.

## Bar and method

I used the frozen C1–C29 contract and `design-system.md` as the objective bar. I inspected rendered 1440×900 and 390×844 home hero/body captures in light and dark, normal/front/back/200% zoom, keyboard intake, reduced motion, WebGL fallback, the original-pixel action crops, the handoff midpoint, and the browser observation logs. I did not inspect implementation source or prior critic reports. The filesystem and local runtime are shared with the builder, so procedural blinding is limited. I did not personally reproduce a pointer drag in the live browser; that part rests on the captured browser observations and front/back/full-turn frames.

## System findings

- **Identity, hierarchy and palette:** PASS. The hero uses one dominant Casa image per beat; the body chapter has a distinct deep-teal clinical field, Manrope-scale editorial heading, restrained eyebrow, turquoise primary action, and readable pale copy. The 390px layout keeps approximately 20px side insets. Light and dark captures retain the palette and hierarchy.
- **Body content and navigation:** PASS in the captured normal states. Front, upper-back and lower-back views show the region marker, chapter label, guidance and next actions. The four-question keyboard-open intake is readable at 390px, and the normal browser log records forward/reverse scroll and front→back→front drag progression at both widths.
- **Motion and fallback design:** The supplied 50% handoff captures show a matched clinical figure on both sides of the scan boundary, with still and live opacities both at 1 and a partial clip; this resolves the earlier empty-frame concern visually. The reduced-motion capture shows the three text chapters in ordinary reading flow with a still figure. WebGL-blocked front/back captures show a useful figure and named controls.
- **Final-state evidence:** FAIL. The latest full `mobile-body-fallback-back.png` (06:38) paints the primary action as only an arrow and clips part of the brand/action text, while `mobile-lower-cta-original-pixels.png` and the v32 light/dark crops (06:39) show the corrected full label in a normal state. The full 1440px 200% lower-back and dark captures likewise precede the final action-text pixels and show `E ↗` rather than “Explore this area.” Thus the currently supplied fallback, dark and zoom full frames cannot establish that the corrected action remains readable in those required states. The geometry-only bounds log cannot settle a paint/compositing defect.

**Single biggest actionable gap:** Capture and inspect full, unscaled 390px and 1440px lower-back 200% states in light/dark and WebGL-failure mode from the final source revision, including the action and header pixels. If all show the full action text, this system failure is resolved without a design change; if any still paints only an arrow, repair that state and repeat the captures.
