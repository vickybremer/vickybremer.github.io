let rndColor = 0;
let selected = 0;



function buttonRed(){
        noStroke();
        fill(150);
        rect(110,110,100,100,20); //SchattenRed
    if(selected === 1){
        fill(255,0,0);
        rect(100,100,100,100,20);
        textFont("IMPACT");
        textSize(50);
        fill(200,0,0);
        text("RED",113,170);
    }else{
        fill(255);
        rect(100,100,100,100,20); //RotButton
        textFont("IMPACT");
        textSize(50);
        fill(130);
        text("RED",113,170);
    }      
}

function buttonBlack(){
        fill(150);
        rect(310,110,100,100,20); //SchattenBlack
    if(selected === 2){
        fill(0);
        rect(300,100,100,100,20);
        textFont("IMPACT");
        textSize(35);
        fill(40);
        text("BLACK",306,165);
    }else{
        fill(255);
        rect(300,100,100,100,20); //SchwarzButton
        textFont("IMPACT");
        textSize(35);
        fill(130);
        text("BLACK",306,165);
    }
}


function buttonStart(){
    fill(160);
    rect(147,247,203,103,20); //StartSchatten
    fill(255,255,255);
    rect(150,250,200,100,20); //StartButton
    textFont("IMPACT");
    textSize(60);
    fill(160);
    text("START",175,323);



    if(rndColor === 1){
        fill(255,0,0);
        rect(150,250,200,100,20);
        textFont("IMPACT");
        textSize(60);
        fill(160);
        //textAlign(CENTER);
        text("START",175,323);
    }
    if(rndColor === 2){
        fill(0);
        rect(150,250,200,100,20);
        textFont("IMPACT");
        textSize(60);
        fill(160);
        //textAlign(CENTER);
        text("START",175,323);
    }

    if(selected === 1 && rndColor === 1 || selected === 2 && rndColor === 2){
        fill(0,255,0);
        textFont("COURIER");
        textSize(30);
        //textAlign(CENTER);
        text("*** YOU WON ***",115,435);
    }
    if(selected === 1 && rndColor === 2 || selected === 2 && rndColor === 1){
        fill(0,255,0);
        textFont("COURIER");
        textSize(30);
        //textAlign(CENTER);
        text("*** YOU LOST ***",110,435);
    }
}


function Reset(){
    fill(200);
    rect(255,605,50,50,100);
    fill(100);
    rect(250,600,50,50,100); //Button (Hinzugefügt 15.11.19)
    textSize(15);
    fill(255);
    textFont("IMPACT");
    text("reset",258,630);
}


function mousePressed(){

    buttonRed();
    if(mouseX>100 && mouseX<200 && mouseY>100 && mouseY<200){
        selected = 1;
    }

    buttonBlack();
    if(mouseX>300 && mouseX<400 && mouseY>100 && mouseY<200){
        selected = 2;
    }   

    buttonStart();
    if(mouseX>150 && mouseX<350 && mouseY>250 && mouseY<350){
        rndColor = round(random(1,2));
    }

    Reset();
    if(mouseX>250 && mouseX<300 && mouseY>600 && mouseY<650){
        selected = 0;
        rndColor = 0;
    }

            console.log("selected  "+selected);
            console.log("generated  "+rndColor);
}   




function draw(){

    clear();

    background(255);

    noStroke();

    //Box
    fill(200);
    rect(50,50,400,450); //box
    fill(190);
    quad(450,50,450,500,500,550,500,100);
    fill(180);
    quad(50,500,450,500,500,550,100,550);

    fill(150);
    textSize(15);
    textFont("IMPACT");
    text("pick a color",218,160);

    //Ausgabefeld
    fill(0,0,255);
    rect(90,400,323,53);

    fill(20,20,100);
    rect(90,400,320,50);

    //Buttons
    buttonRed();
    buttonBlack();
    buttonStart();
    Reset();
}

