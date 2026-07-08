import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static export: one pre-rendered HTML file per route, no runtime server.
  // Fast on a cheap phone over 3G, trivially cacheable offline, host-agnostic.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
