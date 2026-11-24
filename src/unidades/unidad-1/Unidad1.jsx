import UnitLayout from '../../components/layout/UnitLayout';
import { ConstitucionLegal, MiniQuiz, Objetivos } from '../../components/interactive/Practicas';
import { unidades } from '../../data/temario';
import { preguntas, temas } from './contenido';

export default function Unidad1() {
  return (
    <UnitLayout unidad={unidades[0]} temas={temas}>
      <div className="practicas">
        <ConstitucionLegal />
        <Objetivos />
        <MiniQuiz preguntas={preguntas} />
      </div>
    </UnitLayout>
  );
}
