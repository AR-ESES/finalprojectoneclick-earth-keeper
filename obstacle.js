//This is an obstacle template.... duplicate for more.
function Obstacle() {
  this.x = width;
  this.y = 3.35*height/5;
  this.w = 80; // Definir o tamanho 

  this.speed = 20; // velocidade objeto
  this.img3 = loadImage("motoserra.png");
  this.index=int(random(2.99));

  this.show = function () {
    fill(0);
    
    if (this.highlight) {
      noFill();
      stroke(255);
      strokeWeight(3);
      ellipse(
        this.x + this.w / 2,
        this.y + this.w / 2,
        this.w * 1.2,
        this.w * 1.2
      );
      ellipse(
        this.x + this.w / 2,
        this.y + this.w / 2,
        this.w * 1.5,
        this.w * 1.5
      );
    }
    if(this.index == 1){
      image(this.img3, this.x, this.y, this.w, this.w);
    }
  };

  this.update = function () {
    this.x -= this.speed;
  };
  this.offscreen = function () {
    return this.x < -this.w;
  };

  this.hits = function (obstacle) {
    if (obstacle.y > this.y - this.w / 2 && obstacle.y < this.y + this.w / 2) {
      if (
        obstacle.x > this.x - this.w / 2 &&
        obstacle.x < this.x + this.w / 2
      ) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  };
}