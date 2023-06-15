// Arreglo vacío
let elementos1 = [];


// Arreglo con valores inicializados
let elementos2 = [10, 20, 30];


// Diferentes tipos de dato
let elementos3 = [10, 20, 3.4, "Catalina", true];


// Obtener / Modificar valores de un arreglo
let elementos4 = [100, 200, 300, 800, 50];

// Obtener un valor del arreglo
let primero = elementos4[3];
// console.log(primero); // => 800

// Modificar valor en el arreglo
elementos4[1] = 500;
// console.log(elementos4); // [100, 500, 300, 800, 50]


// Copias de un arreglo
// Copia => Valor
let a = 5;
let b = a; // b -> 5
a = 6; // a -> 6


// Copia => Referencia -> ¡NO SE DEBE HACER, GENERA ERROR!
let original = [1, 2, 3];
let copia = original;
// console.log(original); // [1, 2, 3]
// console.log(copia); // [1, 2, 3]

// COMPROBACIÓN DE ERROR, MODIFICA EL ARRAY ORIGINAL
// pop() => Elimina el último elemento del arreglo
original.pop(); 
// console.warn(original); // [1, 2]
// console.warn(copia); // [1, 2]


// slice() => Copia todo el arreglo -> No genera error
let original2 = [20, 30, 40];
let copia2 = original2.slice();
// console.log(original2); // [20, 30, 40]
// console.log(copia2); // [20, 30, 40]

// slice(x, y) => Copia el arreglo desde la posición `x` a la posición `y` 
let original3 = [10, 20, 30, 40, 50, 60, 70];
let copia3 = original3.slice(2, 6);
// console.log(copia3); // [30, 40, 50, 60]


// Operador Spread ... => Copia todo el arreglo -> EcmaScript 6
let original4 = [1, 2, 3];
let copia4 = [...original4];
// console.log(copia4); // [1, 2, 3]

// Copia los elementos (...) y genera un nuevo array con los elementos copiados
let nuevo1 = [...original4, ...copia4];
// console.log(nuevo1); [1, 2, 3, 1, 2, 3]

let nuevo2 = [10, 20, ...original4, 30, ...copia4];
// console.log(nuevo2); // [10, 20, 1, 2, 3, 30, 1, 2, 3]



// Modificación de arrays
// Agregar elementos
let numeros = [10, 20, 30, 40];

// Agregar elementos al inicio
numeros.unshift(2000, 3000);
// console.log("numeros", numeros); // [2000, 3000, 10, 20, 30, 40]

// Agregar elementos al final
numeros.push(9000);
// console.log("numeros", numeros); // [2000, 3000, 10, 20, 30, 40, 9000]

// Agregar elementos en una posición determinada
// splice(Posición, 0 = Borrar 0 elementos, valor)
numeros.splice(0, 0, 5500);  
// console.log(numeros); // [5500, 2000, 3000, 10, 20, 30, 40, 9000]

// Eliminar el primer elemento
numeros.shift();
// console.log(numeros); // [2000, 3000, 10, 20, 30, 40, 9000]

// Eliminar el último elemento
numeros.pop();
// console.log(numeros); // [2000, 3000, 10, 20, 30, 40]

// Eliminar elementos
// splice(Posición, cantidad de elementos)
numeros.splice(2, 1);
// console.log(numeros); // [2000, 3000, 20, 30, 40]

// at() => Acceder a un elemento especifico de un arreglo -> EcmaScript 12
let lastElement = numeros.at(-1); // Accede al último elemento del array
// console.log(lastElement); // 40

// Obtener el índice de un elemento del array
let frutas = ["Naranja", "Manzana","Feijoa", "Banano", "Piña"];
let index = frutas.indexOf("Feijoa");
// console.log(index); // 2


// FUNCIONES AVANZADAS

let valores = [1, 2, 3, 4]; 

// reduce(Acumulador, elementoActual) => Recorre cada elemento del array y los reduce a un solo valor
// Si no le damos un valor inicial, el primer valor será igual al índice 0
let reduce = valores.reduce((acumulador, currentNum) => {
  return acumulador + currentNum;
}, 0);
// console.log(reduce1) // 10

// map() => Aplica una función a cada elemento del array y crea un nuevo array 
let map = valores.map((valor) => valor + 100);
// console.log(map); // [101, 102, 103, 104]

let notas = [4.5, 3.4, 2.1, 3.9, 1.5, 4.8, 0.6];
// map() con expresión ternaria
let map2 = notas.map((nota) => (nota > 3 ? true : false));
// console.log(map2); // [true, true, false, true, false, true, false]


// .length => Longitud 
let longitud = notas.length;
// console.log(longitud); // 7


// // sort() => Ordena los elementos en orden ascendente (de la A a la Z) por defecto.
let ordenar = [3, 23, 12]
// ordenar.sort();
// console.error(ordenar); // [12, 23, 3] -> Incorrecto 

// Por ejemplo, si tenemos tres cadenas como C (3), BC (23) y AB (12), JavaScript las ordenará como AB, BC y C
// en orden ascendente, lo que es alfabéticamente correcto.
// Sin embargo, JavaScript ordenará los números (alfabéticamente nuevamente) como 12, 23 y 3, lo cual es incorrecto.

// .sort(function(a, b) {return a - b}))
// El método sort() puede ordenar valores negativos, cero y positivos en el orden correcto. Cuando compara
// dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto.

// Si el resultado es negativo, a se ordena antes que b.
// Si el resultado es positivo, b se ordena antes de a.
// Si el resultado es 0, nada cambia.

ordenar.sort((function(a, b){return a - b}));
//Para un output descendiente restamos b de a (b - a)
// console.log(ordenar); // [3, 12, 23] -> Correcto


// Invertir un arreglo
ordenar.reverse();
// console.log(ordenar); // [23, 12, 3]


// Chaining -> Organiza e invierte los valores
notas.sort().reverse();
// console.log(notas); // [4.8, 4.5, 3.9, 3.4, 2.1, 1.5, 0.6]



// forEach() => Define una función para cada elemento del array
const productos = ["Hielo", "Agua", "Ron", "Limón"]

productos.forEach((prod) => {
  // console.log(productos.indexOf(prod) + ". " + prod)
})
// Output:
// 0. Hielo
// 1. Agua
// 2. Ron
// 3. Limón


// .every() => Retorna un único valor booleano si TODOS los valores cumplen o no con la condición
edades = [82, 19, 18, 32, 45, 18, 20, 22]
calc = edades.every(edad => edad >= 18);
// console.log(calc); // False
// ¡Llamar este método en un array vacío devuelve true para cualquier condición!


// .some() => Retorna un único valor booleano si ALGÚN valor cumple o no con la condición
let alguno = edades.some((edad) => edad > 50);
// console.log("¿Hay algún anciano?: " + alguno); // true


// .filter() => Filtra mediante una condición y devuelve una copia del arreglo unicamente con los valores que cumplan la condición.
let pares = edades.filter((edad) => edad % 2 === 0);
// console.log("Pares: ", pares); // [numeroPar, numeroPar, numeroPar]


// Recorrido de arreglos mediante ciclos
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes"];

// for in => Recorre los INDICES del arreglo
for (const index in dias) {
  // console.log(dias[index]);
}

// for of => Recorre cada VALOR del arreglo, no accede al índice 
// para obtener un valor
for (const dia of dias) {
  // console.log(dia);
}

// forEach => Forma más declarativa y concisa de iterar sobre un arreglo y realizar una operación en CADA ELEMENTO 
// dias.forEach((dia) => console.log(dia));

// for tradicional
for (let index = 0; index < dias.length; index++) {
  // console.log(dias[index]);
};


// .join() => Combina los elementos de un array en una cadena y devuelve la cadena resultante
const join = dias.join(" ");
// console.log(join); // "lunes martes miércoles jueves viernes"


// Array.from() => Crea un nuevo array a partir de un objeto/elemento iterable
// Tiene un segundo parámetro opcional: Función de mapeo que se aplica a cada elemento iterable
const numbers = [1, 2, 3];
const newArray = Array.from(numbers, num => num * num);
// console.log(newArray); // [1, 4, 9]

const strNumbers = ["1", "2", "3"];
const newArray2 = Array.from(strNumbers, Number) 
// console.log(newArray2); // [1, 2, 3] => type number



// NUEVOS MÉTODOS ES23

// // toSpliced() => splice() mejorado
// // Con splice() afectamos el array original si no lo copiamos antes con slice()
// // Con toSpliced() no afectamos el array original sin la necesidad de usar slice()

// // toSpliced(startIndex, deleteCount, item1, item2, itemN)
// let newFrutas = frutas.toSpliced(1, 0, "Lulo");
// // console.log(frutas2); // ["Naranja", "Lulo", "Manzana","Feijoa", "Banano", "Piña"]


// // toReversed() => .reverse() mejorado
// // Con reverse() invertimos el array original si no lo copiamos antes con slice()
// // Con toReversed() invertimos el array (copia) sin la necesidad de usar slice()
// let newNumbers = [1, 4, 6, 10];
// newNumbers.toReversed();
// console.log(newNumbers); // [10, 6, 4, 1]


// // toSorted() => .sort() mejorado
// // Con sort() ordenamos el array original si no lo copiamos antes con slice()
// // Con toSorted() ordenamos el array (copia) sin la necesidad de usar slice()