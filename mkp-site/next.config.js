/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages deployment configuration - use relative paths
  distDir: 'out',
}

module.exports = nextConfig
