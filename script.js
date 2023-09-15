 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
class Mens {
  x;
  y;
  speedX;
  speedY;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;

    // stuiter evt. tegen de kanten
    if (this.x <= 0 || this.x + BREEDTE >= width) {
      this.speedX = this.speedX * -1;
    }

    if (eenMens.y <= 0 || eenMens.y + BREEDTE >= height) {
      this.speedY = this.speedY * -1;
    }
  }
}

const BREEDTE = 20;




/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  Mens = [{x : width / 2, y : height / 2, speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(200, 300), y : random(100, 150), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(300, 400), y : random(150, 250), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(400, 500), y : random(250, 300), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(500, 600), y : random(300, 400), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(600, 700), y : random(400, 450), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(700, 800), y : random(450, 500), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(800, 900), y : random(500, 600), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(900, 1000), y : random(600, 700), speedX : random(-10, 10), speedY : random(-10, 10)}];

}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  for (var i = 0; i < Mens.length; i++) {
    var eenMens = Mens[i];
    
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(eenMens.x, eenMens.y, BREEDTE, BREEDTE);

    fill(255, 100, 100);
    rect(Mens[0].x, Mens[0].y, BREEDTE, BREEDTE);

   Mens.update();
  }

}
