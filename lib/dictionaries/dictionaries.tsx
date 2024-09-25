import type dict from "./fr.json"

export type CountryCode = "en" | "fr"

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
type JsonDictionary = typeof dict

const dictionaries: Record<CountryCode, () => Promise<JsonDictionary>> = {
  en: () => import("./en.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
}

export const getDictionary = async (locale: CountryCode) =>
  dictionaries[locale]()
