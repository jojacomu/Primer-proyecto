let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
   
    //se crea variable para capturar el evento de click sobre botón de escoger mascota.
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    //crea variables para capturar eventos de click sobre los botones de ataque
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    //Ocultar y mostrar secciones
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    //se crean variables para capturar selección de macota 
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    //se crea inserción de nombre de la mascota dentro de la etiqueta span de la sección elige tu ataque. Se establece una condición para insertar el nombre a partir de haber seleccionado (chequed) una mascota a través de inpunts.
    if (inputHipodoge.checked) { 
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'  
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('No has seleccionado mascota')
    }
    //se invoca la función para que el PC elija mascota aleatoriamente.
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    //creación de variables para que el PC elija mascota de forma aleatoria y se establece el objeto a modificar en el documento html para insertar el nombre de la mascota.
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    //se establecen las condiciones para dar nombre a la mascota hacer que aparezca en el span correspondiente. 
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'    
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTM = 'Pydos'
    }
}
//Definición de funciones de ataque del jugador que activan la respuesta del ataque del Enemigo (PC)
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}  
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
//Definicion de la función de ataque del Enemigo (PC)
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    //Invocación de la función de combate para definir el resultado de la partida.
    combate()
}
//Definición de la función de conbate para establecer condiciones de ganar, empatar o perder. Se invoca función para crear mensaje que informa el resultao del juego.
function combate() {
    let spanVidasJugador =  document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')) {
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
        revisarvidas()
    } else {
        crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
        revisarvidas()
    }
}
    //Revisar vidas
function revisarvidas() {
    if (vidasEnemigo == 0) {
    // GANAMOS
    crearMensajeFinal("¡FELICITACIONES! 😂🎉🎈🎇🎆 ACABAS DE GANAR EL JUEGO")
    } else if (vidasJugador == 0) {
    // PERDIMOS
    crearMensajeFinal("LO SENTIMOS... 😵‍💫😢🥹 ACABAS DE PERDER EL JUEGO")
    }
}
/*Alternativa de combate
function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE")
    }
}
*/

//Creación de la función mensaje que recibe el resultado del combate (EMPATE/GANASTE/PERDISTE) para insertarlo dentro de una cadena de texto (parrafo) construida con los ataque y mensaje prediseñado. Al final el mensaje es insertaro en un párrafo dentro del HTML
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}
//Función de reinicio del juego
function reiniciarJuego() {
    location.reload()
}
//Función que permite crear de forma aleatoria números que representan la elección de mascotas y de ataques por parte del Enemigo (PC)
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//???????Permite que el script se ejecute una vez haya cargado la página.
window.addEventListener('load', iniciarJuego)