let buttons = document.getElementsByClassName("item");

let sounds = [
    "sounds/workIt.mp3",
    "./sounds/makeIt.mp3",
    "./sounds/doIt.mp3",
    "./sounds/makesUs.mp3",
    "./sounds/harder.mp3",
    "./sounds/better.mp3",
    "./sounds/faster.mp3",
    "./sounds/stronger.mp3",
    "./sounds/moreThan.mp3",
    "./sounds/hour.mp3",
    "./sounds/our.mp3",
    "./sounds/never.mp3",
    "./sounds/ever.mp3",
    "./sounds/after.mp3",
    "./sounds/workIs.mp3",
    "./sounds/over.mp3"
];

let soundsKey = {
    q:"sounds/workIt.mp3",
    w:"./sounds/makeIt.mp3",
    e:"./sounds/doIt.mp3",
    r:"./sounds/makesUs.mp3",
    t:"./sounds/harder.mp3",
    a:"./sounds/better.mp3",
    s:"./sounds/faster.mp3",
    d:"./sounds/stronger.mp3",
    f:"./sounds/moreThan.mp3",
    g:"./sounds/hour.mp3",
    y:"./sounds/our.mp3",
    x:"./sounds/never.mp3",
    c:"./sounds/ever.mp3",
    v:"./sounds/after.mp3",
    b:"./sounds/workIs.mp3",
    n:"./sounds/over.mp3"
};


function highlight(){
    this.classList.add("click");
     setTimeout(function(){
         for(var n = 0 ; n < buttons.length; n++){
             buttons[n].classList.remove("click")
         };
     }, 100)
};

function playSound(x){
    const audio = new Audio();
    audio.src =sounds[x];
    audio.play()
}



for (var i = 0 ; i < buttons.length; i++) { 
    buttons[i].addEventListener('click' ,  highlight);
 }

 document.addEventListener('keydown', logKey);

 function logKey(e){
     if(e.key=undefined){
         console.log("nincs ilyen")
     }
    const audio = new Audio();
    audio.src =soundsKey[e.key];
    audio.play()
 }