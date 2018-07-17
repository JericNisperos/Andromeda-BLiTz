function Ship1() {
	 push();
    rectMode(CENTER);
    noStroke();
    translate(player.pos.x, player.pos.y);
    rotate(player.heading + PI / 2);
    fill(100, 250, 100);
    beginShape();
    vertex(0, 10);
    vertex(-15, 15);
    vertex(0, -15);
    vertex(15, 15);
    endShape();
    pop();
}