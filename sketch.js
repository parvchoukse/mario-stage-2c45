var mario,marioImg,ob1,ob1Img,ob2,ob2Img,bg,bgImg;
var obstaclesGroup;
var score=0;

function preload(){
  marioImg=loadImage("sprites/mario.png");
   ob1=loadImage("sprites/ob1.png");
   ob2=loadImage("sprites/ob2.jpg");
   bgImg=loadImage("sprites/bg.jpg");
}


function setup() {
  createCanvas(1300,650);
  bg=createSprite(650, 250, 1300, 650);
  bg.addImage(bgImg);
  bg.scale=2.6;
  
  mario=createSprite(60,380,10,10);
  mario.addImage(marioImg);
  mario.scale=0.1

  ground=createSprite(60,120,10,10)
 
  
}
          
function draw() {
  background(0);  

  if(keyDown("space")){
  mario.velocityY=-10

  mario.velocityY=mario.velocityY =0.6
  }
  drawSprites();
}