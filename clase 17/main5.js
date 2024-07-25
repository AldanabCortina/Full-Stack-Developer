/**Clase 17. FUNCIONES y DOM */

class Mascota{
    constructor(nombre){
        //Propiedades-atributos
        this.nombre = nombre;
        this.adoptada = false;
    }
    //Indico los metodos
    adoptar(){
        this.adoptar = true;
    }
}
//Indico la funcion para agregar mascota a la lista

const inputMascota = document.getElementById("nuevaMascota");
//VERIFICACION PARA VER SI VOY OK
const nombreMascota = inputMascota.value.trim();
console.log(inputMascota);
console.log(nombreMascota); 

function agregarMascota(){
    const inputMascota = document.getElementById("nuevaMascota");
    //Asigno una variable, va ser igual al elemn ingresen , accedo mediante value, trim quita espacio
    const nombreMascota = inputMascota.value.trim()

    if (nombreMascota != ""){
        const nuevaMascota = new Mascota(nombreMascota);
        //Crear el elemento de la lista
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevaMascota.nombre ;
        if (nuevaMascota.adoptada){
            elementoLista.classList.add("adoptada")
        }
        //Evento que tiene que escuchar
        elementoLista.addEventListener("click", function(){
            nuevaMascota.adoptar();
            elementoLista.classList.add("adoptada")
        })
        const listaMascota = document.getElementById("listaMascotas");
        listaMascota.appendChild(elementoLista)
    }
}
const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener('click', agregarMascota)