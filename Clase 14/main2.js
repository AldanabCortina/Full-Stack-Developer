//Clase 14 operadores condionlaes JS

//If else , if else
/*
let numero= 3;
alert("ingreso el numero" +  numero) 
if (numero>3){
    console.log("El numero es mayor que 3  ");
}else if (numero === 3){ //Aca va decir que no es igual porque 1 es string y otro es numero(tipo de dato)
    console.log("El numero es igual a 3")
}
else{  
    console.log("El numero es menor a 3")
}
console.log("Continua la ejecucion")
*/
//MANERA ABREVIADA, OPERADOR TERNARIO
//Else resumido
/*
let edad= 20;
let esMayorEdad;

if (edad>18){
    esMayorEdad=  true;
}else{
    esMayorEdad= false;
}
 console.log("¿Es mayor de edad?" , esMayorEdad)
*/

//Con OT sirve cuando hay pocas cosas que evaluar
/*let nombre = "cosme";
let edad= 10;
edad>=18
? console.log(nombre +  " es mayor de edad")
:console.log( nombre , " no es mayor");
*/

//STWICH
/*let poweranger = "green";
switch (poweranger) {
  case "red":
    
    console.log("Red Ranger");
    break;
  case "blue":
    console.log("blue Ranger");
    break;
  case "black":
    console.log("Este es negro");
    break;
  case "yellow":
    console.log("yellow Ranger");
    break;
    default:
        console.log("No sos un ranger");
}
*/
/*let poweranger = "yellow";
switch (poweranger) {
  case "red":
    color = "red";
    console.log("Red Ranger");
    break;
  case "blue":
    color = "blue Ranger";
    break;
  case "black":
    color = "Este es negro";
    break;
  case "yellow":
    color = "yellow Ranger";
    break;
  default:
    console.log("No sos un ranger");
}
console.log(color);

console.log(new Date().getDay());
*/

/*let semana = new Date().getDate();
switch (semana) {
  case 1:
    semana = "Lunes";
    break;
  case 2:
    semana = "Martes";
    break;
  case 3:
    semana = "Miercoles";
    break;
  case 4:
    semana = "Jueves";
    break;
  case 5:
    semana = "Viernes";
    break;
  case 6:
    semana = "Sabado";
    break;
  case 0:
    semana = "Domingo";
    break;
  default:
    console.log("No es ningun dia de la semana ese nunmero");
    break;
}
 //Hay que hacer un console por fuera del stwich

 console.log("Hoy es  -- " , semana)*/
/*console.log("Ingrese un numero y luego un saludo");
let variable1 = prompt("Ingrese un numero");
let variable2 = prompt("Ingrese un saludo");
alert ("Ingreso el numero " + variable1 + " y el saludo: " +  variable2)

if (variable1>1000) and (variable2 == "hola")
    {console.log("El numero ingresador si es mayor a mil y el saludo coincide ");}
else if (variable1<1000) and (variable2 != "hola")
    {console.log("Vuelva a ingresar otro numero y nuevamente un saludo")}
*/

//Docment.write Como funciona:

let edad = prompt("Ingrese edad:  ");

if (edad !== null) {    
  edad = Number(edad);
  if ( !isNaN(edad)) {
    if (edad >= 18) {
      document.write("Sos mayor de edad");
    } else {
      document.write("Sos menor de edad");
    }
  } else {
    document.write("Ingresa algu num valido");
  }
} else{
    document.write("No ingresaste nada");
}

