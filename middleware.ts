import { NextRequest, NextResponse } from "next/server"

const LOCALES = ["en", "fr"] as const
const DEFAULT_LOCALE = "en"
const HOME_SEGMENT = "home"

type Locale = (typeof LOCALES)[number]

const isLocale = (value?: string): value is Locale =>
  LOCALES.includes(value as Locale)

/** Cookie first, then the browser's Accept-Language, then the default. */
function resolveLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value
  if (isLocale(cookie)) return cookie

  const preferred = req.headers
    .get("accept-language")
    ?.split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find(isLocale)

  return preferred ?? DEFAULT_LOCALE
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const segments = pathname.split("/").filter(Boolean)

  /* No locale prefix at all (e.g. "/"): send to the resolved locale's home. */
  if (!isLocale(segments[0])) {
    return NextResponse.redirect(
      new URL(`/${resolveLocale(req)}/${HOME_SEGMENT}${search}`, req.url)
    )
  }

  /* Locale but no page (e.g. "/fr"): the home page is the only page today. */
  if (segments.length === 1) {
    return NextResponse.redirect(
      new URL(`/${segments[0]}/${HOME_SEGMENT}${search}`, req.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.).*)"],
}
