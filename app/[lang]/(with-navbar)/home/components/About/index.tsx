import { Links } from "@/app/components/Links"
import { Reveal } from "@/app/components/ui/Reveal"
import { Section } from "@/app/components/ui/Section"
import { ABOUT, CONTACT, EDUCATION } from "@/lib/content/site"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import { Settings } from "@/settings"
import Link from "next/link"

type AboutProps = {
  dict: Dictionary["about"]
  contact: Dictionary["contact"]
  cvLabel: string
}

export function About({ dict, contact, cvLabel }: AboutProps) {
  return (
    <Section id="about" index="01" title={dict.title}>
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div aria-hidden className="md:col-span-2" />

        <Reveal className="md:col-span-6">
          <div className="grid gap-5">
            {ABOUT.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`max-w-measure text-pretty ${
                  index === 0
                    ? "text-lede text-ink"
                    : "text-body text-ink-muted"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal index={1} className="md:col-span-4">
          <div className="border-t border-rule pt-6">
            <span className="eyebrow">{dict.education}</span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
              {EDUCATION.degree}
            </h3>
            <p className="mt-1 font-mono text-label uppercase text-ink-faint">
              {EDUCATION.school} · {EDUCATION.period}
            </p>
            <p className="mt-4 text-meta text-ink-muted text-pretty">
              {EDUCATION.summary}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Contact sits high on the page: a visitor who is already convinced
          should not have to scroll past everything to act on it. */}
      <Reveal
        id="contact"
        className="mt-16 scroll-mt-16 border-t border-rule pt-12 md:mt-20 md:scroll-mt-20"
      >
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div aria-hidden className="md:col-span-2" />

          <div className="md:col-span-10">
            <h3 className="font-display text-section font-semibold text-ink">
              {contact.title}
            </h3>
            <p className="mt-4 max-w-measure text-lede text-ink-muted text-pretty">
              {contact.standfirst}
            </p>

            {CONTACT.email && (
              <a
                href={`mailto:${CONTACT.email}`}
                className="group mt-8 inline-flex max-w-full flex-wrap items-baseline gap-3 break-words font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 ease-editorial hover:text-accent md:text-2xl"
              >
                {CONTACT.email}
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={Settings.urls.CV}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-b border-ink pb-1 font-mono text-label uppercase text-ink transition-colors duration-300 ease-editorial hover:border-accent hover:text-accent"
              >
                {cvLabel}
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Links />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
