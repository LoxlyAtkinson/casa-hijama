# Casa Hijama v5 — independent acceptance review, repair round 2

Date: 2026-10-17. Reviewer: Codex independent judge `/root/v5_final_acceptance`. I did not implement this revision. Active frozen contract: `../contract-v5.md` (C1–C25). Active progress: `../progress-v5.md`. The prior `review-v5-final.md/json` FAIL remains historical; I did not alter it. This is a new review of deployed commit `f65fa0577cf053b8ba9c5c8945b09f3d7de76f5e` and current implementation sources.

## Verdict

**PASS, 100/100 scoped acceptance.** The previously broken published 390px cup image now loads from `/casa-hijama/assets/hero-cup-macro-mobile.png`; its `naturalWidth` is 941, and the live screenshot shows the full cup, readable copy and booking action. The desktop cup asset also loads, and both viewports scroll to a distinct, legible private-room scene. No meaningful achievable defect remains in the frozen scope on the reviewed revision.

## Visual judgment

I inspected fresh deployed desktop/mobile cup and room captures, live route screenshots, and the retained unaffected body, film, booking, treatment and shop states. On desktop the single cup dominates the opening against a dark field; the headline and booking action remain legible in the opposite copy field. On mobile the vessel remains fully recognizable above the short headline and action. The second scene replaces the subject with the private room, with the bed and copy arranged as one composition. The cyan clinical body is continuously rendered with front/back views, three localized coral focuses and a clear 200% lower-back focus; mobile, dark, reduced-motion and static WebGL fallback presentations remain usable. The home’s light/dark pacing, treatment subjects, editorial hierarchy, neutral shop stages, bag review, booking and location compose a coherent full journey. Full-page local route captures and fresh live route captures show no blank or clipped primary sections.

## Source and behavior judgment

I separately inspected current `design-system.md`, `src/main.js`, `src/scroll-motion.css`, `src/body-journey.js/css`, the two cup assets, new shop packshots, and the three verification scripts. Commit `f65fa05` changes the asset prefix in `src/main.js` from root `/assets/` to `${BASE}assets/`, which fixes the selected `<picture><source srcset>` on GitHub Pages and also prefixes product/still URLs. The relevant source retains the WebGL implicit body surface, front/back turn and 100–200% zoom, named keyboard controls, four-question local intake, reduced-motion and failure fallback, cautious health copy and NIH source link. WhatsApp booking and bag actions retain explicit recovery links. The fix does not change body/film/shop behavior logic; earlier local interaction captures for those unchanged paths remain relevant, while affected published media was recaptured live.

The old local `browser-log-v5.json` has 76 PASS observations and matching captures at the pre-fix source hash; I use it only for unchanged behavior and section coverage, not as proof of the corrected Pages asset path. Fresh live `live-browser-log.json` records eight PASS route/viewport observations: all four direct URLs at 1440×900 and 390×844 rendered with HTTP 200, no horizontal overflow, 30 catalog products, and a live WebGL body on home. My independent `live-r2-hero-log.json` records the correct deployed desktop/mobile cup URLs, loaded pixels and room scene opacity/image at both widths; screenshots were visually inspected. My `live-r2-products-loaded-log.json` records all 30 images loading at each width after their cards entered the viewport. An exploratory vertical-only desktop probe initially called six lazy images “failed” while their carousel cards were still horizontally offscreen; all six URLs returned HTTP 200, and scrolling every card into view produced 30/30 loaded images. That exploratory false positive is retained in `live-review-r2.json` but is not a required final browser observation.

The GitHub repository is public under `LoxlyAtkinson`; deployed workflow run `39032686456` completed successfully for the same `f65fa057…` HEAD. The repository includes source, assets and README instructions, with no tracked `dist`, `node_modules` or `.env` paths. Live browser entry renders each direct route, and the selected cup/room assets, body canvas and product imagery load. The current source-to-observation relationship is recorded in the machine verdict with exact SHA256 hashes.

## Frozen criteria and method gates

| Criteria | Verdict | Evidence |
| --- | --- | --- |
| C1–C6 | PASS | Full home and route inventory, service/pricing/booking/shop content, theme states and source. |
| C7–C9 | PASS | Repaired live mobile media, desktop/mobile route captures, keyboard/fallback evidence and independent visual judgment. |
| C10–C13 | PASS | Catalog discovery, focus, bag and WhatsApp; three-region body guidance and cautious sourced health copy. |
| C14 | PASS | Public repository, source/assets/README, clean tracked output, matching deployed HEAD. |
| C15–C20 | PASS | WebGL body front/back/zoom/intake; staged motion, treatment imagery and product-to-bag journey. |
| C21 | PASS | Successful Pages run for current commit; direct routes and media operate in live browser. |
| C22–C24 | PASS | Dominant two-scene hero and current clinical WebGL visual with all requested access paths. |
| C25 | PASS | Changed home captures, independent Design Loop brief/system/craft reports, live publication and direct routes. |

All seven mandatory gates PASS. Earlier raw Design Loop and acceptance failures are retained; the previous publication defect was repaired, recaptured and reviewed against the same frozen criteria. I considered the latest Design Loop brief/system/craft reports for the required separate critics but made my own visual and source judgments. Procedural blinding is limited by shared filesystem, builder-generated local logs and public access to historical reviews. I directly ran the fresh live browser checks and inspected the resulting pixels. I did not edit implementation.

The acceptance checker result and machine verdict are in `review-v5-r2.json`.
