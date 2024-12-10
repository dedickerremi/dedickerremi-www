import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { SkillType } from "../skills/types"
import Link from "next/link"
import Image from "next/image"

export const Skill = ({
  skill,
  className = "",
}: {
  skill: SkillType
  className?: string
  isLastSkill?: boolean
}) => {
  return (
    <span className="group relative">
      <HoverCardPrimitive.HoverCard>
        <HoverCardPrimitive.HoverCardTrigger>
          <span
            className="inline-flex items-center px-4 py-2 rounded-full 
            bg-white border-2 border-prussianBlue/10 
            hover:border-prussianBlue/30 hover:bg-prussianBlue/5
            transition-all duration-300 cursor-pointer
            text-sm font-medium text-prussianBlue"
          >
            #{skill.name}
          </span>
        </HoverCardPrimitive.HoverCardTrigger>

        <HoverCardPrimitive.HoverCardContent
          className="z-50 w-72 rounded-2xl bg-white p-6
            shadow-xl border border-prussianBlue/10
            data-[side=bottom]:animate-slideUpAndFade
            data-[side=top]:animate-slideDownAndFade"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-prussianBlue/80">
              {skill.description}
            </p>

            {skill.url && (
              <Link
                href={skill.url}
                className="inline-flex items-center gap-2 text-xs text-prussianBlue/70
                  hover:text-prussianBlue transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline">{skill.url}</span>
                <Image
                  src="/new-tab.svg"
                  width={10}
                  height={10}
                  alt="External link"
                  className="opacity-70"
                />
              </Link>
            )}
          </div>
        </HoverCardPrimitive.HoverCardContent>
      </HoverCardPrimitive.HoverCard>
    </span>
  )
}
