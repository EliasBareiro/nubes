function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(20);
  
  //--------------------NUBES--------------------------------------------
  for (var i = 0; i < cantColors; i++) {
    nubes[i] = new NubeCeleste();
    n += 1;

    if (n == 3) nubes[i] = new NubeRosa();
    if (n == 4) nubes[i] = new NubeLila();
    if (n == 5) nubes[i] = new NubeVerde();
    if (n == 6) nubes[i] = new NubeNaranja(), (n = 0);
       nubeGris[i] = new NubeGris();
  }
  
  //------------------------MUSICA----------------------------------------
  if(musica.isLoaded())musica.loop();
  if(canto.isLoaded())canto.play();
  //-----------------------OTROS----------------------------------------
  imageMode(CENTER);
  
}


function draw() {
  background(205);
  if (cd <= 159) {
    
    cd--;
  }
  if (cd == 0) {
    cd = 160;
  }
  
  //---------------------TRANSICION---------------------------------------

  if(nivel != "MENU"){
     contadorTormenta++;
     }
  //----------------------NIVELES-----------------------------------------
  switch(nivel){
      //------------------MENU
    case "MENU": 
      image(portada, width/2, height/2, width, height);
      push();
      noStroke();
      noFill();
      rect((width/2) - 120, (height/2) - 30, 220, 65);
      pop();
      if(booble.x < ((width/2) - 120)+220 && booble.x > (width/2) - 120 && booble.y < ((height/2) - 30)+65 && booble.y > (height/2) - 30){
       nivel = "INICIO"; 
      }
      break;
      //------------------INICIO
    case "INICIO":  
      image(fondo1, width/2, height/2, width, height);
      
      if (contadorTormenta == 500) {
        musica.pause();
        if(!musica2.isLooping())musica2.loop();
        if(!lluvia1.isPlaying())lluvia1.play();
      }
      if (contadorTormenta > 600 && contadorTormenta < 900) {
        nivel = "TORMENTA";
      }
      break;
      //------------------TORMENTA1
    case "TORMENTA":  
      image(fondo2, width/2, height/2, width, height);
      yspeed = random(6, 7);
      cantColors = 6;
      
      
      if (contadorTormenta > 1200) {
        musica2.setVolume(0.2);
        nivel = "TORMENTA2";}
      break;
      //------------------TORMENTA2
    case "TORMENTA2": 
      image(fondo3, width/2, height/2, width, height);
      yspeed = random(7, 9);
      cantColors = 4;
      cantGrises = 10;
      
      if (contadorTormenta > 1400) {
        musica2.setVolume(0.1);
      }
      if (contadorTormenta > 1500 && motivacion > 0) {
        musica2.stop();
        if(!Boss.isPlaying())Boss.play();
        nivel = "BOSS";
      }
      break;  
      //------------------BOSS
    case "BOSS": 
      image(fondo4, width/2, height/2, width, height);     
      yspeed = random(9, 10);
      cantColors = 3;
      cantGrises = 10;
      
      
      if (contadorTormenta > 2000 && motivacion > 0) {
        Boss.stop();
        if(!musica.isPlaying())musica.play();
        nivel = "FINALFELIZ";
      }
      if (contadorTormenta > 2000 && motivacion == 0) {
        Boss.stop();
        if(!musica.isPlaying())musica.play();
        nivel = "FINALTRISTE";
      }
      break;
      //------------------FINALFELIZ
    case "FINALFELIZ":
      cantColors = 6;
      image(fondo5, width/2, height/2, width, height);
      yspeed = random(2.5, 4.5);
      break;
      //------------------FINALTRISTE
    case "FINALTRISTE":
      image(fondo4, width/2, height/2, width, height);
      yspeed = random(2.5, 4.5);
      cantGrises = 6;
      break;
  }
  //------------------------NUBES-----------------------------------------
  if(nivel != "MENU" || nivel == "FINALTRISTE"){
    for (var i = 0; i < cantColors; i++) {
        nubes[i].cambiarColor();
        nubes[i].mover();
        nubes[i].mostrar();
    }}
  if(nivel == "TORMENTA" || nivel == "TORMENTA2" || nivel == "BOSS"){
    count = count - 1 * (deltaTime );
    if(count <= 0) count = 200;
    for (var t = 0; t < cantGrises; t++) {
      if(nivel == "TORMENTA2" || nivel == "BOSS"){
        if(count % 9 == 0)nubeGris[t].rayos();
      }  
        nubeGris[t].cambiarColor();
        nubeGris[t].mover();
        nubeGris[t].mostrar();
  }}
  if(nivel == "BOSS"){
    image(nubeJefe, random((width/2)-3, (width/2)+3), random(height/2, (height/2)-5), width, height); 
  }
  //----------------------------------------------------------------------
  text(contadorTormenta, 100, 100);
  pajaro();
  actualizar();
  if(nivel != "MENU")barraMotivacion();
  
}
