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
const BREEDTE = 20;
var mensen;




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

  var mensen = [{x : width / 2, y : height / 2, speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(200, 300), y : random(100, 150), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(300, 400), y : random(150, 250), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(400, 500), y : random(250, 300), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(500, 600), y : random(300, 400), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(600, 700), y : random(400, 450), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(700, 800), y : random(450, 500), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(800, 900), y : random(500, 600), speedX : random(-10, 10), speedY : random(-10, 10)},
            {x : random(900, 1000), y : random(600, 700), speedX : random(-10, 10), speedY : random(-10, 10)}
          ];

}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

  function draw() {
    // zwarte achtergrond
    background(0, 0, 0);

    for (var i = 0; i < x.length; i++) {
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(x[i], y[i], BREEDTE, BREEDTE);

    fill(255, 100, 100);
    rect(x[0], y[0], BREEDTE, BREEDTE);

    // update positie
    mensen[i].x = mensen[i].x + mensen[i].speedX;
    mensen[i].y = mensen[i].y + mensen[i].speedY;

    // stuiter evt. tegen de kanten
    if (mensen[i].x <= 0 || mensen[i].x + BREEDTE >= width) {
    mensen[i].speedX = mensen[i].speedX * -1;
    }

    if (mensen[i].y <= 0 || mensen[i].y + BREEDTE >= height) {
      mensen[i].speedY = mensen[i].speedY * -1;
    }

  }

}
