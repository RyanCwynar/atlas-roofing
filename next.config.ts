import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/atlas-roofing",
  assetPrefix: "/atlas-roofing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
