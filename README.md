# HealthCare Industry Research

Southeast Asia healthcare market-intelligence site. Built with [vinext](https://github.com/cloudflare/vinext)
(Next.js App Router on Vite) + React 19, Tailwind CSS 4, and shadcn UI.

The site is fully static — every route is prerendered to HTML at build time
(`next.config.ts` sets `output: 'export'`). There is no server or API.

## Local development

```bash
npm install
npm run dev      # http://localhost:3001
```

## Production build

```bash
npm run build    # prerenders every route into dist/client/
npm start        # optional: preview the built site (vinext start)
```

`npm run build` output is the static folder `dist/client/` (HTML + assets + `404.html`).

## Deploy

Any static host works. Point it at build command `npm run build` (or `vinext build`)
and publish directory `dist/client`. Node version is pinned in
[`.node-version`](./.node-version) (`22.13.0`).

**Vercel** — [`vercel.json`](./vercel.json) is included (`framework: null`,
`outputDirectory: dist/client`, `cleanUrls`). Import the GitHub repo; no dashboard
config needed. Do **not** let Vercel auto-detect a framework — the included
`vercel.json` handles it.

**Render** — [`render.yaml`](./render.yaml) Blueprint: **New +** → **Blueprint** →
pick this repo. Creates a static site serving `dist/client` (`/about` is served
from `about.html` automatically; misses use `404.html`).

## Scripts

| Script           | Purpose                                   |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Dev server with HMR (port 3001)           |
| `npm run build`  | Static production build → `dist/client/`  |
| `npm start`      | Preview the built static site locally     |
| `npm run lint`   | oxlint                                    |
| `npm run format` | oxfmt                                     |
