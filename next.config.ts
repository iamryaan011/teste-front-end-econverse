import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.econverse.com.br",
        port: "",
        pathname: "/**"
      }
    ]
  },
};

export default nextConfig;
