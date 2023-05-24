const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

sectionReiniciar.style.display = 'none'
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador =  document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')



let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionesDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonTierra
let botonFuego
let botonAgua
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},

)
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
 )

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionesDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionesDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')

    })

    //se crea variable para capturar el evento de click sobre botón de escoger mascota.

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    //Ocultar y mostrar secciones

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    //se crean variables para capturar selección de macota 

    //se crea inserción de nombre de la mascota dentro de la etiqueta span de la sección elige tu ataque. Se establece una condición para insertar el nombre a partir de haber seleccionado (chequed) una mascota a través de inpunts.
    if (inputHipodoge.checked) { 
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id 
        mascotaJugador = inputRatigueya.id 
    } else {
        alert('No has seleccionado mascota')
    }

    extraerAtaques(mascotaJugador)
    //se invoca la función para que el PC elija mascota aleatoriamente.
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }  
          
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataques) => {
        ataquesMokepon = `        
        <button id=${ataques.id} class="boton-de-ataque BAtaque">${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    
     botonTierra = document.getElementById('boton-tierra')
     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botones = document.querySelectorAll('.BAtaque')
    
         //crea variables para capturar eventos de click sobre los botones de ataque

     botonFuego.addEventListener('click', ataqueFuego)
     botonAgua.addEventListener('click', ataqueAgua)
     botonTierra.addEventListener('click', ataqueTierra)
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
               ataqueJugador.push('FUEGO') 
               console.log(ataqueJugador)
               boton.style.background = rgb(255, 136, 0)
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = rgb(255, 136, 0)
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = rgb(255, 136, 0)
            }
        })
    })
}
function seleccionarMascotaEnemigo() {
    //creación de variables para que el PC elija mascota de forma aleatoria y se establece el objeto a modificar en el documento html para insertar el nombre de la mascota.
    let mascotaAleatorio = aleatorio(0,mokepones.length -1)
    //se establecen las condiciones para dar nombre a la mascota hacer que aparezca en el span correspondiente. 
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    secuenciaAtaque() 
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
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')) {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        revisarvidas()
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
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
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
   
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo     

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {


    sectionMensajes.innerHTML = resultadoFinal


    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

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