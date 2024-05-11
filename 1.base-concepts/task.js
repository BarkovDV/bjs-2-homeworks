"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } else if (d == 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}

solveEquation(1, 5, 4)

function calculateTotalMortgage (percent, contribution, amount, countMonths) {
  let p = percent/100/12;
  let payment = amount - contribution;
  let monthlyPayment = payment * (p + (p / (((1 + p)**countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}

calculateTotalMortgage(10, 0, 50000, 12);