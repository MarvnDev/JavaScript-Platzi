// var frutas = ["manzana", "platano","cereza","fresa"]
// console.log(frutas.length)
// console.log(frutas[2])

var frutas = ["manzana", "platano","cereza","fresa"]
var masFrutas = frutas.push("uvas") // .push() agrega nuevo elemento al final del array
frutas

var ultimo = frutas.pop() // .pop() elimina el ultimo elemento
ultimo
frutas

var nuevaLongitud = frutas.unshift("uvas") // .unshift agrega un elemento en la primera posicion del array
frutas

var borrarFruta = frutas.shift("uvas") // .shift elimina el primer elemento del array
frutas

var posicion = frutas.indexOf("cereza") // .indexof() regresa la posición de un elemento en el array
posicion
console.log(frutas[2])
