class Box {
  constructor(x, y, width, height,itStatic) {
    var options = {
        'restitution':.5,
        'friction':.8,
        'density':.5,
        'isStatic':itStatic
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();
    angleMode(CENTER)
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(0);
    stroke('brown');
    strokeWeight(2);
    rect(0,0, this.width, this.height);
    pop();
  }
};