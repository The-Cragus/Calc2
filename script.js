//Create variable to hold display value, create variable of display area and populate.
let displayValue = 0;
let total = 0;
let operator = 0;
let firstNumber = 0;
const displayArea = document.querySelector('.display');

//Operator functions
const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const pow = (a, b) => a ** b;

const rem = (a, b) => a % b;

function operate(operator, a, b) {

    a = firstNumber;
    b = displayValue;

    if (operator === 1) {
        //Updates firstNumber to store intial equation
        return firstNumber = add(+a, +b);
    }
    if (operator === 2) {
        return sub(+a, +b);
    }
    if (operator === 3) {
        return mult(+a, +b);
    }
    if (operator === 4) {
        return div(+a, +b);
    }
    if (operator === 5) {
        return pow(+a, +b);
    }
    if (operator === 6) {
        return rem(+a, +b);
    }
};

//Event Listeners for Numbered Buttons
const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
    //resets the display field
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '0';
    displayArea.textContent += '0';
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    displayValue += '1';
    displayArea.textContent += '1';

    //updates display to have the current total of the equation
    // if(operator > 0) {
    //     displayArea.textContent = operate(operator);
    // }
   
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '2';
    displayArea.textContent += '2';
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '3';
    displayArea.textContent += '3';
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '4';
    displayArea.textContent += '4';
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '5';
    displayArea.textContent += '5';
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '6';
    displayArea.textContent += '6';
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '7';
    displayArea.textContent += '7';
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '8';
    displayArea.textContent += '8';
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '9';
    displayArea.textContent += '9';
});

//Event Listeners for operator, clear, and equal buttons
const addition = document.querySelector('.addition');
addition.addEventListener('click', () => {
    if(firstNumber === 0){
    firstNumber = displayValue
    };
    displayValue = '';
    operator = 1;
});

const subtraction = document.querySelector('.subtraction');
subtraction.addEventListener('click', () => {
    firstNumber = displayValue
    displayValue = '';
    operator = 2;
});

const multiplication = document.querySelector('.multiplication');
multiplication.addEventListener('click', () => {
    firstNumber = displayValue
    displayValue = '';
    operator = 3;
});

const division = document.querySelector('.division');
division.addEventListener('click', () => {
    firstNumber = displayValue
    displayValue = '';
    operator = 4;
});

const power = document.querySelector('.power');
power.addEventListener('click', () => {
    firstNumber = displayValue
    displayValue = '';
    operator = 5;
});

const remainder = document.querySelector('.remainder');
remainder.addEventListener('click', () => {
    firstNumber = displayValue
    displayValue = '';    
    operator = 6;
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayArea.textContent = operate(operator);
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayArea.textContent = 0;
    displayValue = 0;
    total = 0;
    operator = 0;
});
