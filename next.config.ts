import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: "/recenzii/:slug",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/recenzii",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
