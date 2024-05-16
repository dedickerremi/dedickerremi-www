import Image from "next/image"
import { FloatButtonMenu } from "./components/ui/FloatButton"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-16 pb-8 md:pb-12">
      <section className="">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-16">
              <Image
                width={260}
                height={260}
                className="grayscale rounded-full ci"
                src="/home-img.jpeg"
                alt="Image"
              />
            </div>

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              Remi Dedicker
            </h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Senior Fullstack Developer
            </h1>

            <p className="font-normal text-gray-600 text-md md:text-xl">
              Crafting seamless digital experiences from code to cloud, I'm your
              go-to Fullstack Developer for scalable solutions and innovative
              designs.
            </p>
          </div>
        </div>
      </section>
      <FloatButtonMenu />
    </main>
  )
}
