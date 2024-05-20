//This is an obstacle template.... duplicate for more.

function Arvore() {
  this.x1 = width;
  this.y1 = 3.5*height/5;
  this.w1 = 65; // Definir o tamanho 

  this.speed1 = 3; // velocidade objeto
  this.img5 = loadImage("arbusto grande.png");
  //this.index=int(random(2.99));

  this.show = function () {
    image(this.img5, this.x1, this.y1, this.w1, this.w1);
  };

  this.update = function () {
    this.x1 -= this.speed1;
  };

  this.offscreen = function () {
    return this.x1 < -this.w1;
  };


}




