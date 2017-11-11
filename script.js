class Display {

  constructor() {
    this.first = null;
    this.second = null;
    this.mode = null;
  }

  set input(input) {
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
}

function switchMode(e) {
  display.mode = e.currentTarget.id;
  output.value = display.value;
}

function calculate(mode) {
  if (mode === null) return;
  switch (mode) {
    case "add":
      display.value = add(first, second);
      break;
    case "subtract":
      display.value = subtract(first, second);
      break;
    case "multiply":
      display.value = multiply(first, second);
      break;
    case "divide":
      display.value = divide(first, second);
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function number(e) {
  display.input = e.currentTarget.id;
  output.value = display.value;
}

let main = [...document.querySelectorAll(".main > button")];
let operators = [...document.querySelectorAll(".operators > button")];
let output = document.querySelector(".display");
let display = new Display();



for (let i = 0; i < main.length; i++) {
  if (!isNaN(main[i].id)) main[i].addEventListener("click", number);
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", switchMode); // button id = function
}

document.querySelector("#dot").addEventListener("click", number);
document.querySelector("#equals").addEventListener("click", calculate);
