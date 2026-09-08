import Image from "next/image"
import Link from "next/link"
import { ProjectType } from "../projects"

type ShippedWorkProps = {
  project: ProjectType
  stackLabel: string
  viewLabel: string
}

/** A product shipped inside a role. Nested under its employer, not standalone. */
export function ShippedWork({
  project,
  stackLabel,
  viewLabel,
}: ShippedWorkProps) {
  const { name, contribution, gallery, skills, projectLink } = project

  return (
    <li>
      <Link
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${viewLabel}: ${name}`}
        className="group grid gap-5 border border-rule bg-paper p-5 transition-colors duration-500 ease-editorial hover:border-ink/25 md:grid-cols-12 md:gap-6 md:p-6"
      >
        <div className="md:col-span-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-rule bg-white">
            <Image
              fill
              sizes="(min-width: 768px) 20vw, 40vw"
              src={gallery[0]}
              alt={`${name} artwork`}
              className="object-contain p-4 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="md:col-span-9">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="font-display text-base font-semibold tracking-tight text-ink transition-colors duration-300 ease-editorial group-hover:text-accent">
              {name}
            </h4>
            <span
              aria-hidden
              className="shrink-0 text-ink-faint transition-all duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-accent"
            >
              →
            </span>
          </div>

          {contribution && (
            <p className="mt-3 max-w-measure text-meta text-ink-muted text-pretty">
              {contribution}
            </p>
          )}

          <div className="mt-4">
            <span className="eyebrow">{stackLabel}</span>
            <p className="mt-2 font-mono text-[0.75rem] leading-relaxed text-ink-faint">
              {skills.map((skill, i) => (
                <span key={`${name}-${skill.name}`}>
                  {i > 0 && <span> · </span>}
                  {skill.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
