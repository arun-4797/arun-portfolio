# Arun Kumar — Personal Portfolio

A responsive, framework-free portfolio and online résumé built with HTML, CSS and JavaScript for deployment on Vercel.

## Files
- `index.html` — content, résumé, experience, projects, skills and contact sections
- `styles.css` — responsive editorial design, scroll reveals, animated visual details
- `script.js` — mobile navigation, reading progress bar, and scroll-triggered reveals
- `assets/Arun-Kumar-Resume.pdf` — résumé download

## Deploy to Vercel
1. Upload the contents of this folder to the root of the GitHub repository connected to Vercel. Keep `index.html`, `styles.css`, `script.js`, and the `assets` folder at the repository root.
2. In Vercel, set Framework Preset to `Other`.
3. Keep Build Command, Output Directory, Install Command, and Development Command empty. Root Directory should be `./` (or blank if Vercel interprets blank as repository root).
4. Commit/push the changes. Vercel should automatically create a deployment.

## Before public sharing
- Review all contact details and the résumé PDF.
- The Meta Ads screenshots show two separate account summaries; they are deliberately not combined.
- The pregnancy-yoga figures are calculated from 10 visible rows only and are marked provisional.
- Google Ads metrics are from the account overview screenshot for the displayed date range; they are not attributed to one campaign.
- Messaging conversations are not equivalent to unique leads or paid enrolments. Paid enrolment data was only partially available.
- Confirm the reporting periods and permission to publish campaign/account metrics before making the site public.

## Motion and accessibility
Scroll reveal animations use `IntersectionObserver`; the site respects `prefers-reduced-motion`. No framework or build step is required.
