# HealthCareIndustryResearch

Southeast Asia healthcare market-intelligence site. Built with [vinext](https://github.com/cloudflare/vinext)
(Next.js App Router on Vite) + React 19, Tailwind CSS 4, and shadcn UI.

## Local development

```bash
npm install
npm run dev      # http://localhost:3001
```

## Production build

```bash
npm run build    # emits a self-contained Node bundle at dist/standalone/
npm start        # runs: node dist/standalone/server.js
```

The server honours `PORT` (default `3000`) and `HOST` (default `0.0.0.0`).

## Deploy to Render

This repo ships a [`render.yaml`](./render.yaml) Blueprint.

1. Push the repo to GitHub/GitLab.
2. In Render: **New +** → **Blueprint** → pick this repo.
3. Render runs `npm ci && npm run build`, then `npm start`, and routes `$PORT` to the service.

Node version is pinned in [`.node-version`](./.node-version) (`22.13.0`).

Manual setup (without the Blueprint): create a **Web Service**, Runtime **Node**,
Build Command `npm ci && npm run build`, Start Command `npm start`.

## Scripts

| Script           | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Dev server with HMR (port 3001)          |
| `npm run build`  | Production build → `dist/standalone/`    |
| `npm start`      | Run the built standalone server          |
| `npm run lint`   | oxlint                                   |
| `npm run format` | oxfmt                                    |
