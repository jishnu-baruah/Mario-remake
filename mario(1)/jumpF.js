function jump() {
    if (/*mario.y > 461 &&*/ prct <= 2 && keyWentDown("UP_ARROW") && s === 1) {
        mario.velocityY = -25;
        jumps.play();
        mario.changeAnimation("jumpr");

    }
    if (/*mario.y > 461 &&*/ prct <= 2 && keyWentDown("UP_ARROW") && s === 2) {
        mario.velocityY = -25;
        mario.changeAnimation("jumpl");
        jumps.play();
    }
    if (keyWentUp("UP_ARROW")) {
        prct = prct + 1;
    }
    mario.velocityY = mario.velocityY + 2;
    if (mario.y > 467 && s === 1) {
        mario.changeAnimation("stopr");
        if (keyDown("RIGHT_ARROW")) {
            mario.changeAnimation("runr");
        }

    }
    if (mario.y > 467 && s === 2) {
        mario.changeAnimation("stopl");
        if (keyDown("LEFT_ARROW")) {
            mario.changeAnimation("runl");
        }

    }
    if (mario.y === 461.5) {
        prct = 0;
    }
    if (mario.isTouching(tiles)) {
        prct = 1;
    }
}