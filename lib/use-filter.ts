import { useEffect, useMemo, useState } from "react"

export const useFilter = <TData, TFilter>(data: Array<TData>) => {
  const [filters, setFilter] = useState<Record<string, boolean>>({
    FRONTEND: true,
    BACKEND: true,
    DATABASE: true,
    SOFT: true,
    THIRD_PARTY: true,
  })

  const filteredData = useMemo(() => {
    // return data.filter((item) => {
    //   for (const key in item) {
    //     if (filters.includes(key as unknown as TFilter)) {
    //       return true
    //     }
    //   }
    //   return false
    // })
    return data
  }, [data, filters])

  return {
    filteredData,
    setFilter: (filter: string) =>
      setFilter({
        ...filters,
        [filter]: !filters[filter],
      }),
    filters,
  }
}
