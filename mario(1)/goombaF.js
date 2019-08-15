function spawnGoomba() {
    var gomNo = Math.round(random(0, 2));
    //console.log(gomNo);
    if (frameCount % 250 === 0) {
        for (var z = 0; z <= gomNo; z++) {
            goomba = createSprite(900 + (50 * z), 490, 10, 10);//change
            goomba.addAnimation("gomimg", gomi);
            goomba.addAnimation("smashed", sgomi);
            goomba.setLifetime = 300;
            goomba.velocityX = -3;
            goomba.scale = 0.11;
            enemies.add(goomba);
        }
    }

    enemies.collide(invisible_ground);


}