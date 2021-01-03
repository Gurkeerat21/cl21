function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(350,200,20,10)
  fixedrect.shapeColor="green"
  movingrect=createSprite(470,200,20,10)
  movingrect.shapeColor="green"
  thing=createSprite(200,200,20,20)
  thing.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
if (isTouching(movingrect,thing))
{thing.shapeColor="red"
movingrect.shapeColor="red"

}
else{thing.shapeColor="blue"
movingrect.shapeColor="green"

}
}
function isTouching(object1,object2){
  if(object2.x - object1.x <object2.width/2 + object1.width/2
    && object1.x - object2.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y <  object2.height/2 + object1.height/2
    ){
     return true; 
    }
    else{
      return false;
    }
}