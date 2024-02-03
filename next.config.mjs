/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com/**",
      },
    ],
  },
};

export default nextConfig;
