import UnitLayout from '../../components/layout/UnitLayout';
import { MiniQuiz } from '../../components/interactive/Practicas';
import { CasosInteractivos } from '../../components/interactive/Simuladores';
import { unidades } from '../../data/temario';
import { temas } from './contenido';
import { casosDigitales, preguntasDigitales } from './practicasDigitales';
import Tema51AspectosLegales from './Tema51AspectosLegales';
import Tema52Sustentabilidad from './Tema52Sustentabilidad';

export default function Unidad5() {
  return (
    <UnitLayout unidad={unidades[4]} temas={temas}>
      <div className="practicas">
        <Tema51AspectosLegales />
        <hr className="u5-separador" />
        <Tema52Sustentabilidad />
        <hr className="u5-separador" />
        <CasosInteractivos titulo="Práctica · Habilidades y tecnologías digitales" casos={casosDigitales} />
        <MiniQuiz preguntas={preguntasDigitales} />
      </div>
    </UnitLayout>
  );
}