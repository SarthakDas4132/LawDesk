import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Next.js internal/experimental option requested by error
  allowedDevOrigins: ['http://192.168.1.10:3000'],
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
