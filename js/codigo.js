//FUNCIÓN PARA OBTENER LA ELECCIÓN DEL PC. 1=piedra, 2=tijera, 3=tijera
        
function aleatorio(min,max)
{
    return Math.floor(Math.random() * (max-min + 1) + min)
}

//FUNCIÓN PARA ELECCIONES

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

//FUNCIÓN PARA COMBATE

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
//FUNCIÓN PARA MOSTRAR RESULTADOS
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
//FUNCIÓN PARA RESETEAR VARIABLES
function resetearVariables() {
    victorias = 0;
    derrotas  = 0;
    empates   = 0;
}
//ELECCIÓN DEL JUGADOR
let jugador = 0;
//jugador = prompt("Elige: 1 para piedra 🪨, 2 para papel 📄, 3 para tijera ✂️");

//ELECCIÓN DEL PC

let min = 1;
let max = 3;
let pc = 0;
let batallasGanadas = 0;
let batallasPerdidas = 0;
let empates = 0;
//CICLO
while (batallasGanadas < 3 && batallasPerdidas < 3 && empates < 3) {
    pc = aleatorio(1,3);
    jugador = prompt("Elige: 1 para piedra 🪨, 2 para papel 📄, 3 para tijera ✂️");
                alert("Tu Eliges: " + eleccion(jugador) + " / PC Elige: " + eleccion(pc));
    ganador(jugador,pc);
} 
mostrarResultados()
//alert("Ganaste " + batallasGanadas + " veces. Perdiste " + batallasPerdidas + " veces. Empataste " + empates + " veces.")

//CODIGO ORIGINAL ANTES DEL CICLO       
//    aleatorio(1,3);

//MENSAJES PARA MOSTRA ELECCIONES DE JUGADOR Y PC

//    alert("Tu Eliges: " + eleccion(jugador) + " / PC Elige: " + eleccion(pc));
//    alert("PC Elige: " + eleccion(pc))

//ELECCIÓN DEL GANADOR
//ganador(jugador,pc);

//INFORMANDO LA ELECCIÓN DEL JUGADOR

//if(jugador == 1) {
//    alert("Elegiste 🪨")
//} else if(jugador == 2) 
//{
//    alert("Elegiste 📄")
//} else if(jugador == 3) 
//{
//    alert("Elegiste ✂️")
//} else 
//{
//    alert("Elegiste Perder 😣")
//}

//INFORMANDO LA ELECCIÓN DEL PC

//if(pc == 1) {
//    alert("PC elige 🪨")
//} else if(pc == 2) 
//{
//    alert("PC elige 📄")
//} else if(pc == 3) 
//{
//    alert("PC elige ✂️")
//}

//OPTIMIZANDO CÓDIGO DEL COMBATE

//if(jugador == pc) {
//    alert("Empate 🤷‍♂️")
//} else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
//    alert("Ganaste 🏆")
//} else {
//    alert("Perdiste 😒")
//}

//COMBATE NO OPTIMIZADO

//if(pc == jugador) 
//{
//    alert("Empate")
//} else if(jugador == 1 && pc == 3) 
//{
//    alert("Ganaste 🏆")
//} else if(jugador == 2 && pc == 1) 
//{
//    alert("Ganaste 🏆")
//} else if(jugador == 3 && pc == 2) 
//{
//      alert("Ganaste 🏆")
//} else 
//{
//    alert("Perdiste 😒")
//} 