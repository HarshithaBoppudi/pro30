class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          box3.display();
          box4.display();
         
      
          box5.display();
          box6.display();
          box7.display();
          box8.display();
          box9.display();
          box10.display();
          box11.display();
          box12.display();
          box13.display();
          box14.display();
        
          
      
         
        }
        else{
          
          World.remove(world,this.body);
          push()
          this.visiblity=this.visiblity-5
          tint(255,this.visiblity);
          (this.body,this.body.position.x,this.body.position.y);
         pop();
        }
       // push();
        //fill("aqua");
       // var pos =this.body.position;
      
        
        // translate(this.body.position.x, this.body.position.y);
         //rect(0, 0, this.width, this.height);
        
         //pop();
          }
       
        }
