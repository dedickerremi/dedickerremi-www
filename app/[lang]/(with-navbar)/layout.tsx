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
    <div className="flex min-h-screen flex-col">
      <Navbar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  )
}
