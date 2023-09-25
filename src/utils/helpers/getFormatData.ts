export const getFormatData = () => {
  const texto = `Eficiencia Energética: Contribuyen al aislamiento térmico y acústico del hogar.
  Durabilidad: Construcción resistente y duradera para un rendimiento a largo plazo.
  Estética y Personalización: Variedad de acabados y estilos para adaptarse a la arquitectura.
  Bajo Mantenimiento: Requieren poco mantenimiento y conservan su apariencia original.`;

  // Divide el texto en líneas.
  const lineas = texto.split('\n');

  // Inicializa un array vacío para almacenar los objetos.
  const arrayDeObjetos:any = [];

  // Recorre cada línea y agrega la información como un objeto al array.
  lineas.forEach(linea => {
    const [clave, valor] = linea.split(': ');
    arrayDeObjetos.push({ title: clave, text: valor });
  });

  console.log(arrayDeObjetos);
}