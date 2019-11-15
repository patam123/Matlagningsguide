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
}
function setFooterDate() {
    document.getElementById("footerText").innerHTML = "| senast uppdaterad: 15/11/2019"


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

    }
    else {
        document.getElementById("containerClass").className = "containerNormal";
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (disabled)";
        document.getElementById("footerClass").className = "normalModeFooter";


    }
}

function setClass() {
    if (enabled === "true") {
        document.getElementById("containerClass").className = "containerNormal";
        localStorage.setItem('enabled', "false");
        enabled = localStorage.getItem('enabled');
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (disabled)";
        document.getElementById("footerClass").className = "normalModeFooter";


    }
    else {
        document.getElementById("containerClass").className = "containerDarkMode";
        localStorage.setItem('enabled', "true");
        enabled = localStorage.getItem('enabled');
        document.getElementById("nightModeBtn").innerHTML = "Night Mode (enabled)";
        document.getElementById("footerClass").className = "darkModeFooter";
    }
}
