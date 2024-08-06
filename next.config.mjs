/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["reverseddigital.com", "pbs.twimg.com"],
  },
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ]
  },
}

export default nextConfig
