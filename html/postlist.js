var trash1 = document.querySelector(".trash1");
var trash2= document.querySelector(".trash2");
var trash3 = document.querySelector(".trash3");
var trash4 = document.querySelector(".trash4");
var trash5 = document.querySelector(".trash5");
var over = document.querySelector(".overlay");
var delet = document.querySelector(".delete");
var container = document.querySelector(".container");
var post1 = document.getElementById("post-html1");
var post2 = document.getElementById("post-html2");
var post3 = document.getElementById("post-html3");
var post4 = document.getElementById("post-html4");
var post5 = document.getElementById("post-html5");
var child;

center();
function center(){
    var count = container.childElementCount;
    var lastchild = container.lastElementChild;
    if(count==1){
        lastchild.style.position="relative";
        lastchild.style.left="26%";
        lastchild.style.width="42%";
    }
    else if(count%2!=0){
        lastchild.classList.add("center");
    }
    else{
        lastchild.classList.remove("center");
    }
}

function fun1(e){
    over.classList.add("over");
    delet.classList.add("animationtop");
    child = trash1.parentElement.parentElement.parentElement.parentElement;
}
function fun2(e){
    over.classList.add("over");
    delet.classList.add("animationtop");
    child = trash2.parentElement.parentElement.parentElement.parentElement;
}
function fun3(e){
    over.classList.add("over");
    delet.classList.add("animationtop");
    child = trash3.parentElement.parentElement.parentElement.parentElement;
}
function fun4(e){
    over.classList.add("over");
    delet.classList.add("animationtop");
    child = trash4.parentElement.parentElement.parentElement.parentElement;
}
function fun5(e){
    over.classList.add("over");
    delet.classList.add("animationtop");
    child = trash5.parentElement.parentElement.parentElement.parentElement;
}
var page = ()=>{
    window.location.href="../post/post.html";
}
trash1.addEventListener('click',fun1);
trash2.addEventListener('click',fun2);
trash3.addEventListener('click',fun3);
trash4.addEventListener('click',fun4);
trash5.addEventListener('click',fun5);
post1.addEventListener('click',page);
post2.addEventListener('click',page);
post3.addEventListener('click',page);
post4.addEventListener('click',page);
post5.addEventListener('click',page);

function no(){
    over.classList.remove("over");
    delet.classList.remove("animationtop");
}
function yes(){
    container.removeChild(child);
    no();
    center();
}
