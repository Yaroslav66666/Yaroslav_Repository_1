let canva = document.querySelector("#canva-box");
let ctx = canva.getContext("2d");


ctx.fillStyle = "blue";
ctx.globalAlpha = 0.5;


let img = new Image();
 img.src = "./img/images.jpg";

 addEventListener("load", function(e){
 	console.log("Loaded")
 	ctx.drawImage(img, 0, 0, canva.width, canva.height);
 	ctx.globalAlpha = 0.5;
 	
  ctx.fillStyle = "blue";
 })


let startCords = {x:0, y:0};
let mouseCords = {x:0, y:0};

ctx.globalAlpha = 0.5;
ctx.fillStyle = "green"

let rect = canva.getBoundingClientRect();
console.log(rect);

let flag = false;


canva.addEventListener("mousedown", function(e){
	startCords.x = e.clientX - rect.x;
	startCords.y = e.clientY - rect.y;
	flag = true;
})


canva.addEventListener("mousemove", function(e){
	if (!flag) {return;}
	e.preventDefault();
	mouseCords.x = e.clientX - rect.x;
	mouseCords.y = e.clientY - rect.y;
	let width = mouseCords.x - startCords.x;
	let height =  mouseCords.y - startCords.y;

	ctx.clearRect(0, 0, canva.width, canva.height);
	ctx.fillRect(startCords.x, startCords.y, width, height )

})



canva.addEventListener("mouseup", function(e){
	flag = false;

});


let btn = document.querySelector("#clearAll");
btn.addEventListener("click", function(e){
	ctx.clearRect(0, 0, canva.width, canva.height);
});


btn.addEventListener("mouseenter", function(e){
	let rand_color = '#'+Math.floor(Math.random()*16777215).toString(16);

	e.target.style.backgroundColor = rand_color;

})

btn.addEventListener("mouseleave", function(e){

	e.target.style.backgroundColor = "#f0f0f0";

})
