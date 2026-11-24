import UnitLayout from '../../components/layout/UnitLayout';
import { unidades } from '../../data/temario';
import { temas } from './contenido';

export default function Unidad5() {
  return <UnitLayout unidad={unidades[4]} temas={temas} />;
}
