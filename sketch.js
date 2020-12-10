var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,random(22,83),height/2);
  bullet = createSprite(50,200,50,10);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  wall.shapeColor =color(80,80,80);
  bullet.shapeColor =color("gold");
}


function draw() {
  background(0);
  drawSprites();
  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
      bullet.velocityX = 0;
      damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      
      if(damage>10){
        wall.shapeColor = color(255,0,0);
      }
      if(damage<10){
        wall.shapeColor = color(0,255,0);
      }
  }
}