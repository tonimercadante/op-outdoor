/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3001",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
