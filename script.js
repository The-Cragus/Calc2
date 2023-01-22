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
        return add(+a, +b);
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
    displayValue = '0';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    displayValue = '1';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    displayValue = '2';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    displayValue = '3';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    displayValue = '4';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    displayValue = '5';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    displayValue = '6';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    displayValue = '7';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    displayValue = '8';
    total = displayValue;
    displayArea.textContent += displayValue;
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    displayValue = '9';
    total = displayValue;
    displayArea.textContent += displayValue;
});

//Event Listeners for operator, clear, and equal buttons
const addition = document.querySelector('.addition');
addition.addEventListener('click', () => {
    firstNumber = displayArea.innerText;
    operator = 1;
});

const subtraction = document.querySelector('.subtraction');
subtraction.addEventListener('click', () => {
    firstNumber = displayArea.innerText;
    operator = 2;
});

const multiplication = document.querySelector('.multiplication');
multiplication.addEventListener('click', () => {
    firstNumber = displayArea.innerText;
    operator = 3;
});

const division = document.querySelector('.division');
division.addEventListener('click', () => {
    firstNumber = displayArea.innerText;
    operator = 4;
});

const power = document.querySelector('.power');
power.addEventListener('click', () => {
    firstNumber = displayArea.innerText;
    operator = 5;
});

const remainder = document.querySelector('.remainder');
remainder.addEventListener('click', () => {
    firstNumber = displayArea.innerText; 
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
