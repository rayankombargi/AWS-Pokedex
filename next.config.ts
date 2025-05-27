import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/pokemon',
        destination: '<PLEASE_REPLACE_IT_WITH_YOUR_BACKEND_URL>/Prod/pokemon',
      },
      {
        source: '/api/pokemon/:id',
        destination: '<PLEASE_REPLACE_IT_WITH_YOUR_BACKEND_URL>/Prod/pokemon/:id',
      },
    ];
  },
};

export default nextConfig;