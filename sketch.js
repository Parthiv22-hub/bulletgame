var bullet;
var wall;
var speed;
var weight;
var thickness;



function setup() {
  createCanvas(1600,400);
bullet =  createSprite(99,170, 50, 50);
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor(80,80,80);
bullet.speed=random(223,331);
bullet.weight=random(30,52);
thickness=random(22,83);

bullet.velocityX=speed;





}

function draw() {
  background(255,255,255);  
 

  if(hascolided(bullet,wall));
{

bullet.velocityX=0;
var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);

if(damage>10)
{
    wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
    wall.shapeColor=color(0,255,0);
}

}

  drawSprites();
}



function hascolided(lbullet,lwall){

bulletRightEdge=lbullet.x +lbullet.width;
wall.LeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true;
}
return false;

}
