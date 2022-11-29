var difference=0;
var leftWristX=0;
var rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);
    video.position(800,140);
    canvas=createCanvas(600,500);
    canvas.position(120,140);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    background(51,47,208);
    textSize(difference);
    fill("wheat");
    text("Aaryan",200,150);
}