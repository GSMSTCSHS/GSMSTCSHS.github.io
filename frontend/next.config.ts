import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    turbopack: {
      root: __dirname, // make root this folder
    },
};

export default nextConfig;
