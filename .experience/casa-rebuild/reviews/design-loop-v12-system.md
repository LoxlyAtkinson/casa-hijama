# Design Loop system critic — v12

**Verdict: FAIL**

Reviewed against `design-system.md` and the current v6 contract. Evidence inspected: the original PNGs in `evidence/v6/`, including mobile front, upper, lower, neck zoom, dark, reduced motion, fallback back, desktop front/upper/lower/zoom/dark, and desktop/mobile hero starts. The browser log identifies these captures as 390 × 844 and 1440 × 900 at source revision `637fb94746bf138e16af665a8272d956d8ab7853424d0c5be89574d4b5dc7e5a`. This is a visual system review of captured states, not an independent replay of interactions.

## Actionable failure

1. **Mobile front chapter: the primary action obscures the guidance copy.** In `evidence/v6/mobile-body-front.png` and `mobile-body-neck-zoom.png`, the turquoise “Explore this area” pill begins over the final line (“you.”) of the neck-and-shoulders paragraph. At 390px, reading the full context requires content to remain unobstructed. Reflow the copy and action or reserve space for the action so the paragraph ends visibly above it. Recapture the normal and zoomed front states at 390px.

## System checks that passed in the inspected captures

- The figure reads as one synthetic, luminous cyan body with localized coral focus. Front, back, and zoom captures preserve the near-black clinical chapter and Casa turquoise actions.
- Desktop front/upper/lower chapters have clear heading, explanatory copy, region controls, and next actions without visible clipping at 1440px. The desktop header retains brand, routes, theme control, and booking action.
- The mobile header retains brand, theme control, and an explicit menu button. The three region names remain visible below the figure at 390px. Back fallback and reduced-motion stills have legible figures and guidance in the visible frame.
- Light and dark body captures maintain pale text against deep teal, while the dark header uses the specified deep surface. The mobile hero keeps one dominant image, a concise headline, and a prominent booking action.

## Evidence boundary

The reduced-motion PNG shows the first visible portion of its ordinary-flow content; it does not establish the entire flow. A screenshot cannot establish actual scroll synchronization, mouse drag, keyboard operation, persistence, or fallback behavior. I did not read builder rationale, previous reviews, or implementation files. The shared filesystem and browser-log provenance limit strict blinding; I used the original supplied captures and made no implementation edits.
