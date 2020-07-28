const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
//var polygon;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(470, 325, 300, 15);
    platform2 = new Ground(870, 200, 300, 17);


  //  box1 = new BaseClass(340,170,20,20);
  //fill("pink");
    box2 = new  Box(200,50,40,40);
   

    box3 = new BaseClass(390,170,40,40);
    box4 = new  BaseClass(390,150,40,40);
    box5 = new BaseClass(430,170,40,40);
    box6 = new BaseClass(430,140,40,40);
    box7 = new BaseClass(470,170,40,40);
    box8 = new BaseClass(470,140,40,40);
   box9 = new BaseClass(510,170,40,40);
    box10 = new BaseClass(510,140,40,40);
   box11 = new BaseClass(550,170,40,40);
   box12 = new BaseClass(550,140,40,40);
   box13 = new BaseClass(590,170,40,40);
    box14 = new BaseClass(590,140,40,40);
    box15 = new BaseClass(420,120,40,40);
    box16 = new BaseClass(470,120,40,40);
   box17 = new BaseClass(510,120,40,40);
    box18 = new BaseClass(550,120,40,40);
    box19 = new BaseClass(460,90,40,40);
    box20 = new BaseClass(500,90,40,40);
    box21 = new BaseClass(780,70,40,40);
    box22 = new BaseClass(820,70,40,40);
    box23 = new BaseClass(860,70,40,40);
    box24 = new BaseClass(900,70,40,40);
    box25 = new BaseClass(940,70,40,40);
    box26 = new BaseClass(830,40,40,40);
    box27 = new BaseClass(870,40,40,40);
    box28 = new BaseClass(910,40,40,40);
    box29 = new BaseClass(870,40,40,40);
    slingshot = new SlingShot(box2.body,{x:200, y:50});
}

function draw(){
   background (0);
    Engine.update(engine);
    strokeWeight(4);
   // box1.display();
    box2.display();
    ground.display();
   
  fill("green");
    box3.display();
    box4.display();
   

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    fill("blue");
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    //bird.display();
    platform.display();
    platform2.display();
    //log6.display();
    slingshot.display();
    
       
}

function mouseDragged(){
    Matter.Body.setPosition(box2.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode===32){

    slingshot.attach(box2.body);
}








}