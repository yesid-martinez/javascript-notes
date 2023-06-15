// Importa los valores indicados
import { sumar, restar, MESES} from "../modulos/libreria.js";

let resultado = sumar(22, 32);
console.log(resultado);

resultado = restar(40, 39);
console.log(resultado);

console.log(MESES);

const sect = document.createElement("section");
const titulo1 = document.createElement("h2");
const titulo2 = document.createElement("h3");

titulo1.textContent = "Soy el titulo 1";
titulo2.textContent = "Soy el titulo 2";


const titulos = [titulo1, titulo2];

// Desestructuración de elementos de un arreglo
sect.append(...titulos);

console.log(sect)