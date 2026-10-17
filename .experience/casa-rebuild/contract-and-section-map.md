# Casa Hijama rebuild acceptance contract

Date: 2026-10-17. Source: https://www.casahijema.com/ and its `/cupping-therapy`, `/products`, `/more-information` routes. Reference: https://www.apple.com/apple-watch-series-12/.

## Outcomes and scope

Build a local, responsive rebuild of Casa Hijama with all current core services, product ordering, prices, booking, testimonials, address and contact details. Preserve the turquoise, sage, ivory and warm gold identity. Add a complete dark mode. Use Apple Watch Series 12 as a reference for image-led pacing, headline scale, restrained navigation and visual transitions. No deployment is authorized. English is the observed locale. Visitors can browse treatments and products, request appointments, and use contact links. Desktop and narrow mobile viewports are supported.

## Frozen criteria

C1 The home route includes a distinctive introduction, Casa Hijama identity, treatments, studio context, traditional quote, testimonials, wet cupping prices and conditions, booking, products entry, contact details and location map.
C2 The treatments route explains wet cupping, dry cupping, massage, private separate studios and therapist choice, with direct booking and price links.
C3 The products route presents all 30 observed products, seven categories, images, prices or enquiry labels, working filtering and sorting, product details and WhatsApp enquiries.
C4 The information route gives treatment context, visit details and useful expandable questions.
C5 The appointment request has all observed required and optional fields, validation, clear pending-confirmation language, an accurate WhatsApp message and visible recovery when automatic handoff is blocked.
C6 Light and dark modes preserve the existing brand colors, maintain readable contrast, work across all routes and persist after navigation/reload.
C7 Desktop and 390px mobile layouts have no clipped primary content or horizontal overflow; navigation, dialogs, forms and route links remain usable by keyboard.
C8 Media has descriptive alternatives or decorative treatment, a still fallback, pause control and reduced-motion behavior. Loading and external-destination failures have a useful path to continue.
C9 Captured final browser evidence records routes, states, viewports and interactions; an independent reviewer finds no meaningful achievable defects in the scoped design and journeys.

## Numbered change list

1. Build shared header, footer and light/dark tokens.
2. Rebuild home narrative and every observed home section.
3. Build treatments and information routes.
4. Rebuild the catalog from the 30 observed product records and product images.
5. Rebuild appointment request with WhatsApp handoff and fallback link.
6. Integrate local still imagery and Higgsfield studio film.
7. Verify desktop, mobile, light, dark and critical interactions.

## Section map

| Route / section | Purpose and position | Adjacent relationship | Treatment |
| --- | --- | --- | --- |
| Shared header | Brand, route navigation, theme, booking | Enters every page | Sticky and static for reliable navigation |
| Home hero | Introduce emotional promise and booking | Leads into actual studio | Image-led, static for immediate readability |
| Welcome/studio | Preserve identity, location, private care | Grounds hero before services | Image and reveal; text remains visible with reduced motion |
| Treatments cards | Let visitors choose wet, dry or massage | Leads to full treatment route | Consistent cards and subtle hover |
| Studio film | Show atmosphere | Pause between services and heritage | Motion with pause and still fallback |
| Traditional quote | Preserve core religious context | Bridges film and social proof | Static for careful reading |
| Testimonials | Preserve named reviews and Google review path | Before prices | Static cards for reading |
| Prices | Make wet cupping price tiers and conditions scannable | Before product support and booking | Static table-like cards for accuracy |
| Product teaser | Enter catalog | Before appointment | Static image cards |
| Booking | Collect request and hand off to WhatsApp | Before address | Form validation and explicit feedback |
| Location | Address, map, directions | Before footer | Static map with directions fallback |
| Shared footer | Contact, routes, social links, final booking | Ends each page | Static for dependable utility |
| Treatments detail | Explain each service and route to booking | Intro → wet → dry → massage → CTA | Static long-form reading |
| Products hero/catalog | Introduce products, filter/sort, open details, enquire | Hero → collection → footer | Static catalog with interactive controls |
| Information intro/articles/FAQ | Explain tradition and visit, answer common questions | Intro → articles → footer | Static articles and native disclosure controls |

## States to verify

Default and dark themes, desktop and mobile navigation, filter and sort, product dialog open/closed, booking blank and completed, WhatsApp fallback, FAQ expanded, reduced motion, image/video fallback, location-map fallback and external link destination.
