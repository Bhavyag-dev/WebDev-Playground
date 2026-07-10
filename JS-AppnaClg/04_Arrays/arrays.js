let fruits = ["apple", "banana", "mango", "pineapple"];

// Arrays store multiple values in one variable.
console.log(fruits);
console.log(fruits.length);

// Standard for loop on an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for-of gives each value directly
for (let fruit of fruits) {
  console.log(fruit);
}

// slice gives part of an array
console.log(fruits.slice(1, 3));

let companies = ["Bloomberg", "Microsoft", "Uber", "Google"];

// splice can remove and replace values
companies.splice(2, 1, "Ola");
console.log(companies);

let arr = [1, 2, 3, 4, 5];

// Replace one value at index 2
arr.splice(2, 1, 10);
console.log(arr);
