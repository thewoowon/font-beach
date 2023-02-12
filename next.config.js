/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['ssl.pstatic.net', 'k.kakaocdn.net'],
  },
}

module.exports = nextConfig
