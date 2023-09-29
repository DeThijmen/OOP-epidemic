 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/*      classes de ik gebruik in simulator       */
/* ********************************************* */
class Mens {
  x;
  y;
  speedX;
  speedY;
  breedte;
  isBesmet;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
    this.isBesmet = false;
    this.breedte = 20;
  }

  show() {
    // teken
    noStroke();
    if (this.isBesmet === true) {
      fill(255, 0, 0);      // rood
    }
    else {
      fill(255, 255, 255);  // wit
    }

    rect(this.x, this.y, this.breedte, this.breedte);
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;

    // stuiter evt. tegen de kanten
    if (this.x <= 0 || this.x + this.breedte >= width) {
      this.speedX = this.speedX * -1;
    }

    if (this.y <= 0 || this.y + this.breedte >= height) {
      this.speedY = this.speedY * -1;
    }
  }

  isOverlappend(andereMens) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;
  
    // zet teruggeefwaarde op true als er een overlap is
    if ( // valt linkerbovenhoek binnen randen van 'andereMens'?
         (this.x >= andereMens.x &&
          this.x <= andereMens.x + andereMens.breedte &&
          this.y >= andereMens.y &&
          this.y <= andereMens.y + andereMens.breedte)
        ||
         // OF valt rechterbovenhoek binnen randen van 'andereMens'?
         (this.x + this.breedte >= andereMens.x &&
          this.x + this.breedte <= andereMens.x + andereMens.breedte &&
          this.y >= andereMens.y &&
          this.y <= andereMens.y + andereMens.breedte)
        || // OF de linkeronderhoek?
         (this.x >= andereMens.x &&
          this.x <= andereMens.x + andereMens.breedte &&
          this.y + this.breedte >= andereMens.y &&
          this.y + this.breedte <= andereMens.y + andereMens.breedte)
        || // OF de hoek rechtsonder?
         (this.x >= andereMens.x &&
          this.x <= andereMens.x + andereMens.breedte &&
          this.y + this.breedte >= andereMens.y &&
          this.y + this.breedte <= andereMens.y + andereMens.breedte)
       ) {

      overlappend = true;
    }

    return overlappend;
  }
}

class Kat {
  x;
  y;
  speedX;
  speedY;
  breedte;
  isBesmet;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
    this.isBesmet = false;
    this.breedte = 10;
  }

  show() {
    // teken
    noStroke();
    if (this.isBesmet === true) {
      fill(255, 100, 0);   // oranje
    }
    else {
      fill(0, 0, 255);  // blauw
    }

    rect(this.x, this.y, this.breedte, this.breedte);
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;

    // stuiter evt. tegen de kanten
    if (this.x <= 0 || this.x + this.breedte >= width) {
      this.speedX = this.speedX * -1;
    }

    if (this.y <= 0 || this.y + this.breedte >= height) {
      this.speedY = this.speedY * -1;
    }
  }

  isOverlappend(andereKat) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;
  
    // zet teruggeefwaarde op true als er een overlap is
    if ( // valt linkerbovenhoek binnen randen van 'andereMens'?
         (this.x >= andereKat.x &&
          this.x <= andereKat.x + andereKat.breedte &&
          this.y >= andereKat.y &&
          this.y <= andereKat.y + andereKat.breedte)
        ||
         // OF valt rechterbovenhoek binnen randen van 'andereMens'?
         (this.x + this.breedte >= andereKat.x &&
          this.x + this.breedte <= andereKat.x + andereKat.breedte &&
          this.y >= andereKat.y &&
          this.y <= andereKat.y + andereKat.breedte)
        || // OF de linkeronderhoek?
         (this.x >= andereKat.x &&
          this.x <= andereKat.x + andereKat.breedte &&
          this.y + this.breedte >= andereKat.y &&
          this.y + this.breedte <= andereKat.y + andereKat.breedte)
        || // OF de hoek rechtsonder?
         (this.x >= andereKat.x &&
          this.x <= andereKat.x + andereKat.breedte &&
          this.y + this.breedte >= andereKat.y &&
          this.y + this.breedte <= andereKat.y + andereKat.breedte)
       ) {

      overlappend = true;
    }

    return overlappend;
  }
}

class dokter extends Mens {
  show() {
    super.show();

    strokeWeight = 5;
    stroke(255, 0, 0);
    line(this.x, this.y + this.breedte / 2, this.x + this.breedte, this.y + this.breedte / 2)
    line(this.x + this.breedte / 2, this.y, this.x + this.breedte / 2, this.y + this.breedte)
  }
}



/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

var Actoren = [];  // lege array voor de Actor-objecten




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

  for (var teller = 0; teller < 25; teller++) {
    // we moeten ze niet te dicht bij de rand tekenen
    // om geen problemen met stuiteren te krijgen
    var ruimteTotRand = 50;
    
    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-10, 10);
    var randomSpeedY = random(-10, 10);

    // maak nieuw mensobject
    var nieuwMens = new Mens(randomX, randomY, randomSpeedX, randomSpeedY);
    
    // voeg mensobject toe aan array
    Actoren.push(nieuwMens);
  }

  for (var teller = 0; teller < 10; teller++) {
    // we moeten ze niet te dicht bij de rand tekenen
    // om geen problemen met stuiteren te krijgen
    var ruimteTotRand = 150;
    
    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-2, 2);
    var randomSpeedY = random(-2, 2);

    // maak nieuw katobject
    var nieuweKat = new Kat(randomX, randomY, randomSpeedX, randomSpeedY);
    
    // voeg katobject toe aan array
    Actoren.push(nieuweKat);
  }

  Actoren[0].isBesmet = true;
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  // ga alle Actoren langs
for (var i = 0; i < Actoren.length; i++) {
  var mensA = Actoren[i];
  // ga met mensA opnieuw alle Actoren langs om te checken op overlap, behalve met zichzelf
  for (var j = 0; j < Actoren.length; j++) {
    var mensB = Actoren[j];
    if (mensA != mensB) {
      // check overlap
      var ActorenOverlappen = mensA.isOverlappend(mensB);
      if (ActorenOverlappen) {
        // check of er een besmetting optreedt
        if (mensA.isBesmet || mensB.isBesmet) {
          // als er één besmet is, wordt ze allebei besmet
          // als ze allebei besmet zijn, verandert deze code niets.
          mensA.isBesmet = true;
          mensB.isBesmet = true;
        }
      }
    }
  }
}

  // ga alle waarden in de arrays af:
  for (var i = 0; i < Actoren.length; i++) {
    // verwijs met 'mens' naar het mens-object die bij deze
    // iteratie van de loop hoort.
    var mens = Actoren[i];
    
    // teken
    mens.show();

    // update positie en stuiter eventueel
    mens.update();
  }
}
