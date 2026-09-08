import { Links } from "@/app/components/Links"
import { Reveal } from "@/app/components/ui/Reveal"
import { FACTS } from "@/lib/content/site"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import { Settings } from "@/settings"
import Image from "next/image"
import Link from "next/link"

type ProfileType = {
  dict: Dictionary["homepage"]
  facts: Dictionary["facts"]
  cvLabel: string
}

export function Profile({ dict, facts, cvLabel }: ProfileType) {
  /* Unfilled facts are dropped so the strip never shows an empty cell. */
  const visibleFacts = FACTS.filter((fact) => fact.value)

  return (
    <section className="shell pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
        <div className="animate-rise-in md:col-span-7 lg:col-span-8">
          <p className="eyebrow">{dict.jobPosition}</p>

          <h1 className="mt-6 font-display text-display font-semibold text-ink">
            Rémi Dedicker
          </h1>

          <p className="mt-8 max-w-measure text-lede text-ink-muted text-pretty">
            {dict.headline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
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

        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-raised">
            <Image
              fill
              priority
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
              src="/home-img.jpeg"
              alt="Portrait of Rémi Dedicker"
            />
          </div>
        </div>
      </div>

      {/* Scannable credibility strip: the facts a recruiter looks for first. */}
      {visibleFacts.length > 0 && (
        <Reveal className="mt-16 border-t border-rule pt-8 md:mt-20">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {visibleFacts.map((fact) => (
              <div key={fact.key}>
                <dt className="eyebrow">{facts[fact.key]}</dt>
                <dd className="mt-2 font-mono text-meta text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </section>
  )
}
