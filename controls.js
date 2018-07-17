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

  if (key == ' ') {
    page = 1;
  }

  if (keyCode == ESCAPE) {
    if(paused) {
      paused = false;
    } else {
      paused = true;
    }
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