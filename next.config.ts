import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization with HD quality
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Enable remote patterns if needed
    remotePatterns: [],
  },
  
  // Enable compression
  compress: true,
  
  // Optimize production builds
  swcMinify: true,
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Production optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true, // Enable React strict mode for better development
  
  // Output configuration for better production builds
  output: 'standalone', // Creates optimized standalone build
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lottie-react',
      'react-icons',
      'lucide-react',
      'react-hot-toast',
    ],
    // Enable server components optimization
    serverComponentsExternalPackages: ['mongoose'],
    // Optimize CSS
    optimizeCss: true,
    // Enable partial prerendering (if available)
    ppr: false, // Set to true when stable
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Optimize chunk splitting
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Framer Motion separate chunk
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              chunks: 'all',
              priority: 30,
            },
            // React Icons separate chunk
            reactIcons: {
              name: 'react-icons',
              test: /[\\/]node_modules[\\/]react-icons[\\/]/,
              chunks: 'all',
              priority: 30,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/imgs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/animations/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects for better SEO and performance
  async redirects() {
    return [];
  },
};

export default nextConfig;
