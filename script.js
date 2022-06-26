const display = document.getElementById("lcd-display");
const clear = document.getElementById("clr");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const decimal = document.getElementById("point");

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        console.log(digit.id);
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        console.log(operator.id);
    })
})

clear.addEventListener('click', () => {
    console.log("Clear");
})

decimal.addEventListener('click', () => {
    console.log(".");
})

//functions for add, subtract, divide, and multiply

function addValues(a, b) {
    return Number(a) + Number(b);
}

function subtractValues(a, b) {
    return Number(a) - Number(b);
}

function divideValues (a, b) {
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