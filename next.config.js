/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'resources.tidal.com',
      'encrypted-tbn1.gstatic.com',
      'i.scdn.co',
      'res.cloudinary.com',
      'angartwork.akamaized.net'
    ],
  },
}

module.exports = nextConfig
