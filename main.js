object = [];
img="";
status="";
function setup(){
    canvas = createCanvas(400,400)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400)
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Baby";
}
function modelLoaded(){
    console.log("model loaded!");
    status=true;
    objectDetector.detect(video,gotResult)
}
function draw(){
    image(video,0,0,400,400);
    if (status !="",object[i].label ="person")
    {
      objectDetector.detect(video,gotResult);
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status : Baby detected";
            fill("#ff0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("#ff0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height); 
        }
    } else {
        document.getElementById("status").innerHTML="Status : Baby not detected";
    }
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    object = results;
}