//functions for add, subtract, divide, and multiply
//function for operation

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