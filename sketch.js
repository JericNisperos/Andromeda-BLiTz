var canvas;
var player;
var lasers = [];
var particles = [];
var minilasers = [];
var flames = [];
var rocks = [];
var spaceHeld = false;
cooldown_fire = 10;
var shiptype = 1;
var firingDelay = 0;
var page = 0;
var paused = false;
var bgstars = [];
var bgstars1 = [];
var bgstars2 = [];
var bg;
var parallax = true;
var pewpew;
var ship1img;
var life = 100;
var score;
var xmap;
var VioOrbs;
var abced;
var level = 0;
//EDITORS
var flamecount = 1;
var cooldown_fire = 10;
  // <script language="javascript" type="text/javascript" src="lib/p5.play.js"></script>
  // <script language="javascript" type="text/javascript" src="lib/p5.sound.js"></script>
function preload() {
  // pewpew = loadSound('img/pewpew.wav');
}
function setup() {
  score = 0;
  document.cookie = score;
  console.log(document.cookie);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0);

  player = new Player();

  for (var i = 0; i < 50; i++) {bgstars.push(new bgStars());}
  for (var i = 0; i < 75; i++) {
    bgstars1.push(new bgStars1());
  
  }

  for (var i = 0; i < 100; i++) {
    bgstars2.push(new bgStars2());
  
  }
      for (var i = 0; i < 30; i++) {
    rocks.push(new Rocks());

  }

  Console();
}

function draw() {


  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  // background(bg);
  Pages();

  
}

function Decreaser() {
   firingDelay--;
}

function Gradient(x, y, w, h, c1, c2) {

  for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
}

}

function Console() {
  console.log('Press 0 to remove Stars');
}
