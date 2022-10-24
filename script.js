let bg;

function preload() {
  bg = loadImage("images/bg.png");
}
//circle variable
let c;
let colors = ["#FFCC00", "#D4E3E3"]

function setup() {
    createCanvas(800, 600);
   
  }


  function draw() {

    //backrgound
    imageMode(CENTER);
    image(bg,width/2,height/2,800,600);
 //flower
 flower();
    //circle
    noFill();
    stroke(255, 204, 0);
    strokeWeight(4);  
    circle(200, 300, 400);

  }



