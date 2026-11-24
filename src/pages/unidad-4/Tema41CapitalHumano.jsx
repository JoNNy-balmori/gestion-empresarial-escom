import { useState } from 'react';

const DIMENSIONES = [
  {
    etiqueta: 'Saber',
    titulo: 'Conocimientos',
    descripcion:
      'Formación académica, dominio teórico y metodologías técnicas o administrativas (arquitectura de software, finanzas, gestión de proyectos).',
  },
  {
    etiqueta: 'Saber hacer',
    titulo: 'Habilidades y experiencia',
    descripcion:
      'Capacidad práctica para resolver problemas, aplicar herramientas, diseñar soluciones y tomar decisiones bajo presión.',
  },
  {
    etiqueta: 'Saber ser',
    titulo: 'Actitudes y valores',
    descripcion:
      'Ética profesional, liderazgo, trabajo en equipo, adaptabilidad y compromiso con la cultura y metas de la organización.',
  },
];

const EVOLUCION = [
  {
    id: 'personal',
    etapa: '1. Administración de personal',
    enfoque: 'Tradicional / Operativo',
    vision: 'Las personas se ven como mano de obra y un costo operativo que debe controlarse.',
    rol: 'Ejecución de trámites administrativos, control de asistencia, expedientes y pago puntual de nómina.',
    ejemplo:
      'Un departamento que solo registra entradas, salidas y descuentos sin involucrarse en el crecimiento del equipo.',
  },
  {
    id: 'rrhh',
    etapa: '2. Recursos Humanos (RR. HH.)',
    enfoque: 'Funcional / Reactivo',
    vision: 'Las personas se consideran activos o insumos valiosos necesarios para operar la empresa.',
    rol: 'Cubrir vacantes cuando surgen, coordinar capacitaciones generales y administrar prestaciones.',
    ejemplo:
      'Se abre una vacante solo después de que un desarrollador renuncia y se imparten cursos genéricos una vez al año.',
  },
  {
    id: 'capital',
    etapa: '3. Gestión del Capital Humano',
    enfoque: 'Estratégico / Actual',
    vision: 'Las personas son socios estratégicos e inversionistas de conocimiento que generan ventaja competitiva.',
    rol: 'Alinear el talento con los objetivos del negocio, impulsar la innovación, cuidar el clima laboral y retener perfiles clave.',
    ejemplo:
      'Planes de carrera técnicos, capacitación continua en nuevas tecnologías, esquemas híbridos y seguimiento de bienestar.',
  },
];

const FUNCIONES_CICLO = [
  {
    paso: 1,
    corto: 'Planeación y puestos',
    titulo: '1. Planeación del talento y análisis de puestos',
    resumen:
      'Define con anticipación qué perfiles necesita la empresa a corto y mediano plazo para cumplir su estrategia operativa y tecnológica.',
    puntos: [
      'Análisis y descripción de puestos: especifica responsabilidades, nivel de autoridad, requisitos técnicos y competencias blandas.',
      'Planeación de plantilla: proyecta cuántas personas se requieren ante nuevos proyectos, expansión o rotación esperada.',
    ],
    ejemploTI:
      'Diferenciar claramente el perfil y alcance de un Desarrollador Backend Jr. frente a un Arquitecto de Software antes de publicar vacantes.',
  },
  {
    paso: 2,
    corto: 'Reclutamiento y selección',
    titulo: '2. Reclutamiento y selección',
    resumen:
      'Atrae y evalúa candidatos para elegir a quienes mejor encajan tanto con las exigencias del puesto como con la cultura organizacional.',
    puntos: [
      'Reclutamiento interno (ascensos, rotaciones) y externo (bolsas de empleo, LinkedIn, ferias universitarias, referidos).',
      'Selección estructurada: filtro curricular, entrevistas por competencias, pruebas técnicas o de código y validación de referencias.',
    ],
    ejemploTI:
      'Combinar una prueba práctica en repositorio Git con una entrevista técnica y otra cultural para contratar un ingeniero DevOps.',
  },
  {
    paso: 3,
    corto: 'Inducción (Onboarding)',
    titulo: '3. Inducción y socialización (Onboarding)',
    resumen:
      'Integra formalmente al nuevo colaborador para acortar su curva de aprendizaje y prevenir renuncias tempranas.',
    puntos: [
      'Inducción general: misión, visión, valores, organigrama, políticas y reglamento interno.',
      'Inducción al puesto: configuración de entornos, procesos del equipo, asignación de mentor y metas a 30, 60 y 90 días.',
    ],
    ejemploTI:
      'Entregar accesos, guía de arquitectura, estándares de ramas en Git y un mentor asignado desde la primera semana.',
  },
  {
    paso: 4,
    corto: 'Capacitación y desarrollo',
    titulo: '4. Capacitación, adiestramiento y desarrollo',
    resumen:
      'Mantiene actualizadas las competencias del equipo en industrias donde las herramientas y estándares evolucionan constantemente.',
    puntos: [
      'Detección de Necesidades de Capacitación (DNC): detecta brechas entre lo que exige el puesto y lo que domina hoy el colaborador.',
      'Upskilling y plan de carrera: formación técnica continua y preparación para roles de mayor liderazgo.',
    ],
    ejemploTI:
      'Programas de certificación en nube o ciberseguridad y mentoría para pasar de desarrollador senior a Tech Lead.',
  },
  {
    paso: 5,
    corto: 'Evaluación del desempeño',
    titulo: '5. Evaluación del desempeño',
    resumen:
      'Mide de forma periódica y objetiva cómo cumple cada integrante con sus metas y cómo aporta al resultado colectivo.',
    puntos: [
      'Métodos habituales: evaluación por objetivos (KPIs/OKRs), evaluación 360° y matrices de competencias.',
      'Propósito real: dar retroalimentación constructiva, detectar necesidades de formación y sustentar ascensos o bonos.',
    ],
    ejemploTI:
      'Revisiones semestrales basadas en calidad de entregas, colaboración en revisiones de código y cumplimiento de objetivos de sprint.',
  },
  {
    paso: 6,
    corto: 'Compensaciones y nómina',
    titulo: '6. Compensaciones, nómina y prestaciones',
    resumen:
      'Diseña esquemas retributivos con equidad interna (justicia entre puestos similares) y competitividad externa (acorde al mercado).',
    puntos: [
      'Compensación financiera directa (sueldo base, bonos) e indirecta (prestaciones de ley y superiores).',
      'Salario emocional: flexibilidad horaria, modalidad híbrida o remota, balance vida-trabajo y reconocimiento.',
    ],
    ejemploTI:
      'Ajustar tabuladores salariales frente al mercado tecnológico y complementar con horario flexible y presupuesto de formación.',
  },
  {
    paso: 7,
    corto: 'Clima y relaciones laborales',
    titulo: '7. Relaciones laborales, clima organizacional y bienestar',
    resumen:
      'Resguarda la estabilidad, la convivencia diaria, la salud ocupacional y el cumplimiento ético-legal en la empresa.',
    puntos: [
      'Clima laboral: encuestas de satisfacción, comunicación interna, manejo de conflictos y programas de integración.',
      'Bienestar y ciclo de salida: prevención de desgaste (burnout), seguridad laboral y entrevistas de salida para identificar áreas de mejora.',
    ],
    ejemploTI:
      'Medir carga de trabajo en equipos de soporte para prevenir agotamiento y analizar causas reales cuando un perfil clave decide salir.',
  },
];

const CASOS_PRACTICA_9 = [
  {
    id: 'caso1',
    titulo: 'Escenario 1: Curva de arranque demasiado lenta',
    situacion:
      'Una empresa de software contrata excelentes programadores recién egresados, pero tardan casi 4 meses en entender el repositorio, los despliegues y las reglas del equipo. Varios renuncian antes del sexto mes por frustración.',
    opciones: [
      'Compensaciones y nómina',
      'Inducción y socialización (Onboarding)',
      'Reclutamiento externo',
    ],
    correcta: 1,
    explicacion:
      'El talento seleccionado es bueno, pero falta un proceso estructurado de Onboarding (guías técnicas, mentoría y metas a 30-60-90 días) que reduzca la curva de aprendizaje y la rotación temprana.',
  },
  {
    id: 'caso2',
    titulo: 'Escenario 2: Fuga de talento con 2 años de experiencia',
    situacion:
      'Tus desarrolladores mid-level cumplen sus objetivos, pero comienzan a aceptar ofertas de la competencia que ofrecen 25% más sueldo y modalidad híbrida. Sus salarios no se han revisado en 3 años.',
    opciones: [
      'Compensaciones, prestaciones y salario emocional',
      'Análisis de puestos',
      'Inducción general',
    ],
    correcta: 0,
    explicacion:
      'Existe pérdida de competitividad externa. Capital Humano debe actualizar tabuladores salariales y evaluar beneficios flexibles (salario emocional) para retener al talento ya formado.',
  },
  {
    id: 'caso3',
    titulo: 'Escenario 3: Proyectos retrasados por falta de dominio técnico',
    situacion:
      'La organización decide migrar sus sistemas a arquitectura en la nube, pero el equipo actual solo domina servidores locales y acumula errores de configuración y seguridad.',
    opciones: [
      'Relaciones laborales y entrevistas de salida',
      'Capacitación y desarrollo (DNC / Upskilling)',
      'Control de asistencia y nómina',
    ],
    correcta: 1,
    explicacion:
      'Se requiere aplicar una Detección de Necesidades de Capacitación (DNC) y un plan de Upskilling en cómputo en la nube antes o durante la migración tecnológica.',
  },
];

export default function Tema41CapitalHumano() {
  const [etapaEvolucion, setEtapaEvolucion] = useState('capital');
  const [pasoActivo, setPasoActivo] = useState(0);
  const [seleccionesCaso, setSeleccionesCaso] = useState({});

  const evolucionActual = EVOLUCION.find((e) => e.id === etapaEvolucion);
  const funcionActual = FUNCIONES_CICLO[pasoActivo];

  const elegirOpcionCaso = (casoId, opIdx) => {
    setSeleccionesCaso((prev) => ({ ...prev, [casoId]: opIdx }));
  };

  return (
    <div>
      {/* 4.1 Concepto y valor estratégico */}
      <article className="int3-card">
        <span className="int3-tag">Subtema 4.1 · Concepto y valor estratégico</span>
        <h3>4.1 Capital humano</h3>
        <p>
          El <strong>capital humano</strong> es el conjunto de conocimientos, habilidades técnicas,
          competencias directivas, experiencia, creatividad y valores que poseen las personas dentro
          de una organización. A diferencia de la maquinaria o el equipo de cómputo —que se
          deprecian con el tiempo—, el capital humano <strong>se revaloriza</strong> con la
          formación, la práctica y un entorno organizacional adecuado.
        </p>

        <div className="int3-highlight">
          <strong>Relevancia en empresas de innovación tecnológica:</strong> Dos compañías pueden
          rentar los mismos servidores en la nube y programar en los mismos lenguajes; su ventaja
          competitiva real depende del talento, la colaboración y la capacidad de aprendizaje de sus
          equipos de ingeniería.
        </div>
      </article>

      {/* 3 Dimensiones */}
      <div className="int3-section-block">
        <h3>Las tres dimensiones del capital humano</h3>
        <div className="int3-grid">
          {DIMENSIONES.map((dim) => (
            <article key={dim.etiqueta} className="int3-card">
              <span className="int3-tag">{dim.etiqueta}</span>
              <h4>{dim.titulo}</h4>
              <p>{dim.descripcion}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Evolución interactiva */}
      <div className="int3-section-block">
        <h3>Evolución del enfoque: de personal a capital humano</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Selecciona cada etapa para comparar cómo cambia la visión sobre las personas dentro de la
          empresa:
        </p>

        <div className="int3-pill-list">
          {EVOLUCION.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`int3-tab ${etapaEvolucion === item.id ? 'active' : ''}`}
              onClick={() => setEtapaEvolucion(item.id)}
            >
              {item.etapa}
            </button>
          ))}
        </div>

        <article className="int3-card">
          <span className="int3-tag">Enfoque: {evolucionActual.enfoque}</span>
          <h4>{evolucionActual.etapa}</h4>
          <p>
            <strong>Visión sobre las personas:</strong> {evolucionActual.vision}
          </p>
          <p>
            <strong>Rol principal del área:</strong> {evolucionActual.rol}
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Ejemplo práctico:</strong> {evolucionActual.ejemplo}
          </p>
        </article>
      </div>

      {/* 4.1.1 Ciclo de vida del colaborador (7 funciones) */}
      <div className="int3-section-block">
        <h3>4.1.1 Funciones del departamento de capital humano</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Recorre las 7 etapas del ciclo de vida del colaborador haciendo clic en cada función:
        </p>

        <div className="int3-stepper">
          {FUNCIONES_CICLO.map((fn, index) => (
            <button
              key={fn.paso}
              type="button"
              className={`int3-step-btn ${pasoActivo === index ? 'active' : ''}`}
              onClick={() => setPasoActivo(index)}
            >
              <span className="int3-step-num">{fn.paso}</span>
              <span>{fn.corto}</span>
            </button>
          ))}
        </div>

        <article className="int3-card">
          <span className="int3-tag">Etapa {funcionActual.paso} de 7</span>
          <h4>{funcionActual.titulo}</h4>
          <p>{funcionActual.resumen}</p>
          <ul>
            {funcionActual.puntos.map((punto) => (
              <li key={punto}>{punto}</li>
            ))}
          </ul>
          <div className="int3-highlight">
            <strong>Aplicación en un equipo de TI:</strong> {funcionActual.ejemploTI}
          </div>

          <div className="int3-nav-row">
            <button
              type="button"
              className="int3-tab"
              disabled={pasoActivo === 0}
              onClick={() => setPasoActivo((prev) => Math.max(0, prev - 1))}
            >
              ← Etapa anterior
            </button>
            <button
              type="button"
              className="int3-tab"
              disabled={pasoActivo === FUNCIONES_CICLO.length - 1}
              onClick={() =>
                setPasoActivo((prev) => Math.min(FUNCIONES_CICLO.length - 1, prev + 1))
              }
            >
              Siguiente etapa →
            </button>
          </div>
        </article>
      </div>

      {/* Mini diagnóstico interactivo — Práctica 9 */}
      <div className="int3-section-block">
        <h3>Diagnóstico interactivo (Práctica 9: Capital humano y sus funciones)</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Analiza cada situación real e identifica qué función del departamento de capital humano
          debe intervenir prioritariamente:
        </p>

        {CASOS_PRACTICA_9.map((caso) => {
          const elegido = seleccionesCaso[caso.id];
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
                  <strong>{esCorrecto ? 'Diagnóstico correcto: ' : 'Revisa el enfoque: '}</strong>
                  {caso.explicacion}
                </div>
              )}
            </article>
          );
        })}

        {Object.keys(seleccionesCaso).length > 0 && (
          <button
            type="button"
            className="int3-btn"
            onClick={() => setSeleccionesCaso({})}
          >
            Reiniciar diagnóstico
          </button>
        )}
      </div>
    </div>
  );
}