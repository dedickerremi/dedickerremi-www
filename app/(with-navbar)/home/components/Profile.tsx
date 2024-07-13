import Image from "next/image"

export const Profile = () => {
  return (
    <section className="h-[calc(100vh_-_90px)] place-content-center">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <Image
              width={260}
              height={260}
              className=" rounded-full ci"
              src="/home-img.jpeg"
              alt="Image"
            />
          </div>

          <h1 className="font-normal text-prussianBlue text-2xl md:text-4xl leading-none mb-8">
            Senior Fullstack Developer
          </h1>

          <p className="font-normal text-prussianBlue text-md md:text-xl">
            Crafting seamless digital experiences from code to cloud, I'm your
            go-to Fullstack Developer for scalable solutions and innovative
            designs.
          </p>
        </div>
      </div>
    </section>
  )
}
