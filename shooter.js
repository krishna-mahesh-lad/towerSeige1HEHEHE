class Shooter{
    constructor(){
        var options={
            isStatic:false,
            density:0.3
            
        }

        this.body=Bodies.circle(100,600,35,options);
        this.image=loadImage("hexagon.png");
        

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        imageMode(CENTER);
        fill("orange");
        
        stroke("red");
        strokeWeight(2);
        image(this.image,pos.x,pos.y,50,50);

    }
}