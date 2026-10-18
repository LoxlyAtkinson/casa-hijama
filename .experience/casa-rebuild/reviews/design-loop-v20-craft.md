# Design Loop v20 — independent craft review

Verdict: **FAIL**

Reviewer: blind_craft_v20. Scope: rendered hero and body experience only. Fresh visual review; no implementation source, progress, or earlier reviews read. Shared filesystem and parent-selected evidence limit procedural independence. Active project record: `.experience/casa-rebuild/contract-and-section-map.md` and `progress.md` (deliberately not read to preserve this review's requested blinding).

## Single biggest gap

**The translucent body breaks into visibly layered shell surfaces at rotated close views.** The profile reveals abrupt scalloped surface boundaries across the upper arm and hip, with an intensely bright near arm and duplicate far-hand contours passing through the torso. The result reads as overlapping plastic mesh parts rather than one continuous clinical scan. This is a meaningful defect in the prominently offered rotation/200% zoom states, even though the front view is substantially more coherent.

Exact original-resolution evidence, pixel coordinates measured from the upper-left:

- `evidence/v6-craft-side-test/desktop-yaw-70.png` (1440×900): x625–793, y240–671. The bright near forearm terminates in multiple overlapping hand contours over the thigh; x675–823, y558–611 contains a sharp scalloped horizontal shell boundary across the hip.
- `evidence/v6-craft-side-test/desktop-yaw-140.png` (1440×900): x778–865, y493–533. A pronounced wavy brightness seam cuts around the upper arm, making it look like a separate sleeve. The luminous near chest/shoulder at x624–720, y366–498 overpowers the active pink region.
- `evidence/v6-craft-side-test/mobile-yaw-70.png` (390×844): x137–250, y442–543. Duplicate hand/arm contours and the horizontal hip seam remain conspicuous at phone size.
- `evidence/v6-craft-side-test/mobile-yaw-140.png` (390×844): x233–286, y443–474. The same upper-arm shell seam survives the narrow layout.

Repair target: make transparency, depth ordering, and local shading read as one coherent figure throughout the supported yaw range. Keep the fine internal lines and active warm focus, but eliminate abrupt shell seams and reduce the competing overlap contours. Review the same four frames at original resolution after repair; front-only evidence cannot clear this finding.

## Reference comparison and other inspected states

The clinical reference `C:/Users/loxly/Desktop/3d human body.jpg` has a continuous translucent cyan silhouette, soft internal detail, and controlled localized warm focus. The current figure's front states achieve the basic color and contrast relationship; the profile shell breaks are the material remaining gap against bar-v3 mechanism 5. The screenshot review covered desktop/mobile hero start and room, body front/upper/lower, desktop dark, mobile reduced/fallback, and all four desktop/mobile neck/lower 200% action-bounds frames; additional yaw 35 and 105 desktop frames were inspected.

The hero has clear subject ownership, genuinely different cup/room scenes, large readable headlines and distinct actions. I found no larger hero craft defect than the body issue above. The fallback is visibly simpler but preserves the clinical orientation and explanatory hierarchy. Zoom controls and text remain separated in the supplied action-bounds frames.

The live Apple URL was opened successfully through the web tool and its current page structure inspected. This turn did not obtain a fresh browser-rendered Apple screenshot; visual Apple comparison therefore relies on the frozen mechanisms in bar.md/bar-v2.md/bar-v3.md, not a claim of live pixel comparison. This is a craft FAIL, not overall behavioural acceptance, and no source-hash or runtime verification is asserted.
