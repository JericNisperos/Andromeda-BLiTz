
function Player() {
this.pos = createVector(width / 2, height / 1.2);
this.heading = 0;
this.ported = false;
this.r = 20;
this.maxspeed = 10;
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.drive = 0;
this.rotation = 0;
this.render = function() {
    Ship1();



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


















function Attack() {
   if (spaceHeld   && firingDelay <= 0) {
    lasers.push(new Laser(player.pos, player.heading - 0.2, 100, 100, 100));
    lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 100));
    firingDelay = cooldown_fire;

    for (var i = 0; i < 3; i++) {
      particles.push(new Particle(createVector(player.pos.x + cos(player.heading) * player.r, player.pos.y + sin(player.heading) * player.r), player.heading + random(-PI / 2, PI / 2), 100, 200, 100));
    }
} 
  

}