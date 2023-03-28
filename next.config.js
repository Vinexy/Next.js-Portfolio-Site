/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname:
          "/85889196/223253108-0a27dfe7-93d0-49ea-9e5d-7ec5ae720ad7.gif",
      },
    ],
  },
};

module.exports = nextConfig;
