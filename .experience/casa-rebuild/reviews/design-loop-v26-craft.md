# Design Loop v26 — independent visual craft review

**Verdict: FAIL.** Home opening: **PASS**. Live 3D body visual craft: **FAIL**.

## Scope and evidence

Judged against `.experience/casa-rebuild/bar-v3.md`, the live [Apple Watch Series 12 page](https://www.apple.com/apple-watch-series-12/), and `C:/Users/loxly/Desktop/3d human body.jpg`. I inspected the local page at `http://127.0.0.1:4173/` and the supplied v6 desktop/mobile opening, room, front/back, and 200% zoom captures, plus `v6-state-continuity/mobile-dark-insets.png`. This is visual craft judgment only; I did not inspect implementation source or previous reviews. The shared filesystem and runtime limit procedural blinding, and still captures cannot establish motion quality or interaction reliability.

## Judgment

- **Home opening — PASS.** The large glass cup is the unmistakable subject on desktop and mobile. The short headline sits in the lower part of the scene with a clear booking action, closely matching the reference's sparse, high contrast hierarchy. The room frame introduces a materially different subject and a quieter atmosphere on scroll. Its image, heading and next action form a coherent second beat.
- **Live 3D body — FAIL.** Front and back views and the 200% crops make the selected area understandable, and the cyan silhouette and localized pink focus follow the reference's basic color logic. The figure itself lacks the reference's clinical scan quality: the torso reads as a smooth, cloudy plastic shell, while the ribs, spine and other internal forms are faint or simplified. At normal mobile scale the anatomy nearly disappears. At 200% the rib cage or spine becomes clearer, but the enlarged, abruptly cropped torso still does not deliver the fine internal detail and luminous depth of the supplied image.

**Single biggest fixable visual gap:** Give the actual rotating body a more convincing translucent scan treatment: higher definition, layered internal anatomy and controlled bright edge light that remain readable at its normal mobile size. The present body reads as a soft mannequin with an anatomy overlay. This is the decisive reason for FAIL, more than the surrounding layout or controls.
