class umbrella{

    constructor(x,y){

        var options={
            isStatic: true
        }

        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var b = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,b.x,b.y, 300,300)

        
    }
}