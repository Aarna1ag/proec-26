const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var paper1,paper2,paper3,paper4,paper5;
var roof1;
var world; 
var rope1,rope2,rope3,rope4,rope5;

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

paper1 = new paper(250,299,40);
paper2 = new paper(288,299,40);
paper3 = new paper(326,299,40);
paper4 = new paper(364,299,40);
paper5 = new paper(405,299,40);

rope1 = new rope(paper1.body,{x:250,y:50});
rope2 = new rope(paper2.body,{x:287,y:50});
rope3 = new rope(paper3.body,{x:325,y:50});
rope4 = new rope(paper4.body,{x:365,y:50});
rope5 = new rope(paper5.body,{x:400,y:50});

//bobObject1 = new invisible(250,158,5,220);
//bObject2 = new invisible(287,158,5,220);
////bobObject3 = new invisible(325,158,5,220);
//bobObject4 = new invisible(365,158,5,220);
//bobObject5 = new invisible(400,158,5,220);

roof1= new roof(325,50,200,20);
  
}

function draw() {

background("grey");
Engine.update(engine);
rectMode(CENTER);
paper1.display();
paper2.display();
paper3.display();
paper4.display();
paper5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseDragged(){
  Matter.Body.setPosition(paper2.body,{x:mouseX,y:mouseY});
}

function mouseDragged(){
  Matter.Body.setPosition(paper3.body,{x:mouseX,y:mouseY});
}

function mouseDragged(){
  Matter.Body.setPosition(paper4.body,{x:mouseX,y:mouseY});
}

function mouseDragged(){
  Matter.Body.setPosition(paper5.body,{x:mouseX,y:mouseY});
}