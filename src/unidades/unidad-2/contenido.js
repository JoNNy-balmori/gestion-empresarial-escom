export const temas = [
  {
    id: '2-1',
    titulo: '2.1 Factores de competitividad que afectan la gestión empresarial',
    texto:
      'El temario no enumera los factores; este apunte destaca tecnología, capital humano, calidad, costos y capacidad de respuesta ante el entorno. Ningún factor actúa aislado: la ventaja aparece cuando se refuerzan entre sí.',
  },
  {
    id: '2-2',
    titulo: '2.2 Filosofía corporativa de empresas de innovación tecnológica',
    texto:
      'La filosofía corporativa reúne la misión, la visión, los valores y las políticas de la empresa. Es el marco que vuelve coherentes las decisiones cotidianas y da sentido a la cultura organizacional.',
  },
  {
    id: '2-3',
    titulo: '2.3 Estrategia y cultura organizacional de empresas de innovación tecnológica',
    texto:
      'Una estrategia solo funciona si la cultura de la empresa la sostiene. Cuando los valores, los hábitos de trabajo y los incentivos apuntan en la misma dirección, la estrategia deja de ser un documento y se convierte en conducta.',
  },
  {
    id: '2-4',
    titulo: '2.4 Implementación de la estrategia',
    texto:
      'La implementación traduce la estrategia en planes, programas, presupuestos y procedimientos. Los planes fijan metas, los programas ordenan las actividades, los presupuestos asignan recursos y los procedimientos establecen cómo se ejecuta cada tarea.',
    subtemas: [
      {
        id: '2-4-1',
        titulo: '2.4.1 Cuadro de mando integral',
        texto:
          'Según Kaplan y Norton (Harvard Business Review, 1992), el cuadro de mando integral mira el desempeño desde cuatro perspectivas: financiera, del cliente, de los procesos internos y de innovación y aprendizaje. Así evita que una empresa mida solo sus resultados económicos y pierda de vista lo que los produce.',
        perspectivas: [
          ['Financiera', '¿Cómo nos ven los accionistas?', 'Ingresos, costos y rentabilidad'],
          ['Cliente', '¿Cómo nos ven nuestros clientes?', 'Satisfacción, calidad y fidelidad'],
          ['Procesos', '¿Qué debemos hacer bien?', 'Eficiencia, innovación y operación'],
          ['Innovación y aprendizaje', '¿Cómo seguimos mejorando y creando valor?', 'Habilidades, conocimiento y clima'],
        ],
      },
    ],
  },
  {
    id: '2-5',
    titulo: '2.5 Herramientas de gestión estratégica',
    texto:
      'Las herramientas de gestión estratégica vuelven explícitas las decisiones: permiten describir el entorno, elegir una posición y convertir el análisis en acciones. El temario incluye el FODA, los modelos de negocio, el Diamante de Porter, el plan comercial y el plan maestro.',
    subtemas: [
      {
        id: '2-5-1',
        titulo: '2.5.1 Análisis FODA y desarrollo de estrategias',
        texto:
          'Como síntesis de este apunte, el FODA examina factores internos —fortalezas y debilidades— y externos —oportunidades y amenazas—. Al cruzar ambos ejes se forman estrategias: aprovechar una fortaleza ante una oportunidad, corregir una debilidad o defenderse de una amenaza.',
      },
      {
        id: '2-5-2',
        titulo: '2.5.2 Modelos de negocio',
        texto:
          'En este apunte, un modelo de negocio explica qué se ofrece, a quién se sirve, cómo se crea valor y cómo se captura una parte de ese valor. En una empresa tecnológica, el modelo debe revisarse cada vez que cambia la tecnología o el cliente.',
      },
      {
        id: '2-5-3',
        titulo: '2.5.3 Modelo de Diamante de Porter',
        texto:
          'El Diamante de Porter explica la competitividad nacional a partir de cuatro vértices: condiciones de los factores (recursos y talento), condiciones de la demanda, industrias relacionadas y de apoyo, y estrategia, estructura y rivalidad de las empresas (Porter, Harvard Business Review, 1990). El gobierno y el azar actúan como fuerzas adicionales; este último es contexto adicional del apunte.',
      },
      {
        id: '2-5-4',
        titulo: '2.5.4 Plan comercial',
        texto:
          'En este apunte, el plan comercial define el mercado objetivo, la propuesta de valor, los precios, los canales de distribución y la promoción. Es la parte de la estrategia que se comunica con el cliente.',
      },
      {
        id: '2-5-5',
        titulo: '2.5.5 Plan maestro',
        texto:
          'En este apunte, el plan maestro integra los planes funcionales en un solo calendario: ordena proyectos, responsables, recursos y fechas para que la estrategia pueda ejecutarse y revisarse.',
      },
    ],
  },
];

export const preguntas = [
  {
    pregunta: '¿Cuál de estos factores incide en la competitividad de una empresa tecnológica?',
    opciones: ['Capital humano e innovación', 'El color del logotipo', 'El número de oficinas'],
    respuesta: 0,
  },
  {
    pregunta: '¿Qué reúne la filosofía corporativa?',
    opciones: ['Presupuestos y procedimientos', 'Misión, visión, valores y políticas', 'Planes de mercadotecnia'],
    respuesta: 1,
  },
  {
    pregunta: '¿Cuántas perspectivas considera el cuadro de mando integral?',
    opciones: ['Dos', 'Tres', 'Cuatro'],
    respuesta: 2,
  },
  {
    pregunta: 'En el FODA, las oportunidades son factores:',
    opciones: ['Internos', 'Externos', 'Presupuestarios'],
    respuesta: 1,
  },
  {
    pregunta: '¿Qué vértice del Diamante de Porter se refiere a talento y recursos?',
    opciones: ['Condiciones de los factores', 'Condiciones de la demanda', 'Industrias relacionadas'],
    respuesta: 0,
  },
];
