let x = 0;
let y = 0;
let speed = 0.01;

//BODEN
function Boden(){
    noStroke();
    fill(150,150,150);
    rect(0,500,width,height);
}

if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
}
}, false); 


//ANTRIEB
function fire(){
fill(255,0,0,130);
triangle(x+90,y+118,x+110,y+118,x+100,y+150);
fill(255,255,0,80);
triangle(x+95,y+118,x+105,y+118,x+100,y+140);
}

//LANDER
function Lander(){
  
    noStroke();

    fill(0,255,0);
    rect(x+90,y+85,20,30,20);//alien
    fill(0);
    ellipse(x+100,y+95,9,7); //mund
    fill(0,255,0);
    ellipse(x+100,y+94,10,7); //mund
    fill(255);
    ellipse(x+100,y+92,8,8);//auge
    fill(0);
    ellipse(x+100,y+91,5,5); //auge
    
    fill(100,180,255,80);
    ellipse(x+100,y+100,40,40); //Kuppel
    fill(255, 165, 0);
    
    stroke(100,100,100);
    strokeWeight(4);
    line(x+80,y+120,x+75,y+127); //Bein links
    line(x+100,y+120,x+100,y+130); //Bein mitte
    line(x+120,y+120,x+125,y+127); //Bein rechts
    
    noStroke();
    quad(x+80,y+100,x+120,y+100,x+135,y+110,x+65,y+110); //Schale1
    fill(255, 130, 0);
    quad(x+135,y+110,x+65,y+110,x+80,y+120,x+120,y+120); //Schale2

    if(y < 370){
    y = y + speed;
    speed = speed + 0.04;
}

    if(y >= 370){
        y = 370;

        speed = speed + 0;
        //console.log(speed);
    }  
}

//START
function Start(){
    noStroke();
    fill(100);
    rect(250,600,50,50,100); //Button
    textSize(15);
    fill(255);
    textFont("IMPACT");
    text("start",260,630);
}

//HELP
function Help(){
    noStroke();
    fill(100);
    rect(320,600,50,50,100); //Button 
    textSize(16);
    fill(255);
    textFont("IMPACT");
    text("help",330,630);
}

//MOUSEPRESSED
function mousePressed(){

    Start();
    if(mouseX>250 && mouseX<300 && mouseY>600 && mouseY<650){
        x = 0;
        y = 0;
        speed = 0;
        
    }

    Help();
    if(mouseX>320 && mouseX<370 && mouseY>600 && mouseY<650){
        console.log("Lass das UFO sicher landen. Die Geschwidigkeit darf nicht größer als 1 werden. Steuere mit den Pfeiltasten.");
    }
}

//DRAW
function draw(){

    
    clear();
    background(0);
    Boden();
    Lander();
    Start();
    Help();

    //BEDIENUNG
    if(keyIsDown(37)){
        x=x-1; //left  
    }   
    if(keyIsDown(38) && y<370){
        fire();
        speed=speed-0.05;//up
    }
    if(keyIsDown(39)){
        x=x+1; //right
    }
    if(keyIsDown(40)){
        y=y+1; //down
    }

    //ERGEBNIS
    if(speed>1 && y === 370){
        fill(255,0,0,30);
        rect(width/4,200,300,150,10);
        fill(255,0,0,80);
        textSize(50);
        text("verloren",width/4+55,290);
        speed = speed+0;
    }

    if(speed<=1 && y === 370){
        fill(0,255,0,30);
        rect(width/4,200,300,150,10);
        fill(0,255,0,80);
        textSize(50);
        text("gewonnen",width/4+50,290);
        speed = speed+0;
    }

    //SPEED
    fill(100);
    textSize(15);
    text("speed",400,75);
    fill(255);
    textSize(20);
    text(speed,400,100);
}
