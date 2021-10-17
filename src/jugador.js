var spritesJugador={
    DESCANSANDO:crearSprite("recursos/Main Characters/Ninja Frog/Idle (32x32).png",32,32),
    CORRIENDO: crearSprite("recursos/Main Characters/Ninja Frog/Run (32x32).png",32,32),
    SALTANDO: crearSprite("recursos/Main Characters/Ninja Frog/Jump (32x32).png",32,32),
};

var jugador = {
    estado:"DESCANSANDO",
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
    spriteActual: spritesJugador.DESCANSANDO,
    sprites:spritesJugador,
    puede:{
        saltar: false,
    }
};




function moverJugadorDerecha(){
    jugador.velocidad.x= 5;
    jugador.direccion=1;
}
function moverJugadorIzquierda(){
    jugador.velocidad.x= -5;
    jugador.direccion=-1;
}

function saltarJugador(){
    if(jugador.puede.saltar){
        jugador.velocidad.y=jugador.fuerzaSalto;//incrementamos la velocidad sino se teleporta
        //una vez que salta, no puede saltar de nuevo
        jugador.puede.saltar=false;
    }    
}