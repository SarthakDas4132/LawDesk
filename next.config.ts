import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Next.js internal/experimental option requested by error
  allowedDevOrigins: ['10.10.0.16'],
  async redirects() {
    return [
      {
        source: '/terms-and-conditions',
        destination: '/terms-of-use',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
