# Casa Hijama v5 — independent acceptance review (FAIL)

Date: 2026-10-17. Reviewer: Codex independent judge `/root/v5_final_acceptance`. I did not build v5. Active contract: `../contract-v5.md`, C1–C25. Active progress: `../progress-v5.md`. Neutral change checklist received: two-scene cupping-to-room home hero; live WebGL front/back body with three regions, 200% focus and four-question local intake; mobile, dark, reduced-motion and WebGL-failure paths; preserved treatments, shop, booking and routes.

## Verdict

**FAIL, 72/100 (18 of 25 criteria pass).** The changed revision `be943c2ad0881fd258caaea45365731a0e9dded1` is on the public repository and its Pages workflow succeeded, but its 390px mobile opening displays a broken hero image. The `<source srcset="/assets/hero-cup-macro-mobile.png">` in `src/main.js` is not rewritten for the `/casa-hijama/` Pages base path. Live Playwright requested `https://loxlyatkinson.github.io/assets/hero-cup-macro-mobile.png` and received **404**; the fallback `<img src>` points to the correct subpath but the browser selects the broken mobile `srcset`. `live-mobile-hero-recheck.png` shows a broken-image icon and empty image field. This fails C7, C8, C9, C18, C21, C22 and C25. The local application at `http://127.0.0.1:4173/` answered HTTP 200, but it runs at the root and did not expose this deployment defect.

## Visual judgment

I inspected final v5 start/room/exit hero frames, front/upper/lower/reverse/200% body states, mobile dark/reduced/fallback states, rendered check-in panels, route full captures, populated/empty bag, product and booking captures. Local desktop opening places one large glass cup against a dark field, with concise high-contrast headline and booking action. Scrolling resolves to a distinct private-room image and headline in the local captures. The published mobile opening **does not** show the cup. The full local home transitions coherently from dark opening to light introduction/services, dark body and film chapters, then quote, proof, pricing, products, booking and location. The treatment images communicate cupping/massage and show no mannequin.

The normal-motion body screenshots show a continuous translucent cyan silhouette with anatomical linework, front-to-back turn, subdued inactive markers, localized coral focus and readable region guidance. At 200%, the lower-back light and surface gain priority while the region navigation and action remain available. Mobile frames preserve the whole figure at default scale, named controls and readable copy. The reduced-motion and WebGL-failure captures show a usable synthetic still. The check-in captures show four questions, though the mobile viewport cuts off its bottom action; the browser log records that the action is present and accessible in the scrollable dialog. The shop's light neutral product stages, teal add controls and bag with image, title, quantity, subtotal and recovery link are visually coherent. Full route captures show no clipped primary sections or blank pages. No meaningful achievable local design defect was found in the scoped states.

## Source and behavior judgment

I separately read the changed design system, `src/main.js`, `src/scroll-motion.css`, `src/body-journey.js`, `src/body-journey.css`, the two macro cup PNGs, `scripts/verify-experience.cjs`, `scripts/verify-reference-v5.cjs`, and the three new shop packshots. The hero uses distinct local desktop/mobile cup assets plus the room still, pinned scroll progress and two text cues. The WebGL source builds a continuous implicit body mesh, layered clinical linework, front/back orientation, raycast markers and a 100–200% zoom. On renderer/context failure it exposes the still fallback; reduced motion disables pinned body scrolling and displays all three explanatory panels. Source copy states the evidence limits, wet/dry distinction, clinician escalation and local-only answers, with an NIH cupping guide link. The WhatsApp booking handler leaves a visible fallback link. No payment checkout was introduced.

The 76-observation local browser log has 76 PASS entries and 76 matching PNGs. I independently recomputed the broad and narrow source revision hashes from current bytes: `77ad23392b5a2d457aa3291e0bac2d6411f06471c213a605f82bb0021a2f88a7` and `f00c30e097db843b192de9aa5da7ece6f53e14e62aba84020602445aaf26ba23`, matching its two observation batches. The recorded actions cover all four local routes at 1440 and 390 in light/dark; shop search, sort, dialog, empty/populated bag and no-JavaScript baseline; booking invalid, ready and blocked handoff; FAQ/menu; film scrub/pause/fallback; body forward/reverse, keyboard region activation, check-in, 200% zoom, reduced motion and WebGL failure. I separately probed the live repository and Pages preview: GitHub reports public `main`, deployment workflow `39032319222` completed successfully for the same HEAD; live HTTP returned 200 for all four direct routes and the correctly prefixed asset URLs. A live browser rendered all four route headings at 1440 and 390 with no horizontal overflow and the WebGL canvas present. The live mobile image request failed at the **unprefixed** URL, as recorded in the reviewer-authored failure log and screenshot. This is why passing local/HTTP checks do not establish the published mobile experience. The builder-produced log and shared filesystem limit procedural blinding; I directly inspected rendered captures and ran the independent live browser probe.

## Criteria

| Criteria | Result | Basis |
| --- | --- | --- |
| C1–C6 | PASS | Full home/treatment/product/information local captures, booking, theme and current source. |
| C7–C9 | FAIL | Published 390px hero loses its dominant image; live failure was absent from local evidence. |
| C10–C13 | PASS | Shop journey, body scroll/control flow and cautious sourced health copy evidenced in captures, log and current source. |
| C14 | PASS | Public GitHub repository and current source HEAD confirmed; README and exclusion of build output checked. |
| C15–C17 | PASS | Normal/mobile body steps, check-in and continuous WebGL surface. |
| C18 | FAIL | Published mobile scroll hero has no opening visual because selected `srcset` is 404. |
| C19–C20 | PASS | Subject-specific treatment imagery; neutral shop stages and functional bag. |
| C21–C22 | FAIL | Deployment succeeded and direct pages respond, but a required changed mobile asset path fails in the live browser, removing the single dominant opening visual. |
| C23–C24 | PASS | Cyan/coral WebGL body, front/back/zoom, three regions, keyboard intake, mobile/dark/reduced/failure paths. |
| C25 | FAIL | Changed home states and independent Design Loop critics exist, but the published mobile home fails. |

Coverage, composition, behaviour, evidence and completion gates FAIL for the live mobile hero. Independence and repair-loop records remain intact. Previous Design Loop raw reports remain in `reviews/`; I inspected the latest brief, system and craft reports to verify the separate C25 design-critic requirement, without adopting their visual conclusions. This review is procedurally independent but not blind to the shared filesystem, builder-generated browser run or existing reports. I did not modify implementation.

## Exact resume step

Fix the mobile hero `srcset` in source to use the Pages base path. Rebuild, rerun the complete affected local journey, recapture, redeploy and verify the live 390px hero after `networkidle` or an explicit image load assertion. Obtain a fresh independent review of that repaired revision; retain this failed raw verdict unchanged as historical evidence.
