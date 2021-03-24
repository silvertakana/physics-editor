class Button{
    constructor(x,y,w,h,word,size,tx,ty,color){
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
        this.w = w;
        this.h = h;
        this.word = word;
        this.size = size;
        this.colour = color;
        this.sizez = 1;
    }
    display(){
        push();
        rectMode(CENTER);
        textSize(this.Size);
        fill(this.colour);
        rect(this.x, this.y, this.w*this.sizez, this.h*this.sizez);
        fill(0)
        text(this.word, this.x+this.tx, this.y+this.ty);
        pop();
        //console.log(this.x);
    }
    isClicked(){
        if(abs(mouseX-this.x)<this.w*this.sizez/2&&abs(mouseY-this.y)<this.h*this.sizez/2&&mouseIsPressed){
            return true;
        }else{
            return false;
        }
    } 
    isOver(){
        if(abs(mouseX-this.x)<this.w*this.sizez/2&&abs(mouseY-this.y)<this.h*this.sizez/2){
            return true;
        }else{
            return false;
        }
    }
    setValue(x,y,w,h,word,size,tx,ty,color,sizez){
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
        this.w = w;
        this.h = h;
        this.word = word;
        this.size = size;
        this.colour = color;
        this.sizez = sizez;
    }

}