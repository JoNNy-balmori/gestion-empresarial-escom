import { useState } from 'react';
import UnitLayout from '../../components/layout/UnitLayout';
import { unidades } from '../../data/temario';
import { temas } from './contenido';
import Tema41CapitalHumano from './Tema41CapitalHumano';
import Tema42MarcoNormativo from './Tema42MarcoNormativo';
import Tema43Calidad from './Tema43Calidad';
import Tema44Herramientas from './Tema44Herramientas';
import EvaluacionUnidad4 from './EvaluacionUnidad4';
import './Unidad4.css';

export default function Unidad4() {
  const [seccion, setSeccion] = useState('4.1');

  return (
    <UnitLayout unidad={unidades[3]} temas={temas}>
      <section className="practicas">
        <div className="int3-practicas-intro">
          <h2>Laboratorio interactivo y prácticas (Unidad IV)</h2>
          <p>
            Explora a profundidad cada tema con simuladores, comparativas y retos prácticos basados
            en las actividades 9 a 12 del programa oficial.
          </p>
        </div>

        <div className="int3-tabs" role="tablist">
          {[
            { id: '4.1', label: '4.1 Capital humano' },
            { id: '4.2', label: '4.2 Marco normativo' },
            { id: '4.3', label: '4.3 Calidad' },
            { id: '4.4', label: '4.4 Herramientas' },
            { id: 'practica', label: 'Evaluación Unidad IV' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`int3-tab ${seccion === tab.id ? 'active' : ''}`}
              onClick={() => setSeccion(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {seccion === '4.1' && <Tema41CapitalHumano />}
        {seccion === '4.2' && <Tema42MarcoNormativo />}
        {seccion === '4.3' && <Tema43Calidad />}
        {seccion === '4.4' && <Tema44Herramientas />}
        {seccion === 'practica' && <EvaluacionUnidad4 />}
      </section>
    </UnitLayout>
  );
}