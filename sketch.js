const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,block;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(10,350,3000,100);
    block = new Block(30,349,50,50);
}

function draw(){

    background("black")

    Engine.update(engine);
    
    ground.display();
    block.display();
    
    ground.velocityX = -6;

    if (ground.x < 0){
        ground.x = ground.width/2;
        
     }
}