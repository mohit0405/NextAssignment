/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.dummyjson.com"],
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = { ...nextConfig };
