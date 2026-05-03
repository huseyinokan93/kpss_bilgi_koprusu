import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      "9000-firebase-studio-1777488117354.cluster-2nmnojxdmnfh2vwda4kd7uoumu.cloudworkstations.dev",
      "6000-firebase-studio-1777488117354.cluster-2nmnojxdmnfh2vwda4kd7uoumu.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;