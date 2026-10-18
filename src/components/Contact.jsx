import { useEffect, useState } from 'react'
import { APARTMENTS, CONTACT, PROJECT } from '../data.js'
import { img, useReveal } from '../hooks.js'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', apt: 'Ambos', mensagem: '' })
  const [sent, setSent] = useState(false)

  // Pré-seleciona o apartamento quando se clica em "Tenho interesse"
  useEffect(() => {
    const onInteresse = (e) => {
      const a = APARTMENTS.find((x) => x.id === e.detail)
      if (a) setForm((f) => ({ ...f, apt: `${a.name} (${a.typology})` }))
    }
    window.addEventListener('interesse', onInteresse)
    return () => window.removeEventListener('interesse', onInteresse)
  }, [])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Sem servidor: abre o email do visitante já preenchido.
  const submit = (e) => {
    e.preventDefault()
    const subject = `${PROJECT.name}: pedido de informação`
    const body = [
      `Nome: ${form.nome}`,
      `Email: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Interesse: ${form.apt}`,
      '',
      form.mensagem,
    ].join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="section contact" id="contacto">
      <img className="contact__bg" src={img('jardim')} alt="" loading="lazy" />
      <div className="contact__shade" />
      <div className="container contact__inner reveal" ref={ref}>
        <div className="contact__text">
          <p className="eyebrow eyebrow--light">Contacto</p>
          <h2 className="h2">
            Fale connosco <em>e reserve a sua casa</em>
          </h2>
          <p>
            Deixe o seu contacto e respondemos com preços, condições de pagamento e o calendário da
            obra. Também podemos marcar uma reunião para ver o projeto em detalhe.
          </p>
          <ul className="contact__list">
            <li>
              <span>Telefone</span>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
                Enviar mensagem ↗
              </a>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
          {sent ? (
            <div className="form__done">
              <h3>Obrigado!</h3>
              <p>Abrimos o seu email com a mensagem pronta. Se não abriu, escreva-nos para {CONTACT.email}.</p>
              <button type="button" className="link" onClick={() => setSent(false)}>
                Voltar ao formulário
              </button>
            </div>
          ) : (
            <>
              <label>
                Nome
                <input required value={form.nome} onChange={set('nome')} autoComplete="name" />
              </label>
              <div className="form__row">
                <label>
                  Email
                  <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                </label>
                <label>
                  Telefone
                  <input type="tel" value={form.telefone} onChange={set('telefone')} autoComplete="tel" />
                </label>
              </div>
              <label>
                Apartamento de interesse
                <select value={form.apt} onChange={set('apt')}>
                  <option>Ambos</option>
                  {APARTMENTS.map((a) => (
                    <option key={a.id}>{`${a.name} (${a.typology})`}</option>
                  ))}
                </select>
              </label>
              <label>
                Mensagem
                <textarea rows="4" value={form.mensagem} onChange={set('mensagem')} placeholder="Opcional" />
              </label>
              <button className="btn btn--accent btn--block" type="submit">
                Pedir informação
              </button>
              <p className="form__note">Os seus dados servem apenas para responder a este pedido.</p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
