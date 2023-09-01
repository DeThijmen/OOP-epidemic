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
var speedsX;
var speedsY;
var xPosities;
var yPosities;
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

  // initialiseer waarden
  xPosities = [width / 2, random(200, 300), random(300, 400), random(400, 500), random(500, 600), random(600, 700), random(700, 800), random(800, 900), random(900, 1000)];
  yPosities = [height / 2, random(150, 200), random(200, 250), random(250, 300), random(300, 350), random(400, 450), random(450, 500), random(500, 550), random(550, 600)];
  speedsX = [random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10)];      // random waardes tussen -10 en 10
  speedsY = [random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10), random(-10, 10)];      // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

  function draw() {
    // zwarte achtergrond
    background(0, 0, 0);

    for (var i = 0; i < xPosities.length; i++) {
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(xPosities[i], yPosities[i], BREEDTE, BREEDTE);

    fill(255, 100, 100);
    rect(xPosities[0], yPosities[0], BREEDTE, BREEDTE);

    // update positie
    xPosities[i] = xPosities[i] + speedsX[i];
    yPosities[i] = yPosities[i] + speedsY[i];

    // stuiter evt. tegen de kanten
    if (xPosities[i] <= 0 || xPosities[i] + BREEDTE >= width) {
    speedsX[i] = speedsX[i] * -1;
    }

    if (yPosities[i] <= 0 || yPosities[i] + BREEDTE >= height) {
      speedsY[i] = speedsY[i] * -1;
    }

  }

}
