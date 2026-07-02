import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useRevealOnScroll(opts?: { once?: boolean; amount?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: opts?.once ?? true,
    amount: opts?.amount ?? 0.2,
  })

  return { ref, isInView }
}
