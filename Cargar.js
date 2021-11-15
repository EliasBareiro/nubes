var nivel = "MENU";
var contadorTormenta = 0;
let volume = 0.3;
var fade = 255;
var fadeAmount = 1
//--------------------NUBES--------------------------------------------
var nubes = [];
nubeGris = [];
var n = 0;
var cantGrises = 4;
var cantColors = 10;
var cd = 160;
var count = 200;
let fondo;
//--------------------KIWI---------------------------------------------
var booble = {
  x: 650,
  y: 500,
  mov: 7,
};
let parpadeo = false;
let cambiar = 0;
let direccion = "";
var contMot = 160;
var motivacion = 3;

//------------------IMAGENES-------------------------------------------
  let nubePink, nubeViolet, nubeBad, nubeGreen, nubeOrange, nubeBlue,gif, kiwiRosa, kiwiCeleste, kiwiLila, kiwiNaranja, kiwiVerde,kiwiBlancoChico, kiwiCelesteChico, kiwiRosaChico, kiwiLilaChico, kiwiVerdeChico, kiwiNaranjaChico, kiwiBlancomediano, kiwiCelestemediano, kiwiRosamediano, kiwiLilamediano, kiwiVerdemediano, kiwiNaranjamediano, kiwiBlancogrande, kiwiCelestegrande, kiwiRosagrande, kiwiLilagrande, kiwiVerdegrande, kiwiNaranjagrande, /*barraM, M0, M1, M2, M3, M4,*/ portada, fondo1, fondo2, fondo3, fondo4, fondo5, nubeJefe, alta, media, baja;

function preload() {
  yspeed = random(2.5, 5.5);
  //------------------------MUSICA----------------------------------------
  efecto = loadSound("sonidos/efecto.mp3");
  canto = loadSound("sonidos/Canto1parte.mp3");
  musica = loadSound("sonidos/musicaparte1.mp3");
  musica2 = loadSound("sonidos/musicaparte2.mp3");
  lluvia1 = loadSound("sonidos/Lluvia1.mp3");
  Boss = loadSound("sonidos/boss.mp3");
  efecto.setVolume(0.1);
  lluvia1.setVolume(0.2);
  musica.setVolume(0.3);
  Boss.setVolume(0.3);
  //----------------------KIWIBEBE----------------------------------------
  gif = loadImage("kiwis/kiwi.gif");
  kiwiRosa = loadImage("kiwis/kiwi bebe rosa.gif");
  kiwiCeleste = loadImage("kiwis/kiwi bebe celeste.gif");
  kiwiLila = loadImage("kiwis/kiwi bebe lila.gif");
  kiwiNaranja = loadImage("kiwis/kiwi bebe naranja.gif");
  kiwiVerde = loadImage("kiwis/kiwi bebe verde.gif");
  //---------------------KIWICHICO----------------------------------------
  kiwiBlancoChico = loadImage("kiwis/kiwi chico blanco.gif");
  kiwiCelesteChico = loadImage("kiwis/kiwi chico celeste.gif");
  kiwiRosaChico = loadImage("kiwis/kiwi chico rosa.gif");
  kiwiLilaChico = loadImage("kiwis/kiwi chico lila.gif");
  kiwiVerdeChico = loadImage("kiwis/kiwi chico verde.gif");
  kiwiNaranjaChico = loadImage("kiwis/kiwi chico naranja.gif");
  //---------------------KIWIMEDIANO--------------------------------------
  kiwiBlancomediano = loadImage("kiwis/kiwi mediano blanco.gif");
  kiwiCelestemediano = loadImage("kiwis/kiwi mediano celeste.gif");
  kiwiRosamediano = loadImage("kiwis/kiwi mediano rosa.gif");
  kiwiLilamediano = loadImage("kiwis/kiwi mediano lila.gif");
  kiwiVerdemediano = loadImage("kiwis/kiwi mediano verde.gif");
  kiwiNaranjamediano = loadImage("kiwis/kiwi mediano naranja.gif");
  //---------------------KIWIGRANDE---------------------------------------
  kiwiBlancogrande = loadImage("kiwis/kiwi grande blanco.gif");
  kiwiCelestegrande = loadImage("kiwis/kiwi grande celeste.gif");
  kiwiRosagrande = loadImage("kiwis/kiwi grande rosa.gif");
  kiwiLilagrande = loadImage("kiwis/kiwi grande lila.gif");
  kiwiVerdegrande = loadImage("kiwis/kiwi grande verde.gif");
  kiwiNaranjagrande = loadImage("kiwis/kiwi grande naranja.gif");
  //------------------------NUBES-----------------------------------------
  nubePink = loadImage( "lasnubes/nube_rosa.png" );
  nubeViolet = loadImage( "lasnubes/nube_violeta.png" );
  nubeBad = loadImage( "lasnubes/nube_mala.png" );
  nubeGreen = loadImage( "lasnubes/nube_verde.png" );
  nubeOrange = loadImage( "lasnubes/nube_naranja.png" );
  nubeBlue = loadImage( "lasnubes/nube_celeste.png" );
  nubeJefe = loadImage("lasnubes/nube jefe.png")
  //------------------------OTROS-----------------------------------------
  fondo1 = loadImage("lasnubes/fondo 1.png");
  fondo2 = loadImage("lasnubes/fondo 2.png");
  fondo3 = loadImage("lasnubes/fondo 3.png");
  fondo4 = loadImage("lasnubes/fondo 4.png");
  fondo5 = loadImage("lasnubes/fondo 5.png");
  portada = loadImage("lasnubes/Portada.png")
  /*barraM = loadImage("motivacion/barramotif.png");
  M0 = loadImage("motivacion/0.png");
  M1 = loadImage("motivacion/1.png");
  M2 = loadImage("motivacion/2.png");
  M3 = loadImage("motivacion/3.png");
  M4 = loadImage("motivacion/4.png");*/
  alta = loadImage("motivacion/alta.png");
  media = loadImage("motivacion/media.png");
  baja = loadImage("motivacion/baja.png");
}  