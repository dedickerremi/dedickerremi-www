import { Links } from "@/app/components/Links"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import Image from "next/image"

type ProfileType = {
  dict: Dictionary["homepage"]
}

export function Profile({ dict }: ProfileType) {
  return (
    <section className="h-[calc(100vh_-_90px)] place-content-center">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image
              width={260}
              height={260}
              className="rounded-full ci"
              src="/home-img.jpeg"
              alt="Image"
            />
          </div>

          <h1 className="font-normal text-prussianBlue text-2xl md:text-4xl leading-none mb-8">
            {dict.jobPosition}
          </h1>

          <p className="font-normal text-prussianBlue text-md md:text-xl">
            {dict.headline}
          </p>
        </div>
      </div>
      <Links className={`md:mb-16 mt-16 md:mt-24`} />
    </section>
  )
}
