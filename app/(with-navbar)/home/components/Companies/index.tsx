import { Cards } from "./components/Cards"
import { DowJones, Epitech, ReversedDigital, Tappx } from "./constant"

export function Companies() {
  return (
    <section className="items-center p-16 w-full">
      <div className="container max-w-screen-xl mx-auto px-4 text-center text-2xl md:text-4xl font-medium text-prussianBlue">
        My experience
      </div>
      <div className="mt-8 flex flex-row overflow-x-auto hover:overflow-x-scroll gap-8 pb-8">
        <Cards {...ReversedDigital} />
        <Cards {...DowJones} />
        <Cards {...Tappx} />
        <Cards {...Epitech} />
      </div>
    </section>
  )
}
