class Paper{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);

        World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;

            push();
            translate(pos.x,pos.y);
            fill("red"); 
            imageMode(CENTER);
            image(this.image,0,0,this.radius,this.radius);
            pop();
        }
    }
