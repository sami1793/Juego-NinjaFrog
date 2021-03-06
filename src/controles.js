var Tecla = {
    Derecha: false,
    Izquierda: false,
    Salto: false
};

function procesarControles(){
    if(Tecla.Derecha){
        moverJugadorDerecha()
    }
    else if(Tecla.Izquierda){
        moverJugadorIzquierda();
    }
    else{
        jugador.velocidad.x=0;//asi no esta corriendo sobre el lugar
    }

    if (Tecla.Salto){ //no pongo else if porque pude hacer ambas mover y saltar
        saltarJugador();
    }
}

document.addEventListener("keydown", function(event){
    //Chequeamos que tecla se apreta y la guardamos
    switch (event.code){
        case "KeyA":
            Tecla.Izquierda = true;
            break;
        case "KeyW":
            Tecla.Salto=true;
            break;
        case "KeyD":
            Tecla.Derecha=true;
            break;
    }
});
document.addEventListener("keyup", function(event){
    switch (event.code){
        case "KeyA":
            Tecla.Izquierda = false;
            break;
        case "KeyW":
            Tecla.Salto=false;
            break;
        case "KeyD":
            Tecla.Derecha=false;
            break;
    }
});
