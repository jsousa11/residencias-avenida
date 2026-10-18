import { useEffect, useState } from 'react'
import { PROJECT } from '../data.js'

const LINKS = [
  ['#projeto', 'Projeto'],
  ['#apartamentos', 'Apartamentos'],
  ['#galeria', 'Galeria'],
  ['#localizacao', 'Localização'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true" />
          {PROJECT.name}
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--accent btn--sm" onClick={() => setOpen(false)}>
            Pedir informação
          </a>
        </nav>
        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
