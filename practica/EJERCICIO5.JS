/* 
5 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]

let pintura = prompt("Que color desea").toLocaleLowerCase()

if(colores.indexOf(pintura) !== -1){
    //console.log(`Tu pedido  ${pintura} si esta disponible`)
    document.write(`Tu pedido  ${pintura} si esta disponible`)
}
else{
    //console.log(`No tenemos en stock tu pedido ${pintura}`)
    document.write(`No tenemos en stock tu pedido ${pintura}`)
}