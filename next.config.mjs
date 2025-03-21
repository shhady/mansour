/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable experimental features that might cause conflicts
  experimental: {
    // Disable other experimental features that might cause issues
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001', 'localhost:3002', 'localhost:3003', 'localhost:3004'],
    },
  },
  // Ensure we're using the standard webpack compiler
  webpack: (config, { isServer }) => {
    // Any custom webpack configurations can go here
    return config;
  },
  // Ensure proper image handling
  images: {
    domains: [],
    remotePatterns: [],
  },
  // Ensure proper CSS handling
  cssModules: true,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Ensure proper output settings
  output: 'standalone',
  // Add server configuration
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  // Add public runtime config
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  // Ensure proper asset prefix
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  // Ensure proper trailing slash
  trailingSlash: false,
  // Ensure proper powered by header
  poweredByHeader: false,
};

export default nextConfig;
