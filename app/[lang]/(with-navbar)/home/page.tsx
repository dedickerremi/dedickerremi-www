import Image from "next/image"
import { FloatButtonMenu } from "../../../components/ui/FloatButton"
import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Footer } from "@/app/components/Footer"
import { CountryCode, getDictionary } from "@/lib/dictionaries/dictionaries"

type PageParams = {
  params: {
    lang: CountryCode
  }
}

export default async function Home({ params }: PageParams) {
  // console.info("props", props)
  const dict = await getDictionary(params.lang)
  return (
    <main className="flex flex-col items-center justify-between gap-8">
      <Profile dict={dict.homepage} />
      <Projects />
      <Skills />
      <FloatButtonMenu />
    </main>
  )
}
