import { SkillType } from "../constant"

export const Skill = ({
  skill,
  className = "",
  isLastSkill = false,
}: {
  skill: SkillType
  className?: string
  isLastSkill?: boolean
}) => {
  return (
    <span
      className={`inline-block bg-white border-prussianBlue border-2 rounded-full self-center px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${className}`}
    >
      #{skill.name}
    </span>
  )
}
