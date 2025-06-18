let currentValue = '';
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.keypap');
const equalsButton = document.querySelector('.equals');

function Display(value) {
  currentValue += value;
  screen.textContent = currentValue;
}

function handleOperator(operator) {
  if (currentValue === '') return;
  firstNumber = currentValue;
  currentOperator = operator;
  currentValue = '';
}

function evaluate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return 'Error';
  }
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;

    if (value === 'C' || value === 'CE' || value === 'M') 
        value = '';

    if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    } else {
      Display(value);
    }
  });
});

equalsButton.addEventListener('click', () => {
  if (currentOperator && currentValue !== '') {
    secondNumber = currentValue;
    const result = evaluate(firstNumber, secondNumber, currentOperator);
    screen.textContent = result;
    currentValue = result;
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
  }
});
