function enemies()
{
  
  if(frameCount%200 === 0)
  {
    var enemies = createSprite(displayWidth,200,50,50);
    enemies.velocityX = -4;
    enemies.y = random(20,700);
    enemies.addImage(enemyImg);
    enemies.scale = 0.25
    enemyGroup.add(enemies);
    
    for(var i = displayWidth-5; i > 800; i = i - 100)
    {
      var bullet = createSprite(10,10,20,20);
      bullet.addImage(bulletImg)
      bullet.scale = 0.1;
      bullet.debug = true; 
      bullet.y = enemies.y;
      bullet.x = i;
      bullet.velocityX = -6;
      bulletGroup.add(bullet);
    }
  }

  










}