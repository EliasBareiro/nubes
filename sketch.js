var nubes = [];

let direccion = '';
var n = 0;
var booble={
  x : 300,
  y : 400,
  mov : 5
};
var alaI={
  ancho : -50,
  alto : 20
};
var alaD={
  ancho : 50,
  alto : 20
};
let kiwi, alaIz, alaDe;
function preload(){
  kiwi = loadImage('kiwi2.png');
  alaIz = loadImage('alaI.png');
  alaDe = loadImage('alaD.png');
}



function setup() {
  createCanvas(600, 500);
  frameRate(15);
  for(var i = 0; i < 10; i++){
    nubes[i] = new Nube();
  }
  blues = color(21, 83, 222);
  pinks = color(250, 128, 231);
  colors = [blues,pinks];
  
}

function draw() {
  background(21,205,164);
  for(var i = 0; i < nubes.length; i++){
    fill(colors[n]);
    nubes[i].mover();
    nubes[i].mostrar();
    n += 1;
    if (n>1)n=0;
  }
  
  pajaro();
  actualizar();
}

function pajaro(){
  stroke(10);
  fill(250,250,255,20);
  image(kiwi, booble.x - 5,booble.y - 25,60,105);
  image(alaDe,booble.x + 35,booble.y + 10, 85,40);
  image(alaIz,booble.x - 68,booble.y + 10, 85, 44);
  rect(booble.x,booble.y,50,75,15);
  rect(booble.x ,booble.y + 20, alaI.ancho, alaI.alto);
  rect(booble.x + 50,booble.y + 20, alaD.ancho, alaD.alto);
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
    rect(this.x, this.y, this.tamx, 50,25);
  };
}
