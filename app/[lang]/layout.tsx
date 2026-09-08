import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Inter,
  JetBrains_Mono,
} from "next/font/google"
import { CountryCode } from "@/lib/dictionaries/dictionaries"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

/* Typographic variants under evaluation. Flip TYPE_VARIANT to compare. */
const VARIANTS = {
  swiss: { display: inter, body: inter, mono: jetbrains },
  plex: { display: plexSans, body: plexSans, mono: plexMono },
  mono: { display: jetbrains, body: inter, mono: jetbrains },
} as const

const TYPE_VARIANT: keyof typeof VARIANTS = "mono"

const { display, body, mono } = VARIANTS[TYPE_VARIANT]

const SITE_URL = "https://dedickerremi.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rémi Dedicker, Senior Software Engineer",
    template: "%s | Rémi Dedicker",
  },
  description:
    "Rémi Dedicker is a senior fullstack developer based in Amsterdam, building scalable products from code to cloud.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rémi Dedicker",
    images: [
      {
        url: "/navbar-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rémi Dedicker",
      },
    ],
  },
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }]
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: CountryCode }
}>) {
  return (
    <html
      lang={lang}
      /* The inline script below adds `js` to this element before hydration. */
      suppressHydrationWarning
      style={
        {
          "--font-display": display.style.fontFamily,
          "--font-body": body.style.fontFamily,
          "--font-mono": mono.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <head>
        {/*
          Marks JS as available before first paint so the reveal styles can
          apply without a flash, and stay off entirely when JS is disabled.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-EJMZL9Z45F" />
    </html>
  )
}
