
function pajaro() {
  let mil = millis();
  switch(cambiar){
    //KIWIBEBE----------------------------------
    case 0 :
      if(parpadeo == true){
        if(mil % 5 == 0){
          push();
          tint(255,100)
          image(gif, booble.x, booble.y, 80, 90); 
          pop();
        }
      }
      if(parpadeo == false){
        image(gif, booble.x, booble.y, 80, 90);
      }
      break;
    case 1:
      image(kiwiCeleste, booble.x, booble.y, 80, 90);
      break;
    case 2:
      image(kiwiRosa, booble.x, booble.y, 80, 90);
      break;
    case 3:
      image(kiwiLila, booble.x, booble.y, 80, 90);
      break;
    case 4:
      image(kiwiVerde, booble.x, booble.y, 80, 90);
      break;
    case 5:
      image(kiwiNaranja, booble.x, booble.y, 80, 90);
      break;
    case 6:
      image(kiwi4Azul, booble.x, booble.y, 80, 90);
      break;
  
    //KIWICHICO----------------------------------
    case 10:
      image(kiwiCelesteChico, booble.x, booble.y, 80, 90);
      break;
    case 20:
      image(kiwiRosaChico, booble.x, booble.y, 80, 90);
      break;
    case 30:
      image(kiwiLilaChico, booble.x, booble.y, 80, 90);
      break;
    case 40:
      image(kiwiVerdeChico, booble.x, booble.y, 80, 90);
      break;
    case 50:
      image(kiwiNaranjaChico, booble.x, booble.y, 80, 90);
      break;
    case 60:
      if(parpadeo == true){
        if(mil % 5 == 0){
          push();
          tint(255,100)
          image(kiwiBlancoChico, booble.x, booble.y, 80, 90); 
          pop();
        }
      }
      if(parpadeo == false){
        image(kiwiBlancoChico, booble.x, booble.y, 80, 90);
      }
      break;
      
    //KIWIMEDIANO---------------------------------
    case 11:
      image(kiwiCelestemediano, booble.x, booble.y, 80, 90);
      break;
    case 22:
      image(kiwiRosamediano, booble.x, booble.y, 80, 90);
      break;
    case 33:
      image(kiwiLilamediano, booble.x, booble.y, 80, 90);
      break;
    case 44:
      image(kiwiVerdemediano, booble.x, booble.y, 80, 90);
      break;
    case 55:
      image(kiwiNaranjamediano, booble.x, booble.y, 80, 90);
      break;
    case 66:
      if(parpadeo == true){
        if(mil % 5 == 0){
          push();
          tint(255,100)
          image(kiwiBlancomediano, booble.x, booble.y, 80, 90); 
          pop();
        }
      }
      if(parpadeo == false){
        image(kiwiBlancomediano, booble.x, booble.y, 80, 90);
      }
      break;
    //KIWIGRANDE----------------------------------
    case 100 :
      if(parpadeo == true){
        if(mil % 5 == 0){
          push();
          tint(255,100)
          image(kiwiBlancogrande, booble.x, booble.y, 80, 90); 
          pop();
        }
      }
      if(parpadeo == false){
        image(kiwiBlancogrande, booble.x, booble.y, 80, 90);
      }
      break;
    case 110:
      image(kiwiCelestegrande, booble.x, booble.y, 80, 90);
      break;
    case 120:
      image(kiwiRosagrande, booble.x, booble.y, 80, 90);
      break;
    case 130:
      image(kiwiLilagrande, booble.x, booble.y, 80, 90);
      break;
    case 140:
      image(kiwiVerdegrande, booble.x, booble.y, 80, 90);
      break;
    case 150:
      image(kiwiNaranjagrande, booble.x, booble.y, 80, 90);
      break;
    }  
}

function actualizar() {
  if (keyIsDown(83)) {
    booble.y = booble.y + 5;
  }
  if (keyIsDown(87)) {
    booble.y = booble.y - 5;
  }
  switch (direccion) {
    case "derecha":
      booble.x = booble.x + booble.mov;
      booble.y = booble.y;
      break;
    case "izquierda":
      booble.x = booble.x - booble.mov;
      booble.y = booble.y;
      break;
  }
  if (booble.x > width) {
    booble.x = -100 + booble.mov;
  }
  if (booble.x < -100) {
    booble.x = width - booble.mov;
  }
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      direccion = "izquierda";
      break;
    case 68:
      direccion = "derecha";
      break;
  }
}

function barraMotivacion() {
  this.x = 100;
  this.y = height - 200;
  
  
  if (motivacion == 3) {
    image(alta, this.x, this.y, 120, 334)
    booble.mov = 7;
  }
  if (motivacion == 2) {
    image(media, this.x, this.y, 120, 334)
    booble.mov = 5;
  }
  if (motivacion == 1) {
    image(baja, this.x, this.y, 120, 334)
    booble.mov = 3;
  }
  if (motivacion == 0) {
    image(baja, this.x, this.y, 120, 334)
    booble.mov = 2;
  }
  
}