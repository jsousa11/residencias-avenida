// Todos os textos e números do site estão aqui. Edite à vontade.

export const PROJECT = {
  name: 'Residências Avenida',
  tagline: 'Duas casas novas numa esquina com luz o dia inteiro.',
  location: 'Rua do Mercado, Vila do Porto',
  address: 'Rua do Mercado, esquina com a Av. Santa Maria',
  coords: '36.956918,-25.142068',
  mapsUrl: 'https://maps.app.goo.gl/p6Rbrnhzo97PJePe6',
  region: 'Santa Maria · Açores',
  architect: 'BRIX Arquitetura & Urbanismo',
  status: 'Venda em planta',
  totalConstruction: '264 m²',
  plotArea: '177 m²',
}

export const CONTACT = {
  email: 'psousa.net@hotmail.com',
  phone: '+351 963 504 856',
  whatsapp: '351963504856', // só dígitos, com indicativo
}

export const IMAGES = [
  { src: 'fachada-esquina', alt: 'Fachada curva na esquina, com varanda corrida' },
  { src: 'aerea-terraco', alt: 'Vista aérea com o terraço na cobertura' },
  { src: 'fachada-rua', alt: 'Fachada principal para a rua' },
  { src: 'jardim', alt: 'Acesso pelo jardim e escada exterior' },
  { src: 'aerea-traseira', alt: 'Vista aérea das traseiras e do pátio' },
  { src: 'alcado-lateral', alt: 'Alçado lateral com escadas de acesso' },
  { src: 'aerea-telhado', alt: 'Telhado em telha cerâmica e mansarda' },
  { src: 'estacionamento', alt: 'Alpendre coberto e garagem' },
]

export const APARTMENTS = [
  {
    id: 'A',
    name: 'Apartamento A',
    typology: 'T2',
    floor: 'Piso 0',
    area: 60.56,
    bedrooms: 2,
    bathrooms: 1,
    price: 'Sob consulta',
    status: 'Disponível',
    image: 'fachada-rua',
    summary:
      'Piso térreo com entrada independente. A sala e a cozinha partilham um espaço aberto de 24 m², encostado à fachada curva e com janelas a toda a volta.',
    highlights: ['Sala e cozinha em open space', 'Entrada independente', 'Envolvente ajardinada'],
    plans: [{ label: 'Piso 0', src: 'piso-0' }],
    rooms: [
      ['Sala de estar / jantar e cozinha', 23.98],
      ['Quarto', 11.67],
      ['Quarto', 11.47],
      ['Instalação sanitária', 6.19],
      ['Corredor', 4.67],
      ['Átrio de entrada', 2.58],
    ],
  },
  {
    id: 'B',
    name: 'Apartamento B',
    typology: 'T3 Duplex',
    floor: 'Piso 2 + Piso 3',
    area: 126.71,
    bedrooms: 3,
    bathrooms: 3,
    price: 'Sob consulta',
    status: 'Disponível',
    image: 'aerea-terraco',
    summary:
      'Ocupa os dois pisos de cima. A sala segue a curva da fachada e abre para a varanda corrida; no piso 3 há um espaço de 26 m² com casa de banho e acesso ao terraço na cobertura.',
    highlights: ['Varanda corrida em toda a fachada', 'Terraço na cobertura', 'Alpendre coberto de 26 m²'],
    plans: [
      { label: 'Piso 2', src: 'piso-1' },
      { label: 'Piso 3', src: 'sotao' },
    ],
    rooms: [
      ['Sala de estar e jantar', 26.21],
      ['Arrumo (piso 3)', 26.06],
      ['Alpendre (piso 0)', 26.1, true],
      ['Quarto', 13.52],
      ['Quarto', 11.06],
      ['Quarto', 10.98],
      ['Corredor', 7.71],
      ['Átrio de entrada', 7.18],
      ['Instalação sanitária', 5.73],
      ['Cozinha', 5.48],
      ['Instalação sanitária', 3.56],
      ['Instalação sanitária (piso 3)', 3.44],
      ['Tratamento de roupa / área técnica', 3.23],
      ['Corredor', 2.55],
    ],
  },
]

export const REASONS = [
  {
    title: 'Preço de lançamento',
    text: 'Quem reserva agora compra antes da obra começar, com o valor mais baixo que o projeto vai ter.',
  },
  {
    title: 'Acabamentos à sua escolha',
    text: 'Pavimentos, cozinha e loiças ainda podem ser escolhidos, dentro das opções do projeto.',
  },
  {
    title: 'Pagamento faseado',
    text: 'O valor é dividido em fases que acompanham a obra, em vez de ser pago de uma só vez.',
  },
  {
    title: 'Construção nova',
    text: 'Casa nova, feita segundo as regras atuais de isolamento e eficiência energética.',
  },
]

export const TIMELINE = [
  { title: 'Projeto de arquitetura', when: 'Janeiro 2026', done: true },
  { title: 'Licenciamento', when: 'Em curso', current: true },
  { title: 'Início da obra', when: 'A anunciar' },
  { title: 'Entrega das chaves', when: 'A anunciar' },
]
