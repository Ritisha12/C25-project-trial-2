
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var bottombar
var leftbar
var rightbar
var ground

function preload()
{

}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
	paper=new Paper(200,670,30)
	ground= new Ground(600,height,1200,20)
  bottombar=new Dustbin(600,550,200,300)
	//leftbar=new Dustbin(510,640,20,100)
	//rightbar=new Dustbin(710,640,20,100)

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  paper.display();
  ground.display();
  bottombar.display();
  //leftbar.display();
  //rightbar.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-205})
}
}


