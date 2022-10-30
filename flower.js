//draw pink petals
function flower() {
push();
translate(205, 206);
noStroke();
rotate(radians(frameCount / 5));

if (frameCount <= 400){
  fill (255,255,255, 100);
}
else {
  fill (255,255,255, 100);//fill(243, 184, 190, 220);
}

for (var r1 = 0; r1 < 10; r1++) {
  if (frameCount <= 400) {
    ellipse(0, 20 + frameCount / 5, 70 + frameCount / 10, 100 + frameCount / 10); //x-axis, y-axis, width, height
  }
  if (frameCount > 400) {
    ellipse(0, 100, 110, 140); //end frame of the pink petals
  }
  rotate(PI / 5);
}
pop();

//draw blue & white petals
push();
translate(206,206);
rotate(radians(-frameCount / 5));
//changing the color of petals with mouse
let mixTarget = map(mouseX, 0, width, 0.0, 1.0);
mix = mix + ((mixTarget - mix) * easing);
let easedColor1 = lerpColor(cA, cB, mix);
let easedColor2 = lerpColor(cC, cD, mix);
fill (easedColor1);
stroke(easedColor2);
for(var i=1;i<=6;i++){ 
// fill(255,255,255);
strokeWeight(8);
bezier(1,0,-47,-80,-47,-190,0,-190);//x1, y1, x2,y2,x3,y3,x4,y4
bezier(0,-190,47,-190,47,-80,-1,0); 
rotate(2*PI/6); 
}
pop();
}


