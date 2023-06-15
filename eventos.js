// Eventos
const h1 = document.querySelector("h1");
const mostrarFecha = () => console.log(new Date);

// onclick => Asocia un evento `click` a un elemento.
h1.onclick = mostrarFecha;


const carro = document.querySelector('.carro');
const boton = document.querySelector('.boton');

/*handler Functions */
const achicar = () => {
  carro.style.transform = 'scale(0.6)';
};

const restaurarTamaño = () => {
  carro.style.transform = 'scale(1)';
};

const agrandar = () => {
  carro.style.transform = 'scale(1.4)';
};

const correr = () => {
  carro.style.left = '700px';
};

const retroceder = () => {
  carro.style.left = '0px';
};


/*metodo addEventListener*/

// boton.addEventListener("click", () => {
//   carro.style.left = "700px";
// });

// Mantener oprimido para que avance con cierta transición
boton.addEventListener("mousedown", correr);

// Soltar para que regrese el lugar con cierta transición 
boton.addEventListener("mouseup", retroceder);


let tamaño = "normal";

// Oprimir flecha abajo en el teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' && tamaño === 'normal'){
    achicar();
    tamaño = "achicado";
  }else if(event.key === 'ArrowDown' && tamaño === 'agrandado'){
    restaurarTamaño();
    tamaño = "normal"
  } else if(event.key === 'ArrowDown' && tamaño === 'achicado'){
    return;
  }
});

// Oprimir flecha arriba en el teclado
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowUp' && tamaño === 'normal') {
    agrandar();
    tamaño = "agrandado";
  } else if(event.key === 'ArrowUp' && tamaño === 'achicado'){
    restaurarTamaño();
    tamaño = "normal"    
  }else if(event.key === 'ArrowUp' && tamaño === 'agrandado'){
    return;
  }
});

/*Event Target (Todos los eventos en javaScript son objetos de tipo EVENT)*/
const cambiaColor = (event) => {
    // .target => Accede al elemento en el que ocurrio el evento
  event.target.style.backgroundColor = '#3f3f3f';
};

const restaurarColor = (event) => {
    event.target.style.backgroundColor = "#dddd"
};
const seccion = document.querySelector('section');
seccion.addEventListener('mouseenter', cambiaColor);
seccion.addEventListener('mouseleave', restaurarColor)


// Remover el evento
// seccion.removeEventListener('mousenter', cambiaColor);