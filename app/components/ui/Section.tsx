import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  /** Two-digit editorial index, e.g. "01". */
  index: string;
  title: string;
  /** Optional short standfirst printed under the title. */
  standfirst?: string;
  id?: string;
  /** Alternating surfaces give the long page a visual beat. */
  surface?: "default" | "raised";
  children: ReactNode;
};

/**
 * A numbered editorial section: rule, index label, serif title, then content.
 * Replaces the centred `container max-w-screen-xl mx-auto px-4` blocks that
 * were re-declared in every section.
 */
export function Section({
  index,
  title,
  standfirst,
  id,
  surface = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-rule py-20 md:scroll-mt-20 md:py-28 ${
        surface === "raised" ? "bg-paper-raised/40" : ""
      }`}
    >
      <div className="shell">
        <Reveal
          as="header"
          className="mb-16 md:mb-24 md:grid md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-2">
            <span className="eyebrow">{index}</span>
          </div>
          <div className="md:col-span-10">
            <h2 className="font-display text-section font-semibold text-ink">
              {title}
            </h2>
            {standfirst && (
              <p className="mt-4 max-w-measure text-lede text-ink-muted text-pretty">
                {standfirst}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
