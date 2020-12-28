var car,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(800,1500);
  thickness = random(22,83);
  bullet = createSprite(400, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  if(damage >10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage< 10){
    wall.shapeColor = color(0,255,0);
  }

  }

  drawSprites();
}
 function hascollided(lbullet,lwall){
   bulletrightedge = lbullet.x + lbullet.width;
   wallleftedge = lwall.x;
  if(bulletrightedge >= wallleftedge){
    return true;
  }
  return false;
 }