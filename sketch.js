mode=1
size=25
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,255,255);
}

function draw() {
  noStroke();
  fill(255,255,255);
  rect(windowWidth-150,windowHeight-605,800,470);
  rect(0,(windowHeight-150),550,200);
  noStroke();
  textSize(20);
  fill(50,50,50);
  text("small",windowWidth-125,windowHeight-420);
  text("medium",windowWidth-125,windowHeight-330);
  text("large",windowWidth-125,windowHeight-240);
  text("huge",windowWidth-125,windowHeight-150);
  text("eraser",370,windowHeight-50)
  text("red",118,windowHeight-50)
  text("blue",38,windowHeight-50)
  text("green",200,windowHeight-50)
  text("yellow",280,windowHeight-50)
  text("pencil",windowWidth-125,windowHeight-510)
  text("reset",460,windowHeight-50)
  noStroke();
  fill(0,0,200);
  circle(50,windowHeight-100,50);
  noStroke();
  fill(200,0,0);
  circle(130,windowHeight-100,50);
  noStroke();
  fill(75,75,75);
  circle(390,windowHeight-100,50);
  fill(0,200,0);
  circle(220,windowHeight-100,50);
  fill(100,100,100);
  circle(windowWidth-100,windowHeight-470,50);
  fill(100,100,100);
  circle(windowWidth-100,windowHeight-380,50);
  fill(100,100,100);
  circle(windowWidth-100,windowHeight-290,50);
  fill(100,100,100);
  circle(windowWidth-100,windowHeight-200,50);
  fill(235,235,0);
  circle(305,windowHeight-100,50);
  fill(100,100,100);
  circle(windowWidth-100,windowHeight-560,50);
  fill(100,100,100);
  circle(480,windowHeight-100,50);
   if(mouseIsPressed) {
     if ((mouseX-50)*(mouseX-50)+(mouseY-(windowHeight-100))*(mouseY-(windowHeight-100))<25*25) {
       mode=1
     }
     if ((mouseX-130)*(mouseX-130)+(mouseY-(windowHeight-100))*(mouseY-(windowHeight-100))<25*25) {
       mode=2
     }
     if ((mouseX-220)*(mouseX-220)+(mouseY-(windowHeight-100))*(mouseY-(windowHeight-100))<25*25) {
       mode=3
    }
       if ((mouseX-305)*(mouseX-305)+(mouseY-(windowHeight-100))*(mouseY-(windowHeight-100))<25*25) {
       mode=4
     }
     if ((mouseX-(windowWidth-100))*(mouseX-(windowWidth-100))+(mouseY-300)*(mouseY-300)<25*25) {
       size=10
     }
     if ((mouseX-(windowWidth-100))*(mouseX-(windowWidth-100))+(mouseY-390)*(mouseY-390)<25*25) {
       size=25
     }
          if ((mouseX-(windowWidth-100))*(mouseX-(windowWidth-100))+(mouseY-480)*(mouseY-480)<25*25) {
       size=50
     }
       if ((mouseX-(windowWidth-100))*(mouseX-(windowWidth-100))+(mouseY-560)*(mouseY-560)<25*25) {
       size=100
     }
     if ((mouseX-390)*(mouseX-390)+(mouseY-(windowHeight-100))*(mouseY-(windowHeight-100))<25*25) {
       mode=5
     }
     if ((mouseX-(windowWidth-100))*(mouseX-(windowWidth-100))+(mouseY-200)*(mouseY-200)<25*25) {
       size=2
     }
          if ((mouseX-480)*(mouseX-480)+(mouseY-(windowHeight-100))*(mouseY-(windowHeight-100))<25*25) {
            fill(255,255,255);
            rect(0,0,windowWidth,windowHeight);
     }
             
     if (mode===1){
     stroke(0,0,200);
     }
     if (mode===2){
     stroke(200,0,0);
     }
     if (mode===3){
     stroke(0,200,0);
     }
     if (mode===4){
     stroke(235,235,0);
     }
     if (mode===5){
     stroke(255,255,255);
     }
     //circle(mouseX,mouseY,size)
     strokeWeight(size);
     line(X,Y,mouseX,mouseY)
   }
  
  if (keyIsDown(49)) {
    mode=1
   }
  if (keyIsDown(50)) {
    mode=2
   }
   if (keyIsDown(51)) {
    mode=3
   }
  if (keyIsDown(52)) {
    mode=4
   }
  X=mouseX
  Y=mouseY
}
 function mouseWheel(event){
   size=size-event.delta/20
   if (size<2){
     size=2;
   }
   if (size>400){
     size=400;
   }
   print(size)
 }
function keyPressed() {
  if (keyCode === 83) {
    saveCanvas();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
   fill(255,255,255);
            rect(0,0,windowWidth,windowHeight);
}
