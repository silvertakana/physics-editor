class Joint {
    constructor(a,b,long,stiff){
        var option = {
            'bodyA': a,
            'pointB': b,
            'stiffness':stiff,
            'length':long
        }
        this.pointB = b;
        //this.gfx = loadImage("sprites/sling3.png")
        this.gfx = loadImage("sprites/sling3.png")
        this.gfx2 = loadImage("sprites/sling1.png")
        this.gfx3 = loadImage("sprites/sling2.png")
        this.joint  = Constraint.create(option);
        World.add(world,this.joint)
    }
    display() {
        image(this.gfx2,250,height-209);
        bird.display();
        if(this.joint.bodyA){
        
        var posA = this.joint.bodyA.position;
        //var posB = this.joint.bodyB.position;
        push();
        stroke(48,22,8);
        strokeWeight(20)
        line(posA.x,posA.y,this.pointB.x,this.pointB.y);
        pop();
        image(this.gfx,posA.x - 30,posA.y - 10,50,20);
        }else{
            bird.addPos();
        }
        
        image(this.gfx3,223,height-209);
    }
    break(){
        this.joint.bodyA = null;
        //this.joint.bodyB = null;
    }
    join(a){
        this.joint.bodyA = a;
    }
}