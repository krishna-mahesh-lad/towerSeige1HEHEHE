const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var ground,floor1,floor2;

var block1, block2, block3, block4, block5,block6,block7,block8,
block9,block10;

var block11,block12,block13,block14,block15,block16,block17,block18;

var block19,block20,block21,block22,block23,block24,block25,block26;

var slingshot,shooter;

var gameState="onSling";

function setup() {
  createCanvas(1600,800);
  engine=Engine.create();
  world=engine.world;


  ground=new Ground(800,790,1600,10);

  floor1=new Ground(600,600,200,10);
  floor2=new Ground(1000,500,200,10);

  //first layer of floor 1
  block1=new Block(510,585,20,20);
  block2=new Block(530,585,20,20);
  block3=new Block(550,585,20,20);
  block4=new Block(570,585,20,20);
  block5=new Block(590,585,20,20);
  block6=new Block(610,585,20,20);
  block7=new Block(630,585,20,20);
  block8=new Block(650,585,20,20);
  block9=new Block(670,585,20,20);
  block10=new Block(690,585,20,20);

  //second layer of floor 1
  block11=new Block(530,565,20,20);
  block12=new Block(550,565,20,20);
  block13=new Block(570,565,20,20);
  block14=new Block(590,565,20,20);
  block15=new Block(610,565,20,20);
  block16=new Block(630,565,20,20);
  block17=new Block(650,565,20,20);
  block18=new Block(670,565,20,20);

  //third layer of floor 1
  block19=new Block(550,545,20,20);
  block20=new Block(570,545,20,20);
  block21=new Block(590,545,20,20);
  block22=new Block(610,545,20,20);
  block23=new Block(630,545,20,20);
  block24=new Block(650,545,20,20);
  
  //fourth layer of floor 1
  block25=new Block(570,525,20,20);
  block26=new Block(590,525,20,20);
  block27=new Block(610,525,20,20);
  block28=new Block(630,525,20,20);

  //fifth layer
  block29=new Block(590,505,20,20);
  block30=new Block(610,505,20,20);

  //last layer
  block31=new Block(600,485,20,20);

  //floor 2
  block32=new Block(910,485,20,20);
  block33=new Block(930,485,20,20);
  block34=new Block(950,485,20,20);
  block35=new Block(970,485,20,20);
  block36=new Block(990,485,20,20);
  block37=new Block(1010,485,20,20);
  block38=new Block(1030,485,20,20);
  block39=new Block(1050,485,20,20);
  block40=new Block(1070,485,20,20);
  block41=new Block(1090,485,20,20);

  //second layer, floor 2
  block42=new Block(930,465,20,20);
  block43=new Block(950,465,20,20);
  block44=new Block(970,465,20,20);
  block45=new Block(990,465,20,20);
  block46=new Block(1010,465,20,20);
  block47=new Block(1030,465,20,20);
  block48=new Block(1050,465,20,20);
  block49=new Block(1070,465,20,20);
  
  // third layer
  block50=new Block(950,445,20,20);
  block51=new Block(970,445,20,20);
  block52=new Block(990,445,20,20);
  block53=new Block(1010,445,20,20);
  block54=new Block(1030,445,20,20);
  block55=new Block(1050,445,20,20);

  //fourth layer
  block56=new Block(970,425,20,20);
  block57=new Block(990,425,20,20);
  block58=new Block(1010,425,20,20);
  block59=new Block(1030,425,20,20);

  //fifth layer 
  block60=new Block(990,405,20,20);
  block61=new Block(1010,405,20,20);

  //last layer
  block62=new Block(1000,385,20,20);


  shooter=new Shooter();

  slingshot=new SlingShot(shooter.body,{x:100,y:600});

 Engine.run(engine);

}

function draw() {
  background(0);  
  ground.display();

  floor1.display();
  floor2.display();

  //floor 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
  block28.display();
 
  block29.display();
  block30.display();

  block31.display();

  //floor 2
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();

  block50.display();
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  
  block56.display();
  block57.display();
  block58.display();
  block59.display();
  
  block60.display();
  block61.display();
  
  block62.display();

  shooter.display();
  slingshot.display();
  
 textSize(24);
 fill("yellow");
 text("Press space to reattach the polygon to the sling", 300,700);

drawSprites();
}

function mouseDragged(){
  if(gameState!=="launch"){
  Matter.Body.setPosition(shooter.body, {x: mouseX,y:mouseY});

}
}

function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(shooter.body,{x:100, y:600})
    slingshot.attach(shooter.body);
    gameState="onSling";
  }
}





