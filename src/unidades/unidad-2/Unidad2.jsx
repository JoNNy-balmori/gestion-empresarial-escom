import UnitLayout from '../../components/layout/UnitLayout';
import { FodaDiamante, MiniQuiz, OrdenPlaneacion } from '../../components/interactive/Practicas';
import { unidades } from '../../data/temario';
import { preguntas, temas } from './contenido';

export default function Unidad2() {
  return (
    <UnitLayout unidad={unidades[1]} temas={temas}>
      <div className="practicas">
        <OrdenPlaneacion />
        <FodaDiamante />
        <MiniQuiz preguntas={preguntas} />
      </div>
    </UnitLayout>
  );
}
