const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particle
var plinkos = []
var dividers = []
var ground
var gameState = "PLAY"
var score
var count 

function setup() {
  createCanvas(1800,1800);
  
  engine = Engine.create();
  world = engine.world;

 
  wall1 = new Divider(600,45,890,10)
  wall2 = new Divider(600,1075,890,10)
  wall3 = new Divider(1040,560,10,1040)
  wall4 = new Divider(160,560,10,1040)
  

  plinkos = []
  dividers = []
  score = 0
  count = 0
  
  
  for(var j = 240; j<= width-800; j = j+50){
    plinkos.push(new Plinko(j, 75, 10))
  }

  for(var a = 215; a<= width-800; a = a+50){
    plinkos.push(new Plinko(a, 175, 10))
  }
  
  for(var j = 240; j<= width-800; j = j+50){
    plinkos.push(new Plinko(j, 275, 10))
  }
 
  for(var a = 215; a<= width-800; a = a+50){
    plinkos.push(new Plinko(a, 375, 10))
  }

  for(var b = 170; b<= width-750; b = b+145){
    dividers.push(new Divider(b, 875 , 10, 400))
  }

  Engine.run(engine);
}

function draw() {
  background(0);  
  console.log(gameState)
  
  textSize(24)
  stroke(255)
  text("Score: " + score, 1200, 150)

  textSize(24)
  text(100, 220, 725)
  text(500, 365, 725)
  text(300, 510, 725)
  text(300, 660, 725)
  text(500, 800, 725)
  text(100, 940, 725)

  strokeWeight(5);
  stroke("white")
  line(170,600,1030,600)

  strokeWeight(1);


   wall1.display()
   wall2.display()
   wall3.display()
   wall4.display()


      for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }

      

      for (var x = 0; x < dividers.length; x++) {
     
        dividers[x].display();
        
      }
      
      stroke(0)

   
    
    if(count === 5){
      gameState = "END" 
    }

    
  drawSprites();
}

function mousePressed(){

  if(gameState !== "END"){
    count = count + 1
    particle = new Particle(mouseX, 180, 10)
  }
  if(particle != null){
    particle.display()
  }

}
