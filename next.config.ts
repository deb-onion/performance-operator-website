import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
// API routes enabled for Cloudflare Pages
