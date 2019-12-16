function mousePressed(){

var randomNumber = random(1, 6);


//Ball
background(255,230,230);

noStroke();
fill(200,150,150);
ellipse(300,580,300,50); //Schatten

fill(0,0,0);
stroke(255,255,255);
ellipse(300,300,400);
ellipse(250,250,200); //Ball

fill(0,0,255);
triangle(175,190,335,200,245,340);
  

//Ausgaben
fill(0,255,255);

    if(Math.floor(randomNumber)===1) {
        textSize(25);
    text("no",230,245);
    }
    if(Math.floor(randomNumber)===2){
        textSize(25);
        text("hell no",220,245);
    }
    if(Math.floor(randomNumber)===3){
        textSize(25);
        text("lol no",220,245);
    }
    if(Math.floor(randomNumber)===4){
        textSize(25);
        text("nope",220,245);
    }
    if(Math.floor(randomNumber)===5){
        textSize(25);
        text("dear god \n     NO",200,235);
}

}


