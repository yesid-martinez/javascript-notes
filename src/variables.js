// Variables => Containers for data storage and manipulation. 

// Definition of a variable.
var variableName;

// Assignment of a variable.
variableName = "Value";

console.log(variableName); // Output: Value 

// var => Has function scope or global scope, depending on the context of the declaration.
// Due to its potential for unexpected behavior, it's generally advised to use `let` and `const` introduced in ES6.


function varExample() {
  var x = 10; // Variable declaration with function scope using var
  console.log(x); // 10
};
varExample();
// console.log(x); // Error: x is not defined outside the function scope



// let => Introduced in ECMAScript 2015 (ES6)
// Declares a block-scoped local variable
// Provides a more predictable scope compared to `var`.

function letExample() {
  let x = 10; // Declaration of a variable with let
  if (true) {
    let y = 20;
    // console.log(x); // 10
    // console.log(y); // 20
  };
//   console.log(x); // 10
//   console.log(y); // Error: y is not defined in this scope
};

letExample();



// const -> ECMAScript 2015 (ES6)
// Se utiliza para declarar variables con un valor constante.
// El valor no se puede reasignar después de su inicialización y su alcance es de bloque.

function constExample() {
  const PI = 3.1416; // Declaration of a constant with const
  console.log(PI); // 3.1416
//   PI = 3.14; // Error: Unable to remap a constant
}

constExample();