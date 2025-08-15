let canvas = document.querySelector("#canvas-box");
const ctx = canvas.getContext("2d");

//   Небо

ctx.fillStyle = "#50CEEE";
ctx.fillRect(0, 0, canvas.width,  canvas.height);



//   Трава

ctx.fillStyle = "green";
ctx.fillRect(0, 640, canvas.width,  100);

//   Сонце

ctx.beginPath();
ctx.arc(200, 80, 40, 0, Math.PI*2);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.lineWidth = 4;
ctx.strokeStyle = "yellow"
ctx.moveTo(190, 125);
ctx.lineTo(170, 170);

ctx.moveTo(170, 110);
ctx.lineTo(145, 150);



ctx.moveTo(150, 90);
ctx.lineTo(100, 120); 


ctx.moveTo(230, 115);
ctx.lineTo(280, 170);     



ctx.moveTo(250, 110);
ctx.lineTo(330, 170);      




ctx.moveTo(260, 90);
ctx.lineTo(350, 160);      
ctx.stroke()

ctx.closePath();

//  Хмари

function makeCloud(x, y) {
	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.beginPath();
	ctx.arc(x, y, 30, 0, Math.PI*2);
	ctx.arc(x-20, y, 20, 0, Math.PI*2);
	ctx.arc(x+30, y, 20, 0, Math.PI*2);
	ctx.fill();
}

makeCloud(500, 50);
makeCloud(600, 90);
makeCloud(700, 40);

makeCloud(1000, 50);
makeCloud(1100, 90);
makeCloud(1200, 40);

// Забор

ctx.fillStyle = "#90EE90";
ctx.fillRect(0, 520, canvas.width,  120);

//  Декорація для забору 

function makeDecorationFence(x, y) {
	ctx.beginPath();
  ctx.fillStyle = "brown";
  ctx.fillRect(x, y, 10, 130);
  ctx.fill();
}

makeDecorationFence(50, 510);
makeDecorationFence(100, 510);
makeDecorationFence(150, 510);
makeDecorationFence(200, 510);
makeDecorationFence(250, 510);
makeDecorationFence(300, 510);
makeDecorationFence(350, 510);
makeDecorationFence(400, 510);
makeDecorationFence(450, 510);
makeDecorationFence(900, 510);
makeDecorationFence(950, 510);
makeDecorationFence(1000, 510);
makeDecorationFence(1050, 510);
makeDecorationFence(1100, 510);
makeDecorationFence(1150, 510);
makeDecorationFence(1200, 510);
makeDecorationFence(1250, 510);
makeDecorationFence(1300, 510);
makeDecorationFence(1350, 510);
makeDecorationFence(1400, 510);
makeDecorationFence(1450, 510);

//  Стіна для будинку

ctx.beginPath();
ctx.fillStyle = "orange";
ctx.fillRect(550, 490, 270, 150);

// Вікна для будинку

ctx.beginPath();
ctx.fillStyle = "#00B7EB";
ctx.fillRect(590, 520, 60, 60);

ctx.beginPath();
ctx.fillStyle = "#00B7EB";
ctx.fillRect(725, 520, 60, 60);

//  Дах

ctx.translate(540, 340); 
ctx.beginPath();
ctx.moveTo(10, 150);   
ctx.lineTo(150, 50);   
ctx.lineTo(280, 150); 
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();