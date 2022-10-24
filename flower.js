//first flower
function flower() {
push();
fill(230, 190, 230, 240);
translate(200, 300);
noStroke();
//rotate(radians(frameCount / 2));
for (var r1 = 0; r1 < 10; r1++) {
  if (frameCount <= 800) {
    ellipse(0, 50 + frameCount / 20, 60 + frameCount / 40, 90 + frameCount / 20); //x-axis, y-axis, width, height
  }
  if (frameCount > 800) {
    ellipse(0, 90, 80, 130);
  }
  rotate(PI / 5);
}
pop();
}