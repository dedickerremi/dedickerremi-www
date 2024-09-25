import { CountryCode } from "@/lib/dictionaries/dictionaries"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"

export default function Layout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: CountryCode }
}>) {
  return (
    <>
      <Navbar lang={lang} />
      {children}
      <Footer />
    </>
  )
}
