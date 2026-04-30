/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rozwiązanie problemu z workspace root
  experimental: {
    turbo: {
      root: '.',
    },
  },
  sassOptions: {
    // Pozwala na używanie @use "abstracts/variables" bez relatywnych ścieżek
    includePaths: ['./styles'],
  },
};

export default nextConfig;