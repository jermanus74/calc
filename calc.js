const btn = document.querySelectorAll(".btn:not(#equal)");
const input = document.querySelector(".input");
const equal = document.querySelector("#equal");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".del");
const clear=document.querySelector(".clr")


function results(e) {
  input.value += e.target.value;
}

btn.forEach((btn) => {
  btn.addEventListener("click", results);
});

operators.forEach((operator) => {
  operator.addEventListener("click", results);
});

calculate = function calc() {
  const expression = input.value;
  const result = eval(expression);
  input.value = ` ${result}`;
};

function delete1() {
  input.value = input.value.slice(0, -1);
}
function delete2() {
  input.value = "";
}
del.addEventListener("click", delete1);
clear.addEventListener("click", delete2);

equal.addEventListener("click", calculate);
