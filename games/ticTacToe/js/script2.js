let cells = document.querySelectorAll('.cells');
cells = Array.from(cells);

let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');
let cell9 = document.getElementById('cell-9');
let button = document.getElementById('btn');


playerArray = [];
botArray = [];


// const randomSymbol = (ezaz) => {
//     ezaz.innerText = 'X';
//     if(cells.length > 0) {
//         const random = Math.floor(Math.random() * cells.length);
//         cells[random].textContent = 'O';
//         cells[random].style.color = '#FF0000';
//         cells.splice(random, 1);
//         console.log(cells[random]);
//     }
// };

botSymbol = (x) => {
    x.innerText = "O";
    x.style.color = "red"
}


//addEventListener('click', randomSymbol(cell1));

cell1.addEventListener("click", function event1(){
    this.innerText = 'X';
    this.style.color= 'blue';
    playerArray.push(this);
    botSymbol(document.getElementById('cell-'+(Math.floor(Math.random() * cells.length))))
});


