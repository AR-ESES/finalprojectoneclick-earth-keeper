let spaceship;

// vars relativas aos obstaculos
let meteorites1 = []; //obstacle Type 1 List, duplicate with different name if you want more
let meteorites2 = []; 
let obstaclesCleared;
let obstaclesHit;
let frameCountBettwenObstaclesType1 = 10;

//vars relacionadas com a jogabilidade
let nivelDeDificuldade = 5;
let backgroundImage;

//vars do fundo
let VelDoFundo = 7;
let posDoFundo = 0;

function preload() { //NOVO
  backgroundImage = loadImage('background.png'); //imagem de fundo
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  spaceship = new Character();

  obstaclesCleared = 0;
  obstaclesHit = 0;

  meteorites1.push(new Obstacle());
}

function draw() {
  // Defina a imagem de fundo carregada como o plano de fundo
  background(255);
  image(backgroundImage,posDoFundo,0,height*1.77,height);
  image(backgroundImage,height*1.77+posDoFundo,0,height*1.77,height);

  spaceship.show();
  spaceship.update();

  // codigo relativo a obstaculo com colisão
  frameCountBettwenObstaclesType1 = int(random(70,80));
  frameCountBettwenObstaclesType2 = int(random(100));

  if (frameCount % frameCountBettwenObstaclesType1 == 0) { // novos obstaculos
    meteorites1.push(new Obstacle());
  }

  // função de correr todos os obstaculos e fazer update a cada frame
  for (var i = meteorites1.length - 1; i >= 0; i--) {
    meteorites1[i].show();
    meteorites1[i].update();

    if (meteorites1[i].hits(spaceship)) { // colisões
      obstaclesHit++;
    }

    if (meteorites1[i].offscreen()) { // mata os que sairam do ecrã
      meteorites1.splice(i, 1);
      obstaclesCleared++;
    }
  }
  //motoserrra . obstacle 2
  if (frameCount % frameCountBettwenObstaclesType1 == 0) { // novos obstaculos
    meteorites2.push(new Obstacle2());
  }
  for (var i = meteorites2.length - 1; i >= 0; i--) {
    meteorites2[i].show();
    meteorites2[i].update();

    if (meteorites2[i].hits(spaceship)) { // colisões
      obstaclesHit++;
    }

    if (meteorites2[i].offscreen()) { // mata os que sairam do ecrã
      meteorites2.splice(i, 1);
      obstaclesCleared++;
    }
  }

  // update do fundo
  posDoFundo = posDoFundo - VelDoFundo;
  if (posDoFundo <= -(height*1.77)){
    posDoFundo = 0;
  }
}

function keyPressed() {
  if (key === " ") {
    spaceship.goUp();
  }
}