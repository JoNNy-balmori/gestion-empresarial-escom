import { useState } from 'react';

const figuras = [
  {
    nombre: 'Sociedad Anónima',
    ley: 'Ley General de Sociedades Mercantiles',
    dato: 'Capital dividido en acciones; la responsabilidad de los socios se limita a sus aportaciones.',
  },
  {
    nombre: 'Sociedad de Responsabilidad Limitada',
    ley: 'Ley General de Sociedades Mercantiles',
    dato: 'Capital dividido en participaciones y número limitado de socios.',
  },
  {
    nombre: 'Sociedad en Nombre Colectivo',
    ley: 'Ley General de Sociedades Mercantiles',
    dato: 'Todos los socios responden de manera ilimitada y solidaria por las obligaciones sociales.',
  },
  {
    nombre: 'Sociedad Civil',
    ley: 'Código Civil Federal, Título XI',
    dato: 'Socios que combinan recursos o esfuerzos para un fin de carácter preponderantemente económico, sin especulación comercial (art. 2688).',
  },
];

const criterios = [
  'Describe un resultado, no una actividad',
  'Define un plazo',
  'Indica cómo se comprobará',
  'Señala quién es responsable',
];

const ordenCorrecto = [
  'Diagnóstico',
  'Objetivos',
  'Estrategias',
  'Planes, programas, presupuestos y procedimientos',
  'Control',
];

const cuadrantes = [
  ['Fortalezas', '¿Qué hacemos bien?'],
  ['Oportunidades', '¿Qué nos favorece afuera?'],
  ['Debilidades', '¿Qué debemos mejorar?'],
  ['Amenazas', '¿Qué nos pone en riesgo?'],
];

const vertices = [
  'Condiciones de los factores: talento y recursos',
  'Condiciones de la demanda',
  'Industrias relacionadas',
  'Estrategia, estructura y rivalidad',
];

export function ConstitucionLegal() {
  const [activa, setActiva] = useState(0);
  const figura = figuras[activa];

  return (
    <section className="practica" id="practica-1">
      <h3>Práctica 1 · Constitución legal</h3>
      <p>Elige una figura jurídica y comprueba qué ley la rige y qué característica la distingue.</p>
      <div className="selectores" role="group" aria-label="Figuras jurídicas">
        {figuras.map((opcion, indice) => (
          <button
            key={opcion.nombre}
            type="button"
            aria-pressed={activa === indice}
            onClick={() => setActiva(indice)}
          >
            {opcion.nombre}
          </button>
        ))}
      </div>
      <div className="resultado" aria-live="polite">
        <b>{figura.nombre}</b>
        <p>
          <span className="resaltado">{figura.ley}</span>
        </p>
        <p>{figura.dato}</p>
      </div>
    </section>
  );
}

export function Objetivos() {
  const [texto, setTexto] = useState('');
  const [marcados, setMarcados] = useState(criterios.map(() => false));
  const total = marcados.filter(Boolean).length;

  return (
    <section className="practica" id="practica-2">
      <h3>Práctica 2 · Escribe un objetivo</h3>
      <p>Redacta el objetivo de un proyecto y marca los criterios que cumple.</p>
      <label className="campo">
        Mi objetivo
        <textarea
          rows="3"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Ejemplo: Reducir el tiempo de respuesta en 20% antes de diciembre."
        />
      </label>
      <fieldset className="criterios">
        <legend>Revisa tu objetivo</legend>
        {criterios.map((criterio, indice) => (
          <label key={criterio}>
            <input
              type="checkbox"
              checked={marcados[indice]}
              onChange={() =>
                setMarcados((anteriores) =>
                  anteriores.map((valor, posicion) => (posicion === indice ? !valor : valor)),
                )
              }
            />
            {criterio}
          </label>
        ))}
      </fieldset>
      <p className="resultado" aria-live="polite">
        {texto.trim() === ''
          ? 'Escribe un objetivo para empezar.'
          : `${total} de ${criterios.length} criterios marcados. Ajusta lo que falte.`}
      </p>
    </section>
  );
}

export function OrdenPlaneacion() {
  const [pasos, setPasos] = useState([
    'Estrategias',
    'Control',
    'Diagnóstico',
    'Planes, programas, presupuestos y procedimientos',
    'Objetivos',
  ]);
  const [mensaje, setMensaje] = useState('');

  function subir(indice) {
    if (indice === 0) return;
    setPasos((anteriores) => {
      const siguiente = [...anteriores];
      [siguiente[indice - 1], siguiente[indice]] = [siguiente[indice], siguiente[indice - 1]];
      return siguiente;
    });
    setMensaje('');
  }

  return (
    <section className="practica" id="practica-3">
      <h3>Práctica 3 · Orden de la planeación</h3>
      <p>Usa «Subir» hasta dejar los pasos en el orden correcto y comprueba tu respuesta.</p>
      <ol className="pasos">
        {pasos.map((paso, indice) => (
          <li key={paso}>
            <span>{paso}</span>
            <button type="button" onClick={() => subir(indice)} disabled={indice === 0}>
              Subir
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="accion"
        onClick={() =>
          setMensaje(
            pasos.join('|') === ordenCorrecto.join('|')
              ? 'Correcto: se diagnostica, se deciden objetivos y estrategias, se asignan recursos y se controla.'
              : 'Todavía no. Revisa qué paso debe venir antes de los demás.',
          )
        }
      >
        Comprobar orden
      </button>
      <p className="resultado" aria-live="polite">
        {mensaje}
      </p>
    </section>
  );
}

export function FodaDiamante() {
  const [foda, setFoda] = useState(cuadrantes.map(() => ''));
  const [diamante, setDiamante] = useState(vertices);

  return (
    <section className="practica" id="practica-4">
      <h3>Práctica 4 · FODA y Diamante de Porter</h3>
      <p>Anota los cuatro cuadrantes y nombra los vértices del diamante de tu sector.</p>
      <div className="foda">
        {cuadrantes.map(([nombre, pista], indice) => (
          <label key={nombre}>
            {nombre}
            <small>{pista}</small>
            <textarea
              rows="2"
              value={foda[indice]}
              onChange={(evento) =>
                setFoda((anteriores) =>
                  anteriores.map((valor, posicion) =>
                    posicion === indice ? evento.target.value : valor,
                  ),
                )
              }
            />
          </label>
        ))}
      </div>
      <div className="diamante">
        <svg viewBox="0 0 300 210" aria-hidden="true">
          <polygon points="150,12 288,105 150,198 12,105" />
          <line x1="150" y1="12" x2="150" y2="198" />
          <line x1="12" y1="105" x2="288" y2="105" />
          <text x="150" y="104" textAnchor="middle">1</text>
          <text x="232" y="101" textAnchor="middle">2</text>
          <text x="150" y="188" textAnchor="middle">3</text>
          <text x="68" y="101" textAnchor="middle">4</text>
        </svg>
        <div className="vertices">
          {diamante.map((vertice, indice) => (
            <label key={indice}>
              {indice + 1}
              <input
                value={vertice}
                onChange={(evento) =>
                  setDiamante((anteriores) =>
                    anteriores.map((valor, posicion) =>
                      posicion === indice ? evento.target.value : valor,
                    ),
                  )
                }
              />
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MiniQuiz({ preguntas }) {
  const [seleccion, setSeleccion] = useState(preguntas.map(() => null));
  const [entregado, setEntregado] = useState(false);
  const aciertos = seleccion.reduce(
    (total, respuesta, indice) => total + (respuesta === preguntas[indice].respuesta ? 1 : 0),
    0,
  );

  return (
    <section className="practica" id="repaso">
      <h3>Repaso · cinco preguntas</h3>
      <p>Selecciona una respuesta por pregunta. El puntaje es solo para tu consulta.</p>
      {preguntas.map((pregunta, indice) => (
        <fieldset key={pregunta.pregunta} className="pregunta">
          <legend>
            {indice + 1}. {pregunta.pregunta}
          </legend>
          {pregunta.opciones.map((opcion, opcionIndice) => (
            <label key={opcion}>
              <input
                type="radio"
                name={`pregunta-${indice}`}
                checked={seleccion[indice] === opcionIndice}
                onChange={() =>
                  setSeleccion((anteriores) =>
                    anteriores.map((valor, posicion) => (posicion === indice ? opcionIndice : valor)),
                  )
                }
              />
              {opcion}
            </label>
          ))}
          {entregado && (
            <p className="respuesta">
              Respuesta: {pregunta.opciones[pregunta.respuesta]}
            </p>
          )}
        </fieldset>
      ))}
      <div className="acciones">
        <button type="button" className="accion" onClick={() => setEntregado(true)}>
          Comprobar respuestas
        </button>
        <button
          type="button"
          onClick={() => {
            setSeleccion(preguntas.map(() => null));
            setEntregado(false);
          }}
        >
          Repetir
        </button>
      </div>
      <p className="resultado" aria-live="polite">
        {entregado ? `Aciertos: ${aciertos} de ${preguntas.length}.` : ''}
      </p>
    </section>
  );
}
