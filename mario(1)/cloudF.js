function spawnSclouds() {
    if (frameCount % 100 === 0 || frameCount === 10) {
        var scloud = createSprite(950, 185, 10, 40);
        scloud.y = Math.round(random(120, 200));


        scloud.depth = mario.depth - 3;
        mario.depth = mario.depth + 3;
        console.log("mscolud" + mario.depth);
        scloud.velocityX = -2.5;
        var randomn = Math.round(random(1, 6));
        switch (randomn) {
            case 1: scloud.addImage(scloud1);
                break;
            case 2: scloud.addImage(scloud2);
                break;
            case 3: scloud.addImage(scloud3);
                break;
            case 4: scloud.addImage(scloud4);
                break;
            case 5: scloud.addImage(scloud5);
                break;
            case 6: scloud.addImage(scloud6);
                break;


            default: break;
        }

        scloud.scale = 1.5;
        scloud.lifetime = 2000;

        clouds.add(scloud);

    }
}
function spawnclouds() {
    if (frameCount % 200 === 0 || frameCount === 30) {

        var cloud = createSprite(950, 165, 10, 40);
        //cloud.y = Math.round(random(100, 300));
        var randomy = Math.round(random(40, 170));
        cloud.y = randomy;
        //cloud.velocityX = - (6 + 3*score/100);
        cloud.velocityX = -2;

        //console.log(cloud.y);
        cloud.depth = mario.depth - 3;
        mario.depth = mario.depth + 3;
        //cloud.debug = true;
        //generate random clouds
        var rand = Math.round(random(1, 4));
        switch (rand) {
            case 1: cloud.addImage(cloud1);
                break;
            case 2: cloud.addImage(cloud2);
                break;
            case 3: cloud.addImage(cloud3);
                break;
            case 4: cloud.addImage(cloud4);
                break;



            default: break;
        }




        //assign scale and lifetime to the cloud           
        cloud.scale = 3;
        cloud.lifetime = 2000;

        clouds.add(cloud);
    }
}