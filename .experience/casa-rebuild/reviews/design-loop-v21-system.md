# Design Loop v21 — System review

**Result: PASS**

## Evidence reviewed

Original v6 screenshots at 1440×900 and 390×844: hero start/room, body front/upper/lower, mobile dark mode, mobile reduced motion, mobile WebGL fallback front/back, and desktop/mobile zoom states. Reviewed `browser-log-v6.json`, `bounds-log.json`, and `header-crop-log.json`; these logs report the captured route, state, and measurements, but their PASS labels are not treated as visual proof.

## Findings

- **Palette and identity — PASS.** Light header is a quiet near-white/ivory; the cinematic hero uses dark teal, cyan/turquoise and warm room gold. The body chapter is deep teal with a cyan clinical figure and localized coral focus, as specified. Turquoise marks the primary booking action and headline emphasis; sage appears as a restrained secondary accent. Dark mode changes the header/surrounding surfaces while maintaining pale text and visible control boundaries.
- **Type and hierarchy — PASS.** Headline forms are compact and high contrast; supporting copy and small uppercase eyebrows are visually distinct. Desktop hero and body hierarchy reads clearly across columns. Mobile stacks headline, explanatory copy, figure, region navigation, and selected-area copy in a sensible order. Visible body copy is HTML-like rendered text in the capture, separate from the figure image.
- **Controls and labels — PASS.** Desktop navigation, theme control, and booking action are legible. Mobile exposes theme and menu buttons. Body view labels, selected-region labels, zoom controls, turn control, three region choices, and explanatory text are visible in captured states. At 200% zoom, the selected region remains labeled and the zoom rail remains visible.
- **Responsive bounds — PASS.** Captures show no horizontal page overflow at either target viewport. The independent bounds log records `documentWidth` equal to viewport width (1440/1440 and 390/390) and body action text scroll width equal to client width. Header crop captures at 4× show the booking label contained within its bounds. Normal mobile viewport screenshots end mid-page while body copy continues below the fold; this is ordinary vertical scrolling, not evidence of clipped content.
- **Reduced motion and fallback — PASS, limited scope.** Mobile reduced-motion capture presents the static figure and the three guidance steps in reading order. Blocked-WebGL captures show front and back stills with matching view labels and the region controls. The supplied evidence covers mobile reduced/fallback only; desktop equivalents were not reviewed.

## Limits

This is a visual review of the supplied PNGs and associated logs, not a fresh browser session. It establishes appearance at the supplied states and sizes; it does not establish font loading under network failure, contrast ratios, behavior at intermediate widths, or the desktop reduced-motion/fallback states. Zoomed 3D imagery is intentionally magnified and cropped to focus on the selected anatomy; no page-edge overflow is visible in the accompanying bounds evidence.
