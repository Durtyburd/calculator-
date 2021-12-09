"use strict";

//Variables
document.querySelector(".button-1").textContent = 1;
const one = document.querySelector(".button-1");
const two = document.querySelector(".button-2");
const three = document.querySelector(".button-3");
const four = document.querySelector(".button-4");
const five = document.querySelector(".button-5");
const six = document.querySelector(".button-6");
const seven = document.querySelector(".button-7");
const eight = document.querySelector(".button-8");
const nine = document.querySelector(".button-9");
const zero = document.querySelector(".button-0");
const square = document.querySelector(".button-square");
const period = document.querySelector(".button-period");
const add = document.querySelector(".button-add");
const subtract = document.querySelector(".button-subtract");
const multiply = document.querySelector(".button-multiply");
const divide = document.querySelector(".button-divide");
const equal = document.querySelector(".button-equal");
const clear = document.querySelector(".button-clear");
const result = document.querySelector(".result");

//Storage var
let arr1 = [];
let arr2 = [];
let operator = "";

//Functions
const combiningArr1 = function (push) {
  arr1.push(push);
  const numbers1 = arr1.join("");
  const numbersA = Number(numbers1);
  result.textContent = numbers1;
  console.log(numbersA);
  console.log(arr1);
  console.log(arr2);
};

const arrSwitch = function () {
  arr2 = arr1;
  arr1 = [];
  result.textContent = 0;
  console.log(arr1);
  console.log(arr2);
};

const calcAdd = function () {
  const numbers1 = arr1.join("");
  const numbersA = Number(numbers1);
  const numbers2 = arr2.join("");
  const numbersB = Number(numbers2);
  result.textContent = numbersB + numbersA;
};

const calcSubtract = function () {
  const numbers1 = arr1.join("");
  const numbersA = Number(numbers1);
  const numbers2 = arr2.join("");
  const numbersB = Number(numbers2);
  result.textContent = numbersB - numbersA;
};

const calcMultiply = function () {
  const numbers1 = arr1.join("");
  const numbersA = Number(numbers1);
  const numbers2 = arr2.join("");
  const numbersB = Number(numbers2);
  result.textContent = numbersB * numbersA;
};

const calcDivide = function () {
  const numbers1 = arr1.join("");
  const numbersA = Number(numbers1);
  const numbers2 = arr2.join("");
  const numbersB = Number(numbers2);
  result.textContent = numbersB / numbersA;
};

const calcSquare = function () {
  const numbers1 = arr1.join("");
  const numbersA = Number(numbers1);
  result.textContent = numbersA * numbersA;
};

//Functionality
//1. Make numbers appear when clicked
one.addEventListener("click", function () {
  combiningArr1(1);
});
two.addEventListener("click", function () {
  combiningArr1(2);
});
three.addEventListener("click", function () {
  combiningArr1(3);
});
four.addEventListener("click", function () {
  combiningArr1(4);
});
five.addEventListener("click", function () {
  combiningArr1(5);
});
six.addEventListener("click", function () {
  combiningArr1(6);
});
seven.addEventListener("click", function () {
  combiningArr1(7);
});
eight.addEventListener("click", function () {
  combiningArr1(8);
});
nine.addEventListener("click", function () {
  combiningArr1(9);
});
zero.addEventListener("click", function () {
  combiningArr1(0);
});
period.addEventListener("click", function () {
  combiningArr1(".");
});
square.addEventListener("click", function () {
  calcSquare();
});

add.addEventListener("click", function () {
  arrSwitch();
  operator = "add";
});
subtract.addEventListener("click", function () {
  arrSwitch();
  operator = "subtract";
});
multiply.addEventListener("click", function () {
  arrSwitch();
  operator = "multiply";
});
divide.addEventListener("click", function () {
  arrSwitch();
  operator = "divide";
});
clear.addEventListener("click", function () {
  arr1 = [];
  arr2 = [];
  result.textContent = 0;
});
equal.addEventListener("click", function (letter) {
  switch (operator) {
    case "add":
      calcAdd();
      break;
    case "subtract":
      calcSubtract();
      break;
    case "multiply":
      calcMultiply();
      break;
    case "divide":
      calcDivide();
  }
  //IF STATEMENT BELOW... SWITCH USED ABOVE
  /*
  if (operator === "add") {
    calcAdd();
  } else if (operator === "subtract") {
    calcSubtract();
  } else if (operator === "multiply") {
    calcMultiply();
  } else if (operator === "divide") {
    calcDivide();
  } */
});
