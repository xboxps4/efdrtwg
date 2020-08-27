var gameState = "start";
var bg1,l1bg,title;
var startButton;
var mainPlayer;
var endless;
var enemyImg;
var enemyGroup,bulletGroup;
var bulletImg;
var weaponGroup;
var playerdead,enemydead,bulletSound;
function preload()
{
  bg1 = loadImage("bg.png");
  l1bg = loadImage("l1 bg .jpg");
  title = loadImage("title.png");
  enemyImg = loadImage("EWG.png");
  bulletImg = loadImage("bullet.png");
  playerdead = loadSound("mainPlayer.mp3");
  enemydead = loadSound("enemy.mp3");
  bulletSound = loadSound("gunShot.mp3");
}
function setup()
{
  createCanvas(displayWidth-200,displayHeight-200);
  startButton = createButton("PRESS TO PLAY");
  endless = createSprite(displayWidth/2,displayHeight/2);
  endless.addImage(l1bg);
  mainPlayer = createSprite(70,500,50,50);
  mainPlayer.shapeColor = "yellow";
  enemyGroup = new Group();
  bulletGroup = new Group();
  weaponGroup = new Group();
}

function draw()
{
  if(gameState === "start")
  {
    start();
  }
  
  else if(gameState === "play")
  {
     play();
     if(bulletGroup.isTouching(mainPlayer) || enemyGroup.isTouching(mainPlayer))
     {
       gameState = "end";

     }
  }
 
  else if(gameState === "end")
  {
    end();
  }





}



