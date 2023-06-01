/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
