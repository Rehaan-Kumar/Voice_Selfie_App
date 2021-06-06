var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        speech();
    }
}

function speech() {
    var synth = window.speechSynthesis;
    var command = "Taking your Selfie in 5, 4, 3, 2, 1";
    var utter_this = new SpeechSynthesisUtterance(command);
    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
    },5000)
}

camera = document.getElementById("camera");

Webcam.set({
    height: 250,
    width: 310,
    image_format: "jpeg",
    jpeg_quality: 100
})

function take_snapshot() {
    Webcam.snap(function(img_url){
        document.getElementById("result").innerHTML = "<img id = 'image' src = "+img_url+">";
    })
    save()
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("image").src;
    link.href = image;
    link.click();
}