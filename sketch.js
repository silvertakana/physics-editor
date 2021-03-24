const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var balls = [],box = [],ui = [],placetype = null,isStatic = false,isRunning = false,boxlength = 0,balllength = 0;
var startx,starty,endx,endy;
function setup(){
    startx = null;
    starty = null;
    endx = null;
    endy = null;
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    ui[0] = new Button(0+100,height/2+100,100,25,"static",25,-5,3,"lightblue");
    ui[1] = new Button(0+100,height/2-200,100,25,"box",25,-5,3,"lightblue");
    ui[2] = new Button(0+100,height/2-150,100,25,"ball",25,-5,3,"lightblue");
    ui[3] = new Button(0+100,height/2-100,100,25,"joint",25,-5,3,"lightblue");
    ui[4] = new Button(0+100,height/2-50,100,25,"run",25,-5,3,"lightgreen");
    ui[5] = new Button(0+100,height/2,100,25,"clear",25,-5,3,"yellow");
    //ui[5] = new Button(0+100,height/2,100,25,"lol",25,-5,3,"lightgreen");
    //console.log()
	//box[1] = true
	
}

function draw(){
    if(isRunning){
        Engine.update(engine);
    }
    background(220);
	
    if(placetype === "box"){
        createbox();
    }
   render();
   print(box[1])
   UI();
}
function render() {
        for (let index = 0; index < boxlength; index++) {
            //print(box[index] !== undefined);
            //if(box[index] !== undefined){
                
                box[index].display();
            //}
        }
        for (let index = 0; index < balllength; index++) {
                ball[index].display();
        }
}
function createbox() {
    var nottouchbutton = true
    for (let index = 0; index < ui.length; index++) {
        if(ui[index].isOver()){
            nottouchbutton = false;
        }
    }
    //print(box.length)
   
    if(nottouchbutton){
        if(mouseIsPressed){
            if(startx === null){
                startx = mouseX;
                starty = mouseY;
                
            }
            rect(startx,starty,mouseX-startx,mouseY - starty)
        }else{
            if(startx !== null){
                endx = mouseX;
                endy = mouseY;
                let width = abs(endx - startx);
                let height = abs(endy - starty);
                let x = (endx + startx)/2
                let y = (endy + starty)/2
               
                box[boxlength] = new Box(x,y,width,height,isStatic)
                boxlength+=1
                //print(boxlength)
                startx = null;
                starty = null;
                endx = null;
                endy = null;
            }
        }
    }
}
function createball() {
    var nottouchbutton = true
    for (let index = 0; index < ui.length; index++) {
        if(ui[index].isOver()){
            nottouchbutton = false;
        }
    }
    //print(box.length)
   
    if(nottouchbutton){
        if(mouseIsPressed){
            if(startx === null){
                startx = mouseX;
                starty = mouseY;
                
            }
            var radius = dist(startx,starty,mouseX,mouseY)
            ellipseMode(CENTER)
            ellipse(startx,starty,radius*2,radius*2)
        }else{
            if(startx !== null){
                endx = mouseX;
                endy = mouseY;
                let radius = dist(startx,starty,endx,endy);
                let x = (endx + startx)/2
                let y = (endy + starty)/2
               
                ball[balllength] = new balls(x,y,radius,isStatic)
                balllength+=1
                //print(boxlength)
                startx = null;
                starty = null;
                endx = null;
                endy = null;
            }
        }
    }
}
function mouseClicked() {
    for (var index = 1; index < 4; index++) {
        //const element = array[index];
        if(ui[index].isOver()){
            if(ui[index].word === placetype){
                placetype = null;
               
            }else{
                placetype = ui[index].word;
                
                
            }
           
        }
    }
    
    if(ui[4].isOver()){
        if(isRunning === true){
            isRunning = false;
        }else{
            isRunning = true;
        }
    }
    
    if(ui[0].isOver()){
        if(isStatic === true){
            isStatic = false;
        }else{
            isStatic = true;
        }
    }
    if(ui[5].isOver()){
        for (let index = 0; index < boxlength; index++) {
            //box[index] = undefined;
            World.remove(world,box[index].body);
        }
        boxlength = 0;
    }
    
}
function colour() {
    for (var index = 1; index < 4; index++) {
        //const element = array[index];
        if(ui[index].word === placetype){
            ui[index].colour = "white";
        }else{
            ui[index].colour = "lightblue";
            
        }
    }
    if(isRunning === true){
        ui[4].colour = "red";
        ui[4].word = "stop";
    }else{
        ui[4].colour = "lightgreen";
        ui[4].word = "run";
    }
    if(isStatic === true){
        ui[0].colour = "purple";
    }else{
        ui[0].colour = "pink";
    }
}
function UI() {
    for (let index = 0; index < ui.length; index++) {
        ui[index].display();
    }
   
    for (var index = 0; index < ui.length; index++) {
        
        if(ui[index].isOver()){
                ui[index].setValue(ui[index].x,ui[index].y,ui[index].w,ui[index].h,ui[index].word,ui[index].size,ui[index].tx,ui[index].ty,ui[index].colour,ui[index].sizez+(1.4-ui[index].sizez)/5)
            }else{
                ui[index].setValue(ui[index].x,ui[index].y,ui[index].w,ui[index].h,ui[index].word,ui[index].size,ui[index].tx,ui[index].ty,ui[index].colour,ui[index].sizez+(1-ui[index].sizez)/5)
            }
    }
    colour();
}
