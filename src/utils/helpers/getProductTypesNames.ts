import { ProductFathersTypes } from "../types/types";

const names: any = {
  [ProductFathersTypes.OPENERS_TYPES]: 'Aberturas',
  [ProductFathersTypes.CLOSERS_TYPES]: 'Cerramientos',
  [ProductFathersTypes.GARAGE_DOORS]: 'Puertas garage',
  [ProductFathersTypes.RESALES]: 'Reventas',
  [ProductFathersTypes.SOLAR_CONTROL]: 'Control solar',
  [ProductFathersTypes.WINDOWS]: 'Vidrios',
  [ProductFathersTypes.CS_TYPES]: 'Sistemas complementarios'
}
export function getProductTypeName(filter: string) {
  return names[filter] ?? 'Producto'
}