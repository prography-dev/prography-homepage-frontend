/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [
      'mblogthumb-phinf.pstatic.net',
      's3.ap-northeast-2.amazonaws.com',
    ],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://43.202.243.99:8080/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
