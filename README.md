# Casa Hijama website rebuild

**Public client preview:** https://loxlyatkinson.github.io/casa-hijama/

The GitHub Pages workflow publishes each push to `main`. The preview is the current work in progress; direct URLs for `/products/`, `/cupping-therapy/` and `/more-information/` are included in the static build.

Responsive four-route Vite site with light and dark themes, a scroll-led body guide, an animated 30-product collection and enquiry bag, treatment information, and an appointment request. Product and appointment actions prepare WhatsApp messages. A request is sent only when the visitor sends the message in WhatsApp; product enquiries are not a payment checkout.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL printed by Vite. `npm run build` creates the production files in `dist/`. `vercel.json` provides fallback routing for direct visits to `/cupping-therapy`, `/products`, and `/more-information` on Vercel.

The body guide highlights three areas as visitors scroll or use its region controls. Its guidance is general information, includes a link to the [NIH cupping guide](https://www.nccih.nih.gov/health/cupping), and does not diagnose a condition or guarantee pain relief. Reduced-motion visitors see all guidance in ordinary page flow.

The original Casa Hijama product images and studio image are in `public/assets/`. The illustrative room film was generated with Higgsfield and includes MP4 and WebM encodings. Scrolling scrubs its frames; Pause motion holds the visible frame while scrolling, and Play motion returns to the current scroll position. A still poster remains available while the film loads. Visitors who prefer reduced motion see the poster without loading the video.

Browser acceptance records, captures, and independent reports are in `.experience/casa-rebuild/`.

To run the browser check locally, install Chromium once with `npx playwright install chromium`, start the site on port 4173 with `npm run dev -- --port 4173`, then run `npm run verify:experience` in another terminal.
