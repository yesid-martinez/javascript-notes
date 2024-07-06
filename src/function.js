// FUNCTIONS

// Definición de una función
function mensaje() {
    console.log("Universidad");
    console.log("Distrital");
}

// Invocar función simple
mensaje();


// Definición de función con parámetros
function mensajeParametros(nombre) {
    console.log("Universidad");
    console.log(nombre);
}

// Invocar una función con parámetros
mensajeParametros("Distrital");
mensajeParametros("de Los Andes");
mensajeParametros("Nacional");
mensajeParametros("de La Sabana");


//Función de suma
function sumar(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado;
}

// Invocar función con parámetros y con valor de retorno
let r1 = sumar(20, 26);
// console.log(r1);
let r2 = sumar(105, 205);
// console.log(r2);


// Función de incremento
function incrementarV1(valor, incremento) {
    if (typeof incremento === "undefined") {
      return valor + 1;
    } else {
      return valor + incremento;
    }
}

let r3 = incrementarV1(4, 2);
console.log(r3);
let r4 = incrementarV1(4);
console.log(r4);


// Si no es ingresado el valor del parámetro, este toma el valor asignado.
// Si el valor es ingresado, ignora el valor asignado.
function incrementarV2(valor, incremento = 1) {
    return valor + incremento;
}
  
let r5 = incrementarV2(4, 3);
console.log(r5);
let r6 = incrementarV2(4);
console.log(r6);


// Comentario de documentación JSDoc => Permite comentar y facilitar
// la lecutura de la funcion (Hover en el nombre de la función)

// Recibe otras etiquetas además de @param (parámetros) y @returns:
// @example: Proporciona ejemplos de uso de la función.
// @throws o @exception: Indica las excepciones que puede lanzar la función.
// @deprecated: Marca la función como obsoleta y recomienda utilizar una alternativa.
// @see: Proporciona referencias a otros recursos relacionados.

/**
 * Calcula el área del triángulo dada su base y altura.
 * @param {*} base base del triángulo
 * @param {*} altura altura del triángulo
 * @returns El área del triángulo
*/

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let area = calcularAreaTriangulo(4, 8);
console.log(`El área del triángulo es ${area}`);


// Arrow function (=>)

//Una sola instrucción
const arrow1 = () => console.log("Mensaje 2"); 
arrow1();

// Varias instrucciones
const arrow2 = (nombre) => {
    console.log("Universidad");  
    console.log(nombre);
}
arrow2("Distrital");


/**
 * Calcula si la persona es adulto o niño dada su edad
 * @param {*} edad Edad de la persona
 * @returns La descripción de la persona
 */

const esAdultoV1 = (edad) => (edad >= 18 ? "Adulto" : "Niño");
console.log(esAdultoV1(19));

// Permtite return
const sumarV2 = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  return resultado;
};

const resultadoSumarV2 = sumarV2(9, 10);
console.log(resultadoSumarV2);