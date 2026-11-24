import { useState } from 'react';

const PILARES_NORMATIVOS = [
  {
    id: 'constitucion',
    paso: 1,
    corto: 'Art. 123 CPEUM',
    titulo: '1. Constitución Política (Artículo 123)',
    nivel: 'Base suprema constitucional',
    resumen:
      'Establece las garantías laborales irrenunciables en México. Se divide en Apartado A (empresas privadas, startups y servicios) y Apartado B (sector público).',
    puntos: [
      'En Gestión Empresarial aplica directamente el Apartado A para organizaciones privadas de innovación tecnológica.',
      'Consagra la jornada máxima, salario mínimo, descanso semanal, PTU, seguridad social y libertad sindical.',
    ],
    impactoTI:
      'Ningún contrato de confidencialidad ni política interna de una empresa de software puede estar por encima de los derechos del Art. 123.',
  },
  {
    id: 'lft',
    paso: 2,
    corto: 'Ley Federal del Trabajo',
    titulo: '2. Ley Federal del Trabajo (LFT)',
    nivel: 'Ley reglamentaria del Apartado A',
    resumen:
      'Regula a detalle la relación individual y colectiva entre patrón y trabajador, así como contratos, prestaciones mínimas, causas de rescisión y conciliación.',
    puntos: [
      'Existe relación laboral siempre que haya trabajo personal, subordinación (horario, jefe e instrucciones) y pago de salario.',
      'Fija las reglas de vacaciones, aguinaldo, prima vacacional, horas extra, finiquito, liquidación y teletrabajo.',
    ],
    impactoTI:
      'Define si un programador está correctamente contratado en nómina o si existe simulación laboral bajo un esquema indebido de honorarios.',
  },
  {
    id: 'seguridad',
    paso: 3,
    corto: 'Seguridad Social',
    titulo: '3. Leyes de Seguridad Social (IMSS, INFONAVIT y SAR)',
    nivel: 'Protección social obligatoria',
    resumen:
      'Asegura la cobertura médica, protección ante riesgos de trabajo, fondo para vivienda y ahorro para el retiro (AFORE) de toda persona trabajadora.',
    puntos: [
      'El alta ante el IMSS debe realizarse desde el primer día laboral con el salario real integrado.',
      'Es una obligación patronal irrenunciable: ni siquiera un acuerdo firmado por el empleado exime a la empresa.',
    ],
    impactoTI:
      'Al presupuestar un equipo de desarrollo en un proyecto, la empresa debe contemplar la carga social patronal (alrededor de 25% a 35% adicional al sueldo bruto).',
  },
  {
    id: 'noms',
    paso: 4,
    corto: 'NOMs STPS en TI',
    titulo: '4. Normas Oficiales Mexicanas (NOM-035 y NOM-037)',
    nivel: 'Normatividad técnica obligatoria',
    resumen:
      'Disposiciones de la Secretaría del Trabajo y Previsión Social enfocadas en seguridad, higiene, salud mental y condiciones de trabajo remoto.',
    puntos: [
      'NOM-035: obliga a identificar y prevenir factores de riesgo psicosocial (sobrecarga extrema, liderazgo negativo y violencia laboral).',
      'NOM-037 (Teletrabajo): aplica cuando más del 40% de la jornada es remota; exige entregar equipo y silla ergonómica, aportar a luz/internet y respetar la desconexión digital.',
    ],
    impactoTI:
      'Clave en empresas de desarrollo con modalidad remota o híbrida y en la prevención del desgaste (burnout) previo a entregas críticas.',
  },
];

const PRESTACIONES_MINIMAS = [
  {
    concepto: 'Jornada laboral',
    minimo: 'Diurna: 8 h · Nocturna: 7 h · Mixta: 7.5 h',
    clave: 'Mínimo 1 día de descanso pagado por cada 6 trabajados; prima dominical del 25% si se labora en domingo.',
  },
  {
    concepto: 'Vacaciones',
    minimo: '12 días pagados al cumplir el 1.er año',
    clave: 'Aumentan 2 días por año hasta 20 días en el 5.º año; después suman 2 días cada 5 años.',
  },
  {
    concepto: 'Prima vacacional',
    minimo: '25% adicional sobre los días de vacaciones',
    clave: 'Prestación obligatoria destinada a que el colaborador disfrute su periodo de descanso.',
  },
  {
    concepto: 'Aguinaldo',
    minimo: '15 días de salario como mínimo',
    clave: 'Debe pagarse antes del 20 de diciembre (o su parte proporcional si no se laboró el año completo).',
  },
  {
    concepto: 'PTU (Utilidades)',
    minimo: '10% de la utilidad fiscal repartible',
    clave: 'Derecho anual en empresas que generen utilidades, conforme a los límites establecidos en la LFT.',
  },
  {
    concepto: 'Seguridad social',
    minimo: 'Alta en IMSS, INFONAVIT y AFORE desde el día 1',
    clave: 'Protege salud, incapacidades, retiro y vivienda; no puede sustituirse por pagos en efectivo.',
  },
];

const COMPARATIVAS = {
  terminacion: {
    titulo: 'Finiquito vs. Liquidación',
    izquierda: {
      etiqueta: 'Terminación ordinaria o justificada',
      titulo: 'Finiquito',
      cuando:
        'Aplica en renuncia voluntaria, vencimiento de contrato temporal o despido justificado por falta grave del trabajador (Art. 47 LFT).',
      incluye: [
        'Días trabajados pendientes de pago.',
        'Parte proporcional de aguinaldo.',
        'Vacaciones no disfrutadas y su prima vacacional (25%).',
        'Prima de antigüedad solo si se renuncia con 15 o más años en la empresa.',
      ],
    },
    derecha: {
      etiqueta: 'Despido injustificado',
      titulo: 'Liquidación (Indemnización)',
      cuando:
        'Aplica cuando la empresa separa al colaborador sin una causa legal comprobable o cierra el puesto de manera unilateral.',
      incluye: [
        'Todos los conceptos proporcionales del finiquito.',
        'Indemnización constitucional equivalente a 3 meses de salario integrado.',
        'Prima de antigüedad: 12 días de salario por año trabajado (con tope legal de 2 veces el salario mínimo).',
        'Prestaciones adicionales o salarios vencidos si deriva en juicio laboral.',
      ],
    },
  },
  contratacion: {
    titulo: 'Nómina (Subordinado) vs. Honorarios (Freelance)',
    izquierda: {
      etiqueta: 'Relación laboral (LFT)',
      titulo: 'Contrato laboral (Nómina)',
      cuando:
        'Existe horario definido, jefe directo, herramientas de la empresa y subordinación en el desarrollo de las tareas.',
      incluye: [
        'Sueldo periódico con retención de ISR y alta obligatoria en IMSS e INFONAVIT.',
        'Derecho a aguinaldo, vacaciones, prima vacacional, PTU y prima de antigüedad.',
        'Puede pactarse por tiempo indeterminado, obra determinada o periodo a prueba (30 a 180 días según el perfil).',
      ],
    },
    derecha: {
      etiqueta: 'Servicios profesionales (Civil / Mercantil)',
      titulo: 'Honorarios (Independiente)',
      cuando:
        'Un especialista externo entrega un producto o consultoría con autonomía técnica, horario propio y sin subordinación.',
      incluye: [
        'Se formaliza mediante contrato de prestación de servicios y emisión de factura (CFDI).',
        'No genera prestaciones de ley ni alta en IMSS por parte del cliente.',
        'Riesgo legal: si se impone horario fijo y exclusividad, la autoridad lo reclasifica como relación laboral encubierta.',
      ],
    },
  },
};

const CASOS_PRACTICA_10 = [
  {
    id: 'p10-c1',
    titulo: 'Caso 1: Esquema de teletrabajo sin apoyo de insumos',
    situacion:
      'Una agencia de desarrollo exige a sus programadores trabajar desde casa 4 días a la semana (80% de la jornada), usando su propia laptop y pagando luz e internet sin apoyo. Además, el líder envía mensajes a las 10:00 p. m. exigiendo cambios urgentes.',
    opciones: [
      'Es legal porque el trabajo remoto es un beneficio voluntario para el empleado',
      'Incumple la NOM-037: al superar el 40% remoto, la empresa debe brindar equipo/silla, aportar a luz e internet y respetar la desconexión digital',
      'Solo incumple si el empleado lleva más de un año en la empresa',
    ],
    correcta: 1,
    explicacion:
      'Bajo la reforma de Teletrabajo en la LFT y la NOM-037, superar el 40% de trabajo fuera del centro laboral obliga al patrón a proveer insumos, cubrir costos proporcionales de servicios y garantizar el derecho a la desconexión.',
  },
  {
    id: 'p10-c2',
    titulo: 'Caso 2: Simulación de contrato por honorarios',
    situacion:
      'Una startup contrata a un desarrollador frontend «por honorarios» para ahorrar cuotas del IMSS, pero le exige conectarse de 9:00 a 18:00, asistir a juntas diarias obligatorias, usar la computadora de la empresa y reportar directamente a un gerente.',
    opciones: [
      'No hay problema mientras el desarrollador haya firmado el contrato de honorarios',
      'Existe una relación laboral encubierta porque hay trabajo personal, salario y subordinación; la empresa se expone a multas del IMSS y demandas laborales',
      'Es válido únicamente durante los primeros 6 meses como periodo de prueba',
    ],
    correcta: 1,
    explicacion:
      'En el derecho laboral prevalece la realidad de los hechos sobre el nombre del contrato. Al existir horario, jefe y subordinación, la LFT reconoce una relación laboral plena con derecho a IMSS y prestaciones desde el día 1.',
  },
  {
    id: 'p10-c3',
    titulo: 'Caso 3: Cierre de proyecto y separación del colaborador',
    situacion:
      'Un ingeniero contratado por tiempo indeterminado con 2 años de antigüedad tiene buen desempeño, pero la empresa pierde a su cliente principal y decide despedirlo hoy sin que exista falta de su parte.',
    opciones: [
      'Solo corresponde pagar finiquito (días trabajados y proporcionales)',
      'No corresponde pago adicional porque la causa fue económica',
      'Corresponde liquidación completa: finiquito más 3 meses de indemnización constitucional y prima de antigüedad',
    ],
    correcta: 2,
    explicacion:
      'La pérdida de un cliente no es una falta atribuible al trabajador (Art. 47 LFT). Al tratarse de un despido injustificado en un contrato indefinido, corresponde cubrir la liquidación conforme a la ley o llegar a un convenio ante el Centro de Conciliación.',
  },
];

function calcularDiasVacaciones(anios) {
  if (anios <= 0) return 0;
  if (anios <= 5) return 10 + anios * 2;
  return 20 + Math.ceil((anios - 5) / 5) * 2;
}

const formatoMXN = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 2,
});

export default function Tema42MarcoNormativo() {
  const [pilarIdx, setPilarIdx] = useState(0);
  const [comparativaActiva, setComparativaActiva] = useState('terminacion');
  const [sueldoMensual, setSueldoMensual] = useState('18000');
  const [aniosAntiguedad, setAniosAntiguedad] = useState('1');
  const [respuestasCaso, setRespuestasCaso] = useState({});

  const pilarActual = PILARES_NORMATIVOS[pilarIdx];
  const compActual = COMPARATIVAS[comparativaActiva];

  const sueldoNum = Math.max(0, Number(sueldoMensual) || 0);
  const aniosNum = Math.min(35, Math.max(1, Math.floor(Number(aniosAntiguedad) || 1)));
  const salarioDiario = sueldoNum / 30;
  const diasVacaciones = calcularDiasVacaciones(aniosNum);
  const primaVacacional = salarioDiario * diasVacaciones * 0.25;
  const aguinaldoMinimo = salarioDiario * 15;

  const elegirOpcionCaso = (casoId, opIdx) => {
    setRespuestasCaso((prev) => ({ ...prev, [casoId]: opIdx }));
  };

  return (
    <div>
      {/* Introducción */}
      <article className="int3-card">
        <span className="int3-tag">Subtema 4.2 · 4 h teoría + 1 h práctica</span>
        <h3>4.2 Marco normativo de las relaciones laborales</h3>
        <p>
          El marco normativo laboral define las reglas, derechos irrenunciables y obligaciones que
          equilibran la relación entre empleadores y trabajadores. Para un ingeniero en sistemas —ya
          sea como colaborador o al liderar una empresa de base tecnológica—, conocer estas leyes
          evita riesgos financieros, sanciones administrativas y conflictos internos.
        </p>

        <div className="int3-highlight">
          <strong>Resolución de conflictos laborales:</strong> Ante una controversia individual, el
          sistema mexicano exige agotar una etapa de <strong>conciliación prejudicial obligatoria</strong>{' '}
          ante el Centro de Conciliación antes de escalar a un Tribunal Laboral.
        </div>
      </article>

      {/* Pirámide normativa interactiva */}
      <div className="int3-section-block">
        <h3>Jerarquía normativa laboral en México</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Explora los 4 niveles legales que rigen a las empresas privadas y tecnológicas:
        </p>

        <div className="int3-stepper">
          {PILARES_NORMATIVOS.map((pilar, idx) => (
            <button
              key={pilar.id}
              type="button"
              className={`int3-step-btn ${pilarIdx === idx ? 'active' : ''}`}
              onClick={() => setPilarIdx(idx)}
            >
              <span className="int3-step-num">{pilar.paso}</span>
              <span>{pilar.corto}</span>
            </button>
          ))}
        </div>

        <article className="int3-card">
          <span className="int3-tag">{pilarActual.nivel}</span>
          <h4>{pilarActual.titulo}</h4>
          <p>{pilarActual.resumen}</p>
          <ul style={{ textAlign: 'left' }}>
            {pilarActual.puntos.map((punto) => (
              <li key={punto}>{punto}</li>
            ))}
          </ul>
          <div className="int3-highlight">
            <strong>Impacto en empresas de TI:</strong> {pilarActual.impactoTI}
          </div>
        </article>
      </div>

      {/* Tabla de prestaciones mínimas */}
      <div className="int3-section-block">
        <h3>Condiciones y prestaciones mínimas obligatorias (LFT)</h3>
        <article className="int3-card">
          <div className="int3-table-wrap">
            <table className="int3-table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Mínimo legal</th>
                  <th>Dato clave para la gestión</th>
                </tr>
              </thead>
              <tbody>
                {PRESTACIONES_MINIMAS.map((row) => (
                  <tr key={row.concepto}>
                    <td>
                      <strong>{row.concepto}</strong>
                    </td>
                    <td>{row.minimo}</td>
                    <td>{row.clave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>

      {/* Calculadora interactiva de prestaciones */}
      <div className="int3-section-block">
        <h3>Calculadora didáctica de prestaciones mínimas de ley</h3>
        <article className="int3-card">
          <p style={{ marginTop: 0, fontSize: '0.92rem', color: '#475569' }}>
            Simula un salario mensual bruto y años cumplidos para estimar las prestaciones mínimas
            anuales conforme a la LFT vigente en México:
          </p>

          <div className="int3-calc-grid">
            <div className="int3-field">
              <label htmlFor="sueldo-mensual">Sueldo mensual bruto (MXN) </label>
              <input
                id="sueldo-mensual"
                type="number"
                min="0"
                step="500"
                value={sueldoMensual}
                onChange={(e) => setSueldoMensual(e.target.value)}
              />
            </div>

            <div className="int3-field">
              <label htmlFor="anios-antiguedad">Años de antigüedad (1 a 35) </label>
              <input
                id="anios-antiguedad"
                type="number"
                min="1"
                max="35"
                value={aniosAntiguedad}
                onChange={(e) => setAniosAntiguedad(e.target.value)}
              />
            </div>
          </div>

          <div className="int3-results-grid">
            <div className="int3-stat-box">
              <span className="int3-stat-label">Salario diario base </span>
              <span className="int3-stat-value">{formatoMXN.format(salarioDiario)}</span>
            </div>
            <div className="int3-stat-box">
              <span className="int3-stat-label">Vacaciones anuales </span>
              <span className="int3-stat-value">{diasVacaciones} días</span>
            </div>
            <div className="int3-stat-box">
              <span className="int3-stat-label">Prima vacacional (25%) </span>
              <span className="int3-stat-value">{formatoMXN.format(primaVacacional)}</span>
            </div>
            <div className="int3-stat-box">
              <span className="int3-stat-label">Aguinaldo mínimo (15 días) </span>
              <span className="int3-stat-value">{formatoMXN.format(aguinaldoMinimo)}</span>
            </div>
          </div>

          <p style={{ marginTop: '0.85rem', marginBottom: 0, fontSize: '0.82rem', color: '#64748b' }}>
            *Cálculo educativo bruto antes de retenciones fiscales (ISR) y cuotas obrero-patronales.
          </p>
        </article>
      </div>

      {/* Comparador interactivo */}
      <div className="int3-section-block">
        <h3>Comparativas clave para la gestión de talento</h3>
        <div className="int3-pill-list">
          <button
            type="button"
            className={`int3-tab ${comparativaActiva === 'terminacion' ? 'active' : ''}`}
            onClick={() => setComparativaActiva('terminacion')}
          >
            Finiquito vs. Liquidación
          </button>
          <button
            type="button"
            className={`int3-tab ${comparativaActiva === 'contratacion' ? 'active' : ''}`}
            onClick={() => setComparativaActiva('contratacion')}
          >
            Nómina vs. Honorarios
          </button>
        </div>

        <div className="int3-grid">
          {[compActual.izquierda, compActual.derecha].map((lado) => (
            <article key={lado.titulo} className="int3-card int3-compare-card">
              <span className="int3-tag">{lado.etiqueta}</span>
              <h4>{lado.titulo}</h4>
              <p>
                <strong>Cuándo aplica:</strong> {lado.cuando}
              </p>
              <ul>
                {lado.incluye.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Auditoría legal interactiva — Práctica 10 */}
      <div className="int3-section-block">
        <h3>Auditoría legal interactiva (Práctica 10: Marco normativo)</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Evalúa cada escenario de una empresa tecnológica y determina la postura correcta conforme
          a la legislación laboral mexicana:
        </p>

        {CASOS_PRACTICA_10.map((caso) => {
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
                  <strong>{esCorrecto ? 'Dictamen correcto: ' : 'Revisa el fundamento: '}</strong>
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
            Reiniciar auditoría
          </button>
        )}
      </div>
    </div>
  );
}