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

// button
const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    // mendapatakan objek element yang diklik
    const target = event.target;

    inputDigit(target.innerHTML);
    updateDisplay();
  });
}
