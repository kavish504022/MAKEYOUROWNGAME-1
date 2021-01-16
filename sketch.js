var score = 0;
const Question = ["What is Kavish's favourite color?\nA. Blue\nB. Pink\nC. Yellow\nD. Red", "What is Kavish's favourite car?\nA. Tesla\nB. Ford\nC. Ferari\nD. BMW"]
const Solution = ["A","C"];
var level1,level2,level3,level4,level5; 
var backImg;
var questiback;
var visibility = 255;
var count = 0;

function preload()
{
	backImg = loadImage("Quizimage.png");
	img = loadImage("apple.png");
	questiback = loadImage("questionimage.png")
	

}

function setup() {
	createCanvas(800, 700);

	level1 = createButton('level1');
	level2 = createButton('level2');
	level3 = createButton('level3');
	level4 = createButton('level4');
	level5 = createButton('level5');
	
	
  
}


function draw() {
background(backImg);

mystery();

  level1.position(200,600);
  level2.position(300,500);
  level3.position(400,400);
  level4.position(500,300);
  level5.position(600,200);
  
  level1.mousePressed(()=>{

	console.log("level1 entered!")
	hide();
	background(questiback);
	textSize(20);
	stroke("black")
	strokeWeight(4)
	text(Question[count], 100,100)
  });
  level2.mousePressed();
  level3.mousePressed();
  level4.mousePressed();
  level5.mousePressed();
 
}

function hide(){
	level1.hide();
	level2.hide();
	level3.hide();
	level4.hide();
	level5.hide();
	
}

function mystery(){
	if(visibility<0)
	visibility = 255;

	visibility = visibility - 5;
	tint(255,visibility);
	image(img,Math.random(100,500),Math.random(100,500));
	
}


