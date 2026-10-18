# Design Loop v18 — independent CRAFT review

Verdict: **FAIL**
Reviewer: blind_craft_v18
Date: 2026-10-17

Scope: rendered craft only. I read bar.md, bar-v2.md and bar-v3.md; inspected the supplied clinical body JPG; opened the live Apple Watch Series 12 page and visually inspected its hero. I inspected the desktop/mobile hero start and room images, body front/upper/lower/dark, mobile reduced-motion and fallback/front/back images in evidence/v6; all four desktop/mobile neck/lower 200% images in evidence/v6-action-bounds; and the desktop/mobile 35, 70, 105 and 140 angle images in evidence/v6-craft-side-test. I did not read product source, prior reviews, builder notes or progress. Shared filesystem access remains a procedural blinding limitation. This is not a behaviour or complete-project acceptance verdict.

## Single biggest remaining gap

**The neck/shoulder internal linework escapes the body silhouette at a supported rotated close view.** In `../evidence/v6-craft-side-test/desktop-yaw-140.png`, the bright neck/clavicle contour strands float to the left of the cyan chest silhouette, approximately x598–660, y318–480 in the 1440×900 image. `../evidence/v6-craft-side-test/mobile-yaw-140.png` repeats the defect around x124–165, y349–436 in the 390×844 image. These are visible structural lines, not the intentionally external region label or warm halo. The lines visibly bridge empty background ahead of the torso, creating the impression of a flat anatomical drawing suspended in front of the rotating figure.

This is meaningful at precisely the close view meant to reward inspection. It breaks bar-v3 mechanisms 5 and 7: fine internal anatomy-like forms and additional spatial detail connected to the real model. The user's clinical reference consistently contains anatomical structures within the translucent silhouette. The Casa side view does not preserve that relationship. The otherwise composed typography, restrained controls, local warm focus and large photographic hero do not resolve this conspicuous model defect.

Required repair: keep the anatomical curves spatially contained by the human volume throughout rotation, or constrain their visibility to angles where their attachment is visually valid. Retain useful spatial detail and real rotation. Recapture the same 200% neck/shoulder side state on desktop and mobile, plus adjacent angles, and obtain fresh independent craft judgment. Do not hide this state by removing the supported rotation interaction.

No product files edited. This report is my own raw judgment.
