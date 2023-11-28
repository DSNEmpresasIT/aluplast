import {
  TypeProduct,
  type CatalogData,
  ProductFathersTypes,
  type TexturesTypes,
} from "../types/types";

export const windowsData: CatalogData[] = [
  {
    name: "Ventana banderola",
    img: ['1', '2', '3'],
    id: "banderola",
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
    ],
    description:
      "La abertura tipo banderola es una elección adecuada para espacios donde se busca la entrada de luz y ventilación controlada, son perfectas para habitaciones pequeñas o áreas donde el espacio es limitado. Su diseño permite una apertura parcial de la hoja hacia adentro, lo que permite una regulación precisa del flujo de aire y admite colocar tela mosquitera en el exterior del vano. Son ideales para baños, despensas y ventanas en altura.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Banderola de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Fabricada con aluminio resistente a la corrosión, garantiza una larga vida útil.",
        },
        {
          title: "Diseño",
          text: "Ideal para espacios con limitaciones de espacio, ocupando poco espacio. Aporta un toque tradicional y elegante a cualquier espacio.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una mayor comodidad.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores.",
        },
      ],
      maxMeasures: "1200x1800 mm",
      minMeasures: "550x550 mm",
      features: [
        "Aportan un toque tradicional y elegante.",
        "Ventilación suave y regulada.",
        "Ideales para lugares con espacio limitado.",
        "Requieren poco mantenimiento.",
      ],
    },
  },
  {
    name: "Ventana corrediza",
    img: ['1', '2', '3', '4'],
    id: 'corrediza',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "corrediza",
    ],
    description:
      "La abertura de hojas corredizas es una opción clásica para maximizar la entrada de luz natural sin comprometer el espacio, ya que se deslizan sobre el mismo plano del muro donde están colocadas. Perfectas para áreas donde el espacio es limitado, como balcones y terrazas, o también para grandes luces en quinchos y galerías agregando mas cantidad de hojas donde crean una transición suave entre el interior y el exterior. Admite colocar hojas con tela mosquitera corredizas en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Abertura Corrediza de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Permite maximizar la entrada de luz natural sin ocupar espacio adicional.",
        },
        {
          title: "Ahorro de Espacio",
          text: "Ideal para áreas con limitaciones de espacio, como balcones y terrazas.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de tamaños y diseños para adaptarse a las necesidades de diseño de cualquier proyecto.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Opcionales",
          text: "Admite la instalación de hojas con tela mosquitera corrediza.",
        },
      ],
      minMeasures: "1200x600 mm",
      maxMeasures: "5750x3000 mm",
      features: [
        "Maximiza la entrada de luz",
        "No requiere espacio adicional para abrirse.",
        "Transición suave entre interiores y exteriores",
        "Disponible en una variedad de tamaños y diseños",
      ],
    },
  },
  {
    name: "Ventana de rebatir",
    img: ['1', '2', '3', '4'],
    id: 'rebatir',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "practica",
    ],
    description:
      "La abertura rebatible es la elección perfecta cuando se busca una apertura amplia y despejada para una gran ventilación o de acceso. Es ideal para áreas que conectan el interior con patios, jardines o terrazas. Gracias a su apertura total hacia el interior, las aberturas rebatibles de acuerdo a su ubicación y tamaño brindan una sensación de espacio y continuidad entre ambas áreas.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Rebatible de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente, diseñada para resistir el paso del tiempo.",
        },
        {
          title: "Diseño",
          text: "Aporta un estilo tradicional y elegante que se adapta a una variedad de ambientes y estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Proporciona una entrada espaciosa y luminosa.",
        },
        {
          title: "Ventilación",
          text: "Ofrece una ventilación suave y regulada, ideal para mantener un ambiente cómodo.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para satisfacer las preferencias estéticas de cada espacio.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Diseño Clásico que aporta un estilo tradicional y elegante.",
        "Apertura Amplia para ambientes espaciosos y luminosos",
        "Ofrece una ventilación suave y regulada",
        "Adaptabilidad, se integra fácilmente en diversos ambientes",
      ],
    },
  },
  {
    name: "Ventana oscilobatiente",
    img: ['1', '2', '3', '4'],
    id: 'oscilobatiente',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "oscilobatiente",
    ],
    description:
      "La abertura oscilobatiente combina la funcionalidad de la apertura batiente tradicional con la versatilidad de la apertura oscilante. Puede abrirse hacia adentro como una hoja batiente o inclinarse desde la parte superior tipo banderola para permitir la ventilación controlada sin comprometer la seguridad. Esta tipología es especialmente adecuada para habitaciones que requieren un flujo de aire constante, y que cuando esté cerrada ofrezca gran hermeticidad y seguridad. Admite colocar tela mosquitera en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Oscilobatiente de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera, diseñada para soportar condiciones adversas.",
        },
        {
          title: "Diseño",
          text: "Combina estética contemporánea con versatilidad funcional. ",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada, ideal para mantener un ambiente cómodo.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento, lo que garantiza una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Dispone de opciones de cierre multipunto para una mayor seguridad y tranquilidad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a la estética de cualquier espacio.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Modos de apertura, oscilante y batiente.",
        "Ventilación suave y regulada.",
        "Estética moderna con funcionalidad.",
        "Ofrece opciones de cierre multipunto.",
      ],
    },
  },
  {
    name: "Ventana proyectante",
    img: ['1', '2', '3', '4'],
    id: 'proyectante',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "proyectante",
    ],
    description:
      "La abertura proyectante es ideal donde se busca un equilibrio entre ventilación y claridad sin invadir el interior de la habitación. Su diseño permite que la hoja se abra hacia afuera, lo que facilita la ventilación sin comprometer el espacio. Es una excelente opción para áreas donde se requiere una buena circulación de aire, como cocinas y baños.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Proyectante de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente a la corrosión.",
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo que agrega sofisticación. Ideal para lugares con limitaciones de espacio.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Opciones de cerraduras avanzadas para mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Ventilación suave y regulada.",
        "Estilo contemporáneo.",
        "No requiere espacio adicional para abrirse.",
        "Opciones con cerraduras y pestillos avanzados.",
      ],
    },
  },
  {
    name: "Ventana desplazable",
    // img: 'paralela',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "paralela",
    ],
    description:
      "La abertura desplazable es una solución eficiente para ventilación controlada sobre muros o fachadas vidriadas. La hoja se desplaza hacia al exterior mediante brazos a fricción que le permite controlar de manera precisa la ventilación con un excelente control y seguridad. Son ideales para ventanas en altura, edificios de oficinas. Admite colocar tela mosquitera en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Ventanas Desplazables de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación controlada y precisa.",
        },
        {
          title: "Seguridad",
          text: "Diseñada para ofrecer un control seguro, especialmente en edificios en altura.",
        },
        {
          title: "Flexibilidad",
          text: "Admite la instalación de tela mosquitera en el exterior.",
        },
        {
          title: "Diseño",
          text: "Solución eficiente para muros y fachadas vidriadas.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a las preferencias estéticas de cada espacio.",
        },
      ],
      minMeasures: "1500x1000 mm",
      maxMeasures: "3000x2350 mm",
      features: [
        "Permiten una ventilación precisa y regulada.",
        "Ideal para edificios en altura.",
        "Admite la instalación de una tela mosquitera.",
        "Eficiente para muros y fachadas vidriadas.",
      ],
    },
  },
  {
    name: "Ventana tipo paño fijo",
    img: ['1', '2'],
    id: 'pañofijo',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "plegadiza",
    ],
    description:
      "El paño fijo es una solución eficaz para maximizar las vistas panorámicas y la entrada de luz. Aunque no tiene opción de ventilar, este tipo de abertura se utiliza en combinación con otras tipologías para crear diseños personalizados. Los paños fijos son ideales para enmarcar vistas pintorescas y añadir un toque arquitectónico a tu espacio.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Paño Fijo de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Maximización de Vistas",
          text: "Ofrece vistas panorámicas sin obstáculos para disfrutar del entorno.",
        },
        {
          title: "Abundante Luz Natural",
          text: "Permite una entrada generosa de luz, mejorando la luminosidad del espacio.",
        },
        {
          title: "Diseño Personalizado",
          text: "Se combina fácilmente con otras tipologías de aberturas para adaptarse a necesidades específicas de diseño.",
        },
        {
          title: "Estilo Arquitectónico",
          text: "Agrega un toque distintivo y elegante a cualquier espacio, mejorando la estética del lugar.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Bajo Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Uso Estratégico",
          text: "Se utiliza para enmarcar vistas y maximizar la belleza del entorno.",
        },
      ],
      features: [
        "Ofrece vistas panorámicas sin obstáculos.",
        "Permite una entrada generosa de luz.",
        "Se combina fácilmente con otras tipologías",
        "Añade Estilo Arquitectónico elegante.",
      ],
    },
  },
];

export const doorsData: CatalogData[] = [
  {
    name: "Puerta de rebatir",
    img: ['1', '2', '3', '4'],
    id: 'puertarebatir',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertarebatir",
    ],
    description:
      "La puerta de rebatir combina un diseño clásico con facilidad de uso. Su apertura hacia el interior o exterior brinda un acceso conveniente, y sus hojas sólidas proporciona una sensación de seguridad. Esta tipología es ideal para crear una transición funcional entre el interior y el exterior. Pueden tener una o varias hojas según el vano que se desea cubrir.",
    specs: {
      minMeasures: "1000x2300 mm",
      maxMeasures: "1800x2300 mm",
      description: [
        {
          title: "Tipo",
          text: "Puertas de rebatir de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente para una vida útil prolongada.",
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz.",
        },
        {
          title: "Mantenimiento",
          text: "Diseño simple que facilita la limpieza y el cuidado.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores.",
        },
      ],
      features: [
        "Amplia apertura",
        "Estilo Versátil",
        "Control de Ventilación",
        "Mantenimiento Sencillo",
      ],
    },
  },
  {
    name: "Puerta pivotante",
    // img: 'puertamachimbre',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertapivotante",
    ],
    description:
      "La puerta pivotante es una opción audaz que agrega un toque contemporáneo a las fachadas. Su eje de pivote desplazado permite un giro suave y un estilo distintivo. Esta tipología es perfecta para quienes buscan un diseño único y con la opción de hojas de gran tamaño.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas pivotantes de aluminio.",
        },
        {
          title: "Material",
          text: "Material de Fabricación: Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y duradera.",
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Entrada espaciosa y luminosa.",
        },
        {
          title: "Ventilación",
          text: "Regula la entrada de aire fresco.",
        },
        {
          title: "Mantenimiento",
          text: "Diseño que facilita la limpieza y el cuidado.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores.",
        },
      ],
      features: [
        "Estilo contemporáneo y elegante.",
        "Entrada espaciosa y luminosa.",
        "Regula la entrada de aire fresco.",
        "Construcción robusta y duradera.",
      ],
    },
  },
  {
    name: "Puerta corrediza colgante",
    // img: 'puertamachimbre',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertacorredizacolgante",
    ],
    description:
      "La puerta corrediza colgante es una solución práctica para espacios reducidos. Su deslizamiento suave y sin obstáculos ahorra espacio y agrega un toque moderno. Esta tipología es especialmente adecuada para áreas donde el espacio es una consideración importante. La Hoja se desplaza de forma lateral sobre un riel superior fijado al muro logrando la apertura sin trazar un barrido de apertura tradicional. Se pueden hacer hojas de tamaño considerable y múltiples diseños.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas corredizas colgantes de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Ideal para lugares con limitaciones de espacio. Crea una transición suave entre espacios interiores y exteriores.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente.",
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural en el interior.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores.",
        },
      ],
      features: [
        "Estilo contemporáneo y elegante.",
        "Ideal para lugares con limitaciones de espacio.",
        "Crean una transición suave entre espacios interiores y exteriores.",
        "Maximizan la entrada de luz natural en el interior.",
      ],
    },
  },
  {
    name: "Puerta plegadiza",
    // img: 'puertamachimbre',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertaplegadiza",
    ],
    description:
      "La puerta Plegadiza es una solución práctica para cerrar grandes luces. Su forma de plegarse permite una cantidad de hojas variables según la longitud del vano a cubrir y agrega un toque moderno a la obra. Esta tipología permite el casi 100% de la apertura, ideal para quinchos, galerías.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas plegadizas de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo y elegante, Ideal para maximizar el espacio en áreas con limitaciones.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural, creando ambientes luminosos.",
        },
        {
          title: "Transición sin Barreras",
          text: "Facilita la conexión entre espacios interiores y exteriores.",
        },
        {
          title: "Mantenimiento",
          text: "Requieren poco mantenimiento para una vida útil prolongada.",
        },
        {
          title: "Personalización",
          text: "Disponibles en diversos acabados y colores.",
        },
      ],
      features: [
        "Amplían galerías y quinchos al conectar espacios.",
        "Facilitan la transición suave entre interiores y exteriores.",
        "Ofrecen ventilación natural al abrir parcialmente.",
        "Aumentan la entrada de luz para un ambiente acogedor.",
      ],
    },
  },
];

export const complementarySystemData: CatalogData[] = [
  // {
  //   name: "Frente Placard",
  //   img: "frenteplacard",
  //   filters: [ProductFathersTypes.CS_TYPES, "frenteplacard"],
  //   specs: {
  //     features: [
  //       "Admite Placas de Madera (Fibrofácil), Espejo y Vidrio.",
  //       "Dos modelos disponibles de Tirador: normal y reforzado.",
  //       "El sistema de apertura corredizo evita la necesidad de mantener despejada el área frontal del Placard para la apertura de las hojas.",
  //     ],
  //   },
  // },
  // {
  //   name: "Tabiques Divisorios",
  //   img: "tabiquesdivisorios",
  //   filters: [ProductFathersTypes.CS_TYPES, "tabiquesdivisorios"],
  //   specs: {
  //     features: [
  //       "Ideal para dividir oficinas",
  //       "Admite Placas de Madera (Fibrofácil) y Vidrio",
  //     ],
  //     description:
  //       "Dos modelos disponibles: <br> Línea Alcemar, con bordes redondeados y terminación de columna mediante tapa de aluminio. <br> Línea Tradicional, bordes rectos y terminación de columna mediante burlete",
  //   },
  // },
  // {
  //   name: "Techo Vidriado",
  //   img: "techovidriado",
  //   filters: [ProductFathersTypes.CS_TYPES, "techovidriado"],
  //   specs: {
  //     features: [
  //       "Acabado anodizado o pintado.",
  //       "Admite vidrio Simple y DVH.",
  //       "Libre escurrimiento en sentido de la pendiente.",
  //       "Sistema compuesto por perfiles de larguero, travesaño y prensa vidrio.",
  //       "Montado sobre estructura portante independiente.",
  //     ],
  //   },
  // },
  {
    name: 'Cerramiento de oficinas',
    filters: [ProductFathersTypes.CS_TYPES, "cerramientooficinas"],
    description: 'Usos:',
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Cerramientos de Oficinas de Aluplast.'
        },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio, vidrio policarbonato compacto, MDF.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Montaje modular que permite la creación de espacios flexibles.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sencillo sin afectar la operación de la oficina.'
        },
        {
          title: '  Estética Elegante',
          text: 'Diseño moderno y profesional que mejora la imagen corporativa.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Varias opciones de distribución y acabados disponibles.'
        },
        {
          title: '  Control de Calidad',
          text: 'Rigurosos controles de calidad garantizan un producto duradero.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Se adapta a oficinas, salas de reuniones, y espacios de trabajo colaborativo.'
        },
        {
          title: '  Practicidad',
          text: 'Mejora la privacidad y reduce el ruido en entornos de trabajo.'
        }
      ],
      features: [
        'Dividen áreas de trabajo y proporcionan privacidad para reuniones',
        'Optimizan el uso del espacio y brindan privacidad a los usuarios',
        'Separan espacios para presentaciones y discusiones',
        'Facilitan la creación de áreas de trabajo flexibles'
      ]
    }
  },
  {
    name: 'Divisorio sanitarios',
    filters: [ProductFathersTypes.CS_TYPES, "divisoriosanitario"],
    description: 'Usos:',
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Divisorios de Sanitarios de Aluplast.'
        },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y paneles de alta resistencia.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Sistema de ensamblaje sólido y seguro.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Instalación rápida sin interrupción del servicio.'
        },
        {
          title: '  Estética Elegante',
          text: 'Diseño limpio y moderno que mejora la higiene y estética del baño.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Opciones de color y acabados para adaptarse a la decoración.'
        },
        {
          title: '  Control de Calidad',
          text: 'Resistente y duradero, diseñado para un uso constante.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Adecuados para baños públicos, comercios y espacios corporativos.'
        },
        {
          title: '  Practicidad',
          text: 'Facilitan la organización y el mantenimiento del área sanitaria.'
        }
      ],
      features: [
        'Proporcionan privacidad y separación en entornos de alto tráfico.',
        'Resisten la humedad y el uso intensivo.',
        'Mejoran la comodidad y la experiencia de los visitantes.',
        'Son duraderos y resistentes al desgaste.',
      ]
    }
  },
  {
    name: 'Baranda balcón',
    filters: [ProductFathersTypes.CS_TYPES, "barandabalcon"],
    description: 'Usos:',
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Barandas de Balcón de Aluplast.'
        },
        { title: 'Composición', text: 'Perfiles de aluminio y cristal.' },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseño estructural sólido y seguro.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Instalación rápida y segura.'
        },
        {
          title: '  Estética Elegante',
          text: 'Diseño transparente y moderno que mejora las vistas y la estética exterior.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Posibilidad de diferentes estilos y alturas.'
        },
        {
          title: '  Control de Calidad',
          text: 'Resistentes a la intemperie y duraderas.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideales para balcones residenciales, comerciales y hotelería.'
        },
        {
          title: '  Practicidad',
          text: 'Proporcionan seguridad sin obstruir las vistas.'
        }
      ],
      features: [
        'Proporcionan seguridad sin obstruir las vistas panorámicas.',
        'Agregan un toque elegante a las áreas de terraza y piscina.',
        'Garantizan la seguridad de los residentes.',
        'Crean espacios al aire libre acogedores.',
      ]
    }
  },
  {
    name: 'Mampara de baño',
    filters: [ProductFathersTypes.CS_TYPES, "mamparadebaño"],
    description: 'Usos:',
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Mamparas de Baño de Aluplast.' },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y vidrio templado.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Sistema de bisagras y cierres precisos.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Fácil instalación sin grandes obras.'
        },
        {
          title: '  Estética Elegante',
          text: 'Mejora la apariencia y funcionalidad del baño.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Opciones de acabado y configuración de puertas.'
        },
        {
          title: '  Control de Calidad',
          text: 'Duraderas y resistentes a la humedad.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Adecuadas para baños residenciales y comerciales.'
        },
        {
          title: '  Practicidad',
          text: 'Facilitan la limpieza y organización del espacio.'
        }
      ],
      features: [
        'Optimizan el espacio y evitan salpicaduras de agua.',
        'Brindan un aspecto elegante y fácil limpieza.',
        'Mantienen la higiene y la seguridad en áreas de ducha.',
        'Agregan un toque de lujo a los baños de relajación',
      ]
    }
  },
  {
    name: 'Techo vidriado',
    filters: [ProductFathersTypes.CS_TYPES, "techovidriado"],
    description: 'Usos:',
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Techos Vidriados de Aluplast.' },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y vidrio laminado.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Sistema de ensamblaje seguro y hermético.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sin complicaciones.'
        },
        {
          title: '  Estética Elegante',
          text: 'Proporciona una sensación de amplitud y conexión con el exterior.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Configuraciones personalizables según las necesidades.'
        },
        {
          title: '  Control de Calidad',
          text: 'Resistentes a las inclemencias del tiempo y duraderos.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideal para terrazas, patios y áreas de descanso.'
        },
        {
          title: '  Practicidad',
          text: 'Ofrece protección contra los elementos y permite el paso de la luz natural.'
        }
      ]
      ,
      features: [
        'Creen ambientes luminosos y agradables en salas de estar y terrazas.',
        'Ofrecen áreas al aire libre protegidas de las inclemencias del tiempo.',
        'Agregan un toque de elegancia a áreas de piscina y jardines.',
        'Maximizan la entrada de luz en áreas de pasillos y patios.',
      ]
    }
  },
  {
    name: 'Mosquiteros',
    filters: [ProductFathersTypes.CS_TYPES, ""],
    description: 'Usos:',
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Mosquiteros de Aluplast.' },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y malla de acero o tela.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseño ensamblado para una protección eficaz.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sin complicaciones.'
        },
        {
          title: '  Estética Elegante',
          text: 'Proporciona una barrera invisible contra insectos.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Varias opciones de color y malla.'
        },
        {
          title: '  Control de Calidad',
          text: 'Duraderos y resistentes a la intemperie.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Adecuados para ventanas y puertas, brindando protección contra insectos.'
        },
        {
          title: '  Practicidad',
          text: 'Mantiene el hogar libre de insectos sin comprometer la circulación de aire.'
        }
      ],
      features: [
        'Protegen dormitorios y áreas de estar de mosquitos y otros insectos.',
        'Mantienen áreas de comedor al aire libre libres de plagas.',
        'Proporcionan comodidad y tranquilidad a los huéspedes.',
        'Garantizan una experiencia.',
      ]
    }
  },
];

export const closersData: CatalogData[] = [
  {
    name: "Piel de vidrio",
    filters: [ProductFathersTypes.CLOSERS_TYPES, "pieldevidrio"],
    description: `
    Nuestro sistema de piel de vidrio es la respuesta ideal para optimizar las envolventes vidriadas de edificios de gran altura, pero su versatilidad lo hace perfecto para proyectos de menor escala e incluso viviendas. Esta estructura innovadora utiliza columnas de aluminio precisamente fijadas en la obra, junto con cuadros de aluminio que albergan vidrios de alta calidad (DVH). Los cuadros pueden instalarse desde el interior o exterior, ofreciendo una vista exterior de vidrio puro sin aluminio visible. Nuestro sistema de piel de vidrio es adaptable para diferentes tipologías de aberturas, ya sea para paños fijos o proyectantes.

    Aluplast es una empresa con amplia experiencia y conocimientos en sistemas de vidriados envolventes, brindando soluciones tanto para edificios comerciales como residenciales. Nuestro equipo de ingenieros altamente capacitado se encarga de dimensionar perfiles, anclajes, tamaños de paños y las características de vidrios que mejor se ajusten a las condiciones climáticas y de viento de la zona.
    `,
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Sistema de Piel de Vidrio de Aluplast.",
        },
        {
          title: "Composición",
          text: "Paneles de vidrio de alta calidad, columnas de aluminio.",
        },
        {
          title: "Diseño Estético",
          text: "Ofrece una estética moderna y elegante, maximizando la entrada de luz natural.",
        },
        {
          title: "Eficiencia Energética",
          text: "Vidrios de alto rendimiento que brindan un aislamiento térmico y acústico excepcional.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente que garantiza una larga vida útil con mantenimiento mínimo.",
        },
        {
          title: "Versatilidad de Uso",
          text: "Adecuado para aplicaciones comerciales y residenciales, adaptándose a proyectos de diferentes escalas.",
        },
        {
          title: "Instalación Profesional",
          text: "Se recomienda la instalación por expertos para un rendimiento óptimo.",
        },
      ],
      features: [
        "Ofrece una vista sin obstáculos.",
        "Se adapta a las necesidades del cliente.",
        "Valor Estético Superior.",
        "Eficiencia a Largo Plazo",
      ],
    },
  },
  {
    name: "Frente integral",
    // img: 'frenteintegral',
    filters: [ProductFathersTypes.CLOSERS_TYPES, "frenteintegral"],
    description:
      "Esta solución es la elección definitiva para aquellos que desean transformar sus espacios de manera elegante y funcional. Representa la combinación perfecta de diseño moderno y versatilidad, ofreciendo una experiencia única en la integración de espacios interiores y exteriores.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Solución de Cerramiento con Frente Integral de Aluminio.",
        },
        {
          title: "Material de Fabricación",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño Vanguardista",
          text: "Aporta un toque moderno y sofisticado a cualquier espacio.",
        },
        {
          title: "Integración de Espacios",
          text: "Permite la integración perfecta de espacios interiores y exteriores.",
        },
        {
          title: "Amplia Entrada de Luz Natural",
          text: "Maximiza la entrada de luz, creando espacios luminosos y agradables.",
        },
        {
          title: "Eficiencia Energética",
          text: "Ofrece un excelente aislamiento térmico, reduciendo los costos energéticos.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Bajo Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios tamaños y diseños para adaptarse a las necesidades de diseño de cada proyecto.",
        },
        {
          title: "Fácil Instalación",
          text: "Se puede instalar de manera eficiente y rápida por profesionales capacitados.",
        },
        {
          title: "Versatilidad de Uso",
          text: "Adecuado para aplicaciones residenciales y comerciales.",
        },
        {
          title: "Mejora la Conexión Interior-Exterior",
          text: "Crea una transición fluida y mejora la conectividad de los espacios.",
        },
      ],
      features: [
        "Diseño Versátil y elegante",
        "Eficiencia Energética",
        "Amplia Entrada de Luz Natural",
        "Solución resistente y estructural",
      ],
    },
  },
  {
    name: "Sistema frame",
    // img: 'courtainwall',
    description: `
      En la clasificación de muros cortina, presentamos nuestro sistema frame, que consiste en la fabricación previa de módulos en nuestra fábrica y su posterior instalación directa en el sitio de construcción, entre las losas.

      Estos módulos se conectan entre sí mediante columnas o travesaños "semicompletos" que se ensamblan cuando un módulo se coloca junto a otro. El propósito inicial del sistema de muro cortina fue reducir al mínimo el tiempo requerido para la instalación en el lugar de construcción.
    `,
    filters: [ProductFathersTypes.CLOSERS_TYPES, "courtainwall"],
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Sistema Frame de Aluplast.",
        },
        {
          title: "Composición",
          text: "Módulos prefabricados en nuestra fábrica que se instalan directamente en el sitio de la obra entre las losas.",
        },
        {
          title: "Conexión entre Módulos",
          text: 'Columnas o travesaños "semicompletos" que se ensamblan al unir módulos.',
        },
        {
          title: "Eficiencia en el Montaje",
          text: "Reducción significativa del tiempo de montaje en comparación con otros sistemas.",
        },
        {
          title: "Estética Elegante",
          text: "Agrega una apariencia moderna y elegante al edificio.",
        },
        {
          title: "Flexibilidad de Diseño",
          text: "Adaptable a diferentes estilos arquitectónicos y necesidades específicas.",
        },
        {
          title: "Control de Calidad",
          text: "Mayor control de calidad debido a la prefabricación en nuestra fábrica.",
        },
        {
          title: "Aplicaciones Versátiles",
          text: "Adecuado para una variedad de proyectos arquitectónicos.",
        },
        {
          title: "Practicidad",
          text: "Simplifica la instalación en obra, lo que se traduce en un proceso más rápido y eficiente.",
        },
      ],
      features: [
        "Rápida Instalación.",
        "Diseño Elegante excelente",
        "Se adapta a diversas necesidades.",
        "La prefabricación garantiza  calidad.",
      ],
    },
  },
  {
    name: "Frente vidriado",
    // img: 'courtainwall',
    filters: [ProductFathersTypes.CLOSERS_TYPES, "courtainwall"],
    description:
      "El sistema de frente vidriado optimiza envolventes vidriadas en edificios de gran altura y también en construcciones más pequeñas, incluso viviendas. Este sistema utiliza columnas de aluminio y cuadros de aluminio con vidrios (o DVH) para crear una envolvente de vidrio puro sin aluminio visible. Ofrece ventanas fijas o proyectantes. En Aluplast somos expertos en sistemas de vidriados envolventes para edificios comerciales, residenciales y viviendas. Nuestro equipo de ingenieros dimensiona perfiles, anclajes y vidrios según las condiciones climáticas y de viento de la zona.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Frente Vidriado de Aluplast.",
        },
        {
          title: "Composición",
          text: "Paneles de vidrio templado y estructura de aluminio de alta calidad.",
        },
        {
          title: "Diseño Estético",
          text: "Ofrece una apariencia moderna y elegante, maximizando la entrada de luz natural.",
        },
        {
          title: "Eficiencia Energética",
          text: "Vidrios de alta eficiencia que proporcionan aislamiento térmico y acústico de alto rendimiento.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente que garantiza una larga vida útil y requiere bajo mantenimiento.",
        },
        {
          title: "Versatilidad de Uso",
          text: "Adecuado para aplicaciones comerciales y residenciales.",
        },
        {
          title: "Montaje Profesional",
          text: "Instalación por profesionales capacitados para un rendimiento óptimo.",
        },
      ],
      features: [
        "Máxima Transparencia, vista exterior de vidrio puro sin obstrucciones.",
        "Resistencia, soporta condiciones climáticas y de viento de manera eficiente.",
        "Construcción de alta calidad para una larga vida útil.",
        "Excelente aislamiento térmico y acústico.",
      ],
    },
  },
];

export const controlSolar: CatalogData[] = [
  {
    name: "Cortina de enrollar",
    filters: [ProductFathersTypes.SOLAR_CONTROL, "cortinadeenrollar"],
    description:
      "Las cortinas de enrollar son una elección popular para quienes buscan un diseño clásico y funcionalidad práctica. Fabricadas con lama de aluminio tubular, con pequeños calados que permiten regular ventilación y claridad. Estas cortinas se enrollan suavemente mediante sistema de reductor a manivela o bien se automatizan a tecla y/o control remoto.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Cortina de Enrollar de Aluplast.",
        },
        { title: "Composición", text: "Lamas de aluminio tubular." },
        {
          title: "Conexión entre Módulos",
          text: "Sistema de reductor a manivela o automatización con tecla/control remoto.",
        },
        {
          title: "Eficiencia en el Montaje",
          text: "Fácil instalación y configuración.",
        },
        {
          title: "Estética Elegante",
          text: "Diseño clásico que se adapta a diversos entornos.",
        },
        {
          title: "Flexibilidad de Diseño",
          text: "Variedad de colores y tamaños disponibles.",
        },
        {
          title: "Control de Calidad",
          text: "Rigurosos estándares de calidad garantizan un producto confiable.",
        },
        {
          title: "Aplicaciones Versátiles",
          text: "Adecuado para uso en hogares, comercios y más.",
        },
        {
          title: "Practicidad",
          text: "Facilita el control de luz y ventilación.",
        },
      ],
      features: [
        "Diseño Clásico y Funcional",
        "Regulación de Ventilación",
        "Control Remoto Opcional",
        "Versatilidad de Aplicación",
      ],
    },
  },
  {
    name: "Persiana regulable",
    filters: [ProductFathersTypes.SOLAR_CONTROL, "persianaregulable"],
    description:
      "La persiana regulable es una solución versátil que permite un control total sobre la cantidad de luz y ventilación sin perder seguridad. Se puede regular la inclinación de las lamas tubulares de aluminio de la persiana según cada necesidad, lo que la convierte en una opción perfecta para habitaciones donde deseas un control solar preciso del ambiente y la privacidad. Se accionan mediante sistema de reductor a manivela o bien se automatizan a tecla y/o control remoto.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Persiana Regulable de Aluplast.",
        },
        { title: "  Composición", text: "Lamas tubulares de aluminio." },
        {
          title: "  Conexión entre Módulos",
          text: "Sistema de reductor a manivela o automatización con tecla/control remoto.",
        },
        {
          title: "  Eficiencia en el Montaje",
          text: "Instalación sencilla y ajuste preciso.",
        },
        {
          title: "  Estética Elegante",
          text: "Proporciona un aspecto moderno y funcional.",
        },
        {
          title: "  Flexibilidad de Diseño",
          text: "Se adapta a la cantidad de luz y privacidad deseada.",
        },
        {
          title: "  Control de Calidad",
          text: "Altos estándares de calidad para un rendimiento óptimo.",
        },
        {
          title: "  Aplicaciones Versátiles",
          text: "Ideal para habitaciones que requieren control solar y privacidad.",
        },
        {
          title: "  Practicidad",
          text: "Facilita la regulación del ambiente interior.",
        },
      ],
      features: [
        "Diseño versátil y clásico.",
        "Excelente aislamiento térmico.",
        "Ahorro de espacio.",
        "Vistas panorámicas.",
      ],
    },
  },
  {
    name: "Celosias con tablilla fija",
    filters: [ProductFathersTypes.SOLAR_CONTROL, "celosiastablillafija"],
    description:
      "Estas celosías con tablilla fija son ideales para aquellos que buscan un equilibrio entre privacidad y entrada de luz. Su diseño de tablillas fijas puede ser ciega o caladas lo cual permite un flujo controlado de aire y claridad natural mientras proporciona una barrera visual. Perfectas para espacios donde no se tiene lugar para taparrollos o se tienen mochetas amplias. se busca un toque de privacidad  y seguridad con un toque de ventilación e iluminación.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Celosías con Tablilla Fija de Aluplast.",
        },
        {
          title: "  Composición",
          text: "Diseño con tablillas fijas, disponibles en versiones ciegas o caladas.",
        },
        {
          title: "  Conexión entre Módulos",
          text: "Tablillas dispuestas para un flujo controlado de aire y luz.",
        },
        {
          title: "  Eficiencia en el Montaje",
          text: "Fácil instalación en espacios reducidos.",
        },
        {
          title: "  Estética Elegante",
          text: "Brinda un toque de privacidad con un diseño atractivo.",
        },
        {
          title: "  Flexibilidad de Diseño",
          text: "Opciones de tablillas para diferentes preferencias estéticas.",
        },
        {
          title: "  Control de Calidad",
          text: "Rigurosos controles aseguran la calidad del producto.",
        },
        {
          title: "  Aplicaciones Versátiles",
          text: "Ideal donde se requiere privacidad con ventilación e iluminación.",
        },
        {
          title: "  Practicidad",
          text: "Solución práctica para espacios compactos.",
        },
      ],
      features: [
        "Control preciso de luz y privacidad.",
        "Eficiente en aislamiento térmico.",
        "Aprovecha la luz natural.",
        "Estilo moderno.",
      ],
    },
  },
  {
    name: "Celosias con tablilla regulable",
    filters: [ProductFathersTypes.SOLAR_CONTROL, "celosiastablillaregulable"],
    description:
      "Las celosías con tablilla regulable ofrecen un mayor control sobre la entrada de luz y ventilación aún con las hojas en modo cerrado. Puedes ajustar las tablillas para modular la cantidad de luz y aire según tus preferencias. Esta tipología es especialmente adecuada para áreas donde se requiere flexibilidad en la regulación del ambiente interior sin perder seguridad.",
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Celosías con Tablilla Regulable de Aluplast.'
        },
        {
          title: 'Composición',
          text: 'Tablillas regulables para controlar la entrada de luz y ventilación.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Ajuste de tablillas para un control preciso del ambiente.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Instalación sencilla y versátil.'
        },
        {
          title: '  Estética Elegante',
          text: 'Agrega un toque sofisticado a la fachada o espacio.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Adecuada para áreas que requieren regulación de luz y privacidad.'
        },
        {
          title: '  Control de Calidad',
          text: 'Proceso de fabricación controlado para un rendimiento óptimo.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Perfecta para espacios donde se necesita flexibilidad en la regulación del ambiente interior.'
        },
        {
          title: '  Practicidad',
          text: 'Solución versátil para controlar la entrada de luz y ventilación.'
        }
      ]
      ,
      features: [
        "Entrada de luz controlada.",
        "Privacidad y estética.",
        "Versatilidad arquitectónica.",
        "Instalación sencilla.",
      ],
    },
  },
  {
    name: "Cortavistas",
    filters: [ProductFathersTypes.SOLAR_CONTROL, "cortavistas"],
    description:
      "Las aberturas tipo corta vistas son diseñadas para crear un ambiente más íntimo y protegido. Ideales para balcones y patios , estas aberturas brindan privacidad mientras permiten una entrada controlada de luz y aire. Se pueden realizar con una gran variedad en tamaño y color de perfiles tubos de aluminio, los cuales se pueden colocar vertical u horizontalmente fijado a una estructura soporte.",
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Cortavistas de Aluminio.' },
        {
          title: '  Composición',
          text: 'Fabricado con perfiles tubulares de aluminio de alta calidad.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseñado con un sistema de fijación sólido para una instalación segura.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sin complicaciones.'
        },
        {
          title: '  Estética Elegante',
          text: 'Crea un ambiente íntimo y protegido sin sacrificar la estética.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Puede colocarse de manera vertical u horizontal según las preferencias del cliente.'
        },
        {
          title: '  Control de Calidad',
          text: 'Fabricado con materiales resistentes a la intemperie y bajo estrictos estándares de calidad.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideal para balcones y patios, brindando privacidad y control de la entrada de luz y aire.'
        },
        {
          title: '  Practicidad',
          text: 'Agrega un toque de privacidad y seguridad a espacios exteriores mientras permite una ventilación controlada.'
        }
      ],
      features: [
        "Intimidad y protección.",
        "Control de luz y aire.",
        "Versatilidad de diseño.",
        "Instalación vertical u horizontal.",
      ],
    },
  },
  {
    name: "Parasol",
    // img: ['parasol'],
    filters: [ProductFathersTypes.SOLAR_CONTROL, "parasol"],
    description:
      "Los parasoles son ideales para áreas exteriores que requieren protección contra la luz solar directa. Estas aberturas ofrecen sombra y confort sin comprometer la estética de la obra y proporcionan seguridad a las ventanas. Perfectos para instituciones, fachadas y contra fachadas. Pueden ser de lamas tubulares o laminares. Fijos o móviles.",
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Parasol de Aluminio de Aluplast.'
        },
        {
          title: '  Composición',
          text: 'Fabricado con perfiles de aluminio de alta calidad y lamas tubulares o laminares, según la preferencia del cliente.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseñado con un sistema modular que permite un montaje sólido y estable.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje sencillo y rápido.'
        },
        {
          title: '  Estética Elegante',
          text: 'Proporciona sombra y confort sin comprometer la estética de la obra.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Se adapta a diferentes tamaños y formas de espacios exteriores.'
        },
        {
          title: '  Control de Calidad',
          text: 'Fabricado bajo estrictos estándares de calidad para garantizar durabilidad y resistencia.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideal para áreas exteriores que requieren protección solar, como instituciones, fachadas y contrafachadas.'
        },
        {
          title: '  Practicidad',
          text: 'Ofrece soluciones de sombra con lamas tubulares o laminares fijas o móviles, según las necesidades del cliente'
        }
      ],
      features: [
        "Protección solar efectiva.",
        "Mayor comodidad en exteriores.",
        "Estética arquitectónica conservada.",
        "Configuraciones adaptables.",
      ],
    },
  },
];

export const windowsFatherData:CatalogData[] = [
  {
    name: 'Vidrio templado',
    filters: [ProductFathersTypes.WINDOWS, 'vidriotemplado'],
    description: 'Los vidrios templados son una elección ideal para la seguridad y la resistencia en aplicaciones arquitectónicas. Producidos mediante un proceso de calentamiento y enfriamiento controlado, estos vidrios ofrecen una mayor resistencia a los impactos en comparación con los vidrios estándar. Son altamente versátiles y se utilizan en puertas, ventanas, barandas y divisorios, proporcionando una mayor seguridad y durabilidad.',
    specs: {
      description: [
        {
          title: 'Puertas y Ventanas',
          text: 'Proporcionan seguridad y resistencia a impactos accidentales.'
        },
        {
          title: '  Barandas y Barandales',
          text: 'Añaden un toque estético y cumplen con los estándares de seguridad.'
        },
        {
          title: '  Divisiones de Espacios',
          text: 'Se utilizan en particiones interiores para crear áreas separadas.'
        },
        {
          title: '  Fachadas',
          text: 'Ofrecen protección contra condiciones climáticas extremas.'
        }
      ],
      // features: [
      //   'Proporcionan seguridad y resistencia a impactos accidentales.',
      //   'Añaden un toque estético y cumplen con los estándares de seguridad.',
      //   'Se utilizan en particiones interiores para crear áreas separadas.',
      //   'Ofrecen protección contra condiciones climáticas extremas.',
      // ]
    }
  },
  {
    name: 'Vidrio laminado',
    filters: [ProductFathersTypes.WINDOWS, 'vidriolaminado'],
    description: 'Los vidrios laminados están compuestos por dos o más capas de vidrio unidas por una capa de película de polivinilo (PVB) que actúa como una barrera protectora. Este diseño mejora la seguridad al mantener el vidrio unido en caso de rotura, lo que reduce el riesgo de lesiones. Los vidrios laminados son ideales para aplicaciones que requieren tanto seguridad como estética, como ventanas y fachadas de edificios.',
    specs: {
      description: [
        {
          title: 'Ventanas de Seguridad',
          text: 'Ofrecen protección contra intrusos y reducen el ruido exterior.'
        },
        {
          title: '  Fachadas',
          text: 'Mejoran la seguridad y la estética de los edificios.'
        },
        {
          title: '  Barandas de Balcón',
          text: 'Combina seguridad y diseño en espacios exteriores.'
        },
        {
          title: '  Vidrieras de Tiendas',
          text: 'Proporcionan seguridad y estética en entornos comerciales.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
      
  },
  {
    name: 'Termopaneles DVH (Doble Vidriado Hermético)',
    filters: [ProductFathersTypes.WINDOWS, 'termopanelesdvh'],
    description: 'Los termopaneles, también conocidos como vidrios dobles herméticos (DVH), están diseñados para mejorar el aislamiento térmico y acústico de los espacios. Están compuestos por dos o más vidrios separados por una cámara de aire deshidratado. Esto ayuda a mantener una temperatura interior confortable y reduce la transmisión de sonido, lo que los convierte en una elección ideal para aplicaciones residenciales y comerciales.',
    specs: {
      description: [
        {
          title: 'Ventanas y Puertas',
          text: 'Mejoran la eficiencia energética y el confort en hogares y edificios.'
        },
        {
          title: '  Fachadas de Edificios',
          text: 'Contribuyen al ahorro de energía y a un ambiente más silencioso.'
        },
        {
          title: '  Oficinas y Espacios Comerciales',
          text: 'Proporcionan una temperatura y sonoridad óptimas.'
        },
        {
          title: '  Estudios de Grabación',
          text: 'Minimizan la entrada de ruido exterior.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
  },
  {
    name: 'Vidrios especiales',
    filters: [ProductFathersTypes.WINDOWS, 'vidriosespeciales'],
    description: 'Los vidrios especiales son productos únicos diseñados para aplicaciones específicas. Estos vidrios pueden incluir propiedades como la resistencia a impactos, la protección UV, la autolimpieza o la opacidad controlable. Se utilizan en proyectos donde se requieren características personalizadas para satisfacer necesidades específicas.',
    specs: {
      description: [
        {
          title: 'Museos y Galerías',
          text: 'Protegen las obras de arte de la luz solar y el daño UV.'
        },
        {
          title: '  Espacios de Alta Seguridad',
          text: 'Ofrecen resistencia a impactos y protección contra robos.'
        },
        {
          title: '  Hospitales y Laboratorios',
          text: 'Mantienen la higiene y la seguridad.'
        },
        {
          title: '  Edificios segmento ABC1 e Inteligentes',
          text: 'Controlan la opacidad y la privacidad en tiempo real.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
  },
  {
    name: 'Vidrios decorativos VIIO',
    filters: [ProductFathersTypes.WINDOWS, 'vidriosdecorativos'],
    description: 'Los vidrios decorativos "VIIO" son una elección innovadora para proyectos de diseño interior y arquitectura. Estos vidrios personalizables ofrecen una amplia gama de opciones de diseño, desde patrones geométricos hasta impresiones personalizadas. Combinan la estética con la funcionalidad, permitiendo la creación de espacios únicos y elegantes.',
    specs: {
      description: [
        {
          title: 'Diseño de Interiores',
          text: 'Mejoran la estética de espacios residenciales y comerciales.'
        },
        {
          title: '  Hoteles y Restaurantes',
          text: 'Agregan un toque de lujo y originalidad al diseño interior.'
        },
        {
          title: '  Espacios Públicos',
          text: 'Proporcionan una identidad visual única en áreas de alto tráfico.'
        },
        {
          title: '  Proyectos de Arte',
          text: 'Permiten la creación de instalaciones artísticas y visuales.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
  },
] 

export const garageDoorsData: CatalogData[] = [
  {
    name: 'Porton corredizo riel curvo',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'corredizorielcurvo'],
    description: '-',
    specs: {
      description: [],
      features: [
        'Un portón curvo que mejora la estética de la propiedad.',
        'Se desliza suavemente sin ocupar espacio adicional.',
        'Montaje rápido y eficiente.',
        'Construido para soportar las condiciones climáticas más exigentes.',
      ]
    }
  },
  {
    name: 'Porton corredizo riel lineal',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'corredizorielineal'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Industrias',
          text: 'Controla el acceso de vehículos de carga y personal.'
        },
        {
          title: '  Centros Logísticos',
          text: 'Facilita la entrada y salida de camiones y mercancías.'
        },
        {
          title: '  Estacionamientos',
          text: 'Optimiza la gestión de entrada y salida de vehículos.'
        },
        {
          title: '  Residencias de Lujo',
          text: 'Añade seguridad y estilo a la entrada principal.'
        }
      ],
      features: [
        'Se desliza a lo largo de un riel lineal, aprovechando al máximo el espacio disponible.',
        'Proporciona un alto nivel de seguridad para la propiedad.',
        'Disponible en diferentes estilos y acabados.',
        'Construcción robusta para una larga vida útil.',
      ]
    }
  },
  {
    name: 'Porton enrollable',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'portonenrollable'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Comercios',
          text: 'Asegura la protección de locales y tiendas en horario no comercial.'
        },
        {
          title: '  Estacionamientos Subterráneos',
          text: 'Ahorra espacio y controla el acceso.'
        },
        {
          title: '  Residencias',
          text: 'Proporciona seguridad y facilidad de acceso peatonal.'
        },
        {
          title: '  Almacenes',
          text: 'Optimiza la seguridad y la logística de carga y descarga.'
        }
      ],
      features: [
        'Se enrolla de manera compacta para maximizar el espacio disponible.',
        'Ofrece una barrera resistente contra intrusiones.',
        'Mejora la estética de la propiedad con un diseño contemporáneo.',
        'Se abre y cierra de manera suave y sencilla.',
      ]
    }
  },
  {
    name: 'Porton levadizo',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'portonelevadizo'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Residencias de Lujo',
          text: 'Añade un toque de elegancia y seguridad a la entrada principal.'
        },
        {
          title: '  Empresas',
          text: 'Controla el acceso vehicular en instalaciones comerciales e industriales.'
        },
        {
          title: '  Instituciones',
          text: 'Proporciona una primera impresión de seguridad y confianza.'
        },
        {
          title: '  Parques Empresariales',
          text: 'Gestiona el acceso de vehículos de forma eficiente.'
        }
      ],
      features: [
        'Adecuado para espacios grandes y pequeños.',
        'Apertura y cierre sin ruido.',
        'Se adapta a diferentes estilos arquitectónicos.',
        'Construcción resistente para una mayor seguridad.',
      ]
    }
  },
]

export const resalesData: CatalogData[] = [
  {
    name: 'Puertas placas interiores',
    filters: [ProductFathersTypes.RESALES, 'puertasplacasinteriores'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Versatilidad Interior',
          text: 'Solución versátil para separar espacios interiores con amplia gama de productos.'
        },
        {
          title: '  Diseños Elegantes',
          text: 'Mejora la estética y la funcionalidad de los ambientes con la calidez de la madera.'
        },
        {
          title: '  Amplia Gama de Estilos',
          text: 'Disponibles en varios diseños y acabados.'
        },
        {
          title: '  Fácil Instalación',
          text: 'Montaje sencillo para renovar la apariencia de interiores.'
        }
      ],
    }
  },
  {
    name: 'Mamparas y puertas de vidrio',
    filters: [ProductFathersTypes.RESALES, 'mamparasypuertasdevidrio'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Luminosidad y Transparencia',
          text: 'Aportan luz natural y un aspecto moderno a los espacios.'
        },
        {
          title: '  Personalización',
          text: 'Diversas opciones de vidrio y marcos para adaptarse a la decoración.'
        },
        {
          title: '  Funcionalidad',
          text: 'Separan ambientes sin obstruir visualmente, manteniendo la sensación de amplitud.'
        },
        {
          title: '  Calidad Garantizada',
          text: 'Productos de vidrio resistentes y seguros.'
        }
      ],
    }
  },
  {
    name: 'Cortinas interiores',
    filters: [ProductFathersTypes.RESALES, 'cortinasinteriores'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Control de Luz',
          text: 'Regulan la entrada de luz según las preferencias.'
        },
        {
          title: '  Estilo y Decoración',
          text: 'Complementan la decoración de interiores.'
        },
        {
          title: '  Diseños Variados',
          text: 'Disponibles en una amplia gama de estilos, telas y colores.'
        },
        {
          title: '  Privacidad',
          text: 'Proporcionan privacidad sin comprometer la estética.'
        }
      ],
    }
  },
  {
    name: 'Aberturas de PVC',
    filters: [ProductFathersTypes.RESALES, 'aberturasdepvc'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Eficiencia Energética',
          text: 'Contribuyen al aislamiento térmico y acústico del hogar.'
        },
        {
          title: '  Durabilidad',
          text: 'Construcción resistente y duradera para un rendimiento a largo plazo.'
        },
        {
          title: '  Estética y Personalización',
          text: 'Variedad de acabados y estilos para adaptarse a la arquitectura.'
        },
        {
          title: '  Bajo Mantenimiento',
          text: 'Requieren poco mantenimiento y conservan su apariencia original.'
        }
      ],
    }
  },
];

export const texturesData: TexturesTypes[] = [
  {
    name: "Anodizado gris",
    img: "ANODIZADOGRIS",
  },
  {
    name: "Anodizado natural",
    img: "ANODIZADONATURAL",
  },
  {
    name: "Anodizado natural brillante",
    img: "ANODIZADONATURALBRILLANTE",
  },
  {
    name: "Anodizado natural lijado",
    img: "ANODIZADONATURALLIJADO",
  },
  {
    name: "Anodizado negro",
    img: "ANODIZADONEGRO",
  },
  {
    name: "Anodizado peltre",
    img: "ANODIZADOPELTRE",
  },
  {
    name: "Blanco brillante",
    img: "BLANCOBRILLANTE",
  },
  {
    name: "Blanco semi mate",
    img: "BLANCOSEMIMATE",
  },
  {
    name: "Bronce claro",
    img: "BRONCECLARO",
  },
  {
    name: "Bronce colonial",
    img: "BRONCECOLONIAL",
  },
  {
    name: "Bronce medio",
    img: "BRONCEMEDIO",
  },
  {
    name: "Cedro claro",
    img: "CEDROCLARO",
  },
  {
    name: "Gris micro texturado",
    img: "GRISMICROTEXTURADO",
  },
  {
    name: "Negro semi mate",
    img: "NEGROSEMIMATE",
  },
  {
    name: "Negro semi texturado",
    img: "NEGROSEMITEXTURADO",
  },
  {
    name: "Nogal claro",
    img: "NOGALCLARO",
  },
  {
    name: "Roble oscuro",
    img: "ROBLEOSCURO",
  }
];

export const allCatalogData: CatalogData[] = [
  ...windowsData,
  ...doorsData,
  ...complementarySystemData,
  ...closersData,
  ...controlSolar,
  ...windowsFatherData,
  ...garageDoorsData,
  ...resalesData
];
