export default {
  global: {
    Name:
      'Categorización de servicios ecosistémicos relacionados con recursos forestales',
    Description:
      'Este componente formativo aborda las temáticas relacionadas con los tipos de coberturas vegetales que pueden articularse con los servicios ecosistémicos de aprovisionamiento, soporte, regulación y culturales. Asimismo, presenta la metodología para caracterizar dichos servicios con base en la dependencia y la tendencia que pueden tener ciertos proyectos productivos o actividades desarrolladas en una zona o región determinada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Objetivos de Desarrollo Sostenible',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Problemáticas ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Deforestación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Incendios forestales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cambio climático',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Impactos ambientales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Coberturas vegetales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicios ecosistémicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Servicios de aprovisionamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Servicios de regulación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Servicios de soporte',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Servicios culturales',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de identificación de servicios ecosistémicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Dependencia y tendencia de los servicios ecosistémicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Determinación del listado base de servicios ecosistémicos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Metodología para la determinación de dependencia, tendencia y categorización de los servicios ecosistémicos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Beneficios socioeconómicos de los recursos forestales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Coberturas vegetales',
      referencia:
        'Castellanos, H e IGAC. (2010). Leyenda nacional de coberturas de la tierra. Metodología Corine Land Cover adaptada para Colombia. Escala 1:100.000.  ',
      tipo: 'Documento técnico',
      link:
        'https://www.corpocesar.gov.co/files/Ref_UnicoyPersistente/Corine_Land_Cover.pdf',
    },
    {
      tema: 'Servicios ecosistémicos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Política Nacional de Gestión Integral de la Biodiversidad y sus servicios ecosistémicos.  ',
      tipo: 'Política nacional',
      link:
        'https://www.minambiente.gov.co/direccion-de-bosques-biodiversidad-y-servicios-ecosistemicos/politica-nacional-para-la-gestion-integral-de-la-biodiversidad-y-sus-servicios-ecosistemicos/',
    },
  ],
  glosario: [
    {
      termino: 'Regulación hídrica',
      significado:
        'capacidad de un ecosistema para conservar el equilibrio en el suministro y la distribución del agua, tanto en términos de cantidad como de calidad.',
    },
    {
      termino: 'Gestión forestal',
      significado:
        'medidas de manejo planificado de los recursos forestales para satisfacer objetivos ambientales, económicos, sociales y culturales.',
    },
    {
      termino: 'Servicio ecosistémico',
      significado:
        'beneficio que los ecosistemas brindan a los seres humanos, ya sea de forma directa o indirecta, contribuyendo a su bienestar y calidad de vida.',
    },
    {
      termino: 'Servicios de aprovisionamiento',
      significado:
        'bienes materiales que los ecosistemas proveen para el bienestar humano y el desarrollo económico, como alimentos, madera y agua.',
    },
    {
      termino: 'Servicios de regulación',
      significado:
        'beneficios que brindan los ecosistemas al actuar de forma natural sobre el equilibrio de los sistemas biofísicos, como la regulación climática y la calidad del aire.',
    },
    {
      termino: 'Servicios de soporte',
      significado:
        'procesos ecológicos fundamentales que permiten el funcionamiento de los ecosistemas y la existencia de los demás servicios ecosistémicos.',
    },
    {
      termino: 'Servicios culturales',
      significado:
        'beneficios no materiales obtenidos de los ecosistemas, como el enriquecimiento espiritual, la recreación y el conocimiento tradicional.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'alteración de las condiciones climáticas medias de una región durante periodos prolongados, con impactos en los ecosistemas y las sociedades.',
    },
    {
      termino: 'Deforestación',
      significado:
        'pérdida de cobertura boscosa causada por actividades humanas como la ganadería extensiva, la minería ilegal o la expansión agrícola.',
    },
    {
      termino: 'Coberturas vegetales',
      significado:
        'vegetación presente en la superficie terrestre, como árboles, pastizales o cultivos, que cumple un papel clave en el equilibrio ecológico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castellanos, H., & Instituto Geográfico Agustín Codazzi (IGAC). (2010). Leyenda nacional de coberturas de la tierra: Metodología Corine Land Cover adaptada para Colombia. Escala 1:100.000.  ',
      link:
        'https://www.corpocesar.gov.co/files/Ref_UnicoyPersistente/Corine_Land_Cover.pdf',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Valle del Cauca. (2018). Caracterización de la cuenca del río La Vieja, plan de ordenación y manejo de la cuenca del río La Vieja.',
      link:
        'https://www.cvc.gov.co/sites/default/files/Planes_y_Programas/Planes_de_Ordenacion_y_Manejo_de_Cuencas_Hidrografica/La%20Vieja%20-%20POMCA%20en%20Ajuste/Fase%20Diagnostico/13_CapituloI_Diagnostico_CobertVeg_Flora.pdf ',
    },
    {
      referencia:
        'Cortés, D. M., & Pineda, R. (s. f.). Análisis prospectivo para incentivar el ahorro y uso eficiente del agua en el Tecnoparque Agroecológico Yamboró [Tesis de maestría, Universidad de Manizales]. Repositorio institucional Universidad de Manizales. ',
      link:
        ' https://ridum.umanizales.edu.co/search?spc.page=1&query=An%C3%A1lisis%20prospectivo%20para%20incentivar%20el%20ahorro%20y%20uso%20eficiente%20del%20agua%20en%20el%20Tecnoparque%20Agroecol%C3%B3gico%20Yamboro',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020). Política nacional para el control de la deforestación y la gestión sostenible de los bosques. ',
      link:
        ' https://www.minambiente.gov.co/documento-entidad/politica-nacional-para-el-control-de-la-deforestacion-y-la-gestion-sostenible-de-los-bosques/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2018). El estado de los bosques del mundo 2018: Las vías hacia el desarrollo forestal sostenible.',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Industriales de la Madera [Fedemaderas]. (2025). Deforestación en Colombia registró un aumento en el 2024. ',
      link:
        'https://fedemaderas.org.co/deforestacion-en-colombia-registro-un-aumento-en-el-2024/',
    },
    {
      referencia:
        'Federación Nacional de Industriales de la Madera [Fedemaderas]. (2025). La madera legal del bosque natural sí tiene futuro en Colombia.  ',
      link:
        'https://fedemaderas.org.co/la-madera-legal-del-bosque-natural-si-tiene-futuro-en-colombia/',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2022). Estudio nacional del agua. ',
      link: 'https://www.andi.com.co/Uploads/ENA%202022_compressed.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura. (2025). El sector Agricultura, protagonista de la reactivación económica durante el primer trimestre de 2025.',
      link:
        ' https://www.minagricultura.gov.co/noticias/Paginas/El-sector-Agricultura,-protagonista-de-la-reactivaci%C3%B3n-econ%C3%B3mica-durante-el-primer-trimestre-de-2025--.aspx',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Política Nacional de Gestión Integral de la Biodiversidad y sus servicios ecosistémicos. ',
      link:
        'https://www.minambiente.gov.co/direccion-de-bosques-biodiversidad-y-servicios-ecosistemicos/politica-nacional-para-la-gestion-integral-de-la-biodiversidad-y-sus-servicios-ecosistemicos/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible & Autoridad Nacional de Licencias Ambientales. (2016). Términos de referencia para la elaboración del estudio de impacto ambiental para proyectos de explotación minera - Servicios ecosistémicos. ',
      link:
        'https://www.anla.gov.co/documentos/normativa/terminos_referencia/tr_eia_mineria_2016.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Listado de impactos ambientales específicos. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/04/Listado-de-Impactos-Ambientales-Especificos-2021-V.4.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2024). La deforestación baja en 2023 y en 2024 enfrenta amenazas. ',
      link:
        'https://www.minambiente.gov.co/la-deforestacion-baja-en-2023-y-en-2024-enfrenta-amenazas/ ',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2015). La Asamblea General adopta la Agenda 2030 para el Desarrollo Sostenible. ',
      link:
        'https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2025). Call to Action on Extreme Heat.  ',
      link: 'https://www.un.org/es/climatechange/reports',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente [UNEP]. (2025). The Economics of Ecosystems and Biodiversity (TEEB). ',
      link: 'https://www.unep.org/topics/teeb',
    },
    {
      referencia:
        'World Resources Institute. (2025). La pérdida de bosques globales rompe récords en 2024 impulsada por incendios masivos. ',
      link:
        'https://es.wri.org/noticias/la-perdida-de-bosques-globales-rompe-records-en-2024-impulsada-por-incendios-masivos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
