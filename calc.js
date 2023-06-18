const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const input1 = document.querySelector(".input1");
const equal = document.querySelector("#equal");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const clear = document.querySelector(".clr");

let operatorClicked = false;

function results(e) {
  input.value += e.target.value;
}

// For each number button
btn.forEach((btn) => {
  btn.addEventListener("click", results);
});
function events(e){
    if (operatorClicked) {
      calculate();
    }

    input.value += e.target.value;
    operatorClicked = true;
  }
// For each operator button
operators.forEach((operator) => {
  operator.addEventListener("click",events) 
});

function calculate() {
  const expression = input.value;
  const result = eval(expression);
  input1.value = expression;
  input.value = result;
}

function delete1() {
  input.value = input.value.slice(0, -1);
}

function delete2() {
  input.value = "";
  input1.value = "";
}

del.addEventListener("click", delete1);
clear.addEventListener("click", delete2);
equal.addEventListener("click", calculate);
