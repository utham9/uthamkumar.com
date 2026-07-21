/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // No ESLint config is shipped with this project; skip lint during build.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
