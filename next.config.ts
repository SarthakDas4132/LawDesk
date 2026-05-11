import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Next.js internal/experimental option requested by error
  allowedDevOrigins: ['10.10.0.16'],
};

export default nextConfig;
