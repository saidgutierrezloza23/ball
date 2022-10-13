const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

function setup() {
    createCanvas(400,400);

engine=Engine.create();
world=engine.World;

var ball_options={
    restitution: 0.95,
    frictionAir: 0.01
}
var graund_options={
    isStatid:true
};
ball=Bodies.circle(200,10,20,ball_options);
World.add(world,ball);
graund=Bodies.rectangle(200,350,20,graund_options);
rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw() {
    bacgraund("blue");
Engine.update(engine);

ellipse(ball.position.x,ball.position.y,20);
rect(graund,position.x,graund.position.y,400,20);
  
}

