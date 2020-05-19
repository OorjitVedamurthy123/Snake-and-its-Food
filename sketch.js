var ball;

var food;
var appleIMG
var pillar1,pillar2,pillar3,pillar4;
var score = 0;
function preload() {
    appleIMG = loadImage("apple.png");
    
}
function setup(){
    
    
    createCanvas(1356,572);
    ball = createSprite(650,450,20,20);
    
    food = createSprite(300,200,10,10);
    pillar1 = createSprite(5,286,10,572);
    pillar2 = createSprite(1351,286,10,572);
    pillar3 = createSprite(670,5,1356,10);
    pillar4 = createSprite(670,567,1356,10);
    food.addImage(appleIMG);
    food.scale = 0.05;

    console.log(ball);
    createEdgeSprites();
    ball.shapeColor = "green";
  
}

function draw(){
    
    background("black");
    textSize(20);
    text("Make 25 points to win",100,60);
    text("↤ Careful",10,300);
    text("Careful ↦",1256,300);
    text("↥",650,25);
    text("Careful",625,40);
    text("↧",650,557);
    text("Careful",625,538);
    text("Score :" + score,1200,50);

    pillar1.shapeColor = "blue " ;
    pillar2.shapeColor = "blue";
    pillar3.shapeColor = "blue";
    pillar4.shapeColor = "blue";

        
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-20,0);
        ball.rotation = 0;
        text("↤ Careful",10,300).visible = false;
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(20,0);
        ball.rotation = 0;
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-20);
        ball.rotation = 90;
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+20);
        ball.rotation = 90;
    }
    if(ball.collide(food)){
        
        ball.width = ball.width + 10
       
        food.x = random(20,1346);
        food.y = random(20,562);
        score = score + 1;
    }
    if(ball.collide(pillar1) || ball.collide(pillar2)|| ball.collide(pillar3) || ball.collide(pillar4)){
       
        background("red");
        textSize(50)
        fill("blue");
        text("Game Over",500,300);
        text("Better luck next time",410,360)
        ball.position = static;
        
       
    }
    if(score === 25 ){
        background("green")
        textSize(50)
        fill("orange");
        text("Victory",570,300);
        ball.position = static;
    }
    

    
    
    

    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
   
}
