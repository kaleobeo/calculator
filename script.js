const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
let screen = document.getElementById('text')
let firstOperand = ''
let secondOperand = null




numbers.forEach((button) => {
    button.addEventListener('click', () => {
        firstOperand += button.textContent
        screen.textContent = firstOperand
    });
});
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) return "undefined"
    return a / b
}

function operate(first, operator, second) {
    let result;
    switch (operator) {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            result = divide(first, second);
            break;
        default:
            result = "OOPS"
    } return result
}