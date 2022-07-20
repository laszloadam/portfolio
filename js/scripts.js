//Téma szín

let theme = window.localStorage.getItem('theme');
let themeImg = window.localStorage.getItem('themeImg');
if(theme != null) {
    document.documentElement.style.setProperty('--mainColor', theme)
    document.getElementById("content").style.backgroundImage = "url('pics/"+themeImg+".png')";
}
else {
    document.documentElement.style.setProperty('--mainColor', '#18bb34');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_green.png')";
}

//pontozás a címben

let dots = document.getElementById("dots");

setInterval(
    () => {
        dots.innerHTML += '.';
        if (dots.innerText=='....') {
            dots.innerHTML = '';
        }
    }
, 1000)


//menü legörgetés
let menu = document.getElementById('navigation');

function menuOpen() {
    menu.style.height = 'fit-content'

};

window.addEventListener("resize", function () {
    if (window.innerWidth < 960) {
        menu.style.height = '42px'
    }
    else {
        menu.style.height = 'fit-content'
    }
});

function menuClose() {
    if (window.innerWidth < 960) {
        menu.style.height = '42px'
    }
    else {
        menu.style.height = 'fit-content'
    }
}




//kinyitja a bal oldali beállításokat
function optOpen() {
    document.getElementById("submenu").style.transform="scale(1,1)";
}
function optClose() {
    document.getElementById("submenu").style.transform="scale(0,1)";

}

function blue() {
    window.localStorage.setItem('theme', '#09a8d8');
    window.localStorage.setItem('themeImg', 'cont_bg_blue');
    document.documentElement.style.setProperty('--mainColor', '#09a8d8');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_blue.png')";
    
};
function white() {
    window.localStorage.setItem('theme', '#dbdbdb');
    window.localStorage.setItem('themeImg', 'cont_bg_white');
    document.documentElement.style.setProperty('--mainColor', '#dbdbdb');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_white.png')";
};
function green() {
    window.localStorage.setItem('theme', '#18bb34');
    window.localStorage.setItem('themeImg', 'cont_bg_green');
    document.documentElement.style.setProperty('--mainColor', '#18bb34');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_green.png')";
};

function downloadCV() {
    var element = document.createElement('a');
  element.setAttribute('href', '../src/Front-end_CV_magyar.pdf');
  element.setAttribute('download', 'László_Ádám_CV.pdf');
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}