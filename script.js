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
    
    //Brings up 0 when variables already have values
    if(displayValue && firstNumber > 0) {
        displayArea.textContent = 0;
    } 
    else {
        displayValue += '0';
    }

    //Keeps 0 from blanking out when variables don't have 0
    if(displayValue && firstNumber == 0) {
        displayArea.textContent = 0;
    } 
    else {
        displayValue += '0';
    }

    //Gets rid of leading zeros
    displayArea.textContent = displayValue.replace(/^0+/, '')

    //Makes 0 populate the display when multiplying by 0
    if(operator === 3) {
        displayArea.textContent = 0;
    } 

});

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '1';
    displayArea.textContent = displayValue.replace(/^0+/, '');
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '2';
    displayArea.textContent = displayValue.replace(/^0+/, '')
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '3';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '4';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '5';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '6';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '7';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '8';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    if(displayValue === '') {
        displayArea.textContent = '';
    };
    displayValue += '9';
    displayArea.textContent = displayValue.replace(/^0+/, '')

});

//Event Listeners for operator, clear, and equal buttons
const addition = document.querySelector('.addition');
addition.addEventListener('click', () => {
    //Sets intial value for firstNumber
    if(firstNumber === 0){
        firstNumber = displayValue.replace(/^0+/, '')
    };
    //Displays results from most recent equation e.g. 5 + 2 - 1 .. Would show 7 when clicking the -
    if(firstNumber && displayValue > 0) {
        displayArea.textContent = firstNumber;
    }
    //updates display to have the current total of the equation
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = firstNumber;
    }
    displayValue = '';
    operator = 1;
});

const subtraction = document.querySelector('.subtraction');
subtraction.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue.replace(/^0+/, '')
    };
    if(firstNumber && displayValue > 0) {
        displayArea.textContent = firstNumber;
    }
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = firstNumber;
    }
    displayValue = '';
    operator = 2;
});

const multiplication = document.querySelector('.multiplication');
multiplication.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue.replace(/^0+/, '')
    };
    if(firstNumber && displayValue > 0) {
        displayArea.textContent = firstNumber;
    }
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = firstNumber;
    }
    displayValue = '';
    operator = 3;
});

const division = document.querySelector('.division');
division.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue.replace(/^0+/, '')
    };
    if(firstNumber && displayValue > 0) {
        displayArea.textContent = firstNumber;
    }
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = firstNumber;
    }
    displayValue = '';
    operator = 4;
});

const power = document.querySelector('.power');
power.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue.replace(/^0+/, '')
    };
    if(firstNumber && displayValue > 0) {
        displayArea.textContent = firstNumber;
    }
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = firstNumber;
    }
    displayValue = '';
    operator = 5;
});

const remainder = document.querySelector('.remainder');
remainder.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = displayValue.replace(/^0+/, '')
    };
    if(firstNumber && displayValue > 0) {
        displayArea.textContent = firstNumber;
    }
    if(operator > 0) {
        operate(operator)
        displayArea.textContent = firstNumber;
    }
    displayValue = '';    
    operator = 6;
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayArea.textContent = operate(operator);
    displayValue = '';
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayArea.textContent = 0;
    displayValue = 0;
    firstNumber = 0;
    operator = 0;
});
