import Link from "next/link"

type NavbarProps = {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-8">
      <span className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-gray-700 text-md rounded-md ">
        {"< /> Remi Dedicker"}
      </span>
      <Link
        href={
          "https://drive.google.com/file/d/1VeIsb9n0_f7lkYKpK4Gbp6Oi-mpHxOg6/view?usp=sharing"
        }
        target="_blank"
        rel="noopener noreferrer"
        className=" hidden md:block px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white"
      >
        View my CV
      </Link>
    </nav>
  )
}
