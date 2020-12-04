const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var thunder1Img, thunder2Img, thunder3Img, thunder4Img;
var maxDrops=100;
var thunder;
var umbrella1;
var engine, world;
var rand;
var f =0;
var drop = [];

function preload(){
    thunder1Img = loadImage("thunderbolt/1.png");
    thunder2Img = loadImage("thunderbolt/2.png");
    thunder3Img = loadImage("thunderbolt/3.png");
    thunder4Img = loadImage("thunderbolt/4.png");
}

function setup()
{
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);
  
    umbrella1= new umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drop.push(new drops(random(0,400), random(0,400)));
        }

    }
   
}

function draw()
{
    Engine.update(engine);
    background("black");

    rand = Math.round(random(1,4));
    if(frameCount % 60 == 0)
    {
        f=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(rand)
        {
            case 1:thunder.addImage(thunder1Img);
                    break;
            case 2:thunder.addImage(thunder2Img);
                    break;
            case 3:thunder.addImage(thunder3Img);
                    break;
            case 4:thunder.addImage(thunder4Img);
                    break;              
        }
        thunder.scale = 0.4;
        
    }
    if (f + 10 == frameCount && thunder){
        thunder.destroy();
    }
    umbrella1.display();
  
    
    for(var i=0;i<maxDrops; i++){
        drop[i]. display();
        drop[i].updateDrops()
    }
    drawSprites();
}   

