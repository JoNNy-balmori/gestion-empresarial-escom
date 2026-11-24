import { useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { unidades } from './data/temario';
import Unidad1 from './unidades/unidad-1/Unidad1';
import Unidad2 from './unidades/unidad-2/Unidad2';
import Unidad3 from './pages/unidad-3/Unidad3';
import Unidad4 from './pages/unidad-4/Unidad4';
import Unidad5 from './unidades/unidad-5/Unidad5';
import Recursos from './pages/recursos/Recursos';

function Inicio() {
  return (
    <section className="portada">
      <div className="membrete">
        <span>Instituto Politécnico Nacional</span>
        <span>Escuela Superior de Cómputo</span>
      </div>
      <h1 className="rotulo">Gestión Empresarial</h1>
      <svg className="subrayado" viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 12 C 78 3, 190 16, 296 7" />
      </svg>
      <p className="competencia">
        Material didáctico basado en el temario oficial de la Unidad de Aprendizaje: Gestión
        empresarial. Consulta abierta para estudiantes y apoyo en clase.
      </p>
      <h2>Recorrido del semestre</h2>
      <ol className="portada-lista">
        {unidades.map((unidad) => (
          <li key={unidad.id}>
            <NavLink to={unidad.ruta}>
              <span>{unidad.numero}</span>
              {unidad.titulo}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/recursos">
            <span>R</span>
            Bibliografía y recursos digitales
          </NavLink>
        </li>
      </ol>
    </section>
  );
}

function ScrollAlCambiarRuta() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollAlCambiarRuta />
      <nav className="navegacion" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        {unidades.map((unidad) => (
          <NavLink key={unidad.id} to={unidad.ruta}>
            Unidad {unidad.numero}
          </NavLink>
        ))}
        <NavLink to="/recursos">Recursos</NavLink>
      </nav>

      <main>
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
