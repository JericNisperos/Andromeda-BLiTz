var canvas;
var player;
var lasers = [];
var particles = [];
var spaceHeld = false;
cooldown_fire = 5;
var firingDelay = 0;
var page = 0;
var paused = false;
var bgstars = [];
var bg;




function setup() {
  bg = loadImage("img/bg.jpg");
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0);

  player = new Player();

  // for (var i = 0; i < 20; i++) {
    // bgstars.push(new bgStars());
  // }
}

function draw() {


  canvas = createCanvas(windowWidth, windowHeight);
  background(bg);
  Pages();



  
}

function Decreaser() {
   firingDelay--;
}


function LaserChecker() {

      for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } 

    //  else {
    //   for (var j = rocks.length - 1; j >= 0; j--) {
    //     if (lasers[i].hits(rocks[j])) {
    //       if (life >= 0) {
    //       score += random(100);
    //     }
    //       for (var k = 0; k < 3; k++) {
    //         particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI / 2, PI / 2), 255, 255, 255));
    //       }
    //       if (rocks[j].r > 20) {
    //         var newRocks = rocks[j].breakup();
    //         rocks = rocks.concat(newRocks);
    //       }
    //       rocks.splice(j, 1);
    //       lasers.splice(i, 1);
    //       break;
    //     }
    //   }
    // }

} 

  //       for (var i = particles.length - 1; i > 0; i--) {
  //   particles[i].render();
  //   particles[i].update();
  //   if (particles[i].opacity <= 0) {
  //     particles.splice(i, 1);
  //   }
  // }
}

function Laser(spos, angle, a, b, c) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);
  this.h = random(255);
  this.angle = angle;

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(a, b, c);
    strokeWeight(6);
    line(this.pos.x, this.pos.y  * this.r, this.pos.x + this.vel.x * 2, this.pos.y + this.vel.y * 2);
    pop();
  }

  // this.hits = function(rock) {
  //   var d = dist(this.pos.x, this.pos.y, rock.pos.x, rock.pos.y);
  //   if (d < rock.r) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }


}



































function Particle(spos, angle, a, b, c) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(random(1, 10));
  this.h = random(100, 250);
  this.lastPos = [];
  this.opacity = 100;
  this.rot = random(-PI / 15, PI / 15);

  this.update = function() {
    this.lastPos.push(createVector(this.pos.x, this.pos.y));
    if (this.lastPos.length > 8) {
      this.lastPos.splice(0, 1);
    }
    this.pos.add(this.vel);
    this.vel.mult(0.7);
    this.vel.rotate(this.rot);
    this.opacity -= 5;
  }
  this.render = function() {
    push();
    colorMode(RGB);
    strokeWeight(2);
    for (var i = this.lastPos.length - 1; i > 0; i--) {
     
      stroke(a, b, c);
      if (i === 0) {
        line(this.lastPos[i].x, this.lastPos[i].y, this.pos.x, this.pos.y);
      } else {
        line(this.lastPos[i].x, this.lastPos[i].y, this.lastPos[i - 1].x, this.lastPos[i - 1].y);
      }
    }
    stroke(150, 100, 255);
    //stroke(this.h, 100, this.opacity);
    //point(this.pos.x, this.pos.y);
    pop();
  }
}



function Gradient(x, y, w, h, c1, c2) {

  for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
}

}