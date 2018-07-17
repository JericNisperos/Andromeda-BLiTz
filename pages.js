 function Pages() {
  //   for (var i = 0; i < bgstars.length; i++) {
  //   bgstars[i].show();
  // }
 

 if (page == 0) {
    push();
    textAlign(CENTER);
    rectMode(CENTER);
    fill(255, 100);
    var h = height / 1.1;
    var r = h * 2;
    rect(width / 2, height / 2 , width / 1.1, height / 1.1, 25);
    fill(255);
    text('Press START', width / 2, height / 2);
    pop();
    paused = false;
  } 








  else if (page == 1 && !paused) {
  player.render();
  player.edges();
  player.turn();
  player.update();
  LaserChecker();
  Attack();
  Decreaser();

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

}