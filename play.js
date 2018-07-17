function Attack() {
   if (spaceHeld   && firingDelay <= 0) {
    lasers.push(new Laser(player.pos, player.heading - 0.2, 100, 100, 100));
    lasers.push(new Laser(player.pos, player.heading + 0.2, 100, 100, 100));
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