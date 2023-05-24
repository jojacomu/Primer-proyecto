function aleatorio(min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}
function eleccion(jugada) {
 let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🪨"
    } else if(jugada == 2) {
        resultado = "Papel 📄"
    } else if(jugada == 3) {
        resultado = "Tijera ✂️"
    } else {
        resultado = "Mal elegido 😒"
    }
    return resultado;
    }

function ganador(jugador,pc)  {
    if(jugador == pc) {
    alert("Empate 🤷‍♂️");
    empates = empates + 1;
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
    alert("Ganaste 🏆");
    batallasGanadas = batallasGanadas + 1;
    } else {
    alert("Perdiste 😒");
    batallasPerdidas = batallasPerdidas + 1;
    }
}
function mostrarResultados() {
    alert("Has acumulado " + 
    batallasGanadas + " victorias, " + 
    batallasPerdidas + " derrotas y " + 
    empates + " empates.");
    if ( batallasGanadas == 3 ) {
    alert( "TÚ eres el GANADOR" );
    resetearVariables();
    } else if ( batallasPerdidas == 3 ) {
    alert( "EL COMPUTADOR es el GANADOR" );
    resetearVariables();
    } else {
    alert( "Hubo un error... 🙃");
    resetearVariables();
    }
}
function resetearVariables() {
    victorias = 0;
    derrotas  = 0;
    empates   = 0;
}
    let jugador = 0;
    let min = 1;
    let max = 3;
    let pc = 0;
    let batallasGanadas = 0;
    let batallasPerdidas = 0;
    let empates = 0;

while (batallasGanadas < 3 && batallasPerdidas < 3 && empates < 3) {
    pc = aleatorio(1,3);
    jugador = prompt("Elige: 1 para piedra 🪨, 2 para papel 📄, 3 para tijera ✂️");
    alert("Tu Eliges: " + eleccion(jugador) + " / PC Elige: " + eleccion(pc));
    ganador(jugador,pc);
} 
    mostrarResultados()