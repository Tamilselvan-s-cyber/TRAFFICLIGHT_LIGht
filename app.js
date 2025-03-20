var redl=document.getElementById("red");
var yellowl=document.getElementById("yellow");
var greenl=document.getElementById("green");

function resetlight(){
redl.classList.remove("redch");
yellowl.classList.remove("yellowch");
greenl.classList.remove("greench");
}


function redon(){
    resetlight();
    redl.classList.add("redch");
}

function yellowon(){
    resetlight();
    yellowl.classList.add("yellowch");
}

function greenon(){
    resetlight();
    greenl.classList.add("greench");
}