import { REASONS } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Reasons() {
  const ref = useReveal()
  return (
    <section className="section">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Comprar em planta</p>
        <h2 className="h2 h2--narrow">
          Porque <em>reservar agora</em> e não depois da obra
        </h2>
        <div className="reasons">
          {REASONS.map((r, i) => (
            <div key={r.title} className="reason">
              <span className="reason__n">0{i + 1}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
