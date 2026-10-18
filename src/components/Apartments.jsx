import { useState } from 'react'
import { APARTMENTS } from '../data.js'
import { img, m2, plan, useReveal } from '../hooks.js'
import Lightbox from './Lightbox.jsx'

export default function Apartments() {
  const [activeId, setActiveId] = useState(APARTMENTS[0].id)
  const apt = APARTMENTS.find((a) => a.id === activeId)
  const ref = useReveal()

  return (
    <section className="section section--stone" id="apartamentos">
      <div className="container reveal" ref={ref}>
        <div className="section__head">
          <div>
            <p className="eyebrow">Apartamentos</p>
            <h2 className="h2">
              Três casas, <em>cada uma diferente</em>
            </h2>
          </div>
          <div className="tabs" role="tablist">
            {APARTMENTS.map((a) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={a.id === activeId}
                className={`tab ${a.id === activeId ? 'is-active' : ''}`}
                onClick={() => setActiveId(a.id)}
              >
                <span className="tab__typ">{a.typology}</span>
                <span className="tab__floor">{a.floor}</span>
              </button>
            ))}
          </div>
        </div>

        <ApartmentDetail key={apt.id} apt={apt} />
      </div>
    </section>
  )
}

function ApartmentDetail({ apt }) {
  const [planIdx, setPlanIdx] = useState(0)
  const [zoom, setZoom] = useState(false)
  const current = apt.plans[planIdx]
  const usable = apt.rooms.filter(([, , extra]) => !extra)

  return (
    <article className="apt">
      <div className="apt__info">
        <div className="apt__top">
          <span className="pill">{apt.status}</span>
          <span className="apt__floor">{apt.floor}</span>
        </div>
        <h3 className="apt__name">
          {apt.name} <em>· {apt.typology}</em>
        </h3>
        <p className="apt__summary">{apt.summary}</p>

        <dl className="apt__facts">
          <div>
            <dt>Área útil</dt>
            <dd>{m2(apt.area)}</dd>
          </div>
          <div>
            <dt>Quartos</dt>
            <dd>{apt.bedrooms || 'Estúdio'}</dd>
          </div>
          <div>
            <dt>WC</dt>
            <dd>{apt.bathrooms}</dd>
          </div>
        </dl>

        <ul className="apt__highlights">
          {apt.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <details className="apt__rooms">
          <summary>Áreas por divisão</summary>
          <table>
            <tbody>
              {usable.map(([name, area], i) => (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{m2(area)}</td>
                </tr>
              ))}
              {apt.rooms
                .filter(([, , extra]) => extra)
                .map(([name, area]) => (
                  <tr key={name} className="is-extra">
                    <td>{name}</td>
                    <td>{m2(area)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </details>

        <div className="apt__cta">
          <div>
            <span className="apt__price-label">Preço</span>
            <span className="apt__price">{apt.price}</span>
          </div>
          <a
            href="#contacto"
            className="btn btn--accent"
            onClick={() => window.dispatchEvent(new CustomEvent('interesse', { detail: apt.id }))}
          >
            Tenho interesse
          </a>
        </div>
      </div>

      <div className="apt__plan">
        <div className="apt__plan-head">
          <span className="apt__plan-title">Planta</span>
          {apt.plans.length > 1 && (
            <div className="seg">
              {apt.plans.map((p, i) => (
                <button key={p.src} className={i === planIdx ? 'is-active' : ''} onClick={() => setPlanIdx(i)}>
                  {p.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="apt__plan-img" onClick={() => setZoom(true)} aria-label="Ampliar planta">
          <img src={plan(current.src)} alt={`Planta ${apt.name}, ${current.label}`} loading="lazy" />
          <span className="apt__zoom">Ampliar ↗</span>
        </button>
        <figure className="apt__render">
          <img src={img(apt.image, true)} alt="" loading="lazy" />
        </figure>
      </div>

      {zoom && (
        <Lightbox
          items={apt.plans.map((p) => ({ src: plan(p.src), alt: `${apt.name}, ${p.label}`, caption: p.label }))}
          start={planIdx}
          onClose={() => setZoom(false)}
          light
        />
      )}
    </article>
  )
}
