const sliderLine = document.querySelector(".slider-line");
const images = document.querySelectorAll(".slider-line img");


let btn_next = document.querySelector("#next");
let btn_prev = document.querySelector("#prev");

let width = 560;
// лічильник поточного слайду
let current = 0;

console.log(images);
function init() {
	width = document.querySelector(".slider").offsetWidth;
	images.forEach( (image)=> {
		image.style.width = `${width}px`
	});

}

init()

// ------------------- NEXT FUNCTION----------------
function getNext(){
	current++;
	if (current >= images.length) {
		current=0;
	}
	roll();
}


// ------------------- NEXT FUNCTION----------------
function getPrev(){
	current--;
	if (current < 0) {
		current = images.length-1;
	}
	roll();
}

//  ---------------- ROLL slide --------------------
function roll () {
	console.log(current)
	sliderLine.style.transform = `translate(-${current*width}px)`
}

// ---------------- EVENTS -------------------------
window.addEventListener("resize", init);
btn_next.addEventListener("click", getNext);
btn_prev.addEventListener("click", getPrev);

const surf = document.querySelector(".slider");

surf.addEventListener("touchstart", touchStart);
surf.addEventListener("touchmove", touchMove);
surf.addEventListener("touchend", touchEnd);


// ---------------- TOUCH FUNCTIONAL -----------------------

let x1, y1, x2, y2;




function touchStart (e) {
	// e.preventDefault();
	x1 = e.touches[0].clientX;
	y1 = e.touches[0].clientY;
	console.log(	x1, y1);
}

function touchMove(e) {
	// e.preventDefault();
	x2 = e.touches[0].clientX;
	y2 = e.touches[0].clientY;
}

function touchEnd(e) {
	// e.preventDefault();
	if (!(x1 && x2 && y1 && y2)) return;

	let dx = Math.abs(x2-x1);
	let dy = Math.abs(y2-y1);

	if (dx < dy) return;

	if ( x1 - x2 > 50) {
		getNext();
	} else if (x2 - x1 >50){
		getPrev();
	}
}