# Vijay Innovation Technology website

Company website built with [Astro](https://astro.build). It compiles to a static site with no
framework JavaScript, and every image is resized and converted to AVIF/WebP at build time.

## Edit content

All text (contact details, machines, quality policy, industries, process steps, certifications)
is in `src/data/site.ts`. Images live in `src/assets/`.

## Run locally

Requires Node.js 22.23 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
npm run preview  # serve the built site
```

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages, cPanel).

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22 (see `.nvmrc`)
