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

        for (var i = particles.length - 1; i > 0; i--) {
    particles[i].render();
    particles[i].update();
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
    }
  }
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
    lasers.push(new Laser(player.pos, player.heading - 0.2, 100, 100, 100));
    lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 100));
    pewpew.play();
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