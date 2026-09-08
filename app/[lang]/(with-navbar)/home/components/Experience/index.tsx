import { Reveal } from "@/app/components/ui/Reveal"
import { Section } from "@/app/components/ui/Section"
import { EXPERIENCE, RoleKey } from "@/lib/content/site"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import Link from "next/link"
import { Highlights } from "./components/Highlights"
import { ShippedWork } from "./components/ShippedWork"
import { DowJones, FrankEnergie, ProjectType, Tappx, Xpozer } from "./projects"

/* What was shipped in each role. Kept here so lib/content stays free of
   app-level imports. */
const WORK_BY_ROLE: Partial<Record<RoleKey, Array<ProjectType>>> = {
  reversedDigital: [FrankEnergie, Xpozer],
  dowJones: [DowJones],
  tappx: [Tappx],
}

type ExperienceProps = {
  dict: Dictionary["experience"]
  work: Dictionary["work"]
}

export function Experience({ dict, work }: ExperienceProps) {
  return (
    <Section
      id="experience"
      index="03"
      title={dict.title}
      standfirst={dict.standfirst}
    >
      <ol>
        {EXPERIENCE.map((role, index) => {
          const shipped = WORK_BY_ROLE[role.key] ?? []

          return (
            <li
              key={role.key}
              className="border-t border-rule py-12 first:border-t-0 first:pt-0 md:py-16"
            >
              <Reveal index={index}>
                <div className="md:grid md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-2">
                    {/* Empty periods render nothing rather than a fake date. */}
                    {role.period && (
                      <span className="eyebrow">{role.period}</span>
                    )}
                  </div>

                  <div className="md:col-span-10">
                    <h3 className="font-display text-title font-semibold tracking-tight text-ink">
                      {role.title}
                    </h3>

                    {role.url ? (
                      <Link
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-mono text-label uppercase text-ink-muted transition-colors duration-300 ease-editorial hover:text-accent"
                      >
                        {role.company} ↗
                      </Link>
                    ) : (
                      <p className="mt-2 font-mono text-label uppercase text-ink-faint">
                        {role.company}
                      </p>
                    )}

                    <p className="mt-5 max-w-measure text-lede text-ink-muted text-pretty">
                      {role.summary}
                    </p>

                    <Highlights
                      highlights={role.highlights}
                      label={dict.highlights}
                    />

                    {shipped.length > 0 && (
                      <div className="mt-8">
                        <span className="eyebrow">{dict.shipped}</span>
                        <ul className="mt-4 grid gap-4">
                          {shipped.map((project) => (
                            <ShippedWork
                              key={project.name}
                              project={project}
                              stackLabel={work.stack}
                              viewLabel={work.viewProject}
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
