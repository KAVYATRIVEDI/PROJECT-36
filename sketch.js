var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
dog=loadImage ("dogImg.png");
dogHappy=loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(49,137,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}

  drawSprites();
  

}



