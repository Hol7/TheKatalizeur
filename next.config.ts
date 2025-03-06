import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Use 'http' for local development
        hostname: 'localhost',
        port: '1337',     // Port where Strapi is running
        pathname: '/uploads/**', // Allow all paths under /uploads/
      },
    ],
  },
};

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
