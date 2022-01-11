
var angle = 0;
var slider;
let scale1=.7;
let rotation=0;
let speed=2;//rotationspeed
let sineSpeed=.5;
let sineSpeed2=2;//reccursion sine

let c1, c2, c3, c4;



function setup() {

  createCanvas(windowWidth, windowHeight);

  c1 = color(255, 70, 50);
 c2 = color(27, 111, 201);
 c3 = color(255,122,1);
 c4 = color(17,51,96);

 slider=createSlider(0,TWO_PI,PI/4,.01);
  
}

function draw() {
  //background(51);
  //angle=slider.value();
  let smap=sin(radians(frameCount*sineSpeed));
  let sineScale=map (smap,-1,1,.00000005,10);

  let smap2=sin(radians(frameCount*sineSpeed2));
  let sineScale2=map (smap2,-1,1,.1,3);
  angle=sineScale2;


  translate(width/2,height/2);

  scale(sineScale);
  strokeWeight(1.5/sineScale);
  rotate(radians(rotation)); 
for (var i=0;i<360;i+=360/70){
  push();
  rotate(i);
    branch(100);
  pop();
}
  

  rotation=rotation+speed;
  print(angle);
}


function branch(len){
  stroke(random([c1, c2, c3,c4]));

  line(0,0,0,-len);
  translate(0,-len);
rotate(PI);

if (len>30){
  push();
  rotate(angle);
branch(len*scale1);
pop();

push();
rotate(-angle);
branch(len*scale1);
pop();
}


//line(0,0,0,-len*.67);

}