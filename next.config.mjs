import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

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
  // Ensure CSS is properly handled in development
  experimental: {
    optimizeCss: false, // Disable CSS optimization in dev
  },
}

// Only setup Cloudflare platform in development if needed
if (process.env.NODE_ENV === 'development' && process.env.CLOUDFLARE_DEV) {
   await setupDevPlatform();
}

export default nextConfig
