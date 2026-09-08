"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import Image from "next/image"
import Link from "next/link"
import { SkillType } from "../skills/types"

type SkillProps = {
  skill: SkillType
}

export const Skill = ({ skill }: SkillProps) => {
  /* Most descriptions just repeat the name; only show a card when it adds
     something. */
  const hasDetail =
    Boolean(skill.url) ||
    skill.description.trim().toLowerCase() !== skill.name.trim().toLowerCase()

  const label = <span className="text-ink">{skill.name}</span>

  if (!hasDetail) return label

  return (
    <HoverCardPrimitive.Root openDelay={120} closeDelay={80}>
      <HoverCardPrimitive.Trigger asChild>
        <span className="cursor-default text-ink underline decoration-rule decoration-dotted underline-offset-4 transition-colors duration-300 ease-editorial hover:text-accent hover:decoration-accent">
          {skill.name}
        </span>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          side="top"
          sideOffset={8}
          collisionPadding={16}
          className="z-50 flex max-w-xs flex-col border border-ink bg-paper p-4 text-meta text-ink-muted shadow-[6px_6px_0_0_rgba(17,17,19,0.08)]"
        >
          {skill.description}

          {skill.url && (
            <Link
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-mono text-label uppercase text-ink transition-colors duration-300 ease-editorial hover:text-accent"
            >
              <span className="truncate">
                {skill.url.replace(/^https?:\/\//, "")}
              </span>
              <Image src="/new-tab.svg" width={10} height={10} alt="" aria-hidden />
            </Link>
          )}
          <HoverCardPrimitive.Arrow className="fill-ink" width={10} height={5} />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  )
}
