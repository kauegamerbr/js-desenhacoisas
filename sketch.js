function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("yellow");
  fill(" green");
  
  if (mouseIsPressed){
    circle(mouseX,mouseY,20,15)
  }
}
