import UnitLayout from '../../components/layout/UnitLayout';
import { MiniQuiz } from '../../components/interactive/Practicas';
import { PuntoEquilibrio, CasosInteractivos } from '../../components/interactive/Simuladores';
import { unidades } from '../../data/temario';
import { temas, casos, preguntas } from './contenido';

export default function Unidad3() {
  return (
    <UnitLayout unidad={unidades[2]} temas={temas}>
      <div className="practicas">
        <PuntoEquilibrio />
        <CasosInteractivos titulo="Práctica · Decisiones operativas" casos={casos} />
        <MiniQuiz preguntas={preguntas} />
      </div>
    </UnitLayout>
  );
}
