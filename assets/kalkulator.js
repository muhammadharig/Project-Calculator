// Membuat Object
const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};

// membuat fungsi Update Dispplay
function updateDisplay() {
  document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
}

// membuat fungsi Clear Calculator
function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

// membuat fungsi input digit
function inputDigit(digit) {
  calculator.displayNumber += digit;
}
