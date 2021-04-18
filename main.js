var SpeechRecognition= window.webkitSpeechRecognition;
var r= new SpeechRecognition();
function start() {
    document.getElementById("textarea").value="";
    r.start();
}
r.onresult=function(event) {
    console.log(event);
con=event.results[0][0].transcript;
document.getElementById("textarea").value=con;
console.log(con);
if (con=="take my selfie") {
    console.log("taking your selfie");
    speak();   
}
}

function speak() {
   var synth=window.speechSynthesis;
gety="Taking your selfie in 5 seconds";
ut=new SpeechSynthesisUtterance(gety);
synth.speak(ut);
Webcam.attach(camera); 
setTimeout (function() {
    v();
    save();   
},5000
);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90 

});

function v() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML="<img id='selfie_img' src=" +data_uri+ ">";
    })
}

function save() {
    link=document.getElementById("link");
    imgg=document.getElementById("selfie_img").src ;
    link.href=imgg;
    link.click();
}