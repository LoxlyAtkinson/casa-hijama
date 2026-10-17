# Progress

Active contract: `contract-v4.md`. Outcome path: `outcome-map.md`. Reference mechanisms: `bar.md` and `bar-v2.md`.

2026-10-17 active work: the interim public preview is live at https://loxlyatkinson.github.io/casa-hijama/ from repository https://github.com/LoxlyAtkinson/casa-hijama. The user explicitly authorized publication and autonomous improvements. Three specialized builders are working on the real 3D body, Scroll Craft motion and shop journey, including the latest product/cart visual reference. The Restore image was replaced with a cupping-tool still life and published in interim commit `03055dd`. The current source and browser evidence below predate these active changes and must not be used for final acceptance.

Latest Design Loop critic findings remain open until repaired and re-reviewed: home anatomy/back-focus mismatch and mobile step skipping; shop product flyer-wall composition and unverified mobile/reduced-motion craft; body still needs final continuous clinical 3D proof. Exact next step: merge builder work, run connected desktop/mobile/dark/reduced-motion journeys, capture final revision, request fresh independent brief/system/craft and acceptance reviews, repair findings, run checker, push and verify public deployment.

Status: Repaired after [raw review 01](reviews/review-01.md); awaiting fresh independent review of the final captures and source. The prior verdict remains FAIL and is retained unchanged.

Changed implementation: `index.html`, `src/main.js`, `src/styles.css`, `products.json`, `public/assets/`, `package.json`, `package-lock.json`, `vercel.json`, `README.md`, `scripts/verify-experience.cjs`. Exact current hashes are in `final-source-manifest.json`.

Repairs: corrected product 24/25 PNG paths in cards/dialogs; provided WebM encoding of the Higgsfield film and synchronized its play/pause control; added an address/directions card that remains visible if the external map fails. Saved new browser captures as actual PNGs in `evidence/final/` rather than altering the first review's evidence.

Checks completed: `npm run build`; 32 real Chromium observations in `evidence/final/browser-log.json` with matching PNG captures. This includes every route in light/dark at 1440×900 and 390×844 with full-page inspection and zero horizontal overflow, all 30 product images, soap filtering and image dialogs, A–Z sort, keyboard dialog/FAQ, blank and completed booking, blocked WhatsApp handoff and fallback destination, map directions fallback, film pause and failed-film still, reduced motion, mobile menu/dialog, and theme persistence. The 32 captures pass the project's PNG decoder check.

Open: obtain a fresh independent review of the final source and evidence, repair any findings, then run `python scripts/check-experience-acceptance.py <latest-judge-verdict.json>` before any completion claim. Deployment is outside this authorization.
