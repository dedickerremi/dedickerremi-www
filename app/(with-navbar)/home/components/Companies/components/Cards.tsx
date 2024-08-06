import Image from "next/image"
import { ProjectType } from "../constant"

export function Cards({ name, description, gallery, skills }: ProjectType) {
  return (
    <div className="rounded-md border min-w-96 bg-gray-200">
      <div className="relative h-64 w-64 mx-auto">
        <Image
          className="w-full p-4"
          object-fit="cover"
          src={gallery?.[0]}
          alt="Sunset in the mountains"
          fill={true}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {skills?.map((skill) => (
          <span className="inline-block bg-neutral-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{skill}
          </span>
        ))}
      </div>
    </div>
  )
}
