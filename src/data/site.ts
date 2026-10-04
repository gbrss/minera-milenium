export const site = {
  name: 'Minera Milenium',
  legal: 'Minera Milenium SpA',
  tagline: 'Desde el norte de Chile para el mundo.',
  url: 'https://www.mineramilenium.cl',
  emailMain: 'minera.milenium@gmail.com',
  emailCorp: 'contacto@mineramilenium.cl',
  web: 'www.mineramilenium.cl',
};

export const nav = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#poder-de-compra', label: 'Poder de compra' },
  { href: '#plantas', label: 'Plantas' },
  { href: '#proyecto-sal', label: 'Proyecto sal' },
  { href: '#contacto', label: 'Contacto' },
];

export const pillars = [
  { icon: 'engineering', title: 'Desarrollo de ingeniería', text: 'Innovamos con tecnología y conocimiento para una minería eficiente y responsable.' },
  { icon: 'costs', title: 'Control estricto de gastos', text: 'Gestionamos cada recurso con disciplina y transparencia para asegurar sostenibilidad.' },
  { icon: 'gear', title: 'Optimización de operaciones y mantenimiento', text: 'Maximizamos el rendimiento de nuestros procesos con seguridad y excelencia.' },
  { icon: 'people', title: 'Compromiso con las comunidades', text: 'Crecemos junto a las comunidades, generando empleos y oportunidades para el desarrollo local.' },
  { icon: 'leaf', title: 'Minería sustentable y energías limpias', text: 'Apostamos por un futuro más limpio, eficiente y sustentable para las próximas generaciones.' },
];

export const regions = [
  {
    region: 'Atacama',
    product: 'Hierro',
    detail: 'al 62%',
    image: '/img/hierro.jpg',
    benefits: [
      { icon: 'handshake', text: 'Compromiso con el pequeño minero' },
      { icon: 'contract', text: 'Contratos a largo plazo' },
      { icon: 'dollar', text: 'Precios justos y transparentes' },
      { icon: 'shield', text: 'Pagos oportunos y seguros' },
      { icon: 'truck', text: 'Apoyo en logística y continuidad operacional' },
    ],
  },
  {
    region: 'Tarapacá',
    product: 'Sal',
    detail: 'industrial',
    image: '/img/salar-chiza.jpg',
    benefits: [
      { icon: 'chart', text: 'Alta demanda en la industria y exportación' },
      { icon: 'award', text: 'Calidad garantizada' },
      { icon: 'leaf', text: 'Extracción responsable y sostenible' },
      { icon: 'people', text: 'Relaciones de confianza y desarrollo local' },
      { icon: 'recycle', text: 'Fomento de la economía circular' },
    ],
  },
];

export const communes = [
  { region: 'Región de Atacama', places: [{ name: 'Vallenar' }, { name: 'Copiapó' }] },
  {
    region: 'Región de Tarapacá',
    places: [
      { name: 'Huara', sub: ['Salar de Chiza', 'Salar Grande', 'Salar de Llamara'] },
      { name: 'Iquique' },
    ],
  },
];

export const plants = [
  {
    name: 'Planta Andrea',
    place: 'Atacama',
    image: '/img/planta-andrea.jpg',
    product: 'Hierro al 62% y sulfuro de cobre',
    lead: 'Hierro magnetita al 62%',
    text: 'Mineral de hierro de alta ley, valorado por su excelente concentración, ideal para la producción de acero y procesos industriales de alta exigencia.',
    points: [
      'Alta ley y rendimiento en procesos metalúrgicos',
      'Producto con alta demanda internacional',
      'Evaluación técnica y logística personalizada',
      'Compra Exwork en faena',
    ],
  },
  {
    name: 'Planta Andrea II',
    place: 'Salar Grande',
    image: '/img/salar-grande.jpg',
    product: 'Sal industrial',
    lead: 'Sal industrial de alta pureza',
    text: 'Para múltiples aplicaciones, con suministro constante y confiable.',
    points: [
      'Granulometría controlada y libre de impurezas, cumpliendo estándares internacionales',
      'Suministro constante para la industria química, alimentaria, textil y de tratamiento de aguas',
    ],
  },
  {
    name: 'Planta Andrea III',
    place: 'Salar de Chiza',
    image: '/img/salar-chiza.jpg',
    product: 'Sal industrial',
    lead: 'Sal industrial de máxima pureza',
    text: 'Especial para procesos exigentes.',
    points: [
      'Control de calidad en origen y en cada etapa del proceso',
      'Comprometidos con el abastecimiento responsable y sostenible',
    ],
  },
];

export const exwork = [
  { title: 'Hierro al 62%', text: 'Adquirimos mineral de hierro al 62% en faena, modalidad Exwork.' },
  { title: 'Sulfuro de cobre', text: 'Compramos sulfuro de cobre de alta ley en faena, modalidad Exwork.' },
];

export const exworkBenefits = [
  { icon: 'shield', text: 'Compra segura y transparente' },
  { icon: 'handshake', text: 'Pago oportuno y confiable' },
  { icon: 'chart', text: 'Relaciones a largo plazo' },
  { icon: 'people', text: 'Apoyo a la pequeña y mediana minería' },
];

export const saltStats = [
  { label: 'Producción anual', value: '600.000 – 720.000', unit: 'toneladas / año' },
  { label: 'Capacidad productiva', value: '50.000 – 60.000', unit: 'toneladas / mes' },
  { label: 'Contratos proyectados', value: '36 meses', unit: 'USD 5.000 millones' },
];

export const jobs = [
  { label: 'Empleo directo', value: '80 – 120', unit: 'personas' },
  { label: 'Empleo indirecto', value: 'Más de 4.800', unit: 'personas' },
];

export const markets = [
  { flag: '🇺🇸', name: 'EEUU' },
  { flag: '🇨🇳', name: 'China' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇨🇦', name: 'Canadá' },
  { flag: '🇩🇪', name: 'Alemania' },
];

export const values = [
  { icon: 'leaf', title: 'Sostenibilidad', text: 'Comprometidos con el medioambiente y el uso responsable de los recursos.' },
  { icon: 'people', title: 'Desarrollo regional', text: 'Fortalecemos la economía local y generamos oportunidades.' },
  { icon: 'shield', title: 'Calidad y seguridad', text: 'Procesos eficientes con estándares internacionales.' },
  { icon: 'globe', title: 'Visión global', text: 'Conectamos Tarapacá con los principales mercados del mundo.' },
];

export const commitments = [
  { icon: 'diamond', title: 'Compromiso', text: 'con nuestros proveedores y comunidades.' },
  { icon: 'handshake', title: 'Contratos', text: 'justos y transparentes a largo plazo.' },
  { icon: 'chart', title: 'Impulsamos', text: 'el desarrollo sostenible y la economía circular.' },
];

export const impact = [
  { icon: 'people', title: 'Generamos empleo', text: 'para nuestras comunidades y proveedores locales.' },
  { icon: 'recycle', title: 'Promovemos', text: 'la productividad y el desarrollo de la pequeña y mediana minería.' },
  { icon: 'globe', title: 'Conectamos minerales chilenos con el mundo', text: 'con confianza y compromiso.' },
];
