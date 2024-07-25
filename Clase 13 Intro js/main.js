/**Clase 13. Intro js **/

//saludamos desde un archivo externo//
console.log("Hola mundo");
/*
//Variables//
var nombre = "Harry";

console.log(nombre)

let nombreLet = "hermaionie";//String
console.log (nombreLet);

//let edad="10"; //Numerico

let edad; //Aca declaro que existe esta variable y abajo le asigno valor 

edad= 20;

const PI= 3.14; //Valor que nunca va a cambiar en todo el prog. acepta booleanos
let tenerMascotas = true; //booleana
console.log(edad , PI, tenerMascotas)


 //Ejercicio------------------------------------------------- 
let name = "Aldana"; //Variable local
console.log(name)
var ap = "Cortina"; //Variable global
console.log(ap)
const EDAD = 24;
console.log(EDAD)
let mascLet = "tengo dos mascotas";
console.log(mascLet)
console.log (name ,  ap, EDAD , mascLet)
//------------------------------------------------------------
//Opcion dos
console.log ("-Ingrese su nombre apellido, edad.Si tiene mascotas ponga: si o no")
 let indentidad =  "Cosme";
 let indentidad2 = "Fulanito";
 const age = 24;
 let mascotas= true ;
 console.log (indentidad, indentidad2, age  , mascotas)
*/

/*//Operaciones basicas
let numeroA = 2;
let numeroB = 3;
let resultado= numeroA+numeroB; 
console.log(numeroB * numeroA);
console.log(resultado);

let nombre = "Aldana";
let apellido = "cortina";
let espacio = ", ";
let completo = nombre + espacio + apellido;
console.log(completo);


//Promt

let entrada = prompt("Ingrese su nombre:");
let salida = "Hola  " + entrada; 
alert(salida) //Esto es lo que se muestra en pantalla

let numero = parseFloat(prompt("ingrese numero")); //Los tipos de parse para tipos de datos
const NUMEROB= 30 ;
let salidaNumero= numero + NUMEROB;
alert(salidaNumero);*/


/*Ejercicio2 

let iden = prompt("Ingrese su nombre");
let iden2 = prompt("Ingrese su apellido");
alert(iden + "  bienvenido");
let anio= parseInt(prompt("Ingrese un año"));
let mes= parseInt(prompt("Ingrese un mes"));
let suma= anio + mes;
alert ("La suma es   " + suma);*/


/*Arrays 1 dimension
let numeros = [1,2,3,4,5,6];
let letras= ['rojo','naranja' , 'verde', 'rosa'];

console.log(numeros[1]);
console.log(letras[3]);*/

//multidimensionales

/*let colorMascotas = [
    ['perro', 'marron', 'gris', 'rojo'],
    ['gato', 'blanco' , 'negro'],
    ['pez', 'amarillo'],
    ['jirafa', 'naranja'],

]
console.log(colorMascotas[1][2]);
console.log(colorMascotas[0][2].length); //ingreso a la seccion dentro de la seccion*/

//Objeto utilizado como array asociativo
/*
let persona = {
    nombre :"Aldana" ,
    edad : 20,
    profesion : "Ingeniero"
};
 console.log(persona["nombre"]);
 console.log(persona.edad);

 let empleados = [
    {nombre : "Aldana" , edad : 20, profesion : "Ingeniero"},
    {nombre : "Ana" , edad :44, profesion : "teste"},
    { nombre : "jose" , edad : 50, profesion : "Ing"},
 ];
 console.log(empleados [1].nombre);
*/

 //Ejercicio
 /*
let array1 = ['Aldana','Cortina','Belen','24','años']
console.log(array1.length);
console.log(array1[0]);*/

let datos = prompt("Ingrece 5 elementos");
alert ("La informacion ingresada es    " +  datos);
let array1= [] ;
datos= array1;
console.log( array1[1]);
