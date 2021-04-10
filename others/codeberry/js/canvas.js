var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');



var canvasWidth = canvas.width; 
var canvasHeight = canvas.height
//A fenti kódban a canvas szélességét és magasságát eltároltuk változókban, majd ezeket a változókat használtuk egy négyszög méretének a kiszámításához.

context.fillRect(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2);
//fekete négyszög, ami a canvas jobb alsó sarkát fedi le. Alkalmazkodik a canvas méretének változásaihoz.

context.fillStyle = 'orange';
context.fillRect(125,50,200,200);
//narancs négyszög, fix helyen, nem alkalmazkodik


context.beginPath();
context.moveTo(450,0);
context.lineTo(0,300);
//átlós vonal

context.strokeStyle = 'red';
context.stroke();
//átlós vonal színe



//--------------------------------------------------//
//Lejebb a 2. Canvas tartalma található


var canvas2 = document.getElementById('myCanvas2');
var context2 = canvas2.getContext('2d');


var size = 100;
var padding = 10;

context2.fillStyle = 'green';
context2.fillRect(canvasWidth - size - padding, canvasHeight - size - padding, size, size);
//Zöld négyszög bal alul

var positionX = canvasWidth / 2 - size * 0.75;
var positionY = canvasHeight / 2 - size * 0.75;

context2.fillStyle = 'rgba(255,0,0,.5)';
context2.fillRect(positionX, positionY, size, size);

positionX += size / 2;
positionY += size / 2;


context2.fillStyle = 'rgba(0,0,255,.5)'; // a szín módosításának mindig a fillRect() előtt kell lennie.
context2.fillRect(positionX, positionY, size, size);


//--------------------------------------------------//
//Lejebb a 3. Canvas tartalma található


var canvas3 = document.getElementById('myCanvas3');
var context3 = canvas3.getContext('2d');

context3.beginPath();
context3.moveTo(0,0);
context3.lineTo(canvasWidth,canvasHeight);
context3.moveTo(canvasWidth,0);
context3.lineTo(0,canvasHeight);
//átlós vonal



context3.strokeStyle = 'red';
context3.stroke();
//átlós vonal színe


var flagHeight = 50;
var flagWidth = 250;



var positionX3 = canvasWidth / 2 - flagWidth / 2;
var positionY3= canvasHeight / 2 - flagHeight/2;

context3.fillStyle = 'red';
context3.fillRect(positionX3, positionY3-flagHeight, flagWidth, flagHeight);

context3.fillStyle = 'white';
context3.fillRect(positionX3, positionY3, flagWidth, flagHeight);

context3.fillStyle = 'green';
context3.fillRect(positionX3, positionY3+flagHeight, flagWidth, flagHeight);

//Magyar zászló színei

//--------------------------------------------------//
//Lejebb a 4. Canvas tartalma található

var canvas4 = document.getElementById('myCanvas4');
var context4 = canvas4.getContext('2d');

var tSide = 150;

context4.beginPath();
context4.moveTo(canvasWidth/2,canvasHeight/2-tSide/2);
context4.lineTo(canvasWidth/2+tSide/2,canvasHeight/2+tSide/2);
context4.lineTo(canvasWidth/2-tSide/2,canvasHeight/2+tSide/2);
context4.lineTo(canvasWidth/2,canvasHeight/2-tSide/2);

context4.strokeStyle = 'rgba(128,128,128,.5)';
context4.stroke();

context4.fillStyle = 'rgba(255,165,0,.5)';
context4.fill();

//Háromszög középen. A végén ismét vissza kell térni a kiindulópontra, csak akkor zárul a sokszög.


context4.beginPath();
context4.moveTo(canvasWidth/2, 0);
context4.lineTo(canvasWidth/2, canvasHeight);
context4.strokeStyle = 'green';
context4.stroke();

context4.beginPath();
context4.moveTo(0, canvasHeight/2);
context4.lineTo(canvasWidth, canvasHeight/2);

context4.strokeStyle = 'red';
context4.stroke();

//Felezővonalak piros/zöld.



//--------------------------------------------------//
//Lejebb az 5. Canvas tartalma található

var canvas5= document.getElementById('myCanvas5');
var context5 = canvas5.getContext('2d');


var padding5 = 20;

for (let n=0; n<=10; n++) {
	context5.fillStyle = 'rgba(255,165,0,.5)';
	context5.fillRect(padding5, padding5, 45, 45);
	var padding5 = padding5+45/2;
}

//DRY négyzetek, for ciklussal, amik átfedik egymást



//--------------------------------------------------//
//Lejebb a 6. Canvas tartalma található

var canvas6= document.getElementById('myCanvas6');
var context6 = canvas6.getContext('2d');


var padding6 = 5;
var size6 = 50;

for (let n=0; n<5; n++) {
	var margin6Top = 15;
	var margin6Left = 15;
	for (i=0; i<=n; i++){
	context6.fillStyle = 'rgba(255,165,0,.5)';
	context6.fillRect(margin6Left + i * (size6+padding6),  margin6Top+ n *(size6+padding6), size6,size6);
	}
}
//soronként újabb négyzetet adunk az oszlopokhoz


//--------------------------------------------------//
//Lejebb a 7. Canvas tartalma található

var canvas7= document.getElementById('myCanvas7');
var context7 = canvas7.getContext('2d');


var padding7 = 5;
var size7 = 50;
var margin7Top = 15;
var red = 255;
var green = 79;
var blue = 120;

for (let n=0; n<5; n++) {
	
	var margin7Left = 15;
	for (i=0; i<5; i++){
		context7.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
		context7.fillRect(margin7Left,  margin7Top, size7,size7);
		red = red-7;
		margin7Left += size7 + padding7;
	}
	blue = blue+15;
	margin7Top += size7 + padding7;
}
//színskála kockákkal, ciklusba ágyazott ciklussal.




//--------------------------------------------------//
//Lejebb a 8. Canvas tartalma található

var canvas8 = document.getElementById('myCanvas8');
var context8 = canvas8.getContext('2d');

var tSide8 = 100;
var start8X = 120
var start8Y = 120
for (i = 1; i<30; i++) {
	context8.beginPath();
	context8.moveTo(start8X,start8Y);
	context8.lineTo(start8X+tSide8/2, start8Y-tSide8);
	context8.lineTo(start8X+(tSide8), start8Y);
	context8.lineTo(start8X,start8Y);
	context8.strokeStyle = 'grey';
	context8.stroke();
	var start8X = start8X+5;
	var start8Y = start8Y+5;
}

//háromszög alagút, for ciklussal.


//--------------------------------------------------//
//Lejebb a 9. Canvas tartalma található

var canvas9 = document.getElementById('myCanvas9');
var context9 = canvas9.getContext('2d');

// A hsl() függvény a szín megadásának egy további módja. Három paraméterrel rendelkezik: hsl(hue, saturation, lightness). A hue (színárnyalat) értéke egy 0 és 360 közé eső szám, és egy színkörön határoz meg egy fokot. A saturation (telítettség) és lightness (világosság) értékét százalékban kell meghatározni.

var hue9 = 360;
var sat9 = 60;
var light9 = 45;
var posX9 = 0;
var posY9 = 0;

for (i9=0; i9<15; i9++) {
	context9.fillStyle = 'hsl(' + hue9 + ',' + sat9 + '%,' + light9 + '%)';
	context9.fillRect(posX9/2, posY9/2, canvasWidth-posX9, canvasHeight-posY9);
	var posX9 = posX9+20;
	var posY9 = posY9+20;
	var hue9 = hue9-(360/17);
}

//kocka színátmenet hsl()-lel.


//--------------------------------------------------//
//Lejebb a 10. Canvas tartalma található

var canvas10 = document.getElementById('myCanvas10');
var context10 = canvas10.getContext('2d');


var paddingTop10 = 15;
var paddingLeft10 = 20;
var size10 = 50;
var i10 = 0;


for (var i10=1;i10<=15;i10++) {
	if (i10%15===0) {
	context10.fillStyle = 'rgba(0,255,0, .5)';
	} else if (i10%3===0) {
		context10.fillStyle = 'rgba(0,0,255, .5)';
	} else if (i10%5===0) {
		context10.fillStyle = 'rgba(255,255,0, .5)';
		}else {
		context10.fillStyle = 'rgba(0,0,0, .5)';
	}
	context10.fillRect(paddingLeft10, paddingTop10, size10, size10);
	var paddingTop10 = paddingTop10+15;
	var paddingLeft10 = paddingLeft10+20;
} 
//fizzbuzz négyszögek


//--------------------------------------------------//
//Lejebb a 11. Canvas tartalma található

var canvas11 = document.getElementById('myCanvas11');
var context11 = canvas11.getContext('2d');

var posX11 = 0;
var posY11 = canvasHeight/2;
	
for (var x11=0; x11<150; x11++) {
	context11.beginPath();
	context11.moveTo(posX11,canvasHeight/2);
	if (x11%2==0) {
		context11.lineTo(canvasWidth/2, 0);
	} else {
		context11.lineTo(canvasWidth/2, canvasHeight);
	}
	context11.strokeStyle = 'rgba(255,0,0,.5)';
	context11.stroke();
	
	 var posX11=posX11+3;
}


//--------------------------------------------------//
//Lejebb a 12. Canvas tartalma található


var canvas12 = document.getElementById('myCanvas12');
var context12 = canvas12.getContext('2d');

var posX12 = 0;
var posY12 = canvasHeight/2;
	
for (var x12=0; x12<canvasWidth; x12++) {
	context12.beginPath();
	context12.moveTo(posX12,canvasHeight/2);
	if (x12%4==0) {
		context12.lineTo(0, 0);
	} else if (x12%4==1) {
		context12.lineTo(canvasWidth, 0);
	} else if (x12%4==2) {
		context12.lineTo(0, canvasHeight);
	} else {
		context12.lineTo(canvasWidth, canvasHeight);
	}
	
	context12.strokeStyle = 'rgba(0,0,255,.5)';
	context12.stroke();
	
	 var posX12=posX12+1;
}

//háromszögesvonalasKÉK



//-------------------függvények------------------------//
//Lejebb a 13. Canvas tartalma található


var canvas13 = document.getElementById('myCanvas13');
var context13 = canvas13.getContext('2d');

function triangle (positionX13,positionY13, size13) {

context13.beginPath();
context13.moveTo(positionX13,positionY13);
context13.lineTo(positionX13 - size13 / 2,positionY13 + size13);
context13.lineTo(positionX13 + size13 / 2, positionY13 + size13);
context13.lineTo(positionX13,positionY13);
context13.strokeStyle = 'rgba(0,0,0,.5)';
context13.fillStyle = 'rgba(255,165,0,.5)';
context13.stroke();
context13.fill();
}

triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);


//--------------------------------------------------//
//Lejebb a 14. Canvas tartalma található

var canvas14 = document.getElementById('myCanvas14');
var context14 = canvas14.getContext('2d');

function star (positionX14, positionY14, size14) {
	context14.beginPath();
	context14.moveTo(positionX14, positionY14);
	context14.lineTo(positionX14 + size14, positionY14);
    context14.lineTo(positionX14 + size14 * 0.15, positionY14 + size14 * 0.5);
    context14.lineTo(positionX14 + size14 * 0.5, positionY14 - size14 * 0.4);
    context14.lineTo(positionX14 + size14 * 0.85, positionY14 + size14 * 0.5);
	context14.lineTo(positionX14, positionY14);
	context14.strokeStyle = 'rgb(233,159,184)';
	context14.stroke();
	context14.fillStyle = 'rgb(233,159,184)';
	context14.fill();
	
}

star(40, 50, 75);
star(130, 120, 100);
star(250, 220, 150);


//--------------------------------------------------//
//Lejebb a 15. Canvas tartalma található

var canvas15 = document.getElementById('myCanvas15');
var context15 = canvas15.getContext('2d');

var centerX15 = canvas15.width/2;
var centerY15 = canvas15.height/2;


function lineToCenter (positionX15, positionY15, color15) {	
	context15.beginPath();
	context15.moveTo(positionX15, positionY15);
	context15.lineTo(centerX15, centerY15);
	context15.strokeStyle = color15;
	context15.stroke();
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var n15=0; n15<6000; n15++) {
	lineToCenter(random(0, canvas15.width), random(0, canvas15.height), 'teal');
	}

// Random vonalak középre.



//--------------------------------------------------//
//Lejebb a 16. Canvas tartalma található

var canvas16 = document.getElementById('myCanvas16');
var context16 = canvas16.getContext('2d');

function hexagon (positionX16, positionY16) {

var hexaSide16 = 113/2;

context16.beginPath();
context16.moveTo(positionX16, positionY16);
context16.lineTo(positionX16 + hexaSide16 * 0.5, positionY16 - 49);
context16.lineTo(positionX16 + hexaSide16 * 1.5, positionY16 - 49);
context16.lineTo(positionX16 + hexaSide16 * 2, positionY16);
context16.lineTo(positionX16 + hexaSide16 * 1.5, positionY16 + 49);
context16.lineTo(positionX16 + hexaSide16 * 0.5, positionY16 + 49);
context16.lineTo(positionX16, positionY16);
context16.strokeStyle = 'orange';
context16.stroke();
}

hexagon(76, 120);
hexagon(76, 230);
hexagon(168.5, 65);
hexagon(168.5, 175);
hexagon(168.5, 285);
hexagon(261, 120);
hexagon(261, 230);

context16.fillStyle = 'orange';
context16.fill();



//--------------------------------------------------//
//Lejebb a 17. Canvas tartalma található

var canvas17 = document.getElementById('myCanvas17');
var context17 = canvas17.getContext('2d');

var ver17 = 0;
var hor17 = 0;


function drawCheckeredPattern(row17, col17) {	
    for (var x17 = 0; x17 < row17; x17++) {
        for (var y17 = 0; y17 < col17; y17++) {
            if (x17 % 2 === 0 && y17 % 2 ===1 || x17 % 2 === 1 && y17 % 2 === 0) {
                context17.fillStyle = 'white';
            } else {
                context17.fillStyle = 'black';
            }
            context17.fillRect(ver17, hor17, canvas17.width/row17, canvas17.height/col17);
			ver17 += canvas17.width/row17;
        }
		ver17 = 0;
		hor17 += canvas17.height/col17;
    }
}	
	
drawCheckeredPattern(8,8);	