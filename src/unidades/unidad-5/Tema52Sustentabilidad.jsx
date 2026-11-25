import { useState } from 'react';
import './Unidad5Legal.css';

const DECISIONES_STARTUP = [
  {
    id: 'cloud',
    titulo: 'Infraestructura en la nube (Green Cloud)',
    tradicional: 'Servidores encendidos 24/7 sobredimensionados sin medir consumo energético.',
    sostenible: 'Autoescalado bajo demanda en regiones de nube alimentadas con energía renovable.',
    impacto: { ambiental: 30, social: 5, economica: 20, tecnologica: 20 },
  },
  {
    id: 'greensoftware',
    titulo: 'Eficiencia de código (Green Software)',
    tradicional: 'Consultas sin índices, imágenes pesadas sin comprimir y procesos redundantes.',
    sostenible: 'Consultas optimizadas, caché inteligente y arquitectura ligera que reduce CPU y ancho de banda.',
    impacto: { ambiental: 25, social: 5, economica: 20, tecnologica: 25 },
  },
  {
    id: 'accesibilidad',
    titulo: 'Inclusión digital y cultura laboral',
    tradicional: 'Sitio inaccesible para lectores de pantalla y jornadas extendidas de crunch.',
    sostenible: 'Estándares de accesibilidad WCAG, horarios sostenibles y capacitación continua del equipo.',
    impacto: { ambiental: 0, social: 35, economica: 15, tecnologica: 15 },
  },
  {
    id: 'ewaste',
    titulo: 'Ciclo de vida del hardware (Economía circular)',
    tradicional: 'Reemplazo total de laptops cada 2 años desechando equipos en basura común.',
    sostenible: 'Mantenimiento preventivo, reacondicionamiento para donación escolar y reciclaje certificado de e-waste.',
    impacto: { ambiental: 25, social: 10, economica: 20, tecnologica: 10 },
  },
  {
    id: 'etica',
    titulo: 'Transparencia de negocio y ética en IA',
    tradicional: 'Cancelaciones difíciles (dark patterns) y algoritmos desplegados sin revisar sesgos.',
    sostenible: 'Suscripciones claras, auditorías periódicas de sesgos en IA y protección estricta de datos.',
    impacto: { ambiental: 0, social: 25, economica: 5, tecnologica: 10 },
  },
];

const DIMENSIONES = [
  { id: 'ambiental', label: 'Ambiental' },
  { id: 'social', label: 'Social' },
  { id: 'economica', label: 'Económica' },
  { id: 'tecnologica', label: 'Tecnológica' },
];

const CASOS_GREENWASHING = [
  {
    id: 'gw-1',
    caso: 'Una empresa tecnológica cambia su logotipo a color verde en junio y publica anuncios «100% eco-friendly», pero bloquea con software las reparaciones independientes y no reporta sus emisiones ni su manejo de residuos.',
    correcta: 'Greenwashing',
    explicacion:
      'Es greenwashing: usa mercadotecnia ecológica sin cambios operativos reales, fomenta la obsolescencia y carece de métricas verificables.',
  },
  {
    id: 'gw-2',
    caso: 'Una plataforma SaaS publica su reporte anual auditado de huella de carbono en la nube, reduce 32% el consumo de cómputo optimizando sus consultas y ofrece becas de programación en escuelas públicas.',
    correcta: 'RSE genuina',
    explicacion:
      'Es RSE genuina: combina mejoras técnicas medibles (Green Software), transparencia verificable e impacto social sostenido.',
  },
  {
    id: 'gw-3',
    caso: 'Una tienda en línea presume «envíos sin impacto ambiental» cobrando un cargo extra opcional al cliente, pero nunca informa a qué proyecto se destina el dinero ni optimiza sus rutas o empaques de plástico.',
    correcta: 'Greenwashing',
    explicacion:
      'Es greenwashing: traslada la responsabilidad al usuario con afirmaciones vagas y sin trazabilidad ni mejoras en su propia operación.',
  },
  {
    id: 'gw-4',
    caso: 'Una desarrolladora implementa políticas de accesibilidad WCAG en todos sus productos, cumple la NOM-035 contra el desgaste laboral y reacondiciona sus equipos de cómputo cada 4 años para donarlos a centros comunitarios.',
    correcta: 'RSE genuina',
    explicacion:
      'Es RSE genuina: integra inclusión social, bienestar interno real y economía circular dentro de sus procesos cotidianos.',
  },
];

const OPCIONES_GW = ['RSE genuina', 'Greenwashing'];

const ODS_TI = [
  {
    id: 'ods8',
    codigo: 'ODS 8',
    titulo: 'Trabajo decente y crecimiento económico',
    enfoque: 'Promover empleo formal, entornos laborales seguros, igualdad salarial y productividad sostenible.',
    ejemploAccion:
      'Establecer planeación realista de sprints sin horas extra no remuneradas y un plan formal de capacitación técnica anual.',
    ejemploIndicador:
      'Tasa de rotación voluntaria menor al 10% anual y ≥ 90% de entregas realizadas dentro de la jornada laboral ordinaria.',
  },
  {
    id: 'ods9',
    codigo: 'ODS 9',
    titulo: 'Industria, innovación e infraestructura',
    enfoque: 'Construir infraestructuras tecnológicas resilientes, accesibles e inclusivas que impulsen la innovación responsable.',
    ejemploAccion:
      'Diseñar la plataforma web con cumplimiento WCAG 2.1 AA y modo ligero para funcionar en conexiones móviles lentas.',
    ejemploIndicador:
      '100% de pantallas principales aprobadas en auditoría de accesibilidad y peso de carga inicial menor a 1 MB.',
  },
  {
    id: 'ods12',
    codigo: 'ODS 12',
    titulo: 'Producción y consumo responsables',
    enfoque: 'Reducir residuos electrónicos (e-waste), alargar la vida útil del hardware y evitar la obsolescencia programada.',
    ejemploAccion:
      'Mantener soporte de software para dispositivos de gama baja y gestionar la baja de equipos con recicladores certificados.',
    ejemploIndicador:
      'Vida útil promedio de equipos ampliada a 5 años y 100% de residuos electrónicos con manifiesto de reciclaje certificado.',
  },
  {
    id: 'ods13',
    codigo: 'ODS 13',
    titulo: 'Acción por el clima',
    enfoque: 'Medir y disminuir las emisiones de gases de efecto invernadero derivadas de centros de datos, redes y operación.',
    ejemploAccion:
      'Migrar cargas de trabajo a regiones de nube con energía renovable y aplicar prácticas de Green Software para reducir uso de CPU.',
    ejemploIndicador:
      'Reducción del 25% en kWh estimados por cada 10,000 peticiones atendidas y tablero trimestral de emisiones ESG.',
  },
];

export default function Tema52Sustentabilidad() {
  // Dinámica 1: Simulador de 4 dimensiones
  const [activas, setActivas] = useState(['cloud', 'accesibilidad']);

  // Dinámica 2: Detector de Greenwashing
  const [dictamenes, setDictamenes] = useState({});
  const [gwComprobado, setGwComprobado] = useState(false);

  // Dinámica 3: Constructor ODS
  const [odsId, setOdsId] = useState('ods9');
  const [compromisos, setCompromisos] = useState({});
  const [mostrarEjemploOds, setMostrarEjemploOds] = useState(false);

  const toggleDecision = (id) => {
    setActivas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const puntajes = DECISIONES_STARTUP.reduce(
    (acc, dec) => {
      if (!activas.includes(dec.id)) return acc;
      return {
        ambiental: acc.ambiental + dec.impacto.ambiental,
        social: acc.social + dec.impacto.social,
        economica: acc.economica + dec.impacto.economica,
        tecnologica: acc.tecnologica + dec.impacto.tecnologica,
      };
    },
    { ambiental: 20, social: 20, economica: 20, tecnologica: 20 }
  );

  const promedioEsg = Math.round(
    (puntajes.ambiental + puntajes.social + puntajes.economica + puntajes.tecnologica) / 4
  );

  let perfilEsg = 'Riesgo operativo y reputacional alto: la empresa opera bajo un enfoque reactivo de corto plazo.';
  if (promedioEsg >= 85) {
    perfilEsg =
      'Perfil ESG sobresaliente: la startup integra sustentabilidad en sus 4 dimensiones y está lista para auditorías ISO 26000 o Distintivo ESR.';
  } else if (promedioEsg >= 55) {
    perfilEsg =
      'Perfil en transición: existen avances valiosos, pero aún hay brechas que atender para lograr una operación verdaderamente sustentable.';
  }

  const aciertosGw = CASOS_GREENWASHING.filter(
    (item) => dictamenes[item.id] === item.correcta
  ).length;

  const odsActual = ODS_TI.find((o) => o.id === odsId);
  const borradorActual = compromisos[odsId] ?? { accion: '', indicador: '' };

  const actualizarCompromiso = (campo, valor) => {
    setCompromisos((prev) => ({
      ...prev,
      [odsId]: {
        ...(prev[odsId] ?? { accion: '', indicador: '' }),
        [campo]: valor,
      },
    }));
  };

  const odsCompletados = Object.values(compromisos).filter(
    (c) => c.accion.trim().length >= 8 && c.indicador.trim().length >= 5
  ).length;

  return (
    <div>
      <div className="u5-bloque-encabezado">
        <h2>Práctica 14 · Responsabilidad social y sustentabilidad (5.2)</h2>
        <p>
          Evalúa el impacto de decisiones técnicas en las cuatro dimensiones de la sustentabilidad,
          detecta casos de greenwashing y formula compromisos alineados a la Agenda 2030.
        </p>
      </div>

      {/* DINÁMICA 1: SIMULADOR DE IMPACTO EN 4 DIMENSIONES */}
      <article className="practica">
        <h3>Simulador · Balance sostenible de una startup tecnológica</h3>
        <p>
          Alterna cada decisión entre el enfoque <strong>Tradicional</strong> y el{' '}
          <strong>Sostenible</strong> para observar cómo cambian en tiempo real las cuatro
          dimensiones y el perfil ESG global de la empresa:
        </p>

        <div className="u5-sim-grid">
          {DIMENSIONES.map((dim) => {
            const valor = puntajes[dim.id];
            const nivel = valor >= 75 ? '' : valor >= 45 ? 'medio' : 'bajo';
            return (
              <div key={dim.id} className="u5-meter-card">
                <div className="u5-meter-head">
                  <span>{dim.label}</span>
                  <span>{valor}%</span>
                </div>
                <div className="u5-meter-track">
                  <div
                    className={`u5-meter-fill ${nivel}`}
                    style={{ width: `${valor}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="u5-decisiones-list">
          {DECISIONES_STARTUP.map((dec) => {
            const esSostenible = activas.includes(dec.id);
            return (
              <div
                key={dec.id}
                className={`u5-decision-row ${esSostenible ? 'activa' : ''}`}
              >
                <div>
                  <strong>{dec.titulo}</strong>
                  <small>
                    {esSostenible ? `Sostenible: ${dec.sostenible}` : `Tradicional: ${dec.tradicional}`}
                  </small>
                </div>

                <button
                  type="button"
                  className={`u5-toggle-btn ${esSostenible ? 'sostenible' : ''}`}
                  aria-pressed={esSostenible}
                  onClick={() => toggleDecision(dec.id)}
                >
                  {esSostenible ? '✓ Modo sostenible' : 'Cambiar a sostenible'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="resultado">
          <strong>Índice ESG estimado: {promedioEsg}%</strong> ({activas.length} de{' '}
          {DECISIONES_STARTUP.length} prácticas sostenibles activas).
          <p>{perfilEsg}</p>
        </div>
      </article>

      {/* DINÁMICA 2: DETECTOR DE GREENWASHING VS RSE GENUINA */}
      <article className="practica">
        <h3>Detector · ¿RSE genuina o Greenwashing?</h3>
        <p>
          Analiza cada práctica empresarial y determina si cuenta con sustento verificable o si se
          trata únicamente de ecoblanqueo (<em>greenwashing</em>):
        </p>

        <div className="u5-arco-grid">
          {CASOS_GREENWASHING.map((item) => {
            const elegida = dictamenes[item.id];
            const correcta = elegida === item.correcta;
            let claseTicket = 'u5-arco-ticket';
            if (gwComprobado) claseTicket += correcta ? ' ok' : ' err';

            return (
              <div key={item.id} className={claseTicket}>
                <p style={{ margin: 0 }}>{item.caso}</p>
                <div className="u5-arco-btns">
                  {OPCIONES_GW.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`u5-arco-btn ${elegida === opt ? 'elegido' : ''}`}
                      onClick={() => {
                        setGwComprobado(false);
                        setDictamenes((prev) => ({ ...prev, [item.id]: opt }));
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {gwComprobado && (
                  <p className={correcta ? 'u5-nota-ok' : 'u5-nota-error'}>
                    {correcta ? `Correcto: ${item.explicacion}` : item.explicacion}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setGwComprobado(true)}>
            Comprobar dictámenes
          </button>
          <button
            type="button"
            onClick={() => {
              setDictamenes({});
              setGwComprobado(false);
            }}
          >
            Reiniciar
          </button>
        </div>

        {gwComprobado && (
          <div className="resultado">
            Resultado: <strong>{aciertosGw} de {CASOS_GREENWASHING.length}</strong> casos
            identificados correctamente.
          </div>
        )}
      </article>

      {/* DINÁMICA 3: CONSTRUCTOR DE COMPROMISO ODS */}
      <article className="practica">
        <h3>Constructor de compromiso · Agenda 2030 en proyectos de TI</h3>
        <p>
          Elige uno de los 4 <strong>Objetivos de Desarrollo Sostenible (ODS)</strong> clave para
          empresas tecnológicas, redacta una acción técnica concreta y define el indicador medible
          para evitar caer en <em>greenwashing</em>:
        </p>

        <div className="selectores">
          {ODS_TI.map((ods) => (
            <button
              key={ods.id}
              type="button"
              aria-pressed={odsId === ods.id}
              onClick={() => setOdsId(ods.id)}
            >
              {ods.codigo} · {ods.titulo.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="u5-ods-info">
          <strong>
            {odsActual.codigo}: {odsActual.titulo}
          </strong>
          <p style={{ margin: '0.35rem 0 0' }}>{odsActual.enfoque}</p>
        </div>

        <div className="foda">
          <label>
            Acción concreta de software o gestión
            <small>¿Qué cambiaría o implementaría tu empresa tecnológica?</small>
            <textarea
              rows={3}
              placeholder="Ej. Optimizar consultas críticas y habilitar modo accesible WCAG..."
              value={borradorActual.accion}
              onChange={(e) => actualizarCompromiso('accion', e.target.value)}
            />
          </label>
          <label>
            Indicador verificable (KPI)
            <small>¿Con qué dato medible comprobarías el resultado?</small>
            <textarea
              rows={3}
              placeholder="Ej. Reducir 25% el consumo estimado de CPU por petición en 6 meses..."
              value={borradorActual.indicador}
              onChange={(e) => actualizarCompromiso('indicador', e.target.value)}
            />
          </label>
        </div>

        <div className="acciones">
          <button type="button" onClick={() => setMostrarEjemploOds((prev) => !prev)}>
            {mostrarEjemploOds ? 'Ocultar ejemplo de referencia' : `Ver ejemplo para ${odsActual.codigo}`}
          </button>
          <button
            type="button"
            onClick={() => actualizarCompromiso('accion', '') || actualizarCompromiso('indicador', '')}
          >
            Limpiar este ODS
          </button>
        </div>

        <div className="resultado">
          <p style={{ marginTop: 0 }}>
            <strong>Compromisos ODS redactados:</strong> {odsCompletados} / {ODS_TI.length}
          </p>
          {mostrarEjemploOds && (
            <div style={{ marginTop: '0.55rem', fontSize: '0.9rem' }}>
              <p>
                <strong>Ejemplo de acción ({odsActual.codigo}):</strong> {odsActual.ejemploAccion}
              </p>
              <p>
                <strong>Ejemplo de indicador:</strong> {odsActual.ejemploIndicador}
              </p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}