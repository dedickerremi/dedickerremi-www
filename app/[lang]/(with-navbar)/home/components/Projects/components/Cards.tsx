import Image from "next/image"
import { ProjectType } from "../constant"
import Link from "next/link"
import { useState } from "react"
import { Dialog } from "@/app/components/ui/Dialog"
import { motion, AnimatePresence } from "framer-motion"

type CardsProps = ProjectType & {
  variant: "mobile" | "desktop"
}

export function Cards({ variant, ...project }: CardsProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (variant === "mobile") {
    return (
      <>
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-white rounded-xl p-4 shadow-sm 
            hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={project.gallery?.[0]}
              alt={project.name}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-medium text-lg text-prussianBlue">
              {project.name}
            </h3>
            <p className="text-sm text-prussianBlue/70">{project.position}</p>
          </div>
        </div>

        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto"
          >
            <div className="relative h-48 w-full mb-6">
              <Image
                src={project.gallery?.[0]}
                alt={project.name}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <h3 className="text-xl font-bold text-prussianBlue mb-2">
              {project.name}
            </h3>
            <p className="text-prussianBlue/70 text-sm mb-4">
              {project.position}
            </p>

            <p className="text-prussianBlue/80 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-prussianBlue/70">
                Technologies used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, index) => (
                  <span
                    key={`${project.name}-skill-${index}`}
                    className="text-xs px-3 py-1 bg-prussianBlue/5 
                      text-prussianBlue/70 rounded-full"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2 px-4 bg-prussianBlue/5 hover:bg-prussianBlue/10 
                  text-prussianBlue rounded-xl transition-colors duration-200"
              >
                Close
              </button>
              {project.projectLink && (
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="flex-1 py-2 px-4 bg-prussianBlue text-white 
                    rounded-xl text-center hover:bg-prussianBlue/90 
                    transition-colors duration-200"
                >
                  See Project
                </Link>
              )}
            </div>
          </motion.div>
        </Dialog>
      </>
    )
  }

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-lg 
      hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="relative h-48">
        <Image
          src={project.gallery?.[0]}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-prussianBlue mb-2">
          {project.name}
        </h3>
        <p className="text-prussianBlue/70 text-sm mb-4">{project.position}</p>
        <p className="text-prussianBlue/80 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills?.map((skill, index) => (
            <span
              key={`${project.name}-skill-${index}`}
              className="text-xs px-3 py-1 bg-prussianBlue/5 
                text-prussianBlue/70 rounded-full"
            >
              {skill.name}
            </span>
          ))}
        </div>

        {project.projectLink && (
          <Link
            href={project.projectLink}
            target="_blank"
            className="inline-flex px-4 py-2 bg-prussianBlue text-white 
              rounded-xl hover:bg-prussianBlue/90 transition-colors duration-200"
          >
            See Project
          </Link>
        )}
      </div>
    </div>
  )
}
