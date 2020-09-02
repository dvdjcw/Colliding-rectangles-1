var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug = true;
  movingrect=createSprite(400,200,80,40);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
  {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }  
  else
  {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
  drawSprites();
}




