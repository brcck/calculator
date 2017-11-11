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
  console.log("hi");
  display.value === "0" ?
    display.value = e.currentTarget.id :
    display.value += e.currentTarget.id;

}

let buttons = [...document.querySelectorAll("button")];
let display = document.querySelector(".display");

for (let i = 0; i < buttons.length; i++) {
  isNaN(buttons[i].id) ?
    buttons[i].addEventListener("click", buttons[i].id): // button id = function
    buttons[i].addEventListener("click", number);
}
