import { useState } from 'react';

const SIETE_HERRAMIENTAS = [
  {
    id: 'control',
    nombre: 'Gráficos de control',
    cuandoUsar:
      'Para distinguir fluctuaciones normales (causas comunes) de anomalías fuera de límite (causas especiales), como picos repentinos de latencia en un servidor.',
  },
  {
    id: 'pareto',
    nombre: 'Diagrama de Pareto (80/20)',
    cuandoUsar:
      'Para ordenar fallas por frecuencia acumulada y priorizar el ~20% de causas que suelen originar cerca del 80% de los reportes.',
  },
  {
    id: 'ishikawa',
    nombre: 'Ishikawa (Espina de Pescado)',
    cuandoUsar:
      'En sesiones de equipo para rastrear causas raíz organizándolas en categorías (6M: Método, Mano de obra, Maquinaria, Materiales, Medición y Medio ambiente).',
  },
  {
    id: 'verificacion',
    nombre: 'Hoja de verificación',
    cuandoUsar:
      'Como primer paso para recolectar frecuencias de incidentes en tiempo real sin sesgos antes de graficar.',
  },
  {
    id: 'histograma',
    nombre: 'Histograma',
    cuandoUsar:
      'Para visualizar la distribución y dispersión de una variable numérica continua, como tiempos de respuesta de soporte.',
  },
  {
    id: 'dispersion',
    nombre: 'Diagrama de dispersión',
    cuandoUsar:
      'Para comprobar si existe correlación entre dos variables, por ejemplo usuarios concurrentes frente a tasa de errores.',
  },
  {
    id: 'estratificacion',
    nombre: 'Estratificación',
    cuandoUsar:
      'Para separar datos por grupos (navegador, sistema operativo o sucursal) cuando el promedio general oculta una falla localizada.',
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
    ejemploTI:
      'Detectar con Pareto que el 75% de los tickets vienen de errores de formulario y consultas lentas; definir como meta reducirlos 50% en un mes.',
  },
  {
    paso: 2,
    corto: 'Hacer (Do)',
    titulo: '2. Hacer (Do)',
    ejemploTI:
      'Agregar validaciones en frontend/backend, crear índices en la base de datos y desplegar el ajuste primero en un grupo piloto de usuarios.',
  },
  {
    paso: 3,
    corto: 'Verificar (Check)',
    titulo: '3. Verificar (Check)',
    ejemploTI:
      'Comparar las métricas de tickets y latencia tras dos semanas: comprobar si las incidencias bajaron realmente al menos 50%.',
  },
  {
    paso: 4,
    corto: 'Actuar (Act)',
    titulo: '4. Actuar (Act)',
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
  const [herramientaId, setHerramientaId] = useState('control');
  const [incidentes, setIncidentes] = useState(INCIDENTES_INICIALES);
  const [pasoPhva, setPasoPhva] = useState(0);
  const [respuestasCaso, setRespuestasCaso] = useState({});

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
    return { ...item, porcentaje, acumulado, esVital };
  });

  const vitales = datosPareto.filter((d) => d.esVital);
  const coberturaVitales = vitales.length > 0 ? vitales[vitales.length - 1].acumulado : 0;

  const elegirOpcionCaso = (casoId, opIdx) => {
    setRespuestasCaso((prev) => ({ ...prev, [casoId]: opIdx }));
  };

  return (
    <div>
      {/* Simulador interactivo de Diagrama de Pareto */}
      <div className="int3-section-block" style={{ marginTop: 0 }}>
        <h3>Simulador · Diagrama de Pareto (Regla 80/20)</h3>
        <article className="int3-card">
          <p style={{ marginTop: 0, fontSize: '0.92rem', color: '#475569' }}>
            Modifica el número de reportes por tipo de falla en un sistema web. El simulador ordena
            las causas, calcula el porcentaje acumulado y marca los <strong>pocos vitales</strong>{' '}
            que conviene resolver primero:
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
                ataca el <strong>{coberturaVitales.toFixed(1)}%</strong> de los reportes acumulados.
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

      {/* Selector rápido de las 7 herramientas de Ishikawa */}
      <div className="int3-section-block">
        <h3>Guía rápida · ¿Qué herramienta estadística usar en TI?</h3>
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
          <p style={{ marginBottom: 0 }}>
            <strong>Cuándo aplicarla:</strong> {herramientaActual.cuandoUsar}
          </p>
        </article>
      </div>

      {/* Recorrido interactivo del Ciclo PHVA */}
      <div className="int3-section-block">
        <h3>Recorrido aplicado · Ciclo PHVA en un sistema en producción</h3>
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
          <p style={{ marginBottom: 0 }}>{phvaActual.ejemploTI}</p>

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
        <h3>Casos de diagnóstico (Práctica 11 · Calidad)</h3>
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