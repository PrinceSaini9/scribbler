var signupid = document.getElementById("signupid");
var signinid = document.getElementById("signinid");
var icon = document.getElementById("icon");
var iconin = document.getElementById("iconin");
var iconpost = document.getElementById("iconpost");
var postid = document.getElementById("postid");
var backtosignup = document.getElementById("backtosignup");
var overlay = document.getElementById("over");
var createid = document.getElementById("createid");

function signuppage(){
    signupid.classList.add("animationtop");
    postid.style.top="-400px";
    signinid.classList.remove("animationtop");
    createid.classList.remove("animationtop");
    overlay.classList.add("overlay");
}
function signinpage(){
    signinid.classList.add("animationtop");
    postid.style.top="-400px";
    signupid.classList.remove("animationtop");
    createid.classList.remove("animationtop");
    overlay.classList.add("overlay");
}
function createpostpage(){
    createid.classList.add("animationtop");
    postid.style.top="-400px";
    signupid.classList.remove("animationtop");
    signinid.classList.remove("animationtop");
    overlay.classList.add("overlay");
}
function close(){
    signupid.classList.remove("animationtop");
    signinid.classList.remove("animationtop");
    createid.classList.remove("animationtop");
    postid.style.top="50%";
    overlay.classList.remove("overlay");
}
icon.addEventListener('click',close);
iconin.addEventListener('click',close);
iconpost.addEventListener('click',close);
backtosignup.addEventListener('click',signuppage);