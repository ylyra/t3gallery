'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 h-screen max-h-full w-screen max-w-full bg-zinc-900/50"
      onClose={onDismiss}
    >
      {children}
      <button onClick={onDismiss} className="absolute right-3 top-3">
        <X />
      </button>
    </dialog>,
    document.getElementById('modal-root')!,
  )
}
