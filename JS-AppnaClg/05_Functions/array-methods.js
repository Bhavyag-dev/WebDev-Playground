let nums = [1, 2, 3, 4, 5];

nums.forEach(function (num) {
  console.log(num * num);
});

let evenNums = nums.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNums);
