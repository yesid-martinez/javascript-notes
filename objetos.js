console.log("%cOOP","color:blue; font-size: 1rem;");
// JSON => JavaScript Object Notation

let usuario = {
// atributo: valor,
    nombre: "Yesid",
    apellido: "Martinez",
    edad: 19,
    activo: true,
    hobbies: ["music", "running", "reading"],
    ubicacion: { ciudad: "Melbourne", pais: "Australia"},
    
    // Método => Función asociada a un objeto/clase.
    // Encapsula la lógica y comportamiento del objeto.
    
    // esAdulto => Método que retorna valor booleano inidicando si es mayor o menor de edad.
    esAdulto() {
    return this.edad >= 18;
    // this => Se refiere al objeto actual desde el cual se llama o se ejecuta un método.
  }

}
// console.log(usuario);
// console.log(usuario.esAdulto());



// Acceso a las propiedades y métodos de un objeto

// Notación punto .
let e = usuario.edad;
// console.log(e); // 19
// Chaining
e = usuario.ubicacion.ciudad
// console.log(e); // "Melbourne"

// Notación llaves []
let n = usuario["nombre"];
// console.log(n); // "Yesid"

// Modificar atributo de un objeto
usuario.nombre = "Axel";

let usuarioCopia = {...usuario};
// console.log(usuarioCopia); // {nombre: "Axel"}
// Copia del objeto => Permite visualizar el ejemplo.
// Oculta el atributo `curso` y su valor de la siguiente instruccion ()


// Notación punto, crear atributos -> Si no existe el atributo, lo crea.
usuario.curso = 1103;
// console.log(usuario); {curso: 1103}

// delete => Eliminar un atributo
delete usuario.nombre;
// console.log(usuario);

//Verifica si un objeto tiene cierto atributo -> Retorna valor booleano
let validator = usuario.hasOwnProperty("nombre");
// console.log(validator); // false


// Example
const peliculas = {
    pelicula: "Orozco",
    anio: 1996
};
// console.log(peliculas);


peliculas.anio = 1995;
// Modifica el valor del atributo
// console.log(peliculas);

//"Congela" el objeto
Object.freeze(peliculas);

peliculas.anio = 1990;
// No aplica la modificación del atributo porque se está aplicando a un "Freeze object".
// console.log("Peliculas: " + peliculas.pelicula + " " + peliculas.anio);


// Example 2
let coleccion = [
    {
      artista: "ACDC",
      anio: 1980,
      cantante: "Bon Scott",
      formatos: ["LP", "CD", "MP3", "Streaming"],
    },
    {
      artista: "Guns and Roses",
      anio: 1991,
      cantante: "Axl Rose",
    },
    { artista: "Queen", anio: 1978, cantante: "Fredy Mercury" },
];
  
// Ingresa al arreglo mediante el índice de los objetos e ingresa a uno de sus atributos 
// console.log(coleccion[1].artista);

// Recorre todos los objetos del arreglo
coleccion.forEach((item) => console.log(item.artista));

// Muestra el arreglo en forma tabla en DevTools
console.table(coleccion);

// Itera sobre un array dentro de un objeto del array principal.
coleccion[0].formatos.forEach((f) =>
console.log(`%cEl formato es ${f}`, "color: purple")
);



// Example 3
const arregloFloral = {
  flor: "rosa",
  tamaño: "mediano",
  valor: 45000,
  forma: "base",
};

for (prop in arregloFloral) {
  // console.log(prop); // Para imprimir las propiedades del objeto
  // console.log(arregloFloral[prop]); // Para imprimir los valores del objeto
};

//Ejemplo para calcular la cantidad total de los valores
const flores = {
  rosa: 1200,
  girasol: 800,
  lirios: 650,
  verde: 500,
};

let cantidadTotalFlores = 0;
for (flor in flores){
  cantidadTotalFlores += flores[flor];
};
// console.log(cantidadTotalFlores); // 3150