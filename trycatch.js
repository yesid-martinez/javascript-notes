// Try ... catch => Estructura utilizada para manejar errores en un bloque de código.
// Permite controlar y gestionar las excepciones que pueden ocurrir durante la ejecución del código,
// evitando que el programa se detenga abruptamente.

// Al ejecutar el código dentro del bloque try, JavaScript monitorea si ocurre alguna excepción.
// Si se produce una excepción, el flujo de ejecución se desvía al bloque catch correspondiente.
// La variable error (puede tener cualquier nombre) captura la información sobre el error que se ha producido.

try {
    // Bloque de código donde pueden ocurrir excepciones
    // Aquí se coloca el código que se quiere monitorear en busca de errores
    } catch (error) {
    // Bloque de código que se ejecuta si ocurre una excepción
    // Aquí se puede manejar el error de acuerdo a las necesidades
}

// Example
try {
    // Intentamos ejecutar un código que puede generar un error
    const resultado = 10 / 0; // Esto lanzará una excepción de división por cero
    console.log(resultado); // Esta línea no se ejecutará debido a la excepción
  } catch (error) {
    // Capturamos la excepción y realizamos alguna acción
    console.log('Se produjo un error:', error.message);
}

// La cláusula finally se ejecuta siempre, independientemente de si se produce una excepción o no.
// Se utiliza para realizar acciones de limpieza o finalización de código, asegurándose de que ciertas
// operaciones se realicen, sin importar si se captura o no una excepción.

try {

  } catch (error) {

  } finally {
    // Bloque de código que siempre se ejecuta, tanto si se produce una excepción como si no
    // Aquí se puede realizar operaciones de limpieza o finalización
  }
