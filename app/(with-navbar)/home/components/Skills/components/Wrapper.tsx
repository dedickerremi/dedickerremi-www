"use client"

import { useIsVisible } from "@/lib/hooks/use-is-visible"
import { useRef } from "react"
import { Skill } from "../components/Skill"
import { SKILLS } from "../constant"

const Display = ({ title, skills }: { title: string; skills: Array<any> }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full my-4">
        <h2 className="text-2xl  mb-8 font-medium content-center text-center min-w-48">
          {title}
        </h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => {
            return (
              <Skill
                key={`key-${index}`}
                className="flex sm:w-full md:w-1/2 lg:w-1/3"
                skill={skill}
                isLastSkill={index === skills.length - 1}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

const dividerCss = "h-1 w-full border-lapisLazuli border-b-2 divide-y"

export const Wrapper = () => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <>
      <div
        className={`flex py-32 flex-wrap transition-opacity ease-in duration-700 flex-row ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        ref={ref}
      >
        <section className="flex flex-col">
          <Display title="Frontend" skills={SKILLS.frontend} />
          <div className={dividerCss} />
          <Display title="Backend" skills={SKILLS.backend} />
          <div className={dividerCss} />
          <Display title="Database" skills={SKILLS.database} />
          <div className={dividerCss} />
          <Display title="Soft" skills={SKILLS.soft} />
        </section>
      </div>
    </>
  )
}
