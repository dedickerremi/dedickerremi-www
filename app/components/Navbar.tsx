import { CountryCode, getDictionary } from "@/lib/dictionaries/dictionaries"
import { Settings } from "@/settings"
import Link from "next/link"
import { LanguageSwitcher } from "./ui/LanguageSwitcher"

type NavbarProps = {
  lang: CountryCode
}

export const Navbar = async ({ lang }: NavbarProps) => {
  const dict = await getDictionary(lang)

  const sections = [
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
    { href: "#skills", label: dict.nav.skills },
    { href: "#experience", label: dict.nav.experience },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href={`/${lang}/home`}
          className="font-display text-base font-semibold tracking-tight text-ink transition-colors duration-300 ease-editorial hover:text-accent md:text-xl"
        >
          Rémi Dedicker
        </Link>

        {/* Section anchors: the page is long enough to need them. */}
        <nav className="hidden items-center gap-7 lg:flex">
          {sections.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-label uppercase text-ink-muted transition-colors duration-300 ease-editorial hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 md:gap-8">
          <LanguageSwitcher lang={lang} />
          <span aria-hidden className="hidden h-4 w-px bg-rule md:block" />
          <Link
            href={Settings.urls.CV}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-label uppercase text-ink transition-colors duration-300 ease-editorial hover:text-accent"
          >
            {dict.header.downloadCV}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
