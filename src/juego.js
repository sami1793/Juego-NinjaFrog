var FACTOR_ESCALADO=2;

var GRAVEDAD= 1;

function actualizarSprite() {
    switch (jugador.estado) {
      case "DESCANSANDO":
        jugador.spriteActual = jugador.sprites.DESCANSANDO;
        break;
      case "SALTANDO":
        jugador.spriteActual = jugador.sprites.SALTANDO;
        break;
      case "CORRIENDO":
        jugador.spriteActual = jugador.sprites.CORRIENDO;
        break;
    }
  }

  function actualizarEstado() {
    if (jugador.velocidad.x !== 0) {
      jugador.estado = "CORRIENDO";
    }
  
    if (jugador.velocidad.y < 0) {
      jugador.estado = "SALTANDO";
    }
  
    if (jugador.velocidad.x === 0 && jugador.velocidad.y === 0) {
      jugador.estado = "DESCANSANDO";
    }
  }

//Bucle principal del juego
function ejecutarBucle(){
    //Bucle que se ejecuta muchas veces por segundo
    borrarPantalla();
    actualizarSprite();
    dibujarFondo();
    dibujarNivel();
    dibujarSprite();
    procesarControles();

    //jugador se actuakiza segun su velicidad
    //ley movimiento d=v.t tiempo ya tenemos en el bucle
    jugador.x+=jugador.velocidad.x;
    jugador.y+=jugador.velocidad.y;//tiene que estar antes de aplicar grav

    aplicarGravedad();
    limitarJugador();
    actualizarEstado();
    

    window.requestAnimationFrame(ejecutarBucle);
}

//Requerir cuadro de animación
window.requestAnimationFrame(ejecutarBucle);

function aplicarGravedad(){
    jugador.velocidad.y +=GRAVEDAD; //todo el tiempo hay gravedad
}

function limitarJugador(){
    
    if(jugador.y>=canvas.height-jugador.spriteActual.sprite.height*FACTOR_ESCALADO){
        jugador.puede.saltar=true;
        jugador.y=canvas.height-jugador.spriteActual.sprite.height*FACTOR_ESCALADO;
        jugador.velocidad.y=0;//PARA RESETARLO
        
    }
  
}