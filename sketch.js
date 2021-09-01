var nubes = [];
var n = 0;
let cambiar = 0;
let direccion = '';
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
let kiwi, alaIz, alaDe, kiwiAzul, kiwiRoza, nubeAzul, nubeRoza;
function preload(){
  kiwi = loadImage('kiwi2.png');
  alaIz = loadImage('alaI.png');
  alaDe = loadImage('alaD.png');
  kiwiAzul = loadImage('kiwiazul.png');
  kiwiRoza = loadImage('kiwiroza.png');
  nubeAzul = loadImage('nubeAzul.png');
  nubeRoza = loadImage('nubeRoza.png');
}



function setup() {
  createCanvas(displayWidth/2, displayHeight/*600, 500*/);
  frameRate(15);
  for(var i = 0; i < 10; i++){
    nubes[i] = new NubeR();
    n += 1;
    if (n>1)nubes[i] = new Nube(), n=0;
  }
  
}

function draw() {
  background(21,205,164);
  for(var i = 0; i < nubes.length; i++){
    nubes[i].cambiarColor();
    nubes[i].mover();
    nubes[i].mostrar();
    }
  
  pajaro();
  ala1();
  ala2();
  actualizar();
}

function pajaro(){
  if(cambiar == 0){
  stroke(10);
  fill(250,250,255,20);
  image(kiwi, booble.x - 5,booble.y - 25,60,105);
  rect(booble.x,booble.y,50,75,15);
  }else if(cambiar == 1){
    image(kiwiAzul, booble.x - 30,booble.y - 25,135,105);
  }else if(cambiar == 2){
    image(kiwiRoza, booble.x - 30,booble.y - 25,135,105);
  }
}

function ala1(){
  if(cambiar == 0){
  this.x = booble.x;
  this.y = booble.y + 20;
  this.ancho = alaI.ancho;
  this.alto = alaI.alto;
  stroke(10);
  fill(250,250,255,20);
  image(alaIz,booble.x - 68,booble.y + 10, 85, 44);
  rect(this.x ,this.y, this.ancho, this.alto);}
}

function ala2(){
  if(cambiar == 0){
  this.x = booble.x + 50
  this.y = booble.y + 20
  this.ancho = alaD.ancho
  this.alto = alaD.alto
  stroke(10);
  fill(250,250,255,20);
  image(alaDe,booble.x + 35,booble.y + 10, 85,40);
  rect(this.x, this.y, this.ancho, this.alto);}
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
  
  this.cambiarColor = function() {
     let distancia = dist( booble.x, booble.y, this.x,this.y); 
  if(distancia < 50){
    cambiar = 1;
    print(cambiar);
  }};
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
  
  this.cambiarColor = function() {
     let distancia = dist( booble.x, booble.y, this.x,this.y); 
  if(distancia < 50){
    cambiar = 2;
    print(cambiar);
  }};
}
