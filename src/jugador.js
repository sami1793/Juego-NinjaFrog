var jugador = {
    x: 0,
    y: 300,
    velocidad:{
        x:5,
        y:0
    } ,
    direccion: 1,//1 drecha, -1 izquierda
    cuadroActual:0,
    fuerzaSalto:-15,
    //creo la imagen
    sprite: new Image(),
    puede:{
        saltar: false,
    }
};

jugador.sprite.src = "recursos/Main Characters/Ninja Frog/Idle (32x32).png";

function moverJugadorDerecha(){
    jugador.x+= jugador.velocidad.x;
    jugador.direccion=1;
}
function moverJugadorIzquierda(){
    jugador.x-=jugador.velocidad.x;
    jugador.direccion=-1;
}

function saltarJugador(){
    if(jugador.puede.saltar){
        jugador.velocidad.y=jugador.fuerzaSalto;//incrementamos la velocidad sino se teleporta
        //una vez que salta, no puede saltar de nuevo
        jugador.puede.saltar=false;
    }    
}