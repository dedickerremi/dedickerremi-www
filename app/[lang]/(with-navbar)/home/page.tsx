import { CountryCode, getDictionary } from "@/lib/dictionaries/dictionaries"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"

type PageParams = {
  params: {
    lang: CountryCode
  }
}

export default async function Home({ params }: PageParams) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Profile
        dict={dict.homepage}
        facts={dict.facts}
        cvLabel={dict.header.downloadCV}
      />
      <About
        dict={dict.about}
        contact={dict.contact}
        cvLabel={dict.header.downloadCV}
      />
      <Skills dict={dict.skills} />
      <Experience dict={dict.experience} work={dict.work} />
    </>
  )
}
