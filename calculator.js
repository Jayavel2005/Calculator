let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function calculator(value) {
  // Prevent multiple consecutive operators
  if (isOperator(value) && isOperator(calculation.slice(-1))) {
    return;
  }

  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-result-display').innerHTML = calculation || '0';
}

function clearDisplay() {
  calculation = '';
  displayCalculation();
  localStorage.removeItem('calculation');
}

function calculateResult() {
  try {
    calculation = parseFloat(eval(calculation)).toFixed(2).toString();
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  } catch (e) {
    calculation = 'Error';
    displayCalculation();
  }
}

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}
