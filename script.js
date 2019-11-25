function setValue() {
    if (sessionStorage.getItem('seconds') == null && sessionStorage.getItem('minutes') == null) {
        sessionStorage.setItem('seconds', parseInt(0));
        sessionStorage.setItem('minutes', parseInt(0));
    }
    else {
        var i = sessionStorage.getItem('seconds');
        var m = sessionStorage.getItem('minutes');
        if (i < 10 && m < 10) {
            document.getElementById("timer").innerHTML = "0" + m + ":0" + i;
        }
        else if (i >= 10 && m < 10) {
            document.getElementById("timer").innerHTML = "0" + m + ":" + i;
        }
        else if (i < 10 && m >= 10) {
            document.getElementById("timer").innerHTML = m + ":0" + i;
        }
        else {
            document.getElementById("timer").innerHTML = m + ":" + i;
        }
    }
}

function incrementPerSecond() {
    var i = sessionStorage.getItem('seconds');
    var m = sessionStorage.getItem('minutes');
    if ((i++) >= parseInt(59)) {
        m++;
        i = 0;
        sessionStorage.setItem('seconds', i);
        sessionStorage.setItem('minutes', m);
        if (i < 10 && m < 10) {
            document.getElementById("timer").innerHTML = "0" + m + ":0" + i;
        }
        else if (i >= 10 && m < 10) {
            document.getElementById("timer").innerHTML = "0" + m + ":" + i;
        }
        else if (i < 10 && m >= 10) {
            document.getElementById("timer").innerHTML = m + ":0" + i;
        }
        else {
            document.getElementById("timer").innerHTML = m + ":" + i;
        }
    }
    else {
        sessionStorage.setItem('seconds', i);
        if (i < 10 && m < 10) {
            document.getElementById("timer").innerHTML = "0" + m + ":0" + i;
        }
        else if (i >= 10 && m < 10) {
            document.getElementById("timer").innerHTML = "0" + m + ":" + i;
        }
        else if (i < 10 && m >= 10) {
            document.getElementById("timer").innerHTML = m + ":0" + i;
        }
        else {
            document.getElementById("timer").innerHTML = m + ":" + i;
        }
    }
}
window.setInterval(function () {
    incrementPerSecond();
}, 1000);
function start() {
    setFooterDate();
    setValue();
    onLoad();
    setFontComicSansOnLoad();
}
function setFooterDate() {
    document.getElementById("footerText").innerHTML = "| senast uppdaterad: 22/11/2019"


}
var comicSans;

function setFontComicSansOnLoad(){
    if (localStorage.getItem('comicSans') === null) {
        localStorage.setItem('comicSans', "false");
        comicSans = localStorage.getItem('comicSans');
        setFontComicSans();
    }

    else {
        comicSans = localStorage.getItem('comicSans');
        setFontComicSans();
    }

}
function setFontComicSans(){
    if (comicSans === "true"){
        document.body.style.fontFamily = "Comic Sans MS";
        document.getElementById("leftText").style.fontSize = "16px";
    }
    else{
        document.body.style.fontFamily = "Times New Roman";
        document.getElementById("leftText").style.fontSize = "18px";

    }
}
function setFontStyle(){
    if (comicSans === "true") {
        localStorage.setItem('comicSans', "false");
        comicSans = localStorage.getItem('comicSans');
        setFontComicSans();


    }
    else {
        localStorage.setItem('comicSans', "true");
        comicSans = localStorage.getItem('comicSans');
        setFontComicSans();
    }
}
var enabled;

function onLoad() {
    if (localStorage.getItem('enabled') === null) {
        localStorage.setItem('enabled', "false");
        enabled = localStorage.getItem('enabled');
        setClassOnLoad();
    }

    else {
        enabled = localStorage.getItem('enabled');
        setClassOnLoad();
    }
}


function setClassOnLoad() {
    if (enabled === "true") {
        document.getElementById("containerClass").className = "containerDarkMode";
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (enabled)";
        document.getElementById("footerClass").className = "darkModeFooter";
        document.getElementById("head").className = "headDarkMode";


    }
    else {
        document.getElementById("containerClass").className = "containerNormal";
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (disabled)";
        document.getElementById("footerClass").className = "normalModeFooter";
        document.getElementById("head").className = "headNormal";



    }
}

function setClass() {
    if (enabled === "true") {
        document.getElementById("containerClass").className = "containerNormal";
        localStorage.setItem('enabled', "false");
        enabled = localStorage.getItem('enabled');
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (disabled)";
        document.getElementById("footerClass").className = "normalModeFooter";
        document.getElementById("head").className = "headNormal";
    }
    else {
        document.getElementById("containerClass").className = "containerDarkMode";
        localStorage.setItem('enabled', "true");
        enabled = localStorage.getItem('enabled');
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (enabled)";
        document.getElementById("footerClass").className = "darkModeFooter";
        document.getElementById("head").className = "headDarkMode";

    }
}
