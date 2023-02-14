/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['ssl.pstatic.net', 'k.kakaocdn.net', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
