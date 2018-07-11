var canvas;
var player;
var lasers = [];
var particles = [];
var spaceHeld = false;
cooldown_fire = 5;
var firingDelay = 0;








function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0);

  player = new Player();
}

function draw() {


  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  player.render();
  player.edges();
  player.turn();
  player.update();
  LaserChecker();
  Attack();
  Decreaser();

  
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





function Attack() {
   if (spaceHeld   && firingDelay <= 0) {
    lasers.push(new Laser(player.pos, player.heading, 100, 100, 100));
    lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 100));
    console.log("test");
    firingDelay = cooldown_fire;

    for (var i = 0; i < 3; i++) {
      particles.push(new Particle(createVector(player.pos.x + cos(player.heading) * player.r, player.pos.y + sin(player.heading) * player.r), player.heading + random(-PI / 2, PI / 2), 100, 200, 100));
    }
} 

        
    //   for (var i = 0; i < 3; i++) {
    //   particles.push(new Particle(createVector(play.pos.x + cos(play.heading) * play.r, play.pos.y + sin(play.heading) * play.r), play.heading + random(-PI / 2, PI / 2), a, b, c));
    // }
  

}
























function Player() {
this.pos = createVector(width / 2, height / 2);
this.heading = 0;
this.ported = false;
this.r = 20;
this.maxspeed = 10;
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.drive = 0;
this.rotation = 0;
this.render = function() {
    push();
    rectMode(CENTER);
    noStroke();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(100, 250, 100);
    beginShape();
    vertex(0, 10);
    vertex(-15, 15);
    vertex(0, -15);
    vertex(15, 15);
    endShape();
    pop();


}



this.boost = function(a, b) {
    var force = p5.Vector.fromAngle(0);
    force.mult(0.5 * a);
    this.vel.add(force);
    force = p5.Vector.fromAngle(0 - (PI * b));
    force.mult(0.5 * abs(b));
    this.vel.add(force);
  }



  this.side = function(b){this.drive = b;}

 this.update = function() {
    this.boost(this.drive, this.rotation);
    this.pos.add(this.vel);
    this.vel.mult(0.975);

  }

  this.setRotation = function(a) {
    this.rotation = a;
  }



this.edges = function() {

    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
      this.ported = true;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
      this.ported = true;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
      this.ported = true;
    } else if (this.pos.y < -this.r) {

      this.pos.y = height + this.r;
      this.ported = true;
    }


}

  this.turn = function() {
    var prefHeading = p5.Vector.sub(createVector(mouseX, mouseY), this.pos).heading();
    if (this.heading - prefHeading > PI) {
      prefHeading += TWO_PI;
    } else if (this.heading - prefHeading < -PI) {
      prefHeading -= TWO_PI;
    }
    this.heading += (prefHeading - this.heading) * 0.25;
    this.heading %= TWO_PI;
  }








}

function keyPressed() {
 if (keyCode == RIGHT_ARROW || key == 'D') {
    player.side(0.5);
  }
   else if (keyCode == LEFT_ARROW || key == 'A') {
    player.side(-0.5);
  }

  if (keyCode == UP_ARROW || key == 'W') {
    player.setRotation(0.5);
  }
   else if (keyCode == DOWN_ARROW || key == 'S') {
   player.setRotation(-0.5);
  }

}

function keyReleased() {
    if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW || key == 'D' || key == 'A') {
    player.side(0);

  } 
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW || key == 'W' || key == 'S') {
    player.setRotation(0);

  }
}

function mousePressed() {
  spaceHeld = true;
  console.log(spaceHeld);


}

function mouseReleased() {
  spaceHeld = false;
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

