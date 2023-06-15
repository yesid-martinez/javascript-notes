let x = 3;

// if ( condición(true) ) { instrucción } 
if (x === 5) {
    // console.log("x es igual a 5"); // False -> Ignora la instrucción
};

// if ( condición(true) ) { instrucción } else { instrucción -> condición false }
if (x === 3) {
    // console.log("x es igual a 3"); // true -> Ejecuta la instrucción
} else {
    // console.log("x es diferente a 3"); false -> Ignora la instrucción 
}

// if - else - if 
if (x === 1) {
    // console.log("X vale 1"); 
} else if (x === 2) {
    // console.log("X vale 2");
} else if (x === 3) {
    // console.log("X vale 3");
}

// if - else clásico
let firstElement = 4;
let secondElement = 0;

if (firstElement === 9) {
  secondElement = 8;
} else {
  secondElement = 5;
}
// Expresión ternaria => Expresion booleana ? true : false
secondElement = firstElement === 9 ? 8 : 5;
// console.log(`Valor final de r = ${r}`);

let mensaje = firstElement % 2 === 0 ? "es par" : "es impar";
// console.log(`${a} ${mensaje}`);



// Switch => Alternativa más concisa y legible a utilizar múltiples declaraciones if-else anidadas.
// switch ( expresion ) {
//   case valor1:
//     // Instrucción a ejecutar si `expresion` es igual a `valor1`
//     break;
//     // break => Sale del switch al ejecturar una instrucción

//   case valor2:
//     // Instrucción a ejecutar si `expresion` es igual a `valor2`
//     break;  
//   // Más casos...
//   default:
//     // Código a ejecutar si ninguno de los casos anteriores se cumple
// };

// Definición de constantes
const LUNES = 1;
const MARTES = 2;
const MIERCOLES = 3;
const JUEVES = 4;
const dia = MARTES;

switch (dia) {
  case LUNES:
    console.log("dia es lunes");
    break;
  case MARTES:
    console.log("dia es martes");
    break;
  case MIERCOLES:
    console.log("dia es miércoles");
    break;
  case JUEVES:
    console.log("dia es jueves");
    break;

  default:
    console.log("No es una día válido");
    break;
};

// switch pattern (Patrón de switch)
let var1 = 8;
let var2 = 10;

switch (true) {
  case var1 === 5:
    console.log(`${var1} es mayor a 4`);
    break;
  case var1 >= 6 && var1 <= 10:
    console.log(`${var1} está entre 6 y 10`);
    break;
  case var2 === 5:
    console.log(`${Var2} es 5`);
    break;
  case var2 === 20 || var2 === 10:
    console.log(`${var2} es 20 o 10`);
    break;
  default:
    console.log("No se cumplió con nada");
    break;
};



// Truly and Falsy values

// Cuando se habla de algo que es "truly" (verdadero), se refiere a un valor que se considera como verdadero en el contexto de evaluación.
// Además de la palabra reservada "true", también se consideran como verdaderos los siguientes valores:
// cualquier número distinto de cero, cualquier cadena de texto no vacía, cualquier objeto no nulo, entre otros.
// Estos valores se denominan "truly" porque, al evaluarlos en una expresión booleana, se consideran como verdaderos.

// Cuando se habla de algo que es "falsy" (falso), se refiere a un valor que se considera como falso en el contexto de evaluación.
// Además de la palabra reservada "false", también se consideran como falsos los siguientes valores:
// cero (0), cadena de texto vacía (" "), el valor nulo (null), el valor indefinido (undefined), entre otros.
// Estos valores se denominan "falsy" porque, al evaluarlos en una expresión booleana, se consideran como falsos.



// Example falsy value
const cantidad = 0;

// if else tradicional
if (cantidad > 0){
  console.log("Hay datos");
} else {
console.log("No hay datos");
};

// if else con falsy valor => Mejor legibilidad
if (cantidad) {
console.log("Hay datos");
} else {
console.log("No hay datos");
};