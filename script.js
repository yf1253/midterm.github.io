//preload bgimage and bgmusic
let bgImage;
let bgMusic;

//circle interaction
let spinVal1;
let spinVal2;

//variables for four petals flower graphics
// let animFPF;
// let FourPetalsFlower; //(old)

//variables for changing color of petals
let cA;//for petal
let cB;//for petal
let cC;//for stroke
let cD;//for stroke
let mix = 0;
let easing = 0.05; // 1.0 to 0

//variables for four petals flower graphics sequence
let flowerImages = [];
let whichFlower = 0;
let flowerUpdateRate = 15;


function preload() {
  //BACKGROUND IMAGE
  bgImage = loadImage("images/bg.png"); //load this image into sketch
  //MUSIC
  soundFormats('mp3');
  bgMusic = loadSound("music/piano.mp3");//load this song into sketch

  //******************************************************************
  //load images for animations
  //  animFPF = loadAnimation("images/fourpetalsflower001.png","images/fourpetalsflower008.png"); //(old)
  // create file names using nf() (number formatting) and adding
  // together strings (text) with +, counting numbers 0001 to 0011
  for (let i = 0; i < 9; i++) {
    flowerImages[i] = loadImage("images/fourpetalsflower" + nf(i + 1, 3) + ".png");
  }

}

function setup() {
    createCanvas(650, 500);
    angleMode('DEGREES');
    imageMode(CENTER);
    backgroundMusic();//call the background music function 
    spinVal1 = 0;
    spinVal2 = 0;
    
    //petal colors
    cA = color('#fce1a7'); // petal: yellow color
    cB = color("#fce1db"); // petal: pink color
    cC = color("#ff9f9f"); // stroke: pink color
    cD = color('#81bae5'); // stroke: blue color 
    
    // //change how many frames each animation frame is
    // animFPF.frameDelay = 30;
    // //create a flower from a single image
    // FourPetalsFlower = createSprite(540, 410);
    // FourPetalsFlower.addAnimation("fourpetalsflower", animFPF); //(old)
  }

 
 
  function draw() {
    //backrgound
    imageMode(CENTER);
    image(bgImage,width/2,height/2,800,600);
   
  //flower animation
  image(flowerImages[whichFlower], 520, 410);
    
  //aniamtion
  drawSprites();
  //swirl
  swirl();
  //flower
  flower();
  //yellow circle
  noFill();
  stroke(255, 204, 0);
  strokeWeight(12);  
  circle(205, 206, 400);
  //circles
  circle1();
  circle2();

  // if mouse is over the center of the image
  if (overImage(520, 410, 80) === true) {
    // automatically animate only when mouse is over the center:
    if (frameCount % flowerUpdateRate === 0) {
      whichFlower++;
      if (whichFlower >= flowerImages.length) {
        whichFlower = 0;
      }
    }
  } else {
    // not over the center of the image.
    // display frame 0, which has just a small circle.
    whichFlower = 0;
  }

  if (mouseIsPressed) {
    spinVal1 = spinVal1 + 0.1;
    spinVal2 = spinVal2 + 0.05;
}
else {
  spinVal1 = spinVal1 + 0.025;
  spinVal2 = spinVal2 + 0.015;
  }


  }


