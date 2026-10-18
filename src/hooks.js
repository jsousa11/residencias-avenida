import { useEffect, useRef } from 'react'

// Adiciona a classe "is-visible" quando o elemento entra no ecrã.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export const img = (name, small = false) => `/images/${name}${small ? '-sm' : ''}.webp`
export const plan = (name) => `/plantas/${name}.webp`
export const m2 = (n) => `${n.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} m²`
