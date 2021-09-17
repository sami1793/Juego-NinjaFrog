var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Necesario para que no se vea mal al escalar los sprites, para que no se pixele
ctx.imageSmoothingEnabled = false;

//creo la imagen
var sprite = new Image();
sprite.src = "recursos/Main Characters/Ninja Frog/Idle (32x32).png";

var FACTOR_ESCALADO=2;

var cuadroActual=0;

function dibujarSprite(){
    var anchoSprite=32;
    var altoSprite=32;    
    ctx.drawImage(
        sprite, 
        cuadroActual*anchoSprite,
        0,
        anchoSprite,
        altoSprite,
        0,
        0,
        anchoSprite*FACTOR_ESCALADO,
        altoSprite*FACTOR_ESCALADO
    );
    cuadroActual++;
}

//Bucle principal del juego
function ejecutarBucle(){
    //Bucle que se ejecuta muchas veces por segundo
    dibujarSprite();
    window.requestAnimationFrame(ejecutarBucle);
}

//Requerir cuadro de animación
window.requestAnimationFrame(ejecutarBucle);