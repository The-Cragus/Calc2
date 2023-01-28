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
        return firstNumber = sub(+a, +b);
    }
    if (operator === 3) {
        return firstNumber = mult(+a, +b);
    }
    if (operator === 4) {
        return firstNumber = div(+a, +b);
    }
    if (operator === 5) {
        return firstNumber = pow(+a, +b);
    }
    if (operator === 6) {
        return firstNumber = rem(+a, +b);
    }
};

//Event Listeners for Numbered Buttons
const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
    // if(displayValue === 0){
    //     displayArea.textContent = 0;
    // }
    // //resets the display field
    // if(displayValue === '') {
    //     displayArea.textContent = '';
    // }; 
    displayValue += '0';
    //Gets rid of leading zeros
    displayArea.textContent = displayValue.replace(/^0+/, '')
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '1';
    displayArea.textContent = displayValue.replace(/^0+/, '');

    //updates display to have the current total of the equation
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
   
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '2';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '3';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '4';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '5';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '6';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '7';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '8';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '9';
    displayArea.textContent = displayValue.replace(/^0+/, '')

    if(operator > 0) {
        operate(operator)
        displayArea.textContent = displayValue;
    }
});

//Event Listeners for operator, clear, and equal buttons
const addition = document.querySelector('.addition');
addition.addEventListener('click', () => {
    //Sets intial value for firstNumber
    if(firstNumber === 0){
    firstNumber = displayValue
    };
    displayValue = '';
    operator = 1;
});

const subtraction = document.querySelector('.subtraction');
subtraction.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue
    };
    displayValue = '';
    operator = 2;
});

const multiplication = document.querySelector('.multiplication');
multiplication.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue
    };
    displayValue = '';
    operator = 3;
});

const division = document.querySelector('.division');
division.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue
    };
    displayValue = '';
    operator = 4;
});

const power = document.querySelector('.power');
power.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue
    };
    displayValue = '';
    operator = 5;
});

const remainder = document.querySelector('.remainder');
remainder.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue
    };
    displayValue = '';    
    operator = 6;
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayArea.textContent = firstNumber;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayArea.textContent = 0;
    displayValue = 0;
    firstNumber = 0;
    operator = 0;
});
