function sum(a, b) {
  return a + b;
}

// Here we pass a function as an argument.
function doOperation(a, b, operation) {
  return operation(a, b);
}

console.log(doOperation(2, 1, sum));
