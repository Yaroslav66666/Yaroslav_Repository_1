console.log("Завдання 1");                                // Завдання 1

let x = 4, y = 4;                      


if (x>3 && x<10) {
    console.log("х більше 3-х І менше 10 ");
}  else {
    console.log("x не в заданих мережах");
}


 


console.log("Завдання 2");                                 // Завдання 2

let mas1 = [1, 2, 5, 9, 4, 13, 4, 10];


for (let i=4; i< mas1.length; i++) {
    console.log(mas1[i]);
}

if ( i=mas1.length) {
    console.log("Наявний!")
}





console.log("Завдання 3");                                // Завдання 3

let mas2 = [42, 2, 33, 11, 12, 10, 0];

let totalSum1 = mas2.reduce(function(acumulator, currentItem, mas2) {
    return acumulator+currentItem+mas2
} );

console.log(totalSum1);






console.log("Завдання 4");                                // Завдання 4

let mas3 = ["parrot", "bull", "bear", "monkey"];

let totalSum2 = mas3.reduce(function(accumulator, currentItem, mas3) {
	return accumulator+currentItem+mas3 
} ); 

console.log(totalSum2);





console.log("Завдання 5");                                   // Завдання 5

let mas4 =  ["parrot", 140,"bull",true, 0, "bear", 47, "monkey"];

let negativeNums = mas4.filter(function(mas4) {
	return typeof mas4 === "string" 
});

console.log("Відфільтрований масив від'ємних чисел", negativeNums);