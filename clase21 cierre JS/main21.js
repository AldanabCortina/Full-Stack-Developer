//parte 0
let titulo = document.getElementById('titulo');
console.log(titulo.innerHTML)
let texto = 'Nuevo titulo modificado desde js'
titulo.innerHTML = texto ;

class habilidad {
    constructor (lenguaje){
        this.lenguaje = lenguaje;
        this.aprendido = false; 
    }
    aprender(){
        this.aprendido = true;
    }
}

//Armamos la funcion
const inputLenguaje = document.getElementById('lenguaje');
const nombreLenguaje = inputLenguaje.value.trim();
console.log(inputLenguaje);
console.log(nombreLenguaje); 

function agregarLenguaje(){
    const inputLenguaje = document.getElementById('lenguaje');
    const nombreLenguaje = inputLenguaje.value.trim();

    if (nombreLenguaje != ""){
        const nuevoLenguaje = new habilidad(nombreLenguaje);
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevoLenguaje.lenguaje;
        
        if (nuevoLenguaje.aprendido){
        elementoLista.classList.add("aprendido")
        }
        elementoLista.addEventListener("click", function(){
            nuevoLenguaje.aprendido();
            elementoLista.classList.add("aprendido")
        })

        const listaLenguajes = document.getElementById("listaLenguajes");
        listaLenguajes.appendChild(elementoLista)
    }
inputLenguaje.value ="";
}

const botonAgregarLenguaje = document.getElementById("lenguajes");
botonAgregarLenguaje.addEventListener('click', agregarLenguaje)




// parte 1

let titulo3 = document.createElement('h3');//Crear el nodo
titulo3.innerHTML = 'Nuevo titulo agregado con document.CREATEELEMENT'; //defino el contenido
document.body.appendChild(titulo3);
 
//Parte dos
class tarea {
    constructor (id , nombre, disponible){
        this.id =parseInt(id); //De manera entera
        this.nombre = nombre;
        this.disponible = disponible; 
    }
}

const tareas = [];
tareas.push(new tarea(1, "Python", "no"))
tareas.push(new tarea(2, "C++","SI"))
tareas.push(new tarea(3, "php","NO"))
tareas.push(new tarea(4, "C","SI"))


for (const tarea of tareas){
    let divtarea = document.createElement('div'); //Creo el nodo
    
    divtarea.innerHTML = `<h3> Nombre: ${tarea.nombre}</h3>
                             <h4> Disponible: ${tarea.disponible}</h4>` ;
 document.body.appendChild(divtarea);                             
}


