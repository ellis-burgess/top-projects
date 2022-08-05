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
let prevButtonClass = '';

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
    prevButtonClass = "digit"
    console.log(prevButtonClass);
}

//set operand and current value
function setOperand(e) {
    //if previous input was operand
    if (prevButtonClass == "operand") {
        operand = e.target.id;
        return;
    }
    //if there is an unevaluated equation
    if (operand != 'default') {
        display.textContent = operate(a, Number(display.textContent), operand);
    }
    //standard process
    operand = e.target.id;
    a = Number(display.textContent);
    calculationArray.length = 0;
    prevButtonClass = "operand";
    console.log(prevButtonClass);
}

//set second value and evaluate equation on equals
function evaluateEquation() {
    b = Number(display.textContent);
    display.textContent = operate(a, b, operand);
    a = 'default';
    b = 'default';
    operand = 'default';
    calculationArray.length = "0";
    prevButtonClass = "equals"
    console.log(prevButtonClass);

}

//functional clear button
function clearCalculator() {
    //C vs AC
    if ((prevButtonClass == "clr") || (prevButtonClass == "operand")) {

        console.log(prevButtonClass);
    }

    switch (prevButtonClass) {
        case "clr":
            a = 'default';
            b = 'default';
            operand = 'default';
            prevButtonClass = "clr";
            break;
        case "operand":
            prevButtonClass = "clr"
            return;
    }
    calculationArray.length = "0";
    display.textContent = "0";
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