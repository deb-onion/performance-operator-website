import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable webpack cache for Cloudflare Pages to avoid 25MB file size limit
  webpack: (config, { isServer }) => {
    // Disable cache for server builds to prevent large cache files
    config.cache = false;
    return config;
  }
};

export default nextConfig;
// API routes enabled for Cloudflare Pages
