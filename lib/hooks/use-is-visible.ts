"use client"

import { RefObject, useEffect, useState } from "react"

type Options = {
  /** Stop observing after the first intersection. Default true. */
  once?: boolean
  /** Fraction of the element that must be visible. Default 0.15. */
  threshold?: number
}

export function useIsVisible(
  ref: RefObject<HTMLElement>,
  { once = true, threshold = 0.15 }: Options = {}
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    /* Users who ask for less motion get the final state immediately. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, once, threshold])

  return isVisible
}
