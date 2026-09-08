import { CountryCode, getDictionary } from "@/lib/dictionaries/dictionaries"
import { Settings } from "@/settings"
import Link from "next/link"
import { Links } from "./Links"

/** Slim closer. The real call to action lives in the About section, up top. */
export async function Footer({ lang }: { lang: CountryCode }) {
  const dict = await getDictionary(lang)

  return (
    <footer className="border-t border-rule bg-paper-raised/60">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
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
            <Links />
          </div>

          <div className="flex flex-col gap-1 font-mono text-label uppercase text-ink-faint md:items-end">
            <span>
              © {new Date().getFullYear()} Rémi Dedicker ·{" "}
              {dict.contact.rights}
            </span>
            <span>{dict.contact.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
