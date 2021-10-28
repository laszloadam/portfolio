let main = document.getElementById("window");
let error = document.getElementById("error");





function minimal(){
    main.classList.toggle("minimal")
}

function full(){
    //alert("Kilépés megtagadva");
    error.style.display = "block";
    setTimeout(function(){
        error.style.display = "none";
    }, 1500);
}

function closed(){
    //alert("Kilépés megtagadva");
    error.style.display = "block";
    setTimeout(function(){
        error.style.display = "none";
    }, 1500);
}