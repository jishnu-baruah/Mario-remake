function run() {
    if (keyWentDown("RIGHT_ARROW")) {
        tiles.setVelocityXEach(-7);
        enemies.setVelocityXEach(-10);
        ground.velocityX = -7;
        mario.changeAnimation("runr");

        s = 1;
        s != 2;
    }
    if (keyWentDown("LEFT_ARROW")) {
        tiles.setVelocityXEach(7);
        enemies.setVelocityXEach(4);
        ground.velocityX = 7;
        mario.changeAnimation("runl");

        s != 1;
        s = 2;
    }
    if (keyWentUp("RIGHT_ARROW")) {
        tiles.setVelocityXEach(0);

        ground.velocityX = 0;
        mario.changeAnimation("stopr");
        enemies.setVelocityXEach(-3);

    }
    if (keyWentUp("LEFT_ARROW")) {
        tiles.setVelocityXEach(0);
        ground.velocityX = 0;
        mario.changeAnimation("stopl");
        enemies.setVelocityXEach(-3);

    }
    if (mario.x < 200 || mario.x > 200) {
        mario.x = 200;
        //mario.y = 480;
    }
    /*if (mario.y < 439) {
      mario.y = 461;
    }*/
    if (ground.velocityX === 0) {
        tiles.setVelocityXEach(0);
    }
    // console.log(mario.y);
}