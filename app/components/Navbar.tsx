import { Settings } from "@/settings"
import Link from "next/link"

type NavbarProps = {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-4 border-prussianBlue border-opacity-10 border-b-2">
      <span className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-prussianBlue text-md rounded-md ">
        {"< /> Remi Dedicker"}
      </span>
      <Link
        href={Settings.urls.CV}
        target="_blank"
        rel="noopener noreferrer"
        className=" hidden md:block px-7 py-3 md:px-9 md:py-4 bg-prussianBlue font-medium md:font-semibold text-neutral-100 text-md rounded-md hover:bg-gray-700 hover:text-white"
      >
        View my CV
      </Link>
    </nav>
  )
}
