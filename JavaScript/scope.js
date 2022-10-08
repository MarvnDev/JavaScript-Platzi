var nombre = "Marvin"//scope global
function fun(){
    var apellido = "Ramos" //scope local
    return `${nombre} ${apellido}`
}
console.log(fun())

