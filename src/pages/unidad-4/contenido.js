export const temas = [
  {
    id: '4-1-capital-humano',
    titulo: '4.1 Capital humano',
    texto:
      'Conjunto de conocimientos (saber), habilidades prácticas y experiencia (saber hacer), y actitudes o valores (saber ser) que aportan las personas a la organización. A diferencia de la maquinaria o el equipo físico —que se deprecian con el tiempo—, el capital humano se revaloriza con la formación y constituye la ventaja competitiva real en empresas de innovación tecnológica.',
    comparativa: [
      [
        '1. Administración de personal',
        'Enfoque operativo / tradicional',
        'Ve a las personas como mano de obra y costo controlable; se limita a nómina, asistencia y expedientes.',
      ],
      [
        '2. Recursos Humanos (RR. HH.)',
        'Enfoque funcional / reactivo',
        'Considera al personal como activo necesario; cubre vacantes cuando surgen y administra prestaciones generales.',
      ],
      [
        '3. Gestión del Capital Humano',
        'Enfoque estratégico / preventivo',
        'Integra al talento como socio estratégico del negocio mediante cultura, planes de carrera, bienestar y liderazgo.',
      ],
    ],
    subtemas: [
      {
        id: '4-1-1-funciones',
        titulo: '4.1.1 Funciones del departamento de capital humano',
        texto:
          'Gestiona el ciclo completo del colaborador en siete etapas conectadas: 1) Planeación de talento y análisis de puestos, 2) Reclutamiento y selección por competencias, 3) Inducción y socialización (onboarding), 4) Capacitación y desarrollo (DNC), 5) Evaluación del desempeño, 6) Compensaciones y prestaciones, y 7) Clima organizacional, salud laboral y relaciones laborales.',
      },
    ],
  },
  {
    id: '4-2-marco-normativo',
    titulo: '4.2 Marco normativo de las relaciones laborales',
    texto:
      'En México, las relaciones laborales en el sector privado se rigen jerárquicamente por el Artículo 123 constitucional (Apartado A), la Ley Federal del Trabajo (LFT), las leyes de seguridad social (IMSS, INFONAVIT y AFORE) y las Normas Oficiales Mexicanas de la STPS. Los derechos mínimos laborales son irrenunciables y aplican también en empresas tecnológicas y trabajo remoto.',
    comparativa: [
      [
        'Prestaciones mínimas (LFT)',
        'Derechos irrenunciables vigentes',
        '12 días de vacaciones al cumplir el primer año, 25% mínimo de prima vacacional, 15 días de aguinaldo antes del 20 de diciembre y reparto de utilidades (PTU).',
      ],
      [
        'Seguridad social y retiro',
        'IMSS, INFONAVIT y AFORE',
        'Afiliación obligatoria desde el primer día laboral para atención médica, incapacidades, fondo de vivienda (5%) y ahorro para el retiro.',
      ],
      [
        'NOM-035 y NOM-037 (STPS)',
        'Entorno laboral y teletrabajo',
        'La NOM-035 previene factores de riesgo psicosocial (estrés y acoso); la NOM-037 aplica si más del 40% de la jornada es remota, exigiendo insumos, apoyo de luz/internet y desconexión digital.',
      ],
      [
        'Terminación laboral',
        'Finiquito vs. Liquidación',
        'Por renuncia voluntaria corresponde finiquito (partes proporcionales); por despido injustificado se suma indemnización constitucional de 3 meses de salario y prima de antigüedad.',
      ],
    ],
  },
  {
    id: '4-3-calidad',
    titulo: '4.3 Calidad',
    texto:
      'Conforme al estándar ISO 9000, la calidad es el grado en que un conjunto de características inherentes cumple con los requisitos del cliente, la normatividad y el propósito de uso. Gestionarla impacta cuatro costos: prevención, evaluación, fallas internas y fallas externas (corregir un defecto en producción cuesta varias veces más que prevenirlo en diseño).',
    comparativa: [
      [
        '1. Inspección',
        'Reactiva (al final)',
        'Revisa el producto terminado y descarta defectos; resulta costosa porque el desperdicio y retrabajo ya ocurrieron.',
      ],
      [
        '2. Control de calidad',
        'Estadística (en proceso)',
        'Usa muestras, métricas y gráficas durante la operación para detectar desviaciones a tiempo.',
      ],
      [
        '3. Aseguramiento',
        'Preventiva (estándares)',
        'Documenta procesos, políticas y auditorías (normas ISO, CI/CD, revisiones de código) para asegurar consistencia.',
      ],
      [
        '4. Calidad Total (TQM)',
        'Estratégica (toda la empresa)',
        'Cultura de mejora continua (Kaizen) liderada por la dirección y compartida por todo el personal con foco en el cliente.',
      ],
    ],
    subtemas: [
      {
        id: '4-3-1-control-estadistico',
        titulo: '4.3.1 Control estadístico',
        texto:
          'Aplica métodos cuantitativos para distinguir causas comunes (fluctuaciones naturales del proceso) de causas especiales (anomalías fuera de control que requieren corrección inmediata). Se apoya en las 7 herramientas básicas de Ishikawa: gráficos de control, diagrama de Pareto (80/20), diagrama causa-efecto (6M), hoja de verificación, histograma, diagrama de dispersión y estratificación.',
      },
      {
        id: '4-3-2-calidad-total',
        titulo: '4.3.2 Calidad total',
        texto:
          'Filosofía administrativa (TQM) basada en enfoque al cliente, liderazgo, participación total, decisiones con datos y mejora continua mediante el ciclo PHVA de Deming (Planear, Hacer, Verificar y Actuar). En empresas de software se complementa con estándares como ISO 9001 (gestión organizacional) e ISO/IEC 25010 (calidad del producto software).',
      },
    ],
  },
  {
    id: '4-4-herramientas',
    titulo: '4.4 Herramientas de gestión del Capital Humano y de calidad',
    texto:
      'Metodologías y sistemas que trasladan la calidad y la gestión del talento a la operación diaria: ordenan entornos físicos y digitales, eliminan desperdicios, delimitan responsabilidades por competencias, comparan desempeño frente a líderes del sector e integran la información corporativa.',
    comparativa: [
      [
        "Las 5's",
        'Orden y disciplina operativa',
        'Repositorios limpios, convenciones de nombres, linters (ESLint/Prettier) y auditorías breves por sprint.',
      ],
      [
        'Just in Time (JIT)',
        'Flujo bajo demanda (Pull)',
        'Entregas incrementales ágiles, límites de trabajo en progreso (Kanban) y autoescalado de servidores en la nube.',
      ],
      [
        'Análisis funcional',
        'Competencias por puesto',
        'Mapa funcional descendente que delimita resultados y competencias exactas entre Frontend, Backend, QA y DevOps.',
      ],
      [
        'Benchmarking',
        'Comparación sistemática',
        'Medir tiempos de carga, UX y procesos frente a referentes internos, competitivos o de otras industrias para adaptar mejoras.',
      ],
      [
        'ERP',
        'Base de datos centralizada',
        'Plataformas como SAP, Odoo u Oracle NetSuite que unifican ventas, inventarios, compras, nómina y finanzas en tiempo real.',
      ],
    ],
    subtemas: [
      {
        id: '4-4-1-5s',
        titulo: "4.4.1 Las 5's",
        texto:
          'Metodología japonesa integrada por cinco etapas secuenciales: Seiri (clasificar lo útil y descartar sobrantes), Seiton (ordenar asignando un lugar claro), Seiso (limpiar eliminando fallas y deuda técnica), Seiketsu (estandarizar reglas visuales) y Shitsuke (disciplina mediante revisiones continuas).',
      },
      {
        id: '4-4-2-jit',
        titulo: '4.4.2 Just in Time',
        texto:
          'Sustituye la producción "por si acaso" (push) por un sistema guiado por la demanda real (pull) para combatir los 7 desperdicios (Muda): sobreproducción, esperas, transporte innecesario, sobreprocesamiento, exceso de inventario, movimientos inútiles y defectos. Exige procesos estables y proveedores confiables.',
      },
      {
        id: '4-4-3-analisis-funcional',
        titulo: '4.4.3 Análisis funcional',
        texto:
          'Descompone el propósito clave de la organización en funciones principales, subfunciones y competencias observables mediante un mapa funcional, sirviendo como insumo directo para perfiles de puesto, reclutamiento, capacitación y evaluación del desempeño.',
      },
      {
        id: '4-4-4-benchmarking',
        titulo: '4.4.4 Benchmarking',
        texto:
          'Compara de forma continua productos, servicios y procesos propios frente a referentes (interno, competitivo o funcional/genérico) siguiendo cinco pasos: definir métricas, recopilar datos, detectar brechas, adaptar mejoras al contexto propio y monitorear resultados.',
      },
      {
        id: '4-4-5-erp',
        titulo: '4.4.5 ERP',
        texto:
          'Los sistemas de planificación de recursos empresariales (Enterprise Resource Planning) eliminan silos de información y hojas de cálculo duplicadas al conectar todas las áreas en una sola fuente de verdad. Sus principales retos de implementación son la limpieza de datos históricos, costos de personalización y resistencia al cambio.',
      },
    ],
  },
];