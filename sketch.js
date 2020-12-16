var fixedRect, movingRect;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(600, 200, 80, 30);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(100, 300, 50, 80);
 movingRect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/ 2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}