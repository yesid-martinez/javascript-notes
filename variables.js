// Variables => Contenedores para almacenar datos. 

// var => Tiene alcance de función o de ámbito global, dependiendo de dónde se declare.
// Actualmente `var` es no recomendable usarlo y usar en cambio `let` y `const`.

function ejemploVar() {
  var x = 10; // Declaración de una variable con var
//   console.log(x); // 10
};
ejemploVar();
// console.log(x); // Error: x no está definido fuera de la función



// let -> ECMAScript 2015 (ES6)
// Tiene alcance de bloque: La variable solo está disponible dentro del bloque en el que se declara.

function ejemploLet() {
  let x = 10; // Declaración de una variable con let
  if (true) {
    let y = 20;
    // console.log(x); // 10
    // console.log(y); // 20
  };
//   console.log(x); // 10
//   console.log(y); // Error: y no está definido en este ámbito
};

ejemploLet();



// const -> ECMAScript 2015 (ES6)
// Se utiliza para declarar variables con un valor constante.
// El valor no se puede reasignar después de su inicialización y su alcance es de bloque.

function ejemplo() {
  const PI = 3.1416; // Declaración de una constante con const
  console.log(PI); // 3.1416
//   PI = 3.14; // Error: no se puede reasignar una constante
}

ejemplo();