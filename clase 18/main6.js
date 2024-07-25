/* // //Clase 18 DOM

  
// console.log(document);  //Sirve como para verificar si estoy accediendo al elemento que quiero 
// console.dir(document); 

// console.log(document.head); 
// console.dir(document.head); 

// console.log(document.body); 
// console.dir(document.body); 

// //Metodos para acceder al DOM

// let titulo = document.getElementById("titulo"); //Si no lo ponngo no me muestra en patalla que hay dentro
// console.log(titulo) //Aca accedo a todo el elemento
// //Si solo necesito acceder al texto dentro de la etiqueta:
// console.log(titulo.innerHTML)  //o innerText
// //A ese mismo texto que accedi le quiero agregar algo:
// let nombre = 'Cosme Fulanito';
// titulo.innerHTML = "Hola" + nombre; //Aca ya agregue lo que queria

// //Ejercicio accerder dinamicamente
// let subtitulo = document.getElementById("subtitulo");
// console.log(subtitulo)
// console.log(subtitulo.innerHTML)
// let ejercicio = 'Ejercicio propuesto por la profe'
// subtitulo.innerHTML = "Esta practica es: " + ejercicio;

// //En vez de acceder por id accedo por clase:
// let parrafos = document.getElementsByClassName('parrafos');
// console.log(parrafos)

// //Acceder por tag. devuelve todo lo que tiene etiqueta p
// let parrafosTag = document.getElementsByTagName('p');
// console.log(parrafosTag)


// //--Ejemplo de modificacion del select Dinamico--//

// const categorias = []; //array vacio

// let entrada = prompt("Ingresar categoria:   .(escribir 'ESC' para salir) ");

// while (entrada.toUpperCase() != 'ESC'){
//     categorias.push(entrada.toUpperCase());
//     entrada = prompt ("Ingresar categoria, presione 'ESC' PARA SALIR");
// }

// console.log(categorias)
// //obtener el elemento
// let miSelect = document.getElementById('select')

// //Forma poco utilizable: miSelect.innerHTML = '<option>' +categorias[0] + '</option>'; no es comodo

// //Tengo que ir recorriendo el array para guardar las categorias y verlas en  el select
// //Se suele usar en la primera parte el singular de la palabra
// for (const categoria of categorias){
//     miSelect.innerHTML += '<option>' +categoria+ '</option>';
// } */
 


//CREACION DE UN NUEVO NODO:

let titulo1 = document.createElement('h2');//Crear el nodo
titulo1.innerHTML = 'Hola desde JS'; //defino el contenido
document.body.appendChild(titulo1);

//Ejemplo de creacion dinamica de nodos
class Producto {
    constructor (id , nombre, precio){
        this.id =parseInt(id); //De manera entera
        this.nombre = nombre;
        this.precio = parseFloat(precio); //Con decimales
    }
}

const productos = [];
productos.push(new Producto(1, "dona",1000))
productos.push(new Producto(2, "torta",4500))
productos.push(new Producto(3, "scron",3600))
productos.push(new Producto(4, "cafe",200))
//Recorrer el array para crear un nodo por valor

for (const producto of productos){
    let divProducto = document.createElement('div'); //Creo el nodo
    
    divProducto.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
                             <h4> Precio: ${producto.precio}</h4>` ;
 document.body.appendChild(divProducto);                             
}


