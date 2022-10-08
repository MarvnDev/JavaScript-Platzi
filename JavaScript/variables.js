// Var:  Era la forma en que se declaraban las variables hasta ECMAScript 5. 
// Casi ya no se usa porque es de forma global y tiene las siguientes características:
//     *se puede reinicializar, es decir, el ultimo dato ingresado a esta variable predominara
//      por ej.: var pokemonType = "electric"
//               var pokemonType = "grass"
//      el ultimo dato que se ingreso en la variable polemonType es "grass" es decir que ese 
//      sera el unico valor de esta variable hasta que se vuelva a reinicializar
//     *se puede reasignar, la variable ya inicializada se le reasigna otro valor, por ej.:
//               var pokemonType: "electric"
//               pokemonType = "grass" (ya no se usa 'var')

var nombre = "Oscar";
// declarar
var edad;
edad
// inicializar
edad = 30;
edad
//======
var elements = ["computadora","Celular"]; //se entiende como un objeto

var person = { // se entiende como una variable compleja 
    nombre: "Diego",
    edad: 30
}

person;