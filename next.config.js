/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  compiler: {
    emotion: true,
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
