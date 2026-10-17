# Design Loop v14 — independent craft review

**Verdict: FAIL**

I judged the original-resolution v6 PNGs against `bar-v3.md` and the user-supplied `3d human body.jpg`. I did not read the implementation, builder notes, or prior reviews.

## What works visually

- The cup-to-room hero transition changes subject and mood while retaining one dominant image, concise editorial type, and a clear action. Desktop and mobile compositions are legible.
- The live front/back states now show a continuous human silhouette with a cyan translucent surface, bright edge lighting, faint internal linework, and one prominent coral focus. The figure is recognizably a rendered human rather than assembled blocks. The fallback is brighter and more anatomically detailed, but the live figure is close enough in color and clinical tone to avoid an abrupt visual-language swap.
- At 200% the neck and lower-back targets remain visible, and the soft fade at the cropped ends communicates close framing. The zoom crop itself is acceptable; adding detailed inset anatomy is optional under bar mechanism 7.

## Actionable defects

1. **The lower-back focus exposes an unsettling mesh form at the crotch.** In `desktop-body-lower-zoom.png`, directly below the active lower-back point, the otherwise smooth back silhouette forms a high-contrast, protruding folded shape between the legs. The same form is apparent in the rotated `desktop-body-dark.png` and `mobile-body-mouse-drag.png`. At 200%, it competes with the pain focus and breaks the intended comfortable synthetic clinical treatment. Smooth, mask, or crop this anatomy while preserving the continuous rotating body and lower-back highlight. This is the largest craft gap.
2. **The mobile marker labels collide with the zoom rail.** In `mobile-body-upper.png`, the inactive “LOWER BACK” label runs behind the rail; in `mobile-body-lower.png`, the active “LOWER BACK” label starts against that rail. `mobile-body-neck-zoom.png` also places the enlarged body behind the rail, though its active label remains readable. Move the rail, label anchors, or mobile framing so the focused label and inactive markers have distinct space in all 390px states.

## Evidence limits

These still frames establish appearance only. They cannot prove smoothness of the still-to-WebGL transition, 360-degree drag behavior, reverse scrolling, or whether a moving zoom avoids clipping at intermediate angles. I treated those as outside this visual-frame verdict rather than marking them passed. This report is a craft review, not the complete C1–C29 acceptance verdict.

**Single next improvement:** remove the lower-body mesh artifact in the lower-back zoom and rotated views, then recapture those states at desktop and 390px.
