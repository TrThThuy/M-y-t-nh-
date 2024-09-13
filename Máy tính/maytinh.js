let currentInput = '';

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
    currentInput += number;
}

function setOperation(operator) {
    const display = document.getElementById('display');
    display.value += operator;
    currentInput += operator;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    currentInput = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    currentInput = currentInput.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(currentInput);
    currentInput = display.value;
}

