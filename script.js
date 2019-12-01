function setValue() {
    if (sessionStorage.getItem('seconds') == null && sessionStorage.getItem('minutes') == null) {
        sessionStorage.setItem('seconds', 0);
        sessionStorage.setItem('minutes', 0);
        incrementPerSecond();
    }
    else {
        incrementPerSecond();
    }
}

function incrementPerSecond() {
    var i = sessionStorage.getItem('seconds');
    var m = sessionStorage.getItem('minutes');
    if ((i++) >= 59) {
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
    document.getElementById("footerText").innerHTML = "| senast uppdaterad: 29/11/2019"
}
var comicSans;

//Kollar ifall värdet för key "comicSans" är null när skriptet laddas in. 
//Om värdet är null sätts värdet till false och sparar värdet i den globala variablen comicSans.
//Därefter körs skriptet för att sätta fonten.
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
//Sätter fonten till "Comic Sans MS" om comicSans har strängen "true" och byter storlek på fonten
// till 16px för att motsvara skillnaden i storlek mellan fontstilarna. Sätter annars fonten till
//Times New Roman med storlek 18px.
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
//Lagrar värdet för keyn comicSans och sparar undan detta i variabeln comicSans
// för att sedan köra skriptet där fontstilen sätts.
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
//Hämtar värdet för keyn enabled i localstorage och sparar i variabeln enabled.
//Kör sedan skript för att ladda in klasser till olika element.
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

//Sätter klassnamn på element, samt text på knapp vid inladdning.
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
//Om variabeln enabled har värdet "true", som en sträng, byter nedanstående element klassnamn
//och antar css för dessa klasser. Motsvarar defaultläge. Om enabled inte är true antar elementen
//klassnamn och tillhörande css som motsvarar "night mode".
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
