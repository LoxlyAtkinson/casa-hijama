# Independent experience verdict — public preview v6

Reviewer: independent judge `/root/judge_v6_preview`  
Builder: Casa Hijama implementation agent `/root`  
Target: commit `74947a4bb1ac5755547d5c447a18864ed76c2708`, public Pages preview  
Frozen contract: `../contract-v6.md` (C1–C29)  
Raw machine record: `judge-v6-preview.json`

## Verdict

**PASS, 100/100 scoped acceptance.** No meaningful achievable defect remained in the reviewed states. This is a judgment of the frozen Casa rebuild contract, not a claim that every possible device or future browser state is flawless.

## Source and wiring review

- The current full-app source fingerprint is `c47339ad4576ba5ff357b14b6b9cc53976ecb26d1251805a037eeeaecd57a83f`, matching all 45 site browser observations. The current body/reference fingerprint is `6728fc82271075914ac94b8e5ac244b278862c45390cc9cabde8fa6908f41a72`, matching all 33 body observations. These are file-content fingerprints, not Git commit IDs; captures preceded the final commit but bind to the committed implementation bytes.
- `src/body-journey.js` loads the HuBMAP skin GLB into a Three.js/WebGL scene, applies cyan translucent shading and localized coral focus, and adds pointer capture, drag threshold, free yaw, back/front region sync, scroll alignment, and click suppression after drag. Named region buttons, hotspots, zoom controls, four-question local intake, reduced-motion list, still fallback, and WebGL context-loss handling remain wired. The local model and pelvis hashes match `ATTRIBUTION.md`; the visible source credit links to the HuBMAP library and CC BY 4.0 license.
- The home and shared routes retain hero, studio, treatments, film, quote, testimonials, prices, product entry, booking, map, and footer. The catalog has 30 records and the enquiry bag. Booking builds a WhatsApp request with pending-confirmation wording and a fallback link. Sources and assets are hash-bound in the machine record.
- Git remote `origin/HEAD` resolved to `74947a4`; an independent HTTP read returned 200 for all four Pages URLs and the skin GLB. The deployed GLB SHA-256 matched the local asset exactly.

## Visual and browser judgment

- The desktop and 390px captures show a coherent cyan clinical figure with a continuous human silhouette, subtle internal scan structure, coral focus and readable guidance. The front → back → front image sequence changes visible body orientation and chapter/label at both widths. Drag then forward/reverse scroll returns to the correct chapter. The two 200% zoom states visibly prioritize the selected shoulder and lower-back areas. The back still fallback follows the selected back chapter; reduced-motion guidance remains readable.
- The body remains a synthetic guide, with explicit uncertainty and safety language plus an NIH source link. The mobile stage, chapter controls and action fit the 390px viewport; the additional bounds measurements show the booking/body action text contained within its controls at front and zoom states. Zoom intentionally crops the figure, while selected focus and text remain visible.
- The hero changes from the single cupping-glass visual to the private room with distinct editorial copy. This is a material subject/framing change in the Apple reference's image-led rhythm, while retaining Casa colors and an obvious booking path. Treatment imagery identifies wet cupping, dry cupping and massage without the rejected mannequin. Shop cards use isolated products on pale stages; the populated bag shows image, name, price, quantity, subtotal and WhatsApp path.
- The 45-observation site run covers light/dark, four routes, 1440px/390px, catalog filtering/sorting/dialog/bag, keyboard return and FAQ, booking validation and handoff, media pause/scrub/fallback, map fallback, reduced motion, no-JavaScript catalog, and theme persistence. The 33-observation body run covers front/back/return, drag, zoom, intake, scroll reverse, dark, reduced and WebGL fallback. The eight live observations cover all four deployed routes at both widths. I inspected representative full-page and close-up captures in addition to the logs, rather than treating their PASS strings as visual proof.

## Criterion outcomes

| Criteria | Verdict | Basis |
| --- | --- | --- |
| C1–C8 | PASS | Full route captures, source inventory, booking/shop/FAQ/media/fallback browser states. |
| C9 | PASS | Final-content fingerprints, route and interaction captures, and this independent visual/wiring review. |
| C10–C11 | PASS | Discovery, product focus, bag and WhatsApp observations; no-JavaScript and reduced-motion states. |
| C12–C13 | PASS | Three ordered scroll chapters, reverse/keyboard access, cautious copy and NIH link. |
| C14 | PASS | Public verified-profile repository at `https://github.com/LoxlyAtkinson/casa-hijama`, current remote HEAD, run instructions and source/assets; generated output is excluded. |
| C15–C16 | PASS | Real 3D front/back/focus and four-question local intake in captures and source. |
| C17–C18 | PASS | Continuous WebGL surface, synchronized controls, hero/film scroll change and reduced-motion stills. |
| C19–C21 | PASS | Treatment imagery, neutral catalog/bag, live Pages routes and model asset. |
| C22–C25 | PASS | Image-led pacing and scale shift, luminous synthetic surface, 1440px/390px dark/light/reduced/fallback evidence and Design Loop critic artifacts present. I did not read prior critic reviews under the blind-review rule. |
| C26–C29 | PASS | Desktop/mobile mouse drag sequence, front → back → front labels/guidance, drag/scroll alignment, brighter live scan styling and still fallback. |

## Independence and limits

I did not build or edit the implementation and did not read prior scores or Design Loop review text. This review used builder-captured browser logs/screenshots and shared local files, so the capture process and filesystem were not blind or independently isolated. I independently inspected the rendered evidence, source wiring, content fingerprints, repository head and public HTTP routes/assets. The live route log does not itself include a source fingerprint; the later public request verifies the model asset, while the pushed commit and local hashes bind the remaining reviewed source. No customer message or order was sent.

No genuine N/A criteria, unresolved defects or required unverified checks are recorded. If the current source or assets change, recapture and obtain a fresh review before relying on this verdict.
