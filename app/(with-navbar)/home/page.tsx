import Image from "next/image"
import { FloatButtonMenu } from "../../components/ui/FloatButton"
import { Profile } from "./components/Profile"
import { Skills } from "./components/Skills"
import { Companies } from "./components/Companies"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Profile />
      <Companies />
      <Skills />
      <FloatButtonMenu />
    </main>
  )
}
