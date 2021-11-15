
function NubeCeleste() {
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(60, 250);
  this.tamy = random(100, 260);
  
  
  this.mover = function () {
    this.y = this.y + yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
  };

  this.mostrar = function () {
    noStroke();
    image(nubeBlue, this.x, this.y, this.tamx, this.tamy);
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 50 && cd == 160) {
      switch(nivel){
        case "INICIO":
          cambiar = 1;
          cd = 159;
          break;
        case "TORMENTA":
          cambiar = 10;
          cd = 159;
          break;
        case "TORMENTA2":
          cambiar = 11;
          cd = 159;
          break;
        case "BOSS":
          cambiar = 110;
          cd = 159;
          break;
        case "FINALFELIZ":
          cambiar = 110;
          cd = 159;
          break;
      }
    }

    if (distancia < 100 && cd == 160) {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }
   /* if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }*/

    if (distancia < 50) {
      efecto.play();
    } else if (distancia < 35) {
      efecto.pause();
    }
  };
}

function NubeRosa() {
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(160, 350);
  this.tamy = random(110, 190);
  
  
  this.mover = function () {
    this.y = this.y + yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
  };

  this.mostrar = function () {
    noStroke();
    image(nubePink, this.x, this.y, this.tamx, this.tamy);
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 50 && cd == 160) {
      switch(nivel){
        case "INICIO":
          cambiar = 2;
          cd = 159;
          break;
        case "TORMENTA":
          cambiar = 20;
          cd = 159;
          break;
        case "TORMENTA2":
          cambiar = 22;
          cd = 159;
          break;
        case "BOSS":
          cambiar = 120;
          cd = 159;
          break;
        case "FINALFELIZ":
          cambiar = 120;
          cd = 159;
          break;
      }
    }
    
    if (distancia < 100 && cd == 160) {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    /*if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }*/

    if (distancia < 50) {
      efecto.play();
    } else if (distancia < 35) {
      efecto.pause();
    }
  };
}

function NubeLila() {
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(120, 200);
  this.tamy = random(110, 260);
  
  
  this.mover = function () {
    this.y = this.y + yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
  };

  this.mostrar = function () {
    noStroke();
    image(nubeViolet, this.x, this.y, this.tamx, this.tamy);
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 50 && cd == 160) {
      switch(nivel){
        case "INICIO":
          cambiar = 3;
          cd = 159;
          break;
        case "TORMENTA":
          cambiar = 30;
          cd = 159;
          break;
        case "TORMENTA2":
          cambiar = 33;
          cd = 159;
          break;
        case "BOSS":
          cambiar = 130;
          cd = 159;
          break;
        case "FINALFELIZ":
          cambiar = 130;
          cd = 159;
          break;
      }
    }
    
    if (distancia < 100 && cd == 160) {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
      
    }

    /*if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }*/

    if (distancia < 50) {
      efecto.play();
    } else if (distancia < 35) {
      efecto.pause();
    }
  };
}

function NubeVerde() {
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(110, 220);
  this.tamy = random(110, 200);
  
  
  this.mover = function () {
    this.y = this.y + yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
  };

  this.mostrar = function () {
    noStroke();
    image(nubeGreen, this.x, this.y, this.tamx, this.tamy);
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 50 && cd == 160) {
      switch(nivel){
        case "INICIO":
          cambiar = 4;
          cd = 159;
          break;
        case "TORMENTA":
          cambiar = 40;
          cd = 159;
          break;
        case "TORMENTA2":
          cambiar = 44;
          cd = 159;
          break;
        case "BOSS":
          cambiar = 140;
          cd = 159;
          break;
        case "FINALFELIZ":
          cambiar = 140;
          cd = 159;
          break;
      }
    }
    
    if (distancia < 100 && cd == 160) {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

   /* if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }*/

    if (distancia < 50) {
      efecto.play();
    } else if (distancia < 35) {
      efecto.pause();
    }
  };
}

function NubeNaranja() {
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(120, 280);
  this.tamy = random(110, 190);
  
  
  this.mover = function () {
    this.y = this.y + yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
  };

  this.mostrar = function () {
    noStroke();
    image(nubeOrange, this.x, this.y, this.tamx, this.tamy);
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 50 && cd == 160) {
      switch(nivel){
        case "INICIO":
          cambiar = 5;
          cd = 159;
          break;
        case "TORMENTA":
          cambiar = 50;
          cd = 159;
          break;
        case "TORMENTA2":
          cambiar = 55;
          cd = 159;
          break;
        case "BOSS":
          cambiar = 150;
          cd = 159;
          break;
        case "FINALFELIZ":
          cambiar = 150;
          cd = 159;
          break;
      }
    }
    
    if (distancia < 100 && cd == 160) {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    /*if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }*/

    if (distancia < 50) {
      efecto.play();
    } else if (distancia < 35) {
      efecto.pause();
    }
  };
}

function NubeGris() {
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(130, 250);
  this.tamy = random(60, 190);
  this.n = 0;
  xCoord1 = this.x;
  yCoord1 = this.y;
  xCoord2 = this.x;
  yCoord2 = this.y;
  
  this.mover = function () {
    this.y = this.y + yspeed;
    if (this.y > height) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
  };

  this.mostrar = function () {
    noStroke();
    image(nubeBad, this.x, this.y, this.tamx, this.tamy);
  };
  
  this.rayos = function() {
    for (var i = 0; i < 10; i++) {
      
      xCoord1 = xCoord2;
      yCoord1 = yCoord2;
      xCoord2 = xCoord1 + int(random(-40, 40));
      yCoord2 = yCoord1 + int(random(10, 75));
      
      strokeWeight(random(3, 5));
      strokeJoin(MITER);
      line(xCoord1, yCoord1, xCoord2, yCoord2);
      
      if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
        xCoord2 = this.x;
        yCoord2 = this.y;
        stroke(225, 179, 43);
      }
    }
  };
  
 this.cambiarColor = function () {
    let distanciaGris = dist(booble.x, booble.y, this.x, this.y);

    if (distanciaGris < 50 && cd == 160) {
      switch(nivel){
        case "TORMENTA": 
          cambiar = 60;
          cd = 159;
          break;
        case "TORMENTA2":
          cambiar = 66;
          cd = 159;
          break;  
        case "BOSS":
          cambiar = 100;
          cd = 159;
          break;  
      }
    }

    if (distanciaGris < 100 && cd == 160) {
      if (motivacion == 3 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }

      if (motivacion == 2 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }
      if (motivacion == 1 && contMot == 160) {
        motivacion = 0;
        contMot = 159;
      }
    }

    if (contMot <= 159) {
      contMot--;
    }

    if (contMot == 0) {
      contMot = 160;
    }

    if (cd <= 159) {
      parpadeo = true;
      cd--;
    }
    if (cd == 0) {
      cd = 160;
    }
    if (cd == 160) {
      parpadeo = false;
    }
  };
}
