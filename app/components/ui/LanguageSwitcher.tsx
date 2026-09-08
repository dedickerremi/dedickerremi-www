"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CountryCode } from "@/lib/dictionaries/dictionaries"

const LOCALES: Array<CountryCode> = ["en", "fr"]

/** Swaps the leading locale segment of the current path, keeping the rest. */
function pathForLocale(pathname: string, locale: CountryCode) {
  const segments = pathname.split("/").filter(Boolean)
  if (LOCALES.includes(segments[0] as CountryCode)) {
    segments[0] = locale
  } else {
    segments.unshift(locale)
  }
  return `/${segments.join("/")}`
}

export function LanguageSwitcher({ lang }: { lang: CountryCode }) {
  const pathname = usePathname() ?? `/${lang}`

  return (
    <div className="flex items-center gap-2 font-mono text-label uppercase">
      {LOCALES.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden className="text-rule">/</span>}
          <Link
            href={pathForLocale(pathname, locale)}
            aria-current={locale === lang ? "true" : undefined}
            className={
              locale === lang
                ? "text-ink"
                : "text-ink-faint transition-colors duration-300 ease-editorial hover:text-accent"
            }
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  )
}
