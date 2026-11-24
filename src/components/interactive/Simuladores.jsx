import { useId, useState } from 'react';

export function PuntoEquilibrio() {
  const [costos, setCostos] = useState('12000');
  const [precio, setPrecio] = useState('500');
  const [variable, setVariable] = useState('300');
  const valido = [costos, precio, variable].every(v => v.trim() !== '' && Number.isFinite(Number(v)) && Number(v) >= 0) && Number(precio) > Number(variable);
  const unidades = valido ? Math.ceil(Number(costos) / (Number(precio) - Number(variable))) : null;
  return (
    <section className="practica">
      <h3>Simulador · Punto de equilibrio</h3>
      <p>Calcula cuántas unidades necesitas vender para cubrir los costos.</p>
      {[["Costos fijos ($)", costos, setCostos], ["Precio por unidad ($)", precio, setPrecio], ["Costo variable por unidad ($)", variable, setVariable]].map(([titulo, valor, actualizar]) => (
        <label className="campo" key={titulo}>{titulo}<input type="number" min="0" step="any" value={valor} onChange={e => actualizar(e.target.value)} /></label>
      ))}
      <p className="resultado" aria-live="polite">{valido ? `Punto de equilibrio: ${unidades} unidades. Margen unitario: $${(Number(precio) - Number(variable)).toFixed(2)}.` : 'Ingresa valores no negativos y un precio mayor al costo variable.'}</p>
      <button type="button" onClick={() => { setCostos('12000'); setPrecio('500'); setVariable('300'); }}>Restablecer</button>
    </section>
  );
}

export function CasosInteractivos({ titulo, casos }) {
  const id = useId();
  const [respuestas, setRespuestas] = useState({});
  const [evaluado, setEvaluado] = useState(false);
  const completos = casos.every((_, i) => respuestas[i] !== undefined);
  const aciertos = casos.filter((caso, i) => respuestas[i] === caso.respuesta).length;
  return (
    <section className="practica">
      <h3>{titulo}</h3>
      <p>Selecciona la alternativa más adecuada para cada situación.</p>
      {casos.map((caso, i) => (
        <fieldset key={i} className="pregunta">
          <legend>{i + 1}. {caso.pregunta}</legend>
          {caso.opciones.map((opcion, j) => (
            <label key={opcion}><input type="radio" name={`${id}-${i}`} checked={respuestas[i] === j} disabled={evaluado} onChange={() => setRespuestas(prev => ({ ...prev, [i]: j }))} />{opcion}</label>
          ))}
          {evaluado && <p className="respuesta">{respuestas[i] === caso.respuesta ? 'Correcto. ' : `Respuesta correcta: ${caso.opciones[caso.respuesta]}. `}{caso.explicacion}</p>}
        </fieldset>
      ))}
      <div className="acciones">
        <button type="button" className="accion" disabled={!completos || evaluado} onClick={() => setEvaluado(true)}>Comprobar</button>
        <button type="button" onClick={() => { setRespuestas({}); setEvaluado(false); }}>Repetir</button>
      </div>
      <p className="resultado" aria-live="polite">{evaluado ? `Aciertos: ${aciertos} de ${casos.length}.` : 'Responde todos los casos para comprobar.'}</p>
    </section>
  );
}
