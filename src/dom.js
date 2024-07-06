console.log("%cDocument Object Model", "color: purple; font-size: 1.2rem");

//Obtener elementos

// getElementById() => Obtener elemento mediante su id
// Retorna `null` si no encuentra ningún valor
const titulo = document.getElementById("h2");
// console.log(titulo);


// getElementsByTagName() => Obtener elemento mediante su tag (Etiqueta)
// Retorna lista vacía si no encuentra elementos
const liList = document.getElementsByTagName("li");
// console.log(liList);


// getElementsByClassName() => Obtener elementos mediante una clase
// Retorna lista vacía si no encuentra elementos
const div = document.getElementsByClassName("div-element");
// console.log(div);


// querySelector() => Devuelve el primer elemento que coincide con el selector especificado.
// Si hay varios elementos que cumplen la condición, solo se devuelve el primero.
// Si no se encuentra ningún elemento, el método devuelve null.

// querySelectorAll() => Obtener varios elementos dado un selector.
// Retorna lista vacía si no encuentra elementos

// Seleccionar todos los elementos <p>
const elementosP = document.querySelectorAll('p'); //Empty

// Seleccionar todos los elementos con la clase "mi-clase"
const elementosClase = document.querySelectorAll('.mi-clase');//Empty

// Seleccionar todos los elementos con el atributo "data-id" igual a "1"
const elementosDataId = document.querySelectorAll('[data-id="1"]'); //Empty



// Manipular estilos CSS

const modificarEstilo = document.getElementById("modificarEstilo");

// Modificar estilos => CamelCase
modificarEstilo.style.color = "white";
modificarEstilo.style.backgroundColor = "purple";
modificarEstilo.style.fontSize = "1.5rem";


const agregarClase = document.getElementById("agregarClase");

// Añadir clases a un elemento
agregarClase.classList.add("border");
agregarClase.classList.add("bg-light");

// Eliminar clases añadidas
// agregarClase.classList.remove("border");

// Alternar la presencia de una clase en un elemento => classList.toggle(className)
// Se utiliza comúnmente con eventos



// Navegación por el DOM Tree
const elementoPadre = document.getElementById("dom-tree");

// Obtener los hijos de un elemento
const elementosHijos = elementoPadre.children;
// console.log(elementosHijos);

//Obtener el primer hijo
const primerHijo = elementoPadre.firstChild;
primerHijo.textContent = "Primer hijo";
// console.log(primerHijo);

//Obtener el último hijo
const ultimoHijo = elementoPadre.lastChild;
ultimoHijo.textContent = "Último hijo";
// console.log(ultimoHijo); // Muestra el contenido del elemento

//Obtener el último hijo del padre
const otroUltimoHijo = elementoPadre.lastElementChild;
otroUltimoHijo.textContent = " Otro último hijo";
// console.log(otroUltimoHijo); // Muestra el elemento

//Obtener hijo dada su index
const algunHijo = elementosHijos[1];
algunHijo.textContent = "Otro hijo";
// console.log(algunHijo);
// console.log(elementoPadre.children[1]);

// Obtener padre de un elemento
// console.log(algunHijo.parentElement);

//Chaining
// console.log(algunHijo.parentElement.lastElementChild);



// Crear elementos DOM
// <article></article>
const article = document.createElement("article");
const article2 = document.createElement("article");
const article3 = document.createElement("article");
article.textContent = "Artículo";
article2.textContent = "Artículo 2";
article3.textContent = "Artículo 3";

const section = document.querySelector("section");
section.appendChild(article);
section.appendChild(article2);
section.appendChild(article3);


// Agregar código HTML plano
const nuevoElementoDiv = document.createElement("div");

nuevoElementoDiv.innerHTML = `<h1>HTML Plano</h1><p>Ejemplo de párrafo</p><span>Este es un span</span>`;
section.appendChild(nuevoElementoDiv);


// Agregar varios elementos a la vez
const nuevoElementoDiv2 = document.createElement("div");
const nuevoElementoDiv3 = document.createElement("div");
const nuevoElementoDiv4 = document.createElement("div");
nuevoElementoDiv2.textContent = "Nuevo elemento";
nuevoElementoDiv3.textContent = "Nuevo elemento";
nuevoElementoDiv4.textContent = "Nuevo elemento";

nuevoElementoDiv.append(nuevoElementoDiv2, nuevoElementoDiv3, nuevoElementoDiv4);
// console.log(section);


// Reemplazar un nodo hijo existente con otro nodo hijo=> replaceChild(newNode, oldNode)
const nuevoNodo = document.createElement("div");
nuevoNodo.textContent = "Soy un nuevo nodo";

nuevoElementoDiv.replaceChild(nuevoNodo, nuevoElementoDiv3);
// console.log(section);


// Inserta un nodo nuevo antes de otro nodo de referencia => insertBefore(newNode, referenceNode)
const nuevoNodo2 = document.createElement("div");
nuevoNodo2.textContent = "Soy un nuevo segundo nodo";

nuevoElementoDiv.insertBefore(nuevoNodo2, nuevoElementoDiv4);
// console.log(section);


// nextSibling y previousSibling: Devuelven el siguiente y el anterior nodo hermano de un elemento. 
const elementoActual = section.children[1];
// console.log(elementoActual);    
const elementoAnterior = elementoActual.previousSibling;
// console.log(elementoAnterior);
const siguienteElemento = elementoActual.nextSibling;
// console.log(siguienteElemento);


// Eliminar un elemento
// siguienteElemento.remove();
// Elimina el elemento <article>Artículo 3</article>


// Eliminar un nodo hijo de su nodo padre.
// nuevoElementoDiv.removeChild(nuevoNodo2)
// Elimina el elemento <div>Soy un nuevo segundo nodo</div>