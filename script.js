const display = document.getElementById('lcd-display');
const clear = document.getElementById('clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const decimal = document.getElementById('.');
const equals = document.getElementById('=');
const allButtons = document.querySelectorAll('.btn');

const calculationArray = [];
let a = 'default';
let b = 'default';
let operand = 'default';
let prevButtonPress = ''

//monitor for keyboard input
document.addEventListener('keydown', (e) => {
    allButtons.forEach((button) => {
        if (button.id == e.key) {
            document.getElementById(button.id).click();
        }
    })
})

display.textContent = "0";

digits.forEach((digit) => {
    digit.addEventListener('click', addDigit);
})

operators.forEach((operator) => {
    operator.addEventListener('click', setOperand);
})

clear.addEventListener('click', clearCalculator);

decimal.addEventListener('click', addDigit);

equals.addEventListener('click', evaluateEquation);

//add digit to array
function addDigit(e) {
    calculationArray.push(e.target.id);
    display.textContent = calculationArray.join('');
    prevButtonPress = e.target.id;
    console.log(prevButtonPress);
}

//set operand and current value
function setOperand(e) {
    //process if no digits have been pressed yet
    if (calculationArray.length == 0) {
        calculationArray.push("0");
    }
    //standard process
    operand = e.target.id;
    display.textContent = e.target.id;
    a = calculationArray.join('');
    calculationArray.length = 0;
    prevButtonPress = e.target.id;
    console.log(prevButtonPress);
}

//set second value and evaluate equation on equals
function evaluateEquation() {
    b = calculationArray.join('');
    display.textContent = operate(a, b, operand);
    a = 'default';
    b = 'default';
    operand = 'default';
    calculationArray.length = "0";
    prevButtonPress = "=";
    console.log(prevButtonPress);

}

//functional clear button
function clearCalculator() {
    a = 'default';
    b = 'default';
    operand = 'default';
    calculationArray.length = "0";
    display.textContent = "0";
    prevButtonPress = "clr";
    console.log(prevButtonPress);
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
            return 'Error';
    }
}