
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(900,500);
  ground=createSprite(100,450,2000,10);
  ground.velocityX= -7;
 ground.x=ground.width/3;
  
  monkey=createSprite(60,390,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  score=0;
  FoodGroup= new Group();
  obstacleGroup=new Group();
}


function draw() {
   
  background("green");
  
  if(ground.x<100){
    ground.x=ground.width/3;
  }
 // console.log(monkey.y);
  
  if(keyDown("SPACE") && monkey.y>=380){
     monkey.velocityY=-15;
     }
  

  monkey.velocityY=monkey.velocityY+0.6;
  monkey.collide(ground);
  bananaa();
  obstacles();
  
   drawSprites();
  
 score= score+Math.round(getFrameRate()/50);
  stroke("black");
  fill("black");
  text("Survival Time: "+score,350,30);
  textSize=25;
}

function bananaa(){
 
   var banana = createSprite(900,50,20,20);
  if(frameCount%80===0){
  banana.y= Math.round(random(50,200));
  banana.addImage(bananaImage);
  banana.velocityX=-7;
 
  }
 banana.lifetime=200;
 banana.scale=0.19;
  FoodGroup.add(banana);
}

function obstacles(){
  
  var obstacle= createSprite(910,410,20,20);
  if(frameCount%300===0){
     obstacle.addImage(obstacleImage);
     obstacle.velocityX=ground.velocityX;
     }
  obstacle.scale=0.2;
  obstacle.lifetime=200;
  obstacleGroup.add(obstacle);
}


