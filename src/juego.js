var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Necesario para que no se vea mal al escalar los sprites, para que no se pixele
ctx.imageSmoothingEnabled = false;

//creo la imagen
var sprite = new Image();
sprite.src = "recursos/Main Characters/Ninja Frog/Idle (32x32).png";

var FACTOR_ESCALADO=2;

var cuadroActual=0;

function borrarPantalla(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);//borra el rectangulo
}

function dibujarSprite(){
    var anchoSprite=32;
    var altoSprite=32;    

    var cuadros= sprite.width/anchoSprite;//serían los 11

    ctx.save();
    ctx.scale(jugador.direccion,1);

    //para que no pegue el salto, yo lo hago de otra forma
    if(jugador.direccion==-1){
        ctx.translate(-anchoSprite*FACTOR_ESCALADO,0)
    }

    ctx.drawImage(
        sprite, 
        cuadroActual*anchoSprite,
        0,
        anchoSprite,
        altoSprite,
        jugador.x*jugador.direccion,//para que vuelva a la misma posicion cuando doy vuelta
        0,
        anchoSprite*FACTOR_ESCALADO,
        altoSprite*FACTOR_ESCALADO
    );

    ctx.restore();//no entiendo bien
    cuadroActual++;
    //Reseteamos animación
    if (cuadroActual>cuadros)
        cuadroActual=0;
}

//Bucle principal del juego
function ejecutarBucle(){
    //Bucle que se ejecuta muchas veces por segundo
    borrarPantalla();
    dibujarSprite();
    procesarControles();

    window.requestAnimationFrame(ejecutarBucle);
}

//Requerir cuadro de animación
window.requestAnimationFrame(ejecutarBucle);