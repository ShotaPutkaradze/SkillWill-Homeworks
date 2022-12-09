//დავალება 1
function compare(a, b) {
  if (a == b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}
console.log(compare(5, 5)); // ტოლია

//დავალება 2
function celsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return false;
  } else {
    return (fahrenheit - 32) / 1.8;
  }
}
console.log(celsius(40)); //  4.444444444444445

//დავალება 3
function math(a, b, operator) {
  if (operator === "+" && typeof a == "number" && typeof b == "number") {
    return a + b;
  } else if (operator === "-" && typeof a == "number" && typeof b == "number") {
    return a - b;
  } else if (operator === "/" && typeof a == "number" && typeof b == "number") {
    return a / b;
  } else if (operator === "*" && typeof a == "number" && typeof b == "number") {
    return a * b;
  } else {
    return false;
  }
}
console.log(math(9, 3, "*")); // 27
console.log(math(9, "n", "*")); // false
