/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // 静态资源（JS, CSS, 图片）缓存 1 年
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // 图片资源缓存 1 年
        source: '/pictures/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // 其他静态文件（favicon, og-image 等）缓存 1 个月
        source: '/(favicon.ico|og-image.jpg|icon.png|apple-touch-icon.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000',
          },
        ],
      },
      {
        // HTML 页面：Cloudflare 缓存 5 分钟，过期后 10 分钟内仍可使用旧缓存
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=600',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
