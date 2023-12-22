/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // FIXME(meaningood): 추후 이미지 서버 도메인으로 변경
    domains: ['mblogthumb-phinf.pstatic.net'],
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://43.202.243.99:8080/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
