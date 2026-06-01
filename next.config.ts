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
        // HTML pages — never serve stale; always fetch fresh from server
        source: "/((?!_next/static|_next/image|favicon|icon|apple-touch-icon).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
      {
        // Static JS/CSS chunks — content-hashed filenames, safe to cache forever
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Optimised images — cache for 1 day
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
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
