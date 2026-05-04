/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // Pozwala na używanie @use "abstracts/variables" bez relatywnych ścieżek
    includePaths: ['./styles'],
  },
};

export default nextConfig;