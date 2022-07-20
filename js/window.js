let main = document.getElementById("window");
let minWin = document.getElementById("minWin");
let closeWin = document.getElementById("closeWin");
let error = document.getElementById("error");





function minimal(){
    main.classList.toggle("minimal");
    console.log(this.minWin);
    this.minWin.style.display='none'
    this.closeWin.style.display='none'
}

function full(){
    if(main.className == 'minimal') {
        main.classList.toggle("minimal")
    this.minWin.style.display='flex'
    this.closeWin.style.display='flex'
    }
}

function closeX(){
    //alert("Kilépés megtagadva");
    error.style.display = "block";
    setTimeout(function(){
        error.style.display = "none";
    }, 1500);
}