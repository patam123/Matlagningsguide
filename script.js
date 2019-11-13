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
}
function setFooterDate() {
        document.getElementById("footerText").innerHTML = "| senast uppdaterad: 08/11/2019"
    

}

function setColor() {
    if (document.body.style.color != "white") {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.color = "black";
        document.body.style.background="radial-gradient(circle, rgba(174, 238, 187, 1) 0%, rgba(148, 187, 233, 1) 100%)";
    }
}

function darkMode(){
    if(localStorage.getItem('enabled')===null)
    {
        localStorage.setItem('enabled',false)
    }
    var enabled = localStorage.getItem('enabled');

    if(enabled===false){
        document.getElementById("containerClass").className="containerDarkMode";
        localStorage.setItem('enabled',true);
    }
    else{
        document.getElementById("containerClass").className="containerNormal";
        localStorage.setItem('enabled',false);
    }

}
