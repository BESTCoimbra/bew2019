let imagemAtual = 0;
let imagens=["Stratio_Automotive.png","BorgWarner.jpg","FCTUC.png","Martifer_logo.png","BoldbyDevoteam_logo.png","skyline.png", "delloite.png", "Mercedes_Benz_io.png", "TechnipFMC.PNG", "Innowave.png"];

let imagens2=["jb.png","logoDeec.gif","ipdj.png", "bi_silque.png", "ESAlogoVert.png", "outsystems.png", "ipdj.png", "logoDei.jpg", "CS_red.png","Navigator.png"];

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

let infoJobFair= document.getElementById("jobFairInfo");
function showJobFairInfo() {
    infoJobFair.style.opacity="1";
    infoJobFair.style.display="unset";

}
let infoWorkshopMercedes= document.getElementById("workshopMercedesInfo");
function showWorkMercedesInfo() {
    infoWorkshopMercedes.style.opacity="1";
    infoWorkshopMercedes.style.display="unset";

}
let infoFirstHandInvestigation= document.getElementById("firtsHandInvestigationInfo");
function showFirstHandInvestigationInfo() {
    infoFirstHandInvestigation.style.opacity="1";
    infoFirstHandInvestigation.style.display="unset";

}
let infoWorkRobotica= document.getElementById("workshopRoboticaInfo");
function showWorkshopRoboticaInfo() {
    infoWorkRobotica.style.opacity="1";
    infoWorkRobotica.style.display="unset";

}
let infoWorkCaseStudy= document.getElementById("caseStudyInfo");
function showWorkshopCaseStudyInfo() {
    infoWorkCaseStudy.style.opacity="1";
    infoWorkCaseStudy.style.display="unset";

}

let infoWorkTalkImpressao= document.getElementById("talkImpressão");
function showTalkImpressao() {
    infoWorkTalkImpressao.style.opacity="1";
    infoWorkTalkImpressao.style.display="unset";

}

let infoWorkArduino= document.getElementById("workshopArduinoInfo");
function showWorkArduino() {
    infoWorkArduino.style.opacity="1";
    infoWorkArduino.style.display="unset";

}

let infoWorkDeloitte= document.getElementById("workshopDeloitteInfo");
function showWorkDeloitte() {
    infoWorkDeloitte.style.opacity="1";
    infoWorkDeloitte.style.display="unset";

}

let infoWorkOutSystem = document.getElementById("workshopOutsystemInfo");
function showWorkOutSystems() {
    infoWorkOutSystem.style.opacity="1";
    infoWorkOutSystem.style.display="unset";

}

let infoSunset = document.getElementById("workshopSunsetInfo");
function showSunsetInfo() {
    infoSunset.style.opacity="1";
    infoSunset.style.display="unset";

}

let infoPitchSkyline = document.getElementById("pichtSkylineInfo");
function showPichtSkylineInfo() {
    infoPitchSkyline.style.opacity="1";
    infoPitchSkyline.style.display="unset";
}

let infoTalkCritical = document.getElementById("talkCriticalInfo");
function showtalkCriticalInfo() {
    infoTalkCritical.style.opacity="1";
    infoTalkCritical.style.display="unset";
}

let infoTalkOutSystem = document.getElementById("talkCompanyOutSystemsInfo");
function showtalkOutSystemsInfo() {
    infoTalkOutSystem.style.opacity="1";
    infoTalkOutSystem.style.display="unset";
}

let infoTalkSkyline = document.getElementById("talkSkylineInfo");
function showtalkSkylineInfo() {
    infoTalkSkyline.style.opacity="1";
    infoTalkSkyline.style.display="unset";
}

let infoTalkInnowave = document.getElementById("talkInnowaveInfo");
function showtalkInowaveInfo() {
    infoTalkInnowave.style.opacity="1";
    infoTalkInnowave.style.display="unset";
}

let infoTalkBorgWarner = document.getElementById("talkBorgWarnerInfo");
function showtalkBorgWanerInfo() {
    infoTalkBorgWarner.style.opacity="1";
    infoTalkBorgWarner.style.display="unset";
}

let infoTalkStratio = document.getElementById("talkStratioInfo");
function showtalkStratioInfo() {
    infoTalkStratio.style.opacity="1";
    infoTalkStratio.style.display="unset";
}

let infoTalkMartifer = document.getElementById("talkMartiferInfo");
function showtalkMartiferInfo() {
    infoTalkMartifer.style.opacity="1";
    infoTalkMartifer.style.display="unset";
}

let infoLunch = document.getElementById("LunchInfo");
function showLunchInfo() {
    infoLunch.style.opacity="1";
    infoLunch.style.display="unset";
}


