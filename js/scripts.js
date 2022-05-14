//Téma szín

let theme = window.localStorage.getItem('theme');
console.log(theme);

if(theme != null) {
    document.documentElement.style.setProperty('--mainColor', theme)
}
else {
    document.documentElement.style.setProperty('--mainColor', '#18bb34');
    //document.documentElement.style.setProperty('--secondColor', '#008000');
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


//kinyitja a bal oldali beállításokat
function optOpen() {
    document.getElementById("submenu").style.transform="scale(1,1)";
}
function optClose() {
    document.getElementById("submenu").style.transform="scale(0,1)";

}


//document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

function blue() {
    window.localStorage.setItem('theme', '#09a8d8')
    document.documentElement.style.setProperty('--mainColor', '#09a8d8');
    document.documentElement.style.setProperty('--secondColor', '#137998');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_blue.png')";
    
};
function red() {
    window.localStorage.setItem('theme', '#ff1f1f')
    document.documentElement.style.setProperty('--mainColor', '#ff1f1f');
    document.documentElement.style.setProperty('--secondColor', '#cc0000');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_red.png')";
};
function green() {
    window.localStorage.setItem('theme', '#18bb34')
    document.documentElement.style.setProperty('--mainColor', '#18bb34');
    document.documentElement.style.setProperty('--secondColor', '#008000');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_green.png')";
};
