function Character() {
  this.y = 3.35*height/5;
  this.x = width / 4;
  this.push = 1.4;
  this.lift = -30;
  this.velocity = 0;
  this.diam = 80;
  this.img = loadImage("personagem.png");
  this.minHeight = 1.83*height/5;
  this.jumped = false;


  this.show = function () {
    // use this function to design the main character
    stroke(0);
    strokeWeight(2);
    fill(255);
    image(this.img, this.x, this.y, this.diam, this.diam * 1.3777); // insert the raw png image propotion rate and use this.diam to input image width
  };

  this.goUp = function () {
    if (this.jumped == false){
      this.velocity += this.lift;
      console.log(this.velocity);
      this.jumped = true;}
    }
    
  this.update = function () {
    this.velocity += this.push;
    this.velocity *= 0.89;
    this.y += this.velocity;

    if (this.y >= height - this.minHeight) {
      this.y = height - this.minHeight;
      this.velocity = 0;
      if (this.jumped == true){
        this.jumped = false;}
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
   
  };
}