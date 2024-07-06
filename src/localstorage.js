// Verificación de localStorage

if (typeof Storage !== "undefined") {
    console.log("%cLocal Storage soportado", "color: green;");
} else {
    console.log("%cLocal Storage no soportado", "color: red;");
}

// Obtener los elementos HTML
let saveButton = document.querySelector("#save-button");
let getButton = document.querySelector("#get-button");

// setItem => Guardar valor en localStorage
saveButton.addEventListener("click", () =>{
// Parámetros: Key, Value -> typeof = String
    localStorage.setItem("Fecha y hora", new Date());
});

// getItem() => Obtener valor de localStorage
getButton.addEventListener("click", () =>{
    let value = localStorage.getItem("Fecha y hora")//Key
    
    if (value) {
    // Diferente a null, diferente a undefined, no esté vacía
    //if(universidad !== null && universidad !== undefined && universidad !== "") {
        console.log("Value = " + value)
    } else {
    console.error("No hay info!");
    };
});


//Objetos

//Obtiene los elementos HTML
let saveObject = document.querySelector("#save-object");
let getObject = document.querySelector("#get-object");

saveObject.addEventListener("click", () =>{
    const movieObject = {
        title: "The purge",
        year: 2008,
        genres: ["action", "terror", "guns"]
    };
    //No se puede guardar el objeto directamente
    // localStorage.setItem("movie", saveObject);

    // Convierte el OBJETO en una CADENA JSON
    const cadenaJSON = JSON.stringify(movieObject);

    localStorage.setItem("Movie", cadenaJSON);
});

getObject.addEventListener("click", () =>{
    const movie = localStorage.getItem("Movie");

    //Convierte de CADENA JSON a OBJETO
    const objectJSON = JSON.parse(movie);
    console.log(objectJSON);
    console.log(`El año de la pelicula es ${objectJSON.year}`);
});