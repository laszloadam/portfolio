

let diffiText = document.getElementById('diffiText');
let easy = document.getElementById('easy');
let hard = document.getElementById('hard');
let difficulty = document.getElementById('difficulty');


let codeArray = [];

function level(){
  difficulty.style.display ="block";
};

let decising = 1;

function easyst(){
  difficulty.style.display = "none";
  codeArray = [];
  randomCode();
  resetTips();
  decising = 1;
  diffiText.innerText = "Könnyű";
};
function middle(){
  difficulty.style.display = "none";
  codeArray = [];
  randomCode2();
  resetTips();
  decising = 2;
  diffiText.innerText = "Közepes";
};

function hardest(){
  difficulty.style.display = "none";
  codeArray = [];
  randomCode2();
  resetTips();
  decising = 3;
  diffiText.innerText = "Nehéz";
};




function randomCode(){
  while(codeArray.length < 5){
    let randomNumber = Math.floor(Math.random() * 10);
    let secretCodeX = codeArray.includes(randomNumber);
    if (secretCodeX == false){
      codeArray.push(randomNumber);
    }
  }
};


function randomCode2(){
  while(codeArray.length < 5){
    let randomNumber = Math.floor(Math.random() * 10);
    codeArray.push(randomNumber);
  }
};

 //let codeArray = [5, 6, 2, 8, 1];

let tipCol1 = document.getElementById('tip-col-1');
let tipCol2 = document.getElementById('tip-col-2');
let tipCol3 = document.getElementById('tip-col-3');
let tipCol4 = document.getElementById('tip-col-4');
let tipCol5 = document.getElementById('tip-col-5');
let tipCount = document.getElementById('tip-count');


function kiir(){
  document.getElementById("message").innerHTML = codeArray[0]+" "+codeArray[1]+" "+codeArray[2]+" "+codeArray[3]+" "+codeArray[4];
};


document.getElementById("message").innerHTML = 'Titkositva';

// A beírandó számok után egyből a következőre lép.

function autotab(original,destination){
    if (original.getAttribute&&original.value.length==original.getAttribute("maxlength"))
    destination.focus()
    };

// 1.1 Hányszor kattintottunk a "Küldés!" gombra    
var count = 0;

function start(){
    randomCode();
    
    //az input mezőkből összegyűjtöm az adatokat.
    var mycode1 = document.getElementById('one').value;
    var mycode2 = document.getElementById('two').value;
    var mycode3 = document.getElementById('three').value;
    var mycode4 = document.getElementById('four').value;
    var mycode5 = document.getElementById('five').value;
    
    // a sz@mokat beillesztem egy tömbbe. 
    
    let userCode = [mycode1, mycode2, mycode3, mycode4, mycode5];
    
    // Tipp lista létrehozása
    
    
    let subDiv1 = document.createElement('DIV');
    let subDiv2 = document.createElement('DIV');
    let subDiv3 = document.createElement('DIV');
    let subDiv4 = document.createElement('DIV');
    let subDiv5 = document.createElement('DIV');
    let subDivCount = document.createElement('DIV');
    let tipCol1 = document.getElementById('tip-col-1');
    let tipCol2 = document.getElementById('tip-col-2');
    let tipCol3 = document.getElementById('tip-col-3');
    let tipCol4 = document.getElementById('tip-col-4');
    let tipCol5 = document.getElementById('tip-col-5');
    let tipCount = document.getElementById('tip-count');

    
    
// "id"-t ad a subDiv-nek.
    
    subDiv1.setAttribute("id", "tip-row-1-"+(count));
    subDiv2.setAttribute("id", "tip-row-2-"+(count));
    subDiv3.setAttribute("id", "tip-row-3-"+(count));
    subDiv4.setAttribute("id", "tip-row-4-"+(count));
    subDiv5.setAttribute("id", "tip-row-5-"+(count));
    
    // Nehézségi szinttől függően vagy számot ír ki, vagy csak pöttyöt a visszajelző

    if (decising == 1 || 2){
      subDiv1.innerText = mycode1;
      subDiv2.innerText = mycode2;
      subDiv3.innerText = mycode3;
      subDiv4.innerText = mycode4;
      subDiv5.innerText = mycode5;
    } else {
      subDiv1.innerHTML = "&#9679;";
      subDiv2.innerHTML = "&#9679;";
      subDiv3.innerHTML = "&#9679;";
      subDiv4.innerHTML = "&#9679;";
      subDiv5.innerHTML = "&#9679;";
    }
    
// A visszajelző tetejére beszúrja a választ.
    tipCount.insertBefore(subDivCount, tipCount.childNodes[0]);
    tipCol1.insertBefore(subDiv1, tipCol1.childNodes[0]);
    tipCol2.insertBefore(subDiv2, tipCol2.childNodes[0]);
    tipCol3.insertBefore(subDiv3, tipCol3.childNodes[0]);
    tipCol4.insertBefore(subDiv4, tipCol4.childNodes[0]);
    tipCol5.insertBefore(subDiv5, tipCol5.childNodes[0]);
    
// Összehasonlítási folyamat.
    
    for(let n=1; n<=5; n++){
        if (userCode[n-1] == codeArray[n-1]){
            document.getElementById('tip-row-'+(n)+"-"+count).style.color = 'green'
        } else {
          for (i =1; i<=5;i++){
            if (userCode[n-1] == codeArray[i-1]){
          
          document.getElementById('tip-row-'+(n)+"-"+count).style.color = 'yellow'
            }
          } 
        }
    };

    // 1.2 Hányszor kattintottunk a "Küldés!" gombra
    count++;
    subDivCount.innerText = count+".";

    

    // Nyertél kiírás
    let winText = document.getElementById('winText')
    if (codeArray[0] == userCode[0] && codeArray[1] == userCode[1] && codeArray[2] == userCode[2] && codeArray[3] == userCode[3] && codeArray[4] == userCode[4]) {
      document.getElementById('win').style.display = "block";
      winText.innerHTML = count;
    };    
    
    // 1.1 El kell érni, hogy 5 számot muszály legyen beírni
};

// 1.1 Statisztika

let winPoint = 0;
let failPoint = 0;

//Új titkos kódot generál és nullázza a próbálkozásokat.

function resetTips(){
  tipCount.innerHTML = '';
  tipCol1.innerHTML = '';
  tipCol2.innerHTML = '';
  tipCol3.innerHTML = '';
  tipCol4.innerHTML = '';
  tipCol5.innerHTML = '';
  count = 0;
};

function again(){
  codeArray = [];
  if(decising == 1){
    randomCode()
  } else {
    randomCode2()
  };
  resetTips();
  document.getElementById('win').style.display = "none";
};

// 1.2 újra kezdett menetek növelése.

function fail(){
  failPoint++;
  document.getElementById('failPoint').innerText = failPoint;
};

// Nyerés esetén új kódot generál, nullázza az eddigi próbákat és növeli a "Nyert" statisztikát.

function winQuit(){
  again();
  winPoint++;
  document.getElementById('winPoint').innerText = winPoint;
};

// 1.1 Súgó / nyitás

function helping(){
  document.getElementById('helpText').style.display = "block";
};

// 1.2 Súgó / zárás

function helpQuit(){
  document.getElementById('helpText').style.display = "none";
};

// Visszajelzés küldése

function mailTo(){
  document.getElementById('feedback').style.display = "block";
};

function closeMail(){
  document.getElementById('feedback').style.display = "none";
};
function closeDif(){
  difficulty.style.display = "none";
};


