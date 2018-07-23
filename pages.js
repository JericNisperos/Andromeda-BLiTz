 function Pages() {
  if(parallax) {
  TwinklebgStars();
 }

    for (var i = 0; i < bgstars2.length; i++) {
    bgstars2[i].show();
    bgstars2[i].r = random(4,5);
  }

 if (page == 0) {





    push();
    textFont('IMPACT');
    textAlign(CENTER);
    rectMode(CENTER);
    fill(100, 100, 200, 100);
    var h = height / 1.1;
    var r = h * 2;
    rect(width / 2, height / 2 , width / 1.1, height / 1.1, 25);
    fill(200, 100, 100);
    textSize(100);
    text('Andromeda BLiTz', width / 2, height / 4.9);
    pop();
    paused = false;







  } 








  else if (page == 1 && !paused) {
  player.render();
  player.edges();
  player.turn();
  player.update();
  LaserChecker();
  RockChecker();
  Attack();
  Decreaser();
  Level();
  push();
    textFont('IMPACT');
    textAlign(LEFT);
    fill(100, 250, 200);
    textSize(15);
    textStyle(BOLD);
    text('LIFE', 20, 30);
    colorMode(HSB);
    var colormap = map(life, 0, 100, 0, 100);
    stroke(colormap, 100, 100);
    strokeWeight(10);
    xmap = map(life, 0, 100, 60, 160, true);
    line(60, 24, xmap, 24);
    noStroke();
    text("SCORE", 20, 50);
    text(floor(score), 100, 50);
    textSize(12);
    text("Press ESC to Pause", 20, height - 30);
    pop();
  } 










  else if (page == 1 && paused) {
  push();
    rectMode(CENTER);
    textAlign(CENTER);

    fill(255, 100);
    var h = height / 1.1;
    var r = h * 2;
    rect(width / 2, height / 2 , width / 2, height / 2, 25);
    fill(255);
    
    // var hit = collideRectCircle(width / 2,height / 2,200,50,mouseX,mouseY,10);
    //   if(hit){
    //   fill('grey');
    // }else{
    //   fill('white');
    // }
    // rect(width / 2, height / 2, 200, 50);
    // ellipse(mouseX,mouseY,10);
    pop();
  } 




  else if (page == 2) {
    push();
    rectMode(CENTER);
    textAlign(CENTER);

    fill(100, 200, 250, 100);
    var h = height / 1.1;
    var r = h * 2;
    rect(width / 2, height / 2 , width / 2, height / 2, 25);
    fill(100, 200, 250);
    text("YOU DIED", width / 2, height / 2);
    pop();

    var restart = new function() {
      this.x = width / 2 - 100;
      this.y = height / 1.7 - 100;
      this.r = 100;
      this.c = color(200, 100, 100);
      
      this.show = function() {
        push();
        strokeWeight(4);
        fill(this.c);
        // ellipse(this.x, this.y, this.r);
        // rect(this.x,this.y,this.r * 2,this.r);
        rectMode(CORNER);
        rect(this.x,this.y,this.r * 2,this.r / 2);
        fill(0);
        textFont("IMPACT");
        // textStyle(BOLD);
        textSize(24);
        textAlign(CENTER);
        text("RESTART", width / 2, height / 1.7 - 65);
    }
      this.update = function() {
        var hitter = collidePointRect(mouseX,mouseY,this.x,this.y,this.r * 2,this.r / 2);
        if (hitter) {
          this.c = color(100, 100, 200);
        }
  }

  

}

  var quit = new function() {
      this.x = width / 2 - 60;
      this.y = height / 1.7 - 30;
      this.r = 60;
      this.c = color(200, 100, 100);
      
      this.show = function() {
        strokeWeight(4);
        fill(this.c);
        // ellipse(this.x, this.y, this.r);
        // rect(this.x,this.y,this.r * 2,this.r);
        rectMode(CORNER);
        rect(this.x,this.y,this.r * 2,this.r / 2);
        push();
    }
      this.update = function() {
        var hitter = collidePointRect(mouseX,mouseY,this.x,this.y,this.r * 2,this.r / 2);
        if (hitter) {
          this.c = color(100, 100, 200);
        }
  }

  

}










  quit.update();
  quit.show();
  restart.update();
  restart.show();
}

  if (page == 1 && life <= 0) {
      page = 2;
      rocks.splice(0, rocks.length + 100);
      lasers.splice(0, lasers.length + 100);
      player.pos.x = width / 2;
      player.pos.y = height / 2;
      document.cookie = score;
      console.log(document.cookie);



  }



}