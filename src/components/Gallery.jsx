import { useState } from 'react'
import { IMAGES } from '../data.js'
import { img, useReveal } from '../hooks.js'
import Lightbox from './Lightbox.jsx'

export default function Gallery() {
  const [open, setOpen] = useState(null)
  const ref = useReveal()
  const items = IMAGES.map((p) => ({ src: img(p.src), alt: p.alt }))

  return (
    <section className="section section--dark" id="galeria">
      <div className="container reveal" ref={ref}>
        <div className="section__head">
          <div>
            <p className="eyebrow eyebrow--light">Galeria</p>
            <h2 className="h2">
              Veja a casa <em>antes de existir</em>
            </h2>
          </div>
          <p className="section__note">Imagens 3D do projeto de arquitetura. Clique para ampliar.</p>
        </div>
        <div className="gallery">
          {IMAGES.map((p, i) => (
            <button key={p.src} className={`gallery__item gallery__item--${i}`} onClick={() => setOpen(i)}>
              <img src={img(p.src, i > 2)} alt={p.alt} loading="lazy" />
              <span className="gallery__cap">{p.alt}</span>
            </button>
          ))}
        </div>
      </div>
      {open !== null && <Lightbox items={items} start={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
