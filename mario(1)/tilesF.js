function spawntile() {
    var y = Math.round(random(320, 390));

    if (frameCount % 20 === 0 && keyDown("RIGHT_ARROW")) {
        if (frameCount % 170 === 0) {

            var htile = createSprite(950, 400);
            htile.setCollider("rectangle", 0, 0, htile.width + 80, htile.height - 4);
            htile.y = y - 100;
            htile.velocityX = ground.velocityX;
            htile.addImage("ltile", bigtile);
            htile.depth = mario.depth + 3;
            //htile.debug = true;
            tiles.add(htile);
            console.log("mtile" + mario.depth);
        }

        if (frameCount % 100 === 0) {
            var ltile = createSprite(950, 400);
            ltile.y = y;
            ltile.addImage("ftile", ftile);
            ltile.setCollider("rectangle", 0, 0, ltile.width, ltile.height - 17);
            ltile.velocityX = ground.velocityX;
            ltile.depth = mario.depth;
            // ltile.debug = true;
            tiles.add(ltile);
        }
    }
    mario.collide(tiles);
    tiles.setLifetimeEach(300);

}