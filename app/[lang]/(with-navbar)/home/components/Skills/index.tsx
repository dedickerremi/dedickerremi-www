"use client"

import { useRef } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { motion, useInView } from "framer-motion"
import { SKILLS } from "../Skills/skills"
import { SkillType } from "../Skills/skills/types"
import Image from "next/image"

const categories = ["All", "Frontend", "Backend", "DevOps", "Tools"] as const
type Category = (typeof categories)[number]

export function Skills() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 relative overflow-hidden bg-gray-50/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-prussianBlue/[0.02] to-transparent" />

      <div className="container max-w-screen-xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-prussianBlue/70 mb-4">
            Expertise
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium text-prussianBlue">
            Technical Skills
          </h3>
        </motion.div>

        <Tabs.Root defaultValue="All" className="w-full">
          <Tabs.List className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Tabs.Trigger
                key={category}
                value={category}
                className="px-4 py-2 rounded-full transition-all duration-300
                  data-[state=active]:bg-prussianBlue data-[state=active]:text-white
                  data-[state=inactive]:bg-white data-[state=inactive]:text-prussianBlue
                  border-2 border-prussianBlue/10 hover:border-prussianBlue/30"
              >
                {category}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {categories.map((category) => (
            <Tabs.Content
              key={category}
              value={category}
              className="focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {[
                  ...SKILLS.frontend,
                  ...SKILLS.backend,
                  ...SKILLS.database,
                  ...SKILLS.thirdParties,
                  ...SKILLS.soft,
                  ...SKILLS.tools,
                ]
                  .filter(
                    (skill: SkillType) =>
                      category === "All" || skill.category === category
                  )
                  .map((skill: SkillType, index: number) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: SkillType }) {
  return (
    <div
      className="group relative bg-white p-4 rounded-xl border-2 border-prussianBlue/10
      hover:border-prussianBlue/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-3">
        {skill.icon && (
          <div className="w-12 h-12 relative">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <span className="text-sm font-medium text-prussianBlue text-center">
          {skill.name}
        </span>
      </div>
    </div>
  )
}
