import { PROJECT } from '../data.js'
import { img } from '../hooks.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__img" src={img('fachada-esquina')} alt="Render da fachada das Residências Avenida" />
      <div className="hero__shade" />
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">
          {PROJECT.location} · {PROJECT.region}
        </p>
        <h1 className="hero__title">
          Residências
          <br />
          <em>Avenida</em>
        </h1>
        <p className="hero__lead">{PROJECT.tagline}</p>
        <div className="hero__actions">
          <a href="#apartamentos" className="btn btn--light">
            Ver apartamentos
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Agendar reunião
          </a>
        </div>
      </div>
      <div className="hero__badge">
        <span className="dot" /> {PROJECT.status} · 2 habitações
      </div>
    </section>
  )
}
