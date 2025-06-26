let mass = 10030;                   // Завдання 1 
let kg = mass / 1000;
let centners = mass / 100000;
let tons = mass / 1000000;

console.log(`Вага: ${kg} кг`);
console.log(`Центнери: ${centners}`);
console.log(`Тонни: ${tons}`);








let seconds = 3333333;               // Завдання 2

let days = Math.floor(seconds / (24 * 3600));
let hours = Math.floor((seconds % (24 * 3600)) / 3600);
let minutes = Math.floor((seconds % 3600) / 60);
let sec = seconds % 60;

console.log(`Дні: ${days}`);
console.log(`Години: ${hours}`);
console.log(`Хвилини: ${minutes}`);
console.log(`Секунди: ${sec}`);
