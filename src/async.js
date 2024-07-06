// Código sincrónico

// Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
// thread(hilo) => Proceso que la aplicacion puede usar para completar tareas
//En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

// Ejemplo de JavaScript sincrono -> Bloqueador

// let numeroFinal = 0;
// for (let i = 0; i < 500000000; i++) {
//   numeroFinal += 5;
// };
// console.log(numeroFinal);
// document.body.style.background  = 'red';
// console.log('ultima tarea');



// Async await

// Indicamos con la palabra `async` que la función será asincrona
// Indicamos con `await` el proceso que tomará cierto tiempo
// Las async functions devuelven una promesa

// Crea un nuevo objeto y retorna el valor del atributo `name`
const newUser = (name, edad) => {
    const user = { name: name, age: edad };
    return user.name;
};

// Async function -> Retorna promesa
async function getUser(nombre, age) {
    // Crea y asigna el objeto a la variable `name`
    const name = await newUser(nombre, age);

    if(!name){
        return("Usuario no encontrado")
    }   

    return name;
};

// Manejamos la promesa retornada
getUser("Yesid", 19)
    .then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
});


// Manejamos la función mediante otra función
(async () => {
    try {
        const nameUser = await getUser("Axel", 19)
        console.log(nameUser);
    } catch (error) {
        console.log(error);     
    }
}) ();

