# Design Loop v21 — independent CRAFT review

Verdict: FAIL

Reviewer: blind_craft_v21. Fresh visual review; no product source, progress, builder rationale or earlier reviews read. Shared filesystem and supplied captures limit independence to procedural blinding. Active record: `.experience/casa-rebuild/` (contract/progress deliberately not read under the blind-review assignment).

## Single biggest gap

The supported mobile dark body state cuts the explanatory UI off at the left viewport edge. This is an actual composition defect, not a preference about the 3D rendering.

Exact evidence: `evidence/v6/mobile-body-dark.png`, original 390 × 844 image. At approximately y=642, the chapter counter shows `3` with the leading `0` outside the viewport; at y=682 the first region option begins `Neck & shoulders` against the very edge instead of the established 20px inset; at y=756 the main heading begins `e begins with a conversation.` because the start of `Care` is clipped. At y=784 and y=803 the explanatory paragraph also loses its initial words. The header and introductory text above remain normally inset, making the shift particularly conspicuous. This prevents the current evidence set from meeting readable, deliberate hierarchy in all supported states.

Comparison: `evidence/v6-action-bounds/mobile-lower-zoom.png` and `evidence/v6-craft-side-test/mobile-yaw-70.png` preserve the same chapter UI at a consistent left inset, so the failure is demonstrably avoidable. Those later images do not establish that the specific state captured by `mobile-body-dark.png` has been repaired. Reproduce the dark-mode state and its preceding interaction, fix the horizontal displacement/overflow, and replace that capture with verified current evidence. If the old capture is stale, invalidate it explicitly and supply the matching recapture rather than retaining contradictory evidence.

## Scope inspected

Original-resolution desktop/mobile hero start and room scenes; body front, upper, lower and dark states; mobile reduced-motion and fallback front/back; desktop/mobile neck/lower 200% captures; desktop/mobile yaw 35/70/105/140 captures. Criteria read: bar.md, bar-v2.md, bar-v3.md and project experience-acceptance.md. Supplied `C:/Users/loxly/Desktop/3d human body.jpg` inspected at original resolution. Live Apple URL opened successfully through the web tool; its content/structure was inspected, but no live rendered Apple browser capture was obtained, so I do not claim a fresh pixel-level Apple comparison.

The hero has a clear dominant subject and legible display hierarchy, and the clinical cyan figure, warm active point and readable accompanying explanation broadly follow the stated reference mechanisms. Those strengths do not override the clipped mobile supported state. This report is a visual rejection with one repair target, not a full behaviour acceptance or a completion verdict.
