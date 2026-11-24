// Material didáctico complementario basado en la competencia de la unidad.
export const temas = [
  {
    id: '3-1',
    titulo: '3.1 Estructura organizacional',
    texto: 'La gestión operativa convierte los objetivos estratégicos en actividades cotidianas. La estructura organizacional define responsabilidades, autoridad, comunicación y coordinación. En una empresa de software, por ejemplo, desarrollo, soporte y ventas deben compartir prioridades para cumplir los compromisos con los clientes.',
    comparativa: [
      ['Funcional', 'Agrupa por especialidad', 'Favorece la especialización; exige coordinación entre áreas'],
      ['Divisional', 'Agrupa por producto o mercado', 'Facilita decisiones locales; puede duplicar recursos'],
      ['Matricial', 'Combina áreas y proyectos', 'Comparte especialistas; requiere claridad de autoridad'],
    ],
    subtemas: [
      { id: '3-1-1', titulo: 'Organización del trabajo', texto: 'Un organigrama muestra las relaciones de autoridad. Un manual de procedimientos describe las tareas, sus responsables, entradas, salidas y criterios de aceptación. Ambos deben mantenerse actualizados conforme cambia la operación.' },
    ],
  },
  {
    id: '3-2', titulo: '3.2 Gestión de procesos y recursos',
    texto: 'Un proceso transforma entradas en resultados que aportan valor. Para administrarlo se identifica su objetivo, se documentan las actividades, se asignan recursos y se mide el desempeño. Un cuello de botella limita la capacidad del sistema; mejorar otras etapas no necesariamente aumenta la producción total.',
    subtemas: [
      { id: '3-2-1', titulo: 'Capacidad, inventarios y programación', texto: 'La capacidad es el volumen que puede atenderse en un periodo. La programación distribuye tareas según demanda, recursos y prioridades. Los inventarios ayudan a evitar interrupciones, pero generan costos de almacenamiento; conviene equilibrar disponibilidad y costo.' },
      { id: '3-2-2', titulo: 'Indicadores operativos', texto: 'La productividad relaciona resultados con recursos utilizados. El cumplimiento de entregas se obtiene dividiendo las entregas a tiempo entre el total de entregas y multiplicando por 100. También se pueden medir tiempos de ciclo, defectos y capacidad utilizada. Cada indicador necesita una meta y un periodo de medición.' },
    ],
  },
  {
    id: '3-3', titulo: '3.3 Gestión de costos y decisiones financieras',
    texto: 'Los costos fijos permanecen constantes dentro de un rango de actividad; los variables cambian con el volumen producido. El margen de contribución unitario es el precio menos el costo variable por unidad. El punto de equilibrio en unidades es el costo fijo dividido por ese margen, siempre que el margen sea positivo. Se redondea hacia arriba si solo pueden venderse unidades completas.',
    comparativa: [
      ['Costo fijo', 'Renta mensual', 'No depende directamente del volumen'],
      ['Costo variable', 'Material por producto', 'Aumenta con la producción'],
      ['Margen de contribución', 'Precio menos costo variable', 'Contribuye a cubrir costos fijos y generar utilidad'],
    ],
    subtemas: [
      { id: '3-3-1', titulo: 'Ejemplo de punto de equilibrio', texto: 'Si una empresa tiene costos fijos mensuales de $12,000, cobra $500 por unidad y gasta $300 de costo variable unitario, su margen es $200. Necesita vender 60 unidades para cubrir sus costos bajo estos supuestos. Si vende 80, su utilidad operativa estimada es $4,000.' },
    ],
  },
  {
    id: '3-4', titulo: '3.4 Innovación tecnológica en la operación',
    texto: 'La innovación tecnológica permite mejorar procesos, productos y servicios. Antes de automatizar conviene diagnosticar el problema, comparar alternativas, estimar costos y beneficios, probar una solución a pequeña escala y medir resultados. La tecnología debe acompañarse de capacitación, controles de seguridad y gestión del cambio.',
    subtemas: [
      { id: '3-4-1', titulo: 'Herramientas de gestión', texto: 'Un ERP integra información de áreas como compras, inventarios y finanzas; un CRM organiza las relaciones con clientes. Los tableros de indicadores ayudan a detectar desviaciones. La elección depende del proceso, presupuesto, calidad de los datos e integración con sistemas existentes.' },
      { id: '3-4-2', titulo: 'Mejora continua', texto: 'Identificar una desviación, investigar su causa, ensayar una mejora y verificar el resultado permite aprender con evidencia. Por ejemplo, un equipo de soporte puede comparar el tiempo medio de resolución antes y después de implementar una base de conocimiento.' },
    ],
  },
];

export const casos = [
  { pregunta: 'Un equipo de pruebas recibe más solicitudes de las que puede atender y los lanzamientos se retrasan. ¿Qué conviene hacer primero?', opciones: ['Aumentar solicitudes de desarrollo', 'Medir y atender la restricción en pruebas', 'Eliminar toda revisión de calidad'], respuesta: 1, explicacion: 'El cuello de botella limita el flujo total; primero se debe diagnosticar y mejorar esa etapa.' },
  { pregunta: 'Ventas e inventarios tienen registros distintos. ¿Qué solución conviene evaluar?', opciones: ['Integración de datos mediante un ERP', 'Duplicar las hojas manuales', 'Dejar de registrar inventarios'], respuesta: 0, explicacion: 'La integración puede reducir discrepancias, siempre que existan reglas de calidad de datos.' },
  { pregunta: 'Una empresa desea automatizar un proceso que todavía no conoce bien. ¿Cuál es el primer paso?', opciones: ['Comprar el sistema más caro', 'Automatizar todas las tareas de inmediato', 'Documentar el proceso y medir sus problemas'], respuesta: 2, explicacion: 'El diagnóstico permite elegir tecnología adecuada y medir el efecto de la mejora.' },
];

export const preguntas = [
  { pregunta: '¿Qué define la estructura organizacional?', opciones: ['Solo el precio de venta', 'Responsabilidades y relaciones de autoridad', 'Únicamente el inventario'], respuesta: 1 },
  { pregunta: '¿Qué limita el flujo de un proceso?', opciones: ['El cuello de botella', 'El organigrama', 'La misión empresarial'], respuesta: 0 },
  { pregunta: '¿Cómo se calcula el margen de contribución unitario?', opciones: ['Precio más costo fijo', 'Costo fijo entre ventas', 'Precio menos costo variable unitario'], respuesta: 2 },
  { pregunta: 'Con costos fijos de $12,000 y margen unitario de $200, ¿cuál es el punto de equilibrio?', opciones: ['60 unidades', '24 unidades', '200 unidades'], respuesta: 0 },
  { pregunta: '¿Qué debe preceder a una automatización?', opciones: ['Eliminar indicadores', 'Diagnosticar el proceso y sus necesidades', 'Comprar tecnología sin evaluar'], respuesta: 1 },
];
