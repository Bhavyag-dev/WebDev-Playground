function sum(a, b) {
  return a + b;
}

function doOperation(a, b, operation) {
  return operation(a, b);
}

console.log(doOperation(2, 1, sum));
