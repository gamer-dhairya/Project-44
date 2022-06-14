var b1,b2,b3,b4,b5;
var start;
var road1,road2,road3,road4,road5,road6,road7,road8,road9,road10,road11,road12;
var player;
function setup() {
  createCanvas(1500,750);
 // b1 = createSprite(200, 220,20,100);
  //b2 = createSprite(300,220,20,120);
  start = createSprite(100,700,480,50);
  start.shapeColor="green"
  road1 = createSprite(360,585,50,280);
  road2 =createSprite(600,650,500,50);
  road3 = createSprite(280,470,200,50);
  road4 = createSprite(180,445,50,100);
  road5 = createSprite(115,370,180,50);
  road6 = createSprite(50,300,50,100);
  road7 = createSprite(875,675,50,100);
  road8 = createSprite(1100,730,500,50);
  road9 = createSprite(1370,600,50,320);
  road10 = createSprite(945,415,900,50);
  road11 = createSprite(480,315,50,250);
  road12 = createSprite(305,200,400,50);
  road13 = createSprite(80,150,50,150);
  road14 = createSprite(405,50,698,50);
  road15 = createSprite(200,150,50,100);
  road16 = createSprite(400,125,400,50);
  road17 = createSprite(600,200,50,200);
  road18 = createSprite(778,175,50,300);
  road19 = createSprite(905,300,300,50);
  road20 = createSprite(1050,175,50,300);
  road21 = createSprite(1180,50,220,50);
  road22 = createSprite(1300,175,50,300);
  road23 = createSprite(1250,150,100,50);
  road24 = createSprite(1220,200,50,150);
  
  player = createSprite(50,700,20,20);
  player.shapeColor="orange";


  
}

function draw() {
  background(255,255,255);  
  if(keyIsDown(87)||keyIsDown(119) ){
    player.y -=5;
  }
  if (keyIsDown(83)||keyIsDown(115)){
    player.y +=5;
  }
  if(keyIsDown(65)||keyIsDown(97)){
    player.x-=5;
  }
  if(keyIsDown(68)||keyIsDown(100)){
    player.x +=5;
  }
  drawSprites();
}