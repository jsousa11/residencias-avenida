import { useEffect, useState } from 'react'

export default function Lightbox({ items, start = 0, onClose, light = false }) {
  const [i, setI] = useState(start)
  const n = items.length
  const go = (d) => setI((v) => (v + d + n) % n)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  const item = items[i]
  return (
    <div className={`lightbox ${light ? 'lightbox--light' : ''}`} role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Fechar">
        ✕
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <figcaption>
          {item.caption || item.alt}
          {n > 1 && <span>{i + 1} / {n}</span>}
        </figcaption>
      </figure>
      {n > 1 && (
        <>
          <button className="lightbox__arrow lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Anterior">
            ←
          </button>
          <button className="lightbox__arrow lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Seguinte">
            →
          </button>
        </>
      )}
    </div>
  )
}
