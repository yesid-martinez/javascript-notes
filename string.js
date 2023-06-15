// Comentario de una linea
/* Comentario de 
varias 
lineas */

// Definición de variables de tipo string
let number1 = "20";
let number2 = "40";
let number3 = "30.2";
let booleanNumber = false;

// parseInt() => Convert string to integer number -> Only integer numbers
// Permite un segundo argumento (Opcional) => Base númerica del número de la cadena (string) 
let value1 = parseInt(number1);
let value2 = parseInt(number2);

// console.log(typeof(number1)); // String => "20"
// console.log(typeof(value1)); // Number => 20


// parseFloat() => Convert string to float (decimal) number
// Permite "integer strings" aunque es buena práctica usarlo solo para decimal numbers
let value3 = parseFloat(number3);

// console.log(typeof(number3)); // String => "30.2"
// console.log(typeof(value3)); // Number => 30.2


// Number() => Convert a value to number
let value4 = Number(number2);
let value5 = Number(number3);
let value6 = Number(booleanNumber);
let value7 = Number(new Date());

// console.log(typeof(value4)); // Number => 40
// console.log(typeof(value5)); // Number => 30.2
// console.log(typeof(value6)); // Number => 0 -> (true = 1 / false = 0)
// console.log(typeof(value7)); // Number => Representación numérica de la fecha actual en milisegundos

// Para ver correctamente la fecha:
const date = new Date(value7);

// console.log(date); // Imprime la fecha completa
// console.log(date.getFullYear()); // Obtiene el año
// console.log(date.getMonth()); // Obtiene el mes (Los meses se indexan desde 0: Enero = 0)
// console.log(date.getDate()); // Obtiene el día

// Diferencia entre Number, parseInt() y/o parseFloat()  
const numberExample = Number('3.14abc'); // NaN (Caracteres no numéricos presentes)
const numberExample2 = parseFloat('3.14abc'); // 3.14 (Only numbers can be converted to Number)


// String() => Convert a value to string -> Number, boolean, Date...
let value = 22;
let strValue = String(value);
// console.log(typeof(strValue)); // String => "value"

// Puede ser usada como constructor
const str = new String("Hello");
// console.log(str); // Imprime el objeto String: [String: 'Hello']

// Forma más concisa:
// toString() => Convert a value to string -> Number, boolean, Date...
value = 19;
strValue = value.toString();
// console.log(typeof(strValue)); // String => "value"


// Number() => String to number
const nums = "1234";
// console.log(Number(nums)); // 1234 => type number


// .length => Longitud del elemento
let mensaje2 = "Universidad Distrital";
let longitud = mensaje2.length;
// console.log(longitud); // 21


// Acceso a un caracter dado su subíndice
let caracter1 = mensaje2[0];
// console.log(caracter1); // "U"
// No modifica el caracter: es inmutable.
mensaje2[0] = "X";
// console.log(mensaje2); // "Universidad Distrital"


// .substring( inicio, fin(opcional) ) => Extrae una parte específica de una cadena
let nombre = "Axel Yesid Gomez";
// console.log(nombre.substring(5,10)); // "Yesid"


// "String".split( separador, límite(opcional) ) => Divide una cadena de texto en generando un array.
// límite => Determina el número máximo de divisiones que se realizarán en la cadena.
const nombreSplit = nombre.split(" ");
console.log(nombreSplit);

// Templates y Literales
let name = "Axel";
let edad = 19;
let mensaje3 = "El estudiante " + name + " tiene " + edad + " años";
// console.log(mensaje3); // "El estudiante Axel tiene 19 años"
let mensaje4 = `El estudiante ${name} tiene ${edad} años`;
// console.log(mensaje4); // "El estudiante Axel tiene 19 años"