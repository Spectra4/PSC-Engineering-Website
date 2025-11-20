import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PSC-Engineering-Website",          // 👈 subfolder path
  assetPrefix: "/PSC-Engineering-Website/",      // 👈 ensures _next assets load correctly
  trailingSlash: true,                  // 👈 optional, makes URLs end with /
  images: {
    unoptimized: true,                  // disables server-side image optimization
  },
  reactStrictMode: true,
};

export default nextConfig;
