mode=1
size=25
function setup() {
  createCanvas(800,800);
  background(255,255,255);
}

function draw() {
  noStroke();
  fill(255,255,255);
  rect(700,170,800,450);
  rect(0,650,800,200);
  noStroke();
  textSize(20);
  fill(50,50,50);
  text("small",712,350);
  text("medium",712,440);
  text("large",712,525);
  text("huge",712,605);
  text("eraser",370,750)
  text("red",118,750)
  text("blue",38,750)
  text("green",200,750)
  text("yellow",280,750)
  text("pencil",712,265)
  text("reset",460,750)
  noStroke();
  fill(0,0,200);
  circle(50,700,50);
  noStroke();
  fill(200,0,0);
  circle(130,700,50);
  noStroke();
  fill(75,75,75);
  circle(390,700,50);
  fill(0,200,0);
  circle(220,700,50);
  fill(100,100,100);
  circle(740,300,50);
  fill(100,100,100);
  circle(740,390,50);
  fill(100,100,100);
  circle(740,480,50);
  fill(100,100,100);
  circle(740,560,50);
  fill(235,235,0);
  circle(305,700,50);
  fill(100,100,100);
  circle(740,220,50);
  fill(100,100,100);
  circle(480,700,50);
   if(mouseIsPressed) {
     if ((mouseX-50)*(mouseX-50)+(mouseY-700)*(mouseY-700)<25*25) {
       mode=1
     }
     if ((mouseX-130)*(mouseX-130)+(mouseY-700)*(mouseY-700)<25*25) {
       mode=2
     }
     if ((mouseX-220)*(mouseX-220)+(mouseY-700)*(mouseY-700)<25*25) {
       mode=3
    }
       if ((mouseX-305)*(mouseX-305)+(mouseY-700)*(mouseY-700)<25*25) {
       mode=4
     }
     if ((mouseX-740)*(mouseX-740)+(mouseY-300)*(mouseY-300)<25*25) {
       size=10
     }
     if ((mouseX-740)*(mouseX-740)+(mouseY-390)*(mouseY-390)<25*25) {
       size=25
     }
          if ((mouseX-740)*(mouseX-740)+(mouseY-480)*(mouseY-480)<25*25) {
       size=50
     }
       if ((mouseX-740)*(mouseX-740)+(mouseY-560)*(mouseY-560)<25*25) {
       size=100
     }
     if ((mouseX-390)*(mouseX-390)+(mouseY-700)*(mouseY-700)<25*25) {
       mode=5
     }
     if ((mouseX-740)*(mouseX-740)+(mouseY-200)*(mouseY-200)<25*25) {
       size=2
     }
          if ((mouseX-480)*(mouseX-480)+(mouseY-700)*(mouseY-700)<25*25) {
            fill(255,255,255);
            rect(0,0,800,800);
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
