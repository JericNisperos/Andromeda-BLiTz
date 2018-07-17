// var jjj = 0;
function Ship1() {
 //    if (jjj == 0) {
	//  push();
 //    rectMode(CENTER);
 //    noStroke();
 //    translate(player.pos.x, player.pos.y);
 //    rotate(player.heading + PI / 2);
 //    fill(100, 250, 100);
 //    beginShape();
 //    vertex(0, 10);
 //    vertex(-15, 15);
 //    vertex(0, -15);
 //    vertex(15, 15);
 //    endShape();
 //    pop();
 // } else {
    push();
    stroke(0);
    strokeWeight(1);
    translate(player.pos.x, player.pos.y);
    rotate(player.heading + PI / 2);
    // rotate(player.heading + PI + PI / 2 + PI / 2);
    fill(255);

    //WhiteFront
    beginShape();
    vertex(-4, -16);
    vertex(4, -16);
    vertex(4, 0);
    vertex(-4, 0);
    endShape();

    fill(100, 100, 200);
    //wingsmall left
    beginShape();
    vertex(-20, 12);
    vertex(-24, 18);
    vertex(-36, 22);
    vertex(-28, 30);
    vertex(-18, 28);
    vertex(0, 0);
    endShape();

    //wingsmall right
    beginShape();
    vertex(20, 12);
    vertex(24, 18);
    vertex(36, 22);
    vertex(28, 30);
    vertex(18, 28);
    vertex(0, 0);
    endShape();




    fill(100, 100, 250);

    // wingbig left
    beginShape();
    vertex(-12, 8);
    vertex(-20, 10);
    vertex(-20, 18);
    vertex(-16, 24);
    vertex(-12, 24);
    vertex(-0, 0);
    endShape();

    // wingbig right
    beginShape();
    vertex(12, 8);
    vertex(20, 10);
    vertex(20, 18);
    vertex(16, 24);
    vertex(12, 24);
    vertex(0, 0);
    endShape();

    fill(200);
    //White part on wingbig l
    beginShape();
    vertex(-16, 24);
    vertex(-14, 28);
    vertex(-12, 24);
    vertex(0, 0);
    endShape();
     //White part on wingbig r
    beginShape();
    vertex(16, 24);
    vertex(14, 28);
    vertex(12, 24);
    vertex(0, 0);
    endShape();

    fill(100, 100, 250);
    // BodyBlue left
    beginShape();
    vertex(-4, -18);
    vertex(-8, -2);
    vertex(-12, 6);
    vertex(-12, 14);
    vertex(-4, 24);
    endShape();


    // BodyBlue right
    beginShape();
    vertex(4, -18);
    vertex(8, -2);
    vertex(12, 6);
    vertex(12, 14);
    vertex(4, 24);
    endShape();

















    fill(200);
    // Middle Part
    beginShape();
    vertex(-4, 0);
    vertex(-8, 2);
    vertex(-8, 12);
    vertex(-4, 18);
    vertex(4, 18);
    vertex(8, 12);
    vertex(8, 2);
    vertex(4, 0);
    endShape();






    
    fill(0);
    //Hull
    beginShape();
    vertex(-2, 4);
    vertex(-3, 6);
    vertex(3, 6);
    vertex(2, 4);
    endShape();


    //Black Dots
    ellipse(0, -8, 2);
    ellipse(0, -12, 2);
    ellipse(0, -4, 2);

    fill(255, 0, 0);
    //TRACERS
    ellipse(0, 0, 5);
    pop();
// }
}