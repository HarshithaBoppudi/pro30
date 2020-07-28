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
       // console.log(this.body.speed);
        if(this.body.speed<8){
          push();
          translate(this.body.position.x, this.body.position.y);
          rect(0, 0, this.width, this.height);
          pop();
         
       }
        else{
          
         // fill("aqua");
         
          World.remove(world,this.body);
         /* push();
         
          this.visiblity=this.visiblity-5
          translate(this.body.position.x, this.body.position.y);
          rect(0, 0, this.width, this.height);
     
         // tint(255,this.visiblity);
         // (this.body,this.body.position.x,this.body.position.y);
         pop();*/
        }
        
       //push();
       
       // var pos =this.body.position;
      
        
      
        
         //pop();
          }
          score(){
            if(this.Visiblity<0&&this.Visiblity>-105){
              score++
            }
          }
       
        }
