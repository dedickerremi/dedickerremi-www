import { SkillLayout } from "./components/Layout"
import { SKILLS } from "./constant"

export const Skills = () => {
  return (
    <section className="p-16">
      <div className="container max-w-screen-xl mx-auto px-4">Skills</div>
      {[
        ...SKILLS.frontend,
        ...SKILLS.backend,
        ...SKILLS.database,
        ...SKILLS.soft,
      ].map((skill, index) => {
        return <SkillLayout key={`key-${index}`} skill={skill} />
      })}
    </section>
  )
}
