
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
this.speed = 0.3;
this.posx = 20;
this.posy = 0;
this.damage = 0;
this.render = function() {
  if (shiptype == 0) {
    this.damage = 2;
    Ship1();
} else if(shiptype == 1) {
  this.damage = 1;
    Ship2();
}


}



this.boost = function(a, b) {
    var force = p5.Vector.fromAngle(0);
    force.mult(this.speed * a);
    this.vel.add(force);
    force = p5.Vector.fromAngle(0 - (PI * b));
    force.mult(this.speed * abs(b));
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


this.hits = function(rocks) {
    var d = dist(this.pos.x, this.pos.y, rocks.pos.x, rocks.pos.y);
    if (d < this.r + rocks.r) {
      return true;
    } else {
      return false;
    }
  }





}


















