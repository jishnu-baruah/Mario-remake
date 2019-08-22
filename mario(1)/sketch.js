var invisible_ground, ground, grdimg;
var mario, marioimg;
var bullet;
var clouds;
var gamestate, pause, play;
var s = 1;
var prct = 0;
var distance = 0;
function preload() {
  grdimg = loadImage("sprites/ground3.png");
  rr = loadAnimation("mario an/1.png", "mario an/2.png", "mario an/3.png", "mario an/4.png", "mario an/5.png", "mario an/6.png", "mario an/7.png", "mario an/8.png");
  rl = loadAnimation("mario an/r/1.png", "mario an/r/2.png", "mario an/r/3.png", "mario an/r/4.png", "mario an/r/5.png", "mario an/r/6.png", "mario an/r/7.png", "mario an/r/8.png");
  sr = loadAnimation("mario an/stop.png");
  sl = loadAnimation("mario an/r/stop.png");
  jr = loadAnimation("mario an/jump.png");
  jl = loadAnimation("mario an/r/jump.png");

  cloud1 = loadImage("sprites/cloud1.png");
  cloud2 = loadImage("sprites/cloud2.png");
  cloud3 = loadImage("sprites/cloud3.png");
  cloud4 = loadImage("sprites/cloud4.png");
  cloud5 = loadImage("sprites/cloud5.png");
  scloud1 = loadImage("sprites/scloud1.png");
  scloud2 = loadImage("sprites/scloud2.png");
  scloud3 = loadImage("sprites/scloud3.png");
  scloud4 = loadImage("sprites/scloud4.png");
  scloud5 = loadImage("sprites/scloud5.png");
  scloud6 = loadImage("sprites/scloud6.png");

  gomi = loadAnimation("mario an/g1.png", "mario an/g2.png", "mario an/g3.png", "mario an/g4.png", "mario an/g5.png", "mario an/g6.png", "mario an/g7.png", "mario an/g8.png");
  sgomi = loadAnimation("smashed.png");
  sourcei = loadAnimation("mario an/b1.png", "mario an/b2.png", "mario an/b3.png", "mario an/b4.png");
  bulleti = loadAnimation("mario an/s1.png", "mario an/s2.png", "mario an/s3.png", "mario an/s4.png");

  ftile = loadImage("sprites/ftile.png");
  bigtile = loadImage("sprites/ltile.png");

  bgm = loadSound("bgm.mp3");
  jumps = loadSound("jump.wav");
  stomp = loadSound("stomp.wav");
  checkPoint = loadSound("smb_1-up.wav");
  gamestate = pause;


}
function setup() {

  var canvas = createCanvas(1000, 600);

  invisible_ground = createSprite(350, 510, 1400, 1);


  ground = createSprite(350, 550, 1400, 100);
  ground.addImage("ground", grdimg);
  ground.x = ground.width / 2;


  mario = createSprite(200, 480, 60, 60);
  mario.addAnimation("stopr", sr);
  mario.addAnimation("runr", rr);
  mario.addAnimation("runl", rl);
  mario.addAnimation("stopl", sl);
  mario.addAnimation("jumpr", jr);
  mario.addAnimation("jumpl", jl);
  //mario.scale = 1;


  source = createSprite(mario.x + 40, mario.y - 10);
  source.addAnimation("sourc", sourcei);
  source.scale = 0.3;
  source.visible = false;


  clouds = new Group();

  enemies = new Group();
  // enemies.addAnimation("smashed", sgomi);
  tiles = new Group();

  // bgm.play();
  // bgm.setVolume(0.2);
  // bgm.loop();

}
function draw() {
  background(151, 223, 220);
  // console.log(mario.y);
  mario.collide(invisible_ground);
  //fmode();
  /* if (gamestate === play) {
 
     
   }
   if (keyDown("space")) {
     gamestate = pause;
   }*/

  rect(80, 10, 200, 60);
  textSize(30);
  text("Distance : ", 750, 30);
  text(distance, 900, 30);
  if (keyDown("RIGHT_ARROW") && World.frameCount % 5 === 0) {
    distance = distance + 1;
  }
  if (keyDown("LEFT_ARROW") && distance >= 1 && World.frameCount % 5 === 0) {
    distance = distance - 1;
  }

  if (distance != 0 && distance % 250 === 0) {
    checkPoint.play();
  }

  run();
  jump();
  groundReset();
  spawnclouds();
  spawnSclouds();
  spawnGoomba();
  spawntile()
  smash();
  /*if (gamestate === pause) {
    enemies.setVelocityXEach(0);
    tiles.setVelocityXEach(0);
    clouds.setVelocityXEach(0);
    bgm.stop();
    if (keyDown("space")) {
      gamestate = play;
    }
  }*/
  drawSprites();


  // console.log(prct);
}



function fmode() {

  source.visible = true;
  source.y = mario.y;

  if (s === 1) {
    source.x = mario.x + 55;
  } else if (s === 2) {
    source.x = mario.x - 55;
  }

  if (keyDown("DOWN_ARROW") && frameCount % 15 === 0) {
    bullet = createSprite(source.x, source.y, 5, 5);

    bullet.lifetime = 100;
    bullet.addAnimation("bulle", bulleti);
    bullet.scale = 0.3;
    if (s === 1) {
      bullet.velocityX = 7;
    }
    if (s === 2) {
      bullet.velocityX = -7;
    }
  }
}




