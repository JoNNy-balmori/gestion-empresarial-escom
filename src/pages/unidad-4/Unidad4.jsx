import { useState } from 'react';
import './Unidad4.css';
import Tema41CapitalHumano from './Tema41CapitalHumano';
import Tema42MarcoNormativo from './Tema42MarcoNormativo';

const HERRAMIENTAS = {
  cincoS: {
    nombre: "4.4.1 Las 5's",
    resumen:
      'Metodología japonesa enfocada en mantener áreas de trabajo (físicas y digitales) ordenadas, limpias y estandarizadas para reducir desperdicios y errores.',
    ejemploTI:
      'Repositorios ordenados, documentación clara, eliminación de archivos obsoletos y estándares de código.',
  },
  jit: {
    nombre: '4.4.2 Just in Time (JIT)',
    resumen:
      'Sistema de gestión orientado a producir o entregar únicamente lo necesario, en la cantidad exacta y en el momento preciso, eliminando inventarios y tiempos muertos.',
    ejemploTI:
      'Entregas incrementales en desarrollo ágil y aprovisionamiento de recursos en la nube bajo demanda.',
  },
  analisisFuncional: {
    nombre: '4.4.3 Análisis funcional',
    resumen:
      'Técnica que descompone los objetivos clave de la empresa en funciones específicas hasta identificar las competencias que requiere cada puesto.',
    ejemploTI:
      'Definición exacta de responsabilidades entre Frontend, Backend, QA y DevOps en un equipo de software.',
  },
  benchmarking: {
    nombre: '4.4.4 Benchmarking',
    resumen:
      'Proceso sistemático y continuo de comparar productos, servicios y procesos propios frente a líderes del sector para adoptar mejores prácticas.',
    ejemploTI:
      'Comparar tiempos de respuesta, experiencia de usuario (UX) y estándares de disponibilidad frente a competidores.',
  },
  erp: {
    nombre: '4.4.5 ERP (Enterprise Resource Planning)',
    resumen:
      'Software integral que centraliza en una sola base de datos la operación de finanzas, inventarios, compras, producción y capital humano.',
    ejemploTI:
      'Implementación de plataformas como SAP, Odoo u Oracle NetSuite para eliminar información duplicada entre áreas.',
  },
};

const PASOS_5S = [
  { id: 'seiri', nombre: 'Seiri (Clasificar)', accion: 'Separar lo necesario de lo innecesario y descartar sobrantes.' },
  { id: 'seiton', nombre: 'Seiton (Ordenar)', accion: 'Asignar un lugar lógico y accesible para cada recurso.' },
  { id: 'seiso', nombre: 'Seiso (Limpiar)', accion: 'Eliminar suciedad, fallas o deuda técnica de forma preventiva.' },
  { id: 'seiketsu', nombre: 'Seiketsu (Estandarizar)', accion: 'Crear reglas visuales y procedimientos repetibles para el equipo.' },
  { id: 'shitsuke', nombre: 'Shitsuke (Disciplina)', accion: 'Mantener el hábito mediante auditorías periódicas y mejora continua.' },
];

const PREGUNTAS_U4 = [
  {
    practica: 'Práctica 9 — Capital humano',
    pregunta:
      'Una startup tecnológica detecta alta rotación de desarrolladores tras 6 meses. ¿Qué función del departamento de capital humano debe intervenir primero para diagnosticar la causa?',
    opciones: [
      'Control estadístico de procesos',
      'Evaluación de clima laboral, compensaciones y entrevistas de salida',
      'Implementación de un ERP contable',
    ],
    correcta: 1,
  },
  {
    practica: 'Práctica 10 — Marco normativo',
    pregunta:
      'En México, ¿qué ordenamiento regula directamente contratos, jornadas, vacaciones, aguinaldo y causales de rescisión en la relación trabajador-patrón?',
    opciones: [
      'Ley Federal del Trabajo (reglamentaria del Art. 123 constitucional)',
      'Ley General de Sociedades Mercantiles',
      'Código de Comercio',
    ],
    correcta: 0,
  },
  {
    practica: 'Práctica 11 — Calidad',
    pregunta:
      '¿Cuál es la diferencia clave entre el Control Estadístico y la Calidad Total (TQM)?',
    opciones: [
      'No existe diferencia; ambos solo revisan el producto al final',
      'El control estadístico usa métricas y gráficas para vigilar variaciones, mientras la Calidad Total involucra a toda la organización en la mejora continua',
      'La Calidad Total solo aplica a fábricas automotrices',
    ],
    correcta: 1,
  },
  {
    practica: 'Práctica 12 — Herramientas de gestión',
    pregunta:
      'Una empresa quiere unificar nómina, facturación, inventario y compras en un solo sistema en tiempo real. ¿Qué herramienta debe implementar?',
    opciones: ['Benchmarking', "Las 5's", 'ERP (Enterprise Resource Planning)'],
    correcta: 2,
  },
];

export default function Unidad4() {
  const [seccion, setSeccion] = useState('4.1');
  const [herramientaActiva, setHerramientaActiva] = useState('cincoS');
  const [completadas5s, setCompletadas5s] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [evaluado, setEvaluado] = useState(false);

  const togglePaso5s = (id) => {
    setCompletadas5s((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const seleccionarRespuesta = (indicePregunta, indiceOpcion) => {
    if (evaluado) return;
    setRespuestas((prev) => ({ ...prev, [indicePregunta]: indiceOpcion }));
  };

  const aciertos = PREGUNTAS_U4.reduce(
    (acc, q, i) => (respuestas[i] === q.correcta ? acc + 1 : acc),
    0
  );

  return (
    <section className="int3-wrapper">
      <header className="int3-header">
        <span className="int3-badge">Unidad Temática IV · 25 h docente + 8 h AA</span>
        <h2>Gestión del capital humano y la calidad</h2>
        <p>
          <strong>Competencia:</strong> Integra la gestión del capital humano y la calidad en la
          empresa, con base en el marco normativo de las relaciones laborales.
        </p>
      </header>

      <div className="int3-tabs" role="tablist">
        {[
          { id: '4.1', label: '4.1 Capital humano' },
          { id: '4.2', label: '4.2 Marco normativo' },
          { id: '4.3', label: '4.3 Calidad' },
          { id: '4.4', label: '4.4 Herramientas' },
          { id: 'practica', label: 'Evaluación Unidad 4' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`int3-tab ${seccion === tab.id ? 'active' : ''}`}
            onClick={() => setSeccion(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {seccion === '4.1' && <Tema41CapitalHumano />}

      {seccion === '4.2' && <Tema42MarcoNormativo />}

      {seccion === '4.3' && (
        <div>
          <div className="int3-card">
            <h3>4.3 Calidad</h3>
            <p>
              Es el grado en que un conjunto de características inherentes de un producto, software
              o servicio cumple con los requisitos del cliente, las normas vigentes y las
              expectativas de confiabilidad.
            </p>
          </div>

          <div className="int3-grid">
            <article className="int3-card">
              <h4>4.3.1 Control estadístico</h4>
              <p>
                Aplica métodos matemáticos y herramientas gráficas para monitorear procesos,
                detectar desviaciones a tiempo y reducir la variabilidad antes de que ocurran fallas.
              </p>
              <ul>
                <li>Gráficos de control (límites superior e inferior).</li>
                <li>Diagrama de Pareto (regla 80/20 de causas críticas).</li>
                <li>Histogramas, diagramas de dispersión e Ishikawa (causa-efecto).</li>
              </ul>
            </article>

            <article className="int3-card">
              <h4>4.3.2 Calidad total (TQM)</h4>
              <p>
                Filosofía de gestión que extiende la responsabilidad de la calidad a todos los
                niveles de la empresa, no solo al área de inspección o QA.
              </p>
              <ul>
                <li>Enfoque centrado en la satisfacción del cliente.</li>
                <li>Mejora continua mediante el ciclo PHVA (Planear, Hacer, Verificar, Actuar).</li>
                <li>Participación activa del personal y toma de decisiones basada en datos.</li>
              </ul>
            </article>
          </div>
        </div>
      )}

      {seccion === '4.4' && (
        <div>
          <h3>4.4 Herramientas de gestión del Capital Humano y de calidad</h3>
          <div className="int3-pill-list">
            {Object.entries(HERRAMIENTAS).map(([clave, info]) => (
              <button
                key={clave}
                type="button"
                className={`int3-tab ${herramientaActiva === clave ? 'active' : ''}`}
                onClick={() => setHerramientaActiva(clave)}
              >
                {info.nombre}
              </button>
            ))}
          </div>

          <article className="int3-card">
            <h3>{HERRAMIENTAS[herramientaActiva].nombre}</h3>
            <p>{HERRAMIENTAS[herramientaActiva].resumen}</p>
            <p>
              <strong>Aplicación en empresas de TI:</strong>{' '}
              {HERRAMIENTAS[herramientaActiva].ejemploTI}
            </p>

            {herramientaActiva === 'cincoS' && (
              <div style={{ marginTop: '1rem' }}>
                <h4>Checklist interactivo: aplica Las 5&apos;s en tu proyecto</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  Progreso: <strong>{completadas5s.length} / 5</strong> etapas verificadas
                </p>
                {PASOS_5S.map((paso) => {
                  const marcado = completadas5s.includes(paso.id);
                  return (
                    <label
                      key={paso.id}
                      className={`int3-check-item ${marcado ? 'done' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={marcado}
                        onChange={() => togglePaso5s(paso.id)}
                      />
                      <span>
                        <strong>{paso.nombre}:</strong> {paso.accion}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </article>
        </div>
      )}

      {seccion === 'practica' && (
        <div>
          <h3>Evaluación de Unidad 4</h3>
          {PREGUNTAS_U4.map((item, idx) => (
            <article key={item.practica} className="int3-card" style={{ marginBottom: '1rem' }}>
              <small style={{ fontWeight: 700, color: '#64748b' }}>{item.practica}</small>
              <p style={{ marginTop: '0.35rem', fontWeight: 600 }}>{item.pregunta}</p>
              {item.opciones.map((opcion, opIdx) => {
                let clase = 'int3-quiz-option';
                if (evaluado) {
                  if (opIdx === item.correcta) clase += ' correct';
                  else if (respuestas[idx] === opIdx) clase += ' wrong';
                } else if (respuestas[idx] === opIdx) {
                  clase += ' selected';
                }
                return (
                  <button
                    key={opcion}
                    type="button"
                    className={clase}
                    onClick={() => seleccionarRespuesta(idx, opIdx)}
                  >
                    {opcion}
                  </button>
                );
              })}
            </article>
          ))}

          {!evaluado ? (
            <button type="button" className="int3-btn" onClick={() => setEvaluado(true)}>
              Calificar respuestas
            </button>
          ) : (
            <div className="int3-card">
              <p>
                Resultado: <strong>{aciertos} de {PREGUNTAS_U4.length}</strong> aciertos.
              </p>
              <button
                type="button"
                className="int3-btn"
                onClick={() => {
                  setRespuestas({});
                  setEvaluado(false);
                }}
              >
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}