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
      className={`rounded-full flex justify-center text-xl mb-2 ${className}`}
    >
      {skill.name}
    </div>
  )
}
