import windowsPlaceholder from '../../assets/img/windows-placeholder.png';
import doorsPlaceholder from '../../assets/img/doors-placeholder.png';
import complementarySystemPlaceholder from '../../assets/img/complementary-system.png';
import { ProductFathersTypes, TypeProduct } from '../types/types';

export const getThePlaceholderImage = (filter :string[]):string => {
  if (filter.includes(ProductFathersTypes.OPENERS_TYPES)) {
    return windowsPlaceholder.src;
  }
  
  // if (filter.includes(ProductFathersTypes.CS_TYPES)) {
  //   return windowsPlaceholder;
  // }

  // if (filter.includes(ProductFathersTypes.CLOSERS_TYPES)) {

  // }

  return complementarySystemPlaceholder.src; 
}