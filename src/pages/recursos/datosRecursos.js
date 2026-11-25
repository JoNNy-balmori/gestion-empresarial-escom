export const SECCIONES_RECURSOS = [
  { id: 'bibliografia', titulo: 'Bibliografía' },
  { id: 'marco-legal', titulo: 'Portales normativos (México)' },
  { id: 'herramientas', titulo: 'Herramientas digitales' },
];

export const BIBLIOGRAFIA = [
  // --- BIBLIOGRAFÍA OFICIAL DEL PROGRAMA (HOJA 7) ---
  {
    id: 'bib-1',
    tipo: 'Básica',
    unidades: ['I', 'II', 'V'],
    autor: 'Batista, H. N. y Estupiñan, R. J.',
    anio: 2018,
    titulo: 'Gestión empresarial y posmodernidad',
    editorial: 'Bélgica Ablibitum',
    isbn: '978-1-59973-577-1',
    citaApa:
      'Batista, H. N., y Estupiñan, R. J. (2018). Gestión empresarial y posmodernidad. Bélgica Ablibitum. ISBN 978-1-59973-577-1.',
    utilidad: 'Enfoques contemporáneos de la gestión empresarial y retos de las organizaciones actuales.',
  },
  {
    id: 'bib-2',
    tipo: 'Básica',
    unidades: ['I', 'III', 'IV'],
    autor: 'Chiavenato, I.',
    anio: 2019,
    titulo: 'Introducción a la teoría general de la administración',
    editorial: 'Mc Graw Hill',
    isbn: '97814556271824',
    citaApa:
      'Chiavenato, I. (2019). Introducción a la teoría general de la administración. Mc Graw Hill. ISBN 97814556271824.',
    utilidad: 'Fundamentos del proceso administrativo, evolución organizacional y enfoque de sistemas.',
  },
  {
    id: 'bib-3',
    tipo: 'Complementaria',
    unidades: ['II', 'III'],
    autor: 'Daft, R. L.',
    anio: 2013,
    titulo: 'Teoría y diseño organizacional',
    editorial: 'Thomson',
    isbn: '9786075268149',
    citaApa:
      'Daft, R. L. (2013). Teoría y diseño organizacional. Thomson. ISBN 9786075268149.',
    utilidad: 'Estructura organizacional, cultura corporativa, cambio organizacional e innovación.',
  },
  {
    id: 'bib-4',
    tipo: 'Básica',
    unidades: ['I', 'II', 'III'],
    autor: 'Hitt, A., Black, J. y Porter, W.',
    anio: 2006,
    titulo: 'Administración',
    editorial: 'Pearson Educación',
    isbn: '970-26-0760-4',
    citaApa:
      'Hitt, A., Black, J., y Porter, W. (2006). Administración. Pearson Educación. ISBN 970-26-0760-4.',
    utilidad: 'Planeación estratégica, toma de decisiones gerenciales y coordinación operativa.',
  },
  {
    id: 'bib-5',
    tipo: 'Complementaria',
    unidades: ['III', 'IV', 'V'],
    autor: 'Laudon, K. C. y Laudon, J. P.',
    anio: 2008,
    titulo: 'Sistemas de información gerencial',
    editorial: 'Pearson',
    isbn: '978-607-32-0949-6',
    citaApa:
      'Laudon, K. C., y Laudon, J. P. (2008). Sistemas de información gerencial. Pearson. ISBN 978-607-32-0949-6.',
    utilidad: 'Sistemas ERP, inteligencia de negocios, seguridad de la información y aspectos éticos y legales en TI.',
  },
  {
    id: 'bib-6',
    tipo: 'Básica',
    unidades: ['IV', 'V'],
    autor: 'Peña, A. B. y Batalla, N. P.',
    anio: 2016,
    titulo: 'Dirección de comunicación y habilidades directivas',
    editorial: 'Dykinson',
    isbn: '978-84-9085-840-0',
    citaApa:
      'Peña, A. B., y Batalla, N. P. (2016). Dirección de comunicación y habilidades directivas. Dykinson. ISBN 978-84-9085-840-0.',
    utilidad: 'Liderazgo, comunicación efectiva, trabajo en equipo y competencias directivas.',
  },
  {
    id: 'bib-7',
    tipo: 'Complementaria',
    unidades: ['I', 'II', 'III', 'IV'],
    autor: 'Robbins, P. S. y Coulter, M.',
    anio: 2005,
    titulo: 'Administración',
    editorial: 'Pearson Educación',
    isbn: '9786073227674',
    citaApa:
      'Robbins, P. S., y Coulter, M. (2005). Administración. Pearson Educación. ISBN 9786073227674.',
    utilidad: 'Funciones administrativas, planeación, organización, dirección, capital humano y control.',
  },
  {
    id: 'bib-8',
    tipo: 'Básica',
    unidades: ['I', 'II'],
    autor: 'Rubio, D. P.',
    anio: 2008,
    titulo: 'Introducción a la gestión empresarial',
    editorial: 'Unión Europea: Instituto Europeo de Gestión Empresarial',
    isbn: '84-689-7602-4',
    citaApa:
      'Rubio, D. P. (2008). Introducción a la gestión empresarial. Unión Europea: Instituto Europeo de Gestión Empresarial. ISBN 84-689-7602-4.',
    utilidad: 'Conceptos base de empresa, objetivos de la gestión y diferencias frente a la administración.',
  },

  // --- BIBLIOGRAFÍA DE APOYO RECOMENDADA PARA PRÁCTICAS ---
  {
    id: 'bib-9',
    tipo: 'De apoyo',
    unidades: ['II'],
    autor: 'David, F. R. y David, F. R.',
    anio: 2017,
    titulo: 'Conceptos de administración estratégica',
    editorial: 'Pearson Educación',
    isbn: null,
    citaApa:
      'David, F. R., y David, F. R. (2017). Conceptos de administración estratégica (15.ª ed.). Pearson Educación.',
    utilidad: 'Filosofía corporativa, análisis FODA, formulación de estrategias y Cuadro de Mando Integral.',
  },
  {
    id: 'bib-10',
    tipo: 'De apoyo',
    unidades: ['IV'],
    autor: 'Chiavenato, I.',
    anio: 2020,
    titulo: 'Gestión del talento humano',
    editorial: 'McGraw-Hill Interamericana',
    isbn: null,
    citaApa:
      'Chiavenato, I. (2020). Gestión del talento humano (5.ª ed.). McGraw-Hill Interamericana.',
    utilidad: 'Ciclo de vida del colaborador: análisis de puestos, reclutamiento, onboarding, capacitación y compensaciones.',
  },
  {
    id: 'bib-11',
    tipo: 'De apoyo',
    unidades: ['IV'],
    autor: 'Gutiérrez Pulido, H.',
    anio: 2020,
    titulo: 'Calidad y productividad',
    editorial: 'McGraw-Hill Education',
    isbn: null,
    citaApa:
      'Gutiérrez Pulido, H. (2020). Calidad y productividad (5.ª ed.). McGraw-Hill Education.',
    utilidad: 'Control estadístico, las 7 herramientas de Ishikawa (Pareto, gráficos de control), TQM, ciclo PHVA y Las 5’s.',
  },
  {
    id: 'bib-12',
    tipo: 'De apoyo',
    unidades: ['III', 'IV'],
    autor: 'Heizer, J., Render, B. y Munson, C.',
    anio: 2017,
    titulo: 'Principios de administración de operaciones',
    editorial: 'Pearson Educación',
    isbn: null,
    citaApa:
      'Heizer, J., Render, B., y Munson, C. (2017). Principios de administración de operaciones (10.ª ed.). Pearson Educación.',
    utilidad: 'Gestión operativa, filosofía Just in Time (JIT), eliminación de desperdicios y sistemas ERP.',
  },
  {
    id: 'bib-13',
    tipo: 'De apoyo',
    unidades: ['V'],
    autor: 'Organización Internacional de Normalización (ISO)',
    anio: 2010,
    titulo: 'ISO 26000: Guía de responsabilidad social',
    editorial: 'ISO',
    isbn: null,
    citaApa:
      'Organización Internacional de Normalización. (2010). ISO 26000:2010 Guía de responsabilidad social. ISO.',
    utilidad: 'Marco internacional para integrar gobernanza, prácticas laborales justas, medio ambiente y transparencia.',
  },
];

export const PORTALES_OFICIALES = [
  {
    id: 'leyes-mx',
    organismo: 'Cámara de Diputados (México)',
    tema: 'Leyes vigentes: LGSM, Ley de Sociedades Civiles, Art. 123 CPEUM, LFT, LFPDPPP, LFDA y LFPPI',
    unidades: 'Unidades I, IV y V',
    url: 'https://www.diputados.gob.mx/LeyesBiblio/index.htm',
  },
  {
    id: 'stps',
    organismo: 'STPS · Secretaría del Trabajo',
    tema: 'Normas Oficiales Mexicanas laborales: NOM-035 (riesgos psicosociales) y NOM-037 (teletrabajo)',
    unidades: 'Unidad IV',
    url: 'https://www.gob.mx/stps',
  },
  {
    id: 'imss',
    organismo: 'IMSS · Instituto Mexicano del Seguro Social',
    tema: 'Seguridad social, alta patronal, riesgos de trabajo y cuotas obrero-patronales',
    unidades: 'Unidad IV',
    url: 'https://www.imss.gob.mx/',
  },
  {
    id: 'indautor',
    organismo: 'INDAUTOR · Derecho de Autor',
    tema: 'Registro de programas de cómputo (código fuente), bases de datos originales y documentación',
    unidades: 'Unidad V',
    url: 'https://indautor.gob.mx/',
  },
  {
    id: 'impi',
    organismo: 'IMPI · Propiedad Industrial',
    tema: 'Registro de marcas, logotipos, patentes, modelos de utilidad y secretos industriales',
    unidades: 'Unidad V',
    url: 'https://www.gob.mx/impi',
  },
  {
    id: 'ods',
    organismo: 'ONU · Agenda 2030',
    tema: 'Los 17 Objetivos de Desarrollo Sostenible (enfoque TI: ODS 8, 9, 12 y 13)',
    unidades: 'Unidad V',
    url: 'https://www.un.org/sustainabledevelopment/es/',
  },
  {
    id: 'cemefi',
    organismo: 'CEMEFI · Distintivo ESR',
    tema: 'Criterios de Responsabilidad Social Empresarial y estándares ESG en México',
    unidades: 'Unidad V',
    url: 'https://www.cemefi.org/',
  },
];

export const HERRAMIENTAS_DIGITALES = [
  {
    id: 'licencias',
    categoria: 'Legal y Open Source',
    nombre: 'Choose a License (GitHub)',
    descripcion:
      'Guía práctica para comparar licencias MIT, Apache 2.0 y GPL antes de publicar o integrar repositorios.',
    unidades: 'Unidad V',
    url: 'https://choosealicense.com/',
  },
  {
    id: 'cc',
    categoria: 'Legal y contenidos',
    nombre: 'Creative Commons',
    descripcion:
      'Selector oficial para verificar y atribuir correctamente licencias BY, NC, SA y ND en imágenes, íconos y textos.',
    unidades: 'Unidad V',
    url: 'https://creativecommons.org/licenses/?lang=es',
  },
  {
    id: 'wcag',
    categoria: 'Sustentabilidad e inclusión',
    nombre: 'W3C · Guías de Accesibilidad Web (WCAG)',
    descripcion:
      'Estándar técnico para diseñar aplicaciones inclusivas y accesibles (dimensión social y tecnológica de la RSE).',
    unidades: 'Unidad V',
    url: 'https://www.w3.org/WAI/standards-guidelines/wcag/es',
  },
  {
    id: 'odoo',
    categoria: 'Calidad y ERP',
    nombre: 'Odoo Community (ERP Open Source)',
    descripcion:
      'Plataforma ERP modular de código abierto para explorar integración de ventas, inventarios, compras y nómina.',
    unidades: 'Unidad IV',
    url: 'https://www.odoo.com/es',
  },
  {
    id: 'iso25000',
    categoria: 'Calidad de software',
    nombre: 'Portal ISO/IEC 25000',
    descripcion:
      'Referencia técnica de atributos de calidad del producto software (funcionalidad, usabilidad, seguridad y mantenibilidad).',
    unidades: 'Unidad IV',
    url: 'https://iso25000.com/',
  },
  {
    id: 'inegi',
    categoria: 'Entorno y estrategia',
    nombre: 'INEGI · DENUE y Censos Económicos',
    descripcion:
      'Directorio estadístico oficial para clasificar tamaños de empresas en México (MiPyMEs) y analizar competencia por sector.',
    unidades: 'Unidades I y II',
    url: 'https://www.inegi.org.mx/app/mapa/denue/',
  },
];