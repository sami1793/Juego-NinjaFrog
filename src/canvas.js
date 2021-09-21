var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Necesario para que no se vea mal al escalar los sprites, para que no se pixele
ctx.imageSmoothingEnabled = false;

function borrarPantalla(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);//borra el rectangulo
}

function dibujarSprite(){
 
    var cuadros= jugador.spriteActual.sprite.width/jugador.spriteActual.anchoCuadro;//serían los 11

    ctx.save();
    ctx.scale(jugador.direccion,1);

    //para que no pegue el salto cuando cambia de dirreccion
    if(jugador.direccion==-1){
        ctx.translate(-jugador.spriteActual.anchoCuadro*FACTOR_ESCALADO,0)
    }

    ctx.drawImage(
        jugador.spriteActual.sprite,
        jugador.cuadroActual*jugador.spriteActual.anchoCuadro,
        0,
        jugador.spriteActual.anchoCuadro,
        jugador.spriteActual.altoCuadro,
        jugador.x*jugador.direccion,//para que vuelva a la misma posicion cuando doy vuelta
        jugador.y,
        jugador.spriteActual.anchoCuadro*FACTOR_ESCALADO,
        jugador.spriteActual.altoCuadro*FACTOR_ESCALADO
    );

    ctx.restore();//no entiendo bien
    jugador.cuadroActual++;
    //Reseteamos animación
    if (jugador.cuadroActual>cuadros)
        jugador.cuadroActual=0;
}