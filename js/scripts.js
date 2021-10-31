
//kinyitja a bal oldali beállításokat
function optOpen() {
    let submenu = document.getElementById("submenu");
    
    if (submenu.style.width === "0em"){
        submenu.style.width = "6em";
   } else {
       submenu.style.width = "0em";
   }
}


//document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

function blue() {
    document.documentElement.style.setProperty('--mainColor', '#09a8d8');
    document.documentElement.style.setProperty('--secondColor', '#137998');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_blue.png')";
    
};
function red() {
    document.documentElement.style.setProperty('--mainColor', '#ff1f1f');
    document.documentElement.style.setProperty('--secondColor', '#cc0000');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_red.png')";
};
function green() {
    document.documentElement.style.setProperty('--mainColor', '#18bb34');
    document.documentElement.style.setProperty('--secondColor', '#008000');
    document.getElementById("content").style.backgroundImage = "url('pics/cont_bg_green.png')";
};
