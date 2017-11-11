function switchMode(e) {

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
  display.value === "0" ?
    display.value = e.currentTarget.id :
    display.value += e.currentTarget.id;
  if (mode === null) {
    first === null ?
      first = e.currentTarget.id :
      first += e.currentTarget.id;
  } else if (mode !== null) {
    second === null ?
      second = e.currentTarget.id :
      second += e.currentTarget.id;
  }
}

let main = [...document.querySelectorAll(".main > button")];
let operators = [...document.querySelectorAll(".operators > button")];
let display = document.querySelector(".display");
let mode = null;
let first = null;
let second = null;

for (let i = 0; i < main.length; i++) {
  if (!isNaN(main[i].id)) main[i].addEventListener("click", number);
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", switchMode); // button id = function
}

document.querySelector("#dot").addEventListener("click", number);
document.querySelector("#equals").addEventListener("click", calculate);
