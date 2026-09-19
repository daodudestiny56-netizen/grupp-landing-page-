/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    // YouTube poster frames for the testimonial facades.
    // `images.domains` is deprecated in Next.js 16 — remotePatterns only.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
    ],
  },
};

export default nextConfig;
