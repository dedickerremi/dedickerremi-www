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
    <div
      className={`ml-4 rounded-full flex items-center text-xl mx-auto ${className}`}
    >
      {skill.name}
      {isLastSkill ? "" : ","}
    </div>
  )
}
