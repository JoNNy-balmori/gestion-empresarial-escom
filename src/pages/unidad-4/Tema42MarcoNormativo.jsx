import { useState } from 'react';

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
  const [comparativaActiva, setComparativaActiva] = useState('terminacion');
  const [sueldoMensual, setSueldoMensual] = useState('18000');
  const [aniosAntiguedad, setAniosAntiguedad] = useState('1');
  const [respuestasCaso, setRespuestasCaso] = useState({});

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
      {/* Calculadora interactiva de prestaciones */}
      <div className="int3-section-block" style={{ marginTop: 0 }}>
        <h3>Calculadora didáctica · Prestaciones mínimas de ley (LFT)</h3>
        <article className="int3-card">
          <p style={{ marginTop: 0, fontSize: '0.92rem', color: '#475569' }}>
            Simula un salario mensual bruto y años cumplidos para estimar las prestaciones mínimas
            anuales conforme a la LFT vigente en México:
          </p>

          <div className="int3-calc-grid">
            <div className="int3-field">
              <label htmlFor="sueldo-mensual">Sueldo mensual bruto (MXN)</label>
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
              <label htmlFor="anios-antiguedad">Años de antigüedad (1 a 35)</label>
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
              <span className="int3-stat-label">Salario diario base</span>
              <span className="int3-stat-value">{formatoMXN.format(salarioDiario)}</span>
            </div>
            <div className="int3-stat-box">
              <span className="int3-stat-label">Vacaciones anuales</span>
              <span className="int3-stat-value">{diasVacaciones} días</span>
            </div>
            <div className="int3-stat-box">
              <span className="int3-stat-label">Prima vacacional (25%)</span>
              <span className="int3-stat-value">{formatoMXN.format(primaVacacional)}</span>
            </div>
            <div className="int3-stat-box">
              <span className="int3-stat-label">Aguinaldo mínimo (15 días)</span>
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
        <h3>Comparador aplicado · Contratación y terminación laboral</h3>
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
        <h3>Auditoría legal (Práctica 10 · Marco normativo)</h3>
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