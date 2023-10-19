import windowsPlaceholder from '../../assets/img/windows-placeholder.png';
import doorsPlaceholder from '../../assets/img/doors-placeholder.png';
import complementarySystemPlaceholder from '../../assets/img/complementary-system.png';
import { ProductFathersTypes, TypeProduct } from '../types/types';

interface paginationIndex {
  startIndex: number;
  lastIndex: number; 
}

const names: any = {
  [ProductFathersTypes.OPENERS_TYPES]: 'Aberturas',
  [ProductFathersTypes.CLOSERS_TYPES]: 'Cerramientos',
  [ProductFathersTypes.GARAGE_DOORS]: 'Puertas garage',
  [ProductFathersTypes.RESALES]: 'Reventas',
  [ProductFathersTypes.SOLAR_CONTROL]: 'Control solar',
  [ProductFathersTypes.WINDOWS]: 'Vidrios',
  [ProductFathersTypes.CS_TYPES]: 'Sistemas complementarios'
}

const text: any = {
  [ProductFathersTypes.OPENERS_TYPES]: 'Descubre la elegancia y versatilidad que solo el aluminio y el PVC pueden ofrecer en el mundo de las aberturas. Nuestro catálogo es una ventana al futuro de tu hogar, donde la innovación se une a la funcionalidad y el diseño. Cada página de este catálogo te llevará a un viaje a través de una amplia variedad de aberturas, desde ventanas y puertas hasta cerramientos, cuidadosamente seleccionadas para satisfacer tus necesidades.',
  [ProductFathersTypes.CLOSERS_TYPES]: 'Entra en el mundo de la durabilidad, la eficiencia energética y la estética única que solo el aluminio y el PVC pueden ofrecer. Explora nuestro catálogo y encuentra el cerramiento perfecto para tu espacio. Cada producto es una oportunidad para transformar tu hogar o negocio en un lugar más cómodo y versátil.',
  [ProductFathersTypes.GARAGE_DOORS]: 'Adéntrate en el mundo de la durabilidad, la eficiencia energética y la estética única que solo el aluminio y el PVC pueden ofrecer. Explora nuestro catálogo y encuentra la puerta de garaje perfecta para tu hogar o negocio. Cada producto es una oportunidad para elevar la seguridad y el estilo de tu propiedad, proporcionándote la tranquilidad y el atractivo visual que deseas.',
  [ProductFathersTypes.RESALES]: 'Te damos la bienvenida a una experiencia de reventas en aluminio y PVC sin comparación. Tu búsqueda de productos de calidad y estilo comienza aquí.',
  [ProductFathersTypes.SOLAR_CONTROL]: 'Adéntrate en el mundo del control solar, donde la durabilidad, el ahorro energético y el diseño se combinan de manera armoniosa. Explora nuestro catálogo y descubre las soluciones ideales para regular la luz y la temperatura en tu espacio. Cada producto representa una oportunidad para maximizar el confort y la eficiencia en tu hogar o negocio.',
  [ProductFathersTypes.WINDOWS]: 'Explora el mundo de la transparencia y el rendimiento visual. Nuestro catálogo abarca una amplia gama de aplicaciones de vidrio, desde ventanas y puertas hasta mamparas y elementos decorativos. Cada producto representa una oportunidad para mejorar la luminosidad y la estética de tu entorno.',
  [ProductFathersTypes.CS_TYPES]: 'Te damos la bienvenida a nuestro catálogo de sistemas complementarios, donde encontrarás una amplia variedad de soluciones diseñadas para mejorar y enriquecer tus proyectos. Cada página de nuestro catálogo te presenta una cuidadosa selección de sistemas en aluminio y PVC que añaden funcionalidad, seguridad y diseño a tus espacios.'
}

export function pagination(arr: any[], index: paginationIndex) {
  let paginated;
  if (index.lastIndex <= arr.length) {
    paginated = arr.slice(index.startIndex, index.lastIndex); 
  } else {
    paginated = arr.slice(index.startIndex, arr.length);
  }
  
  return paginated;
} 

export function getProductTypeName(filter: string) {
  return names[filter] ?? 'Producto';
}

export function getProdutTypeText(filter: string) {
  return text[filter] ?? '';
}

// export const getFormatData = () => {
//   const texto = `Eficiencia Energética: Contribuyen al aislamiento térmico y acústico del hogar.
//   Durabilidad: Construcción resistente y duradera para un rendimiento a largo plazo.
//   Estética y Personalización: Variedad de acabados y estilos para adaptarse a la arquitectura.
//   Bajo Mantenimiento: Requieren poco mantenimiento y conservan su apariencia original.`;

//   // Divide el texto en líneas.
//   const lineas = texto.split('\n');

//   // Inicializa un array vacío para almacenar los objetos.
//   const arrayDeObjetos:any = [];

//   // Recorre cada línea y agrega la información como un objeto al array.
//   lineas.forEach(linea => {
//     const [clave, valor] = linea.split(': ');
//     arrayDeObjetos.push({ title: clave, text: valor });
//   });

// }


export function getFormatDate(date: string, config: Intl.DateTimeFormatOptions = { weekday: "short", year:"2-digit", month:"short", day:"2-digit"}) {
  return new Date(date).toLocaleDateString('es-ar', config)
}

export const getThePlaceholderImage = (filter :string[]):string => {
  if (filter.includes(ProductFathersTypes.OPENERS_TYPES)) {
    return windowsPlaceholder;
  }
  
  // if (filter.includes(ProductFathersTypes.CS_TYPES)) {
  //   return windowsPlaceholder;
  // }

  // if (filter.includes(ProductFathersTypes.CLOSERS_TYPES)) {

  // }

  return complementarySystemPlaceholder; 
}