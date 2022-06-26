const display = document.getElementById("lcd-display");
const clear = document.getElementById("clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const decimal = document.getElementById(".");

const calculationArray = [];

digits.forEach((digit) => {
    digit.addEventListener('click', logIdOfButton);
})

operators.forEach((operator) => {
    operator.addEventListener('click', logIdOfButton);
})

clear.addEventListener('click', logIdOfButton);

decimal.addEventListener('click', logIdOfButton);

function logIdOfButton(e) {
    console.log(e.target.id);
}

//functions for add, subtract, divide, and multiply

function addValues(a, b) {
    return Number(a) + Number(b);
}

function subtractValues(a, b) {
    return Number(a) - Number(b);
}

function divideValues(a, b) {
    return Number(a) / Number(b);
}

function multiplyValues(a, b) {
    return Number(a) * Number(b);
}

//function for operation

function operate(a, b, operand) {
    switch (operand) {
        case "+":
            return addValues(a, b);
        case "-":
            return subtractValues(a, b);
        case "/":
            return divideValues(a, b);
        case "*":
            return multiplyValues(a, b);
        default:
            return 'Invalid operand';
    }
}