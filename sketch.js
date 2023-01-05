
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,3200,20)
leftWall = new Ground(600,620,20,100)
rightWall = new Ground(750,620,20,100)
Wall = new Ground(750,620,20,100)
   var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
   }
   ball = Bodies.circle(200,200,20,ball_options)
   World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()  
  leftWall.display()
  rightWall.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}
function keyPressed() {
  if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball,ball.position,{
		x:55,y:-55
	})
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball,ball.position,{
      x:-55,y:-55
})
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(ball,ball.position,{
      x:0,y:55
})
  }
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{
      x:0,y:-55
})
  }
}















