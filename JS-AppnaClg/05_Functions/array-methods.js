let nums = [1, 2, 3, 4, 5];

// forEach runs a function for every array value.
nums.forEach(function (num) {
  console.log(num * num);
});

// filter keeps only the values that match the condition.
let evenNums = nums.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNums);
