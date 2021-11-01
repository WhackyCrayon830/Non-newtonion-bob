
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;
var bob1, bob2, bob3, bob4, bob5, roofobj, rope1, rope3, rope4, rope5;  

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofobj = new Roof(width/2, height/4, width/7, 20);
bobdiameter = 40
startBobPositionX = width/2;
startBobPositionY = height/4 + 500;
bob1 = new Bob(startBobPositionX - bobdiameter * 2, startBobPositionY, bobdiameter);
bob2 = new Bob(startBobPositionX - bobdiameter, startBobPositionY, bobdiameter);
bob3 = new Bob(startBobPositionX, startBobPositionY, bobdiameter);
bob4 = new Bob(startBobPositionX + bobdiameter, startBobPositionY, bobdiameter);
bob5 = new Bob(startBobPositionX + bobdiameter * 2, startBobPositionY, bobdiameter);
var render = Render.create({
	element: document.body,
	engine: Engine,
	options:{
		width:1200,
		height: 700,
		wireframes:false
	}
});
rope1 = new Rope(bob1.body, roofobj.body, -bobdiameter*2, 0);
rope2 = new Rope(bob2.body, roofobj.body, -bobdiameter*1, 0);
rope3 = new Rope(bob3.body, roofobj.body, 0, 0);
rope4 = new Rope(bob4.body, roofobj.body, bobdiameter*1, 0);
rope5 = new Rope(bob5.body, roofobj.body, bobdiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofobj.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); } 
} 
function drawLine(constraint) { 
bobBodyPosition=constraint.bodyA.position 
roofBodyPosition=constraint.bodyB.position 
roofBodyOffset=constraint.pointB; 
roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }



