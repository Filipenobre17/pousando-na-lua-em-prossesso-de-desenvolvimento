var chao;
var nave;
var image_nave;
var plan_fun_;
var vx=0
var vy=0
var g=0.05

function preload()
{
image_nave=loadImage('normal.png')
plan_fun_=loadImage('bg.png')
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  nave=createSprite(100,50,30,30)
  nave.addImage(image_nave)
  nave.scale=0.1
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(plan_fun_,0,0)

  push()
  fill('white')
  text('velocidade vertical: '+round(vy),800,75)
  pop()

  vy+=g
  nave.position.y+=vy

  drawSprites();
}



