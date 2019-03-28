let imagemAtual = 0;
let imagens2=["jb.png","CS_red.png","CS_red.png", "bi_silque.png", "ESAlogoVert.png", "ESAlogoVert.png", "outsystems.png", "ipdj.png",];
let imagens=["BorgWarner.jpg","FCTUC.png","Martifer_logo.png","BoldbyDevoteam_logo.png","skyline.png", "delloite.png", "Mercedes_Benz_io.png"];


function slider() {
    document.slide.src=imagens[imagemAtual];
    document.slide2.src=imagens2[imagemAtual];

    imagemAtual = imagemAtual + 1;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }


}
setInterval(slider,1800);

var myVideo = document.getElementById("video");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}
function soundOnOFF() {
    if (myVideo.volume==0)
        myVideo.volume=1;
    else
        myVideo.volume=0;
}


var coll = document.getElementsByClassName("extensivel");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "inline-flex") {
            content.style.display = "none";
        } else {
            content.style.display = "inline-flex";
        }
    });
}

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}
let info= document.getElementById("subscriptionBox");
function showAlert() {
    info.style.opacity="1";
    info.style.display="unset";

}
