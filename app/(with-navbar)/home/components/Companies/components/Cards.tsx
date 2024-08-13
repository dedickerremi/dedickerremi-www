import Image from "next/image"
import { ProjectType } from "../constant"
import Link from "next/link"

export function Cards({
  name,
  description,
  gallery,
  skills,
  projectLink,
  theme,
}: ProjectType) {
  return (
    <div className={`flex flex-col rounded-md border md:min-w-96 shadow-xl`}>
      <div className="relative min-h-64 w-64 mx-auto">
        <Image
          className="w-full p-4"
          object-fit="cover"
          src={gallery?.[0]}
          alt="Sunset in the mountains"
          fill={true}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-prussianBlue">{name}</div>
        <p className="text-gray-700 text-base ">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {skills?.map((skill, index) => (
          <span
            key={`${name}-skills-${index}`}
            className="inline-block bg-white border-prussianBlue border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{skill}
          </span>
        ))}
      </div>
      {projectLink && (
        <Link
          target="_blank"
          href={projectLink}
          className="px-8 py-2 mt-4 mb-8 border-2 rounded-full text-white bg-prussianBlue self-center"
        >
          Visit projects
        </Link>
      )}
    </div>
  )
}
