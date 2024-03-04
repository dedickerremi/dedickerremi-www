import Image from "next/image"
import Link from "next/link"

type NavbarProps = {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-8">
      {/* <Image width={260} height={40} src="/navbar-logo.jpg" alt="Logo" /> */}
      <span className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md ">
        {"</> Remi Dedicker"}
      </span>
      <Link
        href={"/Remi_Dedicker.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
      >
        View my CV
      </Link>
    </nav>
  )
}
