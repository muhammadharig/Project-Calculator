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
