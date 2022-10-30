
//draw circle
function circle1(){
    // spinVal1 = spinVal1 + 0.025;
    push();
    translate(515,120);
    rotate(spinVal1);
   // rotate(mouseX / 20); mouse interaction
    
    noStroke();
    //white half circle
    fill(255);
    arc(0, 0, 225, 225, radians(-270), radians(-450));  
    //green half circle
    fill(198,187,117);
    arc(0, 0, 225, 225, radians(-90), radians(-270));
    pop();
      
}

function circle2() {
//    spinVal2 = spinVal2 + 0.015;
    push();
    translate(515,120);
    rotate(-spinVal2);
   
   //rotate(mouseX / 20); mouse interaction
     
    noStroke();
    //pink half circle
    fill(255,192,185);
    arc(0, 0, 150, 150, radians(-270), radians(-450));
    
    //blue half circle
    fill(173, 195, 213);
    arc(0, 0, 150, 150, radians(-90), radians(-270));
     
    //red half circle
    fill(222, 105, 85);
    arc(0, 0, 75, 75, radians(-90), radians(-270));

    //center
    fill(255,204,0);
    ellipse(0, 0, 35, 35);
    
    pop();
}

