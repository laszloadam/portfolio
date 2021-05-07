console.log("Hello");

let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');
let cell9 = document.getElementById('cell-9');
let allCell = document.querySelectorAll('.cells');
//allCell = Array.from(allCell);
let tableTd = document.getElementsByTagName('td');
let semmi = document.getElementById('semmi');

console.log(semmi.textContent)

let randomN = (Math.floor(Math.random() * 8)+1);
let randomCell = document.getElementById('cell-'+randomN);



 function playerStep(cellNumber) {
  cellNumber.innerText = 'X';
  cellNumber.style.color = '#0000FF';
};

function robotStep() {
  randomN = (Math.floor(Math.random() * 8)+1);
  randomCell = document.getElementById('cell-'+randomN);
  while(randomCell.textContent == ''){
    randomCell.innerText = 'O';
    randomCell.style.color = '#FF0000';
    randomN = (Math.floor(Math.random() * 8)+1);
  } 
};



steps = function(){
  if(this.textContent == ''){
    playerStep(this);
    robotStep();
  } else {}
};


cell1.addEventListener('click', steps);
cell2.addEventListener('click', steps);
cell3.addEventListener('click', steps);
cell4.addEventListener('click', steps);
cell5.addEventListener('click', steps);
cell6.addEventListener('click', steps);
cell7.addEventListener('click', steps);
cell8.addEventListener('click', steps);
cell9.addEventListener('click', steps);


// cell2.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell3.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell4.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell5.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell6.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell7.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell8.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };
// cell9.onclick = function() {
//   if(this.textContent == ''){
//     playerStep(this);
//     robotStep()
//   } else {}
// };

// tableTd.onclick = function (){
//   console.log(cell1.textContent + cell2.textContent + cell3.textContent)
// };



// if(cell1.textContent && cell2.textContent && cell3.textContent == 'X'){
//   alert('Nyertél!')
// } else {}
