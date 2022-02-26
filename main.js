function preload(){

}

function setup(){
 canvas= createCanvas(500 , 500);
 canvas.center();
 video= createCapture(VIDEO);
 video.hide();
 video.size(500 , 500);

 poseNet = ml5.poseNet( video , modelLoaded);
 poseNet.on( "pose" , gotpose);
}

function draw(){

     image(video , 0 , 0 , 500 , 500);

}

function take_snapshot(){
     save("My_Filter_image.png");
}

function modelLoaded(){

     console.log( "PoseNet Loaded and working..")
}

function gotpose(results){
    if(results.length>0){
       console.log(results);
       console.log( " X = " + results[0].pose.nose.x);
       console.log( " Y = " + results[0].pose.nose.y);
    }

}