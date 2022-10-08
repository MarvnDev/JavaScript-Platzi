// hoisting no es lo mismo que hosting. Host es cuando pagas un dominio y hoisting es cuando las variables
// y las funciones se procesan antes de que se ejecute el codigo

var miNombre
miNombre = "Marvin"

hey()

function hey(){
    console.log("hello ", miNombre)
}
 
