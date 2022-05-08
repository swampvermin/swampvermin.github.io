//https://editor.p5js.org/brysonian/sketches/Hk28euUA-

let canvas;

// color variables
let redC;
let orangeC;
let yellowC;
let greenC;
let blueC;
let indigoC;
let violetC;

let pinkC;
let canaryC;
let sageC;
let skyblueC;
let whiteC;

// links
let mindscape;
let about;
// dependent variables
let brush;
let strokeSize;
let strokeColor;



function setup() {
	canvas = createCanvas(windowWidth, windowHeight+1500);
	canvas.position(0,0);

	redC = color(255,0,0);
	pinkC = color(255,166,190);
	orangeC = color(255,126,48);
	yellowC =  color(255,216,1);
	canaryC= color(255,239,0);
	greenC = color(52,140,49);
	sageC = color(183,205,131)
	blueC = color(0,0,255);
	skyblueC = color(137,197,255);
	indigoC = color(63,15,183);
	violetC = color(127,0,255);
	lilacC = color(213,181,194);
	whiteC = color(255)
	

	about = createA('about.html', 'about');
	about.position(windowWidth-68,26);
	about.style('font-size', '20px');

	mindscape = createA('home.html', 'mindscape');
	mindscape.position(18,26);
	mindscape.style('font-size', '20px');

	brush=1;
	strokeSize=1;
		strokeColor= color(0);


}

function draw(){
// abstract photo
	// noStroke();
	// angleMode(DEGREES);
	// stroke(0);
	// textSize(15);
	// textFont('Helvetica');
	// textAlign(CENTER);
	// text('abstract self portrait',width/2+140,190);

// control color & stroke
  strokeWeight(strokeSize);
  stroke(strokeColor)
keyTyped();
// control brush
if (mouseIsPressed==true){
	if (brush==1) {
		line(pmouseX,pmouseY,mouseX, mouseY)
	}
	if(brush==2){
		ellipse(mouseX, mouseY, 2*strokeSize, 2*strokeSize);
	}
	if(brush==3){
		line(mouseX-5, mouseY-5, mouseX+5, mouseY+5);
		line(mouseX+5, mouseY-5, mouseX-5, mouseY+5);
	}
	if(brush==4){
		rect(mouseX, mouseY,2*strokeSize,2*strokeSize)
	}
}

}

function keyTyped() {
	// control color
  if (key == 'r') {
    strokeColor= redC;
    fill(strokeColor);
  }
  else if (key == 'p') {
    strokeColor= pinkC;
    fill(pinkC);
  }
  else if (key == 'o') {
    strokeColor= orangeC;
    fill(orangeC);
  }
  else if (key == 'y') {
    strokeColor= yellowC;
    fill(yellowC);
  }
  else if (key == 'c') {
    strokeColor= canaryC;
    fill(canaryC);
  }
  else if (key == 'g') {
    strokeColor= greenC;
    fill(greenC);
  }
  else if (key == 's') {
    strokeColor= sageC;
    fill(sageC);
  }
  else if (key == 'b') {
    strokeColor= blueC;
    fill(blueC);
  }
  else if (key == 'k') {
    strokeColor= skyblueC;
    fill(skyblueC);
  }
  else if (key == 'i') {
    strokeColor= indigoC;
    fill(indigoC);
  }
  else if (key == 'v') {
    strokeColor= violetC;
    fill(violetC);
  }
  else if (key == 'l') {
    strokeColor= lilacC;
    fill(lilacC);
  } 
  else if (key=='w'){
  	strokeColor= 255
  	fill(255)
  } else if(key=='d'){
  	strokeColor= 0
  	fill(0);
  } 
  stroke(strokeColor)
  fill(strokeColor)
// control brush
if (key== '1'){
	brush=1;
} if (key== '2') {
	brush = 2;
} if (key=='3'){
brush = 3;
} if (key =='4'){
	brush =4;
}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
    strokeSize = strokeSize- 1;
  }
  
  if (keyCode == RIGHT_ARROW) {
		strokeSize = strokeSize+1;
  }
    
  strokeWeight(strokeSize);
  stroke(strokeColor)
  fill(strokeColor)
}


$(function () {
            $(".icons").draggable();
            
        });











