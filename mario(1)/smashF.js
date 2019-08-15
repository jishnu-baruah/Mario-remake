function smash() {
    for (var i = 0; i < enemies.length; i++) {
        var temp = enemies.get(i);
        if (mario.y >= 460 && temp.isTouching(mario)) {
            temp.addAnimation("smashed", sgomi);
        }
    }
}