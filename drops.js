class drops{

    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1   
        }
        this.x=x;
		this.y=y;
		
        this.rain=Bodies.circle(this.x, this.y,5,options);
        this.radius = 5;
		World.add(world, this.rain);
       

    }
    
    updateDrops(){
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }   

    display(){
        var a = this.rain.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(a.x,a.y,this.radius, this.radius);

        
    }
}