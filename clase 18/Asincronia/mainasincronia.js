/*let contador = 0;
let intervalID = setInterval(() => {
    contador ++;
    console.log(`Contador: ${contador}`);

    
}, 3000);
setTimeout(() =>{
    console.log("hola .Depues de 3 segun");
}, 3000)*/


// Ejemmplo combiado
/*let contador = 0;
let intervalID = setInterval(() => {
    contador ++;
    console.log(`Contador: ${contador}`);

    
}, 1000);
setTimeout(() =>{
    clearInterval(intervalID)
    console.log("temp detenido despues 5 segun");
}, 5000) 
 */
 
//reloj

function mostrarHora(){
    let reloj = document.getElementById("reloj");
    let hora = new Date(); //Fecha y hora

    reloj.innerHTML = hora.toLocaleTimeString(); //Acutaloza hora actual
}

let cronometro = setInterval(mostrarHora, 1000) //Actualiza hora en pantalla