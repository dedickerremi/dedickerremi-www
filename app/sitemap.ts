import { MetadataRoute } from "next"

const SITE_URL = "https://dedickerremi.com"
const LOCALES = ["en", "fr"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return LOCALES.map((lang) => ({
    url: `${SITE_URL}/${lang}/home`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: lang === "en" ? 1 : 0.8,
  }))
}
