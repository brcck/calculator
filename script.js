class Calculator {

  constructor() {
    this.first = null;
    this.second = null;
    this.mode = null;
    this.decimal = {first: false, second: false};
    this.resultDisplayed = false;
  }

  set input(input) {
    if (this.resultDisplayed) {
      this.first = null;
      this.resultDisplayed = false;
    }

    input = String(input);
    if (this.mode === null) {
      this.first === null ?
        this.first = input :
        this.first += input;
    } else if (this.mode !== null) {
      this.second === null ?
        this.second = input :
        this.second += input;
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
      value = this.first;
      if (this.mode) {
        value += this.symbol;
        if (this.second) {
          value += this.second;
        }
      }
    }
    return value;
  }

  addDecimal() {
    if (!this.mode && !this.decimal.first) {
      this.decimal.first = true;
      if (this.first === null) {
        this.first = "0.";
      } else {
        this.first += ".";
      }
    } else if (this.mode && !this.decimal.second) {
      this.decimal.second = true;
      if (this.second === null) {
        this.second = "0.";
      } else {
        this.second += ".";
      }
    }
  }

  evaluate() {
    if (!this.mode || !this.first || !this.second) return;
    let first = Number(this.first);
    let second = Number(this.second);
    let result;
    switch (this.mode) {
      case "add":
        result = first + second;
        break;
      case "subtract":
        result = first - second;
        break;
      case "multiply":
        result = first * second;
        break;
      case "divide":
        if (second === 0) {
          divideByZero();
          break;
        }
        result = first / second;
        result = result.toFixed(6);
        break;
    }

    this.first = String(result);
    this.result();
  }

  result() {
    if (this.first.indexOf(".") === -1) {
      this.decimal.first = false;
    } else {
      this.decimal.first = true;
    }

    this.decimal.second = false;
    this.second = null;
    this.mode = null;
    this.resultDisplayed = true;
  }
}

function del() {
  if (!calculator.first) return;
  calculator.mode ?
    calculator.second = calculator.second.slice(0, -1) :
    calculator.first = calculator.first.slice(0, -1);
  updateDisplay();
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

function dot() {
  calculator.addDecimal();
  updateDisplay();
}

function divideByZero() {
  // TODO
}

function number(e) {
  calculator.input = Number(e.currentTarget.id);
  updateDisplay();
}

function switchMode(e) {
  if (calculator.first === null) return;
  calculator.resultDisplayed = false;
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
document.querySelector("#del").addEventListener("click", del);
document.querySelector("#dot").addEventListener("click", dot);
document.querySelector("#equals").addEventListener("click", calculate);
