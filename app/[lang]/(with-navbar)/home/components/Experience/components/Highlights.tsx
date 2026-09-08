import { Highlight } from "@/lib/content/site"

/**
 * Achievements for one role. Numbers are the most scannable thing on a CV, so
 * any highlight carrying a metric gets it pulled out and set large.
 */
export function Highlights({
  highlights,
  label,
}: {
  highlights: Array<Highlight>
  label: string
}) {
  if (highlights.length === 0) return null

  const withMetric = highlights.filter((h) => h.metric)
  const rest = highlights.filter((h) => !h.metric)

  return (
    <div className="mt-8">
      <span className="eyebrow">{label}</span>

      {withMetric.length > 0 && (
        <dl className="mt-4 grid gap-6 sm:grid-cols-2">
          {withMetric.map((highlight) => (
            <div
              key={highlight.text}
              className="border-l-2 border-accent pl-4"
            >
              <dt className="font-display text-3xl font-semibold tracking-tight text-ink">
                {highlight.metric}
              </dt>
              <dd className="mt-1 text-meta text-ink-muted text-pretty">
                {highlight.text}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {rest.length > 0 && (
        <ul className="mt-6 grid gap-3">
          {rest.map((highlight) => (
            <li
              key={highlight.text}
              className="flex gap-3 text-meta text-ink-muted text-pretty"
            >
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-rule" />
              <span className="max-w-measure">{highlight.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
