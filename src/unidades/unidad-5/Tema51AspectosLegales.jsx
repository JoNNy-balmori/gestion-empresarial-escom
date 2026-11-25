import { useState } from 'react';
import './Unidad5Legal.css';

const OPCIONES_PI = [
  'Derechos de Autor (INDAUTOR)',
  'Marca / Propiedad Industrial (IMPI)',
  'Patente / Propiedad Industrial (IMPI)',
  'Secreto Industrial (LFPPI / NDA)',
];

const ACTIVOS_STARTUP = [
  {
    id: 'codigo',
    activo: 'Código fuente de una plataforma web en React y su manual técnico de usuario.',
    correcta: 'Derechos de Autor (INDAUTOR)',
    motivo: 'En México el software se registra ante INDAUTOR como programa de cómputo.',
  },
  {
    id: 'marca',
    activo: 'Nombre comercial y logotipo distintivo de la aplicación en tiendas digitales.',
    correcta: 'Marca / Propiedad Industrial (IMPI)',
    motivo: 'Los signos distintivos (nombre, logo, eslogan) se protegen como marca ante el IMPI.',
  },
  {
    id: 'algoritmo',
    activo: 'Algoritmo privado de precios dinámicos resguardado internamente bajo contratos NDA.',
    correcta: 'Secreto Industrial (LFPPI / NDA)',
    motivo: 'Otorga ventaja competitiva mientras se mantenga confidencial con medidas reales de resguardo.',
  },
  {
    id: 'iot',
    activo: 'Dispositivo IoT con un sensor electromecánico novedoso y aplicación industrial comprobable.',
    correcta: 'Patente / Propiedad Industrial (IMPI)',
    motivo: 'Las invenciones técnicas nuevas con actividad inventiva y aplicación industrial se patentan ante el IMPI.',
  },
  {
    id: 'bd',
    activo: 'Base de datos original de ejercicios didácticos redactados por el equipo académico.',
    correcta: 'Derechos de Autor (INDAUTOR)',
    motivo: 'Las compilaciones y bases de datos originales se protegen por derechos de autor ante INDAUTOR.',
  },
];

const LICENCIAS_SEMAFORO = [
  {
    id: 'mit',
    nombre: 'MIT',
    nivel: 'verde',
    veredicto: 'Compatible con software comercial cerrado',
    obligaciones:
      'Conservar el aviso de derechos de autor y el texto original de la licencia MIT dentro de tu distribución.',
    riesgo:
      'Muy bajo. Permite usar, modificar y vender el producto sin obligarte a liberar tu código fuente propio.',
    ejemplo:
      'Librerías como React o Vite usan licencia MIT; puedes crear una app comercial cerrada sin conflicto.',
  },
  {
    id: 'apache',
    nombre: 'Apache 2.0',
    nivel: 'verde',
    veredicto: 'Compatible con software comercial cerrado (con atribución)',
    obligaciones:
      'Incluir copia de la licencia, conservar avisos de atribución (NOTICE) y documentar si modificaste archivos originales.',
    riesgo:
      'Bajo. Además otorga concesión expresa de patentes sobre el código aportado por sus autores.',
    ejemplo:
      'Ecosistemas como Android (AOSP), Kubernetes o TensorFlow se distribuyen bajo Apache 2.0.',
  },
  {
    id: 'gpl',
    nombre: 'GPL (Copyleft)',
    nivel: 'amarillo',
    veredicto: 'Precaución: exige liberar derivados bajo GPL',
    obligaciones:
      'Si integras y distribuyes código GPL dentro de tu producto, debes liberar también el código fuente de tu obra derivada bajo la misma licencia GPL.',
    riesgo:
      'Alto en productos cerrados: incumplir el efecto copyleft expone a la empresa a demandas por infracción de derechos de autor.',
    ejemplo:
      'Herramientas basadas en el núcleo Linux o librerías GPL estrictas requieren revisión legal antes de empaquetarse en software propietario.',
  },
  {
    id: 'cc-nc',
    nombre: 'Creative Commons BY-NC',
    nivel: 'rojo',
    veredicto: 'No permitido para fines comerciales',
    obligaciones:
      'La cláusula NC (No Comercial) restringe el recurso a usos educativos o personales; además BY exige atribución explícita al autor.',
    riesgo:
      'Infracción directa si usas ilustraciones, fotos o música CC BY-NC en una app con suscripción, anuncios o venta.',
    ejemplo:
      'Para un producto comercial debes elegir recursos CC BY, CC0 (dominio público) o adquirir una licencia comercial.',
  },
  {
    id: 'eula',
    nombre: 'Propietario (EULA)',
    nivel: 'rojo',
    veredicto: 'Restringido a los términos del contrato pagado',
    obligaciones:
      'Solo puedes instalarlo o integrarlo según el número de usuarios, servidores y alcances autorizados en el contrato (EULA).',
    riesgo:
      'Usar licencias piratas o exceder puestos contratados genera auditorías, multas y responsabilidad penal o civil.',
    ejemplo:
      'Motores comerciales, fuentes tipográficas de pago o SDKs corporativos requieren licencia empresarial vigente.',
  },
];

const SOLICITUDES_ARCO = [
  {
    id: 'arco-1',
    mensaje:
      '«Quiero recibir un archivo con todos los datos personales que tienen guardados sobre mi cuenta y saber para qué los utilizan.»',
    correcta: 'Acceso',
    explicacion: 'El derecho de Acceso permite al titular conocer qué datos posee la empresa y sus condiciones de uso.',
  },
  {
    id: 'arco-2',
    mensaje:
      '«Mi apellido aparece mal escrito en sus registros y cambié de correo electrónico; solicito que actualicen mi perfil.»',
    correcta: 'Rectificación',
    explicacion: 'La Rectificación obliga al responsable a corregir datos inexactos, incompletos o desactualizados.',
  },
  {
    id: 'arco-3',
    mensaje:
      '«Ya no usaré la plataforma; solicito que eliminen mis datos personales de sus bases de datos.»',
    correcta: 'Cancelación',
    explicacion: 'La Cancelación permite pedir la supresión de los datos cuando ya no son necesarios para la finalidad contratada.',
  },
  {
    id: 'arco-4',
    mensaje:
      '«Quiero seguir usando la app, pero prohíbo que utilicen mi teléfono o correo para enviarme publicidad de terceros.»',
    correcta: 'Oposición',
    explicacion: 'La Oposición permite negarse al tratamiento de datos para finalidades secundarias (como mercadotecnia) sin cerrar la cuenta.',
  },
];

const LETRAS_ARCO = ['Acceso', 'Rectificación', 'Cancelación', 'Oposición'];

const CHECKLIST_PRIVACIDAD = [
  {
    id: 'aviso',
    texto: 'Mostrar un Aviso de Privacidad claro y accesible antes de recabar cualquier dato en el formulario.',
  },
  {
    id: 'finalidad',
    texto: 'Explicar explícitamente qué datos se solicitan, para qué finalidad y si se comparten con terceros.',
  },
  {
    id: 'canal-arco',
    texto: 'Indicar un correo o mecanismo verificable para atender solicitudes de Derechos ARCO en tiempo y forma.',
  },
  {
    id: 'cia',
    texto: 'Aplicar medidas de la tríada CIA: cifrado HTTPS, contraseñas con hash, control de accesos y respaldos.',
  },
  {
    id: 'sensibles',
    texto: 'Pedir consentimiento expreso (y reforzar la seguridad) si se recaban datos sensibles como salud o biometría.',
  },
];

export default function Tema51AspectosLegales() {
  // Dinámica 1: Clasificador PI
  const [clasificacion, setClasificacion] = useState({});
  const [piComprobado, setPiComprobado] = useState(false);

  // Dinámica 2: Semáforo de licencias
  const [licenciaId, setLicenciaId] = useState('mit');

  // Dinámica 3A: Mesa ARCO
  const [respuestasArco, setRespuestasArco] = useState({});
  const [arcoComprobado, setArcoComprobado] = useState(false);

  // Dinámica 3B: Checklist de Aviso de Privacidad
  const [checksPrivacidad, setChecksPrivacidad] = useState([]);

  const licenciaActual = LICENCIAS_SEMAFORO.find((l) => l.id === licenciaId);

  const aciertosPi = ACTIVOS_STARTUP.filter(
    (item) => clasificacion[item.id] === item.correcta
  ).length;

  const aciertosArco = SOLICITUDES_ARCO.filter(
    (item) => respuestasArco[item.id] === item.correcta
  ).length;

  const toggleCheck = (id) => {
    setChecksPrivacidad((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <div className="u5-bloque-encabezado">
        <h2>Práctica 13 · Aspectos legales en empresas tecnológicas (5.1)</h2>
        <p>
          Aplica el marco legal mexicano de propiedad intelectual, licenciamiento de software y
          protección de datos personales (LFPDPPP) en escenarios reales de ingeniería.
        </p>
      </div>

      {/* DINÁMICA 1: CLASIFICADOR DE PROPIEDAD INTELECTUAL */}
      <article className="practica">
        <h3>5.1.1 Clasificador legal de una startup (INDAUTOR vs. IMPI)</h3>
        <p>
          Asigna a cada activo digital o tecnológico la figura jurídica y autoridad que corresponde
          en México para protegerlo adecuadamente.
        </p>

        <div className="u5-match-list">
          {ACTIVOS_STARTUP.map((item) => {
            const elegida = clasificacion[item.id] ?? '';
            const correcta = elegida === item.correcta;
            let claseRow = 'u5-match-row';
            if (piComprobado) claseRow += correcta ? ' ok' : ' err';

            return (
              <div key={item.id} className={claseRow}>
                <div>
                  <span>{item.activo}</span>
                  {piComprobado && (
                    <p className={correcta ? 'u5-nota-ok' : 'u5-nota-error'}>
                      {correcta
                        ? `Correcto: ${item.motivo}`
                        : `Corresponde a ${item.correcta}. ${item.motivo}`}
                    </p>
                  )}
                </div>

                <select
                  aria-label={`Figura legal para: ${item.activo}`}
                  className="u5-select"
                  value={elegida}
                  onChange={(e) => {
                    setPiComprobado(false);
                    setClasificacion((prev) => ({ ...prev, [item.id]: e.target.value }));
                  }}
                >
                  <option value="">Selecciona figura legal...</option>
                  {OPCIONES_PI.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setPiComprobado(true)}>
            Comprobar clasificación
          </button>
          <button
            type="button"
            onClick={() => {
              setClasificacion({});
              setPiComprobado(false);
            }}
          >
            Reiniciar
          </button>
        </div>

        {piComprobado && (
          <div className="resultado">
            Resultado: <strong>{aciertosPi} de {ACTIVOS_STARTUP.length}</strong> activos protegidos
            con la figura correcta.
          </div>
        )}
      </article>

      {/* DINÁMICA 2: SEMÁFORO DE LICENCIAS */}
      <article className="practica">
        <h3>5.1.1 Semáforo de licencias en software comercial</h3>
        <p>
          Imagina que tu equipo planea vender una aplicación comercial cerrada. Selecciona cada
          licencia para evaluar si puedes integrar una librería o recurso de terceros sin riesgo
          legal:
        </p>

        <div className="selectores">
          {LICENCIAS_SEMAFORO.map((lic) => (
            <button
              key={lic.id}
              type="button"
              aria-pressed={licenciaId === lic.id}
              onClick={() => setLicenciaId(lic.id)}
            >
              {lic.nombre}
            </button>
          ))}
        </div>

        <div className="u5-semaforo-card">
          <span className={`u5-badge ${licenciaActual.nivel}`}>{licenciaActual.veredicto}</span>
          <p>
            <strong>Obligaciones clave:</strong> {licenciaActual.obligaciones}
          </p>
          <p>
            <strong>Evaluación de riesgo:</strong> {licenciaActual.riesgo}
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Ejemplo en ISC:</strong> {licenciaActual.ejemplo}
          </p>
        </div>
      </article>

      {/* DINÁMICA 3: MESA DE DERECHOS ARCO + CHECKLIST DE PRIVACIDAD */}
      <article className="practica">
        <h3>5.1.2 Mesa de Derechos ARCO y cumplimiento de privacidad</h3>
        <p>
          Clasifica cada solicitud real de usuario con la letra correspondiente de{' '}
          <strong>ARCO</strong> conforme a la LFPDPPP:
        </p>

        <div className="u5-arco-grid">
          {SOLICITUDES_ARCO.map((ticket) => {
            const elegida = respuestasArco[ticket.id];
            const correcta = elegida === ticket.correcta;
            let claseTicket = 'u5-arco-ticket';
            if (arcoComprobado) claseTicket += correcta ? ' ok' : ' err';

            return (
              <div key={ticket.id} className={claseTicket}>
                <p style={{ margin: 0 }}>{ticket.mensaje}</p>
                <div className="u5-arco-btns">
                  {LETRAS_ARCO.map((letra) => (
                    <button
                      key={letra}
                      type="button"
                      className={`u5-arco-btn ${elegida === letra ? 'elegido' : ''}`}
                      onClick={() => {
                        setArcoComprobado(false);
                        setRespuestasArco((prev) => ({ ...prev, [ticket.id]: letra }));
                      }}
                    >
                      {letra}
                    </button>
                  ))}
                </div>
                {arcoComprobado && (
                  <p className={correcta ? 'u5-nota-ok' : 'u5-nota-error'}>
                    {correcta
                      ? `Correcto (${ticket.correcta}): ${ticket.explicacion}`
                      : `Corresponde a ${ticket.correcta}. ${ticket.explicacion}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="acciones">
          <button type="button" className="accion" onClick={() => setArcoComprobado(true)}>
            Verificar solicitudes ARCO
          </button>
          <button
            type="button"
            onClick={() => {
              setRespuestasArco({});
              setArcoComprobado(false);
            }}
          >
            Limpiar respuestas
          </button>
        </div>

        {arcoComprobado && (
          <div className="resultado">
            Resultado ARCO: <strong>{aciertosArco} de {SOLICITUDES_ARCO.length}</strong> solicitudes
            atendidas correctamente.
          </div>
        )}

        <fieldset className="criterios">
          <legend>Checklist legal antes de lanzar tu plataforma web</legend>
          {CHECKLIST_PRIVACIDAD.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                checked={checksPrivacidad.includes(item.id)}
                onChange={() => toggleCheck(item.id)}
              />
              {item.texto}
            </label>
          ))}
        </fieldset>

        <div className="resultado">
          Cumplimiento verificado: <strong>{checksPrivacidad.length} / 5</strong> requisitos.
          {checksPrivacidad.length === 5 && (
            <p className="respuesta">
              ¡Listo para operar! Tu plataforma cubre las bases legales de privacidad (LFPDPPP) y
              seguridad de la información (tríada CIA).
            </p>
          )}
        </div>
      </article>
    </div>
  );
}