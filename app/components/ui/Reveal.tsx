"use client"

import { useIsVisible } from "@/lib/hooks/use-is-visible"
import { ElementType, ReactNode, useRef } from "react"

type RevealProps = {
  children: ReactNode
  /** Position in a group, used to stagger siblings. */
  index?: number
  as?: ElementType
  className?: string
  /** Anchor target, when the revealed block is also a nav destination. */
  id?: string
}

/**
 * The site's only entrance animation: an 8px rise and a fade, once, on scroll.
 *
 * The hidden state lives in CSS behind `html.js` (see globals.css), so content
 * stays visible when JavaScript is unavailable instead of being stuck at
 * opacity 0. `prefers-reduced-motion` is honoured in the hook and the CSS.
 */
export function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref)

  return (
    <Tag
      id={id}
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 70}ms` }}
    >
      {children}
    </Tag>
  )
}
