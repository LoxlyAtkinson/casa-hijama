# Casa Hijama design system

This records the visual rules used for the local rebuild. It is based on the existing site's turquoise and sage identity, studio imagery, and the rebuilt pages' implemented tokens. It is the objective bar for Design Loop system critiques.

## Identity

- Name: Casa Hijama. Tone: calm, warm, confident, welcoming.
- Palette: turquoise `#62b9bd`, deep teal `#1c7f84`, sage `#94b57b`, ivory `#f8f7f3`, warm gold `#a57b4d`.
- Light surfaces: ivory page background and near-white cards. Dark surfaces: deep green-black `#101b1c`, with `#172729` cards and pale text `#edf5ee`.
- Use turquoise for primary actions, emphasized headline words, and small labels. Keep large areas calm; sage and gold support the palette.

## Type and layout

- Manrope for headlines, DM Sans for reading text and controls.
- Headlines use short lines, close tracking, and clear contrast with body copy. Each main section has a small uppercase eyebrow and a large heading.
- Desktop content width is at most 1380px with 4vw side margins; mobile sections keep approximately 20px side margins.
- Desktop sections have generous vertical space, scaling down on narrow screens. Related cards share dimensions and alignment.

## Components and behavior

- Sticky header with brand, primary routes, theme switch, and booking action. Mobile header uses an explicit menu button and readable open state.
- Primary buttons are turquoise pill shapes with dark text. Secondary calls to action are underlined text links or pale pills over dark media.
- Product cards use the original product imagery and consistent category, title, description, price, and enquiry positions. Product detail is a keyboard-operable modal.
- Booking fields use visible labels, browser validation, pending-confirmation copy, and an explicit WhatsApp recovery link.
- Decorative motion is restrained. Studio film has a pause control, still fallback, and no media source when reduced motion is requested.
- Light and dark modes must preserve readable contrast on every route. Theme preference persists across route changes and reload.

## Shop and body journey extension

- The supplied shop reference is a flow reference: discovery, one focused product, then bag review. Reinterpret its soft off-white product staging with Casa Hijama turquoise/sage, existing product photography, and real ZAR/enquiry labels. Avoid presenting a payment checkout that does not exist.
- Product cards and controls enter with restrained stagger; the product detail and bag are the primary state changes. Motion should complete quickly, remain interruptible, and preserve all information under reduced motion.
- The body section uses a near-black or deep teal field and a translucent cyan clinical figure with localized coral focus, following the owner's later `3d human body.jpg` reference. Sage remains in the wider Casa palette; the clinical scan is a deliberate visual chapter within it. Three marked regions lead the reader through neck/shoulders, upper back and lower back. Copy sits in semantic HTML, never inside the image.
- Body progress is driven by native scroll in both directions. Region controls offer an equivalent keyboard path. Under reduced motion, show the explanatory steps in ordinary flow with the figure remaining visible and no pinned scrubbing.
- Health language names uncertainties and risks plainly. No numerical health score, personalized diagnosis, or guaranteed pain relief is part of the visual system.
