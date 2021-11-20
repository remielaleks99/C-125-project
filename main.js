leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(650,70);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw(){
    background("#CCE6FF");
    document.getElementById("font_size").innerHTML = "Width and Height of the square will be - "+ difference + "px";
    textSize(difference);
    fill("#FF3787");
    text("Peter", 50, 400)
}