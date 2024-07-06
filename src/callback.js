// Callback => Función que se pasa como argumento a otra función
// y se invoca dentro de esa función en un momento específico.

//Callbacks son funciones que se pasan como parametro adentro de otras funciones
//y se invocan adentro de la funcion principal para completar alguna tarea


// Definir función
const saludar  = (nombre) => { 
    console.log(`Buen día,señor ${nombre}?`);
};

// Definir una segunda función y pasar el callback como parámetro

// const funcion2 = ( función(callback), parámetros ) => { 
//     Instrucción;
//     callback(parámetros)
// }

const iniciarSesion = ( saludar, nombre ) => {

    console.log("Iniciando sesión...");

    // Callback
    saludar(nombre)
};

// Ejecutar callback
// iniciarSesion(saludar,"Yesid");



// Genera e imprime un número alatorio entre 0 y 9
const generaNumero = () => {
    return Math.floor(Math.random() * 10);
  };
  
  const imprimeNumero = (callback) => {
    let numero = callback();
    console.log(numero);
};
// imprimeNumero(generaNumero);


// Async callback
// function getUser() {
//     // Simula la demora de respuesta en una petición al servidor
//     setTimeout( function obtenerusuario(){
//         console.log("Su usuario es ...");
//     }, 3000)

// };

// function getAge() {
//     console.log("Obteniendo edad...");
// };

// getUser();
// getAge()    

// Sigue con el hilo y ejectuta las demás funciones
// 3 segundos después se ejecuta la función principal

// Para solucionar esto usamos el callback

function getUser( getAge ) {
    
    console.log("Obteniendo usuario...");
    
    // Simula la demora de respuesta en una petición al servidor
    setTimeout( function obtenerusuario(){
        console.log("Usuario encontrado!");
        getAge();
    }, 3000)

};

function getAge() {
    console.log("Su edad es 19");
};

// getUser(getAge);
// Ejecuta correctamente las instrucciones sin que otras funciones se activen durante el tiempo de espera



// Asynchronous callbacks => Se ejecutan cuando algo pasa

let url = 'https://youtu.be/gisEHxRQIto';

const bajaVideo = (url, procesaVideo) => {    
console.log(`Descargando video de ${url} `);

setTimeout(() => {
    console.log(`Video ${url} descargado`);
    procesaVideo(url);
}, 5000);

};

const procesaVideo = () => {
console.log(`Reproduciendo video...`);
};

// bajaVideo(url, procesaVideo);
  

// Ejemplo de petición a base de datos (Callback hell)
function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
      if (err) {
        res.send(err);
      } else {
        Tasks.findById(user.tasksId, function (err, tasks) {
          if (err) {
            return res.send(err);
          } else {
            tasks.completed = true;
            tasks.save(function(err) {
              if (err) {
                return res.send(err);
              } else {
                res.send('Task Completed');
              }
            });
          }
        });
      }
    });
  }