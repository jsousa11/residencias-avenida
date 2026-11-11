import { PROJECT } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#top" className="nav__brand">
            <span className="nav__mark" aria-hidden="true" />
            {PROJECT.name}
          </a>
          <p>
            {PROJECT.location} · {PROJECT.region}
          </p>
        </div>
        <div className="footer__meta">
          <p>Arquitetura: {PROJECT.architect}</p>
        </div>
      </div>
      <div className="container footer__legal">
        <p>
          As imagens são simulações 3D, apenas ilustrativas e sem valor contratual. Áreas e acabamentos
          podem sofrer ajustes durante o licenciamento e a obra.
        </p>
        <p>© {new Date().getFullYear()} {PROJECT.name}</p>
      </div>
    </footer>
  )
}
