# Independent craft review v6

Reviewer: /root/blind_craft_v6. Date: 2026-10-17. Verdict: **FAIL**.

Scope: rendered home opening and clinical body composition, desktop and 390px, using bar-v3.md plus its referenced bar.md/bar-v2.md. Active project contract/progress reside in `.experience/casa-rebuild/contract-and-section-map.md` and `.experience/casa-rebuild/progress.md`; I did not read progress, prior reviews or implementation to preserve independent visual judgment. No implementation edits.

## Findings requiring repair

1. **Body fidelity falls meaningfully below the supplied clinical reference (high).** In desktop/mobile front and lower-back enlarged states, the cyan shell has a mostly even fill, horizontal contour bands and a thin bright outline. Internal structures read as stacked flat waves and oval dots; lower-torso curves resemble another rib cage. The face is a broad simplified mask, hands have little separation, and the feet terminate like rounded stumps. Together these produce a stylized digital mannequin rather than the softly translucent, volumetric human scan of the reference. This is not a request for photorealistic anatomy or medical precision: improve the human silhouette, depth, varied edge illumination and coherent internal forms enough that close inspection remains convincing. The default figure is much more attractive than a solid green mannequin, but the gap is especially exposed at 200%.

2. **Enlarged neck label is clipped and competes with controls (medium).** `v5-mobile-body-reverse.png` visibly says FRONT VIEW despite its filename and shows the neck/shoulder label disappearing under the right-hand zoom rail and beyond the figure frame. `v5-desktop-body-reverse.png` similarly clips the label at the right canvas boundary. The active region marker must remain locatable with a fully readable label at maximum zoom, with controls outside that label's space. The enlarged lower-back state is better composed and demonstrates that a readable focused view is achievable.

3. **Zoom offers scale without equivalent new spatial information (medium).** The lower-back focus enlarges the same schematic dots/waves and cuts the head/arms at the viewport boundaries. The reference's close views add coherent joint/spine detail. A dedicated region framing or credible higher-detail forms should make the selected area's spatial relationship clearer, while retaining HTML explanation and the actual rotatable figure. This is a rendering/detail issue, not a request to copy the stock image or add unnecessary medical claims.

## Mechanisms that work

The fresh live home at 1440x900 and 390x900 gives the cup a strong dominant silhouette and clear booking action. Scrolling to y=700 changes the image subject to a treatment room at both widths; this is a real compositional change, not merely text opacity. The desktop cup uses the right side effectively while the headline/action occupy a clear left zone. Narrow composition gives the image a distinct upper zone and readable lower copy. Body selected region has one dominant pink focus; the inactive upper-back marker in lower-back states is visibly subdued. Dark body/hero fields and restrained type/accent use are coherent. These successes do not erase the body failures above.

## Exact evidence inspected

Reference: `C:/Users/loxly/Desktop/3d human body.jpg`; corrected local Apple reference `.experience/casa-rebuild/design-loop/apple-reference.jpg`; fresh live Apple `https://www.apple.com/apple-watch-series-12/`, captured at 1440x900 as `evidence/v6-craft-apple.png` (macro watch sensor, short low white headline, sparse controls). Live Apple was also opened with web retrieval; visual judgments use screenshots, not retrieved prose.

Fresh live candidate `https://loxlyatkinson.github.io/casa-hijama/`:
- `evidence/v6-craft-1440-start.png`, `v6-craft-1440-scroll.png`: 1440x900, scroll 0/700.
- `evidence/v6-craft-390-start.png`, `v6-craft-390-scroll.png`: 390x900, scroll 0/700.
- `evidence/v6-craft-1440-home.png`: full-page capture inspected, but reveal/sticky sections were not all activated; blank regions in this capture are **not** asserted as site defects.

Supplied rendered evidence under `evidence/v5/`, inspected individually:
- `v5-desktop-hero-start.png`, `v5-desktop-hero-room.png` (1440x900).
- `v5-mobile-hero-start.png`, `v5-mobile-hero-room.png` (390x844).
- `v5-desktop-body-front.png`, `v5-desktop-body-reverse.png`, `v5-desktop-body-lower-focus.png` (1440x900; normal front, enlarged front despite reverse filename, enlarged back/lower focus).
- `v5-mobile-body-front.png`, `v5-mobile-body-reverse.png`, `v5-mobile-body-lower-focus.png` (390x844; same corresponding states).
- `live-desktop-home.png`, `live-mobile-home.png` (these show normal-scale back/lower selection, despite home filenames).

## Limits and unverified checks

Blinding is procedural: shared filesystem and reference/site identities are visible. I have not read builder rationale, previous judgments or source. Images contain their real branding; this cannot be a fully anonymous composition test. The image inspection order was reference first, then candidate states, not a randomized experiment.

Fresh live body automation initially timed out on the accessible name used for the region button; body defects above are grounded in supplied v5 rendered screenshots, not an invented successful live interaction. Fresh Apple mobile and its full scroll sequence were not inspected. The entire site's other routes, full behavior, reduced motion and failure handling are outside this craft pass and are not certified. This raw craft report cannot serve as a full experience-acceptance PASS record. A fresh review after repairs must establish the body visual result and inspect actual front/back/zoom transitions at desktop and 390px.
