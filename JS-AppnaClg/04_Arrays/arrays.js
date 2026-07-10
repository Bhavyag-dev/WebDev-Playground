let fruits = ["apple", "banana", "mango", "pineapple"];

console.log(fruits);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

console.log(fruits.slice(1, 3));

let companies = ["Bloomberg", "Microsoft", "Uber", "Google"];
companies.splice(2, 1, "Ola");
console.log(companies);

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 10);
console.log(arr);
