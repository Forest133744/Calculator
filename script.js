let currentInput= '';
let previousInput = '';
let operator = null;
let result = null;




function handleNumber(value) {
  currentInput += value;
  updateDisplay(currentInput);
}



function handleOperator(op) {
  if (currentInput === '') return;
  previousInput = currentInput;
  currentInput = '';
  operator = op;
}



function calculate() {
  let a = parseFloat(previousInput);
  let b = parseFloat(currentInput);
  if (operator === '+') result = a + b;
  else if (operator === '-') result = a - b;
  else if (operator === '*') result = a * b;
  else if (operator === '/') result = b !== 0 ? a / b : 'Error';
  
  updateDisplay(result);
  currentInput = result.toString();
  operator = null;
  previousInput = '';
}



function clearAll() {
  currentInput = '';
  previousInput = '';
  operator = null;
  result = null;
  updateDisplay('0');
}



const buttons = document.querySelectorAll('.keypap');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === '.') {
      handleNumber(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    } else if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearAll();
    }
  });
});


function updateDisplay(content) {
  document.querySelector('.screen').textContent = content;
}

