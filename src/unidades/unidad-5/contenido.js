export const temas = [
 {
    id: '5-1',
    titulo: '5.1 Aspectos legales',
    texto:
      'La operación de una empresa de base tecnológica se desarrolla dentro de un marco jurídico que protege tanto sus activos intangibles como los derechos de sus usuarios. Conocer las figuras legales vigentes en México evita sanciones, pérdida de derechos sobre el código y conflictos por licencias o uso indebido de datos.',
    comparativa: [
      [
        'Derechos de Autor (INDAUTOR)',
        'Ley Federal del Derecho de Autor',
        'Protege código fuente y objeto, bases de datos originales, interfaces, manuales y documentación. Distingue derechos morales (irrenunciables) y patrimoniales.',
      ],
      [
        'Propiedad Industrial (IMPI)',
        'Ley Federal de Protección a la Propiedad Industrial',
        'Protege marcas y logotipos (10 años renovables), patentes de invenciones técnicas, modelos de utilidad y diseños industriales.',
      ],
      [
        'Secreto Industrial (LFPPI / NDA)',
        'Resguardo confidencial sin registro público',
        'Protege algoritmos propios, arquitecturas críticas o listas comerciales que dan ventaja competitiva y se cuidan mediante contratos de confidencialidad y control de accesos.',
      ],
    ],
    subtemas: [
      {
        id: '5-1-1',
        titulo: '5.1.1 Propiedad intelectual',
        texto:
          'Protege las creaciones del intelecto mediante derechos de autor (INDAUTOR) y propiedad industrial (IMPI). En proyectos de software en México, el código fuente se registra ante INDAUTOR como programa de cómputo y el nombre comercial o logotipo ante el IMPI como marca. También es indispensable auditar licencias de terceros: software propietario (EULA), código abierto permisivo (MIT, Apache 2.0), copyleft (GPL, que exige liberar derivados bajo la misma licencia) y Creative Commons (BY, NC, SA, ND) para contenidos visuales o textuales.',
      },
      {
        id: '5-1-2',
        titulo: '5.1.2 Uso de información digital',
        texto:
          'Implica clasificar la información en pública, confidencial, datos personales y datos personales sensibles. En el sector privado mexicano, la LFPDPPP obliga a presentar un Aviso de Privacidad claro antes de recabar datos y a garantizar los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición). A nivel técnico se respalda con la tríada CIA de seguridad de la información (Confidencialidad, Integridad y Disponibilidad), validez de firma electrónica (e.firma / NOM-151) y prevención de delitos informáticos.',
      },
    ],
  },
{
    id: '5-2',
    titulo: '5.2 Responsabilidad social y sustentabilidad',
    texto:
      'La Responsabilidad Social Empresarial (RSE) es el compromiso ético y estratégico de gestionar de forma transparente los impactos de la organización sobre sus grupos de interés (colaboradores, clientes, proveedores, comunidad y entorno). La sustentabilidad complementa este enfoque asegurando que el modelo de negocio satisfaga necesidades actuales sin comprometer los recursos de generaciones futuras, evitando prácticas engañosas como el greenwashing.',
    comparativa: [
      [
        'Dimensión Ambiental',
        'Reducir huella de carbono, consumo energético y residuos bajo economía circular.',
        'Servidores en la nube con energía renovable (Green Cloud), reciclaje responsable de hardware (e-waste) y extensión de vida útil de equipos.',
      ],
      [
        'Dimensión Social',
        'Garantizar condiciones laborales dignas, inclusión, equidad y aporte comunitario.',
        'Interfaces accesibles (estándares WCAG), privacidad del usuario, eliminación del exceso de horas (crunch) y reducción de la brecha digital.',
      ],
      [
        'Dimensión Económica',
        'Rentabilidad sana a largo plazo con ética, transparencia fiscal y valor compartido.',
        'Licitaciones transparentes, pagos justos a proveedores y modelos de suscripción claros sin patrones oscuros (dark patterns).',
      ],
      [
        'Dimensión Tecnológica',
        'Orientar la innovación para que sea eficiente, segura, auditable y centrada en las personas.',
        'Green Software (código y consultas optimizadas de bajo consumo), auditoría de sesgos en IA y rechazo a la obsolescencia programada.',
      ],
    ],
    subtemas: [
      {
        id: '5-2-marcos',
        titulo: 'Marcos y estándares de referencia (ODS, ESG, ISO 26000 y ESR)',
        texto:
          'El desempeño responsable se evalúa mediante estándares verificables: los Objetivos de Desarrollo Sostenible (Agenda 2030 de la ONU, destacando en TI los ODS 8, 9, 12 y 13), los criterios ESG/ASG (ambientales, sociales y de gobierno corporativo), la norma guía ISO 26000 de Responsabilidad Social y, en México, el Distintivo ESR otorgado por el CEMEFI.',
      },
    ],
  },
  {
    id: '5-3',
    titulo: '5.3 Habilidades digitales',
    texto:
      'Las habilidades digitales permiten a las personas y a los equipos aprovechar la tecnología para aprender, colaborar y responder al cambio. El temario las agrupa en cuatro capacidades que se practican de forma continua.',
    subtemas: [
      {
        id: '5-3-1',
        titulo: '5.3.1 Learnability',
        texto:
          'Es la disposición y el método para aprender de manera continua: detectar qué hace falta saber, buscar fuentes confiables y convertir lo aprendido en una práctica aplicable al trabajo. Por ejemplo, un equipo que adopta una herramienta nueva puede fijar una meta semanal, practicar con un caso real y documentar los resultados.',
      },
      {
        id: '5-3-2',
        titulo: '5.3.2 Teamability',
        texto:
          'Es la capacidad de trabajar en equipo, incluso cuando sus integrantes están en lugares distintos o vienen de disciplinas diferentes. Requiere acuerdos claros, comunicación y responsabilidad sobre la parte que a cada quien corresponde. En un proyecto de software, un tablero compartido, las revisiones de código y los acuerdos sobre entregas ayudan a coordinar el trabajo.',
      },
      {
        id: '5-3-3',
        titulo: '5.3.3 Networking',
        texto:
          'Es la construcción y el mantenimiento de relaciones profesionales. Una red de contactos útil se basa en aportar, escuchar y dar seguimiento, no solo en recolectar nombres. Un ejemplo es participar en una comunidad técnica, compartir una solución y mantener contacto con quienes aportan conocimientos complementarios.',
      },
      {
        id: '5-3-4',
        titulo: '5.3.4 Adaptability',
        texto:
          'Es la capacidad de ajustarse a cambios tecnológicos, organizacionales o del mercado. Implica revisar lo que ya no funciona y modificar el plan sin perder de vista el objetivo. Si cambia una plataforma de ventas, el equipo puede probar una alternativa con un grupo pequeño, medir resultados y ajustar el proceso antes de extenderlo.',
      },
    ],
  },
  {
    id: '5-4',
    titulo: '5.4 Tecnologías y tendencias digitales',
    texto:
      'Las tecnologías digitales reconfiguran la forma en que la empresa produce, decide y se relaciona. El temario destaca cuatro frentes que conviene comprender antes de elegir una herramienta.',
    subtemas: [
      {
        id: '5-4-1',
        titulo: '5.4.1 Internet de las cosas',
        texto:
          'El internet de las cosas conecta objetos físicos con sensores y redes para generar e intercambiar datos. Se aplica en monitoreo de equipos, logística, ciudades y servicios, y obliga a cuidar la seguridad y la privacidad de la información. En un almacén, sensores de temperatura pueden generar alertas para evitar pérdidas; se deben controlar los accesos y verificar la precisión de las mediciones.',
      },
      {
        id: '5-4-2',
        titulo: '5.4.2 Inteligencia Artificial',
        texto:
          'La inteligencia artificial agrupa sistemas capaces de realizar tareas asociadas con la inteligencia humana, como reconocer patrones, clasificar información o apoyar decisiones. Su resultado depende de la calidad de los datos y de la revisión humana. Una empresa puede clasificar solicitudes de soporte con IA, medir errores y permitir que una persona revise las clasificaciones dudosas.',
      },
      {
        id: '5-4-3',
        titulo: '5.4.3 Inteligencia de negocios',
        texto:
          'La inteligencia de negocios reúne, integra y analiza datos para explicar lo que ocurre en la empresa y apoyar decisiones. No se limita a reportar cifras: busca que la información llegue a quien decide y en el momento en que es útil. Un tablero de ventas puede comparar resultados por periodo y producto, siempre que los indicadores tengan definiciones consistentes.',
      },
      {
        id: '5-4-4',
        titulo: '5.4.4 Blockchain y la nube',
        texto:
          'Blockchain es un registro distribuido que conserva un historial de transacciones difícil de alterar; la nube ofrece infraestructura y servicios bajo demanda. Juntas habilitan trazabilidad y escalabilidad, siempre que se definan reglas de acceso y respaldo. Por ejemplo, un registro compartido puede apoyar la trazabilidad entre proveedores, mientras que un servicio en la nube permite consultar inventarios desde varias sucursales. Antes de elegir conviene comparar costos, riesgos y necesidades reales.',
      },
    ],
  },
];
