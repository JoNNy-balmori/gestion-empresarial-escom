import { useState } from 'react';

const EVOLUCION_CALIDAD = [
  {
    id: 'inspeccion',
    etapa: '1. Inspección',
    enfoque: 'Reactivo / Al final del proceso',
    descripcion:
      'Consiste en revisar el producto terminado y separar las piezas o entregas defectuosas antes de enviarlas al cliente.',
    limite:
      'Resulta costosa porque el error ya ocurrió y se desperdiciaron horas, materiales y cómputo en retrabajo.',
    ejemploTI:
      'Probar una aplicación web manualmente un día antes de la entrega final sin haber hecho pruebas durante el desarrollo.',
  },
  {
    id: 'control',
    etapa: '2. Control de calidad',
    enfoque: 'Estadístico / Durante la operación',
    descripcion:
      'Mide el proceso en marcha usando muestras, métricas y herramientas estadísticas para detectar desviaciones a tiempo.',
    limite:
      'Reduce defectos de manera más eficiente, pero suele seguir concentrada solo en el departamento técnico o de QA.',
    ejemploTI:
      'Monitorear tiempos de respuesta del servidor y tasas de error por sprint mediante gráficos de control y análisis de Pareto.',
  },
  {
    id: 'aseguramiento',
    etapa: '3. Aseguramiento',
    enfoque: 'Preventivo / Basado en estándares',
    descripcion:
      'Documenta procesos, políticas, estándares y auditorías (como la familia ISO 9000) para prevenir fallas desde el diseño.',
    limite:
      'Asegura consistencia y trazabilidad, aunque requiere disciplina para no convertirse en burocracia excesiva.',
    ejemploTI:
      'Definir guías de estilo, Pull Requests obligatorios, pruebas automatizadas (CI/CD) y criterios de aceptación antes de programar.',
  },
  {
    id: 'tqm',
    etapa: '4. Calidad Total (TQM)',
    enfoque: 'Estratégico / Toda la organización',
    descripcion:
      'Convierte la calidad en una cultura compartida desde la dirección hasta soporte, orientada a la satisfacción del cliente y la mejora continua.',
    limite:
      'Exige compromiso real del liderazgo, capacitación constante y toma de decisiones basada en evidencia.',
    ejemploTI:
      'Equipos multidisciplinarios donde diseño, ingeniería, negocio y soporte comparten métricas de experiencia de usuario y retrospectivas continuas.',
  },
];

const COSTOS_CALIDAD = [
  {
    tipo: 'Prevención',
    categoria: 'Inversión proactiva',
    detalle:
      'Capacitación técnica, estándares de arquitectura, diseño UX previo y pruebas unitarias automatizadas para evitar errores antes de escribir código.',
  },
  {
    tipo: 'Evaluación',
    categoria: 'Verificación',
    detalle:
      'Revisiones de código (code reviews), pruebas de integración, auditorías de seguridad y validación de requisitos antes del despliegue.',
  },
  {
    tipo: 'Fallas internas',
    categoria: 'Error antes de liberar',
    detalle:
      'Retrabajo, depuración de bugs críticos detectados en QA y retrasos en entregas internas antes de llegar al usuario final.',
  },
  {
    tipo: 'Fallas externas',
    categoria: 'Error en producción',
    detalle:
      'Caídas del sistema, soporte de emergencia, pérdida de clientes, penalizaciones contractuales y daño reputacional. Es el costo más alto.',
  },
];

const SIETE_HERRAMIENTAS = [
  {
    id: 'control',
    nombre: 'Gráficos de control',
    queEs:
      'Trazan una métrica a lo largo del tiempo entre un Límite Superior (LSC), una Línea Central (LC) y un Límite Inferior (LIC).',
    cuandoUsar:
      'Para distinguir fluctuaciones normales (causas comunes) de anomalías reales fuera de límite (causas especiales), como picos anormales de latencia.',
  },
  {
    id: 'pareto',
    nombre: 'Diagrama de Pareto (80/20)',
    queEs:
      'Ordena causas de error de mayor a menor frecuencia junto con su porcentaje acumulado.',
    cuandoUsar:
      'Para priorizar los "pocos vitales": el ~20% de las causas que suele explicar cerca del 80% de las fallas o quejas.',
  },
  {
    id: 'ishikawa',
    nombre: 'Ishikawa (Espina de Pescado)',
    queEs:
      'Organiza posibles causas raíz de un problema en categorías (6M: Método, Mano de obra, Maquinaria/Herramientas, Materiales/Datos, Medición y Medio ambiente).',
    cuandoUsar:
      'En sesiones de equipo para investigar por qué ocurrió una falla compleja en lugar de atacar solo los síntomas.',
  },
  {
    id: 'verificacion',
    nombre: 'Hoja de verificación',
    queEs:
      'Formato estructurado (checklist o registro) para recolectar frecuencias de incidentes en tiempo real sin sesgos.',
    cuandoUsar:
      'Como primer paso para juntar datos limpios antes de construir un Pareto o un histograma.',
  },
  {
    id: 'histograma',
    nombre: 'Histograma',
    queEs:
      'Gráfica de barras que muestra la distribución y dispersión de una variable numérica continua.',
    cuandoUsar:
      'Para observar cómo se distribuyen tiempos de atención de tickets de soporte o tiempos de carga de una plataforma.',
  },
  {
    id: 'dispersion',
    nombre: 'Diagrama de dispersión',
    queEs:
      'Gráfica XY que evalúa si existe correlación entre dos variables cuantitativas.',
    cuandoUsar:
      'Para comprobar si a mayor número de usuarios concurrentes aumenta proporcionalmente la tasa de errores en el servidor.',
  },
  {
    id: 'estratificacion',
    nombre: 'Estratificación',
    queEs:
      'Técnica de separar los datos por grupos (navegador, sistema operativo, turno o sucursal) para aislar patrones ocultos.',
    cuandoUsar:
      'Cuando el promedio general oculta un problema localizado, por ejemplo, una falla que solo ocurre en navegadores móviles.',
  },
];

const INCIDENTES_INICIALES = [
  { id: 'validacion', nombre: 'Errores de validación en formularios', cantidad: 44 },
  { id: 'consultas', nombre: 'Consultas lentas a base de datos', cantidad: 31 },
  { id: 'ui', nombre: 'Desajustes visuales en móvil (CSS)', cantidad: 12 },
  { id: 'sesion', nombre: 'Cierres inesperados de sesión', cantidad: 8 },
  { id: 'correos', nombre: 'Notificaciones por correo retrasadas', cantidad: 5 },
];

const PASOS_PHVA = [
  {
    paso: 1,
    corto: 'Planear (Plan)',
    titulo: '1. Planear (Plan)',
    resumen:
      'Identifica el problema u oportunidad con datos reales, investiga la causa raíz, fija objetivos medibles y define el plan de acción.',
    ejemploTI:
      'Detectar con Pareto que el 75% de los tickets vienen de errores de formulario y consultas lentas; definir como meta reducirlos 50% en un mes.',
  },
  {
    paso: 2,
    corto: 'Hacer (Do)',
    titulo: '2. Hacer (Do)',
    resumen:
      'Ejecuta los cambios planificados primero en un entorno controlado o piloto y documenta cualquier incidencia durante la implementación.',
    ejemploTI:
      'Agregar validaciones en frontend/backend, crear índices en la base de datos y desplegar el ajuste primero en un grupo piloto de usuarios.',
  },
  {
    paso: 3,
    corto: 'Verificar (Check)',
    titulo: '3. Verificar (Check)',
    resumen:
      'Mide los resultados reales frente a los objetivos planteados en la planeación usando indicadores y herramientas estadísticas.',
    ejemploTI:
      'Comparar las métricas de tickets y latencia tras dos semanas: comprobar si las incidencias bajaron realmente al menos 50%.',
  },
  {
    paso: 4,
    corto: 'Actuar (Act)',
    titulo: '4. Actuar (Act)',
    resumen:
      'Si el cambio cumplió la meta, se estandariza en toda la organización; si no alcanzó el objetivo, se ajustan las causas y reinicia el ciclo.',
    ejemploTI:
      'Incorporar las nuevas reglas de validación y revisión de índices al estándar oficial de Pull Requests para todos los proyectos futuros.',
  },
];

const CASOS_PRACTICA_11 = [
  {
    id: 'p11-c1',
    titulo: 'Caso 1: Priorizar 120 tickets acumulados en una semana',
    situacion:
      'Tu equipo de soporte recibió 120 reportes distribuidos en 9 tipos distintos de fallas. Tienen tiempo limitado para el siguiente sprint y necesitan saber qué errores corregir primero para lograr el mayor impacto.',
    opciones: [
      'Diagrama de Pareto (principio 80/20)',
      'Inspección manual de cada línea de código',
      'Eliminar el área de QA para ahorrar costos',
    ],
    correcta: 0,
    explicacion:
      'El Diagrama de Pareto ordena los tipos de fallas de mayor a menor frecuencia y muestra el porcentaje acumulado para atacar primero el ~20% de causas que originan cerca del 80% de los tickets.',
  },
  {
    id: 'p11-c2',
    titulo: 'Caso 2: Pico repentino de latencia en el servidor',
    situacion:
      'Normalmente una API responde entre 90 ms y 130 ms sin afectar al usuario. Hoy, justo después de desplegar una actualización, el tiempo de respuesta saltó a 2,400 ms superando el Límite Superior de Control.',
    opciones: [
      'Es una causa común natural y no requiere investigación',
      'Es una causa especial (asignable) detectada en el gráfico de control y requiere acción correctiva inmediata',
      'Se resuelve únicamente con un diagrama de estratificación anual',
    ],
    correcta: 1,
    explicacion:
      'Un punto fuera de los límites de control originado por un cambio específico corresponde a una causa especial (asignable), por lo que debe aislarse y corregirse de inmediato.',
  },
  {
    id: 'p11-c3',
    titulo: 'Caso 3: Una mejora funcionó en piloto pero volvió a fallar después',
    situacion:
      'Un equipo aplicó un ajuste técnico que redujo los errores de despliegue en un proyecto piloto y verificó que funcionó, pero nunca actualizó los manuales ni las reglas para el resto de los equipos. Dos meses después el problema reapareció.',
    opciones: [
      'Faltó la fase "Planear" del ciclo PHVA',
      'Faltó la fase "Actuar" del ciclo PHVA (estandarizar la mejora exitosa)',
      'Sobró la fase "Verificar" porque ya se sabía que funcionaba',
    ],
    correcta: 1,
    explicacion:
      'En Calidad Total, la fase "Actuar" del ciclo PHVA es indispensable para estandarizar y documentar una mejora comprobada, evitando que la organización regrese a las prácticas anteriores.',
  },
];

export default function Tema43Calidad() {
  const [etapaCalidad, setEtapaCalidad] = useState('tqm');
  const [herramientaId, setHerramientaId] = useState('control');
  const [incidentes, setIncidentes] = useState(INCIDENTES_INICIALES);
  const [pasoPhva, setPasoPhva] = useState(0);
  const [respuestasCaso, setRespuestasCaso] = useState({});

  const etapaActual = EVOLUCION_CALIDAD.find((e) => e.id === etapaCalidad);
  const herramientaActual = SIETE_HERRAMIENTAS.find((h) => h.id === herramientaId);
  const phvaActual = PASOS_PHVA[pasoPhva];

  const actualizarCantidad = (id, valor) => {
    const limpio = Math.max(0, Math.min(999, Math.floor(Number(valor) || 0)));
    setIncidentes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: limpio } : item))
    );
  };

  const ordenados = [...incidentes].sort((a, b) => b.cantidad - a.cantidad);
  const totalIncidentes = ordenados.reduce((acc, item) => acc + item.cantidad, 0);

  let acumuladoPrevio = 0;
  const datosPareto = ordenados.map((item) => {
    const porcentaje = totalIncidentes > 0 ? (item.cantidad / totalIncidentes) * 100 : 0;
    const esVital = totalIncidentes > 0 && item.cantidad > 0 && acumuladoPrevio < 80;
    const acumulado = Math.min(100, acumuladoPrevio + porcentaje);
    acumuladoPrevio = acumulado;
    return {
      ...item,
      porcentaje,
      acumulado,
      esVital,
    };
  });

  const vitales = datosPareto.filter((d) => d.esVital);
  const coberturaVitales = vitales.length > 0 ? vitales[vitales.length - 1].acumulado : 0;

  const elegirOpcionCaso = (casoId, opIdx) => {
    setRespuestasCaso((prev) => ({ ...prev, [casoId]: opIdx }));
  };

  return (
    <div>
      {/* 4.3 Concepto, evolución y costos */}
      <article className="int3-card">
        <span className="int3-tag">Subtema 4.3 · 2 h teoría + 4 h práctica</span>
        <h3>4.3 Calidad</h3>
        <p>
          Conforme al estándar <strong>ISO 9000</strong>, la calidad es el{' '}
          <strong>grado en que un conjunto de características inherentes cumple con los requisitos</strong>{' '}
          del cliente, las normas vigentes y el propósito de uso. En ingeniería, calidad no equivale
          a lujo ni complejidad excesiva, sino a confiabilidad, usabilidad y cumplimiento consistente.
        </p>

        <div className="int3-highlight">
          <strong>Regla de oro en proyectos de software:</strong> Detectar y corregir un defecto en
          producción cuesta varias veces más que prevenirlo durante el análisis y diseño.
        </div>
      </article>

      {/* Evolución interactiva */}
      <div className="int3-section-block">
        <h3>Evolución de la gestión de la calidad</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Explora cómo la calidad pasó de descartar errores al final a integrarse como cultura
          estratégica:
        </p>

        <div className="int3-pill-list">
          {EVOLUCION_CALIDAD.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`int3-tab ${etapaCalidad === item.id ? 'active' : ''}`}
              onClick={() => setEtapaCalidad(item.id)}
            >
              {item.etapa}
            </button>
          ))}
        </div>

        <article className="int3-card">
          <span className="int3-tag">{etapaActual.enfoque}</span>
          <h4>{etapaActual.etapa}</h4>
          <p>{etapaActual.descripcion}</p>
          <p>
            <strong>Alcance o limitación clave:</strong> {etapaActual.limite}
          </p>
          <div className="int3-highlight">
            <strong>Ejemplo en desarrollo de software:</strong> {etapaActual.ejemploTI}
          </div>
        </article>
      </div>

      {/* Costos de la calidad */}
      <div className="int3-section-block">
        <h3>Los 4 costos de la calidad</h3>
        <div className="int3-grid">
          {COSTOS_CALIDAD.map((costo) => (
            <article key={costo.tipo} className="int3-card">
              <span className="int3-tag">{costo.categoria}</span>
              <h4>{costo.tipo}</h4>
              <p>{costo.detalle}</p>
            </article>
          ))}
        </div>
      </div>

      {/* 4.3.1 Control estadístico */}
      <div className="int3-section-block">
        <h3>4.3.1 Control estadístico de procesos (CEP)</h3>
        <div className="int3-grid">
          <article className="int3-card">
            <span className="int3-tag">Variabilidad natural</span>
            <h4>Causas comunes</h4>
            <p>
              Pequeñas fluctuaciones inherentes al funcionamiento normal del sistema (por ejemplo,
              latencia habitual de red entre 90 ms y 130 ms). El proceso se mantiene estable y solo
              se mejora rediseñándolo.
            </p>
          </article>
          <article className="int3-card">
            <span className="int3-tag">Anomalía asignable</span>
            <h4>Causas especiales</h4>
            <p>
              Desviaciones puntuales que sacan al proceso de sus límites de control (por ejemplo, una
              fuga de memoria o una consulta sin índice que dispara la respuesta a 2,500 ms).
              Requieren investigación y corrección inmediata.
            </p>
          </article>
        </div>

        {/* Explorador de las 7 herramientas de Ishikawa */}
        <div className="int3-section-block">
          <h3>Las 7 herramientas básicas de la calidad (Ishikawa)</h3>
          <div className="int3-pill-list">
            {SIETE_HERRAMIENTAS.map((herr) => (
              <button
                key={herr.id}
                type="button"
                className={`int3-tab ${herramientaId === herr.id ? 'active' : ''}`}
                onClick={() => setHerramientaId(herr.id)}
              >
                {herr.nombre}
              </button>
            ))}
          </div>

          <article className="int3-card">
            <h4>{herramientaActual.nombre}</h4>
            <p>
              <strong>Qué es:</strong> {herramientaActual.queEs}
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Cuándo aplicarla en TI:</strong> {herramientaActual.cuandoUsar}
            </p>
          </article>
        </div>

        {/* Simulador interactivo de Diagrama de Pareto */}
        <div className="int3-section-block">
          <h3>Simulador interactivo: Diagrama de Pareto (Regla 80/20)</h3>
          <article className="int3-card">
            <p style={{ marginTop: 0, fontSize: '0.92rem', color: '#475569' }}>
              Modifica el número de reportes por tipo de falla en un sistema web. El simulador
              ordena automáticamente las causas, calcula el porcentaje acumulado y resalta los{' '}
              <strong>pocos vitales</strong> que conviene resolver primero:
            </p>

            <div className="int3-pareto-controls">
              {incidentes.map((item) => (
                <div key={item.id} className="int3-pareto-input-row">
                  <label htmlFor={`pareto-${item.id}`}>{item.nombre}</label>
                  <input
                    id={`pareto-${item.id}`}
                    type="number"
                    min="0"
                    max="999"
                    value={item.cantidad}
                    onChange={(e) => actualizarCantidad(item.id, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="int3-pareto-list">
              {datosPareto.map((item) => (
                <div
                  key={item.id}
                  className={`int3-pareto-row ${item.esVital ? 'vital' : ''}`}
                >
                  <div className="int3-pareto-meta">
                    <span>
                      <strong>{item.nombre}</strong>
                      {item.esVital && (
                        <span className="int3-pareto-badge">Prioridad 80/20</span>
                      )}
                    </span>
                    <span>
                      {item.cantidad} casos ({item.porcentaje.toFixed(1)}%) ·{' '}
                      <strong>Acumulado: {item.acumulado.toFixed(1)}%</strong>
                    </span>
                  </div>
                  <div className="int3-pareto-track">
                    <div
                      className="int3-pareto-fill"
                      style={{ width: `${item.porcentaje}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="int3-highlight">
              <strong>Diagnóstico automático:</strong>{' '}
              {totalIncidentes === 0 ? (
                'Ingresa al menos un incidente para generar el análisis de Pareto.'
              ) : (
                <>
                  Total analizado: <strong>{totalIncidentes} incidentes</strong>. Resolver únicamente{' '}
                  <strong>
                    {vitales.length} de {datosPareto.length} causas
                  </strong>{' '}
                  ataca el <strong>{coberturaVitales.toFixed(1)}%</strong> de los reportes
                  acumulados.
                </>
              )}
            </div>

            <button
              type="button"
              className="int3-btn"
              onClick={() => setIncidentes(INCIDENTES_INICIALES)}
            >
              Restaurar datos de ejemplo
            </button>
          </article>
        </div>
      </div>

      {/* 4.3.2 Calidad Total y Ciclo PHVA */}
      <div className="int3-section-block">
        <h3>4.3.2 Calidad total (TQM) y Ciclo PHVA</h3>
        <article className="int3-card" style={{ marginBottom: '1rem' }}>
          <p style={{ marginTop: 0 }}>
            La <strong>Calidad Total (Total Quality Management)</strong> extiende la responsabilidad
            de la calidad a toda la empresa mediante cinco principios: enfoque al cliente, liderazgo
            activo, participación de todo el personal, decisiones basadas en datos y mejora continua
            (<em>Kaizen</em>).
          </p>
          <div className="int3-highlight">
            <strong>Estándares clave en ISC:</strong> <strong>ISO 9001</strong> (sistema de gestión
            de calidad organizacional) e <strong>ISO/IEC 25010</strong> (calidad del producto
            software: funcionalidad, confiabilidad, usabilidad, seguridad y mantenibilidad).
          </div>
        </article>

        <div className="int3-stepper">
          {PASOS_PHVA.map((item, idx) => (
            <button
              key={item.paso}
              type="button"
              className={`int3-step-btn ${pasoPhva === idx ? 'active' : ''}`}
              onClick={() => setPasoPhva(idx)}
            >
              <span className="int3-step-num">{item.paso}</span>
              <span>{item.corto}</span>
            </button>
          ))}
        </div>

        <article className="int3-card">
          <span className="int3-tag">Ciclo de Deming · Paso {phvaActual.paso} de 4</span>
          <h4>{phvaActual.titulo}</h4>
          <p>{phvaActual.resumen}</p>
          <div className="int3-highlight">
            <strong>Aplicación en un sistema en producción:</strong> {phvaActual.ejemploTI}
          </div>

          <div className="int3-nav-row">
            <button
              type="button"
              className="int3-tab"
              disabled={pasoPhva === 0}
              onClick={() => setPasoPhva((prev) => Math.max(0, prev - 1))}
            >
              ← Fase anterior
            </button>
            <button
              type="button"
              className="int3-tab"
              disabled={pasoPhva === PASOS_PHVA.length - 1}
              onClick={() => setPasoPhva((prev) => Math.min(PASOS_PHVA.length - 1, prev + 1))}
            >
              Siguiente fase →
            </button>
          </div>
        </article>
      </div>

      {/* Diagnóstico interactivo — Práctica 11 */}
      <div className="int3-section-block">
        <h3>Diagnóstico interactivo (Práctica 11: Calidad)</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Resuelve los siguientes casos aplicando control estadístico y Calidad Total:
        </p>

        {CASOS_PRACTICA_11.map((caso) => {
          const elegido = respuestasCaso[caso.id];
          const respondido = elegido !== undefined;
          const esCorrecto = elegido === caso.correcta;

          return (
            <article key={caso.id} className="int3-card" style={{ marginBottom: '1rem' }}>
              <h4>{caso.titulo}</h4>
              <p>{caso.situacion}</p>

              {caso.opciones.map((opcion, opIdx) => {
                let clase = 'int3-quiz-option';
                if (respondido) {
                  if (opIdx === caso.correcta) clase += ' correct';
                  else if (elegido === opIdx) clase += ' wrong';
                }
                return (
                  <button
                    key={opcion}
                    type="button"
                    className={clase}
                    onClick={() => elegirOpcionCaso(caso.id, opIdx)}
                  >
                    {opcion}
                  </button>
                );
              })}

              {respondido && (
                <div className={`int3-feedback ${esCorrecto ? 'ok' : 'err'}`}>
                  <strong>{esCorrecto ? 'Análisis correcto: ' : 'Revisa el concepto: '}</strong>
                  {caso.explicacion}
                </div>
              )}
            </article>
          );
        })}

        {Object.keys(respuestasCaso).length > 0 && (
          <button
            type="button"
            className="int3-btn"
            onClick={() => setRespuestasCaso({})}
          >
            Reiniciar diagnóstico
          </button>
        )}
      </div>
    </div>
  );
}