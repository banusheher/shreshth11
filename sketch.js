var player;
var computer;
var hand;
var start;
var restart;
var gameOver;
var getReady;
var bk;
var score;
var next;
var game;
var signs;

var sign1;
var sign2;
var sign3;
var gameI;
var nextI;
var bkI;
var playerI;
var computerI;
var stone1I;
var stone2I;
var papper1I;
var paper2I;
var scissor1I;
var scissor2I;
var startI;
var restartI;
var gameOverI;
var getReadyI;
var scoreI;

var Cscore;
var Pscore;

var PLAY = 1;
var POINT1 = 3
var POINT2= 4
var OVER =5
var END = 0;
var SERVE = 2;
var gameState = 2;
var S;
var Sc;
var P;

var play = 3;
var comp = 3;

function preload(){

  bkI  = loadImage("court.png");
  
  startI = loadImage("start.png");
  
  restartI = loadImage("restart.png");
  
  gameOverI = loadImage("GameOver.png");
  
  getReadyI = loadImage("GetReady.png");
  
  gameI = loadImage("rock-paper-scissors.jpg");
  
  playerI = loadImage("Among us 1.png");

  computerI = loadImage("Among_us_2.png");

  scoreI = loadImage("score.png");

  nextI = loadImage("forward.png");

  sign1 = loadImage("equal.png");

  sign2 = loadImage("small.png");

  sign3 = loadImage("small2.png");

  stone1I = loadImage("Stone1.png");

  scissor1I = loadImage("Scissor1.png");

  papper1I = loadImage("Paper1.png");

  stone2I = loadImage("Stone1.1.png");

  scissor2I = loadImage("Scissor1.1.png");

  papper2I = loadImage("Paper1.1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bk=createSprite(width/2,height/2,width,height);
  bk.addImage(bkI);
  bk.scale=1.8;
  
  getReady = createSprite(width/2,80,20,20);
  getReady.addImage(getReadyI);
  getReady.scale=0.7;
  
  player=createSprite(0+100,height/2,15,100);
  player.addImage(playerI);

  computer=createSprite(width-100,height/2,15,100);
  computer.addImage(computerI);

  game = createSprite(width/2,height/2,20,20);
  game.addImage(gameI);

  start = createSprite(width/2,height-100);
  start.addImage(startI);
  start.scale="0.2";
  start.debug=true;
  start.setCollider("circle",0,0,200)

  restart = createSprite(width/2,height/2);
  restart.addImage(restartI);
  restart.scale="0.5";
  restart.visible=false;

  gameOver = createSprite(width/2,80);
  gameOver.addImage(gameOverI);
  gameOver.scale=0.7;
 gameOver.visible = false

  score = createSprite(width/2,80);
  score.addImage(scoreI);
  score.scale="0.3";
  score.visible = false
  S = createSprite(width/1.65,height/1.2,50,50);

  Sc = createSprite(width/1.5,height/1.2,50,50);

  P = createSprite(width/1.37,height/1.2,50,50);

  signs = createSprite(width/2,height/2);
  signs.visible=false;
  signs.addImage(sign1)

  Cscore = 0;
  Pscore = 0;
}

function draw() {
  background(255);
  console.log(gameState)

  if(gameState===2){
    score.visible=false;
  }
  
  if(gameState===2 && keyDown("space")||mousePressedOver(start)){
    start.visible=false;
    getReady.visible=false;
    gameState=1;
  } 
  
if(gameState===1){
score.visible=true;
   game.x = width/1.5
   game.y = height/1.2;

 if(mousePressedOver(S)){
     var s = createSprite(width/1.5,height/2)
     s.addImage(stone1I)
     var p1 =1
     var hand2 = createSprite(width/3,height/2);

    var rand = Math.round(random(1,3));
    switch(rand){
    case 1:  hand2.addImage(scissor2I);
             var p2 =1
    break;
    case 2:  hand2.addImage(papper2I);
             var p2 =2
    break;
    case 3:  hand2.addImage(stone2I);
              var p2 =3
    break;
    default:break;
}

    if(p1===1&&(p2===1||p2==2)){
     gameState=POINT1;
    }
    if(p1===1&&p2==3){
      gameState = END;
    }
  }
  if(mousePressedOver(Sc)){
    var sc = createSprite(width/1.5,height/2)
     sc.addImage(scissor1I)
    Hand1();
    gameState=END;
   }
   if(mousePressedOver(P)){
    var p = createSprite(width/1.5,height/2)
    p.addImage(papper1I)
    Hand2();
    gameState=END;
    
   }
}
drawSprites();
fill ("black")
text ("Score: "+ Pscore,width-100,height/4)
console.log(Pscore)
if(gameState === POINT1){
Pscore++;
gameState= END
}
if(Pscore ===5){
  gameState= OVER;
  gameOver.visible = true;
  score.visible=false
  text("You win", width/2,height/2)
  text("Press r to restart", width/2,height/2-100)
}
if(keyDown("r")&&gameState ===OVER && (Pscore ===5||Csore ===5)){
reset ()
}
if(gameState===END){
  textSize(20);
  text("Press Space for 2nd turn",width/2.5,height/3);
}
  if(keyDown("space")&&gameState===END){
   gameState = PLAY;
  }


}
function reset(){
  gameState = 2;
  Pscore = 0;
 Cscore = 0;
 gameOver.visible= false;

 start.visible=true;
 getReady.visible=true;
}
function Hand(){
  var hand2 = createSprite(width/3,height/2);

  var rand = Math.round(random(1,3));
switch(rand){
  case 1:  hand2.addImage(scissor2I);
  break;
  case 2:  hand2.addImage(papper2I);
  break;
  case 3:  hand2.addImage(stone2I);
  break;
  default:break;
}
  //console.log(rand)
}
function Hand1(){
  var hand3= createSprite(width/3,height/2);

  var rand1 = Math.round(random(1,3));
switch(rand1){
  case 1:  hand3.addImage(scissor2I);
  break;
  case 2:  hand3.addImage(papper2I);
  break;
  case 3:  hand3.addImage(stone2I);
  break;
  default:break;
}
 // console.log(rand1)
}
function Hand2(){
  var hand4 = createSprite(width/3,height/2);

  var rand2 = Math.round(random(1,3));
switch(rand2){
  case 1:  hand4.addImage(scissor2I);
  break;
  case 2:  hand4.addImage(papper2I);
  break;
  case 3:  hand4.addImage(stone2I);
  break;
  default:break;
}
  //console.log(rand2)
}

