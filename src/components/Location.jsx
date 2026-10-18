import { PROJECT } from '../data.js'
import { useReveal } from '../hooks.js'

export default function Location() {
  const ref = useReveal()
  return (
    <section className="section section--stone" id="localizacao">
      <div className="container location reveal" ref={ref}>
        <div className="location__text">
          <p className="eyebrow">Localização</p>
          <h2 className="h2">
            No centro de <em>Vila do Porto</em>
          </h2>
          <p>
            No fim da Rua do Mercado, na esquina com a Avenida Santa Maria e ao lado do dentista. Fica
            a poucos passos do comércio e dos serviços da vila, e perto do porto, do aeroporto e das
            praias de Santa Maria, a ilha mais soalheira dos Açores.
          </p>
          <address>
            {PROJECT.address}
            <br />
            9580 Vila do Porto · {PROJECT.region}
          </address>
          <a className="link" href={PROJECT.mapsUrl} target="_blank" rel="noreferrer">
            Abrir no Google Maps ↗
          </a>
        </div>
        <div className="location__map">
          <iframe
            title="Mapa da localização"
            src={`https://www.google.com/maps?q=${PROJECT.coords}&z=17&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
