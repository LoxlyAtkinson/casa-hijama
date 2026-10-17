# Design Loop v11 — independent craft review

**Verdict: FAIL.** The largest gap is the live body surface. The reduced-motion/failure still is a brighter, more anatomical clinical scan than the interactive figure, so the visual loses quality when WebGL appears. This falls short of the body reference and bar-v3 mechanisms 5–7.

## Scope and evidence

Fresh craft judgment from the rendered PNGs in `evidence/v6/`, `bar-v3.md`, `contract-v6.md`, and the supplied `C:/Users/loxly/Desktop/3d human body.jpg`. I did not inspect implementation or earlier reviews. I assessed the Apple Watch page through the frozen visual mechanisms in bar-v3; this pass did not recapture the live Apple page. Static frames can show composition and state changes, but cannot prove smoothness, transition timing, or actual scroll/drag continuity.

## What the frames establish

- `desktop-hero-start.png` and `mobile-hero-start.png` give one cupping glass strong visual priority, with a concise editorial headline and a visible booking path. `desktop-hero-room.png` and `mobile-hero-room.png` change the subject and palette to a quiet treatment room. This is a meaningful visual transition in the captured states.
- `desktop-body-front.png`, `desktop-body-upper.png`, `desktop-body-lower.png`, and their mobile equivalents show a continuous human silhouette, front/back orientation, one active coral point, receding inactive points, and legible adjacent copy. The figure does not appear assembled from separate limb blocks.
- The 200% captures visibly change scale and keep the selected marker in view. Reduced-motion and fallback captures show a readable, brighter clinical still.

## Achievable defects

1. **Live scan quality is below its own fallback.** In `mobile-body-reduced.png` and `mobile-body-fallback.png`, the luminous edge, translucent layers, joints and internal structure make the figure feel like a scan. In `desktop-body-front.png` and `mobile-body-front.png`, the same area becomes an evenly filled teal mannequin with thin grid lines and little anatomical depth. At 390px the body is especially dim and the internal detail disappears. Bring the live material and lighting closer to the still: brighter cyan rim and interior light, visible but restrained anatomical forms, less uniform fill, and a localized coral light that reaches the surface. Compare live and still at the same size and state; the live figure should no longer look like the less finished version.
2. **Focused views magnify flatness instead of revealing useful spatial detail.** `desktop-body-neck-zoom.png` and `mobile-body-neck-zoom.png` enlarge a smooth face and chest grid, but reveal almost no shoulder/neck structure. `desktop-body-lower-zoom.png` shows a murky, irregular form around the pelvis while the lumbar area remains a mostly uniform shell. Add subtle, recognizably synthetic structural cues around the selected shoulder and lumbar area, and remove the ambiguous pelvic blotch. A 200% view should give more location detail than the 100% view, without becoming explicit or claiming clinical precision.
3. **Mobile active focus is too small relative to the figure and copy.** In `mobile-body-front.png`, `mobile-body-upper.png`, and `mobile-body-lower.png`, the marker and its label occupy only a small patch of the 390px screen. The lower/upper back pair sit close enough that the active state relies heavily on the text below. Increase the selected point's surface illumination or add a restrained connected focus halo/line, while further quieting the inactive marker. The selected region should be identifiable at a glance from the body itself at normal zoom.

## Craft decision

The hero and room panels meet the image-led composition bar in these frames. The body has a recognizable continuous form and a usable three-state layout, but the main interactive visual does not yet match the supplied clinical cyan reference or its own still. Fix defect 1 first, then inspect the 200% and 390px states for defects 2–3. Recapture live front/back/zoom and still states before another independent craft judgment. Motion smoothness remains unverified by this still-frame review.
