# Design Loop v11 — independent system critic

**Verdict: FAIL**

## Basis

I judged the original PNGs in `.experience/casa-rebuild/evidence/v6/` against the root `design-system.md`, with `contract-v6.md` supplying the required states. This is a visual system review of supplied captures, not an interaction or source audit. I did not read earlier reviews or builder rationale. Shared-filesystem access is a procedural blinding limit; my conclusions come from the rendered pixels.

## Biggest gap

The body chapter's small interface text is not reliably readable at the required 390px layout. In `mobile-body-front.png`, `mobile-body-upper.png`, `mobile-body-lower.png`, and `mobile-body-neck-zoom.png`, the figure labels, `FRONT/BACK VIEW`, zoom caption and percentage, and the three chapter selectors render at roughly 8–10 CSS pixels. Inactive `UPPER BACK`/`LOWER BACK` labels use muted cyan-grey against the dark field and recede so far that they are hard to read as choices. The explanation copy and `Explore this area` action also appear materially smaller than the hero's body text and CTA. This conflicts with the system's readable controls and clear hierarchy, especially because region controls are the named alternative to precise scrolling. Increase the mobile control and label scale, strengthen inactive-label contrast, and preserve space for the complete three-step selector without clipping. Re-capture front, back and zoom at 390px after repair.

## Other observations

- **Palette and focal treatment — pass.** `desktop-body-front.png`, `desktop-body-upper.png`, `desktop-body-lower.png`, and the matching mobile captures use a near-black/deep-teal field, luminous translucent cyan figure and localized coral light. The coral focus moves between the three named regions. The figure is synthetic and clinical rather than graphic anatomy.
- **Header and primary action — pass in shown states.** Desktop has brand, route links, theme control and turquoise booking pill; mobile has brand, theme control and explicit menu button. `desktop-body-dark.png` and `mobile-body-dark.png` show the dark header with pale text. The body `Explore this area` buttons are turquoise pills with dark text. The mobile menu's open state and booking placement cannot be judged from the supplied closed-header captures.
- **Type and spacing — mostly pass.** The hero uses a short, large editorial headline over a dominant image in `desktop-hero-start.png` and `mobile-hero-start.png`. The body section uses uppercase eyebrow, large heading and three-column desktop arrangement. The mobile version retains about 20px side margins and stacks the figure above its explanation. The small body-interface type is the exception described above.
- **Zoom and dark states — visually coherent.** `desktop-body-neck-zoom.png`, `desktop-body-lower-zoom.png`, and `mobile-body-neck-zoom.png` visibly prioritize the selected area. `desktop-body-dark.png` and `mobile-body-dark.png` retain the section's teal/coral language. Both dark captures show a 200% side-oriented crop, so they do not establish the unzoomed dark composition.
- **Still fallback — present.** `mobile-body-fallback.png` preserves a cyan clinical body and selected coral region with the same chapter text. It is brighter and more skeletal than the live model, but remains within the stated synthetic clinical language.

## Required repair for this verdict

Make the 390px body chapter's marker names, chapter selectors, view/zoom labels, explanation and action comfortably legible while retaining the cyan/coral hierarchy; then inspect fresh 390px captures in front, back, and zoom states. This report remains FAIL on the reviewed v6 pixels.
