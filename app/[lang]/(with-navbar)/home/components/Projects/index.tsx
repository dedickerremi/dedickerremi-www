"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cards } from "./components/Cards"
import { DowJones, Epitech, FrankEnergie, Tappx, Xpozer } from "./constant"

export function Projects() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const projects = [FrankEnergie, Xpozer, DowJones, Tappx, Epitech]

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 relative overflow-hidden bg-white"
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
            Experience
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium text-prussianBlue">
            My Projects
          </h3>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Cards {...project} variant="desktop" />
            </motion.div>
          ))}
        </div>

        {/* Mobile List Layout */}
        <div className="lg:hidden space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Cards {...project} variant="mobile" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
