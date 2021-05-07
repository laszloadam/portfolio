
let result = document.getElementById('result');
let infoBox = document.getElementById('infoBox');
let playerScore = 0;
let botScore = 0;


function infoOpen(){
    infoBox.style.display = 'block'
};
function infoClosed(){
    infoBox.style.display = 'none'
};

function botPlay(value){
    result.innerText ='';
    let randomNumber = Math.floor(Math.random()*3)+1;
    // console.log(value+':'+randomNumber);
    if (value == randomNumber){
        result.innerHTML = '<h2>Döntetlen!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/'+value+'.png" alt="player"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/'+randomNumber+'.png" alt="bot"></fieldset></div>'
    } else if (value == 1 && randomNumber == 2) {
        botScore++;
        result.innerHTML = '<h2>Ön vesztett!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/1.png" alt="stone"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/2.png" alt="paper"></fieldset></div>'
    } else if (value == 1 && randomNumber == 3) {
        playerScore++;
        result.innerHTML = '<h2>Ön nyert!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/1.png" alt="stone"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/3.png" alt="scissor"></fieldset></div>'
    } else if (value == 2 && randomNumber == 3) {
        botScore++;
        result.innerHTML = '<h2>Ön vesztett!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/2.png" alt="paper"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/3.png" alt="scissor"></fieldset></div>'
    } else if (value == 2 && randomNumber == 1) {
        playerScore++;
        result.innerHTML = '<h2>Ön nyert!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/2.png" alt="paper"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/1.png" alt="stone"></fieldset></div>'
    } else if (value == 3 && randomNumber == 1) {
        botScore++;
        result.innerHTML = '<h2>Ön vesztett!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/3.png" alt="scissor"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/1.png" alt="stone"></fieldset></div>'
    } else if (value == 3 && randomNumber == 2) {
        playerScore++;
        result.innerHTML = '<h2>Ön nyert!</h2><div><fieldset class="resultHand"><legend>Játékos</legend><img src="src/3.png" alt="scissor"></fieldset><div id="score">'+playerScore+':'+botScore+'</div><fieldset class="resultHand"><legend>Gép</legend><img src="src/2.png" alt="paper"></fieldset></div>'
    }
};

function playStone() {
    botPlay(1);
};
function playPaper() {
    botPlay(2);
};
function playScissor() {
    botPlay(3);
};
