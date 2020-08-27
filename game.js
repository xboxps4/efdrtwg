function start()
{
  background(bg1);
  image(title,1000,15);
  textSize(30);
  fill("red");
  text("Shoot the enemies and get to finish line",850,300);
  startButton.position(1100,500);
  startButton.mousePressed(switching);
}

function switching()
{
  gameState = "play"
}

function play()
{
  background("white");
  if(keyDown(UP_ARROW))
  {
    mainPlayer.y = mainPlayer.y -30;
  }

  if(keyDown(DOWN_ARROW))
  {
     mainPlayer.y = mainPlayer.y + 30;
  }
  
  startButton.hide();
  endless.velocityX = -5;
  endless.scale = 2;
  enemies();
  if(endless.x < 0)
  {
    endless.x = displayWidth/2;
  }

  if(keyDown("space"))
  {
    attack();
  }

  if(weaponGroup.isTouching(enemyGroup))
  {
    if(enemyGroup.get(0) != undefined)
    {
      for(var i = 0; i < enemyGroup.maxDepth(); i++)
      {
        enemyGroup.get(i).destroy();
        sound.play(enemydead);
      }
    }
    
  }
  drawSprites();
}

function end()
{
  bulletGroup.setVelocityXEach(0);
  enemyGroup.setVelocityXEach(0);
  endless.velocityX = 0;
}

function attack()
{
  var weapon = createSprite(20,40,20,20);
  weapon.x = mainPlayer.x + 10;
  weapon.y = mainPlayer.y;
  weapon.velocityX = 5;
  weaponGroup.add(weapon);
}