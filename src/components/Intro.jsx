import { PROJECT, TIMELINE } from '../data.js'
import { img, useReveal } from '../hooks.js'

const STATS = [
  ['3', 'habitações'],
  [PROJECT.totalConstruction, 'de construção'],
  ['T0 a T3', 'tipologias'],
  ['1', 'terraço na cobertura'],
]

export default function Intro() {
  const ref = useReveal()
  return (
    <section className="section" id="projeto">
      <div className="container intro reveal" ref={ref}>
        <div className="intro__text">
          <p className="eyebrow">O projeto</p>
          <h2 className="h2">
            Uma esquina desenhada <em>em curva</em>
          </h2>
          <p>
            O edifício acompanha a curva da rua. Em baixo, uma base em cinza grafite; em cima, um
            volume branco rodeado por uma varanda corrida. O telhado de telha cerâmica e a porta em
            tom cobre vêm da arquitetura tradicional da ilha.
          </p>
          <p>
            São só três casas: um T2 no piso térreo, um T3 no piso 2 e um T0 no piso 3,
            junto ao terraço na cobertura. Projeto de {PROJECT.architect}.
          </p>
          <dl className="stats">
            {STATS.map(([v, l]) => (
              <div key={l}>
                <dt>{v}</dt>
                <dd>{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="intro__figure">
          <img src={img('fachada-rua')} alt="Fachada principal para a rua" loading="lazy" />
        </figure>
      </div>

      <div className="container">
        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <li key={t.title} className={`${t.done ? 'is-done' : ''} ${t.current ? 'is-current' : ''}`}>
              <span className="timeline__n">0{i + 1}</span>
              <strong>{t.title}</strong>
              <span>{t.when}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
