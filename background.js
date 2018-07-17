function bgStars() {
	this.pos = createVector(random(width), random(height));
	this.r = 5;
	this.c = color(random(255), random(255), random(255));
	this.vel = createVector(0, 0);
	this.movex = 0;
	this.drivex = 0;
	this.ported = false;
	this.drivey = 0;


	this.show = function() {	
	fill(this.c);
	ellipse(this.pos.x, this.pos.y, this.r);
}
	this.addx = function(b) {this.drivex = b}
	this.addy = function(c) {this.drivey = c}
	this.update = function() {
	this.boost(this.drivex, this.drivey);
    this.pos.add(this.vel);
    this.vel.mult(0.975);
	}
	this.boost = function(a, b) {
    var force = p5.Vector.fromAngle(0);
    force.mult(0.5 * a);
    this.vel.add(force);
    force = p5.Vector.fromAngle(0 - (PI * b));
    force.mult(0.5 * abs(b));
    this.vel.add(force);
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

}

function bgStars1() {
	this.pos = createVector(random(width), random(height));
	this.r = 5;
	this.c = color(random(255), random(255), random(255));
	this.vel = createVector(0, 0);
	this.movex = 0;
	this.drivex = 0;
	this.ported = false;
	this.drivey = 0;


	this.show = function() {	
	fill(this.c);
	ellipse(this.pos.x, this.pos.y, this.r);
}
	this.addx = function(b) {this.drivex = b}
	this.addy = function(c) {this.drivey = c}
	this.update = function() {
	this.boost(this.drivex, this.drivey);
    this.pos.add(this.vel);
    this.vel.mult(0.975);
	}
	this.boost = function(a, b) {
    var force = p5.Vector.fromAngle(0);
    force.mult(0.5 * a);
    this.vel.add(force);
    force = p5.Vector.fromAngle(0 - (PI * b));
    force.mult(0.5 * abs(b));
    this.vel.add(force);
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

}

function bgStars2() {
	this.pos = createVector(random(width), random(height));
	this.r = 5;
	this.c = color(random(255), random(255), random(255));
	this.vel = createVector(0, 0);
	this.movex = 0;
	this.drivex = 0;
	this.ported = false;
	this.drivey = 0;


	this.show = function() {	
	fill(this.c);
	ellipse(this.pos.x, this.pos.y, this.r);
}

  





}

function TwinklebgStars() {
	for (var i = 0; i < bgstars.length; i++) {
    bgstars[i].show();
    bgstars[i].update();
    bgstars[i].edges();
    bgstars[i].r = random(8, 10);
  }

  	for (var i = 0; i < bgstars1.length; i++) {
    bgstars1[i].show();
    bgstars1[i].update();
    bgstars1[i].edges();
    bgstars1[i].r = random(6, 7);
  }

}