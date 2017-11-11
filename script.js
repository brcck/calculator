class Calculator {

  constructor() {
    this.first = null;
    this.second = null;
    this.mode = null;
  }

  set input(input) {
    input = String(input);
    if (this.mode === null) {
      this.first === null ?
        this.first = input :
        this.first += input;
      this.first = Number(this.first);
    } else if (this.mode !== null) {
      this.second === null ?
        this.second = input :
        this.second += input;
      this.second = Number(this.second);
    }
  }

  get symbol() {
    if (!this.mode) return;

    switch (this.mode) {
      case "add":
        return " + ";
      case "subtract":
        return " - ";
      case "multiply":
        return " × ";
      case "divide":
        return " ÷ ";
    }
  }

  get value() {
    let value;
    if (!this.first) {
      return "0";
    } else {
      value = String(this.first);
      if (this.mode) {
        value += this.symbol;
        if (this.second) {
          value += String(this.second);
        }
      }
    }
    return value;
  }

  evaluate() {
    if (!this.mode || !this.first || !this.second) return;
    let result;
    switch (this.mode) {
      case "add":
        result = this.first + this.second;
        break;
      case "subtract":
        result = this.first - this.second;
        break;
      case "multiply":
        result = this.first * this.second;
        break;
      case "divide":
        result = this.first / this.second;
        break;
    }
    this.first = result;
    this.second = null;
    this.mode = null;
  }
}

function calculate() {
  calculator.evaluate();
  updateDisplay();
}

function clear() {
  calculator.first = null;
  calculator.second = null;
  calculator.mode = null;
  updateDisplay();
}

function number(e) {
  calculator.input = Number(e.currentTarget.id);
  updateDisplay();
}

function switchMode(e) {
  calculator.mode = e.currentTarget.id;
  updateDisplay();
}

function updateDisplay() {
  display.value = calculator.value;
}

let main = [...document.querySelectorAll(".main > button")];
let operators = [...document.querySelectorAll(".operators > button")];
let display = document.querySelector(".display");
let calculator = new Calculator();



for (let i = 0; i < main.length; i++) {
  if (!isNaN(main[i].id)) main[i].addEventListener("click", number);
}

// i = 1 to skip the clear button.
for (let i = 1; i < operators.length; i++) {
  operators[i].addEventListener("click", switchMode); // button id = function
}

document.querySelector("#clear").addEventListener("click", clear);
document.querySelector("#dot").addEventListener("click", number);
document.querySelector("#equals").addEventListener("click", calculate);
