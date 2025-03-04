/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["onlineassignmentdesk.com", "imagedelivery.net"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
