var ground;
var monkey , monkey_running 
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload()
{
  player_running = loadImage("aruto-gif-png-naruto-characters-in-yukata-1156301682809p38mywue.png")           
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 bgmig=loadImage("solo-leveling-sung-jin-woo-shadow-army-wallpaper-3840x2160_54.jpg")
}



function setup() 
{
  createCanvas(400,400);
  //creating monkey 
 //creating monkey
   player=createSprite(80,315,20,20);
   player.addAnimation("moving",player_running);
  
   player.scale=0.1
 points=0
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2


  bananaGroup = new Group(); 
  obstacleGroup = new Group(); 
  
}


function draw() {
background(bgmig)
   text("Points :" +points)
  if(keyDown("space") && player.y>300 ) {
  player.velocityY = -12
  }
    player.velocityY = player.velocityY +0.8

   
  
  if (ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(player.isTouching(obstacleGroup)){
    player.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    
  
  }
  
  
 player.collide(ground);
 
  obstacle()
   drawSprites();
   
  
}

 
  function obstacle(){
    
     if(frameCount%80===0)
    {
      obs=createSprite(400,330,20,20);
      obs.scale=0.1;
      
      obs.velocityX= -7;
      
     
        obs.addImage(obstacleImage);
    
     
      
      obs.setLifetime=100;
      
       obstacleGroup.add(obs);
  }
    
    
  }








