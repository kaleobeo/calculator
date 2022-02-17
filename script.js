const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operators')
const equals = document.querySelector('.equals')
let screen = document.getElementById('text')
let operator = null;
let firstOperand = ''
let secondOperand = null




numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if ( (screen.textContent == 0)) screen.textContent = ""
        if (screen.textContent === firstOperand) screen.textContent = ""
        screen.textContent += button.textContent


    });
});

operators.forEach((operatorButton) => {

    operatorButton.addEventListener('click', () => {
        if (firstOperand === screen.textContent) return
        operate(firstOperand, operator, secondOperand)
        operator = operatorButton.textContent;

        if (!firstOperand) {
            firstOperand = screen.textContent
        } else secondOperand = screen.textContent



        
        
    });
});

equals.addEventListener('click', () => {
    //if (firstOperand === screen.textContent) return
    if (firstOperand) secondOperand = screen.textContent
    operate(firstOperand, operator, secondOperand)
    
});

let add = (a, b) => {
    return a + b
}

let subtract = (a, b) => {
    return a - b
}

let multiply = (a, b) => {
    return a * b
}

let divide =(a, b) => {
    if (b == 0) return "undefined"
    return a / b
}

function operate(num, operator, num2) {
    if (secondOperand === null) return

    let first = parseInt(num)
    let second = parseInt(num2)
    if (!second && second != 0) return

    let result;
    switch (operator) {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case 'x':
            result = multiply(first, second);
            break;
        case '÷':
            result = divide(first, second);
            break;
        default:
            result = "OOPS"
    }
    screen.textContent = result
    firstOperand = ""
    secondOperand = null
    operator = null
};