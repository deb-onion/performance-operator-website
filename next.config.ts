import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optimized for Cloudflare Pages deployment
  experimental: {
    optimizePackageImports: ['@/components', '@/lib']
  }
};

export default nextConfig;
// API routes enabled for Cloudflare Pages
