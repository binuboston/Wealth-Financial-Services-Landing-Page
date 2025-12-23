/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // TypeScript: Don't fail build on type errors (type checking still runs separately)
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint: Don't fail build on linting errors
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental features
  experimental: {
    // Optimize package imports
    optimizePackageImports: [
      'lucide-react',
      'recharts',
    ],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { isServer, webpack }) => {
    // Add support for importing SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Fix webpack cache timeout issues
    // Configure cache with better timeout handling
    if (config.cache && !isServer) {
      config.cache = {
        ...config.cache,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        compression: 'gzip',
      };
    }

    // Ensure motion package is properly handled for SSR
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
};

export default nextConfig;
