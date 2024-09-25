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
    <span className="bg-gray-100 text-gray-800 text-sm font-medium py-1 px-3 rounded-full border border-gray-300">
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
