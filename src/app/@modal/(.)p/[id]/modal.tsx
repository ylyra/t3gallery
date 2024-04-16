'use client'

import { X } from 'lucide-react'
import { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useDismiss } from './dismiss'

export function Modal({ children }: { children: React.ReactNode }) {
  const { onDismiss } = useDismiss()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 h-screen max-h-full w-screen max-w-full bg-zinc-900/50 p-4"
      onClose={onDismiss}
    >
      {children}
      <button onClick={onDismiss} className="absolute right-3 top-3 text-white">
        <X />
      </button>
    </dialog>,
    document.getElementById('modal-root')!,
  )
}
