import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site: `vinext build` prerenders every route into dist/client/,
  // which is deployed as static files (Vercel, Render static, Netlify, etc.).
  output: 'export',
};

export default nextConfig;
