import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site: `vinext build` prerenders every route into dist/client/,
  // which is deployed as static files (Vercel, Render static, Netlify, etc.).
  output: 'export',
  experimental: {
    // Static hosts (Vercel static, Render, Netlify) can't do the header-based
    // content negotiation client-side <Link> navigation relies on for RSC
    // transitions, so every navigation fetch silently fails and clicks do
    // nothing. This makes vinext fall back to a full page load when that
    // happens, which works correctly since each route is a prerendered HTML
    // file. Required for this project's static-export deployment target.
    appNavFailHandling: true,
  },
};

export default nextConfig;
