Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});

camerea=document.getElementById("camera");
webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(dat_uri){
        document.getElementById("result").innerHTML='img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version is ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s3-MHcuk9/model.json", modelLoaded);