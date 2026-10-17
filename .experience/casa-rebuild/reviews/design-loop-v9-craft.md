# Design Loop v9 — independent CRAFT review

Verdict: FAIL

Reviewer: blind_craft_v9. Scope: rendered visual craft only. Fresh context; no implementation source, progress, prior reviews, or builder notes read. Shared filesystem and supplied captures mean this is procedural independence, not an isolated runtime verification. Active project acceptance artifacts reside in `.experience/casa-rebuild/`; this review deliberately excludes progress under the blind-review instruction.

## Single biggest gap

The live figure still reads as a softly shaded mint-green mannequin, while the preferred fallback reads as a luminous cyan clinical scan. This is a material visual downgrade when the live body replaces the loading still, and directly fails bar-v3 mechanism 5 and the stated preference for the still's polished appeal.

Precise evidence: `evidence/v6/mobile-body-fallback.png` has a bright narrow cyan silhouette, transparent dark interior, fine continuous internal linework and a contained pink region glow. Compare `mobile-body-front.png`, `mobile-body-upper.png`, and `mobile-body-turn-to-back.png`: the live body's chest, thighs, shoulders and face are broad uniformly pale-green surfaces, with faint rectangular grid bands and little visible internal depth. `desktop-body-front.png` and `desktop-body-full-turn.png` show the same material mismatch at larger scale. The selected point blooms predominantly white against that green surface instead of the richer pink/red localized glow in the still and supplied body reference.

The close and rotated frames amplify the same unfinished material: `desktop-body-neck-zoom.png` makes the faint thick clavicle/rib forms look pasted inside a waxy body; `desktop-body-lower-zoom.png` exposes a pale flattened pelvis shape with very little spatial detail; `desktop-body-mouse-drag.png` and `mobile-body-mouse-drag.png` reveal jagged dark/bright patch edges around the shoulder and overlapping hand/hip surfaces. These are part of the same live-rendering craft deficit, not evidence that the still's appeal survives rotation.

Required repair: achieve the still's cyan rim brightness, darker translucent interior and fine internal definition in the actual live mesh across front, back, side and both close views; keep the warm selected region distinctly pink and localized; remove the visible side-view surface artifacts. Increasing overall brightness alone will preserve the flat mannequin appearance. Recapture the complete affected sequence after repair.

## Reviewed coverage

Inspected all 23 PNGs in `evidence/v6`: desktop and mobile hero start/room, body front, turn-to-back, full-turn, upper, lower, neck zoom, lower zoom and mouse drag; plus mobile fallback and reduced-motion state. Compared against `bar.md`, `bar-v2.md`, `bar-v3.md`, `design-loop/apple-reference.jpg`, and the supplied `C:/Users/loxly/Desktop/3d human body.jpg`.

The hero's prominent single subject and readable typography are strong enough that the live body material is the dominant craft failure. Screenshots establish static appearance only; they do not independently verify smooth motion, real rotation, keyboard operation, or behavior gates. No whole-project completion verdict is implied.
