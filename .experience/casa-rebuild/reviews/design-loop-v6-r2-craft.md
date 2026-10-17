# Independent craft review — v6 round 2

Reviewer: blind_craft_v6_r2. Date: 2026-10-17. Verdict: **FAIL**.

Scope: rendered hero opening/room and clinical body front/back/200% views against bar-v3.md (including its referenced bar.md and bar-v2.md), the supplied Apple reference, live Apple opening, and the supplied human-body image. No implementation source, builder history, previous reviews or scores were read. Active project record: `.experience/casa-rebuild/contract-and-section-map.md` and `.experience/casa-rebuild/progress.md`; deliberately not opened to preserve the requested blinding.

## Meaningful achievable gaps

1. **Clinical depth remains schematic rather than convincing.** The cyan silhouette is continuous and clearly human, but the chest consists of paired translucent oval plates and thin sweeping rib strokes, with floating oval patches in the flanks/thighs. At 200%, these shapes become larger without revealing convincing anatomical volume. The reference establishes luminous anatomical depth through layered contours, joints and softly visible internal structure. Here the front and back have substantially the same flat chest diagram, the spine reads as a single straight stroke, and the surface looks like a uniform cyan shell. This is visible in desktop-body-front, desktop-body-neck-zoom, desktop-body-lower-zoom and both mobile zoom captures. Add spatially coherent internal forms with depth, better tonal separation and localized edge light; close views must reveal useful shoulder/back structure instead of enlarged schematic ellipses.

2. **Human contour needs refinement at the scale being offered.** The full-body pose is recognizable, but the head has a bulbous cranium and very shallow facial landmarks; upper arms have pronounced angular bulges; hands taper into jagged, partly fused-looking fingers. The enlarged neck/shoulder and lower-back views expose those simplifications. The reference has a natural shoulder-to-upper-arm transition, clearer hands and facial/neck structure. Refine those contours and normals so the offered close inspection does not look like a coarse mannequin.

3. **The neck glow is visibly cut off by the model viewport.** In mobile-body-neck-zoom, the soft pink halo ends in a straight vertical edge at the right of the body area (around x332), making the hidden rectangular canvas boundary conspicuous. A similar boundary is visible in the desktop neck zoom. Keep the entire luminous falloff inside the frame or fade it cleanly; preserve sufficient camera padding around the selected shoulder.

4. **Labels are not comfortably legible on mobile.** In the 390×844 body captures, on-figure labels are tiny uppercase text; inactive upper/lower-back text is also low contrast against the cyan shell. The three region-selection labels beneath the model are similarly cramped and small. The close view enlarges the figure but leaves the labels very small. Increase label size/contrast and use deliberate external placement or leader lines where needed. Explanatory paragraphs and main headings remain readable, and the active pink label is distinguishable, but that does not resolve the small annotation/control type.

## What meets the visual intent

The opening gives the cup substantial image priority, strong turquoise/gold lighting, a short oversized white statement and a clear booking action. The room frame changes subject meaningfully and keeps text readable at both supplied sizes. The body has a coherent centered silhouette, a dark cyan environment, one dominant localized pink focus and quieter inactive markers. Its HTML explanation remains distinct from the model, and both neck/lower framing retain connection to the whole figure. These are strong foundations; they do not erase the defects above.

## Evidence inspected

All paths below are relative to `.experience/casa-rebuild/`:

- `design-loop/apple-reference.jpg`.
- `evidence/v6/desktop-hero-start.png`, `desktop-hero-room.png`, `desktop-body-front.png`, `desktop-body-upper.png`, `desktop-body-lower.png`, `desktop-body-neck-zoom.png`, `desktop-body-lower-zoom.png` (1440×900 images).
- `evidence/v6/mobile-hero-start.png`, `mobile-hero-room.png`, `mobile-body-front.png`, `mobile-body-upper.png`, `mobile-body-lower.png`, `mobile-body-neck-zoom.png`, `mobile-body-lower-zoom.png` (390×844 images).
- `C:/Users/loxly/Desktop/3d human body.jpg`, directly viewed.
- Live `http://127.0.0.1:4173/` opening and partial body section, with fresh in-app browser screenshots. Live `https://www.apple.com/apple-watch-series-12/` opening and accessibility snapshot: macro rear watch, dark field, low-zone heading, sparse pause and purchase controls.

## Limits and independence

The exact-size comparisons rely on the supplied PNGs. Fresh browser viewport override returned an unsupported subagent visibility error, so I do not claim independently measured 1440×900/390×844 live captures. Fresh local body navigation produced partially framed section captures; those are not substituted for the complete supplied evidence. No fresh screenshots were saved to disk. Real WebGL implementation, animation timing, rotation continuity, keyboard behavior, reduced-motion/fallback behavior, source hashes and full-site gate coverage were not verified in this craft-only review. The shared filesystem is a procedural blinding limit; only the named references/evidence and acceptance standards were read. This is a raw visual FAIL, not an overall experience acceptance certificate. No implementation was edited.

Required next step: repair the four visual gaps, recapture the affected full-body and 200% states at both sizes, then obtain a fresh independent craft review.
