let main = document.getElementById("window");
let error = document.getElementById("error");





function minimal(){
    main.classList.toggle("minimal")
    main.childNodes[15].childNodes[3].childNodes[1].style.display='none'
    main.childNodes[15].childNodes[3].childNodes[5].style.display='none'
}

function full(){
    if(main.className == 'minimal') {
        main.classList.toggle("minimal")
    main.childNodes[15].childNodes[3].childNodes[1].style.display='flex'
    main.childNodes[15].childNodes[3].childNodes[5].style.display='flex'
    }
}

function closeX(){
    //alert("Kilépés megtagadva");
    error.style.display = "block";
    setTimeout(function(){
        error.style.display = "none";
    }, 1500);
}