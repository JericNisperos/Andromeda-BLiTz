function LaserChecker() {

      for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } 

     else {
      for (var j = rocks.length - 1; j >= 0; j--) {
        if (lasers[i].hits(rocks[j])) {
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
        }
      }
    }

} 

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
  } else if (z == 'SIDERIGHT') {
  this.pos = createVector(spos.x - 30 * cos(angle - 68), spos.y - 30 * sin(angle - 68)); 
} else if (z == 'SIDELEFT') {
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


function Attack() {
   if (spaceHeld   && firingDelay <= 0) {
    lasers.push(new Laser(player.pos, player.heading, 100, 100, 200, 'SIDERIGHT'));
    lasers.push(new Laser(player.pos, player.heading, 100, 100, 200, 'SIDELEFT'));
    // lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 100));
    // pewpew.play();
    // pewpew.amp(0.2);
    firingDelay = cooldown_fire;

    // for (var i = 0; i < 3; i++) {
    //   particles.push(new Particle(createVector(player.pos.x + cos(player.heading) * player.r, player.pos.y + sin(player.heading) * player.r), player.heading + random(-PI / 2, PI / 2), 100, 100, 200));
    // }
} 

        
    //   for (var i = 0; i < 3; i++) {
    //   particles.push(new Particle(createVector(play.pos.x + cos(play.heading) * play.r, play.pos.y + sin(play.heading) * play.r), play.heading + random(-PI / 2, PI / 2), a, b, c));
    // }
  

}