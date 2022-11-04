var SpeechRecognition= window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
document.getElementById("textbox").innerHTML=""
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript
    console.log(content);
    
    document.getElementById("textbox").innerHTML=content;
    if(content =="take my selfie") {
        console.log("taking selfie");
        speak();
    }

}

function speak() {
    synth= window.speechSynthesis;
    var speak_data = "Taking Your Selfie In 5 Seconds";

     var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    
    setTimeout(function() {
        img_id = "selfie1";
        take_snapshot();
        save();
    }, 5000);

    setTimeout(function() {
        img_id = "selfie2";
        take_snapshot();
        save();
    }, 10000);

    setTimeout(function() {
        img_id = "selfie3";
        take_snapshot();
        save();
    }, 15000);
}

Webcam.set ({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    console.log(img_id)
   Webcam.snap(function(data_url) {
    if(img_id=="selfie1") {
        document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_url+'"/>';
    }
    if(img_id=="selfie2") {
        document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_url+'"/>';
    }
    if(img_id=="selfie3") {
        document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_url+'"/>';
    }
   });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie1").src ; 
    link.href= image;
    link.click();

    link = document.getElementById("link");
    image = document.getElementById("selfie2").src ; 
    link.href= image;
    link.click();

    link = document.getElementById("link");
    image = document.getElementById("selfie3").src ; 
    link.href= image;
    link.click();
}