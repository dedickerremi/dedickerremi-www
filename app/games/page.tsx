import { Scene } from "./components/scene"

export default function GamesPage() {
  return (
    <div className="flex flex-col w-full">
      <span className="bg-slate-200">Canva below</span>
      <Scene />
      <span className="bg-slate-200 w-full">Canva up</span>
    </div>
  )
}
