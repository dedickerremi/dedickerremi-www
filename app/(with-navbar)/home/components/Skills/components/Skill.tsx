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
    <span
      className={`cursor-pointer inline-block bg-white border-prussianBlue border-2 rounded-full self-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${className}`}
    >
      <HoverCardPrimitive.HoverCard>
        <HoverCardPrimitive.HoverCardTrigger>
          #{skill.name}
        </HoverCardPrimitive.HoverCardTrigger>
        <HoverCardPrimitive.HoverCardContent className="flex flex-col w-max-60 border-2 border-prussianBlue bg-white text-prussianBlue p-4 mt-2 rounded-2xl text-sm">
          {skill.description}

          {skill.url && (
            <Link
              href={skill.url}
              className="mt-4 underline flex flex-row items-center gap-2 text-wrap"
              target="_blank"
            >
              <h6 className="text-xs">{skill.url} </h6>
              <Image src="/new-tab.svg" width={12} height={12} alt="link" />
            </Link>
          )}
        </HoverCardPrimitive.HoverCardContent>
      </HoverCardPrimitive.HoverCard>
    </span>
  )
}
