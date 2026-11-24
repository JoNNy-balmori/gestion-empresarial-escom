import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { unidades } from '../../data/temario';

export default function UnitLayout({ unidad, temas, children }) {
  const horas = unidad.horas;
  const total = horas ? horas.teoria + horas.practica + horas.autonomo : null;
  const tienePracticas = Boolean(children);
  const [indiceAbierto, setIndiceAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState(temas[0]?.id);

  const posicion = unidades.findIndex((item) => item.id === unidad.id);
  const siguiente =
    posicion >= 0 && posicion + 1 < unidades.length
      ? unidades[posicion + 1]
      : { ruta: '/recursos', titulo: 'Bibliografía y recursos digitales' };

  useEffect(() => {
    const ids = temas.flatMap((tema) => [
      tema.id,
      ...(tema.subtemas ?? []).map((subtema) => subtema.id),
    ]);

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
  }, [temas]);

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

  const esActivo = (tema) =>
    seccionActiva === tema.id || tema.subtemas?.some((subtema) => subtema.id === seccionActiva);

  return (
    <div className="apunte">
      <aside
        id="indice-apunte"
        className={`indice${indiceAbierto ? ' abierto' : ''}`}
        aria-label="Índice del apunte"
      >
        <h2>Índice del apunte</h2>
        <ol>
          {temas.map((tema) => (
            <li key={tema.id}>
              <a
                href={`#${tema.id}`}
                className={esActivo(tema) ? 'activo' : undefined}
                aria-current={esActivo(tema) ? 'location' : undefined}
                onClick={() => setIndiceAbierto(false)}
              >
                {tema.titulo}
              </a>
            </li>
          ))}
          {tienePracticas && (
            <li>
              <a href="#practicas" onClick={() => setIndiceAbierto(false)}>
                Prácticas y repaso
              </a>
            </li>
          )}
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

        <h1 className="rotulo">{unidad.titulo}</h1>
        <svg className="subrayado" viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
          <path d="M4 12 C 78 3, 190 16, 296 7" />
        </svg>

        <p className="competencia">{unidad.competencia}</p>

        {horas && (
          <p className="horas">
            Teoría <b>{horas.teoria} h</b> · Práctica <b>{horas.practica} h</b> · Autónomo{' '}
            <b>{horas.autonomo} h</b> · Total <b>{total} h</b>
          </p>
        )}

        {tienePracticas && (
          <a className="salto-practica" href="#practicas">
            Ir a la práctica
          </a>
        )}

        {temas.map((tema) => (
          <section key={tema.id} id={tema.id} className="tema">
            <h2>{tema.titulo}</h2>
            <p>{tema.texto}</p>

            {tema.comparativa && (
              <div className="tabla-scroll">
                <table className="comparativa">
                  <tbody>
                    {tema.comparativa.map((fila) => (
                      <tr key={fila[0]}>
                        <th scope="row">{fila[0]}</th>
                        <td>{fila[1]}</td>
                        <td>{fila[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tema.subtemas?.map((subtema) => (
              <section key={subtema.id} id={subtema.id} className="subtema">
                <h3>{subtema.titulo}</h3>
                <p>{subtema.texto}</p>

                {subtema.perspectivas && (
                  <div className="tabla-scroll">
                    <table className="comparativa">
                      <thead>
                        <tr>
                          <th scope="col">Perspectiva</th>
                          <th scope="col">Pregunta</th>
                          <th scope="col">Ejemplos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subtema.perspectivas.map((fila) => (
                          <tr key={fila[0]}>
                            <th scope="row">{fila[0]}</th>
                            <td>{fila[1]}</td>
                            <td>{fila[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </section>
        ))}

        {tienePracticas && <div id="practicas">{children}</div>}

        <footer className="pie-apunte">
          <span>Temario oficial · IPN, Secretaría Académica · Unidad de aprendizaje: Gestión empresarial</span>
          <Link className="siguiente-unidad" to={siguiente.ruta}>
            Siguiente · {siguiente.titulo}
          </Link>
        </footer>
      </article>

      <div className="acciones-flotantes">
        <button
          type="button"
          className="accion-flotante indice-toggle"
          aria-expanded={indiceAbierto}
          aria-controls="indice-apunte"
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
