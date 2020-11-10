
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const Render=Matter.Render;

var world,engine;

var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone;
var ch;

function preload()
{
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground= Bodies.rectangle(400,495,800,30,{isStatic:true});
	World.add(world,ground);
	
	mango1=new Mango(510,210,40);
	mango2=new Mango(580,210,40);
	mango3=new Mango(510,300,35);
	mango4=new Mango(545,250,30);
	mango5=new Mango(570,330,40);
	mango6=new Mango(600,300,20);
	mango7=new Mango(510,320,40);

	stone =new Stone(100,300,30)
	ch =new slingshot (stone,{x:100,y:300})
	


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	  Render.run(render)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
 
  fill("green");
  rect(ground.position.x,ground.position.y,800,30);
  imageMode(CENTER)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,430,250,250);
 	image(tree,600,350,400,500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  ch.display();

  drawSprites();
 
}



