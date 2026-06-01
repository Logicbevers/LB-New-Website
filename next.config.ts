import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    localPatterns: [
      {
        pathname: "/api/og",
        search: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        // HTML pages — always revalidate before serving from cache
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        // Static assets are content-hashed — safe to cache for 1 year
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/services/managed-it",    destination: "/services/digital-transformation", permanent: true },
      { source: "/services/ai-automation", destination: "/services/ai-llm-integration",     permanent: true },
      { source: "/services/cloud-solutions", destination: "/services/cloud-finops",          permanent: true },
      { source: "/services/cybersecurity",  destination: "/services/zero-trust-security",   permanent: true },
      { source: "/services/support-24-7",   destination: "/services/managed-soc",           permanent: true },
    ];
  },
};

export default nextConfig;
