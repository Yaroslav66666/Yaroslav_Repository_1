
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Помилка: на нуль ділити не можна!";
    }
    return a / b;
}


function calculate() {
    let num1 = Number(prompt("Введіть перше число:"));
    let num2 = Number(prompt("Введіть друге число:"));
    let operator = prompt("Введіть операцію (+, -, *, /)");

    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Помилка: введено не число.");
        return;
    }

    let result;

    
    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "/") {
        result = divide(num1, num2);
    } else {
        console.log("Помилка: невідома операція.");
        return;
    }

    console.log("Результат:", result);
}


calculate();
