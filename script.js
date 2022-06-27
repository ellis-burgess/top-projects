const display = document.getElementById('lcd-display');
const clear = document.getElementById('clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const decimal = document.getElementById('.');
const equals = document.getElementById('=');

const calculationArray = [];
let a = 'default';
let b = 'default';
let operand = 'default';

digits.forEach((digit) => {
    digit.addEventListener('click', addDigit);
})

operators.forEach((operator) => {
    operator.addEventListener('click', setOperand);
})

clear.addEventListener('click', logIdOfButton);

decimal.addEventListener('click', logIdOfButton);

equals.addEventListener('click', evaluateEquation);

function logIdOfButton(e) {
    console.log(e.target.id);
}

//add digit to array
function addDigit(e) {
    calculationArray.push(e.target.id);
    display.textContent = calculationArray.join('');
}

//set operand and current value
function setOperand(e) {
    operand = e.target.id;
    display.textContent = e.target.id;
    a = calculationArray.join('');
    calculationArray.length = 0;
}

//set second value and evaluate equation on equals
function evaluateEquation() {
    b = calculationArray.join('');
    display.textContent = operate(a, b, operand);
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
        case '+':
            return addValues(a, b);
        case '-':
            return subtractValues(a, b);
        case '/':
            return divideValues(a, b);
        case '*':
            return multiplyValues(a, b);
        default:
            return 'Invalid operand';
    }
}