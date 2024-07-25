//Clase 15 Esrtructuras repetitivas JS
/*
let frutas = [
  "Manzana",
  "Pera",
  "Frutilla",
  "Pera",
  "Mora",
  "Limón",
  "Kiwi"
  ];

  //Hacer console log para ver cada uno no no es practico
console.log(frutas[0].length);
frutas[0].length; // el elemento manzana tiene 7 letras
frutas[1].length;
frutas[2].length;
frutas[3].length;
frutas[4].length;
frutas[5].length;
frutas[6].length;
  */

//While

/*
let valor = 0;
while (valor <= 15){
  console.log('El valor de i: ' + valor);
  valor + valor++;
}*/

// Decremento

/*let numero = 100;
while (numero > 0){
  document.write('Te queda de saldo : ', numero, "<br>");
  numero = numero - 5;
}
let i = 6; 
do {
  console.log("Valor de i: ", i);
  i = i + 1; 
} while (i < 5);
*/


//Ejercicio para practicar
/*
let pasos= 100; //Va ir hasta 100
while (pasos >0 ){ //Condicion para que itere
  document.write('Te quedan solo : ', pasos, "pasos por caminar",  "<br>");
  pasos = pasos - 1; //Contador para que vaya restando en cada vuelta
  //Falto esto
  if (pasos == 0){ //Esto es para el fin que si pasos llega a ser cero, de ese mensaje
    document.write("Solo faltan "  , pasos, " por caminar. Ya llegaste.",  "<br>");

  }  
}
*/
/*
//Otro ejemplo
let pasos= 100; //Va ir hasta 100
while (pasos >0 ){
    if (pasos === 1){  //== 00 
    document.write("Solo faltan "  , pasos, " pasos por caminar.",  "<br>");
  } else {
    document.write("Solo faltan "  , pasos, " por caminar.",  "<br>");
  } 
  pasos = pasos -1;
 
}*/
  
//Ejemplos de for

// incializo, condicion a evaluar , contador.
/*
for(let i= 0 ; i<= 10 ; i++){
  alert(i)
}
  */
/*
for(let i= 1 ; i<= 5 ; i++){
  //Solicitar en cada repeticion un nombre
  let ingresarnombre = prompt("Ingrese un nombre");

  //Informar el turno asignado
  alert("Turno numero " + i + " Nombre:  " +ingresarnombre);
}
  */
/*
let frutas = [
  "Manzana",
  "Pera",
  "Frutilla",
  "Pera",
  "Mora",
  "Limón",
  "Kiwi"
  ];
  for(let i= 0 ; i<= frutas.length ; i++){ //Que sea igual a la longitud de frutas
    let fruta = frutas [i]; //Que me diga cuantas letras tiene cada  elemento
    console.log(fruta , "tiene " , fruta.length , "letras" );
  }
*/

//Ejemplos de for.each mas abreviado lo anterior
/*
let objetosm = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosm.forEach(function(objetosm){
  console.log("Objetos con forEach es :" ,  objetosm);
})*/
/*
let objetosm = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosm.forEach(function(objetosm, indice, array){
  console.log("Objetos con forEach es :" ,  objetosm , indice,); //Imprime lo que quiero mostrar
})

let objetosm2 = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosm2.forEach((objetosm2, indice1, )=>
  console.log("Objetos con forEach  con funcion flecha es :" ,  objetosm2 , indice1,)) //Imprime lo que quiero mostrar

*/
//.map() GENERA UN NUEVO ARRAY CON LAS TRANSFORMACIONES DEL ARRAY ORIGINAL
/*
let objetosm = ["Varita", "Libro", "Lechuza", "Caldero"];

objetosm.map((objetosm)=> {
  console.log("Objetos con map " , objetosm)
});
*/

//Ahora si le quiero agregar datos
/*
let objetosm = ["Varita", "Libro", "Lechuza", "Caldero"];

objetosm.map((objetosm)=> {
  console.log("Objetos con map " , objetosm)
});


const numeros = [1,2,3,4,5,6,10];
//Este array lo quiero multiplicar por dos
const porDos = numeros.map((x)=> x * 2);
const xcien = numeros.map((x)=> x * 100);

console.log(numeros);
console.log("Por dos;  " , porDos);
console.log("Por cien;  " , xcien);
*/

/*
const numeros = [1,2,3,4,5,6,10];
const encontrado= numeros.find(elemento=>  elemento >4);
console.log(encontrado);*/

//Me devuelve el 4, el primero que cunpke con la busqueda devuelve

/*
const nombres = ["Aldana" , "Belen","Cortina"];
const nombreEncontrado= nombres.find(elemento=>  elemento === "Belen");
console.log("El nombre encontrado es:  " , nombreEncontrado);*/

//Filter, filtra con la condicon que le estoy pidiendo 

//EJEMPLO1
/*const numeros = [1,2,3,4,5,6,10];
const numMayor = numeros.filter((n) => n >= 5 );
console.log(numMayor);
*/

//EJEMPLO 2
/*const palabras = ["Manzana","Pera","Frutilla","Pera","Mora"  ];

const palabraB = "ra";
const palabrasClave = palabras.filter(
  (palabras) => palabras.includes(palabraB)
)
 
console.log(palabrasClave);*/


//Metodo includes verifica si una subcadena o elemento esta presente en una cadena o array 