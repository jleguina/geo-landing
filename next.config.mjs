/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Turbopack configuration
  experimental: {
    // Enable Turbopack for development (already enabled with --turbo flag)
    // Additional Turbopack optimizations can be added here
  },
  // Optimize for Turbopack
  transpilePackages: [],
};

export default nextConfig;
