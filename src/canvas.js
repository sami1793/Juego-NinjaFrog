var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Necesario para que no se vea mal al escalar los sprites, para que no se pixele
ctx.imageSmoothingEnabled = false;

function borrarPantalla(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);//borra el rectangulo
}

function dibujarSprite(){
    var anchoSprite=32;
    var altoSprite=32;    

    var cuadros= jugador.sprite.width/anchoSprite;//serían los 11

    ctx.save();
    ctx.scale(jugador.direccion,1);

    //para que no pegue el salto cuando cambia de dirreccion
    if(jugador.direccion==-1){
        ctx.translate(-anchoSprite*FACTOR_ESCALADO,0)
    }

    ctx.drawImage(
        jugador.sprite, 
        jugador.cuadroActual*anchoSprite,
        0,
        anchoSprite,
        altoSprite,
        jugador.x*jugador.direccion,//para que vuelva a la misma posicion cuando doy vuelta
        jugador.y,
        anchoSprite*FACTOR_ESCALADO,
        altoSprite*FACTOR_ESCALADO
    );

    ctx.restore();//no entiendo bien
    jugador.cuadroActual++;
    //Reseteamos animación
    if (jugador.cuadroActual>cuadros)
        jugador.cuadroActual=0;
}