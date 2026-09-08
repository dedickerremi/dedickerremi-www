import { Reveal } from "@/app/components/ui/Reveal"
import { Section } from "@/app/components/ui/Section"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import { DowJones, FrankEnergie, Tappx, Xpozer } from "../Experience/projects"
import { Skill } from "./components/Skill"
import { SKILLS } from "./skills"

/* Rendering order is editorial: outermost layer of the system first. */
const GROUPS = [
  "frontend",
  "backend",
  "database",
  "thirdParties",
  "soft",
] as const

type GroupKey = (typeof GROUPS)[number]

/** How many of the shipped projects each tool appears in. */
const USAGE_COUNT = [FrankEnergie, Xpozer, DowJones, Tappx].reduce<
  Record<string, number>
>((counts, project) => {
  for (const skill of project.skills) {
    counts[skill.name] = (counts[skill.name] ?? 0) + 1
  }
  return counts
}, {})

/** Most-used first. Array.prototype.sort is stable, so ties keep their order. */
function byUsage(group: GroupKey) {
  return [...SKILLS[group]].sort(
    (a, b) => (USAGE_COUNT[b.name] ?? 0) - (USAGE_COUNT[a.name] ?? 0)
  )
}

export const Skills = ({ dict }: { dict: Dictionary["skills"] }) => {
  return (
    <Section
      id="skills"
      index="02"
      surface="raised"
      title={dict.title}
      standfirst={dict.standfirst}
    >
      <dl className="border-t border-rule">
        {GROUPS.map((group: GroupKey, index) => (
          <Reveal
            key={group}
            index={index}
            className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-10"
          >
            <dt className="md:col-span-2">
              <span className="eyebrow">{dict.groups[group]}</span>
            </dt>
            <dd className="md:col-span-10">
              {/* A row-flowing grid, not CSS columns: `columns` fills
                  top-to-bottom, which hides the usage ordering from an eye
                  that reads left-to-right. */}
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
                {byUsage(group).map((skill) => (
                  <li key={skill.name} className="text-[0.9375rem] leading-snug">
                    <Skill skill={skill} />
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
