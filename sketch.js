
var play=0;
var end=0;
var gameState=play;

var bullet;

var life;

var MISSILE;

var playerscore=0;
var enemyscore=0;

var pumpImg;
var buildingImg;
var bul2Img;
var bul1Img;
var ene2Img; 
var emewal1Img ;
var enemy4Img;
var enemyredImg;
var enewal2Img ;
var grid1Img;
var grid2Img;
var grid3Img;
var groundImg;
var ground1Img; 
var sittingImg ;
var solwalk2Img;
var Sol1Img;
var sol2Img;
var soldierImg ;
var soldierrightImg;
var solwal1Img, bgImage;

var bulletgroup,missilegroup, bg, soldier,ground,enemy;

function preload() {
  pumpImg = loadImage("images/pump.png");
  buildingImg = loadImage("images/building.png")
  bul2Img = loadImage("images/bul2.png");
  bul1Img = loadImage("images/bull1.png");
  ene2Img = loadImage("images/eme2.png");
  emewal1Img = loadAnimation("images/emewal1.png","images/enewal2.png");
  enemy4Img = loadImage("images/enemy4.png");
  enemyredImg = loadImage("images/enemyred.png");
  grid1Img = loadImage("images/grid1.png");
  grid2Img = loadImage("images/grid2.png");
  grid3Img = loadImage("images/grid3.png");
  groundImg = loadImage("images/ground.png");
  ground1Img = loadImage("images/ground1.png");
  sittingImg = loadImage("images/sitting.png");
  solwal1Img = loadAnimation("images/solwal1.png","images/solwalk2.png");
  Sol1Img = loadAnimation("images/Sol1.png","images/sol2.png");
  soldierImg = loadImage("images/soldier.png");
  soldierrightImg = loadImage("images/soldierright.png");
  bgImage = loadImage("images/bg.png");
}

function setup() {
  createCanvas(800,800);

  background(0);

  bulletgroup=new Group();
  missilegroup=new Group();
  

  bg=createSprite(400,160,10,10);
  bg.addImage(bgImage);
  bg.scale=2;
  
  
  soldier = createSprite(115,130,10,10);
  soldier.addAnimation("sol", Sol1Img);
  soldier.scale=0.25;
  
  ground=createSprite(200,568,10,10);
  ground.addImage(groundImg);
  
  enemy = createSprite(300, 200);
  enemy.addAnimation("ene",emewal1Img);
  enemy.scale=0.25;
}

function draw() {
  background("WHITE");
  
  
  if(gameState===play){
      ground.velocityX=-2;

      if (keyDown("space")) {
        soldier.velocityY=-2;
    }
     if (keyWentUp("space")) {
        soldier.velocityY=0;
      }
      
  if ( enemyscore === enemyscore + 30) {
    gameState=end;
  }
  
  
   if (keyDown("a")) {
    soldier.velocityX=-2;
              soldier.addAnimation("sol2", solwal1Img);
  }
  if (keyWentUp("a")) {
    soldier.velocityX=0;
soldier.addImage(soldierrightImg);
  }
  
  if (keyDown("d")) {
    soldier.velocityX=2;
  soldier.addAnimation("sol", Sol1Img);
  }
  if (keyWentUp("d")) {
    soldier.velocityX=0;
  soldier.addImage(soldierImg);
  }
  
  
  if (keyDown("s")) {
        soldier.velocityX=0;
  soldier.addImage(sittingImg);
  }
  
 // now
   if (keyDown("UP_ARROW")) {
    enemy.velocityY=-2;
}
 if (keyWentUp("UP_ARROW")) {
    enemy.velocityY=0.8;
  }
  
   if (keyDown("e")) {
    soldier.velocityY=-2;
}
 if (keyWentUp("e")) {
    soldier.velocityY=0.8;
  }
  
   if (keyDown("LEFT_ARROW")) {
    enemy.velocityX=-2;
              enemy.addAnimation("ene", emewal1Img);
  }
  if (keyWentUp("LEFT_ARROW")) {
    enemy.velocityX=0;
enemy.addImage(ene2Img);
  }
  
  if (keyDown("RIGHT_ARROW")) {
    enemy.velocityX=2;
//  enemy.setAnimation("");
  }
  if (keyWentUp("RIGHT_ARROW")) {
    enemy.velocityX=0;
  enemy.addImage(soldierImg);
  }
  if (keyDown("q") ) {
    createbullet();
  }
  if (keyDown("m") ) {
    createms();
    
  }
  
  if (keyDown("DOWN_ARROW")) {
        enemy.velocityX=0;
  enemy.addImage(enemy4Img);
  }
  
  if(bulletgroup.isTouching(enemy)){
    playerscore+=1;
    bulletgroup.destroyEach();
    enemy.addImage(enemyredImg);
    
 //   bullet=null;
  }
 if(missilegroup.isTouching(soldier)){
    enemyscore+=1;
    bulletgroup.destroyEach();
 //   bullet=null;
  }
  }
  
  //if(keyDown("space")){
  //  ground.x<0
 //   ground.x=ground.width/2;
 // }
//  if(keyDown("space") && soldier.y >= 300){
 //     soldier.velocityY = -12 ;
 //     playSound("jump.mp3", false);
 //   }
  ground.x<0;
   ground.x=ground.width/2;
  
  
 

  enemy.velocityY=10;
 soldier.collide( ground );
  enemy.collide(ground);
  drawSprites();
  
  fill("green");
   textSize(15);
  text("PLAYER'S SCORE = "+playerscore,0,55);
  
  fill("green");
   textSize(15);
  text("ENEMY'S SCORE = "+enemyscore,190,55);
  
}

function createbullet(){
  bullet=createSprite(155,70,10,10);
  bullet.velocityX=7;
  bullet.addImage(bul1Img);
  bullet.scale=0.1;
  bullet.y=soldier.y-10;
  bulletgroup.add(bullet);
}
function createms(){
  MISSILE=createSprite(267,222,10,10);
  MISSILE.velocityX=-7;
  MISSILE.addImage(bul2Img);
  MISSILE.scale=0.1;
  MISSILE.y=soldier.y-10;
  missilegroup.add(MISSILE);
}
