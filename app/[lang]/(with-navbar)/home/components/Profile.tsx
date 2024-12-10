import { Links } from "@/app/components/Links"
import { Dictionary } from "@/lib/dictionaries/dictionaries"
import Image from "next/image"

type ProfileType = {
  dict: Dictionary["homepage"]
}

export function Profile({ dict }: ProfileType) {
  return (
    <section className="min-h-[calc(100vh_-_90px)] flex items-center relative overflow-hidden py-8 sm:py-12">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-prussianBlue/5 to-transparent" />

      <div className="container max-w-screen-xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Colonne image - Ordre modifié sur mobile */}
          <div className="relative order-1 sm:order-1 lg:order-none mx-auto lg:mx-0">
            <div className="relative z-10 max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
              <Image
                width={400}
                height={400}
                className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 w-full h-auto"
                src="/home-img.jpeg"
                alt="Profile Image"
                priority
              />
              {/* Élément décoratif - Masqué sur très petit écran */}
              <div className="absolute -z-10 -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border-2 border-prussianBlue/20 rounded-2xl hidden sm:block" />
            </div>
          </div>

          {/* Colonne contenu */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 sm:order-2 lg:order-none">
            <h2 className="text-sm uppercase tracking-wider text-prussianBlue/70">
              Welcome
            </h2>
            <h1 className="font-normal text-prussianBlue text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              {dict.jobPosition}
            </h1>
            <p className="font-light text-prussianBlue/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {dict.headline}
            </p>

            <Links className="mt-6 sm:mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
