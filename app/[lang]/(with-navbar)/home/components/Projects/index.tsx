import { Cards } from "./components/Cards"
import { DowJones, Epitech, FrankEnergie, Tappx, Xpozer } from "./constant"

export function Projects() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-tl from-prussianBlue/5 to-transparent" />

      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h2 className="text-sm uppercase tracking-wider text-prussianBlue/70 mb-4">
            Experience
          </h2>
          <h3 className="text-2xl md:text-4xl font-medium text-prussianBlue">
            My Projects
          </h3>
        </div>

        <div className="relative">
          {/* Indicateurs de défilement sur desktop */}
          <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="hidden lg:block absolute -right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Container des cartes */}
          <div className="flex flex-col lg:flex-row gap-8 pb-8 overflow-x-auto hide-scrollbar">
            <Cards {...FrankEnergie} />
            <Cards {...Xpozer} />
            <Cards {...DowJones} />
            <Cards {...Tappx} />
            <Cards {...Epitech} />
          </div>
        </div>
      </div>
    </section>
  )
}
