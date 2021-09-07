var nubes = [];
var n = 0;
var cd = 160;
let cambiar = 0;
let salio = false;
let direccion = '';
var booble={
  x : 300,
  y : 400,
  mov : 5
};

let kiwi, alaIz, alaDe, kiwiAzul, kiwiRosa, nubeAzul, nubeRoza;
function preload(){
  efecto = loadSound("efecto.mp3");
  efecto.setVolume(0.1);
  musica = loadSound("musica.mp3");
  musica.setVolume(0.3);
  kiwi = loadImage("kiwi1.png");
  kiwiRosa = loadImage("kiwi2Rosa.png");
  kiwiAzul = loadImage("kiwi2Azul.png");
  kiwi3Rosa = loadImage("kiwi3Rosa.png");
  kiwi3Azul = loadImage("kiwi3Azul.png");
  kiwi4Rosa = loadImage("kiwi4Rosa.png");
  kiwi4Azul = loadImage("kiwi4Azul.png");
  kiwiBinarie = loadImage("kiwiBinarie.png");
  nubeAzul = loadImage("nubeAzul.png");
  nubeRoza = loadImage("nuberosa.png");
}



function setup() {
  /*var canvas =*/ createCanvas(displayWidth/2, displayHeight/*600, 500*/);
  //canvas.parent('columna');
  frameRate(15);
  for(var i = 0; i < 10; i++){
    nubes[i] = new NubeR();
    n += 1;
    if (n>1)nubes[i] = new Nube(), n=0;
  }
  musica.loop();
  
}

function draw() {
  
  background(21,205,164);
  for(var i = 0; i < nubes.length; i++){
    nubes[i].cambiarColor();
    nubes[i].mover();
    nubes[i].mostrar();
    }
  
  pajaro();
  actualizar();
}

function pajaro(){
  //stroke(10);
  //fill(250,250,255,20);
  //rect(booble.x + 17, booble.y + 19,50,75,15);
if (cambiar == 0) {
    image(kiwi, booble.x - 35, booble.y - 25, 75, 87);
  } else if (cambiar == 1) {
    image(kiwiAzul, booble.x - 30, booble.y - 25, 100, 92);
  } else if (cambiar == 2) {
    image(kiwiRosa, booble.x - 30, booble.y - 25, 100, 92);
  } else if (cambiar == 3) {
    image(kiwi3Rosa, booble.x - 30, booble.y - 25, 135, 105);
  } else if (cambiar == 4) {
    image(kiwi3Azul, booble.x - 30, booble.y - 25, 135, 105);
  } else if (cambiar == 5) {
    image(kiwi4Rosa, booble.x - 30, booble.y - 25, 200, 105);
  } else if (cambiar == 6) {
    image(kiwi4Azul, booble.x - 30, booble.y - 25, 200, 105);
  }else if (cambiar == 7) {
    image(kiwiBinarie, booble.x - 30, booble.y - 25, 200, 115);
  }
}

function actualizar() {
  
  if(keyIsDown(83)){
       booble.y = booble.y +5;
  }
  if(keyIsDown(87)){
       booble.y = booble.y -5;
  }
  switch (direccion) {
    case 'derecha':
      booble.x = booble.x + booble.mov;
      booble.y = booble.y;
      break;
    case 'izquierda':
      booble.x = booble.x - booble.mov;
      booble.y = booble.y;
      break;
  }
}

function keyPressed(){
  
  switch (keyCode) {
    case 65:  direccion = 'izquierda';
      break;
    case 68:  direccion = 'derecha';
      break;
    
  }
}

function Nube(){
  
  this.x = random(width);
  this.y = random(-400,-150);
  this.tamx = random(73,135);
  this.tamy = 50;
  this.yspeed = random(1.5,5.5); 
  this.n = 0;
  
  this.mover = function() {
    this.y = this.y + this.yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.yspeed = random(1.50,5.5);
      this.x = random(width);
    }
  };
  
  this.mostrar = function() {
    noStroke();
    image(nubeAzul,this.x, this.y, this.tamx, this.tamy);
    
  };
  
  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);

    if (distancia < 50 && cd == 160 && cambiar == 0) {
      cambiar = 1;
      cd = 159;
      print(cambiar);
    }
    if ((distancia < 50 && cd == 160 && cambiar == 1) ||
      (distancia < 50 && cd == 160 && cambiar == 2)) {
      cambiar = 4;
      cd = 159;
      print(cambiar);
    }
    if ((distancia < 50 && cd == 160 && cambiar == 4) ||
      (distancia < 50 && cd == 160 && cambiar == 3)) {
      cambiar = 6;
      cd = 159;
      print(cambiar);
    }
    if ((distancia < 50 && cambiar == 5 && cd == 160)) {
      cambiar = 7;
      cd = 159;
      print(cambiar);
    }
    if (cd <= 159) {
      cd--;
    }
    if (cd == 0) {
      cd = 160;
    }
    if(distancia < 50){
       efecto.play();
    }else if(distancia < 35){
      efecto.pause();
    }
  };
}

function NubeR(){
  
  this.x = random(width);
  this.y = random(-400,-150);
  this.tamx = random(73,135);
  this.tamy = 50;
  this.yspeed = random(1.5,5.5); 
  this.n = 0;
  
  this.mover = function() {
    this.y = this.y + this.yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.yspeed = random(1.50,5.5);
      this.x = random(width);
    }
  };
  
  this.mostrar = function() {
    noStroke();
    image(nubeRoza,this.x, this.y, this.tamx, this.tamy);
  };
  
  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);

    if (distancia < 50 && cd == 160 && cambiar == 0) {
      cambiar = 2;
      cd = 159;
      print(cambiar);
    }
    if ((distancia < 50 && cambiar == 2 && cd == 160) ||
      (distancia < 50 && cambiar == 1 && cd == 160)) {
      cambiar = 3;
      cd = 159;
      print(cambiar);
    }
      if ((distancia < 50 && cambiar == 3 && cd == 160) ||
      (distancia < 50 && cambiar == 4 && cd == 160)) {
      cambiar = 5;
      cd = 159;
      print(cambiar);
    }
     if ((distancia < 50 && cambiar == 6 && cd == 160)) {
      cambiar = 7;
      cd = 159;
      print(cambiar);
    }
     if (cd <= 159) {
      cd--;
    }
    if (cd == 0) {
      cd = 160;
    }
    print(cd);

    if(distancia < 50){
      efecto.play();
    }else if(distancia < 35){
      efecto.pause();
    }
  };
}

