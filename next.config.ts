import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit a self-contained Node bundle at dist/standalone/ for hosting on
  // Render (or any Node host). Start it with `npm start`.
  output: 'standalone',
};

export default nextConfig;
