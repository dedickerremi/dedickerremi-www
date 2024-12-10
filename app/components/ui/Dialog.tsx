import { Dialog as HeadlessDialog } from "@headlessui/react"
import { ReactNode } from "react"

type DialogProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function Dialog({
  isOpen,
  onClose,
  children,
  className = "",
}: DialogProps) {
  return (
    <HeadlessDialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <HeadlessDialog.Panel className={className}>
          {children}
        </HeadlessDialog.Panel>
      </div>
    </HeadlessDialog>
  )
}
