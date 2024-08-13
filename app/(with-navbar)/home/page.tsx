import Image from "next/image"
import { FloatButtonMenu } from "../../components/ui/FloatButton"
import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Footer } from "@/app/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-8">
      <Profile />
      <Projects />
      <Skills />
      <FloatButtonMenu />
    </main>
  )
}
