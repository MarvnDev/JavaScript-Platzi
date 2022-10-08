// coercion (implicitas, explicita). implicitas es cuando el lenguaje nos ayuda y cambia de un 
// tipo de valor a otro
// Coercion es la forma en la que podemos cambiar un tipo de valor a otro tipo de valor
// expicita es cuando obligamos que un valor de un tipo cambie a otro valor de otro tipo si lo necesitamos

var a = 4 + "7" // concatenacion, junta dos valores en un string
console.log(typeof a)

//  como no se usa el caracter "+" no existe concatenacion por lo que js 
// supone que debe convertir el string a tipo numero. Esto es un ejemplo de coercion implicita
var b = 4 * "7" 
console.log(typeof b)

// ejemplo coercion explicita
var x = 20 
var y = x + ""
console.log(typeof y)

var z = String(x)
console.log(typeof z)

var xy = Number(z)
console.log(typeof xy)