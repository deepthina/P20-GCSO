var wall, car;
var weight,speed;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor="white";

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX=speed;
}

function draw() {

  background("black");   

   if(wall.x - car.x < car.width/2+ wall.width/2){
    car.velocityX=0;
    deformation= (0.5*weight*speed*speed)/22500;

    if(deformation<100){
      car.shapeColor="green";
    }
    else if(deformation>100 && deformation <180){
      car.shapeColor="yellow";
    }
    else if(deformation>180){
      car.shapeColor="red";
    }
    else{
      car.shapeColor="white";
    }
  }
  drawSprites();
}