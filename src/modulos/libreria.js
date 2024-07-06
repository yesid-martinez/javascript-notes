// Módulos -> PascalCase
// Para que los modulos corran correctamente hay que agregar una etiqueta script referenciando el archivo js
// dentro del html con la propiedad: type="module" 

// Por alguna razón el code runner no admite los módulos y hay que verlos en la consola del navegador

/**
 * Calcula la suma de 2 valores numéricos
 * @param {*} numero1 Primer valor
 * @param {*} numero2 Segundo valor
 * @returns Sumatoria de los valores recibidos
 */
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
  };
  const restar = (numero1, numero2) => {
    return numero1 - numero2;
  };

const MESES = 12;

// Utiliza export para exportar los valores indicados
export { sumar, restar, MESES};
