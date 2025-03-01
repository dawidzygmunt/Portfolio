'use client'

import { useEffect, useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface ModalProps {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

export const ModalProvider: React.FC<ModalProps> = ({
  open,
  children,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Delete hidden overflow onClose
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [open])

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target as Node)
  //     ) {
  //       onClose()
  //     }
  //   }

  //   if (open) {
  //     document.addEventListener('mousedown', handleClickOutside)
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="fixed flex flex-col max-h-[90vh] bg-[#171721] items-end z-50 p-6 sm:mx-10 md:mx-16 lg:mx-24 mx-auto max-w-4xl
          rounded-xl"
      >
        <button
          className="text-white mb-4 absolute right-1 top-1"
          onClick={() => onClose()}
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}
