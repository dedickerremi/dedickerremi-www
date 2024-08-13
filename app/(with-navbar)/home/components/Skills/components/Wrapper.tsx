"use client"

import { useIsVisible } from "@/lib/hooks/use-is-visible"
import { useRef } from "react"
import { Skill } from "../components/Skill"
import { SKILLS } from "../constant"

const Display = ({ title, skills }: { title: string; skills: Array<any> }) => {
  return (
    <div className="flex flex-col md:flex-row w-full my-4">
      <h2 className="text-xl md:text-2xl mb-8 mt-6 font-medium content-center text-center min-w-48">
        {title}
      </h2>
      <div className="flex md:flex-row px-8 md:p-0 w-full flex-wrap">
        {skills.map((skill, index) => {
          return (
            <Skill
              key={`key-${index}`}
              className="flex"
              skill={skill}
              isLastSkill={index === skills.length - 1}
            />
          )
        })}
      </div>
    </div>
  )
}

const dividerCss = "h-1 w-full border-lapisLazuli border-b-2 divide-y"

export const Wrapper = () => {
  // const ref = useRef(null)
  // const isVisible = useIsVisible(ref)

  return (
    <div
      className={`flex pt-16 md:pt-24 flex-wrap transition-opacity ease-in duration-700 w-full flex-row`}
      // ref={ref}
    >
      <section className="flex flex-col w-full">
        <Display title="Frontend" skills={SKILLS.frontend} />
        <div className={dividerCss} />
        <Display title="Backend" skills={SKILLS.backend} />
        <div className={dividerCss} />
        <Display title="ThirdParties" skills={SKILLS.thirdParties} />
        <div className={dividerCss} />
        <Display title="Database" skills={SKILLS.database} />
        <div className={dividerCss} />
        <Display title="Soft" skills={SKILLS.soft} />
      </section>
    </div>
  )
}
