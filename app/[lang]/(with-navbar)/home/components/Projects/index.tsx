import { Cards } from "./components/Cards"
import { CardsBis } from "./components/CardsBis"
import { DowJones, Epitech, FrankEnergie, Tappx, Xpozer } from "./constant"

export function Projects() {
  return (
    <section className="items-center container w-full">
      <div className=" max-w-screen-xl mx-auto px-4 text-center text-2xl md:text-4xl font-medium text-prussianBlue">
        My projects
      </div>

      <div className="px-6 md:px-0 mt-8 flex flex-col md:flex-row md:overflow-x-auto md:hover:overflow-x-scroll gap-8 pb-8">
        <CardsBis {...FrankEnergie} />
        <CardsBis {...Xpozer} />
        <CardsBis {...DowJones} />
        <CardsBis {...Tappx} />
        <CardsBis {...Epitech} />
      </div>
    </section>
  )
}
