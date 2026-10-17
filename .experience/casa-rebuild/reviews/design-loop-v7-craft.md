# Blind craft review v7

Verdict: FAIL

Reviewed 2026-10-17. This is a fresh visual judgment, not a comparison with earlier implementation rounds.

## Evidence and blinding

Read only the supplied `bar-v3.md` contract and inspected the supplied body reference, `design-loop/apple-reference.jpg`, and these v6 screenshots: desktop/mobile hero start and room; desktop/mobile body front, upper, lower, neck zoom, lower zoom and mouse drag. Desktop evidence is 1440×900; mobile evidence is 390×844. Opened the current https://www.apple.com/apple-watch-series-12/ page through web access to confirm the reference content. The supplied Apple image is the visual reference; the live web result is text, not a fresh rendered comparison.

Attempted a fresh local browser tab through the available browser tool; initialization timed out and reset its kernel. Consequently the visual verdict is based on the supplied rendered v6 frames. I did not read implementation source, builder discussion, progress, earlier reviews or scores. I did not inspect browser logs or infer implementation from them. Motion continuity, pause behavior and live hit targets remain unverified. No implementation was edited.

## Findings preventing PASS

1. **Clinical internal detail is still materially below the body reference.** The continuous silhouette, hands, face and cyan edge are recognizable and coherent. However, inside the torso the visible anatomy consists largely of faint, evenly spaced curved rib lines and a straight center line. The shoulder has no convincing joint geometry; the selected lumbar region exposes no vertebral structure. The 200% views enlarge the same smooth shell rather than reveal additional spatial information. This is especially clear in `desktop-body-neck-zoom.png`, `desktop-body-lower-zoom.png`, and their mobile counterparts. The reference's shoulder and spine detail explain the region in depth. Add restrained volumetric clavicle/scapula/shoulder and lumbar structure tied to the rotating model, with meaningful regional focus at close range. This is an achievable gap against bar items 5 and 7, not a request to copy the stock artwork.

2. **Translucency loses front/back clarity.** In the upper/lower back frames, the face remains visibly legible through the back of the head; in the rotated drag frames, overlapping shell surfaces produce strong bright seams and an almost sliced-panel appearance at the shoulder, arm and hip. The reference combines a luminous exterior with a soft coherent interior. Here the transparency sometimes reads as superimposed surfaces rather than controlled clinical depth. Tune directional surface opacity and internal contrast so the rear head reads as rear anatomy and rotated limbs keep a continuous volume. Relevant evidence: `desktop-body-upper.png`, `desktop-body-lower.png`, both mouse-drag frames, and mobile upper/lower.

3. **The active warm focus reads as a circular overlay more than light within tissue.** At 200%, the pink highlight has an obvious hard circular outer disc, pale lavender wash and small pink point. The reference uses a saturated warm core that diffuses organically through the anatomical surface. The inactive focus is appropriately quieter, and one active region is correctly emphasized, but the current disc obscures rather than explains the structure. Soften the disc boundary and integrate a localized warm emissive field with the model depth. Evidence: desktop/mobile neck and lower zoom, especially the large lower-back circle.

4. **Close framing exposes the rectangular model viewport.** The 200% desktop neck view cuts both arms at the same vertical viewport edges and ends the torso in a flat horizontal slice. The lower view clips the neck at the top and both thighs at the bottom; the mobile lower and drag views amplify these abrupt cuts. Cropping is valid for a close-up, but the combination of hard rectangular clipping, floating controls, and no new regional detail makes this look like a model enlarged inside a box. Reframe around the selected anatomical region with intentional margins or a soft scene edge; use the close-up to reveal the relevant shoulder or lumbar structure. Evidence: all four zoom screenshots and both drag screenshots.

## Hero and label assessment

The opening cup has a convincing dominant macro subject, controlled teal/warm reflections and a short large statement. The room frame makes a clear change of subject and scale. On mobile, image first and text below gives these states readable pacing. Those frames satisfy the core still-image mechanisms of bar items 1 and 2; I see no meaningful need to replace the hero imagery. Temporal pacing and motion pause cannot be certified from stills.

The body labels remain readable at the inspected sizes and the selected region matches the adjacent explanation. There is no decisive text collision in these frames. At the shoulder, the label lies across the figure, and the tiny inactive back label is weak, but those are secondary to the anatomical and lighting issues above. The desktop three-column structure and mobile sequence preserve explanatory reading space.

The full-body contour itself is a plausible continuous human form. The failure is principally the quality of internal depth, transparency and selected-region close-up treatment, not the mere presence of a recognizable body.

## Acceptance conclusion

Zero meaningful achievable visual gaps has not been met. Resolve findings 1–4, then inspect front, rear, oblique drag and region close-up states at both sizes again. A fresh rendered motion check is also needed before claiming the complete Apple pacing and pause contract passes.
