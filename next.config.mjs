/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/produtos/delegometro", destination: "/produtos/nexus-amplify", permanent: true },
    ]
  },
}

export default nextConfig
