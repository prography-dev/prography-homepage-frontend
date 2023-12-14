/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // FIXME(meaningood): 추후 이미지 서버 도메인으로 변경
    domains: ['mblogthumb-phinf.pstatic.net'],
  },
};

module.exports = nextConfig;
