// Promises => Objeto que representa la eventual finalización (o falla) de
// una operación asincrónica y devuelve su resultado cuando esté disponible.
// Es una forma de manejar operaciones asíncronas de manera más clara y concisa que los callbacks.

// Puede tener los siguientes estados:
// - Pending (pendiente): Es el estado inicial de una promesa. Indica que la operación aún no se ha completado y sigue en progreso.
// - Fulfilled (cumplida): Significa que la operación se completó satisfactoriamente y se obtuvo el resultado deseado.
// - Rejected (rechazada): Indica que la operación ha fallado o fue rechazada, y se proporciona una razón o mensaje de error.



// Promesa con función anónima tradicional como parámetro 

const hayValor = true;

let objeto1 = new Promise( function (resolve, reject) {

  const movile = { empresa: "Samsung", id: 30404 }

  // if ( true ) { resolve( ) } else { reject( ) }
  if (hayValor) {
    // Cambia el estado de la promesa de pending a fulfilled
    resolve(movile); // Object => { <fulfilled>: resolve }
  } else {
    // Cambia el estado de la promesa de pending a rejected
    reject("ERROR! No hay un valor disponible"); // object => { <rejected>: reject}
  }
});
// console.log(objeto1); // Object => { <fulfilled>: {...} }

// Manejar promesa
objeto1
  // Cuando la promesa se cumple
  // .then recibe la función success handler que puede ser una función aparte o una función anónima
  .then((objeto1) => {
    let msg = `Éste télefono es ${objeto1.empresa} y su referencia es ${objeto1.id}`;
    console.log(msg);
  })
  // Cuando la promesa no se cumple
  // .catch recibe la función failure handler, pude atrapar el error
  .catch((error) => {console.log(error)});



// Promesa con función arrow anónima por parámetro

let objeto2 = new Promise((reject) => {
  reject("Error, funcionando!"); // Object => { <rejected>: reject }
});

// Manejar promesa mediante una función
let mostrarError = () => { 
  objeto2
    .catch((error) => { 
      console.log(error);
    });
  };

// Invocar función
// mostrarError();



// Constructor de promesa separado de la función -> No se suele utilizar

let objeto3 = new Promise(manejador);
// La función puede ser escrita antes de crear la promesa
function manejador(reject){
  reject("Please fix the bug, Sir.")
};  

// Función para manejar el resultado de la Promesa
const fixBug = () => {
  objeto3.then((error) => {console.log(error);})
};

// Invocar función
// fixBug();



// Promesa con success y failure handlers

let teHasPortadoBien = true;

const siMePortoBien = new Promise((resolve, reject) => {
  
  if (teHasPortadoBien) {
    
    // Crea el objeto `telefono`
    const telefono = {
      modelo: 'iPhone12',
      capacidad: '128GB',
      color: 'rojo',
    };

    // Retorna el objeto `telefono`
    resolve(telefono);
  } else {
    // Retorna el mensaje
    reject('te has portado mal');
  }
});

//Antes de usar la promesa hay que definir dos funciones callback (handlers)
// Success handler => Implementa la logica si es que la promesa se cumplió
// Failure handler => Implementa la logica si es que la promesa no se cumplió

const promesaCumplida = (resolvedValue) => {
  console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
};

const promesaRota = (rejectedValue) => {
  console.log(`No te compro nada porque ${rejectedValue}`);
};

// Usar promesa
// promesa.then( succesHandler, failureHandler )

// siMePortoBien.then(promesaCumplida, promesaRota); // console => Uncaught (in promise) error




// Promesa asincrona

// Utiliza el objeto retornado por la promesa `objeto1`
let phone = objeto1

const getPhone = new Promise((resolve, reject) => {

  // Simula petición al servidor
  setTimeout( () => {
  
  // Retorna el objeto
  resolve(phone);
  reject("Error");

  }, 2000);

});
// console.log(promesa); // Object => { <pending> }
// No muestra el resultado de la promesa; Muestra el estado y las propiedades del objeto Promise en sí mismo.

const obtenerMarca = () => {
  getPhone
  // Si obtiene el teléfono usa el valor retornado por la promesa `phone`
  .then( () => {
      // Si se pudo retornar el objeto correctamente, retorna el valor de un atributo 
      phone
        .then((phone) => {console.log(phone.empresa)})
  })

  .catch((error) => {
    console.log(error);
  })
};

// Llamar la función
obtenerMarca();



// Ejemplo de backend con promesa asincrona
const peliculas = [
  { id: 1, titulo: "Pulp Fiction" },
  { id: 2, titulo: "Kill Bill" },
  { id: 3, titulo: "Once upon a time in Hollywwod" },
];

const crearPelicula = (pelicula) => {
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {

      // Accede al array y agrega el objeto
      peliculas.push(pelicula);

      let error = false;
      if (error) {
        reject("No se pudo agregar la pelicula");
      } else {
        // resolve(console.log("La pelicula se agregó"));
      }
    }, 3000)
  });
};

// Recorre el array y accede a la propiedad `titulo` de cada objeto
const getPeliculas = () => {

  setTimeout(() => {
    peliculas.forEach((p) => console.log(p.titulo));
  }, 2000);

};

const nuevaPelicula = {
  id: 4,
  titulo: "Spiderman 2",
};

// Manejar la promesa
crearPelicula(nuevaPelicula)
  // Si la instrucción se cumpió correctamente, ejecuta la función getPeliculas
  // .then(getPeliculas)
  
  // Si la instrucción tiene algún error, muestra el error en consola
  .catch((error) => {
    console.log(error);
  })

  // La instrucción finally se ejecutará primero debido al setTimeOut de las otras funciones
  .finally(() => {
    // console.log("Cargando películas...");
  })




// Chaining de promesas
const usuario = true;

// Función que devuelve la promesa `newUser`
const verificaUsuario = () => {
  return new Promise((resolve, reject) => {
    if (usuario) {
      const newUser = {
        nombre: "Yesid Martinez",
        edad: "19",
        inscrito: true,
      };
      resolve(newUser);
    } else {
      reject("Error verificando usuario");
    }
  });
};

// Función que recibe como parámetro la promesa retornada por la función anterior
const userHello = (newUser) => {
  const mensaje = `Bienvenido ${newUser.nombre}`;
  // Retorna la promesa, que en caso de cumplirse devuelve el mensaje
  return Promise.resolve(mensaje);
};

verificaUsuario()
  // Asigna el nombre `usuarioCreado` al resultado retornado por la promesa (objeto newUser) => usuarioCreado = newUser
  .then((usuarioCreado) => {
    // console.log("Cargando ...");
    return userHello(usuarioCreado)
  })

  .then((usuarioCreado) => {
    if(usuarioCreado){
      // console.log(usuarioCreado);
    }
  })
  // Es posible encadenar múltiples then para realizar operaciones secuenciales y manejar los resultados de cada etapa.


  .catch((errorMensaje) => {
    console.log(errorMensaje);
  });



// Promise .all()
// Toma como argumento un array de promesas y retorna UNA SOLA PROMESA
// Si hay una promesa que no se cumple, Promise.all se rechaza con la razon especificada
// Si todas las promesas se cumplen, Promise.all se resuelve con
// un array que contiene los valores especificados en resolve de cada promesa
//D. Promise.all() se usa cuando el orden de las promesas no importa

// Array de promesas
const promesas = [getPhone, siMePortoBien]

Promise.all(promesas)
  .then((succesValue) => {
    console.log("Las promesas se cumpieron correctamente: ", succesValue);
    console.log(succesValue[0].id);
  })
  .catch((error) => {
    console.log("Alguna de las promesas falló: ", error);
  })
