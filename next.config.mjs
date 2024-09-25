/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reverseddigital.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/en/home",
      },
      {
        source: "/en",
        destination: "/en/home",
      },
      {
        source: "/fr",
        destination: "/fr/home",
      },
    ]
  },
}

export default nextConfig
