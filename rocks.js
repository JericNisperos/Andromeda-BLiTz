function Rocks(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(width / 2, 0);
  }
  if (r) {
    this.r = r;
  } else {
    this.r = random(50, 60);
  }

  this.life = 1;
  this.vel = p5.Vector.random2D();
  this.total = floor(random(5, 15));
  this.offset = [];
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.25, this.r * 0.25);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }
  var rcolor = random(100, 250);
  this.render = function() {
    push();
    // stroke(255);
    noStroke();
    fill(rcolor);
    translate(this.pos.x, this.pos.y);
    //ellipse(0, 0, this.r * 2);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.r + this.offset[i];
      var x = r * cos(angle);
      var y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  this.breakup = function() {
    var newA = [];
    trys = 0;
    while (newA.length < 10 && trys < 400) {
      trys++;
      var ast = new Rocks(createVector(this.pos.x + random(-this.r, this.r), this.pos.y + random(-this.r, this.r)), map(trys, 0, 500, this.r * 0.5, 15));
      var fits = true;
      if (dist(ast.pos.x, ast.pos.y, this.pos.x, this.pos.y) + (ast.r - 5) > this.r) {
        fits = false;
      }
      for (var i = 0; i < newA.length; i++) {
        if (dist(ast.pos.x, ast.pos.y, newA[i].pos.x, newA[i].pos.y) < (ast.r - 5) + newA[i].r) {
          fits = false;
        }
      }
      if (fits === true) {
        ast.vel = p5.Vector.sub(ast.pos, this.pos).normalize();
        newA.push(ast);
      }
    }
    return newA;
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

}

function RockChecker() {
        for (var i = 0; i < rocks.length; i++) {

    rocks[i].render();
    rocks[i].update();
    rocks[i].edges();
    if (player.hits(rocks[i])) {
    
    if (rocks[i].r > 20) {
             var rocksed = rocks[i].breakup();
             rocks = rocks.concat(rocksed);
           }

      rocks.splice(i, 1);
      if (life >= 0) {
        life -= random(1, 10);
      }
    
}

  }


  
}




function Level() {
  if (rocks.length <= 0) {
    level++;

    if (level == 1) {
        var pos = createVector(0, 0);
            for (var i = 0; i < 50; i++) {
            rocks.push(new Rocks(pos));
            console.log(level);
}

  } else if (level == 2) {
        var pos = createVector(0, width);
            for (var i = 0; i < 50; i++) {
            rocks.push(new Rocks(pos));
            console.log(level);

  }
  }
    // } else if (RocksLevel == 2) {
    //     var pos = createVector(0, width);
    //         for (var i = 0; i < 50; i++) {
    //         rocks.push(new Rocks(pos));
    //         console.log(rockslevel);
    // }

  }



}
    