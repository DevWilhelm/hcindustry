import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Falls back to a full page load when client-side navigation fetches fail.
    appNavFailHandling: true,
  },
};

export default nextConfig;
