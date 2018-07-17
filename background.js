function bgStars() {
	this.x = random(width);
	this.y = random(height);
	this.size = random(5,10);

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, size);
	}
}