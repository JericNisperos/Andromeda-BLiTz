function keyPressed() {
 if (keyCode == RIGHT_ARROW || key == 'D') {
    player.side(0.5);
    for(var i = 0; i < bgstars.length; i++) {
      bgstars[i].addx(-0.1);
      bgstars1[i].addx(-0.05);
    }
  }
   else if (keyCode == LEFT_ARROW || key == 'A') {
    player.side(-0.5);
    for(var i = 0; i < bgstars.length; i++) {
      bgstars[i].addx(0.1);
      bgstars1[i].addx(0.05);
    }
  }

  if (keyCode == UP_ARROW || key == 'W') {
    player.setRotation(0.5);
    for(var i = 0; i < bgstars.length; i++) {
      bgstars[i].addy(-0.2);
      bgstars[i].addx(-0.16);
      bgstars1[i].addy(-0.1);
      bgstars1[i].addx(-0.08);
    }
  }
   else if (keyCode == DOWN_ARROW || key == 'S') {
   player.setRotation(-0.5);
   for(var i = 0; i < bgstars.length; i++) {
      bgstars[i].addy(0.2);
      bgstars[i].addx(-0.16);
      bgstars1[i].addy(0.1);
      bgstars1[i].addx(-0.08);

    }
  }

  if (key == ' ' && page == 0) {
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
    for(var i = 0; i < bgstars.length; i++) {
      bgstars[i].addx(0);
      bgstars1[i].addx(0);

    }
  } 
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW || key == 'W' || key == 'S') {
    player.setRotation(0);
    for(var i = 0; i < bgstars.length; i++) {
      bgstars[i].addx(0);
      bgstars[i].addy(0);
      bgstars1[i].addx(0);
      bgstars1[i].addy(0);

    }
  }
}

function mousePressed() {
  spaceHeld = true;
  console.log(spaceHeld);


}

function mouseReleased() {
  spaceHeld = false;
}