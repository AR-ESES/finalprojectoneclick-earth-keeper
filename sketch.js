let spaceship;

// vars relativas aos obstaculos
let meteorites1 = []; //obstacle Type 1 List, duplicate with different name if you want more
let obstaclesCleared;
let obstaclesHit;
let frameCountBettwenObstaclesType1 = 20;

//vars das arvores
let arbustos = [];
let arbustosLimpos;
let frameCountBettwenObstaclesType2 = 80;


//vars relacionadas com a jogabilidade
let nivelDeDificuldade = 1;
let backgroundImage;

//vars do fundo
let VelDoFundo = 6;
let posDoFundo = 0;

function preload() { //NOVO
  backgroundImage = loadImage('Background.png'); //imagem de fundo
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  spaceship = new Character();

  obstaclesCleared = 0;
  obstaclesHit = 0;

  arbustosLimpos = 0;

  arbustos.push(new Arvore());
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

  if (frameCount % frameCountBettwenObstaclesType2 == 0) { // novos obstaculos
    arbustos.push(new Arvore());
  }

  // função de correr todos os obstaculos e fazer update a cada frame
  for (var j = arbustos.length - 1; j >= 0; j--) {
    arbustos[j].show();
    arbustos[j].update();
  
    if (arbustos[j].offscreen()) { // mata os que sairam do ecrã
      arbustos.splice(j, 1);
      arbustosLimpos++;
    }
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