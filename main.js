Webcam.set({
    window:350,
    Height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vhAPJZuiy/model.json',modellLoaded);
function modelLoaded() {
    console.log('¡modelo cargado!');
}

function check()
{
    img = document.getElementById('captured_image');
    Classifier.classify(img, gotResult);
}


function gotResult(error, results) {
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result object_name").innerHTML = results[0].label;
        document.getElementById("result object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}