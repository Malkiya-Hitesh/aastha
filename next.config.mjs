/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.43.52'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
