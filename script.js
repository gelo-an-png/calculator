let calculatorCurrentValue = '0';
let calculatorPreviousValue = '';
let calculatorOperator = '';
let calculatorShouldReset = false;

function calculatorUpdateDisplay() {
    const display = document.getElementById('calculator-display');
    if (display) {
        if (calculatorOperator && calculatorPreviousValue) {
            if (calculatorShouldReset) {
                display.textContent = calculatorPreviousValue + ' ' + calculatorGetOperatorSymbol(calculatorOperator);
            } else {
                display.textContent = calculatorPreviousValue + ' ' + calculatorGetOperatorSymbol(calculatorOperator) + ' ' + calculatorCurrentValue;
            }
        } else {
            display.textContent = calculatorCurrentValue;
        }
    }
}

function calculatorGetOperatorSymbol(operator) {
    switch (operator) {
        case '+':
            return '+';
        case '-':
            return '-';
        case '*':
            return '×';
        case '/':
            return '/';
        default:
            return operator;
    }
}

function calculatorClearError() {
    const errorElement = document.getElementById('calculator-error');
    if (errorElement) {
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    }
}

function calculatorShowError(message) {
    const errorElement = document.getElementById('calculator-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function calculatorSetButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// ito yung function para magprocess ng input ng user bale mag check lang if tama ba yung input ng user
function calculatorProcessInput(value) {
    calculatorClearError();
    
    if (calculatorShouldReset) {
        calculatorCurrentValue = '0';
        calculatorShouldReset = false;
    }
    
    if (value === '.') {
        if (calculatorCurrentValue.includes('.')) {
            return;
        }
        if (calculatorCurrentValue === '0') {
            calculatorCurrentValue = '0.';
        } else {
            calculatorCurrentValue += '.';
        }
    } else {
        if (calculatorCurrentValue === '0') {
            calculatorCurrentValue = value;
        } else {
            calculatorCurrentValue += value;
        }
    }
    
    calculatorUpdateDisplay();
}

// dito yung function para mag set ng operator bale mag check lang if tama ba yung operator ng user
function calculatorSetOperator(operator) {
    calculatorClearError();
    
    if (calculatorPreviousValue && calculatorOperator && !calculatorShouldReset) {
        calculatorPerformCalculation();
    } else {
        calculatorPreviousValue = calculatorCurrentValue;
    }
    
    calculatorOperator = operator;
    calculatorShouldReset = true;
    calculatorUpdateDisplay();
}

// dito yung function para mag perform ng calculation  
function calculatorPerformCalculation() {
    if (!calculatorPreviousValue || !calculatorOperator) {
        return;
    }
    
    const prev = parseFloat(calculatorPreviousValue);
    const current = parseFloat(calculatorCurrentValue);
    
    if (isNaN(prev) || isNaN(current)) {
        calculatorShowError('Invalid calculation');
        calculatorResetCalculator();
        return;
    }
    
    let result;
    
    switch (calculatorOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                calculatorShowError('Cannot divide by zero');
                calculatorResetCalculator();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    result = Math.round(result * 100000000) / 100000000;
    calculatorCurrentValue = result.toString();
    calculatorPreviousValue = '';
    calculatorOperator = '';
    calculatorShouldReset = true;
    calculatorUpdateDisplay();
}

// dito yung function para mag reset ng calculator, mag rereset lang yung laman ng calculator
function calculatorResetCalculator() {
    calculatorCurrentValue = '0';
    calculatorPreviousValue = '';
    calculatorOperator = '';
    calculatorShouldReset = false;
    calculatorUpdateDisplay();
    calculatorClearError();
}

function calculatorHandleNumberClick(event) {
    const button = event.currentTarget;
    const number = button.getAttribute('data-number');
    
    calculatorSetButtonLoading(button, true);
    
    setTimeout(function() {
        calculatorProcessInput(number);
        calculatorSetButtonLoading(button, false);
    }, 150);
}

function calculatorHandleOperatorClick(event) {
    const button = event.currentTarget;
    const operator = button.getAttribute('data-operator');
    
    calculatorSetButtonLoading(button, true);
    
    setTimeout(function() {
        calculatorSetOperator(operator);
        calculatorSetButtonLoading(button, false);
    }, 150);
}

function calculatorHandleEqualsClick(event) {
    const button = event.currentTarget;
    
    calculatorSetButtonLoading(button, true);
    
    setTimeout(function() {
        calculatorPerformCalculation();
        calculatorSetButtonLoading(button, false);
    }, 200);
}

function calculatorHandleClearClick(event) {
    const button = event.currentTarget;
    
    calculatorSetButtonLoading(button, true);
    
    setTimeout(function() {
        calculatorResetCalculator();
        calculatorSetButtonLoading(button, false);
    }, 150);
}


function calculatorSetupEventListeners() {
    const numberButtons = document.querySelectorAll('.calculator-btn-number');
    const operatorButtons = document.querySelectorAll('.calculator-btn-operator');
    const equalsButton = document.getElementById('calculator-equals');
    const clearButton = document.getElementById('calculator-clear');
    
    numberButtons.forEach(function(button) {
        button.addEventListener('click', calculatorHandleNumberClick);
    });
    
    operatorButtons.forEach(function(button) {
        button.addEventListener('click', calculatorHandleOperatorClick);
    });
    
    if (equalsButton) {
        equalsButton.addEventListener('click', calculatorHandleEqualsClick);
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', calculatorHandleClearClick);
    }
}

calculatorSetupEventListeners();
calculatorUpdateDisplay();

