import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gaoping.site" }],
        destination: "https://gaoping.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
