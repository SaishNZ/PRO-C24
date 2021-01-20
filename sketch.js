
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var HAMMER;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	HAMMER = new Hammer(100, 100);
}


function draw() {
  background(0);
  Engine.update(engine);
  HAMMER.display();
 
}



