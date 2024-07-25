/**Clase 16. FUNCIONES DOM */
/**
function saludar (nombre , apellido){
    console.log("Hola" , "  "+ nombre + " " , apellido)
}

saludar("Aldana" ,"Cortina" );
*/
/**Uso del return 
function sumar(num1, num2){
    return (num1 + num2);
}*/
 /**Llamo con los argumentos. para verlo en pantalla necesito console.log

 sumar(2,5);
 console.log(sumar(5,8));
 */
 /**Op2: Guardarlo en variable 
 let resultado = sumar (10,11);
 console.log(resultado);*/

/*Funcion anonima y le asginamos variable
 let suma = function(num1,num2){
    return num1 +num2;
 }
 let resultado = suma (8 , 9);
 console.log(resultado);
**/
/*function saludar(n, a, serie){
    return( "Hola"+ "  "+ n + " " + a +"."  +"Tu serie fav es:"+ serie);
}

console.log(saludar("Aldana", "cortina", "Original"));

function saludo(n){
    return n.length;
}
console.log("El largo de lo ingresado es:" , saludo("Aldana"));
*/
/**
function saludar(){
    let n = prompt ("Ingrese su nombre:");
    return n.length;
}
let largo = saludar();
console.log(largo); */


//Scope
 /*function multiplicar(n1,n2){
    const num3 = 10;
    console.log ("Ingresaste el:" + num3);
    return( n1,n2) *num3;
 }
 let resultado = multiplicar (10,2); //Variable nueva
 console.log("El resultado es:" + resultado);
*/
 //Dom
/*
 console.log(document.body);
 console.log(document.head);
 console.dir(document.body);
 console.dir(document.head);*/

 //Seleccion de elementos del DOM querySelector
 let titulo = document.querySelector('#titulo');
 let parrafos = document.querySelectorAll('.parrafo');
 let cambiarTextoBtn = document.querySelector('#cambiarTexto');
 let cambiarColorBtn = document.querySelector('#cambiarColor');
 let cambiarClaseBtn = document.querySelector('#cambiarClase');
 /*
 let titulo = document.querySelector("#titulo");
 let parrafos = document.querySelectorAll('.parrafo ');
 let cambiartexto = document.querySelector('#cambiarTexto');
 let cambiarcolor = document.querySelector('#cambiarColor');
 let cambiarClase = document.querySelector('#cambiarClase');
*/ 
 console.log(titulo);
 console.log(parrafos);
 console.log(cambiarTextoBtn);

 //Funcion para cambiar texto del titulo
 function cambiarTexto(){
    titulo.textContent = 'Texto nuevo';
  }
//Funcion para cambiar el color de todos los parrafos seleccionados

function cambiarColor() {
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('cambiarColor');
    });
  } 

//CAMBIAR CLASE

function cambiarClase() {
    parrafos.forEach(parrafo => {
      parrafo.classList.toggle('nuevaClase');
  });
  }
/*function cambiarClase(){
    parrafos.forEach(parrafo =>{
        parrafo.classList.toggle('nuevaClase')
    });
}
*/

//asignar evento CLIK a los botones
/*cambiartexto.addEventListener('click', cambiarTexto);
cambiarcolor.addEventListener('click', cambiarColor);//El texto quedaria en rojo cuadno paso
cambiarClase.addEventListener('click', cambiarClase);//El texto quedaria en rojo cuadno paso*/
cambiarTextoBtn.addEventListener('click', cambiarTexto);
cambiarColorBtn.addEventListener('click', cambiarColor);
cambiarClaseBtn.addEventListener('click', cambiarClase);


 