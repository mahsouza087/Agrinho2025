let fundo;
let porco;
let faenda;
let gaiola;
let jogoEmAndamento = false; // Inicializa como false

function preload(){
  fundo = loadImage("imagens/agricultura.png");
  doninha = loadImage("imagens/porco.png");
  fazenda = loadImage("imagens/fazenda.png");
  gaiola = loadImage("imagens/gaiola.png");
}

function setup() {
  createCanvas(600, 600);  
  x = random(600);
  y = random(600);
  x = int(x);
  y = int(y);  
}

function draw() {
  
  if (jogoEmAndamento) {
    background(fundo);
    inicio();    
  }else {
    background(fazenda);
    textSize(15);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Porquinhos fugindo da fazenda: Um Desafio Inesperado \n" +
    "Os porquinhos são travesos e adoram a natureza, \n" +
    "mas são bravos e podem morder voce \n" +
    "Encontre eles e nao deixe eles fugirem ", 290, 50);
}
    
  
}

function mousePressed(){
  jogoEmAndamento = true;
}

function inicio(){
  
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  
  // delimitar para não sair da tela
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  
  //circle(x, y, 10);
  let distanciaX; let distanciaY; let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  
  //teorema de Pitágoras - trigonometria
  
  distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  
  console.log(distancia);
  image(gaiola, mouseX, mouseY, distancia, distancia);
   
    if(  distancia < 3 ){
     text('Encontrei', 200, 200);
      image(doninha, x, y, 100, 100);
      noLoop();
       }
  
}