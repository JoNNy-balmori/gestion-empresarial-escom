import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BIBLIOGRAFIA,
  HERRAMIENTAS_DIGITALES,
  PORTALES_OFICIALES,
  SECCIONES_RECURSOS,
} from './datosRecursos';
import './Recursos.css';

const FILTROS_UNIDAD = ['Todas', 'I', 'II', 'III', 'IV', 'V'];
const FILTROS_TIPO = ['Todas', 'Básica', 'Complementaria', 'De apoyo'];

export default function Recursos() {
  const [indiceAbierto, setIndiceAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState(SECCIONES_RECURSOS[0].id);

  // Filtros de bibliografía
  const [busqueda, setBusqueda] = useState('');
  const [unidadFiltro, setUnidadFiltro] = useState('Todas');
  const [tipoFiltro, setTipoFiltro] = useState('Todas');
  const [copiadaId, setCopiadaId] = useState(null);

  useEffect(() => {
    const ids = SECCIONES_RECURSOS.map((s) => s.id);
    const actualizar = () => {
      let actual = ids[0];
      for (const id of ids) {
        const elemento = document.getElementById(id);
        if (elemento && elemento.getBoundingClientRect().top <= 120) actual = id;
      }
      setSeccionActiva(actual);
    };

    actualizar();
    window.addEventListener('scroll', actualizar, { passive: true });
    return () => window.removeEventListener('scroll', actualizar);
  }, []);

  useEffect(() => {
    if (!indiceAbierto) return undefined;
    const cerrar = (evento) => {
      if (evento.key === 'Escape') setIndiceAbierto(false);
    };
    window.addEventListener('keydown', cerrar);
    return () => window.removeEventListener('keydown', cerrar);
  }, [indiceAbierto]);

  const irArriba = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  const copiarCita = async (id, texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiadaId(id);
      window.setTimeout(() => {
        setCopiadaId((actual) => (actual === id ? null : actual));
      }, 2000);
    } catch {
      setCopiadaId(null);
    }
  };

  const textoNormalizado = busqueda
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  const bibliografiaFiltrada = BIBLIOGRAFIA.filter((item) => {
    const coincideUnidad = unidadFiltro === 'Todas' || item.unidades.includes(unidadFiltro);
    const coincideTipo = tipoFiltro === 'Todas' || item.tipo === tipoFiltro;
    if (!coincideUnidad || !coincideTipo) return false;
    if (!textoNormalizado) return true;

    const bolsa = `${item.autor} ${item.titulo} ${item.editorial} ${item.isbn ?? ''} ${item.anio} ${item.utilidad}`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return bolsa.includes(textoNormalizado);
  });

  const claseBadgeTipo = (tipo) => {
    if (tipo === 'Complementaria') return 'rec-badge teal';
    if (tipo === 'De apoyo') return 'rec-badge secundario';
    return 'rec-badge';
  };

  return (
    <div className="apunte">
      <aside
        id="indice-recursos"
        className={`indice${indiceAbierto ? ' abierto' : ''}`}
        aria-label="Índice de recursos"
      >
        <h2>Índice de consulta</h2>
        <ol>
          {SECCIONES_RECURSOS.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={seccionActiva === sec.id ? 'activo' : undefined}
                aria-current={seccionActiva === sec.id ? 'location' : undefined}
                onClick={() => setIndiceAbierto(false)}
              >
                {sec.titulo}
              </a>
            </li>
          ))}
        </ol>
        <svg className="flecha-indice" viewBox="0 0 120 60" aria-hidden="true">
          <path d="M6 12 C 40 4, 78 18, 112 44" />
          <path d="M94 40 L113 45 L103 27" />
        </svg>
      </aside>

      <article className="hoja">
        <div className="membrete">
          <span>Instituto Politécnico Nacional</span>
          <span>Escuela Superior de Cómputo</span>
        </div>

        <h1 className="rotulo">Bibliografía y recursos digitales</h1>
        <svg className="subrayado" viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
          <path d="M4 12 C 78 3, 190 16, 296 7" />
        </svg>

        <p className="competencia">
          Bibliografía básica, complementaria y recursos digitales del programa oficial de Gestión
          empresarial (Plan de estudios 2020 · ISC, ESCOM-IPN), junto con lecturas de apoyo,
          portales normativos y herramientas técnicas para las prácticas del curso.
        </p>

        {/* 1. BIBLIOGRAFÍA */}
        <section id="bibliografia" className="tema">
          <h2>1. Bibliografía oficial y lecturas de apoyo</h2>
          <p>
            Los títulos etiquetados como <strong>Básica</strong> y <strong>Complementaria</strong>{' '}
            corresponden al programa oficial del IPN; las referencias <strong>De apoyo</strong>{' '}
            complementan las prácticas de estrategia, talento humano, calidad y sustentabilidad.
          </p>

          <div className="rec-filtros">
            <label className="campo">
              Buscar por autor, título, editorial, ISBN o tema
              <input
                type="text"
                placeholder="Ej. Chiavenato, calidad, ERP, Laudon, Pearson..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </label>

            <div>
              <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                Filtrar por unidad:
              </span>
              <div className="selectores">
                {FILTROS_UNIDAD.map((u) => (
                  <button
                    key={u}
                    type="button"
                    aria-pressed={unidadFiltro === u}
                    onClick={() => setUnidadFiltro(u)}
                  >
                    {u === 'Todas' ? 'Todas' : `Unidad ${u}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="rec-filtros-fila">
              <div className="selectores">
                {FILTROS_TIPO.map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={tipoFiltro === t}
                    onClick={() => setTipoFiltro(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <span className="rec-contador">
                Mostrando {bibliografiaFiltrada.length} de {BIBLIOGRAFIA.length} fuentes
              </span>
            </div>
          </div>

          {bibliografiaFiltrada.length > 0 ? (
            <div className="rec-lista-bib">
              {bibliografiaFiltrada.map((item) => {
                const copiada = copiadaId === item.id;
                return (
                  <article key={item.id} className="rec-card">
                    <div className="rec-card-top">
                      <div className="rec-badges">
                        <span className={claseBadgeTipo(item.tipo)}>{item.tipo}</span>
                        <span className="rec-badge secundario">{item.anio}</span>
                        {item.unidades.map((u) => (
                          <span key={u} className="rec-badge secundario">
                            Unidad {u}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className={`rec-btn-copiar ${copiada ? 'copiada' : ''}`}
                        onClick={() => copiarCita(item.id, item.citaApa)}
                      >
                        {copiada ? '✓ Cita copiada' : 'Copiar cita APA'}
                      </button>
                    </div>

                    <p className="rec-cita">
                      <strong>{item.titulo}</strong> — {item.autor} ({item.anio}).
                    </p>
                    <p className="rec-utilidad">
                      <strong>Editorial:</strong> {item.editorial}
                      {item.isbn && (
                        <>
                          {' '}
                          · <strong>ISBN:</strong> {item.isbn}
                        </>
                      )}
                      <br />
                      <strong>Aporte al temario:</strong> {item.utilidad}
                    </p>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rec-vacio">
              <p style={{ margin: '0 0 0.75rem' }}>
                No se encontraron fuentes con los filtros seleccionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setBusqueda('');
                  setUnidadFiltro('Todas');
                  setTipoFiltro('Todas');
                }}
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </section>

        {/* 2. PORTALES NORMATIVOS DE APOYO */}
        <section id="marco-legal" className="tema">
          <h2>2. Portales normativos y organismos de consulta (México)</h2>
          <p>
            Referencias institucionales para verificar la legislación vigente y los marcos de
            propiedad intelectual y sustentabilidad abordados en las unidades I, IV y V.
          </p>

          <div className="tabla-scroll">
            <table className="comparativa">
              <thead>
                <tr>
                  <th scope="col">Institución / Organismo</th>
                  <th scope="col">Marco o consulta principal</th>
                  <th scope="col">Unidades</th>
                  <th scope="col">Acceso</th>
                </tr>
              </thead>
              <tbody>
                {PORTALES_OFICIALES.map((portal) => (
                  <tr key={portal.id}>
                    <th scope="row">{portal.organismo}</th>
                    <td>{portal.tema}</td>
                    <td>{portal.unidades}</td>
                    <td>
                      <a
                        className="rec-enlace"
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir sitio ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. RECURSOS Y HERRAMIENTAS DIGITALES RECOMENDADAS */}
        <section id="herramientas" className="tema">
          <h2>3. Recursos y herramientas digitales recomendadas</h2>
          <p>
              Portales técnicos de libre consulta para complementar las prácticas de licenciamiento,
              calidad del software, accesibilidad web, ERP y análisis sectorial.
            </p>

          <div className="rec-grid-herramientas">
            {HERRAMIENTAS_DIGITALES.map((tool) => (
              <article key={tool.id} className="rec-tool-card">
                <div>
                  <div className="rec-badges">
                    <span className="rec-badge teal">{tool.categoria}</span>
                    <span className="rec-badge secundario">{tool.unidades}</span>
                  </div>
                  <h3>{tool.nombre}</h3>
                  <p>{tool.descripcion}</p>
                </div>

                <a
                  className="rec-enlace"
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explorar recurso ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <footer className="pie-apunte">
          <span>Temario oficial · IPN, Secretaría Académica · Unidad de aprendizaje: Gestión empresarial</span>
          <Link className="siguiente-unidad" to="/">
            Volver al inicio
          </Link>
        </footer>
      </article>

      <div className="acciones-flotantes">
        <button
          type="button"
          className="accion-flotante indice-toggle"
          aria-expanded={indiceAbierto}
          aria-controls="indice-recursos"
          onClick={() => setIndiceAbierto((abierto) => !abierto)}
        >
          {indiceAbierto ? 'Cerrar índice' : 'Índice'}
        </button>
        <button type="button" className="accion-flotante" onClick={irArriba}>
          Ir arriba
        </button>
      </div>
    </div>
  );
}