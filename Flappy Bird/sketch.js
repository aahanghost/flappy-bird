var bird,pillar,sky,bottom,base,rand,pillarb;
var bird_flying,pillarImg,pillar1Img,pillar2Img,pillar3Img,pillar4Img,baseImg;
var pillarsGroup,pillarsbGroup;

function preload() {
pillarImg = loadImage("pillar.png");
pillar1Img = loadImage("pillar1.png");
pillar2Img = loadImage("pillar2.png");
pillar3Img = loadImage("pillar3.png");
pillar4Img = loadImage("pillar4.png");
baseImg = loadImage("base.png");
bird_flying = loadImage("bird1.png");
}

function setup() {
  createCanvas(400, 400);

 // base = createSprite(200,200,400,400)
 // base.addImage(baseImg);

  bird = createSprite(50,200,10,10);
  bird.addImage(bird_flying);
  bird.scale = 0.15

  sky = createSprite(200,50,400,10)
  bottom = createSprite(200,300,400,10)

  sky.visible = false;
  bottom.visible = false;

  rand = Math.round(random(1,50))

  pillarsGroup = new Group();
  pillarsbGroup = new Group();
}

function draw() {
 background("white");

if(keyDown("space")){
  bird.velocityY = -10;
}
bird.velocityY = bird.velocityY +2;

bird.collide(bottom)
bird.collide(sky)

spawnPillars();
spawnPillarbs();

if(pillarsGroup.isTouching(pillarsbGroup)){
  pillarsGroup.bounce(pillarsbGroup)
}

  drawSprites();
}

function spawnPillars(){
  if (frameCount % 50 === 0){
    pillar = createSprite(random(250,250),random(250,400),50,300)
    pillar.velocityX = -4
    pillar.addImage(pillarImg)

    rand = Math.round(random(1,20))

    bird.depth = pillar.depth
    bird.depth = bird.depth+1

    pillar.lifetime = 100
  }
}


function spawnPillarbs(){
  if (frameCount % 50 === 0){
    pillarb = createSprite(random(250,250),random(140,150),50,300)
    pillarb.velocityX = -4
    pillarb.addImage(pillarImg)

    rand = Math.round(random(1,20))

    bird.depth = pillarb.depth
    bird.depth = bird.depth+1

    pillarb.lifetime =  100
  }
}

pillarsGroup.add(pillar);
pillarsbGroup.add(pillarb);

