
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8

function preload()
{
  treeimg=loadImage("img/tree.png");
  
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
  world = engine.world;
Stone = new stone(100,100,50,50);
mango1=new mango(712,168,50,50)
tree=createSprite(650,283);
  tree.addImage("tree",treeimg);
  tree.scale=0.25;
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(5550);
  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
  Stone.display();  
  mango1.display();
  drawSprites();
 
}

 



