# Arun Kumar — Portfolio

A responsive, static portfolio built with HTML, CSS and vanilla JavaScript. The visual direction is a hybrid editorial identity: warm paper tones, restrained sage accents, deep-green performance panels and rich scroll-driven storytelling.

## Deploy to Vercel

1. Extract this ZIP.
2. Create a new GitHub repository (or replace the contents of your existing `arun-4797/arun-portfolio` repository).
3. Upload the contents of this folder to the repository root. `index.html`, `styles.css`, `script.js` and `assets/` should sit at the root level.
4. In Vercel, choose **Add New → Project**, import the GitHub repository.
5. Framework Preset: **Other**. Build Command: leave empty. Output Directory: `.`. Install Command: leave empty.
6. Deploy. Future GitHub pushes will trigger deployments automatically.

No build step or package installation is required.

## Animation

GSAP 3.12.5 and ScrollTrigger are loaded from jsDelivr. ScrollTrigger powers scroll-linked transitions and project storytelling on larger screens. Mobile uses a simpler natural-flow layout for readability and performance. Users with `prefers-reduced-motion` enabled receive the non-animated version.

GSAP ScrollTrigger documentation: https://gsap.com/docs/v3/Plugins/ScrollTrigger/

## Included

- `index.html` — full portfolio content and metadata
- `styles.css` — responsive styling and visual system
- `script.js` — scroll progress, navigation and animation behaviour
- `assets/Arun-Kumar-Resume.pdf` — supplied résumé PDF

## Before publishing

- Confirm that the phone number and email are still correct.
- The supplied résumé PDF is linked in the hero and contact sections.
- Meta account summaries are intentionally displayed as two separate accounts, not combined.
- Yogakulam Bengaluru Google Ads and Attica Gold Company Google Ads are separate projects.
- Platform figures are transcribed from screenshots you supplied. They are not independently audited. Google Ads reported conversions are not described as verified sales.
- The dashboard charts and website preview panels are illustrative visualisations, not original platform exports or screenshots.
- YouTube channel names shown are their current public names; the portfolio explains the earlier names and that your involvement preceded the rebrand.

## Editing

Update copy in `index.html`; colours and layout in `styles.css`; animation timing and behaviour in `script.js`. The project is dependency-free apart from the externally hosted Google Fonts and GSAP CDN scripts.
