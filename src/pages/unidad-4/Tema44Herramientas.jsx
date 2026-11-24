import { useState } from 'react';

const PASOS_5S = [
  {
    id: 'seiri',
    etapa: '1.ª S',
    nombre: 'Seiri (Clasificar)',
    objetivo: 'Separar lo útil de lo innecesario y descartar sobrantes.',
    ti: 'Eliminar ramas obsoletas en Git, dependencias sin uso y código muerto.',
  },
  {
    id: 'seiton',
    etapa: '2.ª S',
    nombre: 'Seiton (Ordenar)',
    objetivo: 'Asignar un lugar lógico y accesible para cada recurso.',
    ti: 'Organizar carpetas por módulos, nombrar archivos con convención clara y documentar rutas.',
  },
  {
    id: 'seiso',
    etapa: '3.ª S',
    nombre: 'Seiso (Limpiar)',
    objetivo: 'Eliminar suciedad, fallas y atacar sus causas raíz de forma preventiva.',
    ti: 'Pagar deuda técnica, depurar advertencias de consola y limpiar bases de datos de prueba.',
  },
  {
    id: 'seiketsu',
    etapa: '4.ª S',
    nombre: 'Seiketsu (Estandarizar)',
    objetivo: 'Convertir las tres primeras etapas en reglas visuales y repetibles.',
    ti: 'Configurar linters (ESLint/Prettier), plantillas de Pull Request y guías de estilo.',
  },
  {
    id: 'shitsuke',
    etapa: '5.ª S',
    nombre: 'Shitsuke (Disciplina)',
    objetivo: 'Mantener el hábito a largo plazo mediante auditorías y mejora continua.',
    ti: 'Hacer revisiones de código constantes y auditorías breves al cierre de cada sprint.',
  },
];

const SIETE_DESPERDICIOS = [
  { nombre: 'Sobreproducción', ti: 'Programar funciones complejas que ningún usuario solicitó.' },
  { nombre: 'Tiempos de espera', ti: 'Pull Requests detenidos días enteros sin revisión o aprobaciones lentas.' },
  { nombre: 'Transporte innecesario', ti: 'Pasar archivos manualmente entre áreas o herramientas desconectadas.' },
  { nombre: 'Sobreprocesamiento', ti: 'Trámites duplicados o sobre-ingeniería para problemas sencillos.' },
  { nombre: 'Exceso de inventario', ti: 'Código terminado pero sin desplegar acumulado en ramas paralelas.' },
  { nombre: 'Movimientos inútiles', ti: 'Buscar documentación dispersa en chats, correos y carpetas sin orden.' },
  { nombre: 'Defectos y retrabajo', ti: 'Corregir errores en producción que pudieron evitarse con pruebas previas.' },
];

const MAPA_FUNCIONAL = [
  {
    id: 'producto',
    area: 'Desarrollo de Producto Digital',
    funcionClave: 'Diseñar y construir funcionalidades alineadas a los requisitos del usuario.',
    roles: [
      {
        rol: 'Desarrollador Frontend',
        competencias: 'Accesibilidad web, React/CSS modular, consumo de APIs y diseño responsivo.',
        entregable: 'Interfaces claras, rápidas y consistentes con la guía visual del equipo.',
      },
      {
        rol: 'Desarrollador Backend',
        competencias: 'Modelado de bases de datos, arquitectura de APIs, seguridad y optimización.',
        entregable: 'Servicios estables, seguros y documentados con tiempos de respuesta controlados.',
      },
    ],
  },
  {
    id: 'calidad',
    area: 'Aseguramiento de Calidad (QA)',
    funcionClave: 'Verificar que el sistema cumpla los estándares de calidad antes de liberarse.',
    roles: [
      {
        rol: 'Ingeniero de QA',
        competencias: 'Diseño de casos de prueba, pruebas automatizadas y reporte trazable de defectos.',
        entregable: 'Reportes de cobertura y validación de criterios de aceptación por sprint.',
      },
      {
        rol: 'Analista de Experiencia (UX)',
        competencias: 'Pruebas con usuarios reales, arquitectura de información y métricas de usabilidad.',
        entregable: 'Flujos validados que reduzcan errores de captura y fricción para el cliente.',
      },
    ],
  },
  {
    id: 'operacion',
    area: 'Infraestructura y Operación (DevOps)',
    funcionClave: 'Garantizar despliegues confiables, disponibilidad continua y monitoreo del sistema.',
    roles: [
      {
        rol: 'Ingeniero DevOps / Cloud',
        competencias: 'Integración continua (CI/CD), contenedores, respaldos y monitoreo de alertas.',
        entregable: 'Pipelines automatizados y alta disponibilidad del servicio en producción.',
      },
      {
        rol: 'Especialista en Seguridad',
        competencias: 'Gestión de accesos, auditoría de dependencias y protección de datos personales.',
        entregable: 'Evaluaciones de vulnerabilidades y cumplimiento de políticas de seguridad.',
      },
    ],
  },
];

const TIPOS_BENCHMARKING = [
  {
    tipo: 'Interno',
    comparacion: 'Entre áreas, equipos o sucursales de la misma organización.',
    ejemplo: 'Replicar el flujo de pruebas automatizadas del equipo más eficiente en los demás equipos de desarrollo.',
  },
  {
    tipo: 'Competitivo',
    comparacion: 'Frente a competidores directos que operan en el mismo mercado.',
    ejemplo: 'Comparar tiempos de carga, planes de precios y experiencia de registro frente a la plataforma líder.',
  },
  {
    tipo: 'Funcional / Genérico',
    comparacion: 'Frente a empresas líderes de otras industrias con procesos similares.',
    ejemplo: 'Analizar cómo una fintech diseña su centro de ayuda para mejorar el soporte de una plataforma educativa.',
  },
];

const MODULOS_ERP = [
  {
    id: 'ventas',
    nombre: 'Ventas y CRM',
    silo: 'Pedidos capturados en hojas de cálculo que tardan horas en llegar al almacén.',
  },
  {
    id: 'inventarios',
    nombre: 'Inventarios',
    silo: 'Existencias desactualizadas que provocan vender productos agotados.',
  },
  {
    id: 'compras',
    nombre: 'Compras y Proveedores',
    silo: 'Órdenes de compra duplicadas o tardías por falta de visibilidad de stock.',
  },
  {
    id: 'capitalHumano',
    nombre: 'Capital Humano y Nómina',
    silo: 'Incidencias, vacaciones y pagos capturados dos veces en sistemas distintos.',
  },
  {
    id: 'finanzas',
    nombre: 'Finanzas y Contabilidad',
    silo: 'Cierres mensuales lentos conciliando manualmente facturas, nómina y compras.',
  },
];

const CONEXIONES_ERP = [
  {
    requiere: ['ventas', 'inventarios'],
    flujo: 'Ventas ↔ Inventarios: cada pedido descuenta existencias en tiempo real y evita sobreventa.',
  },
  {
    requiere: ['inventarios', 'compras'],
    flujo: 'Inventarios ↔ Compras: al bajar del stock mínimo se sugiere automáticamente una orden al proveedor.',
  },
  {
    requiere: ['ventas', 'finanzas'],
    flujo: 'Ventas ↔ Finanzas: genera la factura (CFDI) y actualiza cuentas por cobrar sin recaptura manual.',
  },
  {
    requiere: ['compras', 'finanzas'],
    flujo: 'Compras ↔ Finanzas: concilia órdenes recibidas con cuentas por pagar y flujo de efectivo.',
  },
  {
    requiere: ['capitalHumano', 'finanzas'],
    flujo: 'Capital Humano ↔ Finanzas: integra automáticamente nómina, prestaciones e impuestos en la contabilidad.',
  },
];

const CASOS_PRACTICA_12 = [
  {
    id: 'p12-c1',
    titulo: 'Caso 1: Repositorios desordenados y archivos duplicados',
    situacion:
      'Un equipo de desarrollo pierde horas buscando la versión correcta de los manuales, tiene 25 ramas abandonadas en Git y cada programador nombra sus archivos de manera distinta.',
    opciones: ["Las 5's", 'ERP (Enterprise Resource Planning)', 'Benchmarking competitivo'],
    correcta: 0,
    explicacion:
      "Las 5's (Seiri, Seiton, Seiso, Seiketsu y Shitsuke) atacan exactamente el desorden operativo y digital, estableciendo clasificación, orden y estándares visuales sostenibles.",
  },
  {
    id: 'p12-c2',
    titulo: 'Caso 2: Costos altos por capacidad ociosa y entregas acumuladas',
    situacion:
      'Una empresa tecnológica paga servidores sobredimensionados todo el año "por si aumenta el tráfico" y acumula 6 meses de código sin liberar al cliente, generando retrabajo constante.',
    opciones: ['Análisis funcional', 'Just in Time (JIT)', 'Benchmarking interno'],
    correcta: 1,
    explicacion:
      'Just in Time busca eliminar desperdicios (sobreproducción, inventarios y capacidad ociosa) operando bajo demanda real: entregas incrementales y recursos en la nube escalados conforme se requieren.',
  },
  {
    id: 'p12-c3',
    titulo: 'Caso 3: Confusión de responsabilidades entre puestos nuevos',
    situacion:
      'La startup creció de 5 a 25 personas y ahora Frontend, Backend y QA se culpan entre sí cuando falla una entrega porque nadie tiene documentado qué competencias y resultados corresponden a cada rol.',
    opciones: ['Análisis funcional', 'Just in Time (JIT)', "Las 5's"],
    correcta: 0,
    explicacion:
      'El Análisis funcional descompone el propósito clave de la organización en funciones, subfunciones y competencias concretas por puesto, eliminando traslapes y vacíos de responsabilidad.',
  },
  {
    id: 'p12-c4',
    titulo: 'Caso 4: Datos duplicados entre Ventas, Almacén y Contabilidad',
    situacion:
      'Cada departamento lleva sus registros en hojas de Excel distintas; Contabilidad tarda 10 días en cerrar el mes y Ventas suele prometer productos que ya no existen en inventario.',
    opciones: ['Benchmarking funcional', "Las 5's", 'ERP (Enterprise Resource Planning)'],
    correcta: 2,
    explicacion:
      'Un sistema ERP (como SAP, Odoo u Oracle NetSuite) elimina los silos de información al unificar ventas, inventarios, compras, nómina y finanzas en una sola base de datos en tiempo real.',
  },
];

export default function Tema44Herramientas() {
  const [herramienta, setHerramienta] = useState('cincoS');
  const [completadas5s, setCompletadas5s] = useState(['seiri', 'seiton']);
  const [areaFuncionalId, setAreaFuncionalId] = useState('producto');
  const [modulosActivos, setModulosActivos] = useState(['ventas', 'inventarios', 'finanzas']);
  const [respuestasCaso, setRespuestasCaso] = useState({});

  const areaActual = MAPA_FUNCIONAL.find((a) => a.id === areaFuncionalId);

  const toggle5s = (id) => {
    setCompletadas5s((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleModuloErp = (id) => {
    setModulosActivos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const flujosSincronizados = CONEXIONES_ERP.filter((c) =>
    c.requiere.every((req) => modulosActivos.includes(req))
  );
  const silosRestantes = MODULOS_ERP.filter((m) => !modulosActivos.includes(m.id));

  const elegirOpcionCaso = (casoId, opIdx) => {
    setRespuestasCaso((prev) => ({ ...prev, [casoId]: opIdx }));
  };

  return (
    <div>
      {/* Introducción */}
      <article className="int3-card">
        <span className="int3-tag">Subtema 4.4 · Herramientas aplicadas (Práctica 12)</span>
        <h3>4.4 Herramientas de gestión del Capital Humano y de calidad</h3>
        <p>
          Llevar los principios de capital humano y calidad a la operación diaria requiere
          metodologías y sistemas concretos. Estas cinco herramientas permiten ordenar espacios
          físicos y digitales, eliminar desperdicios, definir competencias por puesto, aprender de
          líderes del sector e integrar la información de toda la empresa.
        </p>
      </article>

      {/* Selector de las 5 herramientas */}
      <div className="int3-section-block">
        <h3>Explora las 5 herramientas del programa oficial</h3>
        <div className="int3-pill-list">
          {[
            { id: 'cincoS', label: "4.4.1 Las 5's" },
            { id: 'jit', label: '4.4.2 Just in Time' },
            { id: 'funcional', label: '4.4.3 Análisis funcional' },
            { id: 'benchmarking', label: '4.4.4 Benchmarking' },
            { id: 'erp', label: '4.4.5 ERP' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`int3-tab ${herramienta === item.id ? 'active' : ''}`}
              onClick={() => setHerramienta(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 4.4.1 Las 5's */}
        {herramienta === 'cincoS' && (
          <article className="int3-card">
            <span className="int3-tag">4.4.1 · Orden, limpieza y disciplina operativa</span>
            <h3>Las 5&apos;s</h3>
            <p>
              Metodología japonesa originada en Toyota orientada a crear entornos de trabajo —tanto
              físicos como digitales— clasificados, ordenados y estandarizados para reducir errores,
              tiempos de búsqueda y accidentes.
            </p>

            <div className="int3-table-wrap">
              <table className="int3-table">
                <thead>
                  <tr>
                    <th>Etapa</th>
                    <th>Término</th>
                    <th>Objetivo</th>
                    <th>Aplicación en TI</th>
                  </tr>
                </thead>
                <tbody>
                  {PASOS_5S.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <strong>{p.etapa}</strong>
                      </td>
                      <td>
                        <strong>{p.nombre}</strong>
                      </td>
                      <td>{p.objetivo}</td>
                      <td>{p.ti}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <h4>Checklist interactivo: audita Las 5&apos;s en tu proyecto</h4>
              <p style={{ margin: '0.25rem 0 0.75rem', fontSize: '0.9rem', color: '#475569' }}>
                Progreso actual: <strong>{completadas5s.length} / 5</strong> etapas implementadas
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
                      onChange={() => toggle5s(paso.id)}
                    />
                    <span>
                      <strong>{paso.nombre}:</strong> {paso.ti}
                    </span>
                  </label>
                );
              })}

              {completadas5s.length === 5 && (
                <div className="int3-feedback ok">
                  <strong>¡Entorno estandarizado!</strong> Completaste las 5 etapas. La clave de{' '}
                  <em>Shitsuke</em> es repetir esta breve verificación al cierre de cada sprint.
                </div>
              )}
            </div>
          </article>
        )}

        {/* 4.4.2 Just in Time */}
        {herramienta === 'jit' && (
          <article className="int3-card">
            <span className="int3-tag">4.4.2 · Producción y entrega bajo demanda</span>
            <h3>Just in Time (JIT)</h3>
            <p>
              Filosofía operativa que busca producir, adquirir o entregar únicamente lo necesario, en
              la cantidad exacta y en el momento oportuno, reduciendo inventarios y tiempos muertos.
            </p>

            <div className="int3-grid">
              <div className="int3-map-box">
                <h4>Enfoque tradicional (Push)</h4>
                <p style={{ marginBottom: 0 }}>
                  Produce grandes lotes "por si se necesitan", acumulando inventarios costosos o
                  meses de código sin probar con usuarios reales.
                </p>
              </div>
              <div className="int3-map-box root" style={{ textAlign: 'left' }}>
                <h4>Enfoque Just in Time (Pull)</h4>
                <p style={{ marginBottom: 0 }}>
                  La demanda real dispara el trabajo: entregas incrementales en desarrollo ágil,
                  límites de trabajo en progreso (Kanban) y autoescalado en la nube.
                </p>
              </div>
            </div>

            <h4 style={{ marginTop: '1rem' }}>Los 7 desperdicios (Muda) que combate JIT en TI</h4>
            <div className="int3-muda-grid">
              {SIETE_DESPERDICIOS.map((m) => (
                <div key={m.nombre} className="int3-muda-item">
                  <strong>{m.nombre}:</strong> {m.ti}
                </div>
              ))}
            </div>

            <div className="int3-highlight">
              <strong>Riesgo clave a gestionar:</strong> Al eliminar grandes reservas, JIT exige
              proveedores confiables y calidad controlada; una falla en un eslabón crítico puede
              detener toda la cadena.
            </div>
          </article>
        )}

        {/* 4.4.3 Análisis funcional */}
        {herramienta === 'funcional' && (
          <article className="int3-card">
            <span className="int3-tag">4.4.3 · Competencias y diseño de puestos</span>
            <h3>Análisis funcional</h3>
            <p>
              Técnica de gestión del capital humano que descompone el <strong>propósito clave</strong>{' '}
              de la empresa en funciones principales, subfunciones y competencias observables hasta
              definir qué resultados concretos debe entregar cada puesto.
            </p>

            <h4 style={{ marginTop: '1rem' }}>Simulador de Mapa Funcional (3 niveles)</h4>
            <p style={{ margin: '0.25rem 0 0.75rem', fontSize: '0.9rem', color: '#475569' }}>
              Selecciona un área funcional para ver cómo el propósito de una empresa tecnológica se
              traduce en competencias y entregables reales por rol:
            </p>

            <div className="int3-map-box root">
              <span className="int3-tag" style={{ marginBottom: '0.35rem' }}>
                Nivel 1 · Propósito clave de la organización
              </span>
              <p style={{ margin: 0, fontWeight: 700 }}>
                Desarrollar y operar soluciones de software confiables que generen valor continuo al
                cliente.
              </p>
            </div>

            <div className="int3-map-arrow">↓ ¿Qué áreas funcionales logran este propósito?</div>

            <div className="int3-pill-list">
              {MAPA_FUNCIONAL.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`int3-tab ${areaFuncionalId === item.id ? 'active' : ''}`}
                  onClick={() => setAreaFuncionalId(item.id)}
                >
                  {item.area}
                </button>
              ))}
            </div>

            <div className="int3-map-box">
              <span className="int3-tag">Nivel 2 · Función principal del área</span>
              <p style={{ margin: 0 }}>
                <strong>{areaActual.area}:</strong> {areaActual.funcionClave}
              </p>
            </div>

            <div className="int3-map-arrow">↓ Nivel 3 · Competencias y entregables por puesto</div>

            <div className="int3-grid">
              {areaActual.roles.map((r) => (
                <div key={r.rol} className="int3-map-box" style={{ marginBottom: 0 }}>
                  <h4>{r.rol}</h4>
                  <p style={{ margin: '0.25rem 0 0.5rem' }}>
                    <strong>Competencias requeridas:</strong> {r.competencias}
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Resultado / Entregable:</strong> {r.entregable}
                  </p>
                </div>
              ))}
            </div>
          </article>
        )}

        {/* 4.4.4 Benchmarking */}
        {herramienta === 'benchmarking' && (
          <article className="int3-card">
            <span className="int3-tag">4.4.4 · Comparación sistemática y mejores prácticas</span>
            <h3>Benchmarking</h3>
            <p>
              Proceso continuo de medir y comparar productos, servicios y procesos propios frente a
              referentes destacados para <strong>adaptar mejores prácticas</strong> a la realidad de
              la empresa (no copiarlas sin contexto) y cerrar brechas de desempeño.
            </p>

            <div className="int3-table-wrap">
              <table className="int3-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Con quién se compara</th>
                    <th>Ejemplo en empresas de TI</th>
                  </tr>
                </thead>
                <tbody>
                  {TIPOS_BENCHMARKING.map((b) => (
                    <tr key={b.tipo}>
                      <td>
                        <strong>{b.tipo}</strong>
                      </td>
                      <td>{b.comparacion}</td>
                      <td>{b.ejemplo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="int3-highlight">
              <strong>5 pasos para aplicarlo:</strong> 1) Definir qué proceso y KPIs medir → 2)
              Recopilar datos confiables → 3) Identificar brechas de desempeño → 4) Adaptar e
              implementar mejoras al contexto propio → 5) Monitorear resultados continuamente.
            </div>
          </article>
        )}

        {/* 4.4.5 ERP */}
        {herramienta === 'erp' && (
          <article className="int3-card">
            <span className="int3-tag">4.4.5 · Integración empresarial en tiempo real</span>
            <h3>ERP (Enterprise Resource Planning)</h3>
            <p>
              Sistema modular que centraliza en una <strong>sola base de datos</strong> la operación
              de ventas, inventarios, compras, capital humano y finanzas, eliminando hojas de cálculo
              aisladas (silos) y recapturas manuales. Ejemplos: <strong>SAP S/4HANA</strong>,{' '}
              <strong>Oracle NetSuite</strong>, <strong>Microsoft Dynamics 365</strong> y{' '}
              <strong>Odoo</strong>.
            </p>

            <h4 style={{ marginTop: '1rem' }}>Simulador: Silos aislados vs. ERP centralizado</h4>
            <p style={{ margin: '0.25rem 0 0.75rem', fontSize: '0.9rem', color: '#475569' }}>
              Activa o desactiva módulos para observar qué procesos se sincronizan automáticamente
              cuando comparten una base de datos ERP y qué fallas persisten cuando quedan aislados:
            </p>

            <div className="int3-erp-modules">
              {MODULOS_ERP.map((mod) => {
                const activo = modulosActivos.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    type="button"
                    className={`int3-erp-toggle ${activo ? 'connected' : ''}`}
                    onClick={() => toggleModuloErp(mod.id)}
                  >
                    <span>{activo ? '✓' : '+'}</span>
                    <span>{mod.nombre}</span>
                  </button>
                );
              })}
            </div>

            <div className="int3-erp-hub">
              <div className="int3-erp-status">
                <strong>Base de datos central ERP</strong>
                <span>
                  Módulos integrados: <strong>{modulosActivos.length} / {MODULOS_ERP.length}</strong>
                </span>
              </div>

              <div className="int3-grid" style={{ marginTop: 0 }}>
                <div>
                  <h4>Flujos automatizados activos ({flujosSincronizados.length})</h4>
                  {flujosSincronizados.length > 0 ? (
                    <ul>
                      {flujosSincronizados.map((f) => (
                        <li key={f.flujo}>{f.flujo}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '0.9rem', color: '#5a5a50' }}>
                      Conecta al menos dos módulos relacionados (por ejemplo, Ventas e Inventarios)
                      para habilitar flujos automáticos en tiempo real.
                    </p>
                  )}
                </div>

                <div>
                  <h4>Silos desconectados pendientes ({silosRestantes.length})</h4>
                  {silosRestantes.length > 0 ? (
                    <ul>
                      {silosRestantes.map((s) => (
                        <li key={s.id}>
                          <strong>{s.nombre}:</strong> {s.silo}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="int3-feedback ok" style={{ marginTop: '0.35rem' }}>
                      <strong>Integración total:</strong> Todas las áreas operan sobre una única
                      fuente de verdad en tiempo real.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="int3-highlight">
              <strong>Retos reales en proyectos de ISC:</strong> Implantar un ERP no falla solo por
              código; los mayores riesgos son datos históricos sucios, sobrecostos por
              personalización excesiva, falta de capacitación y resistencia cultural al cambio.
            </div>
          </article>
        )}
      </div>

      {/* Diagnóstico interactivo — Práctica 12 */}
      <div className="int3-section-block">
        <h3>Diagnóstico interactivo (Práctica 12: Herramientas de gestión)</h3>
        <p style={{ marginTop: 0, fontSize: '0.93rem', color: '#475569' }}>
          Identifica qué herramienta resuelve mejor cada cuello de botella organizacional:
        </p>

        {CASOS_PRACTICA_12.map((caso) => {
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
                  <strong>{esCorrecto ? 'Elección acertada: ' : 'Revisa la herramienta: '}</strong>
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