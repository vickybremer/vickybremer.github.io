let r = 0; //zuweisung für Richtung/ Bewegung
let z = 0; //zuweisung für "Zeit" bis zur nächsten Bewegung
let zfaster = 0; // Zeit wie lange snake schneller sein soll
let faster = false; //ob snake schneller sein soll
let snakex = [300];
let snakey = [300];
let foodx;
let foody;
let newfood = true;
let pox;
let poy;
let score = 0;
let highscore = 0;
let startm = true;
let lost = false;
let newhighscore = false;
let endcard;
let startschild;
let hsschild;
let feld;
let helpb = false;
let helpbutton;
let uhr;
let guard;
let alice;

function preload() {
  endcard = loadImage("ENDCARD2.png");
  startschild = loadImage("START1.png");
  hsschild = loadImage("new_highscore.png");
  feld = loadImage("FELD1.png");
  helpbutton = loadImage("HELP1.png");
  uhr = loadImage("UHR.png");
  guard = loadImage("GUARD.png");
  alice = loadImage("ALICE.png");
}

function setup() {
  let canvas = createCanvas(600, 615);
  canvas.parent("snake1");
  frameRate(30); //Rieke, Spiel mittig

  //https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
  window.addEventListener(
    "keydown",
    function(e) {
      // space and arrow keys
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    },
    false
  );
}

endcard.loadPixels();
startschild.loadPixels();
hsschild.loadPixels();
feld.loadPixels();
helpbutton.loadPixels();
uhr.loadPixels();
guard.loadPixels();
alice.loadPixels();

function help() {
  textSize(16);
  fill(252, 227, 255);
  //   rect(270, 587, 57, 30);
  //   fill(0);
  text("help", 275, 610);

  if (helpb === true) {
    image(helpbutton, 0, 150, 600, 300);
  }
}

function start() {
  if (startm === true) {
    image(startschild, 240, 510, 120, 70);

    noStroke();
    fill(250, 150, 0);
    textSize(35);
    text("Start", 254, 556);
  }
}

function youlost() {
  if (lost === true) {
    image(endcard, 170, 115, 260, 360);
  }
}

function spielfeld() {
  stroke(100);
  fill(25, 35, 35, 35);

  line(100, 100, 500, 100);
  line(500, 100, 500, 500);
  line(500, 500, 100, 500);
  line(100, 500, 100, 100);
  image(feld, 56, 57, 490, 490);
  //rect(100,100,400,400);
}

function food() {
  if (newfood === true) {
    foodx = Math.floor(random(8, 32)) * 15;
    foody = Math.floor(random(8, 32)) * 15;
    newfood = false;
  }
  // fill(255, 0, 0);
  // rect(foodx, foody, 15, 15);
  image(uhr, foodx, foody, 15, 15);
}

function eat() {
  if (snakex[0] === foodx && snakey[0] === foody) {
    newfood = true;
    snakex.push(pox);
    snakey.push(poy);
    score = score + 1;
    faster = true; //Wenn food eingesammelt soll snake schneller werden
    if (score > highscore) {
      highscore = highscore + 1;
      newhighscore = true;
    }
  }
}

function snake() {
  image(alice, snakex[0], snakey[0], 15, 15);
  for (i = 1; i < snakex.length; i++) {
    //für snake von vorne bis hinten sollen rects gezeichnet werden
    fill(255);
    stroke(0);
    //rect(snakex[i], snakey[i], 15, 15); //i für verschiedenen Array-Stellen

    image(guard, snakex[i], snakey[i], 15, 15);
  }
  //fill(255,0,0);
  //rect(pox, poy, 15,15);
}

function dead() {
  let d = false; //normalerweise nicht tot
  if (
    snakex[0] <= 100 ||
    snakex[0] >= 490 ||
    snakey[0] <= 100 ||
    snakey[0] >= 490
  ) {
    //wenn snake den Rand berührt auf Anfang
    snakex = [300];
    snakey = [300];
    r = 0;
    score = 0;
    startm = true;
    lost = true;
    d = true; //wenn Rand berührt tot (=wahr)
  }
  return d; //???
}

function dead2() {
  for (i = 1; i < snakex.length; i++) {
    if (snakex[0] === snakex[i] && snakey[0] === snakey[i]) {
      snakex = [300];
      snakey = [300];
      r = 0;
      score = 0;
      startm = true;
      lost = true;
    }
  }
}

//EXTRA (SNAKE WIRD SCHNELLER)
function speed() {
  z++;
  if (z === 4) {
    //draw läuft 4 mal durch bis snake sich erneut um 10 bewegt
    z = 0;
    move(r);
    if (faster === true) {
      z = z + 2;
      zfaster++;
      if (zfaster === 20) {
        //snake wird für 50 Durchgänge schneller, dann wieder normal
        zfaster = 0;
        faster = false;
      }
    }
  }
}

function move(r) {
  if (startm == false) {
    if (r != 0) {
      //wenn r nicht null ist (snake also läuft)
      pox = snakex[snakex.length - 1];
      poy = snakey[snakey.length - 1];

      for (i = snakex.length - 1; i > 0; i--) {
        //Dann wird snake rückwärts durchlaufen???
        snakex[i] = snakex[i - 1];
        snakey[i] = snakey[i - 1];
      }
    }

    if (r === 1) {
      snakex[0] = snakex[0] - 15; //Bewegung der snake nach zuweisung von r
    }
    if (r === 2) {
      snakey[0] = snakey[0] - 15;
    }
    if (r === 3) {
      snakex[0] = snakex[0] + 15;
    }
    if (r === 4) {
      snakey[0] = snakey[0] + 15;
    }
  }
}

function scoretext() {
  textFont("skia");
  textStyle(BOLD);
  textSize(40);
  fill(212, 85, 100);
  text("score: " + score, 100, 50);
}

function highscoretext() {
  textFont("skia");
  textSize(40);
  fill(212, 85, 100);
  text("highscore: " + highscore, 280, 50);

  if (newhighscore === true && lost === true) {
    image(hsschild, 120, 325, 155, 110);
  }
}

function draw() {
  clear();
  spielfeld();
  snake();
  dead();
  dead2();
  food();
  eat();
  start();
  scoretext();
  youlost();
  highscoretext();
  speed();
  help();

  //STEUERUNG
  if (keyIsDown(37)) {
    //zuweisung r
    r = 1; //left
  }
  if (keyIsDown(38)) {
    r = 2; //up
  }
  if (keyIsDown(39)) {
    r = 3; //right
  }
  if (keyIsDown(40)) {
    r = 4; //down
  }

  if (startm == true) {
    if (
      mouseIsPressed === true &&
      mouseX > 250 &&
      mouseX < 350 &&
      mouseY > 520 &&
      mouseY < 570
    ) {
      //Start
      r = 1;
      startm = false;
      lost = false;
      newhighscore = false;
    }
  }

  if (
    mouseIsPressed === true &&
    mouseX > 270 &&
    mouseX < 330 &&
    mouseY > 590 &&
    mouseY < 620
  ) {
    //help
    helpb = true;
  }
}

function mousePressed() {
  if (help) {
    helpb = false;
  }
  if (lost) {
    lost = false;
  }
}
