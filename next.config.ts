import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  
  experimental: {
    // Next.js 15 dev origins stability
    allowedDevOrigins: [
      '6000-firebase-studio-1777488117354.cluster-2nmnojxdmnfh2vwda4kd7uoumu.cloudworkstations.dev',
      '9000-firebase-studio-1777488117354.cluster-2nmnojxdmnfh2vwda4kd7uoumu.cloudworkstations.dev'
    ]
  }
};

export default nextConfig;
