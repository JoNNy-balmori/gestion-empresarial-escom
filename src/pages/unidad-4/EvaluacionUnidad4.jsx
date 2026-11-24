import { useState } from 'react';

const ORDEN_CORRECTO_41 = [
  'Planeación del talento y análisis de puestos',
  'Reclutamiento y selección de candidatos',
  'Inducción y socialización (Onboarding)',
  'Capacitación, desarrollo y evaluación del desempeño',
  'Compensaciones, bienestar y relaciones laborales',
];

const ORDEN_INICIAL_41 = [
  'Inducción y socialización (Onboarding)',
  'Compensaciones, bienestar y relaciones laborales',
  'Planeación del talento y análisis de puestos',
  'Capacitación, desarrollo y evaluación del desempeño',
  'Reclutamiento y selección de candidatos',
];

const RECUADROS_42 = [
  {
    id: 'vacaciones',
    antes: 'Al cumplir el primer año de trabajo en México, la LFT garantiza al menos',
    despues: 'días pagados de vacaciones anuales.',
    correcta: '12',
    pista: '12 días (reforma de Vacaciones Dignas).',
  },
  {
    id: 'prima',
    antes: 'La prima vacacional mínima obligatoria equivale al',
    despues: '% adicional sobre el salario de los días de vacaciones.',
    correcta: '25',
    pista: '25% mínimo según la LFT.',
  },
  {
    id: 'aguinaldo',
    antes: 'Antes del 20 de diciembre debe pagarse un aguinaldo mínimo de',
    despues: 'días de salario (o su parte proporcional).',
    correcta: '15',
    pista: '15 días de salario.',
  },
  {
    id: 'teletrabajo',
    antes: 'La NOM-037 de teletrabajo aplica cuando más del',
    despues: '% de la jornada laboral se realiza fuera del centro de trabajo.',
    correcta: '40',
    pista: 'Más del 40% en modalidad remota.',
  },
  {
    id: 'indemnizacion',
    antes: 'En caso de despido injustificado, la indemnización constitucional corresponde a',
    despues: 'meses de salario integrado (adicional al finiquito y prima de antigüedad).',
    correcta: '3',
    pista: '3 meses de salario.',
  },
];

const ESPINAS_ISHIKAWA = [
  {
    num: 1,
    placeholder: 'Ej. Método',
    aceptadas: ['metodo', 'metodos', 'proceso', 'procesos'],
    guia: 'Método (procesos y procedimientos)',
  },
  {
    num: 2,
    placeholder: 'Ej. Mano de obra',
    aceptadas: ['mano de obra', 'personal', 'personas', 'talento', 'capital humano'],
    guia: 'Mano de obra (personal y capacitación)',
  },
  {
    num: 3,
    placeholder: 'Ej. Maquinaria / Herramientas',
    aceptadas: ['maquinaria', 'maquina', 'herramientas', 'tecnologia', 'software', 'equipo'],
    guia: 'Maquinaria / Herramientas (servidores, software, equipo)',
  },
  {
    num: 4,
    placeholder: 'Ej. Materiales / Datos',
    aceptadas: ['materiales', 'material', 'datos', 'insumos', 'informacion'],
    guia: 'Materiales / Datos (insumos e información de entrada)',
  },
];

const OPCIONES_HERRAMIENTAS = [
  "Las 5's",
  'Just in Time (JIT)',
  'Análisis funcional',
  'Benchmarking',
  'ERP',
];

const CASOS_EMPAREJAR_44 = [
  {
    id: 'm1',
    caso: 'Un equipo elimina ramas abandonadas en Git, organiza carpetas y fija reglas con ESLint.',
    correcta: "Las 5's",
  },
  {
    id: 'm2',
    caso: 'Una plataforma en la nube escala servidores solo cuando sube el tráfico y libera entregas cortas.',
    correcta: 'Just in Time (JIT)',
  },
  {
    id: 'm3',
    caso: 'Se descompone el objetivo del área de ingeniería para definir las competencias exactas de Frontend, Backend y QA.',
    correcta: 'Análisis funcional',
  },
  {
    id: 'm4',
    caso: 'Se miden tiempos de carga y experiencia de usuario frente a la app líder del mercado para cerrar brechas.',
    correcta: 'Benchmarking',
  },
  {
    id: 'm5',
    caso: 'Se conectan ventas, inventarios, nómina y facturación en una sola base de datos para eliminar Excels aislados.',
    correcta: 'ERP',
  },
];

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export default function EvaluacionUnidad4() {
  // Reto 1: Ordenar pasos (4.1)
  const [pasos41, setPasos41] = useState(ORDEN_INICIAL_41);
  const [ordenComprobado, setOrdenComprobado] = useState(false);

  // Reto 2: Completar recuadros LFT (4.2)
  const [recuadros42, setRecuadros42] = useState({});
  const [recuadrosComprobados, setRecuadrosComprobados] = useState(false);

  // Reto 3: Cuadrantes PHVA + Ishikawa SVG (4.3)
  const [phva, setPhva] = useState({ p: '', h: '', v: '', a: '' });
  const [mostrarGuiaPhva, setMostrarGuiaPhva] = useState(false);
  const [espinas, setEspinas] = useState({ 1: '', 2: '', 3: '', 4: '' });
  const [ishikawaComprobado, setIshikawaComprobado] = useState(false);

  // Reto 4: Emparejar herramientas (4.4)
  const [emparejados, setEmparejados] = useState({});
  const [emparejarComprobado, setEmparejarComprobado] = useState(false);

  // Lógica Reto 1
  const subirPaso = (idx) => {
    if (idx === 0) return;
    setOrdenComprobado(false);
    setPasos41((prev) => {
      const copia = [...prev];
      [copia[idx - 1], copia[idx]] = [copia[idx], copia[idx - 1]];
      return copia;
    });
  };

  const aciertosOrden = pasos41.filter((paso, idx) => paso === ORDEN_CORRECTO_41[idx]).length;

  // Lógica Reto 2
  const aciertosRecuadros = RECUADROS_42.filter(
    (item) => String(recuadros42[item.id] ?? '').trim() === item.correcta
  ).length;

  // Lógica Reto 3
  const cuadrantesLlenos = Object.values(phva).filter((v) => v.trim().length >= 5).length;
  const validarEspina = (espina) => {
    const limpio = normalizarTexto(espinas[espina.num] ?? '');
    if (!limpio) return false;
    return espina.aceptadas.some((clave) => limpio.includes(clave));
  };
  const aciertosIshikawa = ESPINAS_ISHIKAWA.filter(validarEspina).length;

  // Lógica Reto 4
  const aciertosEmparejar = CASOS_EMPAREJAR_44.filter(
    (item) => emparejados[item.id] === item.correcta
  ).length;

  return (
    <div>
      {/* RETO 1: ORDENAR PASOS (4.1) */}
      <article className="practica">
        <h3>Reto 1 · Ordena el ciclo del capital humano (4.1)</h3>
        <p>
          Usa el botón <strong>Subir</strong> para acomodar las etapas del ciclo de vida del
          colaborador en orden lógico (de la planeación inicial al bienestar laboral) y comprueba tu
          respuesta.
        </p>

        <ul className="pasos">
          {pasos41.map((paso, idx) => (
            <li key={paso}>
              <span>
                <strong>{idx + 1}.</strong> {paso}
              </span>
              <button type="button" disabled={idx === 0} onClick={() => subirPaso(idx)}>
                Subir
              </button>
            </li>
          ))}
        </ul>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setOrdenComprobado(true)}>
            Comprobar orden
          </button>
          <button
            type="button"
            onClick={() => {
              setPasos41(ORDEN_INICIAL_41);
              setOrdenComprobado(false);
            }}
          >
            Reiniciar lista
          </button>
        </div>

        <div className="resultado">
          {!ordenComprobado ? (
            <span>Acomoda los 5 pasos y presiona «Comprobar orden».</span>
          ) : aciertosOrden === ORDEN_CORRECTO_41.length ? (
            <span className="respuesta">
              ¡Orden perfecto! (5 / 5). El departamento de capital humano primero planea el puesto,
              recluta, integra al nuevo talento, lo desarrolla y cuida sus compensaciones y clima.
            </span>
          ) : (
            <span>
              Tienes <strong>{aciertosOrden} de 5</strong> etapas en su posición correcta. Pista:
              todo arranca con <em>Planeación del talento</em> y cierra con{' '}
              <em>Compensaciones y bienestar</em>.
            </span>
          )}
        </div>
      </article>

      {/* RETO 2: COMPLETAR RECUADROS (4.2) */}
      <article className="practica">
        <h3>Reto 2 · Completa los mínimos de ley (4.2)</h3>
        <p>
          Escribe el valor numérico correcto en cada recuadro conforme a la Ley Federal del Trabajo
          y la NOM-037 vigentes en México.
        </p>

        <div className="int3-blank-list">
          {RECUADROS_42.map((item) => {
            const valor = recuadros42[item.id] ?? '';
            const esCorrecto = String(valor).trim() === item.correcta;
            let claseInput = 'int3-blank-input';
            if (recuadrosComprobados) {
              claseInput += esCorrecto ? ' ok' : ' err';
            }

            return (
              <div key={item.id} className="int3-blank-item">
                <span>{item.antes}</span>
                <input
                  type="text"
                  inputMode="numeric"
                  aria-label={item.pista}
                  className={claseInput}
                  value={valor}
                  onChange={(e) => {
                    setRecuadrosComprobados(false);
                    setRecuadros42((prev) => ({ ...prev, [item.id]: e.target.value }));
                  }}
                />
                <span>{item.despues}</span>
                {recuadrosComprobados && !esCorrecto && (
                  <p className="respuesta" style={{ fontSize: '0.85rem' }}>
                    Respuesta esperada: {item.pista}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setRecuadrosComprobados(true)}>
            Comprobar recuadros
          </button>
          <button
            type="button"
            onClick={() => {
              setRecuadros42({});
              setRecuadrosComprobados(false);
            }}
          >
            Limpiar campos
          </button>
        </div>

        {recuadrosComprobados && (
          <div className="resultado">
            Resultado: <strong>{aciertosRecuadros} de {RECUADROS_42.length}</strong> recuadros
            correctos.
          </div>
        )}
      </article>

      {/* RETO 3: CUADRANTES PHVA + ISHIKAWA SVG (4.3) */}
      <article className="practica">
        <h3>Reto 3 · Ciclo PHVA y Espina de Ishikawa (4.3)</h3>
        <p>
          Imagina que tu sistema web presenta caídas frecuentes en horarios pico. Redacta una acción
          breve en cada cuadrante del <strong>Ciclo PHVA</strong> y nombra las 4 categorías
          principales (4M) en el <strong>Diagrama de Ishikawa</strong>.
        </p>

        <div className="foda">
          <label>
            Planear (Plan)
            <small>¿Qué problema mediremos y qué meta fijamos?</small>
            <textarea
              rows={2}
              placeholder="Ej. Medir tiempos de respuesta y fijar meta < 300 ms..."
              value={phva.p}
              onChange={(e) => setPhva((prev) => ({ ...prev, p: e.target.value }))}
            />
          </label>
          <label>
            Hacer (Do)
            <small>¿Qué prueba piloto o cambio aplicaremos?</small>
            <textarea
              rows={2}
              placeholder="Ej. Crear índices en BD y probar en entorno staging..."
              value={phva.h}
              onChange={(e) => setPhva((prev) => ({ ...prev, h: e.target.value }))}
            />
          </label>
          <label>
            Verificar (Check)
            <small>¿Cómo comprobaremos si funcionó?</small>
            <textarea
              rows={2}
              placeholder="Ej. Revisar gráficos de control tras 7 días..."
              value={phva.v}
              onChange={(e) => setPhva((prev) => ({ ...prev, v: e.target.value }))}
            />
          </label>
          <label>
            Actuar (Act)
            <small>¿Cómo estandarizamos la mejora?</small>
            <textarea
              rows={2}
              placeholder="Ej. Documentar regla de índices en cada Pull Request..."
              value={phva.a}
              onChange={(e) => setPhva((prev) => ({ ...prev, a: e.target.value }))}
            />
          </label>
        </div>

        {/* Diagrama SVG de Ishikawa con campos rotulados */}
        <div className="diamante">
          <svg viewBox="0 0 320 180" aria-label="Diagrama de Ishikawa con 4 espinas numeradas">
            {/* Espina central */}
            <line x1="20" y1="90" x2="242" y2="90" style={{ stroke: 'var(--tinta)', strokeWidth: 2.5 }} />
            {/* Cabeza (Efecto / Falla) */}
            <polygon points="242,60 314,90 242,120" />
            <text x="251" y="95" style={{ fontSize: '13px' }}>
              Efecto
            </text>

            {/* 4 Espinas numeradas */}
            <line x1="65" y1="30" x2="115" y2="90" style={{ stroke: 'var(--teal)', strokeWidth: 2.2 }} />
            <text x="48" y="30">1</text>

            <line x1="160" y1="30" x2="210" y2="90" style={{ stroke: 'var(--teal)', strokeWidth: 2.2 }} />
            <text x="143" y="30">2</text>

            <line x1="65" y1="150" x2="115" y2="90" style={{ stroke: 'var(--teal)', strokeWidth: 2.2 }} />
            <text x="48" y="162">3</text>

            <line x1="160" y1="150" x2="210" y2="90" style={{ stroke: 'var(--teal)', strokeWidth: 2.2 }} />
            <text x="143" y="162">4</text>
          </svg>

          <div className="vertices">
            {ESPINAS_ISHIKAWA.map((espina) => {
              const valida = validarEspina(espina);
              const clase = ishikawaComprobado
                ? valida
                  ? 'int3-input-ok'
                  : 'int3-input-err'
                : undefined;

              return (
                <label key={espina.num}>
                  <span>{espina.num}</span>
                  <input
                    type="text"
                    className={clase}
                    placeholder={espina.placeholder}
                    value={espinas[espina.num]}
                    onChange={(e) => {
                      setIshikawaComprobado(false);
                      setEspinas((prev) => ({ ...prev, [espina.num]: e.target.value }));
                    }}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setIshikawaComprobado(true)}>
            Comprobar diagrama 4M
          </button>
          <button type="button" onClick={() => setMostrarGuiaPhva((prev) => !prev)}>
            {mostrarGuiaPhva ? 'Ocultar guía de referencia' : 'Ver guía de referencia'}
          </button>
        </div>

        <div className="resultado">
          <p style={{ marginTop: 0 }}>
            <strong>Cuadrantes PHVA redactados:</strong> {cuadrantesLlenos} / 4
            {ishikawaComprobado && (
              <>
                {' '}
                · <strong>Espinas Ishikawa identificadas:</strong> {aciertosIshikawa} / 4
              </>
            )}
          </p>

          {mostrarGuiaPhva && (
            <div style={{ marginTop: '0.65rem', fontSize: '0.9rem' }}>
              <p>
                <strong>Guía 4M de Ishikawa:</strong> 1) Método · 2) Mano de obra · 3) Maquinaria /
                Herramientas · 4) Materiales / Datos.
              </p>
              <p>
                <strong>Ejemplo PHVA:</strong> <em>Planear:</em> detectar con Pareto las consultas
                lentas y fijar latencia &lt; 300 ms. <em>Hacer:</em> optimizar consultas y aplicar
                caché en piloto. <em>Verificar:</em> medir latencia durante 1 semana en gráfico de
                control. <em>Actuar:</em> convertir la prueba de carga en requisito obligatorio de
                cada despliegue.
              </p>
            </div>
          )}
        </div>
      </article>

      {/* RETO 4: EMPAREJAR HERRAMIENTAS (4.4) */}
      <article className="practica">
        <h3>Reto 4 · Asigna la herramienta correcta (4.4)</h3>
        <p>
          Relaciona cada escenario empresarial con la herramienta de gestión del capital humano o de
          calidad que mejor resuelve el problema.
        </p>

        <div className="int3-match-list">
          {CASOS_EMPAREJAR_44.map((item) => {
            const elegida = emparejados[item.id] ?? '';
            const correcta = elegida === item.correcta;
            let claseRow = 'int3-match-row';
            if (emparejarComprobado) {
              claseRow += correcta ? ' ok' : ' err';
            }

            return (
              <div key={item.id} className={claseRow}>
                <div>
                  <span>{item.caso}</span>
                  {emparejarComprobado && !correcta && (
                    <p className="respuesta" style={{ fontSize: '0.85rem' }}>
                      Herramienta ideal: {item.correcta}
                    </p>
                  )}
                </div>

                <select
                  aria-label={`Herramienta para: ${item.caso}`}
                  className="int3-select"
                  value={elegida}
                  onChange={(e) => {
                    setEmparejarComprobado(false);
                    setEmparejados((prev) => ({ ...prev, [item.id]: e.target.value }));
                  }}
                >
                  <option value="">Selecciona herramienta...</option>
                  {OPCIONES_HERRAMIENTAS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setEmparejarComprobado(true)}>
            Comprobar clasificación
          </button>
          <button
            type="button"
            onClick={() => {
              setEmparejados({});
              setEmparejarComprobado(false);
            }}
          >
            Reiniciar selección
          </button>
        </div>

        {emparejarComprobado && (
          <div className="resultado">
            Resultado: <strong>{aciertosEmparejar} de {CASOS_EMPAREJAR_44.length}</strong>{' '}
            herramientas asignadas correctamente.
          </div>
        )}
      </article>
    </div>
  );
}