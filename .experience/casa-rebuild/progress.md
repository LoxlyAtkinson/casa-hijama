# Progress

Active contract: `contract-and-section-map.md`. Reference mechanisms: `bar.md`.

Status: Repaired after [raw review 01](reviews/review-01.md); awaiting fresh independent review of the final captures and source. The prior verdict remains FAIL and is retained unchanged.

Changed implementation: `index.html`, `src/main.js`, `src/styles.css`, `products.json`, `public/assets/`, `package.json`, `package-lock.json`, `vercel.json`, `README.md`, `scripts/verify-experience.cjs`. Exact current hashes are in `final-source-manifest.json`.

Repairs: corrected product 24/25 PNG paths in cards/dialogs; provided WebM encoding of the Higgsfield film and synchronized its play/pause control; added an address/directions card that remains visible if the external map fails. Saved new browser captures as actual PNGs in `evidence/final/` rather than altering the first review's evidence.

Checks completed: `npm run build`; 32 real Chromium observations in `evidence/final/browser-log.json` with matching PNG captures. This includes every route in light/dark at 1440×900 and 390×844 with full-page inspection and zero horizontal overflow, all 30 product images, soap filtering and image dialogs, A–Z sort, keyboard dialog/FAQ, blank and completed booking, blocked WhatsApp handoff and fallback destination, map directions fallback, film pause and failed-film still, reduced motion, mobile menu/dialog, and theme persistence. The 32 captures pass the project's PNG decoder check.

Open: obtain a fresh independent review of the final source and evidence, repair any findings, then run `python scripts/check-experience-acceptance.py <latest-judge-verdict.json>` before any completion claim. Deployment is outside this authorization.
