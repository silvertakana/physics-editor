class Ball {
  constructor(x, y, radius,itstatic) {
    var options = {
        'restitution':.5,
        'friction':1,
        'density':1,
        'isStatic':itstatic
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    angleMode(CENTER)
    rotate(angle);
    ellipseMode(CENTER);
    fill(0);
    ellipse(0, 0, this.radius*2, this.radius*2);
    pop();
  }
};
