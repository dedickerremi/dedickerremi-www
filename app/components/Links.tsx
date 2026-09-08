import Image from "next/image"

type LinksProps = {
  className?: string
}

const PROFILES = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/remi-dedicker",
    icon: "/linkedin.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/dedickerremi",
    icon: "/github.svg",
  },
]

export const Links = ({ className = "" }: LinksProps) => {
  return (
    <ul className={`flex flex-wrap items-center gap-x-8 gap-y-3 ${className}`}>
      {PROFILES.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-meta text-ink-muted transition-colors duration-300 ease-editorial hover:text-accent"
          >
            <Image
              height={14}
              width={14}
              src={icon}
              alt=""
              aria-hidden
              className="opacity-50 transition-opacity duration-300 ease-editorial group-hover:opacity-100"
            />
            <span className="border-b border-rule pb-0.5 transition-colors duration-300 ease-editorial group-hover:border-accent">
              {label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
