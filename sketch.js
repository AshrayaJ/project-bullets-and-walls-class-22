var bullet, bullet2, wall, wall2;
var speed, weight
var divider;
var thickness


function setup() {
  createCanvas(1600,400);
 
divider = createSprite(800, 200, 1600, 10)

speed=random(223, 321)
weight=random(30, 52)
thickness = random(22, 83);

car = createSprite(50, 75, 40, 20);
car2 = createSprite(300, 300, 40, 20 );
wall = createSprite(1200, 75, thickness, height/2 );
wall2 = createSprite(1200, 300, thickness, height/2);
car.velocityX = speed;
car2.velocityX = speed;
}

function draw() {
  background("black");  
 
divider.shapeColor = color("white");

wall.shapeColor = color(80, 80, 80);
wall2.shapeColor = color(80, 80, 80);

if (wall.x-car.x < (car.width + wall.width)/2) {

  car.velocityX = 0
var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

if(damage > 10) {
 wall.shapeColor = ("red");
}

if(damage < 10) {
wall.shapeColor = ("green");
}




}

if (wall2.x-car2.x < (car2.width + wall2.width)/2) {

  car2.velocityX = 0


if(damage > 10) {
  wall2.shapeColor = ("red");
}

if(damage < 10) {
  wall2.shapeColor = ("green");
}




}



  drawSprites();
}