"use client"

import { useCallback, useState } from "react"
import { AddIcon } from "./icons/Add"
import { useOutsideClick } from "../hooks/use-outside-click"

type FloatButtonMenuType = {
  onClick?: () => void
}

export const FloatButtonMenu = ({}: FloatButtonMenuType) => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const ref = useOutsideClick(() => {
    setIsMenuOpen(false)
  })
  const onClickOpenMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])
  return (
    <div className="fixed bottom-4 right-4 md:hidden" ref={ref}>
      <div
        onClick={onClickOpenMenu}
        className={`rounded-full shadow-xl p-0.25 bg-gray-600`}
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <AddIcon
          width="48"
          height="48"
          className={`${isMenuOpen ? "-rotate-45 duration-150" : ""}`}
        />
      </div>

      <div
        className={` ${
          isMenuOpen ? "absolute" : "hidden"
        }  right-0 bottom-16 z-10 mb-2 w-48 origin-bottom-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex={-1}
      >
        <a
          href={
            "https://drive.google.com/file/d/1bpOQwnMChBare2D3-9TooP5rTWelWgZa/view?usp=sharing"
          }
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-0"
        >
          View my CV
        </a>
      </div>
    </div>
  )
}
