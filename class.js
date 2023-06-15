// Clases => Plantilla/Plano para crear objetos
// Define las propiedades y los métodos que los objetos de esa clase tendrán.
// Usa PascalCase => Primera letra mayúscula

// Constructor => Configura y establece el estado inicial de los objetos creados a partir de la clase.
// Se invoca automáticamente al crear nuevas instancias de la clase (Objetos)

class Persona {
    constructor(nombre) {
      // this => Se refiere al objeto actual (Cada instancia) de la clase
      // Crea el atributo nombre y pasa su valor como parámetro
      this.nombre = nombre;
    };
}; 
  
// Instancia => Cada nuevo objeto de la clase -> Copia los atributos y valores determinados en la clase)
// variable = new Class() 
const persona1 = new Persona("Yesid");
// `persona1` ahora es un objeto con la propiedad `nombre` y valor "Yesid"
// console.log(persona1);   


// Método => Función asociada a un objeto o clase

// Clases con métodos
class User{
  constructor(name, age){
    this.name = name,
    this.age = age
  };

  notice(){
    if(this.isLoggedIn === true){
      console.log(`¡Hi ${this.name}, you have been logged!`);
    }else{
    console.log(`Bye ${this.name}, take care`);
    }
  };
};

let user1 = new User("Yesid", 19)
// user1.notice();
// Todos los objetos de la clase pueden usar el método 


// Herencia

// Clase derivada (Clase hija)
// Hereda las propiedades y métodos de la clase padre (Persona) con
// la palabra clave "extends"
class Student extends User {

    constructor(name, age, degree) {
      // super( ParametroClasePadre ) => Llama al constructor de la clase padre
      super(name, age);

      // Agrega la propiedad `carrera` a la instancia
      this.degree = degree;
    };
};

const student1 = new Student("Axel", 19, "Programming");
// `estudiante1` ahora es un objeto con las propiedades `name` y `age` de la clase padre
// y una nueva propiedad propia: `degree` 
// console.log(student1);


// Clase con atributos privados
class Usuario {
    // Atributos privados => Encapsulan la información interna de la clase (Acceso no permitido)
    // Por defecto las los atributos son públicos (Acceso permitido)
    
    // Definición de atributos privados
    #nombre;
    #ciudad;
    #activo;

    
    constructor(nombre, edad, ciudad) {
      this.#nombre = nombre;
      this.edad = edad;
      this.#ciudad = ciudad;
      // Valor del atributo por defecto
      this.#activo = true;
    }

    // Métodos de acceso => Permite acceder a los atributos privados
    // Getter => Obtiene el valor de un atributo
    get getNombre() {
        return this.#nombre;
      };
    // Setter => Modifica el valor de un atributo
    set setNombre(nombre) {
      this.#nombre = nombre;
    };

    // Método de negocio
    esAdulto() {
      return this.edad >= 18;
    }
    esActivo() {
      return this.#activo;
    };
};

let usuarioNuevo = new Usuario("Yesid", 19, "Bogotá D.C");
// console.log(usuarioNuevo);  

// Acceder al valor del atributo privado con getter
// console.log( usuarioNuevo.nombre); // undefined -> Atributo no accesible (Privado)
// console.log(usuarioNuevo.getNombre); // "Yesid"


// Modificar el valor del atributo
// usuarioNuevo.nombre = "Diana" // Permite modificar si se está usando setter
// console.log(usuarioNuevo); // nombre: "Diana"
// Es buen práctica no acceder a los atributos privados con notación de punto

// Modificar con setter
// console.log(usuarioNuevo);
// console.log(usuarioNuevo.setNombre = "Axel"); 
// console.log(usuarioNuevo); // nombre: "Axel"

// Uso de un método de negocio
// console.log(usuarioNuevo.esAdulto()); // true
// console.log(usuarioNuevo.esActivo()); // true




