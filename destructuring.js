// Destructuring => Permite descomponer una estructura de datos compleja, como un objeto o un array,
// en partes más pequeñas y asignarlas a variables individuales de forma más concisa.

// En lugar de acceder a los elementos o propiedades de una estructura de datos mediante el uso
// de índices o nombres de propiedades, proporciona una sintaxis especial que permite
// extraer los valores directamente y asignarlos a variables independientes.

// Objeto
const usuario = {
    nombre: "Yesid",
    apellido: "Martinez",
    edad: 19,
    libros: {terror: 2, fantasia: 6}
};


// Accede a las propiedades del objeto => const { variable = {propiedad} } = objeto
const {edad = {nombre}} = usuario;
// console.log(edad) // 19


// Dentro del objeto `usuario`, se accede a la propiedad `libros`(objeto) y  obtiene su propiedad `fantasia`.  
const { libros: {fantasia}} = usuario;
// Declara la variable con el nombre del valor de la propiedad, no hacerlo genera undefined
// console.log(fantasia); // 6

// En caso de querer definir otro  nombre de variable se accede directamente al valor de la propiedad.
const { libros: {fantasia: librosFantasia}} = usuario;
// console.log(librosFantasia); // 6 


//Función arrow común
const mostrarInfo = (user) =>{
    console.log(user.nombre, user.apellido);
};
// mostrarInfo(usuario); // Yesid Martinez

//Función arrow con destructuring 
const mostrarInfo2 = ({nombre, apellido}) =>{
    console.log(nombre, apellido);
};
// mostrarInfo2(usuario); // Yesid Martinez


// Swaping => Intercambio o cambio de valores entre dos variables.

// Cambio de valores con variable temporal 
// Declaración de variables
let a = 10;
let b = 20;

let temporal = a; //temporal = 10
a = b; // a = 20 - temporal = 10
b = temporal; // b = 10


// Swaping con destructuring
// Declaración de variables
let c = 30;
let d = 40;
// console.log(c, d); // 30 40

[c, d] = [d, c];    
// console.log(c, d); // 40 30



// Arrays con destructuring
const numeros = [10, 20, undefined, 40, 50, 60, 70, 80] 

// Definir variables => [elemento1, elemento2]
// const [ variableFirstElement, variableSecondElement ] = array
const [first, second] = numeros;
// console.log(second); // 20 


// Acceso por destructuring saltando posiciones
const [,sec,,cua,qui,,sep,oct] = numeros;
// console.log(cua); // 40


// Operador spread ... con destructuring
const [p, , , cu, ...resto] = numeros;
// console.log(cu); // 40s
// console.log(resto); // numeros[]


// Definición de variable dando un valor por default
const [ , , thi ] = numeros
// console.log(thi); // undefined
const [, , ter = 30] = numeros;
// console.log(ter); // 30


const nombreCompleto = "Yesid Gomez";
// Convierte string a array y hace destructuring de cada posición en variables
const [firstName, lastName] = nombreCompleto.split(" ");
// console.log(lastName); // "Gomez"


// Destructuring de un array retornado por una función
function calcular(numero1, numero2) {
    const suma = numero1 + numero2;
    const resta = numero1 > numero2 ? numero1 - numero2 : numero2 - numero1;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    return [suma, resta, multiplicacion, division];
}

const [suma, resta, multiplicacion, division] = calcular(1, 3);
// console.log(suma, resta, multiplicacion, division);
// console.log(suma); // 4


// Destructuring de un arreglo de objetos
const peliculas = [
    { id: 1, titulo: "Titanic" },
    { id: 2, titulo: "Terminator" },
    { id: 3, titulo: "Avatar" },
    { id: 4, titulo: "The Abyss", duracion: 120 },
];

// Forma tradicional
const t1 = peliculas[0].titulo;
const t3 = peliculas[2].titulo;
// console.log(t3); // "Avatar"

const [{ titulo: titulo1 }, , { titulo: titulo3 }, { duracion }] = peliculas;
// console.log(titulo1, titulo3, duracion);
// console.log(titulo3); // "Avatar"