import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Unidad1 from './pages/unidad-1/Unidad1';
import Unidad2 from './pages/unidad-2/Unidad2';
import Unidad3 from './pages/unidad-3/Unidad3';
import Unidad4 from './pages/unidad-4/Unidad4';
import LegalSustentabilidad from './pages/unidad-5/legal-sustentabilidad/LegalSustentabilidad';
import HabilidadesTendencias from './pages/unidad-5/habilidades-tendencias/HabilidadesTendencias';
import Recursos from './pages/recursos/Recursos';

function Inicio() {
  return (
    <section>
      <h1>Gestión Empresarial — ESCOM</h1>
      <p>Plataforma educativa interactiva basada en el programa oficial.</p>
    </section>
  );
}

function Unidad5() {
  return (
    <section>
      <h2>Unidad V: Tendencias en la gestión empresarial</h2>
      <LegalSustentabilidad />
      <HabilidadesTendencias />
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', flexWrap: 'wrap' }}>
        <Link to="/">Inicio</Link>
        <Link to="/unidad-1">Unidad I</Link>
        <Link to="/unidad-2">Unidad II</Link>
        <Link to="/unidad-3">Unidad III</Link>
        <Link to="/unidad-4">Unidad IV</Link>
        <Link to="/unidad-5">Unidad V</Link>
        <Link to="/recursos">Recursos</Link>
      </nav>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/unidad-1" element={<Unidad1 />} />
          <Route path="/unidad-2" element={<Unidad2 />} />
          <Route path="/unidad-3" element={<Unidad3 />} />
          <Route path="/unidad-4" element={<Unidad4 />} />
          <Route path="/unidad-5" element={<Unidad5 />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}