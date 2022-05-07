
// Final Project Poster 1 - Araceli Gonzalez-Rocha

// credit:
// inspired by the wretched of the earth - frank fanon
// photo: © Siemens Stiftung

let canvas; 
let red;
let black;

// images used
let fanon;
let fanonQ;

let button1

let state;


// change to  png when printing
function preload() {
  fanon = loadImage("assets/poster1/FrankFanonSmall.jpeg");
  fanonQ = loadImage("assets/poster1/fanonquoteSmall.jpeg");
}

function setup() {
  pixelDensity(1);
  canvas = createCanvas(11*72, 17*72);
  canvas.position(0,0);

  // order of riso layers matter

  red = new Riso("red");
  black = new Riso("black");
  
  state =0;
  
        background(0);

 
   fill(255);
  textStyle(BOLD);
  textFont("Futura");
  textAlign(CENTER, CENTER);
  textSize(30);
  text('test', width / 4 - 20, 900);
    
          


}

function draw() {
  
    button1 =createButton('next');
  button1.position(100,100)
button1.mousePressed(changeState);
  loop()

  if (state==1) {
    background(255);
  clearRiso()
    
 
  red.fill(255);
   red.image(fanonQ, 0, 0, 800, 600);
   red.image(fanonQ, 0, 0, 800, 600);
   red.image(fanonQ, 0, 0, 800, 600);
   red.image(fanonQ, 0, 0, 800, 600);
  
  // if (mouseY>height/2){
  // red.image(fanonQ, 0, 0, 800, 600);
  // }
  // if (mouseY<height/2){
  //   black.fill(255);
  //   black.image(fanonQ,0,0,800,600);
  // }

  red.textStyle(BOLD);
  red.textFont("Futura");
  red.textAlign(CENTER, CENTER);
  red.textSize(30);
  red.text("- Frank Fanon", width / 4 - 20, 900);

  // setting opacity of main fanon image
  black.fill(255);
  let xFanon= 195
  let yFanon= 235
  // setting dither parameters
  let dither = ditherImage(fanon, "none", 135);

  black.image(dither, xFanon, 235, 600, 991);
  
  // if (mouseY<height/2){
  //   red.image(dither, xFanon, 235, 600, 991)
  // }
  
  let gap = 100
  
  if (mouseX<width/2 && mouseX>width/4){
     black.fill(100);
  black.image(dither, xFanon-gap, 235, 600, 991);
  }
   if (mouseX<width/4){
       black.fill(100);
  black.image(dither, xFanon-gap, 235, 600, 991);
       black.fill(50);
  black.image(dither, xFanon-(gap*2), 235, 600, 991);
   }
  // i want to be able to add dithered image depending on mouse position
 


  black.cutout(red);
  drawRiso();
  
    
  }




  

}

function changeState(){
  state++
}


// function intro(){

  
// }

// function poster1() {
//   // positioning quote

//  background(255);
//   clearRiso()
    
 
//   red.fill(255);
//    red.image(fanonQ, 0, 0, 800, 600);
//    red.image(fanonQ, 0, 0, 800, 600);
//    red.image(fanonQ, 0, 0, 800, 600);
//    red.image(fanonQ, 0, 0, 800, 600);
  
//   // if (mouseY>height/2){
//   // red.image(fanonQ, 0, 0, 800, 600);
//   // }
//   // if (mouseY<height/2){
//   //   black.fill(255);
//   //   black.image(fanonQ,0,0,800,600);
//   // }

//   red.textStyle(BOLD);
//   red.textFont("Futura");
//   red.textAlign(CENTER, CENTER);
//   red.textSize(30);
//   red.text("- Frank Fanon", width / 4 - 20, 900);

//   // setting opacity of main fanon image
//   black.fill(255);
//   let xFanon= 195
//   let yFanon= 235
//   // setting dither parameters
//   let dither = ditherImage(fanon, "none", 135);

//   black.image(dither, xFanon, 235, 600, 991);
  
//   // if (mouseY<height/2){
//   //   red.image(dither, xFanon, 235, 600, 991)
//   // }
  
//   let gap = 100
  
//   if (mouseX<width/2 && mouseX>width/4){
//      black.fill(100);
//   black.image(dither, xFanon-gap, 235, 600, 991);
//   }
//    if (mouseX<width/4){
//        black.fill(100);
//   black.image(dither, xFanon-gap, 235, 600, 991);
//        black.fill(50);
//   black.image(dither, xFanon-(gap*2), 235, 600, 991);
//    }
//   // i want to be able to add dithered image depending on mouse position
 


//   black.cutout(red);
//   drawRiso();
  
  
// }
