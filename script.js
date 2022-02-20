const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operators')
const equals = document.querySelector('.equals')
let screen = document.getElementById('text')
let operator = null;
let firstOperand = ''
let secondOperand = null
let replaceScreen = true
let del = document.querySelector('.del')
let clear = document.querySelector('.clear')
let decimal = document.querySelector('.wide-button')
let plusMinus = document.querySelector('.plus-minus')


del.addEventListener('click', () => {
    if ( (screen.textContent == 0) || screen.textContent == '-0') return
    nums = screen.textContent
    screen.textContent = nums.substring(0, (nums.length - 1))
});

decimal.addEventListener('click', () => {
    if (screen.textContent.includes('.')) return
    screen.textContent += '.'
    replaceScreen = false
});

clear.addEventListener('click', () => {
    screen.textContent = 0
    firstOperand = ""
    replaceScreen = true
    secondOperand = null
    operator = null

    operators.forEach((operator) => {
        operator.removeAttribute('id')
    })
});

plusMinus.addEventListener('click', () => {
    if (replaceScreen) {
        screen.textContent = '0'
        replaceScreen = false
    }
    screen.textContent.includes('-') ? screen.textContent = screen.textContent.substr(1) : screen.textContent = '-' + `${screen.textContent}`
    
});

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (screen.textContent.length > 9) return

        if (screen.textContent == '-0') {
            screen.textContent = `-${button.textContent}`
            return
        }
        
        if (replaceScreen) {
            screen.textContent = ""
            replaceScreen = false
        }
        screen.textContent += button.textContent


    });
});

operators.forEach((operatorButton) => {

    operatorButton.addEventListener('click', () => {
        if (replaceScreen) {
            operator = operatorButton.textContent
            operators.forEach((operator) => {
                operator.removeAttribute('id')
            })
            operatorButton.id = "active"
            firstOperand = screen.textContent
            replaceScreen = true
            return
        }
        replaceScreen = true
        if (firstOperand) secondOperand = screen.textContent
        operate(firstOperand, operator, secondOperand)
        operator = operatorButton.textContent;

        if (!firstOperand) {
            firstOperand = screen.textContent
        } //else secondOperand = screen.textContent

        operatorButton.id = "active"

        
        
    });
});

equals.addEventListener('click', () => {
    //if (firstOperand === screen.textContent) return
    if (replaceScreen) return
    if (firstOperand) secondOperand = screen.textContent
    operate(firstOperand, operator, secondOperand)
    operator = null;
    replaceScreen = true
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
    if (b === 0) return undefined
    return a / b
}

function operate(num, operator, num2) {
    if (!secondOperand) return
    //if (replaceScreen) return
    let first = parseFloat(num)
    let second = parseFloat(num2)
    

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
    operators.forEach((operator) => {
        operator.removeAttribute('id')
    })
    if (result === undefined) {
        screen.textContent = "undefined"
        return
    }
    screen.textContent = Math.floor(result*1000)/1000
    firstOperand = ""
    secondOperand = null
    replaceScreen = true
    //operator = null
};