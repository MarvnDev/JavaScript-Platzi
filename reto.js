var piezas = ["piedra", "papel","tijeras"]

function validarGanador(jugador1, jugador2) {
    var ganador
    if(jugador1 != jugador2){
        ganador = (jugador1 === piezas[0] && jugador2 === piezas[2]) || (jugador1 === piezas[2] && jugador2 === piezas[1]) || (jugador1 === piezas[1] && jugador2 === piezas[0]) ? `${jugador1} le gana a ${jugador2}`: `${jugador2} le gana a ${jugador1}`
        return ganador
    }else{
        return "empate"
    }
    
}
 console.log(validarGanador(piezas[2], piezas[0])) // piedra le gana a tijeras