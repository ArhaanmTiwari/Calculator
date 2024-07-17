var second_number = 0;
var first_number = 0;
var total = 0;
var number = "";
var operation = "";
console.log("hi this is aaru");

function one() {
  number = number + "1";
}
function two() {
  number = number + "2";
}
function three() {
  number = number + "3";
}
function four() {
  number = number + "4";
}
function five() {
  number = number + "5";
}
function six() {
  number = number + "6";
}
function seven() {
  number = number + "7";
}
function eight() {
  number = number + "8";
}
function nine() {
  number = number + "9";
}
function zero() {
  number = number + "0";
}
function set_it_to_first_number() {
  document.getElementById("first_number").value = Number(number);
}
function set_it_to_second_number() {
  document.getElementById("second_number").value = Number(number);
}
function adding() {
  operation = "addition";
}
function subtract() {
  operation = "subtraction";
}
function multiplying() {
  operation = "multiplication";
}
function dividing() {
  operation = "division";
}
function get_total() {
  console.log(operation);
  first_number = Number(document.getElementById("first_number").value);
  second_number = Number(document.getElementById("second_number").value);
  if (operation == "addition") {
    total = first_number + second_number;
    operation = "";
  }
  if (operation == "subtraction") {
    total = first_number - second_number;
    operation = "";
  }
  if (operation == "multiplication") {
    total = first_number * second_number;
    operation = "";
  }
  if (operation == "division") {
    total = first_number / second_number;
    operation = "";
  }
  document.getElementById("total").innerHTML = "Total = " + total;
}
function clearInput() {
  console.log("vsdgfsdfsdf");
  document.getElementById("first_number").value = "";
  document.getElementById("second_number").value = "";
}

// Convert number into a string
let numberStr = number1.toString();

// Replace the 0 with empty string
const res = numberStr.replace(numberStr[3] + "");

// Convert string into a number.
console.log(Number(res));
