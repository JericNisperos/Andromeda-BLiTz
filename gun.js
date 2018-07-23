function LaserChecker() {


//LASER----------------------------------------------------------------------
      for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } 

     else {
      for (var j = rocks.length - 1; j >= 0; j--) {
        if (lasers[i].hits(rocks[j])) {
          // if (rocks[j].life <= 0) {
          if (life >= 0) {
          score += random(100);
        }
        
          // for (var k = 0; k < 3; k++) {
          //   particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI / 2, PI / 2), 255, 255, 255));
          // }
          if (rocks[j].r > 20) {
            var newRocks = rocks[j].breakup();
            rocks = rocks.concat(newRocks);
          }
          rocks.splice(j, 1);
          lasers.splice(i, 1);
          break;
        // } else {rocks[j].life-=player.damage;
        //   lasers.splice(i, 1);
        // }
      }
        
      }
    }

}


//MINILASERS---------------------------------------------------------------

for (var i = minilasers.length - 1; i >= 0; i--) {
    minilasers[i].render();
    minilasers[i].update();
    if (minilasers[i].offscreen()) {
      minilasers.splice(i, 1);
    } 

     else {
      for (var j = rocks.length - 1; j >= 0; j--) {
        if (minilasers[i].hits(rocks[j])) {
          if (life >= 0) {
          score += random(100);
        }
          // for (var k = 0; k < 3; k++) {
          //   particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI / 2, PI / 2), 255, 255, 255));
          // }
          if (rocks[j].r > 20) {
            var newRocks = rocks[j].breakup();
            rocks = rocks.concat(newRocks);
          }
          rocks.splice(j, 1);
          minilasers.splice(i, 1);
          break;
        }
      }
    }

}

//FLAMES-------------------------------------------------------------------------------
          for (var i = flames.length - 1; i > 0; i--) {
    flames[i].render();
    flames[i].update();
    if (flames[i].opacity <= 0) {
      flames.splice(i, 1);
    } else {

          for (var j = rocks.length - 1; j >= 0; j--) {
        if (flames[i].hits(rocks[j])) {
          if (life >= 0) {
          score += random(100);
        }

          if (rocks[j].r > 20) {
            var newRocks = rocks[j].breakup();
            rocks = rocks.concat(newRocks);
          }
          rocks.splice(j, 1);
          flames.splice(i, 1);
          break;
        }
      }
  }



    
  }

//PARTICLES -----------------------------------------------------------------
        for (var i = particles.length - 1; i > 0; i--) {
    particles[i].render();
    particles[i].update();
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
    }
  }
}



function Laser(spos, angle, a, b, c, z) {
  if (z == 'CENTER') {
      this.pos = createVector(spos.x, spos.y);
  } else if (z == 'RIGHT') {
  this.pos = createVector(spos.x - 30 * cos(angle - 68), spos.y - 30 * sin(angle - 68)); 
} else if (z == 'LEFT') {
  this.pos = createVector(spos.x - 30 * cos(angle + 68), spos.y - 30 * sin(angle + 68));
}
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);
  this.heading = 0;

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(a, b, c);
    strokeWeight(6);
    point(this.pos.x, this.pos.y);

    pop();
  }

  this.hits = function(rock) {
    var d = dist(this.pos.x, this.pos.y, rock.pos.x, rock.pos.y);
    if (d < rock.r) {
      return true;
    } else {
      return false;
    }
  }


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

function MiniLaser(spos, angle, a, b, c, z) {
  if (z == 'CENTER') {
      this.pos = createVector(spos.x, spos.y);
  } else if (z == 'RIGHT') {
  this.pos = createVector(spos.x - 30 * cos(angle - 68), spos.y - 30 * sin(angle - 68)); 
} else if (z == 'LEFT') {
  this.pos = createVector(spos.x - 30 * cos(angle + 68), spos.y - 30 * sin(angle + 68));
}
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);
  this.heading = 0;

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(a, b, c);
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.pos.x - this.vel.x * 2, this.pos.y - this.vel.y * 2);

    pop();
  }

  this.hits = function(rock) {
    var d = dist(this.pos.x, this.pos.y, rock.pos.x, rock.pos.y);
    if (d < rock.r) {
      return true;
    } else {
      return false;
    }
  }


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




function Flame(spos, angle, h) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(random(10, 15));
  this.h = random(100, 250);
  this.lastPos = [];
  this.opacity = 250;
  this.rot = random(-PI / 70, PI / 70);

  this.update = function() {
    this.lastPos.push(createVector(this.pos.x, this.pos.y));
    if (this.lastPos.length > 8) {
      this.lastPos.splice(0, 1);
    }
    this.pos.add(this.vel);
    this.vel.mult(1);
    this.vel.rotate(this.rot);
    this.opacity-=10;
  }
  this.render = function() {
    push();
    colorMode(RGB);
    strokeWeight(2);
    for (var i = this.lastPos.length - 1; i > 0; i--) {
     
      stroke(this.h,100, 100);
      //stroke(this.h, 100, (i) / this.lastPos.length * this.opacity);
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


  this.hits = function(rock) {
    var d = dist(this.pos.x, this.pos.y, rock.pos.x, rock.pos.y);
    if (d < rock.r) {
      return true;
    } else {
      return false;
    }
  }

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
    if (shiptype == 0) {
    lasers.push(new Laser(player.pos, player.heading - 0.2, 100, 100, 200, 'RIGHT'));
    lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 200, 'LEFT'));
    lasers.push(new Laser(player.pos, player.heading, 100, 100, 200, 'CENTER'));
    firingDelay = cooldown_fire;

}   else if(shiptype == 1) {
  for (var i = 0; i < flamecount; i++) {
  flames.push(new Flame(createVector(player.pos.x + cos(player.heading) * player.r, player.pos.y + sin(player.heading) * player.r), player.heading + random(-PI / 70, PI / 70), 0));
  }

      for (var i = 0; i < 3; i++) {
      particles.push(new Particle(createVector(player.pos.x + cos(player.heading) * player.r, player.pos.y + sin(player.heading) * player.r), player.heading + random(-PI / 2, PI / 2), 200, 100, 100));
    }
    // minilasers.push(new MiniLaser(player.pos, player.heading, 100, 100, 200, 'CENTER'));
    // minilasers.push(new MiniLaser(player.pos, player.heading - 0.2, 100, 100, 200, 'RIGHT'));
    // minilasers.push(new MiniLaser(player.pos, player.heading + 0.2, 100, 100, 200, 'LEFT'));

    firingDelay = cooldown_fire - 5;
} 
}
}












    // lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 100));
    // pewpew.play();
    // pewpew.amp(0.2);
    

    // for (var i = 0; i < 3; i++) {
    //   particles.push(new Particle(createVector(player.pos.x + cos(player.heading) * player.r, player.pos.y + sin(player.heading) * player.r), player.heading + random(-PI / 2, PI / 2), 100, 100, 200));
    // }


        
    //   for (var i = 0; i < 3; i++) {
    //   particles.push(new Particle(createVector(play.pos.x + cos(play.heading) * play.r, play.pos.y + sin(play.heading) * play.r), play.heading + random(-PI / 2, PI / 2), a, b, c));
    // }
  

