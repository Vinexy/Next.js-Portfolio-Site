/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com", "themoviedb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname:
          "/85889196/223253108-0a27dfe7-93d0-49ea-9e5d-7ec5ae720ad7.gif",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname:
          "Vinexy/Fullstack-AI-Flask-NextJS-Medical-Diagnose/assets/85889196/e2343bac-30fd-4cb8-bb26-4a7294de547b",
      },
    ],
  },
};

module.exports = nextConfig;
