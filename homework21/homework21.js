let canva = document.querySelector("#canva-box");
let ctx = canva.getContext("2d");

let img = new Image();
img.src = "./img/images.jpg";

let startCords = {x: 0, y: 0};
let mouseCords = {x: 0, y: 0};
let flag = false;

let colorPicker = document.querySelector("#colorPicker");
let alphaRange = document.querySelector("#alphaRange");

let currentColor = colorPicker.value;
let currentAlpha = parseFloat(alphaRange.value);


function drawBackground() {
    ctx.drawImage(img, 0, 0, canva.width, canva.height);
}


img.addEventListener("load", function() {
    drawBackground();
});


colorPicker.addEventListener("input", function() {
    currentColor = this.value;
});


alphaRange.addEventListener("input", function() {
    currentAlpha = parseFloat(this.value);
});


canva.addEventListener("mousedown", function(e) {
    let rect = canva.getBoundingClientRect();
    startCords.x = e.clientX - rect.x;
    startCords.y = e.clientY - rect.y;
    flag = true;
});


canva.addEventListener("mousemove", function(e) {
    if (!flag) return;
    let rect = canva.getBoundingClientRect();
    mouseCords.x = e.clientX - rect.x;
    mouseCords.y = e.clientY - rect.y;
    
    let width = mouseCords.x - startCords.x;
    let height = mouseCords.y - startCords.y;

    ctx.clearRect(0, 0, canva.width, canva.height);
    drawBackground();
    ctx.globalAlpha = currentAlpha;
    ctx.fillStyle = currentColor;
    ctx.fillRect(startCords.x, startCords.y, width, height);
    ctx.globalAlpha = 1; 
});


canva.addEventListener("mouseup", function() {
    flag = false;
});


let btn = document.querySelector("#clearAll");
btn.addEventListener("click", function() {
    ctx.clearRect(0, 0, canva.width, canva.height);
    drawBackground();
});


btn.addEventListener("mouseenter", function(e) {
    let rand_color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = rand_color;
});
btn.addEventListener("mouseleave", function(e) {
    e.target.style.backgroundColor = "#f0f0f0";
});
