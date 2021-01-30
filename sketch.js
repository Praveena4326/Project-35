//Create variables here
var dog, happyDog, database, foodS, foodStock;
var canvas;
var dogImg, happyDogImg

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  canvas = createCanvas(700, 500);
  database = firebase.database();
  dog = createSprite(320,300,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.3
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
   foodS = writeStock(foodS);
    dog.addImage(happyDogImg);
  }


  drawSprites();
  //add styles here
  textSize(20)
  fill("red")
  stroke("white")
  
  text("Press the UP ARROW key to feed LUCY milk!!",150,50);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x)
{

  if(x<=0){
    x=0;
  
  }

  else{
    x = x+1
  }
  database.ref('/').update({
    Food:x
  })
}


