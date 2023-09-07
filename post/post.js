var edit = document.querySelector(".edit");
var like = document.querySelector(".like");
var title = document.querySelector(".title");
var content = document.querySelector(".content");
var likes = document.querySelector(".likesnum");
var com = document.querySelector(".comments");
var update = document.querySelector(".update");
var updated = document.querySelector(".updated");

var save = true;
var count =0;

function fun(){
    if(save){
        edit.innerHTML="Save <i class='fa-solid fa-floppy-disk'></i>";
        title.style.border="1px solid pink";
        content.style.border="1px solid pink";
        update.innerHTML="";
        updated.innerHTML="";
        content.contentEditable = "true";
        save = false;
    }
    else{
        edit.innerHTML="Edit <i class='fa-sharp fa-solid fa-pen-to-square'></i>"
        title.style.border="0px";
        content.style.border="0px";
        update.innerHTML="UPDATED: ";
        updated.innerHTML="UPDATED:<br>";
        content.contentEditable = "false";
        save=true;
    }
}
function fun1(){
    count++;
    like.innerHTML="<i class='fa-solid fa-thumbs-up'></i> Liked"
    likes.innerHTML=`${count} person likes this!`;
}
function fun3(comment){
    com.innerHTML=`<div class="first">${comment.value}</div>`+com.innerHTML;
}
edit.addEventListener('click',fun);
like.addEventListener('click',fun1);

