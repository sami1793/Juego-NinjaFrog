var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Necesario para que no se vea mal al escalar los sprites, para que no se pixele
ctx.imageSmoothingEnabled = false;

function crearSprite(ruta, anchoCuadro, altoCuadro){
    var sprite = new Image();
    sprite.src=ruta;
    return{
        sprite,
        anchoCuadro,
        altoCuadro
    }
}

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
    if (jugador.cuadroActual>=cuadros)
        jugador.cuadroActual=0;
}

var fondo = crearSprite("recursos/Background/Purple.png", 64, 64);
var terreno = crearSprite("recursos/Terrain/Terrain (16x16).png", 16, 16);

function dibujarFondo() {
    for (let i = 0; i < canvas.width / 64; i++) {
      for (let j = 0; j < canvas.height / 64; j++) {
        ctx.drawImage(fondo.sprite, i * 64, j * 64);
      }
    }
  }

function dibujarNivel() {
    var DIMENSION_CELDA = 16;
    var ESCALA_CELDA = 2;
    ctx.fillStyle = "black";
  
    for (let i = 0; i < nivel.length; i++) {
      for (let j = 0; j < nivel[i].length; j++) {
        if (nivel[i][j] !== 0) {
          var celda = nivel[i][j] - 1;
          var columnas = terreno.sprite.width / DIMENSION_CELDA;
          // var filas = terreno.sprite.height / DIMENSION_CELDA
          // 2, 34, 45, 1, 10
  
          ctx.drawImage(
            terreno.sprite,
            DIMENSION_CELDA * Math.floor(celda % columnas), // pos x del sprite -> columna en la que esta
            DIMENSION_CELDA * Math.floor(celda / columnas), // pos y del sprite -> fila en la que esta
            DIMENSION_CELDA,
            DIMENSION_CELDA,
            j * DIMENSION_CELDA * ESCALA_CELDA,
            i * DIMENSION_CELDA * ESCALA_CELDA,
            DIMENSION_CELDA * ESCALA_CELDA,
            DIMENSION_CELDA * ESCALA_CELDA
          );
        }
      }
    }
  }
  