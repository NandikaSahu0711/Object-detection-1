img="";
status = "";

function preload(){
    img = loadImage('working_table.jpeg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Desktop", 45, 30);
    noFill();
    stroke("#FF0000");
    rect(30, 10, 450, 50);

    fill("#FF0000");
    text("Keyboard", 195, 150);
    noFill();
    stroke("#FF0000");
    rect(190, 130, 200, 90); 

    fill("#FF0000");
    text("Mobile", 500, 150);
    noFill();
    stroke("#FF0000");
    rect(490, 130, 50, 90); 

    fill("#FF0000");
    text("Mouse", 450, 260);
    noFill();
    stroke("#FF0000");
    rect(446, 230, 50, 90); 

    fill("#FF0000");
    text("Book and Pen", 250, 270);
    noFill();
    stroke("#FF0000");
    rect(246, 250, 150, 130);

    
    fill("#FF0000");
    text("Ipad", 70, 170);
    noFill();
    stroke("#FF0000");
    rect(51, 120, 130, 170);
}
