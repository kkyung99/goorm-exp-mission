let num1 = 15;
let num2 = 2;

const sum = num1 + num2;
const minus = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;
const remainder = num1 % num2;

let a = 10;
let b = 20;
let c = 10;
let f = 20;

const greaterThan = a > b;
const lessThan = a < b;
const greaterOrEqual = a >= b;
const lessOrEqual = a <= b;
const equalTo = a == c;
const notEqualTo = a != b;
const strictEqualTo = a === c;
const strictNotEqualTo = a !== f;

document.addEventListener("DOMContentLoaded", () => {
  // 산술연산자
  const resultElement = document.getElementById("result");
  resultElement.textContent = `덧셈: ${sum}, 뺄셈: ${minus}, 곱셈: ${multiply}, 나눗셈: ${divide}, 나머지: ${remainder}`;

  // 비교연산자
  document.getElementById("greaterThan").textContent = `a > b: ${greaterThan}`;
  document.getElementById("lessThan").textContent = `a < b: ${lessThan}`;
  document.getElementById(
    "greaterOrEqual"
  ).textContent = `a >= b: ${greaterOrEqual}`;
  document.getElementById("lessOrEqual").textContent = `a <= b: ${lessOrEqual}`;
  document.getElementById("equalTo").textContent = `a == c: ${equalTo}`;
  document.getElementById("notEqualTo").textContent = `a != b: ${notEqualTo}`;
  document.getElementById(
    "strictEqualTo"
  ).textContent = `a === c: ${strictEqualTo}`;
  document.getElementById(
    "strictNotEqualTo"
  ).textContent = `a !== f: ${strictNotEqualTo}`;
});
