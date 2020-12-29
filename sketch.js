
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

	ball=Bodies.circle(200,100,20,{restitution:0.3,friction:0.5,density:1.2});
	World.add(world,ball);

	ground=Bodies.rectangle(800,650,1600,20,{isStatic:2});
	World.add(world,ground);


	//Create the Bodies Here.
	boxbase=createSprite(1200,650,200,20);
	boxbase.shapeColor="red";

	boxbasebody=Bodies.rectangle(1200,630,200,20,{isStatic:true});
	World.add(world,boxbasebody);

	leftwall=createSprite(1100,610,20,100);
	leftwall.shapeColor="red";
	leftwallbody=Bodies.rectangle(1100,610,20,100,{isStatic:true});
	World.add(world,leftwallbody);
	
	rightwall=createSprite(1300,610,20,100);
	rightwall.shapeColor="red";
	rightwallbody=Bodies.rectangle(1300,610,20,100,{isStatic:true});
	World.add(world,rightwallbody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-100});
  
	}
}

