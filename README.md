# Arun Kumar — Personal Portfolio

A responsive, minimal-white personal portfolio built with HTML, CSS, and JavaScript. It is intentionally framework-free, so it is lightweight and straightforward to deploy on Vercel.

## Before publishing

1. Open `index.html` and replace `YOUR_EMAIL@example.com` with the professional email address you want displayed.
2. Replace the generic LinkedIn URL (`https://www.linkedin.com/`) with your profile URL.
3. Review all wording and confirm it reflects your experience accurately.
4. Add verified case-study details and only share campaign numbers or client assets you have permission to publish.
5. If desired, add a resume PDF and a link to it in the hero or contact area.

## Preview locally

Open `index.html` in a browser. No build step is required.

## Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a new repository on GitHub, for example `arun-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README to the repository root.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the repository. As this is a static site, no framework preset or build command is needed. Leave the output directory empty/default and deploy.
5. Vercel will provide a public `*.vercel.app` URL.

### Option B — Vercel CLI
Install Node.js, then run:

```bash
npm install -g vercel
cd arun-portfolio
vercel
```

Follow the CLI prompts. For production deployment, run `vercel --prod`.

## Design notes

- Responsive navigation for mobile
- Semantic sections and basic metadata
- Reduced-motion support
- No external JavaScript dependencies
- Google Fonts are loaded from Google Fonts; system fallbacks are included

## Current status

This is a starter portfolio, not yet publication-ready. Contact links and project case studies must be reviewed and completed before sharing with recruiters or clients.
