function preload(){
    img=loadImage("1C6639340-google-logo.jpg")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
}

function draw(){
    fill("red")
    circle(480,50,80)
    circle(50,50,80)
    circle(50,420,80)
    circle(480,420,80)
    fill("green")
    stroke("green")
    rect(90,40,350,10)
    rect(60,40,10,350)
    rect(480,40,10,350)
    rect(90,420,350,10)
   image(img,250,250,40,40)

}