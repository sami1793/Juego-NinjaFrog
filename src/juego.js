var FACTOR_ESCALADO=2;

var GRAVEDAD= 1;

//Bucle principal del juego
function ejecutarBucle(){
    //Bucle que se ejecuta muchas veces por segundo
    borrarPantalla();
    dibujarSprite();
    procesarControles();

    //jugador se actuakiza segun su velicidad
    //ley movimiento d=v.t tiempo ya tenemos en el bucle
    jugador.y+=jugador.velocidad.y;//tiene que estar antes de aplicar grav

    aplicarGravedad();
    limitarJugador();

    

    window.requestAnimationFrame(ejecutarBucle);
}

//Requerir cuadro de animación
window.requestAnimationFrame(ejecutarBucle);

function aplicarGravedad(){
    jugador.velocidad.y +=GRAVEDAD; //todo el tiempo hay gravedad
}

function limitarJugador(){
    
    if(jugador.y>=canvas.height-jugador.sprite.height*FACTOR_ESCALADO){
        jugador.puede.saltar=true;
        jugador.y=canvas.height-jugador.sprite.height*FACTOR_ESCALADO;
    }
  
}