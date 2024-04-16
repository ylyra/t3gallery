'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const useDismiss = () => {
  const router = useRouter()
  function onDismiss() {
    router.back()
  }

  return { onDismiss }
}

export function DismissButton() {
  const { onDismiss } = useDismiss()
  return (
    <button onClick={onDismiss} className="absolute right-3 top-3 text-white">
      <X />
    </button>
  )
}
