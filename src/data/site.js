import belezaNatural from '../assets/beleza-natural.png'
import manicure from '../assets/luz-em-movimento.png.webp'
import massagem from '../assets/um-instante-só-seu.png'
import producaoEspecial from '../assets/presença-marcante.png'

export const site = {
  name: 'Zenia Santos',
  salon: 'Estudio Zenia Santos',
  whatsapp: '5522981247854',
  phoneDisplay: '(22) 98124-7854',
  address: 'Avenidas Das Flores, Rua Sem Asfalto, N° 50 - Ancora, Rio das Ostras - RJ, 28899-419',
  city: 'Rio das Ostras - RJ',
  hours: 'Segunda a sábado, com horário marcado',
  mapQuery: 'Avenidas Das Flores, Rua Sem Asfalto, N° 50 - Ancora, Rio das Ostras - RJ',
}

export const services = [
  { number: '01', title: 'Depilação', description: 'Cuidado delicado e técnica atenta, respeitando a sensibilidade da pele em cada atendimento.', icon: 'ScanFace' },
  { number: '02', title: 'Limpeza de pele', description: 'Higienização cuidadosa que remove impurezas e ajuda a renovar o viço e a luminosidade da pele.', icon: 'Droplets' },
  { number: '03', title: 'Massagem', description: 'Movimentos cuidadosos para relaxar o corpo e tornar seu momento de autocuidado ainda mais especial.', icon: 'HandHeart' },
  { number: '04', title: 'Cabelo', description: 'Cortes, escovas e cuidados personalizados para valorizar seu estilo e a beleza natural dos fios.', icon: 'Scissors' },
  { number: '05', title: 'Pé e mão', description: 'Cuidado e acabamento delicado para mãos e pés, com atenção a cada detalhe.', icon: 'Paintbrush' },

]

export const portfolio = [
  { title: 'Beleza Natural', category: 'Cabelo & Maquiagem', image: belezaNatural, alt: 'Cliente com cabelo e maquiagem realizados no estúdio' },
  { title: 'Luz em Movimento', category: 'Postiça Realista', image: manicure, alt: 'Unhas com acabamento francês e detalhes em glitter' },
  { title: 'Cuidado em cada detalhe', category: 'Massagem', image: massagem, alt: 'Profissional realizando massagem em uma cliente' },
  { title: 'Beleza para celebrar', category: 'Produção & estilo', image: producaoEspecial, alt: 'Zenia Santos ao lado de uma cliente em traje de festa' },
]

export const whatsappLink = (message = 'Olá! Gostaria de agendar um horário.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`