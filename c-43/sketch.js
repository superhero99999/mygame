var wolf ,wolf1,wolf2,wolf3,wolf4

function preload(){
    wolf1=loadAnimation("l1.png")
    wolf2=loadAnimation("l1.png","l2.png","l3.png","l4.png")

}

function setup(){
    createCanvas(800,800)
    wolf=createSprite(400,380)
    wolf.addAnimation("left",wolf1)
    wolf.scale=0.1


var cardboard1 = createSprite(55,20,13,95);
var cardboard2 = createSprite(30,105,160,13);
var cardboard3 = createSprite(105,120,13,90);
var cardboard4 = createSprite(131,35,65,13);
var cardboard5 = createSprite(157,80,13,85);
var cardboard6 = createSprite(135,159,60,13);
var cardboard7 = createSprite(50,175,13,60);
var cardboard8 = createSprite(75,200,60,13);
var cardboard9 = createSprite(250,35,85,13);
var cardboard10 = createSprite(290,30,13,85);
var cardboard11 = createSprite(350,48,13,50);
var cardboard12 = createSprite(380,67,60,13);
var cardboard13 = createSprite(200,80,90,13);
var cardboard14 = createSprite(158,180,13,55);
var cardboard15 = createSprite(238,100,13,45);
var cardboard16 = createSprite(287,120,110,13);
var cardboard17 = createSprite(98,255,13,100);
var cardboard18 = createSprite(6,255,95,13);
var cardboard19 = createSprite(75,300,60,13);
var cardboard20 = createSprite(50,330,13,70);
var cardboard21 = createSprite(75,360,60,13);
var cardboard22 = createSprite(150,255,115,13);
var cardboard23 = createSprite(180,202,50,13);
var cardboard24 = createSprite(198,165,13,85);
var cardboard25 = createSprite(295,190,13,135);
var cardboard26 = createSprite(220,160,40,13);
var cardboard27 = createSprite(380,185,70,13);
var cardboard28 = createSprite(350,220,13,75);
var cardboard29 = createSprite(250,315,13,200);
var cardboard30 = createSprite(318,250,60,13);
var cardboard31 = createSprite(160,355,13,95);
var cardboard32 = createSprite(220,350,50,13);
var cardboard33 = createSprite(345,300,110,13);
var cardboard34 = createSprite(370,335,60,13);
var cardboard35 = createSprite(345,320,13,40);
var cardboard36 = createSprite(295,370,13,65);
var cardboard37 = createSprite(310,370,40,13);

cardboard1.shapeColor = "magenta";
cardboard2.shapeColor = "teal";
cardboard3.shapeColor = "orange";
cardboard4.shapeColor = "red";
cardboard5.shapeColor = "red";
cardboard6.shapeColor = "orange";
cardboard7.shapeColor = "purple";
cardboard8.shapeColor = "purple";
cardboard9.shapeColor = "blue";
cardboard10.shapeColor = "blue";
cardboard11.shapeColor = "cyan";
cardboard12.shapeColor = "cyan";
cardboard13.shapeColor = "red";
cardboard14.shapeColor = "olive";
cardboard15.shapeColor = "red";
cardboard16.shapeColor = "brown";
cardboard17.shapeColor = "purple";
cardboard18.shapeColor = "cyan";
cardboard19.shapeColor = "brown";
cardboard20.shapeColor = "brown";
cardboard21.shapeColor = "brown";
cardboard22.shapeColor = "purple";
cardboard23.shapeColor = "olive";
cardboard24.shapeColor = "olive";
cardboard25.shapeColor = "brown";
cardboard26.shapeColor = "olive";
cardboard27.shapeColor = "orange";
cardboard28.shapeColor = "orange";
cardboard29.shapeColor = "teal";
cardboard30.shapeColor = "orange";
cardboard31.shapeColor = "red";
cardboard32.shapeColor = "teal";
cardboard33.shapeColor = "magenta";
cardboard34.shapeColor = "magenta";
cardboard35.shapeColor = "magenta";
cardboard36.shapeColor = "olive";
cardboard37.shapeColor = "olive";

}
function draw(){
    background(180)
    
    drawSprites()
    if (keyWentDown(LEFT_ARROW)) {
     wolf.x-=5
     wolf.addAnimation("left",wolf2)
    }
    else if(keyWentUp(LEFT_ARROW)){
    wolf.addAnimation("left",wolf1)

    }
}