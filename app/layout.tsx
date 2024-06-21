import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Dedicker Remi",
  description:
    "Dedicker Remi portfolio - Fullstack developer currently based in Amsterdam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dedickerremi.com",
    images: [
      {
        url: "https://dedickerremi.com/navbar-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dedicker Remi",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
      <GoogleAnalytics gaId="G-EJMZL9Z45F" />
    </html>
  )
}
