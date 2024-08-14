import Image from "next/image"

type LinksProps = {
  className?: string
}

export const Links = ({ className }: LinksProps) => {
  return (
    <section className={className}>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/remi-dedicker"
            target="_blank"
            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500 shadow-xl"
          >
            <Image height={16} width={16} src="/linkedin.svg" alt="linked" />
          </a>

          <a
            href="https://github.com/dedickerremi"
            target="_blank"
            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500 shadow-xl"
          >
            <Image height={16} width={16} src="/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </section>
  )
}
